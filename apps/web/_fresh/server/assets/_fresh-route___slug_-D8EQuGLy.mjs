import { C as C$1, l as l$1, k as k$2, S, F as F$1, d as d$1, A as A$2, h as h$1, T as T$1, _, a as F$2, g as g$2, y as y$1, P as P$1, x as x$2, q as q$2, M as M$1, X as X$2, W as W$1, R as R$1, U as U$1, b as b$2, u, c as define, e as a, s, p as page } from "../server-entry.mjs";
import os from "node:os";
import fs from "node:fs";
import net from "node:net";
import tls from "node:tls";
import crypto from "node:crypto";
import Stream from "node:stream";
import { performance as performance$1 } from "node:perf_hooks";
function g$1(n2, t2) {
  for (var e2 in t2) n2[e2] = t2[e2];
  return n2;
}
function E(n2, t2) {
  for (var e2 in n2) if ("__source" !== e2 && !(e2 in t2)) return true;
  for (var r2 in t2) if ("__source" !== r2 && n2[r2] !== t2[r2]) return true;
  return false;
}
function C(n2, t2) {
  var e2 = t2(), r2 = d$1({
    t: {
      __: e2,
      u: t2
    }
  }), u2 = r2[0].t, o = r2[1];
  return _(function() {
    u2.__ = e2, u2.u = t2, R(u2) && o({
      t: u2
    });
  }, [n2, e2, t2]), y$1(function() {
    return R(u2) && o({
      t: u2
    }), n2(function() {
      R(u2) && o({
        t: u2
      });
    });
  }, [n2]), e2;
}
function R(n2) {
  try {
    return !((t2 = n2.__) === (e2 = n2.u()) && (0 !== t2 || 1 / t2 == 1 / e2) || t2 != t2 && e2 != e2);
  } catch (n3) {
    return true;
  }
  var t2, e2;
}
function x$1(n2) {
  n2();
}
function w$1(n2) {
  return n2;
}
function k$1() {
  return [false, x$1];
}
var I = _;
function M(n2, t2) {
  this.props = n2, this.context = t2;
}
function N(n2, e2) {
  function r2(n3) {
    var t2 = this.props.ref;
    return t2 != n3.ref && t2 && ("function" == typeof t2 ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || t2 != n3.ref : E(this.props, n3);
  }
  function u2(e3) {
    return this.shouldComponentUpdate = r2, k$2(n2, e3);
  }
  return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.__f = u2.prototype.isReactComponent = true, u2.type = n2, u2;
}
(M.prototype = new C$1()).isPureReactComponent = true, M.prototype.shouldComponentUpdate = function(n2, t2) {
  return E(this.props, n2) || E(this.state, t2);
};
var T = l$1.__b;
l$1.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T && T(n2);
};
var A$1 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function D(n2) {
  function t2(t3) {
    var e2 = g$1({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = A$1, t2.render = n2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var F = function(n2, t2) {
  return null == n2 ? null : F$1(F$1(n2).map(t2));
}, L = {
  map: F,
  forEach: F,
  count: function(n2) {
    return n2 ? F$1(n2).length : 0;
  },
  only: function(n2) {
    var t2 = F$1(n2);
    if (1 !== t2.length) throw "Children.only";
    return t2[0];
  },
  toArray: F$1
}, O = l$1.__e;
l$1.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o = t2; o = o.__; ) if ((u2 = o.__c) && u2.__c) return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  O(n2, t2, e2, r2);
};
var U = l$1.unmount;
function V(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g$1({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c.__e = true, n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return V(n3, t2, e2);
  })), n2;
}
function W(n2, t2, e2) {
  return n2 && e2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return W(n3, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function P() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j(n2) {
  var t2 = n2.__ && n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function z$1(n2) {
  var e2, r2, u2, o = null;
  function i(i2) {
    if (e2 || (e2 = n2()).then(function(n3) {
      n3 && (o = n3.default || n3), u2 = true;
    }, function(n3) {
      r2 = n3, u2 = true;
    }), r2) throw r2;
    if (!u2) throw e2;
    return o ? k$2(o, i2) : null;
  }
  return i.displayName = "Lazy", i.__f = true, i;
}
function B() {
  this.i = null, this.l = null;
}
l$1.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && (t2.__z = true), t2 && t2.__R && t2.__R(), t2 && 32 & n2.__u && (n2.type = null), U && U(n2);
}, (P.prototype = new C$1()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  null == r2.o && (r2.o = []), r2.o.push(e2);
  var u2 = j(r2.__v), o = false, i = function() {
    o || r2.__z || (o = true, e2.__R = null, u2 ? u2(c2) : c2());
  };
  e2.__R = i;
  var l2 = e2.__P;
  e2.__P = null;
  var c2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = W(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({
        __a: r2.__b = null
      }); t3 = r2.o.pop(); ) t3.__P = l2, t3.forceUpdate();
    }
  };
  r2.__u++ || 32 & t2.__u || r2.setState({
    __a: r2.__b = r2.__v.__k[0]
  }), n2.then(i, i);
}, P.prototype.componentWillUnmount = function() {
  this.o = [];
}, P.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = V(this.__b, r2, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e2.__a && k$2(S, null, n2.fallback);
  return i && (i.__u &= -33), [k$2(S, null, e2.__a ? null : n2.children), i];
};
var H = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.l.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e2 = n2.i; e2; ) {
    for (; e2.length > 3; ) e2.pop()();
    if (e2[1] < e2[0]) break;
    n2.i = e2 = e2[2];
  }
};
function Z(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function Y(n2) {
  var e2 = this, r2 = n2.h;
  if (e2.componentWillUnmount = function() {
    R$1(null, e2.v), e2.v = null, e2.h = null;
  }, e2.h && e2.h !== r2 && e2.componentWillUnmount(), !e2.v) {
    for (var u2 = e2.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
    e2.h = r2, e2.v = {
      nodeType: 1,
      parentNode: r2,
      childNodes: [],
      __k: {
        __m: u2.__m
      },
      contains: function() {
        return true;
      },
      namespaceURI: r2.namespaceURI,
      insertBefore: function(n3, t2) {
        this.childNodes.push(n3), e2.h.insertBefore(n3, t2);
      },
      removeChild: function(n3) {
        this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.h.removeChild(n3);
      }
    };
  }
  R$1(k$2(Z, {
    context: e2.context
  }, n2.__v), e2.v);
}
function $(n2, e2) {
  var r2 = k$2(Y, {
    __v: n2,
    h: e2
  });
  return r2.containerInfo = e2, r2;
}
(B.prototype = new C$1()).__a = function(n2) {
  var t2 = this, e2 = j(t2.__v), r2 = t2.l.get(n2);
  return r2[0]++, function(u2) {
    var o = function() {
      t2.props.revealOrder ? (r2.push(u2), H(t2, n2, r2)) : u2();
    };
    e2 ? e2(o) : o();
  };
}, B.prototype.render = function(n2) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t2 = F$1(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; ) this.l.set(t2[e2], this.i = [1, 0, this.i]);
  return n2.children;
}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
  var n2 = this;
  this.l.forEach(function(t2, e2) {
    H(n2, e2, t2);
  });
};
var q$1 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K = /[A-Z0-9]/g, Q = "undefined" != typeof document, X$1 = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof /* @__PURE__ */ Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function nn(n2, t2, e2) {
  return null == t2.__k && (t2.textContent = ""), R$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
function tn(n2, t2, e2) {
  return U$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
C$1.prototype.isReactComponent = true, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(C$1.prototype, t2, {
    configurable: true,
    get: function() {
      return this["UNSAFE_" + t2];
    },
    set: function(n2) {
      Object.defineProperty(this, t2, {
        configurable: true,
        writable: true,
        value: n2
      });
    }
  });
});
var en = l$1.event;
l$1.event = function(n2) {
  return en && (n2 = en(n2)), n2.persist = function() {
  }, n2.isPropagationStopped = function() {
    return this.cancelBubble;
  }, n2.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, n2.nativeEvent = n2;
};
var rn, un = {
  configurable: true,
  get: function() {
    return this.class;
  }
}, on = l$1.vnode;
l$1.vnode = function(n2) {
  "string" == typeof n2.type && (function(n3) {
    var t2 = n3.props, e2 = n3.type, u2 = {}, o = -1 == e2.indexOf("-");
    for (var i in t2) {
      var l2 = t2[i];
      if (!("value" === i && "defaultValue" in t2 && null == l2 || Q && "children" === i && "noscript" === e2 || "class" === i || "className" === i)) {
        var c2 = i.toLowerCase();
        "defaultValue" === i && "value" in t2 && null == t2.value ? i = "value" : "download" === i && true === l2 ? l2 = "" : "translate" === c2 && "no" === l2 ? l2 = false : "o" === c2[0] && "n" === c2[1] ? "ondoubleclick" === c2 ? i = "ondblclick" : "onchange" !== c2 || "input" !== e2 && "textarea" !== e2 || X$1(t2.type) ? "onfocus" === c2 ? i = "onfocusin" : "onblur" === c2 ? i = "onfocusout" : J.test(i) && (i = c2) : c2 = i = "oninput" : o && G.test(i) ? i = i.replace(K, "-$&").toLowerCase() : null === l2 && (l2 = void 0), "oninput" === c2 && u2[i = c2] && (i = "oninputCapture"), u2[i] = l2;
      }
    }
    "select" == e2 && (u2.multiple && Array.isArray(u2.value) && (u2.value = F$1(t2.children).forEach(function(n4) {
      n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
    })), null != u2.defaultValue && (u2.value = F$1(t2.children).forEach(function(n4) {
      n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
    }))), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", un)) : t2.className && (u2.class = u2.className = t2.className), n3.props = u2;
  })(n2), n2.$$typeof = q$1, on && on(n2);
};
var ln = l$1.__r;
l$1.__r = function(n2) {
  ln && ln(n2), rn = n2.__c;
};
var cn$1 = l$1.diffed;
l$1.diffed = function(n2) {
  cn$1 && cn$1(n2);
  var t2 = n2.props, e2 = n2.__e;
  null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value), rn = null;
};
var fn = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function(n2) {
        return rn.__n[n2.__c].props.value;
      },
      useCallback: q$2,
      useContext: x$2,
      useDebugValue: P$1,
      useDeferredValue: w$1,
      useEffect: y$1,
      useId: g$2,
      useImperativeHandle: F$2,
      useInsertionEffect: I,
      useLayoutEffect: _,
      useMemo: T$1,
      useReducer: h$1,
      useRef: A$2,
      useState: d$1,
      useSyncExternalStore: C,
      useTransition: k$1
    }
  }
}, an = "18.3.1";
function sn(n2) {
  return k$2.bind(null, n2);
}
function hn(n2) {
  return !!n2 && n2.$$typeof === q$1;
}
function vn(n2) {
  return hn(n2) && n2.type === S;
}
function dn(n2) {
  return !!n2 && "string" == typeof n2.displayName && 0 == n2.displayName.indexOf("Memo(");
}
function mn(n2) {
  return hn(n2) ? W$1.apply(null, arguments) : n2;
}
function pn(n2) {
  return !!n2.__k && (R$1(null, n2), true);
}
function yn(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var _n = function(n2, t2) {
  return n2(t2);
}, bn = function(n2, t2) {
  var r2 = l$1.debounceRendering;
  l$1.debounceRendering = function(n3) {
    return n3();
  };
  var u2 = n2(t2);
  return l$1.debounceRendering = r2, u2;
}, Sn = hn, gn = {
  useState: d$1,
  useId: g$2,
  useReducer: h$1,
  useEffect: y$1,
  useLayoutEffect: _,
  useInsertionEffect: I,
  useTransition: k$1,
  useDeferredValue: w$1,
  useSyncExternalStore: C,
  startTransition: x$1,
  useRef: A$2,
  useImperativeHandle: F$2,
  useMemo: T$1,
  useCallback: q$2,
  useContext: x$2,
  useDebugValue: P$1,
  version: "18.3.1",
  Children: L,
  render: nn,
  hydrate: tn,
  unmountComponentAtNode: pn,
  createPortal: $,
  createElement: k$2,
  createContext: X$2,
  createFactory: sn,
  cloneElement: mn,
  createRef: M$1,
  Fragment: S,
  isValidElement: hn,
  isElement: Sn,
  isFragment: vn,
  isMemo: dn,
  findDOMNode: yn,
  Component: C$1,
  PureComponent: M,
  memo: N,
  forwardRef: D,
  flushSync: bn,
  unstable_batchedUpdates: _n,
  StrictMode: S,
  Suspense: P,
  SuspenseList: B,
  lazy: z$1,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fn
};
const _mod$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: L,
  Component: C$1,
  Fragment: S,
  PureComponent: M,
  StrictMode: S,
  Suspense: P,
  SuspenseList: B,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fn,
  cloneElement: mn,
  createContext: X$2,
  createElement: k$2,
  createFactory: sn,
  createPortal: $,
  createRef: M$1,
  default: gn,
  findDOMNode: yn,
  flushSync: bn,
  forwardRef: D,
  hydrate: tn,
  isElement: Sn,
  isFragment: vn,
  isMemo: dn,
  isValidElement: hn,
  lazy: z$1,
  memo: N,
  render: nn,
  startTransition: x$1,
  unmountComponentAtNode: pn,
  unstable_batchedUpdates: _n,
  useCallback: q$2,
  useContext: x$2,
  useDebugValue: P$1,
  useDeferredValue: w$1,
  useEffect: y$1,
  useErrorBoundary: b$2,
  useId: g$2,
  useImperativeHandle: F$2,
  useInsertionEffect: I,
  useLayoutEffect: _,
  useMemo: T$1,
  useReducer: h$1,
  useRef: A$2,
  useState: d$1,
  useSyncExternalStore: C,
  useTransition: k$1,
  version: an
}, Symbol.toStringTag, { value: "Module" }));
const elAttrs = (id, type, editor) => editor ? {
  "data-el-id": id,
  "data-el-type": type
} : {};
function classesFromStyles(styles) {
  const classes = [];
  for (const [key, value] of Object.entries(styles)) {
    if (value == null || value === "") continue;
    const cls = styleToClass(key, String(value));
    if (cls) classes.push(cls);
  }
  return classes.join(" ");
}
function isHex(value) {
  return value.startsWith("#");
}
function colorClass(prefix, value) {
  if (isHex(value)) return null;
  return `${prefix}-${value}`;
}
function styleToClass(key, value) {
  switch (key) {
    case "padding":
      return `p-${value}`;
    case "paddingX":
      return `px-${value}`;
    case "paddingY":
      return `py-${value}`;
    case "margin":
      return `m-${value}`;
    case "marginX":
      return `mx-${value}`;
    case "marginY":
      return `my-${value}`;
    case "width":
      return `w-${value}`;
    case "height":
      return `h-${value}`;
    case "minHeight":
      return `min-h-${value}`;
    case "maxWidth":
      return `max-w-${value}`;
    case "fontSize":
      return `text-${value}`;
    case "fontWeight":
      return `font-${value}`;
    case "fontFamily":
      return `font-${value}`;
    case "lineHeight":
      return `leading-${value}`;
    case "letterSpacing":
      return `tracking-${value}`;
    case "textAlign":
      return `text-${value}`;
    case "color":
      return colorClass("text", value);
    case "display":
      return value;
    case "flexDirection":
      return `flex-${value}`;
    case "justifyContent":
      return `justify-${value}`;
    case "alignItems":
      return `items-${value}`;
    case "gap":
      return `gap-${value}`;
    case "gridTemplateColumns":
      return `grid-cols-${value}`;
    case "borderRadius":
      return `rounded-${value}`;
    case "borderWidth":
      return value === "1" ? "border" : `border-${value}`;
    case "borderColor":
      return colorClass("border", value);
    case "borderStyle":
      return null;
    case "flexWrap":
      return value === "wrap" ? "flex-wrap" : value === "nowrap" ? "flex-nowrap" : value === "reverse" ? "flex-wrap-reverse" : null;
    case "backgroundColor":
      return colorClass("bg", value);
    case "backgroundSize":
      return `bg-${value}`;
    case "backgroundPosition":
      return `bg-${value}`;
    case "backgroundImage":
      return null;
    case "opacity":
      return `opacity-${value}`;
    case "overflow":
      return `overflow-${value}`;
    case "objectFit":
      return `object-${value}`;
    default:
      return null;
  }
}
function inlineStylesFromTokens(styles) {
  const result = {};
  if (styles.backgroundImage) result.backgroundImage = String(styles.backgroundImage);
  if (styles.color && isHex(String(styles.color))) result.color = String(styles.color);
  if (styles.backgroundColor && isHex(String(styles.backgroundColor))) result.backgroundColor = String(styles.backgroundColor);
  if (styles.borderColor && isHex(String(styles.borderColor))) result.borderColor = String(styles.borderColor);
  return result;
}
function Section({
  element,
  className,
  style,
  children,
  attrs
}) {
  return /* @__PURE__ */ u("section", {
    ...attrs,
    className,
    style,
    children
  });
}
function Row({
  element,
  className,
  style,
  children,
  attrs
}) {
  return /* @__PURE__ */ u("div", {
    ...attrs,
    className,
    style,
    children
  });
}
function Column$2({
  element,
  className,
  style,
  children,
  attrs
}) {
  return /* @__PURE__ */ u("div", {
    ...attrs,
    className,
    style,
    children
  });
}
function Grid({
  element,
  className,
  style,
  children,
  attrs
}) {
  return /* @__PURE__ */ u("div", {
    ...attrs,
    className,
    style,
    children
  });
}
const TAG_MAP = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span"
};
function Heading$1({
  element,
  className,
  style,
  attrs
}) {
  const Tag = TAG_MAP[element.data.tagName ?? "h2"] ?? "h2";
  return /* @__PURE__ */ u(Tag, {
    ...attrs,
    className,
    style,
    children: element.data.content ?? ""
  });
}
function Text({
  element,
  className,
  style,
  attrs
}) {
  const content = element.data.content;
  if (content && content.includes("<")) {
    return /* @__PURE__ */ u("div", {
      ...attrs,
      className,
      style,
      dangerouslySetInnerHTML: {
        __html: content
      }
    });
  }
  return /* @__PURE__ */ u("p", {
    ...attrs,
    className,
    style,
    children: content ?? ""
  });
}
function Image$2({
  element,
  className,
  style,
  attrs
}) {
  return /* @__PURE__ */ u("img", {
    ...attrs,
    src: element.data.src,
    alt: element.data.alt ?? "",
    className,
    style,
    loading: "lazy"
  });
}
function Button$1({
  element,
  className,
  style,
  attrs
}) {
  return /* @__PURE__ */ u("a", {
    ...attrs,
    href: element.data.href ?? "#",
    target: element.data.target,
    className,
    style,
    children: element.data.content ?? "Button"
  });
}
function Link$1({
  element,
  className,
  style,
  attrs
}) {
  return /* @__PURE__ */ u("a", {
    ...attrs,
    href: element.data.href ?? "#",
    target: element.data.target,
    className,
    style,
    children: element.data.content ?? element.data.href ?? ""
  });
}
function Spacer({
  element,
  className,
  style,
  attrs
}) {
  return /* @__PURE__ */ u("div", {
    ...attrs,
    className,
    style
  });
}
function Divider({
  element,
  className,
  style,
  attrs
}) {
  return /* @__PURE__ */ u("hr", {
    ...attrs,
    className,
    style
  });
}
function Video({
  element,
  className,
  style,
  attrs
}) {
  return /* @__PURE__ */ u("video", {
    ...attrs,
    src: element.data.src,
    controls: true,
    autoPlay: element.data.autoPlay,
    loop: element.data.loop,
    className,
    style
  });
}
function Html({
  element,
  className,
  style,
  attrs
}) {
  return /* @__PURE__ */ u("div", {
    ...attrs,
    className,
    style,
    dangerouslySetInnerHTML: {
      __html: element.data.content ?? ""
    }
  });
}
const COMPONENT_REGISTRY = {
  section: Section,
  row: Row,
  column: Column$2,
  grid: Grid,
  heading: Heading$1,
  text: Text,
  image: Image$2,
  button: Button$1,
  link: Link$1,
  spacer: Spacer,
  divider: Divider,
  video: Video,
  html: Html
};
function hasComponent(type) {
  return type in COMPONENT_REGISTRY;
}
function DefaultElement({
  element,
  className,
  style,
  children,
  attrs
}) {
  return /* @__PURE__ */ u("div", {
    ...attrs,
    className,
    style,
    children: [children, element.data.content && /* @__PURE__ */ u("span", {
      children: element.data.content
    })]
  });
}
function ElementRenderer({
  element,
  editor
}) {
  const isEditor = editor ?? false;
  const className = classesFromStyles(element.styles);
  const style = inlineStylesFromTokens(element.styles);
  const attrs = elAttrs(element.id, element.type, isEditor);
  const children = element.children?.map((c2) => /* @__PURE__ */ u(ElementRenderer, {
    element: c2,
    editor
  }, c2.id));
  if (hasComponent(element.type)) {
    const Component = COMPONENT_REGISTRY[element.type];
    const el = /* @__PURE__ */ u(Component, {
      element,
      className,
      style,
      children,
      attrs
    });
    if (isEditor) {
      const Suspense = gn.Suspense;
      return /* @__PURE__ */ u(Suspense, {
        fallback: /* @__PURE__ */ u("div", {
          ...attrs,
          className
        }),
        children: el
      });
    }
    return el;
  }
  return /* @__PURE__ */ u(DefaultElement, {
    element,
    className,
    style,
    children,
    attrs
  });
}
function PageRenderer({
  elements: elements2,
  editor
}) {
  const tree = buildTree(elements2);
  return /* @__PURE__ */ u(S, {
    children: tree.map((el) => /* @__PURE__ */ u(ElementRenderer, {
      element: el,
      editor
    }, el.id))
  });
}
function buildTree(flat) {
  const map = /* @__PURE__ */ new Map();
  const roots = [];
  for (const el of flat) {
    map.set(el.id, {
      ...el,
      children: []
    });
  }
  for (const el of flat) {
    const node = map.get(el.id);
    if (el.parentId && map.has(el.parentId)) {
      map.get(el.parentId).children.push(node);
    } else {
      roots.push(node);
    }
  }
  const sortChildren = (nodes) => {
    nodes.sort((a2, b2) => a2.order - b2.order);
    for (const n2 of nodes) {
      if (n2.children?.length) sortChildren(n2.children);
    }
    return nodes;
  };
  return sortChildren(roots);
}
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState2;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = {
    setState,
    getState,
    getInitialState,
    subscribe
  };
  const initialState2 = state = createState(setState, getState, api);
  return api;
};
const createStore$2 = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = gn.useSyncExternalStore(api.subscribe, gn.useCallback(() => selector(api.getState()), [api, selector]), gn.useCallback(() => selector(api.getInitialState()), [api, selector]));
  gn.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore$2(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createImpl;
const MAX_HISTORY = 50;
const createEditorSlice = (set, get2) => ({
  activeSiteId: null,
  activePageId: null,
  selectedElementId: null,
  viewport: "desktop",
  pages: [],
  dirtyPageIds: /* @__PURE__ */ new Set(),
  elements: [],
  isDirty: false,
  isLoading: false,
  saveStatus: "idle",
  _history: [],
  _historyIndex: -1,
  setActiveSite: (id) => set({
    activeSiteId: id,
    activePageId: null,
    selectedElementId: null,
    _history: [],
    _historyIndex: -1
  }),
  setActivePage: (id) => set({
    activePageId: id,
    selectedElementId: null
  }),
  setViewport: (viewport) => set({
    viewport
  }),
  setPages: (pages2) => set({
    pages: pages2,
    dirtyPageIds: /* @__PURE__ */ new Set()
  }),
  updatePageLocal: (id, updates) => set((s2) => ({
    pages: s2.pages.map((p2) => p2.id === id ? {
      ...p2,
      ...updates.slug !== void 0 ? {
        slug: updates.slug
      } : {},
      data: updates.data ? {
        ...p2.data,
        ...updates.data
      } : p2.data
    } : p2),
    dirtyPageIds: /* @__PURE__ */ new Set([...s2.dirtyPageIds, id]),
    isDirty: true
  })),
  setElements: (elements2) => set({
    elements: elements2,
    isDirty: false
  }),
  selectElement: (id) => set({
    selectedElementId: id
  }),
  updateElement: (id, updates) => set((s2) => ({
    elements: s2.elements.map((e2) => e2.id === id ? {
      ...e2,
      ...updates
    } : e2),
    isDirty: true
  })),
  addElement: (element) => set((s2) => ({
    elements: [...s2.elements, element],
    isDirty: true
  })),
  removeElement: (id) => set((s2) => ({
    elements: s2.elements.filter((e2) => e2.id !== id && e2.parentId !== id),
    selectedElementId: s2.selectedElementId === id ? null : s2.selectedElementId,
    isDirty: true
  })),
  insertElements: (newElements) => set((s2) => ({
    elements: [...s2.elements, ...newElements],
    isDirty: true
  })),
  reorderElement: (id, direction) => set((s2) => {
    const el = s2.elements.find((e2) => e2.id === id);
    if (!el) return s2;
    const siblings = s2.elements.filter((e2) => e2.parentId === el.parentId).sort((a2, b2) => a2.order - b2.order);
    const idx = siblings.findIndex((e2) => e2.id === id);
    if (idx < 0) return s2;
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= siblings.length) return s2;
    const swapEl = siblings[swapIdx];
    const updated = s2.elements.map((e2) => {
      if (e2.id === id) return {
        ...e2,
        order: swapEl.order
      };
      if (e2.id === swapEl.id) return {
        ...e2,
        order: el.order
      };
      return e2;
    });
    const prev = {
      elements: s2.elements,
      pages: s2.pages,
      selectedElementId: s2.selectedElementId
    };
    const newHistory = s2._historyIndex < s2._history.length - 1 ? s2._history.slice(0, s2._historyIndex + 1) : s2._history;
    return {
      elements: updated,
      isDirty: true,
      _history: [...newHistory, prev].slice(-MAX_HISTORY),
      _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1)
    };
  }),
  moveElement: (id, newParentId, index2) => set((s2) => {
    const el = s2.elements.find((e2) => e2.id === id);
    if (!el) return s2;
    const prev = {
      elements: s2.elements,
      pages: s2.pages,
      selectedElementId: s2.selectedElementId
    };
    const newHistory = s2._historyIndex < s2._history.length - 1 ? s2._history.slice(0, s2._historyIndex + 1) : s2._history;
    const siblings = s2.elements.filter((e2) => e2.parentId === newParentId && e2.id !== id).sort((a2, b2) => a2.order - b2.order);
    const reordered = siblings.slice(0, index2).concat([el, ...siblings.slice(index2)]);
    const updated = s2.elements.map((e2) => {
      if (e2.id === id) return {
        ...e2,
        parentId: newParentId,
        order: index2
      };
      const sibIdx = reordered.findIndex((r2) => r2.id === e2.id);
      if (sibIdx >= 0) return {
        ...e2,
        order: sibIdx
      };
      return e2;
    });
    return {
      elements: updated,
      isDirty: true,
      _history: [...newHistory, prev].slice(-MAX_HISTORY),
      _historyIndex: Math.min(newHistory.length, MAX_HISTORY - 1)
    };
  }),
  setDirty: (dirty) => set((s2) => ({
    isDirty: dirty,
    saveStatus: dirty ? "idle" : s2.saveStatus
  })),
  setLoading: (loading) => set({
    isLoading: loading
  }),
  setSaveStatus: (status) => set({
    saveStatus: status
  }),
  undo: () => set((s2) => {
    if (s2._historyIndex < 0) return s2;
    const entry = s2._history[s2._historyIndex];
    if (!entry) return s2;
    return {
      elements: entry.elements,
      pages: entry.pages,
      selectedElementId: entry.selectedElementId,
      isDirty: true,
      _historyIndex: s2._historyIndex - 1
    };
  }),
  redo: () => set((s2) => {
    const nextIndex = s2._historyIndex + 1;
    if (nextIndex >= s2._history.length) return s2;
    const entry = s2._history[nextIndex];
    if (!entry) return s2;
    return {
      elements: entry.elements,
      pages: entry.pages,
      selectedElementId: entry.selectedElementId,
      isDirty: true,
      _historyIndex: nextIndex
    };
  }),
  canUndo: () => get2()._historyIndex >= 0,
  canRedo: () => get2()._historyIndex + 1 < get2()._history.length
});
create()((...a2) => ({
  ...createEditorSlice(...a2)
}));
function r$1(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o = e2.length;
    for (t2 = 0; t2 < o; t2++) e2[t2] && (f2 = r$1(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  } else for (f2 in e2) e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++) (e2 = arguments[f2]) && (t2 = r$1(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config2) => (props) => {
  var _config_compoundVariants;
  if ((config2 === null || config2 === void 0 ? void 0 : config2.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const {
    variants,
    defaultVariants
  } = config2;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config2 === null || config2 === void 0 ? void 0 : (_config_compoundVariants = config2.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let {
      class: cvClass,
      className: cvClassName,
      ...compoundVariantOptions
    } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [...acc, cvClass, cvClassName] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
const concatArrays = (array1, array2) => {
  const combinedArray = new Array(array1.length + array2.length);
  for (let i = 0; i < array1.length; i++) {
    combinedArray[i] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    combinedArray[array1.length + i] = array2[i];
  }
  return combinedArray;
};
const createClassValidatorObject = (classGroupId, validator) => ({
  classGroupId,
  validator
});
const createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
  nextPart,
  validators,
  classGroupId
});
const CLASS_PART_SEPARATOR = "-";
const EMPTY_CONFLICTS = [];
const ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
const createClassGroupUtils = (config2) => {
  const classMap = createClassMap(config2);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config2;
  const getClassGroupId = (className) => {
    if (className.startsWith("[") && className.endsWith("]")) {
      return getGroupIdForArbitraryProperty(className);
    }
    const classParts = className.split(CLASS_PART_SEPARATOR);
    const startIndex = classParts[0] === "" && classParts.length > 1 ? 1 : 0;
    return getGroupRecursive(classParts, startIndex, classMap);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    if (hasPostfixModifier) {
      const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
      const baseConflicts = conflictingClassGroups[classGroupId];
      if (modifierConflicts) {
        if (baseConflicts) {
          return concatArrays(baseConflicts, modifierConflicts);
        }
        return modifierConflicts;
      }
      return baseConflicts || EMPTY_CONFLICTS;
    }
    return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, startIndex, classPartObject) => {
  const classPathsLength = classParts.length - startIndex;
  if (classPathsLength === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[startIndex];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  if (nextClassPartObject) {
    const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
    if (result) return result;
  }
  const validators = classPartObject.validators;
  if (validators === null) {
    return void 0;
  }
  const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
  const validatorsLength = validators.length;
  for (let i = 0; i < validatorsLength; i++) {
    const validatorObj = validators[i];
    if (validatorObj.validator(classRest)) {
      return validatorObj.classGroupId;
    }
  }
  return void 0;
};
const getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const content = className.slice(1, -1);
  const colonIndex = content.indexOf(":");
  const property = content.slice(0, colonIndex);
  return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
const createClassMap = (config2) => {
  const {
    theme,
    classGroups
  } = config2;
  return processClassGroups(classGroups, theme);
};
const processClassGroups = (classGroups, theme) => {
  const classMap = createClassPartObject();
  for (const classGroupId in classGroups) {
    const group = classGroups[classGroupId];
    processClassesRecursively(group, classMap, classGroupId, theme);
  }
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  const len = classGroup.length;
  for (let i = 0; i < len; i++) {
    const classDefinition = classGroup[i];
    processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
  }
};
const processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (typeof classDefinition === "string") {
    processStringDefinition(classDefinition, classPartObject, classGroupId);
    return;
  }
  if (typeof classDefinition === "function") {
    processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
    return;
  }
  processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
const processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
  const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
  classPartObjectToEdit.classGroupId = classGroupId;
};
const processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (isThemeGetter(classDefinition)) {
    processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
    return;
  }
  if (classPartObject.validators === null) {
    classPartObject.validators = [];
  }
  classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
const processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  const entries = Object.entries(classDefinition);
  const len = entries.length;
  for (let i = 0; i < len; i++) {
    const [key, value] = entries[i];
    processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
  }
};
const getPart = (classPartObject, path) => {
  let current = classPartObject;
  const parts = path.split(CLASS_PART_SEPARATOR);
  const len = parts.length;
  for (let i = 0; i < len; i++) {
    const part = parts[i];
    let next = current.nextPart.get(part);
    if (!next) {
      next = createClassPartObject();
      current.nextPart.set(part, next);
    }
    current = next;
  }
  return current;
};
const isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
const createLruCache$1 = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ Object.create(null);
  let previousCache = /* @__PURE__ */ Object.create(null);
  const update2 = (key, value) => {
    cache[key] = value;
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ Object.create(null);
    }
  };
  return {
    get(key) {
      let value = cache[key];
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache[key]) !== void 0) {
        update2(key, value);
        return value;
      }
    },
    set(key, value) {
      if (key in cache) {
        cache[key] = value;
      } else {
        update2(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = "!";
const MODIFIER_SEPARATOR = ":";
const EMPTY_MODIFIERS = [];
const createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
  modifiers,
  hasImportantModifier,
  baseClassName,
  maybePostfixModifierPosition,
  isExternal
});
const createParseClassName = (config2) => {
  const {
    prefix,
    experimentalParseClassName
  } = config2;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    const len = className.length;
    for (let index2 = 0; index2 < len; index2++) {
      const currentCharacter = className[index2];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index2));
          modifierStart = index2 + 1;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index2;
          continue;
        }
      }
      if (currentCharacter === "[") bracketDepth++;
      else if (currentCharacter === "]") bracketDepth--;
      else if (currentCharacter === "(") parenDepth++;
      else if (currentCharacter === ")") parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
    let baseClassName = baseClassNameWithImportantModifier;
    let hasImportantModifier = false;
    if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
      baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
      hasImportantModifier = true;
    } else if (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)
    ) {
      baseClassName = baseClassNameWithImportantModifier.slice(1);
      hasImportantModifier = true;
    }
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
const createSortModifiers = (config2) => {
  const modifierWeights = /* @__PURE__ */ new Map();
  config2.orderSensitiveModifiers.forEach((mod, index2) => {
    modifierWeights.set(mod, 1e6 + index2);
  });
  return (modifiers) => {
    const result = [];
    let currentSegment = [];
    for (let i = 0; i < modifiers.length; i++) {
      const modifier = modifiers[i];
      const isArbitrary = modifier[0] === "[";
      const isOrderSensitive = modifierWeights.has(modifier);
      if (isArbitrary || isOrderSensitive) {
        if (currentSegment.length > 0) {
          currentSegment.sort();
          result.push(...currentSegment);
          currentSegment = [];
        }
        result.push(modifier);
      } else {
        currentSegment.push(modifier);
      }
    }
    if (currentSegment.length > 0) {
      currentSegment.sort();
      result.push(...currentSegment);
    }
    return result;
  };
};
const createConfigUtils = (config2) => ({
  cache: createLruCache$1(config2.cacheSize),
  parseClassName: createParseClassName(config2),
  sortModifiers: createSortModifiers(config2),
  postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config2),
  ...createClassGroupUtils(config2)
});
const createPostfixLookupClassGroupIds = (config2) => {
  const lookup = /* @__PURE__ */ Object.create(null);
  const classGroupIds = config2.postfixLookupClassGroups;
  if (classGroupIds) {
    for (let i = 0; i < classGroupIds.length; i++) {
      lookup[classGroupIds[i]] = true;
    }
  }
  return lookup;
};
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers,
    postfixLookupClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index2 = classNames.length - 1; index2 >= 0; index2 -= 1) {
    const originalClassName = classNames[index2];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId;
    if (hasPostfixModifier) {
      const baseClassNameWithoutPostfix = baseClassName.substring(0, maybePostfixModifierPosition);
      classGroupId = getClassGroupId(baseClassNameWithoutPostfix);
      const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
      if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
        classGroupId = classGroupIdWithPostfix;
        hasPostfixModifier = false;
      }
    } else {
      classGroupId = getClassGroupId(baseClassName);
    }
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.indexOf(classId) > -1) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
const twJoin = (...classLists) => {
  let index2 = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index2 < classLists.length) {
    if (argument = classLists[index2++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
const createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall;
  const initTailwindMerge = (classList) => {
    const config2 = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config2);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  };
  const tailwindMerge = (classList) => {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  };
  functionToCall = initTailwindMerge;
  return (...args) => functionToCall(twJoin(...args));
};
const fallbackThemeArr = [];
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || fallbackThemeArr;
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = (value) => fractionRegex.test(value);
const isNumber = (value) => !!value && !Number.isNaN(Number(value));
const isInteger = (value) => !!value && Number.isInteger(Number(value));
const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const isAny = () => true;
const isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
const isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
const isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
const isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
const isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
const isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
const isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
const getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
const isLabelPosition = (label) => label === "position" || label === "percentage";
const isLabelImage = (label) => label === "image" || label === "url";
const isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
const isLabelLength = (label) => label === "length";
const isLabelNumber = (label) => label === "number";
const isLabelFamilyName = (label) => label === "family-name";
const isLabelWeight = (label) => label === "number" || label === "weight";
const isLabelShadow = (label) => label === "shadow";
const getDefaultConfig = () => {
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeTextShadow = fromTheme("text-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleSizingInline = () => [isFraction, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleSizingBlock = () => [isFraction, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [isNamedContainerQuery],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: scaleInset()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: scaleInset()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": scaleInset()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: scaleMargin()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...scaleSizingInline()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...scaleSizingInline()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...scaleSizingInline()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...scaleSizingBlock()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...scaleSizingBlock()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...scaleSizingBlock()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariableWeight, isArbitraryWeight]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryFamilyName, themeFont]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [isArbitraryValue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [isInteger, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": scaleBorderWidth()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": scaleColor()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [isInteger, isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": scaleColor()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": scaleColor()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]", {
  variants: {
    variant: {
      default: "bg-foreground text-background hover:bg-foreground/90 shadow-sm",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent/50 hover:text-accent-foreground",
      link: "text-foreground underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-lg px-3 text-xs",
      lg: "h-11 rounded-xl px-8",
      icon: "h-9 w-9 rounded-xl"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = /* @__PURE__ */ D(({
  className,
  variant,
  size: size2,
  ...props
}, ref) => {
  return /* @__PURE__ */ u("button", {
    className: cn(buttonVariants({
      variant,
      size: size2,
      className
    })),
    ref,
    ...props
  });
});
Button.displayName = "Button";
const Separator = /* @__PURE__ */ D(({
  className,
  orientation = "horizontal",
  ...props
}, ref) => /* @__PURE__ */ u("div", {
  ref,
  role: "separator",
  "aria-orientation": orientation,
  className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
  ...props
}));
Separator.displayName = "Separator";
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase$1 = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string) => {
  const camelCase = toCamelCase$1(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index2, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index2;
}).join(" ").trim();
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = ({
  color = "currentColor",
  size: size2 = 24,
  strokeWidth = 2,
  absoluteStrokeWidth,
  children,
  iconNode,
  class: classes = "",
  ...rest
}) => k$2("svg", {
  ...defaultAttributes,
  width: String(size2),
  height: size2,
  stroke: color,
  ["stroke-width"]: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size2) : strokeWidth,
  class: ["lucide", classes].join(" "),
  ...rest
}, [...iconNode.map(([tag, attrs]) => k$2(tag, attrs)), ...F$1(children)]);
const createLucideIcon = (iconName, iconNode) => {
  const Component = ({
    class: classes = "",
    children,
    ...props
  }) => k$2(Icon, {
    ...props,
    iconNode,
    class: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${toKebabCase(iconName)}`, classes)
  }, children);
  Component.displayName = toPascalCase(iconName);
  return Component;
};
createLucideIcon("plus", [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "M12 5v14",
  key: "s699le"
}]]);
createLucideIcon("globe", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
  key: "13o1zl"
}], ["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}]]);
createLucideIcon("trash-2", [["path", {
  d: "M3 6h18",
  key: "d0wm0j"
}], ["path", {
  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
  key: "4alrt4"
}], ["path", {
  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
  key: "v07s0e"
}], ["line", {
  x1: "10",
  x2: "10",
  y1: "11",
  y2: "17",
  key: "1uufr5"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "11",
  y2: "17",
  key: "xtxkd"
}]]);
createLucideIcon("file", [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}]]);
createLucideIcon("pencil", [["path", {
  d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
  key: "1a8usu"
}], ["path", {
  d: "m15 5 4 4",
  key: "1mk7zo"
}]]);
createLucideIcon("chevron-right", [["path", {
  d: "m9 18 6-6-6-6",
  key: "mthhwq"
}]]);
createLucideIcon("chevron-down", [["path", {
  d: "m6 9 6 6 6-6",
  key: "qrunsl"
}]]);
createLucideIcon("copy", [["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]]);
createLucideIcon("arrow-up", [["path", {
  d: "m5 12 7-7 7 7",
  key: "hav0vg"
}], ["path", {
  d: "M12 19V5",
  key: "x0mq9r"
}]]);
createLucideIcon("arrow-down", [["path", {
  d: "M12 5v14",
  key: "s699le"
}], ["path", {
  d: "m19 12-7 7-7-7",
  key: "1idqje"
}]]);
createLucideIcon("save", [["path", {
  d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
  key: "1c8476"
}], ["path", {
  d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
  key: "1ydtos"
}], ["path", {
  d: "M7 3v4a1 1 0 0 0 1 1h7",
  key: "t51u73"
}]]);
createLucideIcon("undo-2", [["path", {
  d: "M9 14 4 9l5-5",
  key: "102s5s"
}], ["path", {
  d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
  key: "f3b9sd"
}]]);
createLucideIcon("redo-2", [["path", {
  d: "m15 14 5-5-5-5",
  key: "12vg1m"
}], ["path", {
  d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
  key: "6uklza"
}]]);
createLucideIcon("monitor", [["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2",
  key: "48i651"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "21",
  y2: "21",
  key: "1svkeh"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "17",
  y2: "21",
  key: "vw1qmm"
}]]);
createLucideIcon("tablet-smartphone", [["rect", {
  width: "10",
  height: "14",
  x: "3",
  y: "8",
  rx: "2",
  key: "1vrsiq"
}], ["path", {
  d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",
  key: "1j4zmg"
}], ["path", {
  d: "M8 18h.01",
  key: "lrp35t"
}]]);
createLucideIcon("smartphone", [["rect", {
  width: "14",
  height: "20",
  x: "5",
  y: "2",
  rx: "2",
  ry: "2",
  key: "1yt0o3"
}], ["path", {
  d: "M12 18h.01",
  key: "mhygvu"
}]]);
createLucideIcon("check", [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]]);
createLucideIcon("loader-circle", [["path", {
  d: "M21 12a9 9 0 1 1-6.219-8.56",
  key: "13zald"
}]]);
const LayoutDashboard = createLucideIcon("layout-dashboard", [["rect", {
  width: "7",
  height: "9",
  x: "3",
  y: "3",
  rx: "1",
  key: "10lvy0"
}], ["rect", {
  width: "7",
  height: "5",
  x: "14",
  y: "3",
  rx: "1",
  key: "16une8"
}], ["rect", {
  width: "7",
  height: "9",
  x: "14",
  y: "12",
  rx: "1",
  key: "1hutg5"
}], ["rect", {
  width: "7",
  height: "5",
  x: "3",
  y: "16",
  rx: "1",
  key: "ldoo1y"
}]]);
createLucideIcon("square-mouse-pointer", [["path", {
  d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
  key: "xwnzip"
}], ["path", {
  d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
  key: "14rsvq"
}]]);
createLucideIcon("layers", [["path", {
  d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
  key: "zw3jo"
}], ["path", {
  d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
  key: "1wduqc"
}], ["path", {
  d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
  key: "kqbvx6"
}]]);
const Code = createLucideIcon("code", [["polyline", {
  points: "16 18 22 12 16 6",
  key: "z7tu5w"
}], ["polyline", {
  points: "8 6 2 12 8 18",
  key: "1eg1df"
}]]);
const Columns3 = createLucideIcon("columns-3", [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}], ["path", {
  d: "M15 3v18",
  key: "14nvp0"
}]]);
const Grid3x3 = createLucideIcon("grid-3x3", [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}], ["path", {
  d: "M3 15h18",
  key: "5xshup"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}], ["path", {
  d: "M15 3v18",
  key: "14nvp0"
}]]);
const Heading = createLucideIcon("heading", [["path", {
  d: "M6 12h12",
  key: "8npq4p"
}], ["path", {
  d: "M6 20V4",
  key: "1w1bmo"
}], ["path", {
  d: "M18 20V4",
  key: "o2hl4u"
}]]);
const Image$1 = createLucideIcon("image", [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2",
  key: "af1f0g"
}], ["path", {
  d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
  key: "1xmnt7"
}]]);
const Link = createLucideIcon("link", [["path", {
  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
  key: "1cjeqo"
}], ["path", {
  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  key: "19qd67"
}]]);
const Minus = createLucideIcon("minus", [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}]]);
const MoveVertical = createLucideIcon("move-vertical", [["path", {
  d: "M12 2v20",
  key: "t6zp3m"
}], ["path", {
  d: "m8 18 4 4 4-4",
  key: "bh5tu3"
}], ["path", {
  d: "m8 6 4-4 4 4",
  key: "ybng9g"
}]]);
const Play = createLucideIcon("play", [["polygon", {
  points: "6 3 20 12 6 21 6 3",
  key: "1oa8hb"
}]]);
const Rows3 = createLucideIcon("rows-3", [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M21 9H3",
  key: "1338ky"
}], ["path", {
  d: "M21 15H3",
  key: "9uk58r"
}]]);
const Square = createLucideIcon("square", [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}]]);
const Type = createLucideIcon("type", [["polyline", {
  points: "4 7 4 4 20 4 20 7",
  key: "1nosan"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "20",
  y2: "20",
  key: "swin9y"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "4",
  y2: "20",
  key: "1tx1rr"
}]]);
const X = createLucideIcon("x", [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]]);
var exports$8 = {};
Object.defineProperty(exports$8, "__esModule", {
  value: true
});
var React$1 = gn ?? _mod$4;
function is$3(x2, y2) {
  return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
}
var objectIs$1 = "function" === typeof Object.is ? Object.is : is$3, useState = React$1.useState, useEffect$1 = React$1.useEffect, useLayoutEffect = React$1.useLayoutEffect, useDebugValue$1 = React$1.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(), _useState = useState({
    inst: {
      value,
      getSnapshot
    }
  }), inst = _useState[0].inst, forceUpdate = _useState[1];
  useLayoutEffect(function() {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    checkIfSnapshotChanged(inst) && forceUpdate({
      inst
    });
  }, [subscribe, value, getSnapshot]);
  useEffect$1(function() {
    checkIfSnapshotChanged(inst) && forceUpdate({
      inst
    });
    return subscribe(function() {
      checkIfSnapshotChanged(inst) && forceUpdate({
        inst
      });
    });
  }, [subscribe]);
  useDebugValue$1(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs$1(inst, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
exports$8.useSyncExternalStore = void 0 !== React$1.useSyncExternalStore ? React$1.useSyncExternalStore : shim$1;
var _useSyncExternalStore = exports$8.useSyncExternalStore;
var _default$5;
if (typeof exports$8 === "object" && exports$8 !== null && "default" in exports$8) {
  _default$5 = exports$8.default;
} else {
  _default$5 = exports$8;
}
const _default_default$4 = _default$5;
var __require$4 = exports$8;
const _mod$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __require: __require$4,
  default: _default_default$4,
  useSyncExternalStore: _useSyncExternalStore
}, Symbol.toStringTag, { value: "Module" }));
var exports$7 = {}, module$5 = {};
Object.defineProperty(module$5, "exports", {
  get() {
    return exports$7;
  },
  set(value) {
    exports$7 = value;
  }
});
Object.defineProperty(exports$7, "__esModule", {
  value: true
});
module$5.exports = _mod$3;
var _default$4;
if (typeof exports$7 === "object" && exports$7 !== null && "default" in exports$7) {
  _default$4 = exports$7.default;
} else {
  _default$4 = exports$7;
}
const _default_default$3 = _default$4;
var __require$3 = exports$7;
const _mod2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __require: __require$3,
  default: _default_default$3,
  useSyncExternalStore: _useSyncExternalStore
}, Symbol.toStringTag, { value: "Module" }));
const TreeApiContext = X$2(null);
function useTreeApi() {
  const value = x$2(TreeApiContext);
  if (value === null) throw new Error("No Tree Api Provided");
  return value;
}
const NodesContext = X$2(null);
function useNodesContext() {
  const value = x$2(NodesContext);
  if (value === null) throw new Error("Provide a NodesContext");
  return value;
}
const DndContext$1 = X$2(null);
function useDndContext() {
  const value = x$2(DndContext$1);
  if (value === null) throw new Error("Provide a DnDContext");
  return value;
}
const DataUpdatesContext = X$2(0);
function useDataUpdates() {
  x$2(DataUpdatesContext);
}
function bound(n2, min, max) {
  return Math.max(Math.min(n2, max), min);
}
function isItem(node) {
  return node && node.isLeaf;
}
function isClosed(node) {
  return node && node.isInternal && !node.isOpen;
}
function isOpenWithEmptyChildren(node) {
  var _a;
  return node && node.isOpen && !((_a = node.children) === null || _a === void 0 ? void 0 : _a.length);
}
const isDescendant = (a2, b2) => {
  let n2 = a2;
  while (n2) {
    if (n2.id === b2.id) return true;
    n2 = n2.parent;
  }
  return false;
};
const indexOf = (node) => {
  if (!node.parent) throw Error("Node does not have a parent");
  return node.parent.children.findIndex((c2) => c2.id === node.id);
};
function dfs(node, id) {
  if (!node) return null;
  if (node.id === id) return node;
  if (node.children) {
    for (let child of node.children) {
      const result = dfs(child, id);
      if (result) return result;
    }
  }
  return null;
}
function walk(node, fn2) {
  fn2(node);
  if (node.children) {
    for (let child of node.children) {
      walk(child, fn2);
    }
  }
}
function focusNextElement(target) {
  const elements2 = getFocusable(target);
  let next;
  for (let i = 0; i < elements2.length; ++i) {
    const item = elements2[i];
    if (item === target) {
      next = nextItem(elements2, i);
      break;
    }
  }
  next === null || next === void 0 ? void 0 : next.focus();
}
function focusPrevElement(target) {
  const elements2 = getFocusable(target);
  let next;
  for (let i = 0; i < elements2.length; ++i) {
    const item = elements2[i];
    if (item === target) {
      next = prevItem(elements2, i);
      break;
    }
  }
  next === null || next === void 0 ? void 0 : next.focus();
}
function nextItem(list, index2) {
  if (index2 + 1 < list.length) {
    return list[index2 + 1];
  } else {
    return list[0];
  }
}
function prevItem(list, index2) {
  if (index2 - 1 >= 0) {
    return list[index2 - 1];
  } else {
    return list[list.length - 1];
  }
}
function getFocusable(target) {
  return Array.from(document.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')).filter((e2) => e2 === target || !target.contains(e2));
}
function access(obj, accessor) {
  if (typeof accessor === "boolean") return accessor;
  if (typeof accessor === "string") return obj[accessor];
  return accessor(obj);
}
function identifyNull$1(obj) {
  if (obj === null) return null;
  else return identify$1(obj);
}
function identify$1(obj) {
  return typeof obj === "string" ? obj : obj.id;
}
function safeRun$1(fn2, ...args) {
  if (fn2) return fn2(...args);
}
function waitFor(fn2) {
  return new Promise((resolve, reject) => {
    let tries = 0;
    function check() {
      tries += 1;
      if (tries === 100) reject();
      if (fn2()) resolve();
      else setTimeout(check, 10);
    }
    check();
  });
}
function getInsertIndex(tree) {
  var _a, _b;
  const focus2 = tree.focusedNode;
  if (!focus2) return (_b = (_a = tree.root.children) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
  if (focus2.isOpen) return 0;
  if (focus2.parent) return focus2.childIndex + 1;
  return 0;
}
function getInsertParentId(tree) {
  const focus2 = tree.focusedNode;
  if (!focus2) return null;
  if (focus2.isOpen) return focus2.id;
  if (focus2.parent && !focus2.parent.isRoot) return focus2.parent.id;
  return null;
}
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  access,
  bound,
  dfs,
  focusNextElement,
  focusPrevElement,
  getInsertIndex,
  getInsertParentId,
  identify: identify$1,
  identifyNull: identifyNull$1,
  indexOf,
  isClosed,
  isDescendant,
  isItem,
  isOpenWithEmptyChildren,
  safeRun: safeRun$1,
  waitFor,
  walk
}, Symbol.toStringTag, { value: "Module" }));
const placeholderStyle = {
  display: "flex",
  alignItems: "center",
  zIndex: 1
};
const lineStyle = {
  flex: 1,
  height: "2px",
  background: "#4B91E2",
  borderRadius: "1px"
};
const circleStyle = {
  width: "4px",
  height: "4px",
  boxShadow: "0 0 0 3px #4B91E2",
  borderRadius: "50%"
};
const DefaultCursor = gn.memo(function DefaultCursor2({
  top,
  left,
  indent
}) {
  const style = {
    position: "absolute",
    pointerEvents: "none",
    top: top - 2 + "px",
    left: left + "px",
    right: indent + "px"
  };
  return u("div", {
    style: Object.assign(Object.assign({}, placeholderStyle), style),
    children: [u("div", {
      style: Object.assign({}, circleStyle)
    }), u("div", {
      style: Object.assign({}, lineStyle)
    })]
  });
});
function DefaultRow({
  node,
  attrs,
  innerRef,
  children
}) {
  return u("div", Object.assign({}, attrs, {
    ref: innerRef,
    onFocus: (e2) => e2.stopPropagation(),
    onClick: node.handleClick,
    children
  }));
}
function DefaultNode(props) {
  return u("div", {
    ref: props.dragHandle,
    style: props.style,
    children: [u("span", {
      onClick: (e2) => {
        e2.stopPropagation();
        props.node.toggle();
      },
      children: props.node.isLeaf ? "🌳" : props.node.isOpen ? "🗁" : "🗀"
    }), " ", props.node.isEditing ? u(Edit, Object.assign({}, props)) : u(Show, Object.assign({}, props))]
  });
}
function Show(props) {
  return u(S, {
    children: u("span", {
      children: props.node.data.name
    })
  });
}
function Edit({
  node
}) {
  const input = A$2();
  y$1(() => {
    var _a, _b;
    (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
    (_b = input.current) === null || _b === void 0 ? void 0 : _b.select();
  }, []);
  return u("input", {
    ref: input,
    // @ts-ignore
    defaultValue: node.data.name,
    onBlur: () => node.reset(),
    onKeyDown: (e2) => {
      var _a;
      if (e2.key === "Escape") node.reset();
      if (e2.key === "Enter") node.submit(((_a = input.current) === null || _a === void 0 ? void 0 : _a.value) || "");
    }
  });
}
function edit(id) {
  return {
    type: "EDIT",
    id
  };
}
function reducer$5(state = {
  id: null
}, action) {
  if (action.type === "EDIT") {
    return Object.assign(Object.assign({}, state), {
      id: action.id
    });
  } else {
    return state;
  }
}
function focus(id) {
  return {
    type: "FOCUS",
    id
  };
}
function treeBlur() {
  return {
    type: "TREE_BLUR"
  };
}
function reducer$4(state = {
  id: null,
  treeFocused: false
}, action) {
  if (action.type === "FOCUS") {
    return Object.assign(Object.assign({}, state), {
      id: action.id,
      treeFocused: true
    });
  } else if (action.type === "TREE_BLUR") {
    return Object.assign(Object.assign({}, state), {
      treeFocused: false
    });
  } else {
    return state;
  }
}
class NodeApi {
  constructor(params) {
    this.handleClick = (e2) => {
      if (e2.metaKey && !this.tree.props.disableMultiSelection) {
        this.isSelected ? this.deselect() : this.selectMulti();
      } else if (e2.shiftKey && !this.tree.props.disableMultiSelection) {
        this.selectContiguous();
      } else {
        this.select();
        this.activate();
      }
    };
    this.tree = params.tree;
    this.id = params.id;
    this.data = params.data;
    this.level = params.level;
    this.children = params.children;
    this.parent = params.parent;
    this.isDraggable = params.isDraggable;
    this.rowIndex = params.rowIndex;
  }
  get isRoot() {
    return this.id === ROOT_ID;
  }
  get isLeaf() {
    return !Array.isArray(this.children);
  }
  get isInternal() {
    return !this.isLeaf;
  }
  get isOpen() {
    return this.isLeaf ? false : this.tree.isOpen(this.id);
  }
  get isClosed() {
    return this.isLeaf ? false : !this.tree.isOpen(this.id);
  }
  get isEditable() {
    return this.tree.isEditable(this.data);
  }
  get isSelectable() {
    return this.tree.isSelectable(this.data);
  }
  get isEditing() {
    return this.tree.editingId === this.id;
  }
  get isSelected() {
    return this.tree.isSelected(this.id);
  }
  get isOnlySelection() {
    return this.isSelected && this.tree.hasOneSelection;
  }
  get isSelectedStart() {
    var _a;
    return this.isSelected && !((_a = this.prev) === null || _a === void 0 ? void 0 : _a.isSelected);
  }
  get isSelectedEnd() {
    var _a;
    return this.isSelected && !((_a = this.next) === null || _a === void 0 ? void 0 : _a.isSelected);
  }
  get isFocused() {
    return this.tree.isFocused(this.id);
  }
  get isDragging() {
    return this.tree.isDragging(this.id);
  }
  get willReceiveDrop() {
    return this.tree.willReceiveDrop(this.id);
  }
  get state() {
    return {
      isClosed: this.isClosed,
      isDragging: this.isDragging,
      isEditing: this.isEditing,
      isFocused: this.isFocused,
      isInternal: this.isInternal,
      isLeaf: this.isLeaf,
      isOpen: this.isOpen,
      isSelected: this.isSelected,
      isSelectedEnd: this.isSelectedEnd,
      isSelectedStart: this.isSelectedStart,
      willReceiveDrop: this.willReceiveDrop
    };
  }
  get childIndex() {
    if (this.parent && this.parent.children) {
      return this.parent.children.findIndex((child) => child.id === this.id);
    } else {
      return -1;
    }
  }
  get next() {
    if (this.rowIndex === null) return null;
    return this.tree.at(this.rowIndex + 1);
  }
  get prev() {
    if (this.rowIndex === null) return null;
    return this.tree.at(this.rowIndex - 1);
  }
  get nextSibling() {
    var _a, _b;
    const i = this.childIndex;
    return (_b = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.children[i + 1]) !== null && _b !== void 0 ? _b : null;
  }
  isAncestorOf(node) {
    if (!node) return false;
    let ancestor = node;
    while (ancestor) {
      if (ancestor.id === this.id) return true;
      ancestor = ancestor.parent;
    }
    return false;
  }
  select() {
    this.tree.select(this);
  }
  deselect() {
    this.tree.deselect(this);
  }
  selectMulti() {
    this.tree.selectMulti(this);
  }
  selectContiguous() {
    this.tree.selectContiguous(this);
  }
  activate() {
    this.tree.activate(this);
  }
  focus() {
    this.tree.focus(this);
  }
  toggle() {
    this.tree.toggle(this);
  }
  open() {
    this.tree.open(this);
  }
  openParents() {
    this.tree.openParents(this);
  }
  close() {
    this.tree.close(this);
  }
  submit(value) {
    this.tree.submit(this, value);
  }
  reset() {
    this.tree.reset();
  }
  clone() {
    return new NodeApi(Object.assign({}, this));
  }
  edit() {
    return this.tree.edit(this);
  }
}
const ROOT_ID = "__REACT_ARBORIST_INTERNAL_ROOT__";
function createRoot$1(tree) {
  var _a;
  function visitSelfAndChildren(data2, level, parent) {
    const id = tree.accessId(data2);
    const node = new NodeApi({
      tree,
      data: data2,
      level,
      parent,
      id,
      children: null,
      isDraggable: tree.isDraggable(data2),
      rowIndex: null
    });
    const children = tree.accessChildren(data2);
    if (children) {
      node.children = children.map((child) => visitSelfAndChildren(child, level + 1, node));
    }
    return node;
  }
  const root = new NodeApi({
    tree,
    id: ROOT_ID,
    // @ts-ignore
    data: {
      id: ROOT_ID
    },
    level: -1,
    parent: null,
    children: null,
    isDraggable: true,
    rowIndex: null
  });
  const data = (_a = tree.props.data) !== null && _a !== void 0 ? _a : [];
  root.children = data.map((child) => {
    return visitSelfAndChildren(child, 0, root);
  });
  return root;
}
const actions$2 = {
  open(id, filtered) {
    return {
      type: "VISIBILITY_OPEN",
      id,
      filtered
    };
  },
  close(id, filtered) {
    return {
      type: "VISIBILITY_CLOSE",
      id,
      filtered
    };
  },
  toggle(id, filtered) {
    return {
      type: "VISIBILITY_TOGGLE",
      id,
      filtered
    };
  },
  clear(filtered) {
    return {
      type: "VISIBILITY_CLEAR",
      filtered
    };
  }
};
function openMapReducer(state = {}, action) {
  if (action.type === "VISIBILITY_OPEN") {
    return Object.assign(Object.assign({}, state), {
      [action.id]: true
    });
  } else if (action.type === "VISIBILITY_CLOSE") {
    return Object.assign(Object.assign({}, state), {
      [action.id]: false
    });
  } else if (action.type === "VISIBILITY_TOGGLE") {
    const prev = state[action.id];
    return Object.assign(Object.assign({}, state), {
      [action.id]: !prev
    });
  } else if (action.type === "VISIBILITY_CLEAR") {
    return {};
  } else {
    return state;
  }
}
function reducer$3(state = {
  filtered: {},
  unfiltered: {}
}, action) {
  if (!action.type.startsWith("VISIBILITY")) return state;
  if (action.filtered) {
    return Object.assign(Object.assign({}, state), {
      filtered: openMapReducer(state.filtered, action)
    });
  } else {
    return Object.assign(Object.assign({}, state), {
      unfiltered: openMapReducer(state.unfiltered, action)
    });
  }
}
const initialState$2 = (props) => {
  var _a;
  return {
    nodes: {
      // Changes together
      open: {
        filtered: {},
        unfiltered: (_a = props === null || props === void 0 ? void 0 : props.initialOpenState) !== null && _a !== void 0 ? _a : {}
      },
      focus: {
        id: null,
        treeFocused: false
      },
      edit: {
        id: null
      },
      drag: {
        id: null,
        selectedIds: [],
        destinationParentId: null,
        destinationIndex: null
      },
      selection: {
        ids: /* @__PURE__ */ new Set(),
        anchor: null,
        mostRecent: null
      }
    },
    dnd: {
      cursor: {
        type: "none"
      },
      dragId: null,
      dragIds: [],
      parentId: null,
      index: -1
    }
  };
};
const actions$1 = {
  clear: () => ({
    type: "SELECTION_CLEAR"
  }),
  only: (id) => ({
    type: "SELECTION_ONLY",
    id: identify$1(id)
  }),
  add: (id) => ({
    type: "SELECTION_ADD",
    ids: (Array.isArray(id) ? id : [id]).map(identify$1)
  }),
  remove: (id) => ({
    type: "SELECTION_REMOVE",
    ids: (Array.isArray(id) ? id : [id]).map(identify$1)
  }),
  set: (args) => Object.assign({
    type: "SELECTION_SET"
  }, args),
  mostRecent: (id) => ({
    type: "SELECTION_MOST_RECENT",
    id: id === null ? null : identify$1(id)
  }),
  anchor: (id) => ({
    type: "SELECTION_ANCHOR",
    id: id === null ? null : identify$1(id)
  })
};
function reducer$2(state = initialState$2()["nodes"]["selection"], action) {
  const ids = state.ids;
  switch (action.type) {
    case "SELECTION_CLEAR":
      return Object.assign(Object.assign({}, state), {
        ids: /* @__PURE__ */ new Set()
      });
    case "SELECTION_ONLY":
      return Object.assign(Object.assign({}, state), {
        ids: /* @__PURE__ */ new Set([action.id])
      });
    case "SELECTION_ADD":
      if (action.ids.length === 0) return state;
      action.ids.forEach((id) => ids.add(id));
      return Object.assign(Object.assign({}, state), {
        ids: new Set(ids)
      });
    case "SELECTION_REMOVE":
      if (action.ids.length === 0) return state;
      action.ids.forEach((id) => ids.delete(id));
      return Object.assign(Object.assign({}, state), {
        ids: new Set(ids)
      });
    case "SELECTION_SET":
      return Object.assign(Object.assign({}, state), {
        ids: action.ids,
        mostRecent: action.mostRecent,
        anchor: action.anchor
      });
    case "SELECTION_MOST_RECENT":
      return Object.assign(Object.assign({}, state), {
        mostRecent: action.id
      });
    case "SELECTION_ANCHOR":
      return Object.assign(Object.assign({}, state), {
        anchor: action.id
      });
    default:
      return state;
  }
}
const actions = {
  cursor(cursor) {
    return {
      type: "DND_CURSOR",
      cursor
    };
  },
  dragStart(id, dragIds) {
    return {
      type: "DND_DRAG_START",
      id,
      dragIds
    };
  },
  dragEnd() {
    return {
      type: "DND_DRAG_END"
    };
  },
  hovering(parentId, index2) {
    return {
      type: "DND_HOVERING",
      parentId,
      index: index2
    };
  }
};
function reducer$1(state = initialState$2()["dnd"], action) {
  switch (action.type) {
    case "DND_CURSOR":
      return Object.assign(Object.assign({}, state), {
        cursor: action.cursor
      });
    case "DND_DRAG_START":
      return Object.assign(Object.assign({}, state), {
        dragId: action.id,
        dragIds: action.dragIds
      });
    case "DND_DRAG_END":
      return initialState$2()["dnd"];
    case "DND_HOVERING":
      return Object.assign(Object.assign({}, state), {
        parentId: action.parentId,
        index: action.index
      });
    default:
      return state;
  }
}
const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
};
const getStyle = (offset) => {
  if (!offset) return {
    display: "none"
  };
  const {
    x: x2,
    y: y2
  } = offset;
  return {
    transform: `translate(${x2}px, ${y2}px)`
  };
};
const getCountStyle = (offset) => {
  if (!offset) return {
    display: "none"
  };
  const {
    x: x2,
    y: y2
  } = offset;
  return {
    transform: `translate(${x2 + 10}px, ${y2 + 10}px)`
  };
};
function DefaultDragPreview({
  offset,
  mouse,
  id,
  dragIds,
  isDragging
}) {
  return u(Overlay, {
    isDragging,
    children: [u(Position, {
      offset,
      children: u(PreviewNode, {
        id,
        dragIds
      })
    }), u(Count, {
      mouse,
      count: dragIds.length
    })]
  });
}
const Overlay = N(function Overlay2(props) {
  if (!props.isDragging) return null;
  return u("div", {
    style: layerStyles,
    children: props.children
  });
});
function Position(props) {
  return u("div", {
    className: "row preview",
    style: getStyle(props.offset),
    children: props.children
  });
}
function Count(props) {
  const {
    count,
    mouse
  } = props;
  if (count > 1) return u("div", {
    className: "selected-count",
    style: getCountStyle(mouse),
    children: count
  });
  else return null;
}
const PreviewNode = N(function PreviewNode2(props) {
  const tree = useTreeApi();
  const node = tree.get(props.id);
  if (!node) return null;
  return u(tree.renderNode, {
    preview: true,
    node,
    style: {
      paddingLeft: node.level * tree.indent,
      opacity: 0.2,
      background: "transparent"
    },
    tree
  });
});
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
function _assertThisInitialized(e2) {
  if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _inheritsLoose(t2, o) {
  t2.prototype = Object.create(o.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o);
}
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var hasNativePerformanceNow = typeof performance === "object" && typeof performance.now === "function";
var now = hasNativePerformanceNow ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();
  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }
  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var size$1 = -1;
function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (size$1 === -1 || recalculate) {
    var div = document.createElement("div");
    var style = div.style;
    style.width = "50px";
    style.height = "50px";
    style.overflow = "scroll";
    document.body.appendChild(div);
    size$1 = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return size$1;
}
var cachedRTLResult = null;
function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement("div");
    var outerStyle = outerDiv.style;
    outerStyle.width = "50px";
    outerStyle.height = "50px";
    outerStyle.overflow = "scroll";
    outerStyle.direction = "rtl";
    var innerDiv = document.createElement("div");
    var innerStyle = innerDiv.style;
    innerStyle.width = "100px";
    innerStyle.height = "100px";
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);
    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = "positive-descending";
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = "negative";
      } else {
        cachedRTLResult = "positive-ascending";
      }
    }
    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }
  return cachedRTLResult;
}
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;
var defaultItemKey$1 = function defaultItemKey(index2, data) {
  return index2;
};
function createListComponent(_ref) {
  var _class;
  var getItemOffset2 = _ref.getItemOffset, getEstimatedTotalSize2 = _ref.getEstimatedTotalSize, getItemSize2 = _ref.getItemSize, getOffsetForIndexAndAlignment2 = _ref.getOffsetForIndexAndAlignment, getStartIndexForOffset2 = _ref.getStartIndexForOffset, getStopIndexForStartIndex2 = _ref.getStopIndexForStartIndex, initInstanceProps2 = _ref.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange, validateProps2 = _ref.validateProps;
  return _class = /* @__PURE__ */ (function(_PureComponent) {
    _inheritsLoose(List, _PureComponent);
    function List(props) {
      var _this;
      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps2(_this.props, _assertThisInitialized(_this));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_this),
        isScrolling: false,
        scrollDirection: "forward",
        scrollOffset: typeof _this.props.initialScrollOffset === "number" ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoizeOne(function(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoizeOne(function(scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection,
          scrollOffset,
          scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;
      _this._getItemStyle = function(index2) {
        var _this$props = _this.props, direction = _this$props.direction, itemSize = _this$props.itemSize, layout = _this$props.layout;
        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);
        var style;
        if (itemStyleCache.hasOwnProperty(index2)) {
          style = itemStyleCache[index2];
        } else {
          var _offset = getItemOffset2(_this.props, index2, _this._instanceProps);
          var size2 = getItemSize2(_this.props, index2, _this._instanceProps);
          var isHorizontal = direction === "horizontal" || layout === "horizontal";
          var isRtl = direction === "rtl";
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index2] = style = {
            position: "absolute",
            left: isRtl ? void 0 : offsetHorizontal,
            right: isRtl ? offsetHorizontal : void 0,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size2 : "100%",
            width: isHorizontal ? size2 : "100%"
          };
        }
        return style;
      };
      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoizeOne(function(_2, __, ___) {
        return {};
      });
      _this._onScrollHorizontal = function(event) {
        var _event$currentTarget = event.currentTarget, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollWidth = _event$currentTarget.scrollWidth;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            return null;
          }
          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                scrollOffset = -scrollLeft;
                break;
              case "positive-descending":
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          }
          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._onScrollVertical = function(event) {
        var _event$currentTarget2 = event.currentTarget, clientHeight = _event$currentTarget2.clientHeight, scrollHeight = _event$currentTarget2.scrollHeight, scrollTop = _event$currentTarget2.scrollTop;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollTop) {
            return null;
          }
          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._outerRefSetter = function(ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;
        if (typeof outerRef === "function") {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) {
          outerRef.current = ref;
        }
      };
      _this._resetIsScrollingDebounced = function() {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }
        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };
      _this._resetIsScrolling = function() {
        _this._resetIsScrollingTimeoutId = null;
        _this.setState({
          isScrolling: false
        }, function() {
          _this._getItemStyleCache(-1, null);
        });
      };
      return _this;
    }
    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps2(nextProps);
      return null;
    };
    var _proto = List.prototype;
    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function(prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
          scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };
    _proto.scrollToItem = function scrollToItem(index2, align) {
      if (align === void 0) {
        align = "auto";
      }
      var _this$props2 = this.props, itemCount = _this$props2.itemCount, layout = _this$props2.layout;
      var scrollOffset = this.state.scrollOffset;
      index2 = Math.max(0, Math.min(index2, itemCount - 1));
      var scrollbarSize = 0;
      if (this._outerRef) {
        var outerRef = this._outerRef;
        if (layout === "vertical") {
          scrollbarSize = outerRef.scrollWidth > outerRef.clientWidth ? getScrollbarSize() : 0;
        } else {
          scrollbarSize = outerRef.scrollHeight > outerRef.clientHeight ? getScrollbarSize() : 0;
        }
      }
      this.scrollTo(getOffsetForIndexAndAlignment2(this.props, index2, align, scrollOffset, this._instanceProps, scrollbarSize));
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props, direction = _this$props3.direction, initialScrollOffset = _this$props3.initialScrollOffset, layout = _this$props3.layout;
      if (typeof initialScrollOffset === "number" && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props4 = this.props, direction = _this$props4.direction, layout = _this$props4.layout;
      var _this$state = this.state, scrollOffset = _this$state.scrollOffset, scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;
      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                outerRef.scrollLeft = -scrollOffset;
                break;
              case "positive-ascending":
                outerRef.scrollLeft = scrollOffset;
                break;
              default:
                var clientWidth = outerRef.clientWidth, scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };
    _proto.render = function render() {
      var _this$props5 = this.props, children = _this$props5.children, className = _this$props5.className, direction = _this$props5.direction, height = _this$props5.height, innerRef = _this$props5.innerRef, innerElementType = _this$props5.innerElementType, innerTagName = _this$props5.innerTagName, itemCount = _this$props5.itemCount, itemData = _this$props5.itemData, _this$props5$itemKey = _this$props5.itemKey, itemKey = _this$props5$itemKey === void 0 ? defaultItemKey$1 : _this$props5$itemKey, layout = _this$props5.layout, outerElementType = _this$props5.outerElementType, outerTagName = _this$props5.outerTagName, style = _this$props5.style, useIsScrolling = _this$props5.useIsScrolling, width = _this$props5.width;
      var isScrolling = this.state.isScrolling;
      var isHorizontal = direction === "horizontal" || layout === "horizontal";
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;
      var _this$_getRangeToRend = this._getRangeToRender(), startIndex = _this$_getRangeToRend[0], stopIndex = _this$_getRangeToRend[1];
      var items2 = [];
      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items2.push(k$2(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : void 0,
            style: this._getItemStyle(_index)
          }));
        }
      }
      var estimatedTotalSize = getEstimatedTotalSize2(this.props, this._instanceProps);
      return k$2(outerElementType || outerTagName || "div", {
        className,
        onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: "relative",
          height,
          width,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction
        }, style)
      }, k$2(innerElementType || innerTagName || "div", {
        children: items2,
        ref: innerRef,
        style: {
          height: isHorizontal ? "100%" : estimatedTotalSize,
          pointerEvents: isScrolling ? "none" : void 0,
          width: isHorizontal ? estimatedTotalSize : "100%"
        }
      }));
    };
    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === "function") {
        var itemCount = this.props.itemCount;
        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(), _overscanStartIndex = _this$_getRangeToRend2[0], _overscanStopIndex = _this$_getRangeToRend2[1], _visibleStartIndex = _this$_getRangeToRend2[2], _visibleStopIndex = _this$_getRangeToRend2[3];
          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }
      if (typeof this.props.onScroll === "function") {
        var _this$state2 = this.state, _scrollDirection = _this$state2.scrollDirection, _scrollOffset = _this$state2.scrollOffset, _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    };
    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props6 = this.props, itemCount = _this$props6.itemCount, overscanCount = _this$props6.overscanCount;
      var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollDirection = _this$state3.scrollDirection, scrollOffset = _this$state3.scrollOffset;
      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getStartIndexForOffset2(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex2(this.props, startIndex, scrollOffset, this._instanceProps);
      var overscanBackward = !isScrolling || scrollDirection === "backward" ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === "forward" ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    return List;
  })(M), _class.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: false
  }, _class;
}
var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  _ref2.children;
  _ref2.direction;
  _ref2.height;
  _ref2.layout;
  _ref2.innerTagName;
  _ref2.outerTagName;
  _ref2.width;
  _ref3.instance;
};
var FixedSizeList = /* @__PURE__ */ createListComponent({
  getItemOffset: function getItemOffset(_ref, index2) {
    var itemSize = _ref.itemSize;
    return index2 * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index2) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount, itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index2, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = _ref4.direction, height = _ref4.height, itemCount = _ref4.itemCount, itemSize = _ref4.itemSize, layout = _ref4.layout, width = _ref4.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size2 = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size2);
    var maxOffset = Math.min(lastItemOffset, index2 * itemSize);
    var minOffset = Math.max(0, index2 * itemSize - size2 + itemSize + scrollbarSize);
    if (align === "smart") {
      if (scrollOffset >= minOffset - size2 && scrollOffset <= maxOffset + size2) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center": {
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(size2 / 2)) {
          return 0;
        } else if (middleOffset > lastItemOffset + Math.floor(size2 / 2)) {
          return lastItemOffset;
        } else {
          return middleOffset;
        }
      }
      case "auto":
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount, itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction, height = _ref6.height, itemCount = _ref6.itemCount, itemSize = _ref6.itemSize, layout = _ref6.layout, width = _ref6.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var offset = startIndex * itemSize;
    var size2 = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size2 + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(
      itemCount - 1,
      startIndex + numVisibleItems - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    _ref7.itemSize;
  }
});
function Cursor() {
  var _a, _b;
  const tree = useTreeApi();
  const state = useDndContext();
  const cursor = state.cursor;
  if (!cursor || cursor.type !== "line") return null;
  const indent = tree.indent;
  const top = tree.rowHeight * cursor.index + ((_b = (_a = tree.props.padding) !== null && _a !== void 0 ? _a : tree.props.paddingTop) !== null && _b !== void 0 ? _b : 0);
  const left = indent * cursor.level;
  const Cursor2 = tree.renderCursor;
  return u(Cursor2, {
    top,
    left,
    indent
  });
}
var __rest$1 = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0) t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s2); i < p2.length; i++) {
    if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i])) t2[p2[i]] = s2[p2[i]];
  }
  return t2;
};
const ListOuterElement = D(function Outer(props, ref) {
  const {
    children
  } = props, rest = __rest$1(props, ["children"]);
  const tree = useTreeApi();
  return u("div", Object.assign({
    // @ts-ignore
    ref
  }, rest, {
    onClick: (e2) => {
      if (e2.currentTarget === e2.target) tree.deselectAll();
    },
    children: [u(DropContainer, {}), children]
  }));
});
const DropContainer = () => {
  const tree = useTreeApi();
  return u("div", {
    style: {
      height: tree.visibleNodes.length * tree.rowHeight,
      width: "100%",
      position: "absolute",
      left: "0",
      right: "0"
    },
    children: u(Cursor, {})
  });
};
var __rest = function(s2, e2) {
  var t2 = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0) t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s2); i < p2.length; i++) {
    if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i])) t2[p2[i]] = s2[p2[i]];
  }
  return t2;
};
const ListInnerElement = D(function InnerElement(_a, ref) {
  var _b, _c, _d, _e;
  var {
    style
  } = _a, rest = __rest(_a, ["style"]);
  const tree = useTreeApi();
  const paddingTop = (_c = (_b = tree.props.padding) !== null && _b !== void 0 ? _b : tree.props.paddingTop) !== null && _c !== void 0 ? _c : 0;
  const paddingBottom = (_e = (_d = tree.props.padding) !== null && _d !== void 0 ? _d : tree.props.paddingBottom) !== null && _e !== void 0 ? _e : 0;
  return u("div", Object.assign({
    ref,
    style: Object.assign(Object.assign({}, style), {
      height: `${parseFloat(style.height) + paddingTop + paddingBottom}px`
    })
  }, rest));
});
var DndContext = X$2({
  dragDropManager: void 0
});
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2["SOURCE"] = "SOURCE";
  HandlerRole2["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));
function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
var INIT_COORDS = "dnd-core/INIT_COORDS";
var BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
var PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
var HOVER = "dnd-core/HOVER";
var DROP = "dnd-core/DROP";
var END_DRAG = "dnd-core/END_DRAG";
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}
function _typeof$3(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$3 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$3(obj);
}
function get(obj, path, defaultValue) {
  return path.split(".").reduce(function(a2, c2) {
    return a2 && a2[c2] ? a2[c2] : defaultValue || null;
  }, obj);
}
function without$1(items2, item) {
  return items2.filter(function(i) {
    return i !== item;
  });
}
function isObject(input) {
  return _typeof$3(input) === "object";
}
function xor$1(itemsA, itemsB) {
  var map = /* @__PURE__ */ new Map();
  var insertItem = function insertItem2(item) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function(count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(function(t2) {
    return itemsB.indexOf(t2) > -1;
  });
}
var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource, publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc, clientOffset = options.clientOffset, getSourceClientOffset2 = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants$1(sourceIds, monitor, registry);
    var sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    var sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2) {
        throw new Error("getSourceClientOffset must be defined");
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2);
      sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId);
    if (item == null) {
      return void 0;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants$1(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
  sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;
  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}
function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
  };
}
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(function(t2) {
    return t2 === draggedItemType;
  }) : targetType === draggedItemType;
}
function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, clientOffset = _ref.clientOffset;
    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    var target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function(key) {
        _defineProperty$j(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$j(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyInvariants(monitor);
    var targetIds = getDroppableTargets(monitor);
    targetIds.forEach(function(targetId, index2) {
      var dropResult = determineDropResult(targetId, index2, registry, monitor);
      var action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread$4(_objectSpread$4({}, options), dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function verifyInvariants(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index2, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : void 0;
  verifyDropResultType(dropResult);
  if (typeof dropResult === "undefined") {
    dropResult = index2 === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult === "undefined" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}
function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();
    if (sourceId != null) {
      var source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}
function _classCallCheck$e(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$e(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$e(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$e(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$i(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DragDropManagerImpl = /* @__PURE__ */ (function() {
  function DragDropManagerImpl2(store, monitor) {
    var _this = this;
    _classCallCheck$e(this, DragDropManagerImpl2);
    _defineProperty$i(this, "store", void 0);
    _defineProperty$i(this, "monitor", void 0);
    _defineProperty$i(this, "backend", void 0);
    _defineProperty$i(this, "isSetUp", false);
    _defineProperty$i(this, "handleRefCountChange", function() {
      var shouldSetUp = _this.store.getState().refCount > 0;
      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();
          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();
          _this.isSetUp = false;
        }
      }
    });
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }
  _createClass$e(DragDropManagerImpl2, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;
      function bindActionCreator(actionCreator) {
        return function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var action = actionCreator.apply(manager, args);
          if (typeof action !== "undefined") {
            dispatch(action);
          }
        };
      }
      var actions2 = createDragDropActions(this);
      return Object.keys(actions2).reduce(function(boundActions, key) {
        var action = actions2[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);
  return DragDropManagerImpl2;
})();
function formatProdErrorMessage$1(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable$1 = (function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
})();
var randomString$1 = function randomString() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes$1 = {
  INIT: "@@redux/INIT" + randomString$1(),
  REPLACE: "@@redux/REPLACE" + randomString$1()
};
function isPlainObject$1(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore$1(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage$1(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage$1(1));
    }
    return enhancer(createStore$1)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage$1(2));
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage$1(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage$1(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage$1(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage$1(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index2 = nextListeners.indexOf(listener);
      nextListeners.splice(index2, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$1(action)) {
      throw new Error(formatProdErrorMessage$1(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage$1(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage$1(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage$1(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes$1.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage$1(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable$1] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes$1.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable$1] = observable, _ref2;
}
var strictEquality = function strictEquality2(a2, b2) {
  return a2 === b2;
};
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
function areArraysEqual(a2, b2) {
  var isEqual2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : strictEquality;
  if (a2.length !== b2.length) {
    return false;
  }
  for (var i = 0; i < a2.length; ++i) {
    if (!isEqual2(a2[i], b2[i])) {
      return false;
    }
  }
  return true;
}
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function(key) {
        _defineProperty$h(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$h(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var initialState$1 = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce$5() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState$1;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  var payload = action.payload;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState$1;
    default:
      return state;
  }
}
var ADD_SOURCE = "dnd-core/ADD_SOURCE";
var ADD_TARGET = "dnd-core/ADD_TARGET";
var REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
var REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty$g(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$g(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function reduce$4() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  var payload = action.payload;
  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        isSourcePublic: true
      });
    case HOVER:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        targetIds: without$1(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread$2(_objectSpread$2({}, state), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}
function reduce$3() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}
var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === "undefined") {
    return true;
  }
  var commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}
function reduce$2() {
  var action = arguments.length > 1 ? arguments[1] : void 0;
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  var _action$payload = action.payload, _action$payload$targe = _action$payload.targetIds, targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe, _action$payload$prevT = _action$payload.prevTargetIds, prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = xor$1(targetIds, prevTargetIds);
  var didChange2 = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange2) {
    return NONE;
  }
  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}
function reduce$1() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return state + 1;
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$f(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$f(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function reduce() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: reduce$2(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread$1(_objectSpread$1({}, action.payload), {}, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce$5(state.dragOffset, action),
    refCount: reduce$3(state.refCount, action),
    dragOperation: reduce$4(state.dragOperation, action),
    stateId: reduce$1(state.stateId)
  };
}
function add(a2, b2) {
  return {
    x: a2.x + b2.x,
    y: a2.y + b2.y
  };
}
function subtract(a2, b2) {
  return {
    x: a2.x - b2.x,
    y: a2.y - b2.y
  };
}
function getSourceClientOffset(state) {
  var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset, initialSourceClientOffset = state.initialSourceClientOffset;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}
function _classCallCheck$d(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$d(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$d(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$d(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$e(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DragDropMonitorImpl = /* @__PURE__ */ (function() {
  function DragDropMonitorImpl2(store, registry) {
    _classCallCheck$d(this, DragDropMonitorImpl2);
    _defineProperty$e(this, "store", void 0);
    _defineProperty$e(this, "registry", void 0);
    this.store = store;
    this.registry = registry;
  }
  _createClass$d(DragDropMonitorImpl2, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      };
      var handlerIds = options.handlerIds;
      invariant(typeof listener === "function", "listener must be a function.");
      invariant(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
      var prevStateId = this.store.getState().stateId;
      var handleChange = function handleChange2() {
        var state = _this.store.getState();
        var currentStateId = state.stateId;
        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };
      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;
      invariant(typeof listener === "function", "listener must be a function.");
      var previousState = this.store.getState().dragOffset;
      var handleChange = function handleChange2() {
        var nextState = _this2.store.getState().dragOffset;
        if (nextState === previousState) {
          return;
        }
        previousState = nextState;
        listener();
      };
      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId);
      invariant(source, "Expected to find a valid source. sourceId=".concat(sourceId));
      if (this.isDragging()) {
        return false;
      }
      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      if (!targetId) {
        return false;
      }
      var target = this.registry.getTarget(targetId);
      invariant(target, "Expected to find a valid target. targetId=".concat(targetId));
      if (!this.isDragging() || this.didDrop()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId, true);
      invariant(source, "Expected to find a valid source. sourceId=".concat(sourceId));
      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }
      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();
      if (sourceType !== draggedItemType) {
        return false;
      }
      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: false
      };
      if (!targetId) {
        return false;
      }
      var shallow = options.shallow;
      if (!this.isDragging()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      if (draggedItemType && !matchesType(targetType, draggedItemType)) {
        return false;
      }
      var targetIds = this.getTargetIds();
      if (!targetIds.length) {
        return false;
      }
      var index2 = targetIds.indexOf(targetId);
      if (shallow) {
        return index2 === targetIds.length - 1;
      } else {
        return index2 > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset$1() {
      return getSourceClientOffset(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset$1() {
      return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
  }]);
  return DragDropMonitorImpl2;
})();
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$2 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$2(obj);
}
function validateSourceContract(source) {
  invariant(typeof source.canDrag === "function", "Expected canDrag to be a function.");
  invariant(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
  invariant(typeof source.endDrag === "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop === "function", "Expected canDrop to be a function.");
  invariant(typeof target.hover === "function", "Expected hover to be a function.");
  invariant(typeof target.drop === "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function(t2) {
      return validateType(t2, false);
    });
    return;
  }
  invariant(typeof type === "string" || _typeof$2(type) === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const scope = typeof global !== "undefined" ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    const timeoutHandle = setTimeout(handleTimer, 0);
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer = new BrowserMutationObserver(callback);
  const node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
const makeRequestCall = typeof BrowserMutationObserver === "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  makeRequestCallFromMutationObserver
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  makeRequestCallFromTimer
);
class AsapQueue {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(task) {
    const {
      queue: q2,
      requestFlush
    } = this;
    if (!q2.length) {
      requestFlush();
      this.flushing = true;
    }
    q2[q2.length] = task;
  }
  constructor() {
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = false;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      const {
        queue: q2
      } = this;
      while (this.index < q2.length) {
        const currentIndex = this.index;
        this.index++;
        q2[currentIndex].call();
        if (this.index > this.capacity) {
          for (let scan = 0, newLength = q2.length - this.index; scan < newLength; scan++) {
            q2[scan] = q2[scan + this.index];
          }
          q2.length -= this.index;
          this.index = 0;
        }
      }
      q2.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    this.registerPendingError = (err) => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
    });
  }
}
class RawTask {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
}
class TaskFactory {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(this.onError, (t2) => tasks[tasks.length] = t2);
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
}
const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}
function _classCallCheck$c(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$c(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$c(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$c(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$d(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$6(arr, i) {
  return _arrayWithHoles$6(arr) || _iterableToArrayLimit$6(arr, i) || _unsupportedIterableToArray$7(arr, i) || _nonIterableRest$6();
}
function _nonIterableRest$6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$7(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$7(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$7(o, minLen);
}
function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$6(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$6(arr) {
  if (Array.isArray(arr)) return arr;
}
function getNextHandlerId(role) {
  var id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return "S".concat(id);
    case HandlerRole.TARGET:
      return "T".concat(id);
    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      invariant(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}
function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;
  do {
    var _entries$next = entries.next(), done = _entries$next.done, _entries$next$value = _slicedToArray$6(_entries$next.value, 2), value = _entries$next$value[1];
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
var HandlerRegistryImpl = /* @__PURE__ */ (function() {
  function HandlerRegistryImpl2(store) {
    _classCallCheck$c(this, HandlerRegistryImpl2);
    _defineProperty$d(this, "types", /* @__PURE__ */ new Map());
    _defineProperty$d(this, "dragSources", /* @__PURE__ */ new Map());
    _defineProperty$d(this, "dropTargets", /* @__PURE__ */ new Map());
    _defineProperty$d(this, "pinnedSourceId", null);
    _defineProperty$d(this, "pinnedSource", null);
    _defineProperty$d(this, "store", void 0);
    this.store = store;
  }
  _createClass$c(HandlerRegistryImpl2, [{
    key: "addSource",
    value: function addSource$1(type, source) {
      validateType(type);
      validateSourceContract(source);
      var sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
      this.store.dispatch(addSource(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget$1(type, target) {
      validateType(type, true);
      validateTargetContract(target);
      var targetId = this.addHandler(HandlerRole.TARGET, type, target);
      this.store.dispatch(addTarget(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler2) {
      return mapContainsValue(this.dragSources, handler2) || mapContainsValue(this.dropTargets, handler2);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget2(targetId) {
      invariant(this.isTargetId(targetId), "Expected a valid target ID.");
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      invariant(this.isTargetId(targetId), "Expected a valid target ID.");
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource$1(sourceId) {
      var _this = this;
      invariant(this.getSource(sourceId), "Expected an existing source.");
      this.store.dispatch(removeSource(sourceId));
      asap(function() {
        _this.dragSources.delete(sourceId);
        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget$1(targetId) {
      invariant(this.getTarget(targetId), "Expected an existing target.");
      this.store.dispatch(removeTarget(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      invariant(source, "Expected an existing source.");
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      invariant(this.pinnedSource, "No source is pinned at the time.");
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler2) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);
      if (role === HandlerRole.SOURCE) {
        this.dragSources.set(id, handler2);
      } else if (role === HandlerRole.TARGET) {
        this.dropTargets.set(id, handler2);
      }
      return id;
    }
  }]);
  return HandlerRegistryImpl2;
})();
function createDragDropManager(backendFactory) {
  var globalContext = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  var backendOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var debugMode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var store = makeStoreInstance(debugMode);
  var monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  var manager = new DragDropManagerImpl(store, monitor);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  var reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore$1(reduce, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var _excluded = ["children"];
function _slicedToArray$5(arr, i) {
  return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _unsupportedIterableToArray$6(arr, i) || _nonIterableRest$5();
}
function _nonIterableRest$5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$6(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$6(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$6(o, minLen);
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$5(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$5(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var refCount = 0;
var INSTANCE_SYM = /* @__PURE__ */ Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = N(function DndProvider2(_ref) {
  var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded);
  var _getDndContextValue = getDndContextValue(props), _getDndContextValue2 = _slicedToArray$5(_getDndContextValue, 2), manager = _getDndContextValue2[0], isGlobalInstance = _getDndContextValue2[1];
  y$1(function() {
    if (isGlobalInstance) {
      var context = getGlobalContext();
      ++refCount;
      return function() {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
  }, []);
  return u(DndContext.Provider, Object.assign({
    value: manager
  }, {
    children
  }), void 0);
});
function getDndContextValue(props) {
  if ("manager" in props) {
    var _manager = {
      dragDropManager: props.manager
    };
    return [_manager, false];
  }
  var manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  var isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}
function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : void 0;
  var debugMode = arguments.length > 3 ? arguments[3] : void 0;
  var ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global !== "undefined" ? global : window;
}
N(function DragPreviewImage(_ref) {
  var connect = _ref.connect, src = _ref.src;
  y$1(function() {
    if (typeof Image === "undefined") return;
    var connected = false;
    var img = new Image();
    img.src = src;
    img.onload = function() {
      connect(img);
      connected = true;
    };
    return function() {
      if (connected) {
        connect(null);
      }
    };
  });
  return null;
});
function _classCallCheck$b(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$b(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$b(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$b(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$c(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl = /* @__PURE__ */ (function() {
  function DragSourceMonitorImpl2(manager) {
    _classCallCheck$b(this, DragSourceMonitorImpl2);
    _defineProperty$c(this, "internalMonitor", void 0);
    _defineProperty$c(this, "sourceId", null);
    this.internalMonitor = manager.getMonitor();
  }
  _createClass$b(DragSourceMonitorImpl2, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }
      invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset2() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset2() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);
  return DragSourceMonitorImpl2;
})();
function _classCallCheck$a(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$a(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$a(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$a(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$b(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var isCallingCanDrop = false;
var DropTargetMonitorImpl = /* @__PURE__ */ (function() {
  function DropTargetMonitorImpl2(manager) {
    _classCallCheck$a(this, DropTargetMonitorImpl2);
    _defineProperty$b(this, "internalMonitor", void 0);
    _defineProperty$b(this, "targetId", null);
    this.internalMonitor = manager.getMonitor();
  }
  _createClass$a(DropTargetMonitorImpl2, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      if (!this.targetId) {
        return false;
      }
      invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }
      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset2() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset2() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);
  return DropTargetMonitorImpl2;
})();
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  var displayName = element.type.displayName || element.type.name || "the component";
  throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
}
function wrapHookToRecognizeElement(hook) {
  return function() {
    var elementOrNode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!hn(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options);
      return node;
    }
    var element = elementOrNode;
    throwIfCompositeComponentElement(element);
    var ref = options ? function(node2) {
      return hook(node2, options);
    } : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function(key) {
    var hook = hooks[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = function() {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}
function setRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  invariant(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return mn(element, {
      ref: newRef
    });
  } else {
    return mn(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && _typeof$1(obj) === "object" && Object.prototype.hasOwnProperty.call(obj, "current")
  );
}
function shallowEqual(objA, objB, compare, compareContext) {
  var compareResult = void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    compareResult = void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$9(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$9(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SourceConnector = /* @__PURE__ */ (function() {
  function SourceConnector2(backend) {
    var _this = this;
    _classCallCheck$9(this, SourceConnector2);
    _defineProperty$a(this, "hooks", wrapConnectorHooks({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();
        _this.dragSourceOptions = options || null;
        if (isRef(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }
        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();
        _this.dragPreviewOptions = options || null;
        if (isRef(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }
        _this.reconnectDragPreview();
      }
    }));
    _defineProperty$a(this, "handlerId", null);
    _defineProperty$a(this, "dragSourceRef", null);
    _defineProperty$a(this, "dragSourceNode", void 0);
    _defineProperty$a(this, "dragSourceOptionsInternal", null);
    _defineProperty$a(this, "dragSourceUnsubscribe", void 0);
    _defineProperty$a(this, "dragPreviewRef", null);
    _defineProperty$a(this, "dragPreviewNode", void 0);
    _defineProperty$a(this, "dragPreviewOptionsInternal", null);
    _defineProperty$a(this, "dragPreviewUnsubscribe", void 0);
    _defineProperty$a(this, "lastConnectedHandlerId", null);
    _defineProperty$a(this, "lastConnectedDragSource", null);
    _defineProperty$a(this, "lastConnectedDragSourceOptions", null);
    _defineProperty$a(this, "lastConnectedDragPreview", null);
    _defineProperty$a(this, "lastConnectedDragPreviewOptions", null);
    _defineProperty$a(this, "backend", void 0);
    this.backend = backend;
  }
  _createClass$9(SourceConnector2, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "connectTarget",
    get: function get2() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get2() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get2() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource;
      var didChange2 = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (didChange2) {
        this.disconnectDragSource();
      }
      if (!this.handlerId) {
        return;
      }
      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }
      if (didChange2) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview;
      var didChange2 = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (didChange2) {
        this.disconnectDragPreview();
      }
      if (!this.handlerId) {
        return;
      }
      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }
      if (didChange2) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = void 0;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = void 0;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "dragSource",
    get: function get2() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get2() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }]);
  return SourceConnector2;
})();
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$8(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$8(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TargetConnector = /* @__PURE__ */ (function() {
  function TargetConnector2(backend) {
    var _this = this;
    _classCallCheck$8(this, TargetConnector2);
    _defineProperty$9(this, "hooks", wrapConnectorHooks({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();
        _this.dropTargetOptions = options;
        if (isRef(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }
        _this.reconnect();
      }
    }));
    _defineProperty$9(this, "handlerId", null);
    _defineProperty$9(this, "dropTargetRef", null);
    _defineProperty$9(this, "dropTargetNode", void 0);
    _defineProperty$9(this, "dropTargetOptionsInternal", null);
    _defineProperty$9(this, "unsubscribeDropTarget", void 0);
    _defineProperty$9(this, "lastConnectedHandlerId", null);
    _defineProperty$9(this, "lastConnectedDropTarget", null);
    _defineProperty$9(this, "lastConnectedDropTargetOptions", null);
    _defineProperty$9(this, "backend", void 0);
    this.backend = backend;
  }
  _createClass$8(TargetConnector2, [{
    key: "connectTarget",
    get: function get2() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      var didChange2 = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      if (didChange2) {
        this.disconnectDropTarget();
      }
      var dropTarget = this.dropTarget;
      if (!this.handlerId) {
        return;
      }
      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }
      if (didChange2) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "dropTargetOptions",
    get: function get2() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = void 0;
      }
    }
  }, {
    key: "dropTarget",
    get: function get2() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }]);
  return TargetConnector2;
})();
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function() {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function() {
    return registry.removeSource(sourceId);
  }];
}
function isFunction(input) {
  return typeof input === "function";
}
function noop$3() {
}
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$7(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$7(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$7(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Disposable = /* @__PURE__ */ (function() {
  function Disposable2(action) {
    _classCallCheck$7(this, Disposable2);
    _defineProperty$8(this, "isDisposed", false);
    _defineProperty$8(this, "action", void 0);
    this.action = isFunction(action) ? action : noop$3;
  }
  _createClass$7(Disposable2, [{
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.action();
        this.isDisposed = true;
      }
    }
  }], [{
    key: "isDisposable",
    value: (
      /**
       * Gets the disposable that does nothing when disposed.
       */
      /**
       * Validates whether the given object is a disposable
       * @param {Object} Object to test whether it has a dispose method
       * @returns {Boolean} true if a disposable object, else false.
       */
      function isDisposable(d2) {
        return Boolean(d2 && isFunction(d2.dispose));
      }
    )
  }, {
    key: "_fixup",
    value: function _fixup(result) {
      return Disposable2.isDisposable(result) ? result : Disposable2.empty;
    }
    /**
     * Creates a disposable object that invokes the specified action when disposed.
     * @param {Function} dispose Action to run during the first call to dispose.
     * The action is guaranteed to be run at most once.
     * @return {Disposable} The disposable object that runs the given action upon disposal.
     */
  }, {
    key: "create",
    value: function create2(action) {
      return new Disposable2(action);
    }
  }]);
  return Disposable2;
})();
_defineProperty$8(Disposable, "empty", {
  dispose: noop$3
});
var exports$6 = {};
Object.defineProperty(exports$6, "__esModule", {
  value: true
});
var b$1 = "function" === typeof Symbol && Symbol.for, c = b$1 ? /* @__PURE__ */ Symbol.for("react.element") : 60103, d = b$1 ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, e = b$1 ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, f = b$1 ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, g = b$1 ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, h = b$1 ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, k = b$1 ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = b$1 ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, m = b$1 ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, n = b$1 ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = b$1 ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, q = b$1 ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, r = b$1 ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, t = b$1 ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, v = b$1 ? /* @__PURE__ */ Symbol.for("react.block") : 60121, w = b$1 ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, x = b$1 ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, y = b$1 ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
function z(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c:
        switch (a2 = a2.type, a2) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a2;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a2) {
  return z(a2) === m;
}
exports$6.AsyncMode = l;
exports$6.ConcurrentMode = m;
exports$6.ContextConsumer = k;
exports$6.ContextProvider = h;
exports$6.Element = c;
exports$6.ForwardRef = n;
exports$6.Fragment = e;
exports$6.Lazy = t;
exports$6.Memo = r;
exports$6.Portal = d;
exports$6.Profiler = g;
exports$6.StrictMode = f;
exports$6.Suspense = p;
exports$6.isAsyncMode = function(a2) {
  return A(a2) || z(a2) === l;
};
exports$6.isConcurrentMode = A;
exports$6.isContextConsumer = function(a2) {
  return z(a2) === k;
};
exports$6.isContextProvider = function(a2) {
  return z(a2) === h;
};
exports$6.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === c;
};
exports$6.isForwardRef = function(a2) {
  return z(a2) === n;
};
exports$6.isFragment = function(a2) {
  return z(a2) === e;
};
exports$6.isLazy = function(a2) {
  return z(a2) === t;
};
exports$6.isMemo = function(a2) {
  return z(a2) === r;
};
exports$6.isPortal = function(a2) {
  return z(a2) === d;
};
exports$6.isProfiler = function(a2) {
  return z(a2) === g;
};
exports$6.isStrictMode = function(a2) {
  return z(a2) === f;
};
exports$6.isSuspense = function(a2) {
  return z(a2) === p;
};
exports$6.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === e || a2 === m || a2 === g || a2 === f || a2 === p || a2 === q || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t || a2.$$typeof === r || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === n || a2.$$typeof === w || a2.$$typeof === x || a2.$$typeof === y || a2.$$typeof === v);
};
exports$6.typeOf = z;
var _AsyncMode = exports$6.AsyncMode;
var _ConcurrentMode = exports$6.ConcurrentMode;
var _ContextConsumer = exports$6.ContextConsumer;
var _ContextProvider = exports$6.ContextProvider;
var _Element = exports$6.Element;
var _ForwardRef = exports$6.ForwardRef;
var _Fragment = exports$6.Fragment;
var _Lazy = exports$6.Lazy;
var _Memo = exports$6.Memo;
var _Portal = exports$6.Portal;
var _Profiler = exports$6.Profiler;
var _StrictMode = exports$6.StrictMode;
var _Suspense = exports$6.Suspense;
var _isAsyncMode = exports$6.isAsyncMode;
var _isConcurrentMode = exports$6.isConcurrentMode;
var _isContextConsumer = exports$6.isContextConsumer;
var _isContextProvider = exports$6.isContextProvider;
var _isElement = exports$6.isElement;
var _isForwardRef = exports$6.isForwardRef;
var _isFragment = exports$6.isFragment;
var _isLazy = exports$6.isLazy;
var _isMemo = exports$6.isMemo;
var _isPortal = exports$6.isPortal;
var _isProfiler = exports$6.isProfiler;
var _isStrictMode = exports$6.isStrictMode;
var _isSuspense = exports$6.isSuspense;
var _isValidElementType = exports$6.isValidElementType;
var _typeOf = exports$6.typeOf;
var _default$3;
if (typeof exports$6 === "object" && exports$6 !== null && "default" in exports$6) {
  _default$3 = exports$6.default;
} else {
  _default$3 = exports$6;
}
const _default_default$2 = _default$3;
var __require$2 = exports$6;
const _mod$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncMode: _AsyncMode,
  ConcurrentMode: _ConcurrentMode,
  ContextConsumer: _ContextConsumer,
  ContextProvider: _ContextProvider,
  Element: _Element,
  ForwardRef: _ForwardRef,
  Fragment: _Fragment,
  Lazy: _Lazy,
  Memo: _Memo,
  Portal: _Portal,
  Profiler: _Profiler,
  StrictMode: _StrictMode,
  Suspense: _Suspense,
  __require: __require$2,
  default: _default_default$2,
  isAsyncMode: _isAsyncMode,
  isConcurrentMode: _isConcurrentMode,
  isContextConsumer: _isContextConsumer,
  isContextProvider: _isContextProvider,
  isElement: _isElement,
  isForwardRef: _isForwardRef,
  isFragment: _isFragment,
  isLazy: _isLazy,
  isMemo: _isMemo,
  isPortal: _isPortal,
  isProfiler: _isProfiler,
  isStrictMode: _isStrictMode,
  isSuspense: _isSuspense,
  isValidElementType: _isValidElementType,
  typeOf: _typeOf
}, Symbol.toStringTag, { value: "Module" }));
var exports$5 = {}, module$4 = {};
Object.defineProperty(module$4, "exports", {
  get() {
    return exports$5;
  },
  set(value) {
    exports$5 = value;
  }
});
Object.defineProperty(exports$5, "__esModule", {
  value: true
});
module$4.exports = _mod$2;
var _default$2;
if (typeof exports$5 === "object" && exports$5 !== null && "default" in exports$5) {
  _default$2 = exports$5.default;
} else {
  _default$2 = exports$5;
}
const _default_default$1 = _default$2;
var __require$1 = exports$5;
const _mod$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncMode: _AsyncMode,
  ConcurrentMode: _ConcurrentMode,
  ContextConsumer: _ContextConsumer,
  ContextProvider: _ContextProvider,
  Element: _Element,
  ForwardRef: _ForwardRef,
  Fragment: _Fragment,
  Lazy: _Lazy,
  Memo: _Memo,
  Portal: _Portal,
  Profiler: _Profiler,
  StrictMode: _StrictMode,
  Suspense: _Suspense,
  __require: __require$1,
  default: _default_default$1,
  isAsyncMode: _isAsyncMode,
  isConcurrentMode: _isConcurrentMode,
  isContextConsumer: _isContextConsumer,
  isContextProvider: _isContextProvider,
  isElement: _isElement,
  isForwardRef: _isForwardRef,
  isFragment: _isFragment,
  isLazy: _isLazy,
  isMemo: _isMemo,
  isPortal: _isPortal,
  isProfiler: _isProfiler,
  isStrictMode: _isStrictMode,
  isSuspense: _isSuspense,
  isValidElementType: _isValidElementType,
  typeOf: _typeOf
}, Symbol.toStringTag, { value: "Module" }));
var exports$4 = {}, module$3 = {};
Object.defineProperty(module$3, "exports", {
  get() {
    return exports$4;
  },
  set(value) {
    exports$4 = value;
  }
});
Object.defineProperty(exports$4, "__esModule", {
  value: true
});
var reactIs = __require$1 ?? _default_default$1 ?? _mod$1;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
module$3.exports = hoistNonReactStatics;
if (typeof exports$4 === "object" && exports$4 !== null && "default" in exports$4) {
  exports$4.default;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? _ : y$1;
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$6(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$6(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DragSourceImpl = /* @__PURE__ */ (function() {
  function DragSourceImpl2(spec, monitor, connector) {
    _classCallCheck$6(this, DragSourceImpl2);
    _defineProperty$7(this, "spec", void 0);
    _defineProperty$7(this, "monitor", void 0);
    _defineProperty$7(this, "connector", void 0);
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
  _createClass$6(DragSourceImpl2, [{
    key: "beginDrag",
    value: function beginDrag() {
      var _result;
      var spec = this.spec;
      var monitor = this.monitor;
      var result = null;
      if (_typeof(spec.item) === "object") {
        result = spec.item;
      } else if (typeof spec.item === "function") {
        result = spec.item(monitor);
      } else {
        result = {};
      }
      return (_result = result) !== null && _result !== void 0 ? _result : null;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      var spec = this.spec;
      var monitor = this.monitor;
      if (typeof spec.canDrag === "boolean") {
        return spec.canDrag;
      } else if (typeof spec.canDrag === "function") {
        return spec.canDrag(monitor);
      } else {
        return true;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging(globalMonitor, target) {
      var spec = this.spec;
      var monitor = this.monitor;
      var isDragging2 = spec.isDragging;
      return isDragging2 ? isDragging2(monitor) : target === globalMonitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      var spec = this.spec;
      var monitor = this.monitor;
      var connector = this.connector;
      var end = spec.end;
      if (end) {
        end(monitor.getItem(), monitor);
      }
      connector.reconnect();
    }
  }]);
  return DragSourceImpl2;
})();
function useDragSource(spec, monitor, connector) {
  var handler2 = T$1(function() {
    return new DragSourceImpl(spec, monitor, connector);
  }, [monitor, connector]);
  y$1(function() {
    handler2.spec = spec;
  }, [spec]);
  return handler2;
}
function useDragDropManager() {
  var _useContext = x$2(DndContext), dragDropManager = _useContext.dragDropManager;
  invariant(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}
function useDragType(spec) {
  return T$1(function() {
    var result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [spec]);
}
function _slicedToArray$4(arr, i) {
  return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$5(arr, i) || _nonIterableRest$4();
}
function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$5(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$5(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$5(o, minLen);
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$4(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$4(arr) {
  if (Array.isArray(arr)) return arr;
}
function useRegisteredDragSource(spec, monitor, connector) {
  var manager = useDragDropManager();
  var handler2 = useDragSource(spec, monitor, connector);
  var itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      var _registerSource = registerSource(itemType, handler2, manager), _registerSource2 = _slicedToArray$4(_registerSource, 2), handlerId = _registerSource2[0], unregister = _registerSource2[1];
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
  }, [manager, monitor, connector, handler2, itemType]);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$4(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$4(arr);
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function useOptionalFactory(arg, deps) {
  var memoDeps = _toConsumableArray(deps || []);
  if (deps == null && typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return T$1(function() {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}
function useDragSourceMonitor() {
  var manager = useDragDropManager();
  return T$1(function() {
    return new DragSourceMonitorImpl(manager);
  }, [manager]);
}
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  var manager = useDragDropManager();
  var connector = T$1(function() {
    return new SourceConnector(manager.getBackend());
  }, [manager]);
  useIsomorphicLayoutEffect(function() {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return function() {
      return connector.disconnectDragSource();
    };
  }, [connector, dragSourceOptions]);
  useIsomorphicLayoutEffect(function() {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return function() {
      return connector.disconnectDragPreview();
    };
  }, [connector, dragPreviewOptions]);
  return connector;
}
var exports$3 = {}, module$2 = {};
Object.defineProperty(module$2, "exports", {
  get() {
    return exports$3;
  },
  set(value) {
    exports$3 = value;
  }
});
Object.defineProperty(exports$3, "__esModule", {
  value: true
});
module$2.exports = function equal(a2, b2) {
  if (a2 === b2) return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    if (a2.constructor !== b2.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length) return false;
      for (i = length; i-- !== 0; ) if (!equal(a2[i], b2[i])) return false;
      return true;
    }
    if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
    if (a2.valueOf !== Object.prototype.valueOf) return a2.valueOf() === b2.valueOf();
    if (a2.toString !== Object.prototype.toString) return a2.toString() === b2.toString();
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b2).length) return false;
    for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b2, keys[i])) return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a2[key], b2[key])) return false;
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
};
var _default$1;
if (typeof exports$3 === "object" && exports$3 !== null && "default" in exports$3) {
  _default$1 = exports$3.default;
} else {
  _default$1 = exports$3;
}
const equal2 = _default$1;
function _slicedToArray$3(arr, i) {
  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
}
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$3(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$3(arr) {
  if (Array.isArray(arr)) return arr;
}
function useCollector(monitor, collect, onUpdate) {
  var _useState = d$1(function() {
    return collect(monitor);
  }), _useState2 = _slicedToArray$3(_useState, 2), collected = _useState2[0], setCollected = _useState2[1];
  var updateCollected = q$2(function() {
    var nextValue = collect(monitor);
    if (!equal2(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]);
  useIsomorphicLayoutEffect(updateCollected);
  return [collected, updateCollected];
}
function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}
function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = useCollector(monitor, collect, onCollect), _useCollector2 = _slicedToArray$2(_useCollector, 2), collected = _useCollector2[0], updateCollected = _useCollector2[1];
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(monitor, collector || function() {
    return {};
  }, function() {
    return connector.reconnect();
  });
}
function useConnectDragSource(connector) {
  return T$1(function() {
    return connector.hooks.dragSource();
  }, [connector]);
}
function useConnectDragPreview(connector) {
  return T$1(function() {
    return connector.hooks.dragPreview();
  }, [connector]);
}
function useDrag(specArg, deps) {
  var spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var monitor = useDragSourceMonitor();
  var connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDragSource(connector), useConnectDragPreview(connector)];
}
function useAccept(spec) {
  var accept = spec.accept;
  return T$1(function() {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [accept];
  }, [accept]);
}
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$5(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$5(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DropTargetImpl = /* @__PURE__ */ (function() {
  function DropTargetImpl2(spec, monitor) {
    _classCallCheck$5(this, DropTargetImpl2);
    _defineProperty$6(this, "spec", void 0);
    _defineProperty$6(this, "monitor", void 0);
    this.spec = spec;
    this.monitor = monitor;
  }
  _createClass$5(DropTargetImpl2, [{
    key: "canDrop",
    value: function canDrop() {
      var spec = this.spec;
      var monitor = this.monitor;
      return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
  }, {
    key: "hover",
    value: function hover() {
      var spec = this.spec;
      var monitor = this.monitor;
      if (spec.hover) {
        spec.hover(monitor.getItem(), monitor);
      }
    }
  }, {
    key: "drop",
    value: function drop() {
      var spec = this.spec;
      var monitor = this.monitor;
      if (spec.drop) {
        return spec.drop(monitor.getItem(), monitor);
      }
    }
  }]);
  return DropTargetImpl2;
})();
function useDropTarget(spec, monitor) {
  var dropTarget = T$1(function() {
    return new DropTargetImpl(spec, monitor);
  }, [monitor]);
  y$1(function() {
    dropTarget.spec = spec;
  }, [spec]);
  return dropTarget;
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}
function useRegisteredDropTarget(spec, monitor, connector) {
  var manager = useDragDropManager();
  var dropTarget = useDropTarget(spec, monitor);
  var accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    var _registerTarget = registerTarget(accept, dropTarget, manager), _registerTarget2 = _slicedToArray$1(_registerTarget, 2), handlerId = _registerTarget2[0], unregister = _registerTarget2[1];
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [manager, monitor, dropTarget, connector, accept.map(function(a2) {
    return a2.toString();
  }).join("|")]);
}
function useDropTargetMonitor() {
  var manager = useDragDropManager();
  return T$1(function() {
    return new DropTargetMonitorImpl(manager);
  }, [manager]);
}
function useDropTargetConnector(options) {
  var manager = useDragDropManager();
  var connector = T$1(function() {
    return new TargetConnector(manager.getBackend());
  }, [manager]);
  useIsomorphicLayoutEffect(function() {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return function() {
      return connector.disconnectDropTarget();
    };
  }, [options]);
  return connector;
}
function useConnectDropTarget(connector) {
  return T$1(function() {
    return connector.hooks.dropTarget();
  }, [connector]);
}
function useDrop(specArg, deps) {
  var spec = useOptionalFactory(specArg, deps);
  var monitor = useDropTargetMonitor();
  var connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDropTarget(connector)];
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n2 = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n2 = (_s = _i.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n2 && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function useDragLayer(collect) {
  var dragDropManager = useDragDropManager();
  var monitor = dragDropManager.getMonitor();
  var _useCollector = useCollector(monitor, collect), _useCollector2 = _slicedToArray(_useCollector, 2), collected = _useCollector2[0], updateCollected = _useCollector2[1];
  y$1(function() {
    return monitor.subscribeToOffsetChange(updateCollected);
  });
  y$1(function() {
    return monitor.subscribeToStateChange(updateCollected);
  });
  return collected;
}
function memoize(fn2) {
  var result = null;
  var memoized = function memoized2() {
    if (result == null) {
      result = fn2();
    }
    return result;
  };
  return memoized;
}
function without(items2, item) {
  return items2.filter(function(i) {
    return i !== item;
  });
}
function union$1(itemsA, itemsB) {
  var set = /* @__PURE__ */ new Set();
  var insertItem = function insertItem2(item) {
    return set.add(item);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  set.forEach(function(key) {
    return result.push(key);
  });
  return result;
}
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$4(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$4(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EnterLeaveCounter = /* @__PURE__ */ (function() {
  function EnterLeaveCounter2(isNodeInDocument) {
    _classCallCheck$4(this, EnterLeaveCounter2);
    _defineProperty$5(this, "entered", []);
    _defineProperty$5(this, "isNodeInDocument", void 0);
    this.isNodeInDocument = isNodeInDocument;
  }
  _createClass$4(EnterLeaveCounter2, [{
    key: "enter",
    value: function enter(enteringNode) {
      var _this = this;
      var previousLength = this.entered.length;
      var isNodeEntered = function isNodeEntered2(node) {
        return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
      };
      this.entered = union$1(this.entered.filter(isNodeEntered), [enteringNode]);
      return previousLength === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function leave(leavingNode) {
      var previousLength = this.entered.length;
      this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
      return previousLength > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function reset2() {
      this.entered = [];
    }
  }]);
  return EnterLeaveCounter2;
})();
var isFirefox = memoize(function() {
  return /firefox/i.test(navigator.userAgent);
});
var isSafari$1 = memoize(function() {
  return Boolean(window.safari);
});
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MonotonicInterpolant = /* @__PURE__ */ (function() {
  function MonotonicInterpolant2(xs, ys) {
    _classCallCheck$3(this, MonotonicInterpolant2);
    _defineProperty$4(this, "xs", void 0);
    _defineProperty$4(this, "ys", void 0);
    _defineProperty$4(this, "c1s", void 0);
    _defineProperty$4(this, "c2s", void 0);
    _defineProperty$4(this, "c3s", void 0);
    var length = xs.length;
    var indexes = [];
    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(function(a2, b2) {
      return xs[a2] < xs[b2] ? -1 : 1;
    });
    var dxs = [];
    var ms = [];
    var dx;
    var dy;
    for (var _i = 0; _i < length - 1; _i++) {
      dx = xs[_i + 1] - xs[_i];
      dy = ys[_i + 1] - ys[_i];
      dxs.push(dx);
      ms.push(dy / dx);
    }
    var c1s = [ms[0]];
    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
      var m2 = ms[_i2];
      var mNext = ms[_i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[_i2];
        var dxNext = dxs[_i2 + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    var c2s = [];
    var c3s = [];
    var m3;
    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
      m3 = ms[_i3];
      var c1 = c1s[_i3];
      var invDx = 1 / dxs[_i3];
      var _common = c1 + c1s[_i3 + 1] - m3 - m3;
      c2s.push((m3 - c1 - _common) * invDx);
      c3s.push(_common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
  _createClass$3(MonotonicInterpolant2, [{
    key: "interpolate",
    value: function interpolate(x2) {
      var xs = this.xs, ys = this.ys, c1s = this.c1s, c2s = this.c2s, c3s = this.c3s;
      var i = xs.length - 1;
      if (x2 === xs[i]) {
        return ys[i];
      }
      var low = 0;
      var high = c3s.length - 1;
      var mid;
      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];
        if (xHere < x2) {
          low = mid + 1;
        } else if (xHere > x2) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }
      i = Math.max(0, high);
      var diff = x2 - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
  }]);
  return MonotonicInterpolant2;
})();
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return null;
  }
  var _el$getBoundingClient = el.getBoundingClientRect(), top = _el$getBoundingClient.top, left = _el$getBoundingClient.left;
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e2) {
  return {
    x: e2.clientX,
    y: e2.clientY
  };
}
function isImageNode(node) {
  var _document$documentEle;
  return node.nodeName === "IMG" && (isFirefox() || !((_document$documentEle = document.documentElement) !== null && _document$documentEle !== void 0 && _document$documentEle.contains(node)));
}
function getDragPreviewSize(isImage2, dragPreview, sourceWidth, sourceHeight) {
  var dragPreviewWidth = isImage2 ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage2 ? dragPreview.height : sourceHeight;
  if (isSafari$1() && isImage2) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  var isImage2 = isImageNode(dragPreview);
  var dragPreviewNode = isImage2 ? sourceNode : dragPreview;
  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  var sourceWidth = sourceNode.offsetWidth, sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX, anchorY = anchorPoint.anchorY;
  var _getDragPreviewSize = getDragPreviewSize(isImage2, dragPreview, sourceWidth, sourceHeight), dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth, dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;
  var calculateYOffset = function calculateYOffset2() {
    var interpolantY = new MonotonicInterpolant([0, 0.5, 1], [
      // Dock to the top
      offsetFromDragPreview.y,
      // Align at the center
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      // Dock to the bottom
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]);
    var y2 = interpolantY.interpolate(anchorY);
    if (isSafari$1() && isImage2) {
      y2 += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y2;
  };
  var calculateXOffset = function calculateXOffset2() {
    var interpolantX = new MonotonicInterpolant([0, 0.5, 1], [
      // Dock to the left
      offsetFromDragPreview.x,
      // Align at the center
      offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
      // Dock to the right
      offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
    ]);
    return interpolantX.interpolate(anchorX);
  };
  var offsetX = offsetPoint.offsetX, offsetY = offsetPoint.offsetY;
  var isManualOffsetX = offsetX === 0 || offsetX;
  var isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}
var FILE = "__NATIVE_FILE__";
var URL$1 = "__NATIVE_URL__";
var TEXT = "__NATIVE_TEXT__";
var HTML = "__NATIVE_HTML__";
const NativeTypes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE,
  HTML,
  TEXT,
  URL: URL$1
}, Symbol.toStringTag, { value: "Module" }));
function getDataFromDataTransfer(dataTransfer5, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function(resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer5.getData(typeToTry);
  }, "");
  return result != null ? result : defaultValue;
}
var _nativeTypesConfig;
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty$3(_nativeTypesConfig, FILE, {
  exposeProperties: {
    files: function files(dataTransfer5) {
      return Array.prototype.slice.call(dataTransfer5.files);
    },
    items: function items(dataTransfer5) {
      return dataTransfer5.items;
    },
    dataTransfer: function dataTransfer(_dataTransfer) {
      return _dataTransfer;
    }
  },
  matchesTypes: ["Files"]
}), _defineProperty$3(_nativeTypesConfig, HTML, {
  exposeProperties: {
    html: function html(dataTransfer5, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer5, matchesTypes, "");
    },
    dataTransfer: function dataTransfer2(_dataTransfer2) {
      return _dataTransfer2;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), _defineProperty$3(_nativeTypesConfig, URL$1, {
  exposeProperties: {
    urls: function urls(dataTransfer5, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer5, matchesTypes, "").split("\n");
    },
    dataTransfer: function dataTransfer3(_dataTransfer3) {
      return _dataTransfer3;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), _defineProperty$3(_nativeTypesConfig, TEXT, {
  exposeProperties: {
    text: function text(dataTransfer5, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer5, matchesTypes, "");
    },
    dataTransfer: function dataTransfer4(_dataTransfer4) {
      return _dataTransfer4;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), _nativeTypesConfig);
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var NativeDragSource = /* @__PURE__ */ (function() {
  function NativeDragSource2(config2) {
    _classCallCheck$2(this, NativeDragSource2);
    _defineProperty$2(this, "item", void 0);
    _defineProperty$2(this, "config", void 0);
    this.config = config2;
    this.item = {};
    this.initializeExposedProperties();
  }
  _createClass$2(NativeDragSource2, [{
    key: "initializeExposedProperties",
    value: function initializeExposedProperties() {
      var _this = this;
      Object.keys(this.config.exposeProperties).forEach(function(property) {
        Object.defineProperty(_this.item, property, {
          configurable: true,
          enumerable: true,
          get: function get2() {
            console.warn(`Browser doesn't allow reading "`.concat(property, '" until the drop event.'));
            return null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function loadDataTransfer(dataTransfer5) {
      var _this2 = this;
      if (dataTransfer5) {
        var newProperties = {};
        Object.keys(this.config.exposeProperties).forEach(function(property) {
          newProperties[property] = {
            value: _this2.config.exposeProperties[property](dataTransfer5, _this2.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        });
        Object.defineProperties(this.item, newProperties);
      }
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "beginDrag",
    value: function beginDrag() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
    }
  }]);
  return NativeDragSource2;
})();
function createNativeDragSource(type, dataTransfer5) {
  var result = new NativeDragSource(nativeTypesConfig[type]);
  result.loadDataTransfer(dataTransfer5);
  return result;
}
function matchNativeItemType(dataTransfer5) {
  if (!dataTransfer5) {
    return null;
  }
  var dataTransferTypes = Array.prototype.slice.call(dataTransfer5.types || []);
  return Object.keys(nativeTypesConfig).filter(function(nativeItemType) {
    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
    return matchesTypes.some(function(t2) {
      return dataTransferTypes.indexOf(t2) > -1;
    });
  })[0] || null;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var OptionsReader = /* @__PURE__ */ (function() {
  function OptionsReader2(globalContext, options) {
    _classCallCheck$1(this, OptionsReader2);
    _defineProperty$1(this, "ownerDocument", null);
    _defineProperty$1(this, "globalContext", void 0);
    _defineProperty$1(this, "optionsArgs", void 0);
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
  _createClass$1(OptionsReader2, [{
    key: "window",
    get: function get2() {
      if (this.globalContext) {
        return this.globalContext;
      } else if (typeof window !== "undefined") {
        return window;
      }
      return void 0;
    }
  }, {
    key: "document",
    get: function get2() {
      var _this$globalContext;
      if ((_this$globalContext = this.globalContext) !== null && _this$globalContext !== void 0 && _this$globalContext.document) {
        return this.globalContext.document;
      } else if (this.window) {
        return this.window.document;
      } else {
        return void 0;
      }
    }
  }, {
    key: "rootElement",
    get: function get2() {
      var _this$optionsArgs;
      return ((_this$optionsArgs = this.optionsArgs) === null || _this$optionsArgs === void 0 ? void 0 : _this$optionsArgs.rootElement) || this.window;
    }
  }]);
  return OptionsReader2;
})();
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var HTML5BackendImpl = /* @__PURE__ */ (function() {
  function HTML5BackendImpl2(manager, globalContext, options) {
    var _this = this;
    _classCallCheck(this, HTML5BackendImpl2);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "actions", void 0);
    _defineProperty(this, "monitor", void 0);
    _defineProperty(this, "registry", void 0);
    _defineProperty(this, "enterLeaveCounter", void 0);
    _defineProperty(this, "sourcePreviewNodes", /* @__PURE__ */ new Map());
    _defineProperty(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map());
    _defineProperty(this, "sourceNodes", /* @__PURE__ */ new Map());
    _defineProperty(this, "sourceNodeOptions", /* @__PURE__ */ new Map());
    _defineProperty(this, "dragStartSourceIds", null);
    _defineProperty(this, "dropTargetIds", []);
    _defineProperty(this, "dragEnterTargetIds", []);
    _defineProperty(this, "currentNativeSource", null);
    _defineProperty(this, "currentNativeHandle", null);
    _defineProperty(this, "currentDragSourceNode", null);
    _defineProperty(this, "altKeyPressed", false);
    _defineProperty(this, "mouseMoveTimeoutTimer", null);
    _defineProperty(this, "asyncEndDragFrameId", null);
    _defineProperty(this, "dragOverTargetIds", null);
    _defineProperty(this, "lastClientOffset", null);
    _defineProperty(this, "hoverRafId", null);
    _defineProperty(this, "getSourceClientOffset", function(sourceId) {
      var source = _this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    });
    _defineProperty(this, "endDragNativeItem", function() {
      if (!_this.isDraggingNativeItem()) {
        return;
      }
      _this.actions.endDrag();
      if (_this.currentNativeHandle) {
        _this.registry.removeSource(_this.currentNativeHandle);
      }
      _this.currentNativeHandle = null;
      _this.currentNativeSource = null;
    });
    _defineProperty(this, "isNodeInDocument", function(node) {
      return Boolean(node && _this.document && _this.document.body && _this.document.body.contains(node));
    });
    _defineProperty(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var node = _this.currentDragSourceNode;
      if (node == null || _this.isNodeInDocument(node)) {
        return;
      }
      if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });
    _defineProperty(this, "handleTopDragStartCapture", function() {
      _this.clearCurrentDragSourceNode();
      _this.dragStartSourceIds = [];
    });
    _defineProperty(this, "handleTopDragStart", function(e2) {
      if (e2.defaultPrevented) {
        return;
      }
      var dragStartSourceIds = _this.dragStartSourceIds;
      _this.dragStartSourceIds = null;
      var clientOffset = getEventClientOffset(e2);
      if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
      _this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: _this.getSourceClientOffset,
        clientOffset
      });
      var dataTransfer5 = e2.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer5);
      if (_this.monitor.isDragging()) {
        if (dataTransfer5 && typeof dataTransfer5.setDragImage === "function") {
          var sourceId = _this.monitor.getSourceId();
          var sourceNode = _this.sourceNodes.get(sourceId);
          var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            var _this$getCurrentSourc = _this.getCurrentSourcePreviewNodeOptions(), anchorX = _this$getCurrentSourc.anchorX, anchorY = _this$getCurrentSourc.anchorY, offsetX = _this$getCurrentSourc.offsetX, offsetY = _this$getCurrentSourc.offsetY;
            var anchorPoint = {
              anchorX,
              anchorY
            };
            var offsetPoint = {
              offsetX,
              offsetY
            };
            var dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer5.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer5 === null || dataTransfer5 === void 0 ? void 0 : dataTransfer5.setData("application/json", {});
        } catch (err) {
        }
        _this.setCurrentDragSourceNode(e2.target);
        var _this$getCurrentSourc2 = _this.getCurrentSourcePreviewNodeOptions(), captureDraggingState = _this$getCurrentSourc2.captureDraggingState;
        if (!captureDraggingState) {
          setTimeout(function() {
            return _this.actions.publishDragSource();
          }, 0);
        } else {
          _this.actions.publishDragSource();
        }
      } else if (nativeType) {
        _this.beginDragNativeItem(nativeType);
      } else if (dataTransfer5 && !dataTransfer5.types && (e2.target && !e2.target.hasAttribute || !e2.target.hasAttribute("draggable"))) {
        return;
      } else {
        e2.preventDefault();
      }
    });
    _defineProperty(this, "handleTopDragEndCapture", function() {
      if (_this.clearCurrentDragSourceNode() && _this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });
    _defineProperty(this, "handleTopDragEnterCapture", function(e2) {
      _this.dragEnterTargetIds = [];
      var isFirstEnter = _this.enterLeaveCounter.enter(e2.target);
      if (!isFirstEnter || _this.monitor.isDragging()) {
        return;
      }
      var dataTransfer5 = e2.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer5);
      if (nativeType) {
        _this.beginDragNativeItem(nativeType, dataTransfer5);
      }
    });
    _defineProperty(this, "handleTopDragEnter", function(e2) {
      var dragEnterTargetIds = _this.dragEnterTargetIds;
      _this.dragEnterTargetIds = [];
      if (!_this.monitor.isDragging()) {
        return;
      }
      _this.altKeyPressed = e2.altKey;
      if (dragEnterTargetIds.length > 0) {
        _this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e2)
        });
      }
      var canDrop = dragEnterTargetIds.some(function(targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });
      if (canDrop) {
        e2.preventDefault();
        if (e2.dataTransfer) {
          e2.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      }
    });
    _defineProperty(this, "handleTopDragOverCapture", function() {
      _this.dragOverTargetIds = [];
    });
    _defineProperty(this, "handleTopDragOver", function(e2) {
      var dragOverTargetIds = _this.dragOverTargetIds;
      _this.dragOverTargetIds = [];
      if (!_this.monitor.isDragging()) {
        e2.preventDefault();
        if (e2.dataTransfer) {
          e2.dataTransfer.dropEffect = "none";
        }
        return;
      }
      _this.altKeyPressed = e2.altKey;
      _this.lastClientOffset = getEventClientOffset(e2);
      if (_this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        _this.hoverRafId = requestAnimationFrame(function() {
          if (_this.monitor.isDragging()) {
            _this.actions.hover(dragOverTargetIds || [], {
              clientOffset: _this.lastClientOffset
            });
          }
          _this.hoverRafId = null;
        });
      }
      var canDrop = (dragOverTargetIds || []).some(function(targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });
      if (canDrop) {
        e2.preventDefault();
        if (e2.dataTransfer) {
          e2.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      } else if (_this.isDraggingNativeItem()) {
        e2.preventDefault();
      } else {
        e2.preventDefault();
        if (e2.dataTransfer) {
          e2.dataTransfer.dropEffect = "none";
        }
      }
    });
    _defineProperty(this, "handleTopDragLeaveCapture", function(e2) {
      if (_this.isDraggingNativeItem()) {
        e2.preventDefault();
      }
      var isLastLeave = _this.enterLeaveCounter.leave(e2.target);
      if (!isLastLeave) {
        return;
      }
      if (_this.isDraggingNativeItem()) {
        setTimeout(function() {
          return _this.endDragNativeItem();
        }, 0);
      }
    });
    _defineProperty(this, "handleTopDropCapture", function(e2) {
      _this.dropTargetIds = [];
      if (_this.isDraggingNativeItem()) {
        var _this$currentNativeSo;
        e2.preventDefault();
        (_this$currentNativeSo = _this.currentNativeSource) === null || _this$currentNativeSo === void 0 ? void 0 : _this$currentNativeSo.loadDataTransfer(e2.dataTransfer);
      } else if (matchNativeItemType(e2.dataTransfer)) {
        e2.preventDefault();
      }
      _this.enterLeaveCounter.reset();
    });
    _defineProperty(this, "handleTopDrop", function(e2) {
      var dropTargetIds = _this.dropTargetIds;
      _this.dropTargetIds = [];
      _this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e2)
      });
      _this.actions.drop({
        dropEffect: _this.getCurrentDropEffect()
      });
      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      } else if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      }
    });
    _defineProperty(this, "handleSelectStart", function(e2) {
      var target = e2.target;
      if (typeof target.dragDrop !== "function") {
        return;
      }
      if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      e2.preventDefault();
      target.dragDrop();
    });
    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
  _createClass(HTML5BackendImpl2, [{
    key: "profile",
    value: function profile() {
      var _this$dragStartSource, _this$dragOverTargetI;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((_this$dragStartSource = this.dragStartSourceIds) === null || _this$dragStartSource === void 0 ? void 0 : _this$dragStartSource.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((_this$dragOverTargetI = this.dragOverTargetIds) === null || _this$dragOverTargetI === void 0 ? void 0 : _this$dragOverTargetI.length) || 0
      };
    }
    // public for test
  }, {
    key: "window",
    get: function get2() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function get2() {
      return this.options.document;
    }
    /**
     * Get the root element to use for event subscriptions
     */
  }, {
    key: "rootElement",
    get: function get2() {
      return this.options.rootElement;
    }
  }, {
    key: "setup",
    value: function setup() {
      var root = this.rootElement;
      if (root === void 0) {
        return;
      }
      if (root.__isReactDndBackendSetUp) {
        throw new Error("Cannot have two HTML5 backends at the same time.");
      }
      root.__isReactDndBackendSetUp = true;
      this.addEventListeners(root);
    }
  }, {
    key: "teardown",
    value: function teardown() {
      var root = this.rootElement;
      if (root === void 0) {
        return;
      }
      root.__isReactDndBackendSetUp = false;
      this.removeEventListeners(this.rootElement);
      this.clearCurrentDragSourceNode();
      if (this.asyncEndDragFrameId) {
        var _this$window;
        (_this$window = this.window) === null || _this$window === void 0 ? void 0 : _this$window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function connectDragPreview(sourceId, node, options) {
      var _this2 = this;
      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function() {
        _this2.sourcePreviewNodes.delete(sourceId);
        _this2.sourcePreviewNodeOptions.delete(sourceId);
      };
    }
  }, {
    key: "connectDragSource",
    value: function connectDragSource(sourceId, node, options) {
      var _this3 = this;
      this.sourceNodes.set(sourceId, node);
      this.sourceNodeOptions.set(sourceId, options);
      var handleDragStart = function handleDragStart2(e2) {
        return _this3.handleDragStart(e2, sourceId);
      };
      var handleSelectStart = function handleSelectStart2(e2) {
        return _this3.handleSelectStart(e2);
      };
      node.setAttribute("draggable", "true");
      node.addEventListener("dragstart", handleDragStart);
      node.addEventListener("selectstart", handleSelectStart);
      return function() {
        _this3.sourceNodes.delete(sourceId);
        _this3.sourceNodeOptions.delete(sourceId);
        node.removeEventListener("dragstart", handleDragStart);
        node.removeEventListener("selectstart", handleSelectStart);
        node.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this4 = this;
      var handleDragEnter = function handleDragEnter2(e2) {
        return _this4.handleDragEnter(e2, targetId);
      };
      var handleDragOver = function handleDragOver2(e2) {
        return _this4.handleDragOver(e2, targetId);
      };
      var handleDrop = function handleDrop2(e2) {
        return _this4.handleDrop(e2, targetId);
      };
      node.addEventListener("dragenter", handleDragEnter);
      node.addEventListener("dragover", handleDragOver);
      node.addEventListener("drop", handleDrop);
      return function() {
        node.removeEventListener("dragenter", handleDragEnter);
        node.removeEventListener("dragover", handleDragOver);
        node.removeEventListener("drop", handleDrop);
      };
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(target) {
      if (!target.addEventListener) {
        return;
      }
      target.addEventListener("dragstart", this.handleTopDragStart);
      target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
      target.addEventListener("dragend", this.handleTopDragEndCapture, true);
      target.addEventListener("dragenter", this.handleTopDragEnter);
      target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
      target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
      target.addEventListener("dragover", this.handleTopDragOver);
      target.addEventListener("dragover", this.handleTopDragOverCapture, true);
      target.addEventListener("drop", this.handleTopDrop);
      target.addEventListener("drop", this.handleTopDropCapture, true);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(target) {
      if (!target.removeEventListener) {
        return;
      }
      target.removeEventListener("dragstart", this.handleTopDragStart);
      target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
      target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
      target.removeEventListener("dragenter", this.handleTopDragEnter);
      target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
      target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
      target.removeEventListener("dragover", this.handleTopDragOver);
      target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
      target.removeEventListener("drop", this.handleTopDrop);
      target.removeEventListener("drop", this.handleTopDropCapture, true);
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function getCurrentSourceNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
      return _objectSpread({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, sourceNodeOptions || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function getCurrentDropEffect() {
      if (this.isDraggingNativeItem()) {
        return "copy";
      }
      return this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function getCurrentSourcePreviewNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
      return _objectSpread({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: false
      }, sourcePreviewNodeOptions || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function isDraggingNativeItem() {
      var itemType = this.monitor.getItemType();
      return Object.keys(NativeTypes).some(function(key) {
        return NativeTypes[key] === itemType;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function beginDragNativeItem(type, dataTransfer5) {
      this.clearCurrentDragSourceNode();
      this.currentNativeSource = createNativeDragSource(type, dataTransfer5);
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function setCurrentDragSourceNode(node) {
      var _this5 = this;
      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node;
      var MOUSE_MOVE_TIMEOUT = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var _this5$rootElement;
        return (_this5$rootElement = _this5.rootElement) === null || _this5$rootElement === void 0 ? void 0 : _this5$rootElement.addEventListener("mousemove", _this5.endDragIfSourceWasRemovedFromDOM, true);
      }, MOUSE_MOVE_TIMEOUT);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function clearCurrentDragSourceNode() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;
        if (this.rootElement) {
          var _this$window2;
          (_this$window2 = this.window) === null || _this$window2 === void 0 ? void 0 : _this$window2.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
          this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
        }
        this.mouseMoveTimeoutTimer = null;
        return true;
      }
      return false;
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e2, sourceId) {
      if (e2.defaultPrevented) {
        return;
      }
      if (!this.dragStartSourceIds) {
        this.dragStartSourceIds = [];
      }
      this.dragStartSourceIds.unshift(sourceId);
    }
  }, {
    key: "handleDragEnter",
    value: function handleDragEnter(e2, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e2, targetId) {
      if (this.dragOverTargetIds === null) {
        this.dragOverTargetIds = [];
      }
      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e2, targetId) {
      this.dropTargetIds.unshift(targetId);
    }
  }]);
  return HTML5BackendImpl2;
})();
var emptyImage;
function getEmptyImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  }
  return emptyImage;
}
var HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};
function useDragHook(node) {
  const tree = useTreeApi();
  const ids = tree.selectedIds;
  const [_2, ref, preview] = useDrag(() => ({
    canDrag: () => node.isDraggable,
    type: "NODE",
    item: () => {
      const dragIds = tree.isSelected(node.id) ? Array.from(ids) : [node.id];
      tree.dispatch(actions.dragStart(node.id, dragIds));
      return {
        id: node.id,
        dragIds
      };
    },
    end: () => {
      tree.hideCursor();
      tree.dispatch(actions.dragEnd());
    }
  }), [ids, node]);
  y$1(() => {
    preview(getEmptyImage());
  }, [preview]);
  return ref;
}
function measureHover(el, offset) {
  const rect = el.getBoundingClientRect();
  const x2 = offset.x - Math.round(rect.x);
  const y2 = offset.y - Math.round(rect.y);
  const height = rect.height;
  const inTopHalf = y2 < height / 2;
  const inBottomHalf = !inTopHalf;
  const pad = height / 4;
  const inMiddle = y2 > pad && y2 < height - pad;
  const atTop = !inMiddle && inTopHalf;
  const atBottom = !inMiddle && inBottomHalf;
  return {
    x: x2,
    inTopHalf,
    inBottomHalf,
    inMiddle,
    atTop,
    atBottom
  };
}
function getNodesAroundCursor(node, prev, next, hover) {
  if (!node) {
    return [prev, null];
  }
  if (node.isInternal) {
    if (hover.atTop) {
      return [prev, node];
    } else if (hover.inMiddle) {
      return [node, node];
    } else {
      return [node, next];
    }
  } else {
    if (hover.inTopHalf) {
      return [prev, node];
    } else {
      return [node, next];
    }
  }
}
function dropAt(parentId, index2) {
  return {
    parentId: parentId || null,
    index: index2
  };
}
function lineCursor(index2, level) {
  return {
    type: "line",
    index: index2,
    level
  };
}
function highlightCursor(id) {
  return {
    type: "highlight",
    id
  };
}
function walkUpFrom(node, level) {
  var _a;
  let drop = node;
  while (drop.parent && drop.level > level) {
    drop = drop.parent;
  }
  const parentId = ((_a = drop.parent) === null || _a === void 0 ? void 0 : _a.id) || null;
  const index2 = indexOf(drop) + 1;
  return {
    parentId,
    index: index2
  };
}
function computeDrop(args) {
  var _a;
  const hover = measureHover(args.element, args.offset);
  const indent = args.indent;
  const hoverLevel = Math.round(Math.max(0, hover.x - indent) / indent);
  const {
    node,
    nextNode,
    prevNode
  } = args;
  const [above, below] = getNodesAroundCursor(node, prevNode, nextNode, hover);
  if (node && node.isInternal && hover.inMiddle) {
    return {
      drop: dropAt(node.id, null),
      cursor: highlightCursor(node.id)
    };
  }
  if (!above) {
    return {
      drop: dropAt((_a = below === null || below === void 0 ? void 0 : below.parent) === null || _a === void 0 ? void 0 : _a.id, 0),
      cursor: lineCursor(0, 0)
    };
  }
  if (isItem(above)) {
    const level = bound(hoverLevel, (below === null || below === void 0 ? void 0 : below.level) || 0, above.level);
    return {
      drop: walkUpFrom(above, level),
      cursor: lineCursor(above.rowIndex + 1, level)
    };
  }
  if (isClosed(above)) {
    const level = bound(hoverLevel, (below === null || below === void 0 ? void 0 : below.level) || 0, above.level);
    return {
      drop: walkUpFrom(above, level),
      cursor: lineCursor(above.rowIndex + 1, level)
    };
  }
  if (isOpenWithEmptyChildren(above)) {
    const level = bound(hoverLevel, 0, above.level + 1);
    if (level > above.level) {
      return {
        drop: dropAt(above.id, 0),
        cursor: lineCursor(above.rowIndex + 1, level)
      };
    } else {
      return {
        drop: walkUpFrom(above, level),
        cursor: lineCursor(above.rowIndex + 1, level)
      };
    }
  }
  return {
    drop: dropAt(above === null || above === void 0 ? void 0 : above.id, 0),
    cursor: lineCursor(above.rowIndex + 1, above.level + 1)
  };
}
function useDropHook(el, node) {
  const tree = useTreeApi();
  const [_2, dropRef] = useDrop(() => ({
    accept: "NODE",
    canDrop: () => tree.canDrop(),
    hover: (_item, m2) => {
      const offset = m2.getClientOffset();
      if (!el.current || !offset) return;
      const {
        cursor,
        drop
      } = computeDrop({
        element: el.current,
        offset,
        indent: tree.indent,
        node,
        prevNode: node.prev,
        nextNode: node.next
      });
      if (drop) tree.dispatch(actions.hovering(drop.parentId, drop.index));
      if (m2.canDrop()) {
        if (cursor) tree.showCursor(cursor);
      } else {
        tree.hideCursor();
      }
    },
    drop: (_3, m2) => {
      if (!m2.canDrop()) return null;
      let {
        parentId,
        index: index2,
        dragIds
      } = tree.state.dnd;
      safeRun$1(tree.props.onMove, {
        dragIds,
        parentId: parentId === ROOT_ID ? null : parentId,
        index: index2 === null ? 0 : index2,
        // When it's null it was dropped over a folder
        dragNodes: tree.dragNodes,
        parentNode: tree.get(parentId)
      });
      tree.open(parentId);
    }
  }), [node, el.current, tree.props]);
  return dropRef;
}
function useFreshNode(index2) {
  const tree = useTreeApi();
  const original = tree.at(index2);
  if (!original) throw new Error(`Could not find node for index: ${index2}`);
  return T$1(() => {
    const fresh = original.clone();
    tree.visibleNodes[index2] = fresh;
    return fresh;
  }, [...Object.values(original.state), original]);
}
const RowContainer = gn.memo(function RowContainer2({
  index: index2,
  style
}) {
  useDataUpdates();
  useNodesContext();
  const tree = useTreeApi();
  const node = useFreshNode(index2);
  const el = A$2(null);
  const dragRef = useDragHook(node);
  const dropRef = useDropHook(el, node);
  const innerRef = q$2((n2) => {
    el.current = n2;
    dropRef(n2);
  }, [dropRef]);
  const indent = tree.indent * node.level;
  const nodeStyle = T$1(() => ({
    paddingLeft: indent
  }), [indent]);
  const rowStyle = T$1(() => {
    var _a, _b;
    return Object.assign(Object.assign({}, style), {
      top: parseFloat(style.top) + ((_b = (_a = tree.props.padding) !== null && _a !== void 0 ? _a : tree.props.paddingTop) !== null && _b !== void 0 ? _b : 0)
    });
  }, [style, tree.props.padding, tree.props.paddingTop]);
  const rowAttrs = {
    role: "treeitem",
    "aria-level": node.level + 1,
    "aria-selected": node.isSelected,
    "aria-expanded": node.isOpen,
    style: rowStyle,
    tabIndex: -1,
    className: tree.props.rowClassName
  };
  y$1(() => {
    var _a;
    if (!node.isEditing && node.isFocused) {
      (_a = el.current) === null || _a === void 0 ? void 0 : _a.focus({
        preventScroll: true
      });
    }
  }, [node.isEditing, node.isFocused, el.current]);
  const Node2 = tree.renderNode;
  const Row2 = tree.renderRow;
  return u(Row2, {
    node,
    innerRef,
    attrs: rowAttrs,
    children: u(Node2, {
      node,
      tree,
      style: nodeStyle,
      dragHandle: dragRef
    })
  });
});
let focusSearchTerm = "";
let timeoutId = null;
function DefaultContainer() {
  useDataUpdates();
  const tree = useTreeApi();
  return u("div", {
    role: "tree",
    style: {
      height: tree.height,
      width: tree.width,
      minHeight: 0,
      minWidth: 0
    },
    onContextMenu: tree.props.onContextMenu,
    onClick: tree.props.onClick,
    tabIndex: 0,
    onFocus: (e2) => {
      if (!e2.currentTarget.contains(e2.relatedTarget)) {
        tree.onFocus();
      }
    },
    onBlur: (e2) => {
      if (!e2.currentTarget.contains(e2.relatedTarget)) {
        tree.onBlur();
      }
    },
    onKeyDown: (e2) => {
      var _a;
      if (tree.isEditing) {
        return;
      }
      if (e2.key === "Backspace") {
        if (!tree.props.onDelete) return;
        const ids = Array.from(tree.selectedIds);
        if (ids.length > 1) {
          let nextFocus = tree.mostRecentNode;
          while (nextFocus && nextFocus.isSelected) {
            nextFocus = nextFocus.nextSibling;
          }
          if (!nextFocus) nextFocus = tree.lastNode;
          tree.focus(nextFocus, {
            scroll: false
          });
          tree.delete(Array.from(ids));
        } else {
          const node2 = tree.focusedNode;
          if (node2) {
            const sib = node2.nextSibling;
            const parent = node2.parent;
            tree.focus(sib || parent, {
              scroll: false
            });
            tree.delete(node2);
          }
        }
        return;
      }
      if (e2.key === "Tab" && !e2.shiftKey) {
        e2.preventDefault();
        focusNextElement(e2.currentTarget);
        return;
      }
      if (e2.key === "Tab" && e2.shiftKey) {
        e2.preventDefault();
        focusPrevElement(e2.currentTarget);
        return;
      }
      if (e2.key === "ArrowDown") {
        e2.preventDefault();
        const next = tree.nextNode;
        if (e2.metaKey) {
          tree.select(tree.focusedNode);
          tree.activate(tree.focusedNode);
          return;
        } else if (!e2.shiftKey || tree.props.disableMultiSelection) {
          tree.focus(next);
          return;
        } else {
          if (!next) return;
          const current = tree.focusedNode;
          if (!current) {
            tree.focus(tree.firstNode);
          } else if (current.isSelected) {
            tree.selectContiguous(next);
          } else {
            tree.selectMulti(next);
          }
          return;
        }
      }
      if (e2.key === "ArrowUp") {
        e2.preventDefault();
        const prev = tree.prevNode;
        if (!e2.shiftKey || tree.props.disableMultiSelection) {
          tree.focus(prev);
          return;
        } else {
          if (!prev) return;
          const current = tree.focusedNode;
          if (!current) {
            tree.focus(tree.lastNode);
          } else if (current.isSelected) {
            tree.selectContiguous(prev);
          } else {
            tree.selectMulti(prev);
          }
          return;
        }
      }
      if (e2.key === "ArrowRight") {
        const node2 = tree.focusedNode;
        if (!node2) return;
        if (node2.isInternal && node2.isOpen) {
          tree.focus(tree.nextNode);
        } else if (node2.isInternal) tree.open(node2.id);
        return;
      }
      if (e2.key === "ArrowLeft") {
        const node2 = tree.focusedNode;
        if (!node2 || node2.isRoot) return;
        if (node2.isInternal && node2.isOpen) tree.close(node2.id);
        else if (!((_a = node2.parent) === null || _a === void 0 ? void 0 : _a.isRoot)) {
          tree.focus(node2.parent);
        }
        return;
      }
      if (e2.key === "a" && e2.metaKey && !tree.props.disableMultiSelection) {
        e2.preventDefault();
        tree.selectAll();
        return;
      }
      if (e2.key === "a" && !e2.metaKey && tree.props.onCreate) {
        tree.createLeaf();
        return;
      }
      if (e2.key === "A" && !e2.metaKey) {
        if (!tree.props.onCreate) return;
        tree.createInternal();
        return;
      }
      if (e2.key === "Home") {
        e2.preventDefault();
        tree.focus(tree.firstNode);
        return;
      }
      if (e2.key === "End") {
        e2.preventDefault();
        tree.focus(tree.lastNode);
        return;
      }
      if (e2.key === "Enter") {
        const node2 = tree.focusedNode;
        if (!node2) return;
        if (!node2.isEditable || !tree.props.onRename) return;
        setTimeout(() => {
          if (node2) tree.edit(node2);
        });
        return;
      }
      if (e2.key === " ") {
        e2.preventDefault();
        const node2 = tree.focusedNode;
        if (!node2) return;
        if (node2.isLeaf) {
          node2.select();
          node2.activate();
        } else {
          node2.toggle();
        }
        return;
      }
      if (e2.key === "*") {
        const node2 = tree.focusedNode;
        if (!node2) return;
        tree.openSiblings(node2);
        return;
      }
      if (e2.key === "PageUp") {
        e2.preventDefault();
        tree.pageUp();
        return;
      }
      if (e2.key === "PageDown") {
        e2.preventDefault();
        tree.pageDown();
      }
      clearTimeout(timeoutId);
      focusSearchTerm += e2.key;
      timeoutId = setTimeout(() => {
        focusSearchTerm = "";
      }, 600);
      const node = tree.visibleNodes.find((n2) => {
        const name = n2.data.name;
        if (typeof name === "string") {
          return name.toLowerCase().startsWith(focusSearchTerm);
        } else return false;
      });
      if (node) tree.focus(node.id);
    },
    children: u(FixedSizeList, {
      className: tree.props.className,
      outerRef: tree.listEl,
      itemCount: tree.visibleNodes.length,
      height: tree.height,
      width: tree.width,
      itemSize: tree.rowHeight,
      overscanCount: tree.overscanCount,
      itemKey: (index2) => {
        var _a;
        return ((_a = tree.visibleNodes[index2]) === null || _a === void 0 ? void 0 : _a.id) || index2;
      },
      outerElementType: ListOuterElement,
      innerElementType: ListInnerElement,
      onScroll: tree.props.onScroll,
      onItemsRendered: tree.onItemsRendered.bind(tree),
      ref: tree.list,
      children: RowContainer
    })
  });
}
function createList(tree) {
  if (tree.isFiltered) {
    return flattenAndFilterTree(tree.root, tree.isMatch.bind(tree));
  } else {
    return flattenTree(tree.root);
  }
}
function flattenTree(root) {
  const list = [];
  function collect(node) {
    var _a;
    if (node.level >= 0) {
      list.push(node);
    }
    if (node.isOpen) {
      (_a = node.children) === null || _a === void 0 ? void 0 : _a.forEach(collect);
    }
  }
  collect(root);
  list.forEach(assignRowIndex);
  return list;
}
function flattenAndFilterTree(root, isMatch) {
  const matches = {};
  const list = [];
  function markMatch(node) {
    const yes = !node.isRoot && isMatch(node);
    if (yes) {
      matches[node.id] = true;
      let parent = node.parent;
      while (parent) {
        matches[parent.id] = true;
        parent = parent.parent;
      }
    }
    if (node.children) {
      for (let child of node.children) markMatch(child);
    }
  }
  function collect(node) {
    var _a;
    if (node.level >= 0 && matches[node.id]) {
      list.push(node);
    }
    if (node.isOpen) {
      (_a = node.children) === null || _a === void 0 ? void 0 : _a.forEach(collect);
    }
  }
  markMatch(root);
  collect(root);
  list.forEach(assignRowIndex);
  return list;
}
function assignRowIndex(node, index2) {
  node.rowIndex = index2;
}
const createIndex = (nodes) => {
  return nodes.reduce((map, node, index2) => {
    map[node.id] = index2;
    return map;
  }, {});
};
var __awaiter = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const {
  safeRun,
  identify,
  identifyNull
} = utils;
class TreeApi {
  constructor(store, props, list, listEl) {
    this.store = store;
    this.props = props;
    this.list = list;
    this.listEl = listEl;
    this.visibleStartIndex = 0;
    this.visibleStopIndex = 0;
    this.root = createRoot$1(this);
    this.visibleNodes = createList(this);
    this.idToIndex = createIndex(this.visibleNodes);
  }
  /* Changes here must also be made in constructor() */
  update(props) {
    this.props = props;
    this.root = createRoot$1(this);
    this.visibleNodes = createList(this);
    this.idToIndex = createIndex(this.visibleNodes);
  }
  /* Store helpers */
  dispatch(action) {
    return this.store.dispatch(action);
  }
  get state() {
    return this.store.getState();
  }
  get openState() {
    return this.state.nodes.open.unfiltered;
  }
  /* Tree Props */
  get width() {
    var _a;
    return (_a = this.props.width) !== null && _a !== void 0 ? _a : 300;
  }
  get height() {
    var _a;
    return (_a = this.props.height) !== null && _a !== void 0 ? _a : 500;
  }
  get indent() {
    var _a;
    return (_a = this.props.indent) !== null && _a !== void 0 ? _a : 24;
  }
  get rowHeight() {
    var _a;
    return (_a = this.props.rowHeight) !== null && _a !== void 0 ? _a : 24;
  }
  get overscanCount() {
    var _a;
    return (_a = this.props.overscanCount) !== null && _a !== void 0 ? _a : 1;
  }
  get searchTerm() {
    return (this.props.searchTerm || "").trim();
  }
  get matchFn() {
    var _a;
    const match = (_a = this.props.searchMatch) !== null && _a !== void 0 ? _a : (node, term) => {
      const string = JSON.stringify(Object.values(node.data));
      return string.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    };
    return (node) => match(node, this.searchTerm);
  }
  accessChildren(data) {
    var _a;
    const get2 = this.props.childrenAccessor || "children";
    return (_a = access(data, get2)) !== null && _a !== void 0 ? _a : null;
  }
  accessId(data) {
    const get2 = this.props.idAccessor || "id";
    const id = access(data, get2);
    if (!id) throw new Error("Data must contain an 'id' property or props.idAccessor must return a string");
    return id;
  }
  /* Node Access */
  get firstNode() {
    var _a;
    return (_a = this.visibleNodes[0]) !== null && _a !== void 0 ? _a : null;
  }
  get lastNode() {
    var _a;
    return (_a = this.visibleNodes[this.visibleNodes.length - 1]) !== null && _a !== void 0 ? _a : null;
  }
  get focusedNode() {
    var _a;
    return (_a = this.get(this.state.nodes.focus.id)) !== null && _a !== void 0 ? _a : null;
  }
  get mostRecentNode() {
    var _a;
    return (_a = this.get(this.state.nodes.selection.mostRecent)) !== null && _a !== void 0 ? _a : null;
  }
  get nextNode() {
    const index2 = this.indexOf(this.focusedNode);
    if (index2 === null) return null;
    else return this.at(index2 + 1);
  }
  get prevNode() {
    const index2 = this.indexOf(this.focusedNode);
    if (index2 === null) return null;
    else return this.at(index2 - 1);
  }
  get(id) {
    if (!id) return null;
    if (id in this.idToIndex) return this.visibleNodes[this.idToIndex[id]] || null;
    else return null;
  }
  at(index2) {
    return this.visibleNodes[index2] || null;
  }
  nodesBetween(startId, endId) {
    var _a;
    if (startId === null || endId === null) return [];
    const index1 = (_a = this.indexOf(startId)) !== null && _a !== void 0 ? _a : 0;
    const index2 = this.indexOf(endId);
    if (index2 === null) return [];
    const start = Math.min(index1, index2);
    const end = Math.max(index1, index2);
    return this.visibleNodes.slice(start, end + 1);
  }
  indexOf(id) {
    const key = identifyNull$1(id);
    if (!key) return null;
    return this.idToIndex[key];
  }
  /* Data Operations */
  get editingId() {
    return this.state.nodes.edit.id;
  }
  createInternal() {
    return this.create({
      type: "internal"
    });
  }
  createLeaf() {
    return this.create({
      type: "leaf"
    });
  }
  create() {
    return __awaiter(this, arguments, void 0, function* (opts = {}) {
      var _a, _b;
      const parentId = opts.parentId === void 0 ? getInsertParentId(this) : opts.parentId;
      const index2 = (_a = opts.index) !== null && _a !== void 0 ? _a : getInsertIndex(this);
      const type = (_b = opts.type) !== null && _b !== void 0 ? _b : "leaf";
      const data = yield safeRun(this.props.onCreate, {
        type,
        parentId,
        index: index2,
        parentNode: this.get(parentId)
      });
      if (data) {
        this.focus(data);
        setTimeout(() => {
          this.edit(data).then(() => {
            this.select(data);
            this.activate(data);
          });
        });
      }
    });
  }
  delete(node) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!node) return;
      const idents = Array.isArray(node) ? node : [node];
      const ids = idents.map(identify);
      const nodes = ids.map((id) => this.get(id)).filter((n2) => !!n2);
      yield safeRun(this.props.onDelete, {
        nodes,
        ids
      });
    });
  }
  edit(node) {
    const id = identify(node);
    this.resolveEdit({
      cancelled: true
    });
    this.scrollTo(id);
    this.dispatch(edit(id));
    return new Promise((resolve) => {
      TreeApi.editPromise = resolve;
    });
  }
  submit(identity2, value) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!identity2) return;
      const id = identify(identity2);
      yield safeRun(this.props.onRename, {
        id,
        name: value,
        node: this.get(id)
      });
      this.dispatch(edit(null));
      this.resolveEdit({
        cancelled: false,
        value
      });
      setTimeout(() => this.onFocus());
    });
  }
  reset() {
    this.dispatch(edit(null));
    this.resolveEdit({
      cancelled: true
    });
    setTimeout(() => this.onFocus());
  }
  activate(id) {
    const node = this.get(identifyNull(id));
    if (!node) return;
    safeRun(this.props.onActivate, node);
  }
  resolveEdit(value) {
    const resolve = TreeApi.editPromise;
    if (resolve) resolve(value);
    TreeApi.editPromise = null;
  }
  /* Focus and Selection */
  get selectedIds() {
    return this.state.nodes.selection.ids;
  }
  get selectedNodes() {
    let nodes = [];
    for (let id of Array.from(this.selectedIds)) {
      const node = this.get(id);
      if (node) nodes.push(node);
    }
    return nodes;
  }
  focus(node, opts = {}) {
    if (!node) return;
    if (this.props.selectionFollowsFocus) {
      this.select(node);
    } else {
      this.dispatch(focus(identify(node)));
      if (opts.scroll !== false) this.scrollTo(node);
      if (this.focusedNode) safeRun(this.props.onFocus, this.focusedNode);
    }
  }
  pageUp() {
    var _a, _b;
    const start = this.visibleStartIndex;
    const stop = this.visibleStopIndex;
    const page2 = stop - start;
    let index2 = (_b = (_a = this.focusedNode) === null || _a === void 0 ? void 0 : _a.rowIndex) !== null && _b !== void 0 ? _b : 0;
    if (index2 > start) {
      index2 = start;
    } else {
      index2 = Math.max(start - page2, 0);
    }
    this.focus(this.at(index2));
  }
  pageDown() {
    var _a, _b;
    const start = this.visibleStartIndex;
    const stop = this.visibleStopIndex;
    const page2 = stop - start;
    let index2 = (_b = (_a = this.focusedNode) === null || _a === void 0 ? void 0 : _a.rowIndex) !== null && _b !== void 0 ? _b : 0;
    if (index2 < stop) {
      index2 = stop;
    } else {
      index2 = Math.min(index2 + page2, this.visibleNodes.length - 1);
    }
    this.focus(this.at(index2));
  }
  select(node, opts = {}) {
    var _a;
    if (!node) return;
    const changeFocus = opts.focus !== false;
    const id = identify(node);
    if (changeFocus) this.dispatch(focus(id));
    if ((_a = this.get(id)) === null || _a === void 0 ? void 0 : _a.isSelectable) {
      this.setSelection({
        ids: [id],
        anchor: id,
        mostRecent: id
      });
    }
    this.scrollTo(id, opts.align);
    if (this.focusedNode && changeFocus) {
      safeRun(this.props.onFocus, this.focusedNode);
    }
  }
  deselect(node) {
    if (!node) return;
    const id = identify(node);
    this.dispatch(actions$1.remove(id));
    safeRun(this.props.onSelect, this.selectedNodes);
  }
  selectMulti(identity2, opts = {}) {
    const node = this.get(identifyNull(identity2));
    if (!node) return;
    const changeFocus = opts.focus !== false;
    if (changeFocus) this.dispatch(focus(node.id));
    if (node.isSelectable) {
      this.dispatch(actions$1.add(node.id));
      this.dispatch(actions$1.anchor(node.id));
      this.dispatch(actions$1.mostRecent(node.id));
    }
    this.scrollTo(node, opts.align);
    if (this.focusedNode && changeFocus) {
      safeRun(this.props.onFocus, this.focusedNode);
    }
    safeRun(this.props.onSelect, this.selectedNodes);
  }
  selectContiguous(identity2) {
    var _a;
    if (!identity2) return;
    const id = identify(identity2);
    this.dispatch(focus(id));
    if ((_a = this.get(id)) === null || _a === void 0 ? void 0 : _a.isSelectable) {
      const {
        anchor,
        mostRecent
      } = this.state.nodes.selection;
      const selectableNodes = this.filterSelectableNodes(this.nodesBetween(anchor, identifyNull(id)));
      this.dispatch(actions$1.remove(this.nodesBetween(anchor, mostRecent)));
      this.dispatch(actions$1.add(selectableNodes));
      this.dispatch(actions$1.mostRecent(id));
    }
    this.scrollTo(id);
    if (this.focusedNode) safeRun(this.props.onFocus, this.focusedNode);
    safeRun(this.props.onSelect, this.selectedNodes);
  }
  deselectAll() {
    this.setSelection({
      ids: [],
      anchor: null,
      mostRecent: null
    });
    safeRun(this.props.onSelect, this.selectedNodes);
  }
  selectAll() {
    var _a, _b, _c;
    const allSelectableNodes = this.filterSelectableNodes(Object.keys(this.idToIndex));
    this.setSelection({
      ids: allSelectableNodes,
      anchor: (_a = allSelectableNodes[0]) !== null && _a !== void 0 ? _a : null,
      mostRecent: (_b = allSelectableNodes[allSelectableNodes.length - 1]) !== null && _b !== void 0 ? _b : null
    });
    this.dispatch(focus((_c = this.lastNode) === null || _c === void 0 ? void 0 : _c.id));
    if (this.focusedNode) safeRun(this.props.onFocus, this.focusedNode);
    safeRun(this.props.onSelect, this.selectedNodes);
  }
  filterSelectableNodes(nodes) {
    return nodes.map((n2) => this.get(identify(n2))).filter((n2) => !!n2 && n2.isSelectable);
  }
  setSelection(args) {
    var _a;
    const ids = new Set((_a = args.ids) === null || _a === void 0 ? void 0 : _a.map(identify));
    const anchor = identifyNull(args.anchor);
    const mostRecent = identifyNull(args.mostRecent);
    this.dispatch(actions$1.set({
      ids,
      anchor,
      mostRecent
    }));
    safeRun(this.props.onSelect, this.selectedNodes);
  }
  /* Drag and Drop */
  get cursorParentId() {
    const {
      cursor
    } = this.state.dnd;
    switch (cursor.type) {
      case "highlight":
        return cursor.id;
      default:
        return null;
    }
  }
  get cursorOverFolder() {
    return this.state.dnd.cursor.type === "highlight";
  }
  get dragNodes() {
    return this.state.dnd.dragIds.map((id) => this.get(id)).filter((n2) => !!n2);
  }
  get dragNode() {
    return this.get(this.state.nodes.drag.id);
  }
  get dragDestinationParent() {
    return this.get(this.state.nodes.drag.destinationParentId);
  }
  get dragDestinationIndex() {
    return this.state.nodes.drag.destinationIndex;
  }
  canDrop() {
    var _a;
    if (this.isFiltered) return false;
    const parentNode = (_a = this.get(this.state.dnd.parentId)) !== null && _a !== void 0 ? _a : this.root;
    const dragNodes = this.dragNodes;
    const isDisabled = this.props.disableDrop;
    for (const drag of dragNodes) {
      if (!drag) return false;
      if (!parentNode) return false;
      if (drag.isInternal && isDescendant(parentNode, drag)) return false;
    }
    if (typeof isDisabled == "function") {
      return !isDisabled({
        parentNode,
        dragNodes: this.dragNodes,
        index: this.state.dnd.index || 0
      });
    } else if (typeof isDisabled == "string") {
      return !parentNode.data[isDisabled];
    } else if (typeof isDisabled === "boolean") {
      return !isDisabled;
    } else {
      return true;
    }
  }
  hideCursor() {
    this.dispatch(actions.cursor({
      type: "none"
    }));
  }
  showCursor(cursor) {
    this.dispatch(actions.cursor(cursor));
  }
  /* Visibility */
  open(identity2) {
    const id = identifyNull(identity2);
    if (!id) return;
    if (this.isOpen(id)) return;
    this.dispatch(actions$2.open(id, this.isFiltered));
    safeRun(this.props.onToggle, id);
  }
  close(identity2) {
    const id = identifyNull(identity2);
    if (!id) return;
    if (!this.isOpen(id)) return;
    this.dispatch(actions$2.close(id, this.isFiltered));
    safeRun(this.props.onToggle, id);
  }
  toggle(identity2) {
    const id = identifyNull(identity2);
    if (!id) return;
    return this.isOpen(id) ? this.close(id) : this.open(id);
  }
  openParents(identity2) {
    const id = identifyNull(identity2);
    if (!id) return;
    const node = dfs(this.root, id);
    let parent = node === null || node === void 0 ? void 0 : node.parent;
    while (parent) {
      this.open(parent.id);
      parent = parent.parent;
    }
  }
  openSiblings(node) {
    const parent = node.parent;
    if (!parent) {
      this.toggle(node.id);
    } else if (parent.children) {
      const isOpen = node.isOpen;
      for (let sibling of parent.children) {
        if (sibling.isInternal) {
          isOpen ? this.close(sibling.id) : this.open(sibling.id);
        }
      }
      this.scrollTo(this.focusedNode);
    }
  }
  openAll() {
    walk(this.root, (node) => {
      if (node.isInternal) node.open();
    });
  }
  closeAll() {
    walk(this.root, (node) => {
      if (node.isInternal) node.close();
    });
  }
  /* Scrolling */
  scrollTo(identity2, align = "smart") {
    if (!identity2) return;
    const id = identify(identity2);
    this.openParents(id);
    return waitFor(() => id in this.idToIndex).then(() => {
      var _a;
      const index2 = this.idToIndex[id];
      if (index2 === void 0) return;
      (_a = this.list.current) === null || _a === void 0 ? void 0 : _a.scrollToItem(index2, align);
    }).catch(() => {
    });
  }
  /* State Checks */
  get isEditing() {
    return this.state.nodes.edit.id !== null;
  }
  get isFiltered() {
    var _a;
    return !!((_a = this.props.searchTerm) === null || _a === void 0 ? void 0 : _a.trim());
  }
  get hasFocus() {
    return this.state.nodes.focus.treeFocused;
  }
  get hasNoSelection() {
    return this.state.nodes.selection.ids.size === 0;
  }
  get hasOneSelection() {
    return this.state.nodes.selection.ids.size === 1;
  }
  get hasMultipleSelections() {
    return this.state.nodes.selection.ids.size > 1;
  }
  isSelected(id) {
    if (!id) return false;
    return this.state.nodes.selection.ids.has(id);
  }
  isOpen(id) {
    var _a, _b, _c;
    if (!id) return false;
    if (id === ROOT_ID) return true;
    const def = (_a = this.props.openByDefault) !== null && _a !== void 0 ? _a : true;
    if (this.isFiltered) {
      return (_b = this.state.nodes.open.filtered[id]) !== null && _b !== void 0 ? _b : true;
    } else {
      return (_c = this.state.nodes.open.unfiltered[id]) !== null && _c !== void 0 ? _c : def;
    }
  }
  isEditable(data) {
    return this.isActionPossible(data, this.props.disableEdit);
  }
  isDraggable(data) {
    return this.isActionPossible(data, this.props.disableDrag);
  }
  isSelectable(data) {
    return this.isActionPossible(data, this.props.disableSelect);
  }
  isActionPossible(data, disabler = () => false) {
    return !access(data, disabler);
  }
  isDragging(node) {
    const id = identifyNull(node);
    if (!id) return false;
    return this.state.nodes.drag.id === id;
  }
  isFocused(id) {
    return this.hasFocus && this.state.nodes.focus.id === id;
  }
  isMatch(node) {
    return this.matchFn(node);
  }
  willReceiveDrop(node) {
    const id = identifyNull(node);
    if (!id) return false;
    const {
      destinationParentId,
      destinationIndex
    } = this.state.nodes.drag;
    return id === destinationParentId && destinationIndex === null;
  }
  /* Tree Event Handlers */
  onFocus() {
    const node = this.focusedNode || this.firstNode;
    if (node) this.dispatch(focus(node.id));
  }
  onBlur() {
    this.dispatch(treeBlur());
  }
  onItemsRendered(args) {
    this.visibleStartIndex = args.visibleStartIndex;
    this.visibleStopIndex = args.visibleStopIndex;
  }
  /* Get Renderers */
  get renderContainer() {
    return this.props.renderContainer || DefaultContainer;
  }
  get renderRow() {
    return this.props.renderRow || DefaultRow;
  }
  get renderNode() {
    return this.props.children || DefaultNode;
  }
  get renderDragPreview() {
    return this.props.renderDragPreview || DefaultDragPreview;
  }
  get renderCursor() {
    return this.props.renderCursor || DefaultCursor;
  }
}
function formatProdErrorMessage(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
var randomString2 = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString2()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString2()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString2()}`
};
var actionTypes_default = ActionTypes;
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
function createStore(reducer2, preloadedState, enhancer) {
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer2, preloadedState);
  }
  let currentReducer = reducer2;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (typeof action.type !== "string") {
      throw new Error(formatProdErrorMessage(17));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer2 = reducers[key];
    const initialState2 = reducer2(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer2(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer2 = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer2(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function reducer(state = initialState$2().nodes.drag, action) {
  switch (action.type) {
    case "DND_DRAG_START":
      return Object.assign(Object.assign({}, state), {
        id: action.id,
        selectedIds: action.dragIds
      });
    case "DND_DRAG_END":
      return Object.assign(Object.assign({}, state), {
        id: null,
        destinationParentId: null,
        destinationIndex: null,
        selectedIds: []
      });
    case "DND_HOVERING":
      if (action.parentId !== state.destinationParentId || action.index != state.destinationIndex) {
        return Object.assign(Object.assign({}, state), {
          destinationParentId: action.parentId,
          destinationIndex: action.index
        });
      } else {
        return state;
      }
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  nodes: combineReducers({
    focus: reducer$4,
    edit: reducer$5,
    open: reducer$3,
    selection: reducer$2,
    drag: reducer
  }),
  dnd: reducer$1
});
const SERVER_STATE = initialState$2();
function TreeProvider({
  treeProps,
  imperativeHandle,
  children
}) {
  const list = A$2(null);
  const listEl = A$2(null);
  const store = A$2(
    // @ts-ignore
    createStore(rootReducer, initialState$2(treeProps))
  );
  const state = _useSyncExternalStore(store.current.subscribe, store.current.getState, () => SERVER_STATE);
  const api = T$1(() => {
    return new TreeApi(store.current, treeProps, list, listEl);
  }, []);
  const updateCount = A$2(0);
  T$1(() => {
    updateCount.current += 1;
    api.update(treeProps);
  }, [...Object.values(treeProps), state.nodes.open]);
  F$2(imperativeHandle, () => api);
  y$1(() => {
    if (api.props.selection) {
      api.select(api.props.selection, {
        focus: false
      });
    } else {
      api.deselectAll();
    }
  }, [api.props.selection]);
  y$1(() => {
    if (!api.props.searchTerm) {
      store.current.dispatch(actions$2.clear(true));
    }
  }, [api.props.searchTerm]);
  return u(TreeApiContext.Provider, {
    value: api,
    children: u(DataUpdatesContext.Provider, {
      value: updateCount.current,
      children: u(NodesContext.Provider, {
        value: state.nodes,
        children: u(DndContext$1.Provider, {
          value: state.dnd,
          children: u(DndProvider, Object.assign({}, treeProps.dndManager ? {
            manager: treeProps.dndManager
          } : {
            backend: treeProps.dndBackend || HTML5Backend,
            options: {
              rootElement: api.props.dndRootElement || void 0
            }
          }, {
            children
          }))
        })
      })
    })
  });
}
function useOuterDrop() {
  const tree = useTreeApi();
  const [, drop] = useDrop(() => ({
    accept: "NODE",
    canDrop: (_item, m2) => {
      if (!m2.isOver({
        shallow: true
      })) return false;
      return tree.canDrop();
    },
    hover: (_item, m2) => {
      if (!m2.isOver({
        shallow: true
      })) return;
      const offset = m2.getClientOffset();
      if (!tree.listEl.current || !offset) return;
      const {
        cursor,
        drop: drop2
      } = computeDrop({
        element: tree.listEl.current,
        offset,
        indent: tree.indent,
        node: null,
        prevNode: tree.visibleNodes[tree.visibleNodes.length - 1],
        nextNode: null
      });
      if (drop2) tree.dispatch(actions.hovering(drop2.parentId, drop2.index));
      if (m2.canDrop()) {
        if (cursor) tree.showCursor(cursor);
      } else {
        tree.hideCursor();
      }
    }
  }), [tree]);
  drop(tree.listEl);
}
function OuterDrop(props) {
  useOuterDrop();
  return props.children;
}
function TreeContainer() {
  const tree = useTreeApi();
  const Container = tree.props.renderContainer || DefaultContainer;
  return u(S, {
    children: u(Container, {})
  });
}
function DragPreviewContainer() {
  const tree = useTreeApi();
  const {
    offset,
    mouse,
    item,
    isDragging
  } = useDragLayer((m2) => {
    return {
      offset: m2.getSourceClientOffset(),
      mouse: m2.getClientOffset(),
      item: m2.getItem(),
      isDragging: m2.isDragging()
    };
  });
  const DragPreview = tree.props.renderDragPreview || DefaultDragPreview;
  return u(DragPreview, {
    offset,
    mouse,
    id: (item === null || item === void 0 ? void 0 : item.id) || null,
    dragIds: (item === null || item === void 0 ? void 0 : item.dragIds) || [],
    isDragging
  });
}
class SimpleTree {
  constructor(data) {
    this.root = createRoot(data);
  }
  get data() {
    var _a, _b;
    return (_b = (_a = this.root.children) === null || _a === void 0 ? void 0 : _a.map((node) => node.data)) !== null && _b !== void 0 ? _b : [];
  }
  create(args) {
    const parent = args.parentId ? this.find(args.parentId) : this.root;
    if (!parent) return null;
    parent.addChild(args.data, args.index);
  }
  move(args) {
    const src = this.find(args.id);
    const parent = args.parentId ? this.find(args.parentId) : this.root;
    if (!src || !parent) return;
    parent.addChild(src.data, args.index);
    src.drop();
  }
  update(args) {
    const node = this.find(args.id);
    if (node) node.update(args.changes);
  }
  drop(args) {
    const node = this.find(args.id);
    if (node) node.drop();
  }
  find(id, node = this.root) {
    if (!node) return null;
    if (node.id === id) return node;
    if (node.children) {
      for (let child of node.children) {
        const found = this.find(id, child);
        if (found) return found;
      }
      return null;
    }
    return null;
  }
}
function createRoot(data) {
  const root = new SimpleNode({
    id: "ROOT"
  }, null);
  root.children = data.map((d2) => createNode(d2, root));
  return root;
}
function createNode(data, parent) {
  const node = new SimpleNode(data, parent);
  if (data.children) node.children = data.children.map((d2) => createNode(d2, node));
  return node;
}
class SimpleNode {
  constructor(data, parent) {
    this.data = data;
    this.parent = parent;
    this.id = data.id;
  }
  hasParent() {
    return !!this.parent;
  }
  get childIndex() {
    return this.hasParent() ? this.parent.children.indexOf(this) : -1;
  }
  addChild(data, index2) {
    var _a, _b;
    const node = createNode(data, this);
    this.children = (_a = this.children) !== null && _a !== void 0 ? _a : [];
    this.children.splice(index2, 0, node);
    this.data.children = (_b = this.data.children) !== null && _b !== void 0 ? _b : [];
    this.data.children.splice(index2, 0, data);
  }
  removeChild(index2) {
    var _a, _b;
    (_a = this.children) === null || _a === void 0 ? void 0 : _a.splice(index2, 1);
    (_b = this.data.children) === null || _b === void 0 ? void 0 : _b.splice(index2, 1);
  }
  update(changes) {
    if (this.hasParent()) {
      const i = this.childIndex;
      this.parent.addChild(Object.assign(Object.assign({}, this.data), changes), i);
      this.drop();
    }
  }
  drop() {
    if (this.hasParent()) this.parent.removeChild(this.childIndex);
  }
}
let nextId = 0;
function useSimpleTree(initialData) {
  const [data, setData] = d$1(initialData);
  const tree = T$1(() => new SimpleTree(data), [data]);
  const onMove = (args) => {
    for (const id of args.dragIds) {
      tree.move({
        id,
        parentId: args.parentId,
        index: args.index
      });
    }
    setData(tree.data);
  };
  const onRename = ({
    name,
    id
  }) => {
    tree.update({
      id,
      changes: {
        name
      }
    });
    setData(tree.data);
  };
  const onCreate = ({
    parentId,
    index: index2,
    type
  }) => {
    const data2 = {
      id: `simple-tree-id-${nextId++}`,
      name: ""
    };
    if (type === "internal") data2.children = [];
    tree.create({
      parentId,
      index: index2,
      data: data2
    });
    setData(tree.data);
    return data2;
  };
  const onDelete = (args) => {
    args.ids.forEach((id) => tree.drop({
      id
    }));
    setData(tree.data);
  };
  const controller = {
    onMove,
    onRename,
    onCreate,
    onDelete
  };
  return [data, controller];
}
function useValidatedProps(props) {
  if (props.initialData && props.data) {
    throw new Error(`React Arborist Tree => Provide either a data or initialData prop, but not both.`);
  }
  if (props.initialData && (props.onCreate || props.onDelete || props.onMove || props.onRename)) {
    throw new Error(`React Arborist Tree => You passed the initialData prop along with a data handler.
Use the data prop if you want to provide your own handlers.`);
  }
  if (props.initialData) {
    const [data, controller] = useSimpleTree(props.initialData);
    return Object.assign(Object.assign(Object.assign({}, props), controller), {
      data
    });
  } else {
    return props;
  }
}
function TreeComponent(props, ref) {
  const treeProps = useValidatedProps(props);
  return u(TreeProvider, {
    treeProps,
    imperativeHandle: ref,
    children: [u(OuterDrop, {
      children: u(TreeContainer, {})
    }), u(DragPreviewContainer, {})]
  });
}
D(TreeComponent);
function createFormatErrorMessage(baseUrl, prefix) {
  return function formatErrorMessage2(code, ...args) {
    const url = new URL(baseUrl);
    url.searchParams.set("code", code.toString());
    args.forEach((arg) => url.searchParams.append("args[]", arg));
    return `${prefix} error #${code}; visit ${url} for the full message.`;
  };
}
const formatErrorMessage = createFormatErrorMessage("https://base-ui.com/production-error", "Base UI");
const DialogRootContext = /* @__PURE__ */ X$2(void 0);
function useDialogRootContext(optional) {
  const dialogRootContext = x$2(DialogRootContext);
  return dialogRootContext;
}
const UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = A$2(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
function useMergedRefs(a2, b2, c2, d2) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a2, b2, c2, d2)) {
    update(forkRef, [a2, b2, c2, d2]);
  }
  return forkRef.callback;
}
function useMergedRefsN(refs) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a2, b2, c2, d2) {
  return forkRef.refs[0] !== a2 || forkRef.refs[1] !== b2 || forkRef.refs[2] !== c2 || forkRef.refs[3] !== d2;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index2) => ref !== newRefs[index2]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every((ref) => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = (instance) => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i = 0; i < refs.length; i += 1) {
        const ref = refs[i];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case "function": {
            const refCleanup = ref(instance);
            if (typeof refCleanup === "function") {
              cleanupCallbacks[i] = refCleanup;
            }
            break;
          }
          case "object": {
            ref.current = instance;
            break;
          }
        }
      }
      forkRef.cleanup = () => {
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const cleanupCallback = cleanupCallbacks[i];
              if (typeof cleanupCallback === "function") {
                cleanupCallback();
              } else {
                ref(null);
              }
              break;
            }
            case "object": {
              ref.current = null;
              break;
            }
          }
        }
      };
    }
  };
}
const majorVersion = parseInt(an, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}
function getReactElementRef(element) {
  if (!/* @__PURE__ */ hn(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}
function mergeObjects(a2, b2) {
  if (a2 && !b2) {
    return a2;
  }
  if (!a2 && b2) {
    return b2;
  }
  if (a2 || b2) {
    return {
      ...a2,
      ...b2
    };
  }
  return void 0;
}
function NOOP() {
}
const EMPTY_OBJECT = Object.freeze({});
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}
const EMPTY_PROPS = {};
function mergeProps(a2, b2, c2, d2, e2) {
  if (!c2 && !d2 && true && !a2) {
    return createInitialMergedProps(b2);
  }
  let merged = createInitialMergedProps(a2);
  if (b2) {
    merged = mergeInto(merged, b2);
  }
  if (c2) {
    merged = mergeInto(merged, c2);
  }
  if (d2) {
    merged = mergeInto(merged, d2);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }
  let merged = createInitialMergedProps(props[0]);
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeInto(merged, props[i]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    return {
      ...resolvePropsGetter(inputProps, EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return resolvePropsGetter(inputProps, merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler2) {
  if (!handler2) {
    return handler2;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler2(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}
function useRenderElement(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping2,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping2) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return mergePropsN(props);
  }
  return mergeProps(void 0, props);
}
const REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === "function") {
      return render(props, state);
    }
    const mergedProps = mergeProps(props, render.props);
    mergedProps.ref = props.ref;
    let newElement = render;
    if (newElement?.$$typeof === REACT_LAZY_TYPE) {
      const children = L.toArray(render);
      newElement = children[0];
    }
    return /* @__PURE__ */ mn(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag(element, props);
    }
  }
  throw new Error(formatErrorMessage(8));
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ k$2("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ k$2("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ k$2(Tag, props);
}
let TransitionStatusDataAttributes = /* @__PURE__ */ (function(TransitionStatusDataAttributes2) {
  TransitionStatusDataAttributes2["startingStyle"] = "data-starting-style";
  TransitionStatusDataAttributes2["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes2;
})({});
const STARTING_HOOK = {
  [TransitionStatusDataAttributes.startingStyle]: ""
};
const ENDING_HOOK = {
  [TransitionStatusDataAttributes.endingStyle]: ""
};
const transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  }
};
let CommonPopupDataAttributes = (function(CommonPopupDataAttributes2) {
  CommonPopupDataAttributes2["open"] = "data-open";
  CommonPopupDataAttributes2["closed"] = "data-closed";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
  CommonPopupDataAttributes2["anchorHidden"] = "data-anchor-hidden";
  CommonPopupDataAttributes2["side"] = "data-side";
  CommonPopupDataAttributes2["align"] = "data-align";
  return CommonPopupDataAttributes2;
})({});
const POPUP_OPEN_HOOK = {
  [CommonPopupDataAttributes.open]: ""
};
const POPUP_CLOSED_HOOK = {
  [CommonPopupDataAttributes.closed]: ""
};
const ANCHOR_HIDDEN_HOOK = {
  [CommonPopupDataAttributes.anchorHidden]: ""
};
const popupStateMapping = {
  open(value) {
    if (value) {
      return POPUP_OPEN_HOOK;
    }
    return POPUP_CLOSED_HOOK;
  },
  anchorHidden(value) {
    if (value) {
      return ANCHOR_HIDDEN_HOOK;
    }
    return null;
  }
};
const stateAttributesMapping$1 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
const DialogBackdrop = /* @__PURE__ */ D(function DialogBackdrop2(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    forceRender = false,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const open = store.useState("open");
  const nested = store.useState("nested");
  const mounted = store.useState("mounted");
  const transitionStatus = store.useState("transitionStatus");
  const state = {
    open,
    transitionStatus
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: [store.context.backdropRef, forwardedRef],
    stateAttributesMapping: stateAttributesMapping$1,
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps],
    enabled: forceRender || !nested
  });
});
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
const useInsertionEffect = _mod$4[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)];
const useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== _ ? useInsertionEffect : (fn2) => fn2()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
}
const SafeReact = {
  ..._mod$4
};
const noop$2 = () => {
};
const useIsoLayoutEffect = typeof document !== "undefined" ? _ : noop$2;
const CompositeRootContext = /* @__PURE__ */ X$2(void 0);
function useCompositeRootContext(optional = false) {
  const context = x$2(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(formatErrorMessage(16));
  }
  return context;
}
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = T$1(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
      additionalProps["aria-disabled"] = disabled;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled;
    }
    return additionalProps;
  }, [composite, disabled, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = A$2(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  const updateDisabled = q$2(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = q$2((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    const type = isNativeButton ? "button" : void 0;
    return mergeProps({
      type,
      onClick(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        const role = currentTarget.getAttribute("role");
        const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();
          if (isLink || isNativeButton && isButton) {
            currentTarget.click();
            event.preventBaseUIHandler();
          } else if (shouldClick) {
            externalOnClick?.(event);
            event.preventBaseUIHandler();
          }
          return;
        }
        if (shouldClick) {
          if (!isNativeButton && (isSpaceKey || isEnterKey)) {
            event.preventDefault();
          }
          if (!isNativeButton && isEnterKey) {
            externalOnClick?.(event);
          }
        }
      },
      onKeyUp(event) {
        if (disabled) {
          return;
        }
        makeEventPreventable(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === " ") {
          externalOnClick?.(event);
        }
      },
      onPointerDown(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, !isNativeButton ? {
      role: "button"
    } : void 0, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
  return Boolean(elem?.tagName === "A" && elem?.href);
}
const triggerHover = "trigger-hover";
const outsidePress = "outside-press";
const closePress = "close-press";
const focusOut = "focus-out";
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}
const DialogClose = /* @__PURE__ */ D(function DialogClose2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const open = store.useState("open");
  function handleClick(event) {
    if (open) {
      store.setOpen(false, createChangeEventDetails(closePress, event.nativeEvent));
    }
  }
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const state = {
    disabled
  };
  return useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [{
      onClick: handleClick
    }, elementProps, getButtonProps]
  });
});
let globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const [defaultId, setDefaultId] = d$1(idOverride);
  const id = idOverride || defaultId;
  y$1(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
  return id;
}
const maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }
  return useGlobalId(idOverride, prefix);
}
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}
const DialogDescription$1 = /* @__PURE__ */ D(function DialogDescription(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const id = useBaseUiId(idProp);
  store.useSyncedValueWithCleanup("descriptionElementId", id);
  return useRenderElement("p", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
});
const EMPTY$2 = [];
function useOnMount(fn2) {
  y$1(fn2, EMPTY$2);
}
const EMPTY$1 = 0;
class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = EMPTY$1;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn2) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY$1;
      fn2();
    }, delay);
  }
  isStarted() {
    return this.currentId !== EMPTY$1;
  }
  clear = () => {
    if (this.currentId !== EMPTY$1) {
      clearTimeout(this.currentId);
      this.currentId = EMPTY$1;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
const hasNavigator = typeof navigator !== "undefined";
const nav = getNavigatorData();
const platform = getPlatform();
const userAgent = getUserAgent();
const isWebKit = typeof CSS === "undefined" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter:none");
nav.platform === "MacIntel" && nav.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test(nav.platform);
const isSafari = hasNavigator && /apple/i.test(navigator.vendor);
const isAndroid = hasNavigator && /android/i.test(platform) || /android/i.test(userAgent);
hasNavigator && platform.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
const isJSDOM = userAgent.includes("jsdom/");
function getNavigatorData() {
  if (!hasNavigator) {
    return {
      platform: "",
      maxTouchPoints: -1
    };
  }
  const uaData = navigator.userAgentData;
  if (uaData?.platform) {
    return {
      platform: uaData.platform,
      maxTouchPoints: navigator.maxTouchPoints
    };
  }
  return {
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? -1
  };
}
function getUserAgent() {
  if (!hasNavigator) {
    return "";
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map(({
      brand,
      version
    }) => `${brand}/${version}`).join(" ");
  }
  return navigator.userAgent;
}
function getPlatform() {
  if (!hasNavigator) {
    return "";
  }
  const uaData = navigator.userAgentData;
  if (uaData?.platform) {
    return uaData.platform;
  }
  return navigator.platform ?? "";
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isVirtualClick(event) {
  if (event.pointerType === "" && event.isTrusted) {
    return true;
  }
  if (isAndroid && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (isJSDOM) {
    return false;
  }
  return !isAndroid && event.width === 0 && event.height === 0 || isAndroid && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}
function mergeCleanups(...cleanups) {
  return () => {
    for (let i = 0; i < cleanups.length; i += 1) {
      const cleanup = cleanups[i];
      if (cleanup) {
        cleanup();
      }
    }
  };
}
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}
const EMPTY = null;
class Scheduler {
  /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (timestamp2) => {
    this.isScheduled = false;
    const currentCallbacks = this.callbacks;
    const currentCallbacksCount = this.callbacksCount;
    this.callbacks = [];
    this.callbacksCount = 0;
    this.startId = this.nextId;
    if (currentCallbacksCount > 0) {
      for (let i = 0; i < currentCallbacks.length; i += 1) {
        currentCallbacks[i]?.(timestamp2);
      }
    }
  };
  request(fn2) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn2);
    this.callbacksCount += 1;
    const didRAFChange = false;
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index2 = id - this.startId;
    if (index2 < 0 || index2 >= this.callbacks.length) {
      return;
    }
    this.callbacks[index2] = null;
    this.callbacksCount -= 1;
  }
}
const scheduler = new Scheduler();
class AnimationFrame {
  static create() {
    return new AnimationFrame();
  }
  static request(fn2) {
    return scheduler.request(fn2);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  currentId = EMPTY;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn2) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY;
      fn2();
    });
  }
  cancel = () => {
    if (this.currentId !== EMPTY) {
      scheduler.cancel(this.currentId);
      this.currentId = EMPTY;
    }
  };
  disposeEffect = () => {
    return this.cancel;
  };
}
function useAnimationFrame() {
  const timeout = useRefWithInit(AnimationFrame.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
function ownerDocument(node) {
  return node?.ownerDocument || document;
}
const visuallyHiddenBase = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
const visuallyHidden = {
  ...visuallyHiddenBase,
  position: "fixed",
  top: 0,
  left: 0
};
const FocusGuard = /* @__PURE__ */ D(function FocusGuard2(props, ref) {
  const [role, setRole] = d$1();
  useIsoLayoutEffect(() => {
    if (isSafari) {
      setRole("button");
    }
  }, []);
  const restProps = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role
  };
  return /* @__PURE__ */ u("span", {
    ...props,
    ref,
    style: visuallyHidden,
    "aria-hidden": role ? void 0 : true,
    ...restProps,
    "data-base-ui-focus-guard": ""
  });
});
const FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function isTypeableCombobox(element) {
  if (!element) {
    return false;
  }
  return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}
function getFloatingFocusElement(floatingElement) {
  if (!floatingElement) {
    return null;
  }
  return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector(`[${FOCUSABLE_ATTRIBUTE}]`) || floatingElement;
}
function isHiddenByStyles(styles) {
  return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(element, styles = element ? getComputedStyle(element) : null) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  return styles.display !== "none" && styles.display !== "contents";
}
const CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
  const assignedSlot = element.assignedSlot;
  if (assignedSlot) {
    return assignedSlot;
  }
  if (element.parentElement) {
    return element.parentElement;
  }
  const rootNode = element.getRootNode();
  return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
  for (const child of Array.from(details.children)) {
    if (getNodeName(child) === "summary") {
      return child;
    }
  }
  return null;
}
function isWithinOpenDetailsSummary(element, details) {
  const summary = getDetailsSummary(details);
  return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
  const nodeName = element ? getNodeName(element) : "";
  return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
}
function isFocusableElement(element) {
  if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) {
    return false;
  }
  for (let current = element; current; current = getParentElement(current)) {
    const isAncestor = current !== element;
    const isSlot = getNodeName(current) === "slot";
    if (current.hasAttribute("inert")) {
      return false;
    }
    if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
      return false;
    }
  }
  return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
  const styles = getComputedStyle(element);
  if (!isAncestor) {
    return isElementVisible(element, styles);
  }
  return styles.display !== "none";
}
function getTabIndex(element) {
  const tabIndex = element.tabIndex;
  if (tabIndex < 0) {
    const nodeName = getNodeName(element);
    if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) {
      return 0;
    }
  }
  return tabIndex;
}
function getNamedRadioInput(element) {
  if (getNodeName(element) !== "input") {
    return null;
  }
  const input = element;
  return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio(element, candidates) {
  const input = getNamedRadioInput(element);
  if (!input) {
    return true;
  }
  const checkedRadio = candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form && radio.checked;
  });
  if (checkedRadio) {
    return checkedRadio === input;
  }
  return candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form;
  }) === input;
}
function getComposedChildren(container) {
  if (isHTMLElement(container) && getNodeName(container) === "slot") {
    const assignedElements = container.assignedElements({
      flatten: true
    });
    if (assignedElements.length > 0) {
      return assignedElements;
    }
  }
  if (isHTMLElement(container) && container.shadowRoot) {
    return Array.from(container.shadowRoot.children);
  }
  return Array.from(container.children);
}
function appendCandidates(container, list) {
  getComposedChildren(container).forEach((child) => {
    if (isFocusableCandidate(child)) {
      list.push(child);
    }
    appendCandidates(child, list);
  });
}
function appendMatchingElements(container, selector, list) {
  getComposedChildren(container).forEach((child) => {
    if (isHTMLElement(child) && child.matches(selector)) {
      list.push(child);
    }
    appendMatchingElements(child, selector, list);
  });
}
function isTabbable(element) {
  return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
  const candidates = [];
  appendCandidates(container, candidates);
  return candidates.filter(isFocusableElement);
}
function tabbable(container) {
  const candidates = focusable(container);
  return candidates.filter((element) => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
  const list = tabbable(container);
  const len = list.length;
  if (len === 0) {
    return void 0;
  }
  const active = activeElement(ownerDocument(container));
  const index2 = list.indexOf(active);
  const nextIndex = index2 === -1 ? dir === 1 ? 0 : len - 1 : index2 + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container);
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements2 = [];
  appendMatchingElements(container, "[data-tabindex]", elements2);
  elements2.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
  const directChildren = nodes.filter((node) => node.parentId === id);
  return directChildren.flatMap((child) => [...!onlyOpenChildren || child.context?.open ? [child] : [], ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}
function getNodeAncestors(nodes, id) {
  let allAncestors = [];
  let currentParentId = nodes.find((node) => node.id === id)?.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode?.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
function createAttribute(name) {
  return `data-base-ui-${name}`;
}
let rafId = 0;
function enqueueFocus(el, options = {}) {
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  if (cancelPrevious) {
    cancelAnimationFrame(rafId);
  }
  const exec = () => el?.focus({
    preventScroll
  });
  if (sync) {
    exec();
    return NOOP;
  }
  const currentRafId = requestAnimationFrame(exec);
  rafId = currentRafId;
  return () => {
    if (rafId === currentRafId) {
      cancelAnimationFrame(currentRafId);
      rafId = 0;
    }
  };
}
const counters = {
  inert: /* @__PURE__ */ new WeakMap(),
  "aria-hidden": /* @__PURE__ */ new WeakMap()
};
const markerName = "data-base-ui-inert";
const uncontrolledElementsSets = {
  inert: /* @__PURE__ */ new WeakSet(),
  "aria-hidden": /* @__PURE__ */ new WeakSet()
};
let markerCounterMap = /* @__PURE__ */ new WeakMap();
let lockCount = 0;
function getUncontrolledElementsSet(controlAttribute) {
  return uncontrolledElementsSets[controlAttribute];
}
function unwrapHost(node) {
  if (!node) {
    return null;
  }
  return isShadowRoot(node) ? node.host : unwrapHost(node.parentNode);
}
const correctElements = (parent, targets) => targets.map((target) => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter((x2) => x2 != null);
const buildKeepSet = (targets) => {
  const keep = /* @__PURE__ */ new Set();
  targets.forEach((target) => {
    let node = target;
    while (node && !keep.has(node)) {
      keep.add(node);
      node = node.parentNode;
    }
  });
  return keep;
};
const collectOutsideElements = (root, keepElements, stopElements) => {
  const outside = [];
  const walk2 = (parent) => {
    if (!parent || stopElements.has(parent)) {
      return;
    }
    Array.from(parent.children).forEach((node) => {
      if (getNodeName(node) === "script") {
        return;
      }
      if (keepElements.has(node)) {
        walk2(node);
      } else {
        outside.push(node);
      }
    });
  };
  walk2(root);
  return outside;
};
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert, {
  mark = true,
  markerIgnoreElements = []
}) {
  const controlAttribute = inert ? "inert" : ariaHidden ? "aria-hidden" : null;
  let counterMap = null;
  let uncontrolledElementsSet = null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const markerIgnoreTargets = mark ? correctElements(body, markerIgnoreElements) : [];
  const markerIgnoreSet = new Set(markerIgnoreTargets);
  const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)).filter((target) => !markerIgnoreSet.has(target)) : [];
  const hiddenElements = [];
  const markedElements = [];
  if (controlAttribute) {
    const map = counters[controlAttribute];
    const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
    uncontrolledElementsSet = currentUncontrolledElementsSet;
    counterMap = map;
    const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll("[aria-live]")));
    const controlElements = avoidElements.concat(ariaLiveElements);
    const controlTargets = collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements));
    controlTargets.forEach((node) => {
      const attr2 = node.getAttribute(controlAttribute);
      const alreadyHidden = attr2 !== null && attr2 !== "false";
      const counterValue = (map.get(node) || 0) + 1;
      map.set(node, counterValue);
      hiddenElements.push(node);
      if (counterValue === 1 && alreadyHidden) {
        currentUncontrolledElementsSet.add(node);
      }
      if (!alreadyHidden) {
        node.setAttribute(controlAttribute, controlAttribute === "inert" ? "" : "true");
      }
    });
  }
  if (mark) {
    markerTargets.forEach((node) => {
      const markerValue = (markerCounterMap.get(node) || 0) + 1;
      markerCounterMap.set(node, markerValue);
      markedElements.push(node);
      if (markerValue === 1) {
        node.setAttribute(markerName, "");
      }
    });
  }
  lockCount += 1;
  return () => {
    if (counterMap) {
      hiddenElements.forEach((element) => {
        const currentCounterValue = counterMap.get(element) || 0;
        const counterValue = currentCounterValue - 1;
        counterMap.set(element, counterValue);
        if (!counterValue) {
          if (!uncontrolledElementsSet?.has(element) && controlAttribute) {
            element.removeAttribute(controlAttribute);
          }
          uncontrolledElementsSet?.delete(element);
        }
      });
    }
    if (mark) {
      markedElements.forEach((element) => {
        const markerValue = (markerCounterMap.get(element) || 0) - 1;
        markerCounterMap.set(element, markerValue);
        if (!markerValue) {
          element.removeAttribute(markerName);
        }
      });
    }
    lockCount -= 1;
    if (!lockCount) {
      counters.inert = /* @__PURE__ */ new WeakMap();
      counters["aria-hidden"] = /* @__PURE__ */ new WeakMap();
      uncontrolledElementsSets.inert = /* @__PURE__ */ new WeakSet();
      uncontrolledElementsSets["aria-hidden"] = /* @__PURE__ */ new WeakSet();
      markerCounterMap = /* @__PURE__ */ new WeakMap();
    }
  };
}
function markOthers(avoidElements, options = {}) {
  const {
    ariaHidden = false,
    inert = false,
    mark = true,
    markerIgnoreElements = []
  } = options;
  const body = ownerDocument(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements, body, ariaHidden, inert, {
    mark,
    markerIgnoreElements
  });
}
const CLICK_TRIGGER_IDENTIFIER = "data-base-ui-click-trigger";
const ownerVisuallyHidden = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
};
const PortalContext = /* @__PURE__ */ X$2(null);
const usePortalContext = () => x$2(PortalContext);
const attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
  const {
    ref,
    container: containerProp,
    componentProps = EMPTY_OBJECT,
    elementProps
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const parentPortalNode = portalContext?.portalNode;
  const [containerElement, setContainerElement] = d$1(null);
  const [portalNode, setPortalNode] = d$1(null);
  const setPortalNodeRef = useStableCallback((node) => {
    if (node !== null) {
      setPortalNode(node);
    }
  });
  const containerRef = A$2(null);
  useIsoLayoutEffect(() => {
    if (containerProp === null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (uniqueId == null) {
      return;
    }
    const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
    if (resolvedContainer == null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (containerRef.current !== resolvedContainer) {
      containerRef.current = resolvedContainer;
      setPortalNode(null);
      setContainerElement(resolvedContainer);
    }
  }, [containerProp, parentPortalNode, uniqueId]);
  const portalElement = useRenderElement("div", componentProps, {
    ref: [ref, setPortalNodeRef],
    props: [{
      id: uniqueId,
      [attr]: ""
    }, elementProps]
  });
  const portalSubtree = containerElement && portalElement ? /* @__PURE__ */ $(portalElement, containerElement) : null;
  return {
    portalNode,
    portalSubtree
  };
}
const FloatingPortal = /* @__PURE__ */ D(function FloatingPortal2(componentProps, forwardedRef) {
  const {
    children,
    container,
    className,
    render,
    renderGuards,
    style,
    ...elementProps
  } = componentProps;
  const {
    portalNode,
    portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  const beforeOutsideRef = A$2(null);
  const afterOutsideRef = A$2(null);
  const beforeInsideRef = A$2(null);
  const afterInsideRef = A$2(null);
  const [focusManagerState, setFocusManagerState] = d$1(null);
  const focusInsideDisabledRef = A$2(false);
  const modal = focusManagerState?.modal;
  const open = focusManagerState?.open;
  const shouldRenderGuards = typeof renderGuards === "boolean" ? renderGuards : !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
  y$1(() => {
    if (!portalNode || modal) {
      return void 0;
    }
    function onFocus(event) {
      if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
        if (event.type === "focusin") {
          if (focusInsideDisabledRef.current) {
            enableFocusInside(portalNode);
            focusInsideDisabledRef.current = false;
          }
        } else {
          disableFocusInside(portalNode);
          focusInsideDisabledRef.current = true;
        }
      }
    }
    return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
  }, [portalNode, modal]);
  y$1(() => {
    if (!portalNode || open !== false) {
      return;
    }
    enableFocusInside(portalNode);
    focusInsideDisabledRef.current = false;
  }, [open, portalNode]);
  const portalContextValue = T$1(() => ({
    beforeOutsideRef,
    afterOutsideRef,
    beforeInsideRef,
    afterInsideRef,
    portalNode,
    setFocusManagerState
  }), [portalNode]);
  return /* @__PURE__ */ u(S, {
    children: [portalSubtree, /* @__PURE__ */ u(PortalContext.Provider, {
      value: portalContextValue,
      children: [shouldRenderGuards && portalNode && /* @__PURE__ */ u(FocusGuard, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            beforeInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          }
        }
      }), shouldRenderGuards && portalNode && /* @__PURE__ */ u("span", {
        "aria-owns": portalNode.id,
        style: ownerVisuallyHidden
      }), portalNode && /* @__PURE__ */ $(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ u(FocusGuard, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            afterInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
            if (focusManagerState?.closeOnFocusOut) {
              focusManagerState?.onOpenChange(false, createChangeEventDetails(focusOut, event.nativeEvent));
            }
          }
        }
      })]
    })]
  });
});
const FloatingTreeContext = /* @__PURE__ */ X$2(null);
const useFloatingTree = (externalTree) => {
  const contextTree = x$2(FloatingTreeContext);
  return externalTree ?? contextTree;
};
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}
function getEventType(event, lastInteractionType) {
  const win = getWindow(getTarget(event));
  if (event instanceof win.KeyboardEvent) {
    return "keyboard";
  }
  if (event instanceof win.FocusEvent) {
    return lastInteractionType || "keyboard";
  }
  if ("pointerType" in event) {
    return event.pointerType || "keyboard";
  }
  if ("touches" in event) {
    return "touch";
  }
  if (event instanceof win.MouseEvent) {
    return lastInteractionType || (event.detail === 0 ? "keyboard" : "mouse");
  }
  return "";
}
const LIST_LIMIT = 20;
let previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
  previouslyFocusedElements = previouslyFocusedElements.filter((entry) => {
    return entry.deref()?.isConnected;
  });
}
function addPreviouslyFocusedElement(element) {
  clearDisconnectedPreviouslyFocusedElements();
  if (element && getNodeName(element) !== "body") {
    previouslyFocusedElements.push(new WeakRef(element));
    if (previouslyFocusedElements.length > LIST_LIMIT) {
      previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
    }
  }
}
function getPreviouslyFocusedElement() {
  clearDisconnectedPreviouslyFocusedElements();
  return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
}
function getFirstTabbableElement(container) {
  if (!container) {
    return null;
  }
  if (isTabbable(container)) {
    return container;
  }
  return tabbable(container)[0] || container;
}
function handleTabIndex(floatingFocusElement, orderRef) {
  if (floatingFocusElement.hasAttribute("tabindex") && !floatingFocusElement.hasAttribute("data-tabindex")) {
    return;
  }
  if (!orderRef.current.includes("floating") && !floatingFocusElement.getAttribute("role")?.includes("dialog")) {
    return;
  }
  const focusableElements = focusable(floatingFocusElement);
  const tabbableContent = focusableElements.filter((element) => {
    const dataTabIndex = element.getAttribute("data-tabindex") || "";
    return isTabbable(element) || element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-");
  });
  const tabIndex = floatingFocusElement.getAttribute("tabindex");
  if (orderRef.current.includes("floating") || tabbableContent.length === 0) {
    if (tabIndex !== "0") {
      floatingFocusElement.setAttribute("tabindex", "0");
    }
  } else if (tabIndex !== "-1" || floatingFocusElement.hasAttribute("data-tabindex") && floatingFocusElement.getAttribute("data-tabindex") !== "-1") {
    floatingFocusElement.setAttribute("tabindex", "-1");
    floatingFocusElement.setAttribute("data-tabindex", "-1");
  }
}
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled = false,
    initialFocus = true,
    returnFocus = true,
    restoreFocus = false,
    modal = true,
    closeOnFocusOut = true,
    openInteractionType = "",
    nextFocusableElement,
    previousFocusableElement,
    beforeContentFocusGuardRef,
    externalTree,
    getInsideElements
  } = props;
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const domReference = store.useState("domReferenceElement");
  const floating = store.useState("floatingElement");
  const {
    events,
    dataRef
  } = store.context;
  const getNodeId = useStableCallback(() => dataRef.current.floatingContext?.nodeId);
  const ignoreInitialFocus = initialFocus === false;
  const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
  const orderRef = A$2(["content"]);
  const initialFocusRef = useValueAsRef(initialFocus);
  const returnFocusRef = useValueAsRef(returnFocus);
  const openInteractionTypeRef = useValueAsRef(openInteractionType);
  const tree = useFloatingTree(externalTree);
  const portalContext = usePortalContext();
  const preventReturnFocusRef = A$2(false);
  const isPointerDownRef = A$2(false);
  const pointerDownOutsideRef = A$2(false);
  const lastFocusedTabbableRef = A$2(null);
  const closeTypeRef = A$2("");
  const lastInteractionTypeRef = A$2("");
  const beforeGuardRef = A$2(null);
  const afterGuardRef = A$2(null);
  const mergedBeforeGuardRef = useMergedRefs(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
  const mergedAfterGuardRef = useMergedRefs(afterGuardRef, portalContext?.afterInsideRef);
  const blurTimeout = useTimeout();
  const pointerDownTimeout = useTimeout();
  const restoreFocusFrame = useAnimationFrame();
  const isInsidePortal = portalContext != null;
  const floatingFocusElement = getFloatingFocusElement(floating);
  const getTabbableContent = useStableCallback((container = floatingFocusElement) => {
    return container ? tabbable(container) : [];
  });
  const getResolvedInsideElements = useStableCallback(() => getInsideElements?.().filter((element) => element != null) ?? []);
  y$1(() => {
    if (disabled || !modal) {
      return void 0;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (contains(floatingFocusElement, activeElement(ownerDocument(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          stopEvent(event);
        }
      }
    }
    const doc = ownerDocument(floatingFocusElement);
    return addEventListener(doc, "keydown", onKeyDown);
  }, [disabled, domReference, floatingFocusElement, modal, orderRef, isUntrappedTypeableCombobox, getTabbableContent]);
  y$1(() => {
    if (disabled || !open) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function clearPointerDownOutside() {
      pointerDownOutsideRef.current = false;
    }
    function onPointerDown(event) {
      const target = getTarget(event);
      const insideElements = getResolvedInsideElements();
      const pointerTargetInside = contains(floating, target) || contains(domReference, target) || contains(portalContext?.portalNode, target) || insideElements.some((element) => element === target || contains(element, target));
      pointerDownOutsideRef.current = !pointerTargetInside;
      lastInteractionTypeRef.current = event.pointerType || "keyboard";
      if (target?.closest(`[${CLICK_TRIGGER_IDENTIFIER}]`)) {
        isPointerDownRef.current = true;
      }
    }
    function onKeyDown() {
      lastInteractionTypeRef.current = "keyboard";
    }
    return mergeCleanups(addEventListener(doc, "pointerdown", onPointerDown, true), addEventListener(doc, "pointerup", clearPointerDownOutside, true), addEventListener(doc, "pointercancel", clearPointerDownOutside, true), addEventListener(doc, "keydown", onKeyDown, true));
  }, [disabled, floating, domReference, floatingFocusElement, open, portalContext, getResolvedInsideElements]);
  y$1(() => {
    if (disabled || !closeOnFocusOut) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function handlePointerDown() {
      isPointerDownRef.current = true;
      pointerDownTimeout.start(0, () => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusIn(event) {
      const target = getTarget(event);
      if (isTabbable(target)) {
        lastFocusedTabbableRef.current = target;
      }
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const currentTarget = event.currentTarget;
      const target = getTarget(event);
      queueMicrotask(() => {
        const nodeId = getNodeId();
        const triggers = store.context.triggerElements;
        const insideElements = getResolvedInsideElements();
        const isRelatedFocusGuard = relatedTarget?.hasAttribute(createAttribute("focus-guard")) && [beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeInsideRef.current, portalContext?.afterInsideRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement)].includes(relatedTarget);
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext?.portalNode, relatedTarget) || insideElements.some((element) => element === relatedTarget || contains(element, relatedTarget)) || relatedTarget != null && triggers.hasElement(relatedTarget) || triggers.hasMatchingElement((trigger) => contains(trigger, relatedTarget)) || isRelatedFocusGuard || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node) => contains(node.context?.elements.floating, relatedTarget) || contains(node.context?.elements.domReference, relatedTarget)) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node) => [node.context?.elements.floating, getFloatingFocusElement(node.context?.elements.floating)].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
        if (currentTarget === domReference && floatingFocusElement) {
          handleTabIndex(floatingFocusElement, orderRef);
        }
        if (restoreFocus && currentTarget !== domReference && !isElementVisible(target) && activeElement(doc) === doc.body) {
          if (isHTMLElement(floatingFocusElement)) {
            floatingFocusElement.focus();
            if (restoreFocus === "popup") {
              restoreFocusFrame.request(() => {
                floatingFocusElement.focus();
              });
              return;
            }
          }
          const tabbableContent = getTabbableContent();
          const prevTabbable = lastFocusedTabbableRef.current;
          const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
          if (isHTMLElement(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }
        if (dataRef.current.insideReactTree) {
          dataRef.current.insideReactTree = false;
          return;
        }
        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        // For an "untrapped" typeable combobox (input role=combobox with
        // initialFocus=false), re-opening the popup and tabbing out should still close it even
        // when the previously focused element (e.g. the next tabbable outside the popup) is
        // focused again. Otherwise, the popup remains open on the second Tab sequence:
        // click input -> Tab (closes) -> click input -> Tab.
        // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
        (isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
          preventReturnFocusRef.current = true;
          store.setOpen(false, createChangeEventDetails(focusOut, event));
        }
      });
    }
    function markInsideReactTree() {
      if (pointerDownOutsideRef.current) {
        return;
      }
      dataRef.current.insideReactTree = true;
      blurTimeout.start(0, () => {
        dataRef.current.insideReactTree = false;
      });
    }
    const domReferenceElement = isHTMLElement(domReference) ? domReference : null;
    if (!floating && !domReferenceElement) {
      return void 0;
    }
    return mergeCleanups(domReferenceElement && addEventListener(domReferenceElement, "focusout", handleFocusOutside), domReferenceElement && addEventListener(domReferenceElement, "pointerdown", handlePointerDown), floating && addEventListener(floating, "focusin", handleFocusIn), floating && addEventListener(floating, "focusout", handleFocusOutside), floating && portalContext && addEventListener(floating, "focusout", markInsideReactTree, true));
  }, [disabled, domReference, floating, floatingFocusElement, modal, tree, portalContext, store, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox, getNodeId, orderRef, dataRef, blurTimeout, pointerDownTimeout, restoreFocusFrame, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  y$1(() => {
    if (disabled || !floating || !open) {
      return void 0;
    }
    const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${createAttribute("portal")}]`) || []);
    const ancestors = tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : [];
    const rootAncestorComboboxDomReference = ancestors.find((node) => isTypeableCombobox(node.context?.elements.domReference || null))?.context?.elements.domReference;
    const controlInsideElements = [floating, ...portalNodes, beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, ...getResolvedInsideElements()];
    const insideElements = [...controlInsideElements, rootAncestorComboboxDomReference, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement), isUntrappedTypeableCombobox ? domReference : null].filter((x2) => x2 != null);
    const ariaHiddenCleanup = markOthers(insideElements, {
      ariaHidden: modal || isUntrappedTypeableCombobox,
      mark: false
    });
    const markerInsideElements = [floating, ...portalNodes].filter((x2) => x2 != null);
    const markerCleanup = markOthers(markerInsideElements);
    return () => {
      markerCleanup();
      ariaHiddenCleanup();
    };
  }, [open, disabled, domReference, floating, modal, orderRef, portalContext, isUntrappedTypeableCombobox, tree, getNodeId, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!open || disabled || !isHTMLElement(floatingFocusElement)) {
      return;
    }
    const doc = ownerDocument(floatingFocusElement);
    const previouslyFocusedElement = activeElement(doc);
    queueMicrotask(() => {
      const initialFocusValueOrFn = initialFocusRef.current;
      const resolvedInitialFocus = typeof initialFocusValueOrFn === "function" ? initialFocusValueOrFn(openInteractionTypeRef.current || "") : initialFocusValueOrFn;
      if (resolvedInitialFocus === void 0 || resolvedInitialFocus === false) {
        return;
      }
      const focusAlreadyInsideFloatingEl = contains(floatingFocusElement, previouslyFocusedElement);
      if (focusAlreadyInsideFloatingEl) {
        return;
      }
      let focusableElements = null;
      const getDefaultFocusElement = () => {
        if (focusableElements == null) {
          focusableElements = getTabbableContent(floatingFocusElement);
        }
        return focusableElements[0] || floatingFocusElement;
      };
      let elToFocus;
      if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
        elToFocus = getDefaultFocusElement();
      } else {
        elToFocus = resolveRef(resolvedInitialFocus);
      }
      elToFocus = elToFocus || getDefaultFocusElement();
      enqueueFocus(elToFocus, {
        preventScroll: elToFocus === floatingFocusElement
      });
    });
  }, [disabled, open, floatingFocusElement, ignoreInitialFocus, getTabbableContent, initialFocusRef, openInteractionTypeRef]);
  useIsoLayoutEffect(() => {
    if (disabled || !floatingFocusElement) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    const previouslyFocusedElement = activeElement(doc);
    addPreviouslyFocusedElement(previouslyFocusedElement);
    function onOpenChangeLocal(details) {
      if (!details.open) {
        closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
      }
      if (details.reason === triggerHover && details.nativeEvent.type === "mouseleave") {
        preventReturnFocusRef.current = true;
      }
      if (details.reason !== outsidePress) {
        return;
      }
      if (details.nested) {
        preventReturnFocusRef.current = false;
      } else if (isVirtualClick(details.nativeEvent) || isVirtualPointerEvent(details.nativeEvent)) {
        preventReturnFocusRef.current = false;
      } else {
        let isPreventScrollSupported = false;
        ownerDocument(floatingFocusElement).createElement("div").focus({
          get preventScroll() {
            isPreventScrollSupported = true;
            return false;
          }
        });
        if (isPreventScrollSupported) {
          preventReturnFocusRef.current = false;
        } else {
          preventReturnFocusRef.current = true;
        }
      }
    }
    events.on("openchange", onOpenChangeLocal);
    function getReturnElement() {
      const returnFocusValueOrFn = returnFocusRef.current;
      let resolvedReturnFocusValue = typeof returnFocusValueOrFn === "function" ? returnFocusValueOrFn(closeTypeRef.current) : returnFocusValueOrFn;
      if (resolvedReturnFocusValue === void 0 || resolvedReturnFocusValue === false) {
        return null;
      }
      if (resolvedReturnFocusValue === null) {
        resolvedReturnFocusValue = true;
      }
      if (typeof resolvedReturnFocusValue === "boolean") {
        const el = domReference || getPreviouslyFocusedElement();
        return el && el.isConnected ? el : null;
      }
      const fallback = domReference || getPreviouslyFocusedElement();
      return resolveRef(resolvedReturnFocusValue) || fallback || null;
    }
    return () => {
      events.off("openchange", onOpenChangeLocal);
      const activeEl = activeElement(doc);
      const insideElements = getResolvedInsideElements();
      const isFocusInsideFloatingTree = contains(floating, activeEl) || insideElements.some((element) => element === activeEl || contains(element, activeEl)) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node) => contains(node.context?.elements.floating, activeEl));
      const returnFocusValueOrFn = returnFocusRef.current;
      const returnElement = getReturnElement();
      queueMicrotask(() => {
        const tabbableReturnElement = getFirstTabbableElement(returnElement);
        const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== "boolean";
        if (returnFocusValueOrFn && !preventReturnFocusRef.current && isHTMLElement(tabbableReturnElement) && // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        (!hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
          tabbableReturnElement.focus({
            preventScroll: true
          });
        }
        preventReturnFocusRef.current = false;
      });
    };
  }, [disabled, floating, floatingFocusElement, returnFocusRef, dataRef, events, tree, domReference, getNodeId, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!isWebKit || open || !floating) {
      return;
    }
    const activeEl = activeElement(ownerDocument(floating));
    if (!isHTMLElement(activeEl) || !isTypeableElement(activeEl)) {
      return;
    }
    if (contains(floating, activeEl)) {
      activeEl.blur();
    }
  }, [open, floating]);
  useIsoLayoutEffect(() => {
    if (disabled || !portalContext) {
      return void 0;
    }
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange: store.setOpen,
      domReference
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled, portalContext, modal, open, store, closeOnFocusOut, domReference]);
  useIsoLayoutEffect(() => {
    if (disabled || !floatingFocusElement) {
      return void 0;
    }
    handleTabIndex(floatingFocusElement, orderRef);
    return () => {
      queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
    };
  }, [disabled, floatingFocusElement, orderRef]);
  const shouldRenderGuards = !disabled && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
  return /* @__PURE__ */ u(S, {
    children: [shouldRenderGuards && /* @__PURE__ */ u(FocusGuard, {
      "data-type": "inside",
      ref: mergedBeforeGuardRef,
      onFocus: (event) => {
        if (modal) {
          const els = getTabbableContent();
          enqueueFocus(els[els.length - 1]);
        } else if (portalContext?.portalNode) {
          preventReturnFocusRef.current = false;
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
          } else {
            resolveRef(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
          }
        }
      }
    }), children, shouldRenderGuards && /* @__PURE__ */ u(FocusGuard, {
      "data-type": "inside",
      ref: mergedAfterGuardRef,
      onFocus: (event) => {
        if (modal) {
          enqueueFocus(getTabbableContent()[0]);
        } else if (portalContext?.portalNode) {
          if (closeOnFocusOut) {
            preventReturnFocusRef.current = true;
          }
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          } else {
            resolveRef(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
          }
        }
      }
    })]
  });
}
const createSelector$1 = (a2, b2, c2, d2, e2, f2, ...other) => {
  if (other.length > 0) {
    throw new Error(formatErrorMessage(1));
  }
  let selector;
  if (a2) {
    selector = a2;
  } else {
    throw (
      /* minify-error-disabled */
      new Error("Missing arguments")
    );
  }
  return selector;
};
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
  if (typeof object !== "object") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array.every((item) => typeof item === "function")) {
    const itemTypes = array.map((item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(dependencies, `createSelector expects all input-selectors to be functions, but received the following types: `);
  return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
  const inputSelectorResults = [];
  const {
    length
  } = dependencies;
  for (let i = 0; i < length; i++) {
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
  }
  return inputSelectorResults;
}
function createSingletonCache(equals) {
  let entry;
  return {
    get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put(key, value) {
      entry = {
        key,
        value
      };
    },
    getEntries() {
      return entry ? [entry] : [];
    },
    clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  let entries = [];
  function get2(key) {
    const cacheIndex = entries.findIndex((entry) => equals(key, entry.key));
    if (cacheIndex > -1) {
      const entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get2(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return {
    get: get2,
    put,
    getEntries,
    clear
  };
}
var referenceEqualityCheck = (a2, b2) => a2 === b2;
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    const {
      length
    } = prev;
    for (let i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function lruMemoize(func, equalityCheckOrOptions) {
  const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  const {
    equalityCheck = referenceEqualityCheck,
    maxSize = 1,
    resultEqualityCheck
  } = providedOptions;
  const comparator = createCacheKeyComparator(equalityCheck);
  let resultsCount = 0;
  const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    let value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const entries = cache.getEntries();
        const matchingEntry = entries.find((entry) => resultEqualityCheck(entry.value, value));
        if (matchingEntry) {
          value = matchingEntry.value;
          resultsCount !== 0 && resultsCount--;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = () => {
    cache.clear();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const {
    resultEqualityCheck
  } = options;
  let lastResult;
  let resultsCount = 0;
  function memoized() {
    let cacheNode = fnNode;
    const {
      length
    } = arguments;
    for (let i = 0, l2 = length; i < l2; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    const terminatedNode = cacheNode;
    let result;
    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v;
    } else {
      result = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const lastResultValue = lastResult?.deref?.() ?? lastResult;
        if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
          result = lastResultValue;
          resultsCount !== 0 && resultsCount--;
        }
        const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
        lastResult = needsWeakRef ? new Ref(result) : result;
      }
    }
    terminatedNode.s = TERMINATED;
    terminatedNode.v = result;
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector2 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(resultFunc, `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`);
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize: memoize2,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = []
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize2(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(null, arguments);
    }, ...finalMemoizeOptions);
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const inputSelectorResults = collectInputSelectorResults(dependencies, arguments);
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize: memoize2,
      argsMemoize
    });
  };
  Object.assign(createSelector2, {
    withTypes: () => createSelector2
  });
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
var createStructuredSelector = Object.assign((inputSelectorsObject, selectorCreator = createSelector) => {
  assertIsObject(inputSelectorsObject, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`);
  const inputSelectorKeys = Object.keys(inputSelectorsObject);
  const dependencies = inputSelectorKeys.map((key) => inputSelectorsObject[key]);
  const structuredSelector = selectorCreator(dependencies, (...inputSelectorResults) => {
    return inputSelectorResults.reduce((composition, value, index2) => {
      composition[inputSelectorKeys[index2]] = value;
      return composition;
    }, {});
  });
  return structuredSelector;
}, {
  withTypes: () => createStructuredSelector
});
createSelectorCreator({
  memoize: lruMemoize,
  memoizeOptions: {
    maxSize: 1,
    equalityCheck: Object.is
  }
});
var exports$2 = {};
Object.defineProperty(exports$2, "__esModule", {
  value: true
});
var React = gn ?? _mod$4, shim = __require$3 ?? _default_default$3 ?? _mod2;
function is$2(x2, y2) {
  return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
}
var objectIs = "function" === typeof Object.is ? Object.is : is$2, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
exports$2.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual2) {
  var instRef = useRef(null);
  if (null === instRef.current) {
    var inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else inst = instRef.current;
  instRef = useMemo(function() {
    function memoizedSelector(nextSnapshot) {
      if (!hasMemo) {
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;
        nextSnapshot = selector(nextSnapshot);
        if (void 0 !== isEqual2 && inst.hasValue) {
          var currentSelection = inst.value;
          if (isEqual2(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
        }
        return memoizedSelection = nextSnapshot;
      }
      currentSelection = memoizedSelection;
      if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
      var nextSelection = selector(nextSnapshot);
      if (void 0 !== isEqual2 && isEqual2(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
      memoizedSnapshot = nextSnapshot;
      return memoizedSelection = nextSelection;
    }
    var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
    return [function() {
      return memoizedSelector(getSnapshot());
    }, null === maybeGetServerSnapshot ? void 0 : function() {
      return memoizedSelector(maybeGetServerSnapshot());
    }];
  }, [getSnapshot, getServerSnapshot, selector, isEqual2]);
  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
  useEffect(function() {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
};
var _useSyncExternalStoreWithSelector = exports$2.useSyncExternalStoreWithSelector;
var _default;
if (typeof exports$2 === "object" && exports$2 !== null && "default" in exports$2) {
  _default = exports$2.default;
} else {
  _default = exports$2;
}
const _default_default = _default;
var __require = exports$2;
const _mod = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __require,
  default: _default_default,
  useSyncExternalStoreWithSelector: _useSyncExternalStoreWithSelector
}, Symbol.toStringTag, { value: "Module" }));
var exports$1 = {}, module$1 = {};
Object.defineProperty(module$1, "exports", {
  get() {
    return exports$1;
  },
  set(value) {
    exports$1 = value;
  }
});
Object.defineProperty(exports$1, "__esModule", {
  value: true
});
module$1.exports = _mod;
if (typeof exports$1 === "object" && exports$1 !== null && "default" in exports$1) {
  exports$1.default;
}
({
  open: createSelector$1((state) => state.open),
  transitionStatus: createSelector$1((state) => state.transitionStatus),
  domReferenceElement: createSelector$1((state) => state.domReferenceElement),
  referenceElement: createSelector$1((state) => state.positionReference ?? state.referenceElement),
  floatingElement: createSelector$1((state) => state.floatingElement),
  floatingId: createSelector$1((state) => state.floatingId)
});
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      bn(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }).catch(() => {
        if (treatAbortedAsFinished) {
          if (!signal?.aborted) {
            done();
          }
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (!signal?.aborted && currentAnimations.length > 0 && currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
        }
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
  y$1(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}
const activeTriggerIdSelector = createSelector$1((state) => state.triggerIdProp ?? state.activeTriggerId);
({
  open: createSelector$1((state) => state.openProp ?? state.open),
  mounted: createSelector$1((state) => state.mounted),
  transitionStatus: createSelector$1((state) => state.transitionStatus),
  floatingRootContext: createSelector$1((state) => state.floatingRootContext),
  preventUnmountingOnClose: createSelector$1((state) => state.preventUnmountingOnClose),
  payload: createSelector$1((state) => state.payload),
  activeTriggerElement: createSelector$1((state) => state.mounted ? state.activeTriggerElement : null),
  /**
   * Whether the trigger with the given ID was used to open the popup.
   */
  isTriggerActive: createSelector$1((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId),
  /**
   * Whether the popup is open and was activated by a trigger with the given ID.
   */
  isOpenedByTrigger: createSelector$1((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId && state.open),
  /**
   * Whether the popup is mounted and was activated by a trigger with the given ID.
   */
  isMountedByTrigger: createSelector$1((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId && state.mounted),
  triggerProps: createSelector$1((state, isActive) => isActive ? state.activeTriggerProps : state.inactiveTriggerProps),
  popupProps: createSelector$1((state) => state.popupProps),
  popupElement: createSelector$1((state) => state.popupElement),
  positionerElement: createSelector$1((state) => state.positionerElement)
});
let DialogPopupCssVars = /* @__PURE__ */ (function(DialogPopupCssVars2) {
  DialogPopupCssVars2["nestedDialogs"] = "--nested-dialogs";
  return DialogPopupCssVars2;
})({});
let DialogPopupDataAttributes = (function(DialogPopupDataAttributes2) {
  DialogPopupDataAttributes2[DialogPopupDataAttributes2["open"] = CommonPopupDataAttributes.open] = "open";
  DialogPopupDataAttributes2[DialogPopupDataAttributes2["closed"] = CommonPopupDataAttributes.closed] = "closed";
  DialogPopupDataAttributes2[DialogPopupDataAttributes2["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
  DialogPopupDataAttributes2[DialogPopupDataAttributes2["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
  DialogPopupDataAttributes2["nested"] = "data-nested";
  DialogPopupDataAttributes2["nestedDialogOpen"] = "data-nested-dialog-open";
  return DialogPopupDataAttributes2;
})({});
const DialogPortalContext = /* @__PURE__ */ X$2(void 0);
function useDialogPortalContext() {
  const value = x$2(DialogPortalContext);
  if (value === void 0) {
    throw new Error(formatErrorMessage(26));
  }
  return value;
}
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const HOME = "Home";
const END = "End";
const HORIZONTAL_KEYS = /* @__PURE__ */ new Set([ARROW_LEFT, ARROW_RIGHT]);
const VERTICAL_KEYS = /* @__PURE__ */ new Set([ARROW_UP, ARROW_DOWN]);
const ARROW_KEYS = /* @__PURE__ */ new Set([...HORIZONTAL_KEYS, ...VERTICAL_KEYS]);
/* @__PURE__ */ new Set([...ARROW_KEYS, HOME, END]);
const COMPOSITE_KEYS = /* @__PURE__ */ new Set([ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, HOME, END]);
const stateAttributesMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping,
  nestedDialogOpen(value) {
    return value ? {
      [DialogPopupDataAttributes.nestedDialogOpen]: ""
    } : null;
  }
};
const DialogPopup = /* @__PURE__ */ D(function DialogPopup2(componentProps, forwardedRef) {
  const {
    className,
    finalFocus,
    initialFocus,
    render,
    style,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const descriptionElementId = store.useState("descriptionElementId");
  const disablePointerDismissal = store.useState("disablePointerDismissal");
  const floatingRootContext = store.useState("floatingRootContext");
  const rootPopupProps = store.useState("popupProps");
  const modal = store.useState("modal");
  const mounted = store.useState("mounted");
  const nested = store.useState("nested");
  const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
  const open = store.useState("open");
  const openMethod = store.useState("openMethod");
  const titleElementId = store.useState("titleElementId");
  const transitionStatus = store.useState("transitionStatus");
  const role = store.useState("role");
  useDialogPortalContext();
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  function defaultInitialFocus(interactionType) {
    if (interactionType === "touch") {
      return store.context.popupRef.current;
    }
    return true;
  }
  const resolvedInitialFocus = initialFocus === void 0 ? defaultInitialFocus : initialFocus;
  const nestedDialogOpen = nestedOpenDialogCount > 0;
  const state = {
    open,
    nested,
    transitionStatus,
    nestedDialogOpen
  };
  const element = useRenderElement("div", componentProps, {
    state,
    props: [rootPopupProps, {
      "aria-labelledby": titleElementId ?? void 0,
      "aria-describedby": descriptionElementId ?? void 0,
      role,
      tabIndex: -1,
      hidden: !mounted,
      onKeyDown(event) {
        if (COMPOSITE_KEYS.has(event.key)) {
          event.stopPropagation();
        }
      },
      style: {
        [DialogPopupCssVars.nestedDialogs]: nestedOpenDialogCount
      }
    }, elementProps],
    ref: [forwardedRef, store.context.popupRef, store.useStateSetter("popupElement")],
    stateAttributesMapping
  });
  return /* @__PURE__ */ u(FloatingFocusManager, {
    context: floatingRootContext,
    openInteractionType: openMethod,
    disabled: !mounted,
    closeOnFocusOut: !disablePointerDismissal,
    initialFocus: resolvedInitialFocus,
    returnFocus: finalFocus,
    modal: modal !== false,
    restoreFocus: "popup",
    children: element
  });
});
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}
const InternalBackdrop = /* @__PURE__ */ D(function InternalBackdrop2(props, ref) {
  const {
    cutout,
    ...otherProps
  } = props;
  let clipPath;
  if (cutout) {
    const rect = cutout.getBoundingClientRect();
    clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
  }
  return /* @__PURE__ */ u("div", {
    ref,
    role: "presentation",
    "data-base-ui-inert": "",
    ...otherProps,
    style: {
      position: "fixed",
      inset: 0,
      userSelect: "none",
      WebkitUserSelect: "none",
      clipPath
    }
  });
});
const DialogPortal$1 = /* @__PURE__ */ D(function DialogPortal(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const {
    store
  } = useDialogRootContext();
  const mounted = store.useState("mounted");
  const modal = store.useState("modal");
  const open = store.useState("open");
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return /* @__PURE__ */ u(DialogPortalContext.Provider, {
    value: keepMounted,
    children: /* @__PURE__ */ u(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps,
      children: [mounted && modal === true && /* @__PURE__ */ u(InternalBackdrop, {
        ref: store.context.internalBackdropRef,
        inert: inertValue(!open)
      }), props.children]
    })
  });
});
({
  modal: createSelector$1((state) => state.modal),
  nested: createSelector$1((state) => state.nested),
  nestedOpenDialogCount: createSelector$1((state) => state.nestedOpenDialogCount),
  nestedOpenDrawerCount: createSelector$1((state) => state.nestedOpenDrawerCount),
  disablePointerDismissal: createSelector$1((state) => state.disablePointerDismissal),
  openMethod: createSelector$1((state) => state.openMethod),
  descriptionElementId: createSelector$1((state) => state.descriptionElementId),
  titleElementId: createSelector$1((state) => state.titleElementId),
  viewportElement: createSelector$1((state) => state.viewportElement),
  role: createSelector$1((state) => state.role)
});
(function(DialogViewportDataAttributes) {
  DialogViewportDataAttributes[DialogViewportDataAttributes["open"] = CommonPopupDataAttributes.open] = "open";
  DialogViewportDataAttributes[DialogViewportDataAttributes["closed"] = CommonPopupDataAttributes.closed] = "closed";
  DialogViewportDataAttributes[DialogViewportDataAttributes["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
  DialogViewportDataAttributes[DialogViewportDataAttributes["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
  DialogViewportDataAttributes["nested"] = "data-nested";
  DialogViewportDataAttributes["nestedDialogOpen"] = "data-nested-dialog-open";
  return DialogViewportDataAttributes;
})({});
const DialogTitle$1 = /* @__PURE__ */ D(function DialogTitle(componentProps, forwardedRef) {
  const {
    render,
    className,
    style,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const id = useBaseUiId(idProp);
  store.useSyncedValueWithCleanup("titleElementId", id);
  return useRenderElement("h2", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
});
const DialogPortal2 = DialogPortal$1;
const DialogContent = /* @__PURE__ */ D(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ u(DialogPortal2, {
  children: [/* @__PURE__ */ u(DialogBackdrop, {
    className: "dialog-backdrop",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      backgroundColor: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(2px)",
      WebkitBackdropFilter: "blur(2px)",
      transition: "opacity 200ms ease"
    }
  }), /* @__PURE__ */ u(DialogPopup, {
    ref,
    className: cn("dialog-popup grid w-full max-w-lg gap-4 border border-border bg-background p-6 shadow-2xl sm:rounded-2xl", className),
    style: {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 50,
      transition: "opacity 200ms ease, transform 200ms ease"
    },
    ...props,
    children: [children, /* @__PURE__ */ u(DialogClose, {
      className: "absolute right-4 top-4 rounded-xl p-1 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring/20 focus:ring-offset-2 disabled:pointer-events-none",
      children: [/* @__PURE__ */ u(X, {
        className: "h-4 w-4"
      }), /* @__PURE__ */ u("span", {
        className: "sr-only",
        children: "Close"
      })]
    })]
  })]
}));
DialogContent.displayName = "DialogContent";
const DialogTitle2 = /* @__PURE__ */ D(({
  className,
  ...props
}, ref) => /* @__PURE__ */ u(DialogTitle$1, {
  ref,
  className: cn("text-lg font-semibold leading-none tracking-tight", className),
  ...props
}));
DialogTitle2.displayName = "DialogTitle";
const DialogDescription2 = /* @__PURE__ */ D(({
  className,
  ...props
}, ref) => /* @__PURE__ */ u(DialogDescription$1, {
  ref,
  className: cn("text-sm text-muted-foreground", className),
  ...props
}));
DialogDescription2.displayName = "DialogDescription";
const Input = /* @__PURE__ */ D(({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ u("input", {
    type,
    className: cn("flex h-9 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50", className),
    ref,
    ...props
  });
});
Input.displayName = "Input";
const Card = /* @__PURE__ */ D(({
  className,
  ...props
}, ref) => /* @__PURE__ */ u("div", {
  ref,
  className: cn("rounded-xl border bg-card text-card-foreground shadow-sm", className),
  ...props
}));
Card.displayName = "Card";
const CardHeader = /* @__PURE__ */ D(({
  className,
  ...props
}, ref) => /* @__PURE__ */ u("div", {
  ref,
  className: cn("flex flex-col space-y-1.5 p-6", className),
  ...props
}));
CardHeader.displayName = "CardHeader";
const CardTitle = /* @__PURE__ */ D(({
  className,
  ...props
}, ref) => /* @__PURE__ */ u("h3", {
  ref,
  className: cn("text-2xl font-semibold leading-none tracking-tight", className),
  ...props
}));
CardTitle.displayName = "CardTitle";
const CardDescription = /* @__PURE__ */ D(({
  className,
  ...props
}, ref) => /* @__PURE__ */ u("p", {
  ref,
  className: cn("text-sm text-muted-foreground", className),
  ...props
}));
CardDescription.displayName = "CardDescription";
const CardContent = /* @__PURE__ */ D(({
  className,
  ...props
}, ref) => /* @__PURE__ */ u("div", {
  ref,
  className: cn("p-6 pt-0", className),
  ...props
}));
CardContent.displayName = "CardContent";
const CardFooter = /* @__PURE__ */ D(({
  className,
  ...props
}, ref) => /* @__PURE__ */ u("div", {
  ref,
  className: cn("flex items-center p-6 pt-0", className),
  ...props
}));
CardFooter.displayName = "CardFooter";
function createField(baseType, extra) {
  return (opts) => {
    const {
      name,
      label,
      ...rest
    } = opts;
    const base = {
      name,
      label,
      type: baseType
    };
    if (extra) {
      Object.assign(base, extra(opts));
    }
    for (const [key, value] of Object.entries(rest)) {
      if (value !== void 0 && !(key in base)) {
        base[key] = value;
      }
    }
    return base;
  };
}
const textField = createField("text");
const textareaField = createField("textarea");
const selectField = createField("select", (opts) => ({
  options: opts.options
}));
const urlField = createField("url");
const CONTAINER_GROUPS = ["spacing", "sizing", "layout", "background", "border", "effects"];
const TEXT_GROUPS = ["spacing", "sizing", "typography", "background", "border", "effects"];
const MEDIA_GROUPS = ["spacing", "sizing", "effects"];
const ACTION_GROUPS = ["spacing", "sizing", "typography", "background", "border", "effects"];
const UTILITY_GROUPS = ["spacing", "sizing"];
function defineContainer(config2) {
  return {
    category: "layout",
    isContainer: true,
    defaultStyles: {},
    defaultData: {},
    fields: [],
    styleGroups: CONTAINER_GROUPS,
    ...config2
  };
}
function defineText(config2) {
  return {
    category: "content",
    isContainer: false,
    defaultStyles: {},
    defaultData: {},
    fields: [],
    styleGroups: TEXT_GROUPS,
    ...config2
  };
}
function defineMedia(config2) {
  return {
    category: "content",
    isContainer: false,
    defaultStyles: {},
    defaultData: {},
    fields: [],
    styleGroups: MEDIA_GROUPS,
    ...config2
  };
}
function defineAction(config2) {
  return {
    category: "content",
    isContainer: false,
    defaultStyles: {},
    defaultData: {},
    fields: [],
    styleGroups: ACTION_GROUPS,
    ...config2
  };
}
function defineUtility(config2) {
  return {
    category: "content",
    isContainer: false,
    defaultStyles: {},
    defaultData: {},
    fields: [],
    styleGroups: UTILITY_GROUPS,
    ...config2
  };
}
function defineElement(config2) {
  return config2;
}
function defineStyleGroup(config2) {
  return config2;
}
function styleField(opts) {
  return {
    type: "select",
    ...opts
  };
}
defineContainer({
  type: "section",
  label: "Section",
  icon: LayoutDashboard,
  defaultStyles: {
    width: "full",
    padding: "20",
    paddingX: "6"
  }
});
defineContainer({
  type: "row",
  label: "Row",
  icon: Rows3,
  defaultStyles: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6"
  }
});
defineContainer({
  type: "column",
  label: "Column",
  icon: Columns3,
  defaultStyles: {
    display: "flex",
    flexDirection: "col",
    gap: "2"
  }
});
defineContainer({
  type: "grid",
  label: "Grid",
  icon: Grid3x3,
  defaultStyles: {
    display: "grid",
    gap: "6",
    gridTemplateColumns: "2"
  },
  fields: [selectField({
    name: "columns",
    label: "Columns",
    options: ["1", "2", "3", "4"]
  })]
});
defineText({
  type: "heading",
  label: "Heading",
  icon: Heading,
  defaultStyles: {
    fontSize: "5xl",
    fontWeight: "bold",
    lineHeight: "tight",
    color: "#0a0a0a"
  },
  defaultData: {
    content: "Heading",
    tagName: "h2"
  },
  fields: [selectField({
    name: "tagName",
    label: "Tag",
    options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"]
  }), textareaField({
    name: "content",
    label: "Text",
    rows: 3
  })]
});
defineText({
  type: "text",
  label: "Text",
  icon: Type,
  defaultStyles: {
    fontSize: "base",
    lineHeight: "relaxed",
    color: "#374151"
  },
  defaultData: {
    content: "Write your text here."
  },
  fields: [textareaField({
    name: "content",
    label: "Text",
    rows: 3
  })]
});
defineMedia({
  type: "image",
  label: "Image",
  icon: Image$1,
  defaultStyles: {
    maxWidth: "full",
    objectFit: "cover"
  },
  defaultData: {
    src: "https://placehold.co/800x400/e5e5e5/999?text=Image",
    alt: "Image"
  },
  fields: [urlField({
    name: "src",
    label: "Image URL"
  }), textField({
    name: "alt",
    label: "Alt text"
  })]
});
defineAction({
  type: "button",
  label: "Button",
  icon: Square,
  defaultStyles: {
    padding: "3",
    paddingX: "8",
    fontSize: "base",
    fontWeight: "semibold",
    backgroundColor: "#0a0a0a",
    color: "#ffffff",
    borderRadius: "lg"
  },
  defaultData: {
    content: "Click me",
    href: "#"
  },
  fields: [textField({
    name: "content",
    label: "Text"
  }), urlField({
    name: "href",
    label: "Link URL"
  })]
});
defineAction({
  type: "link",
  label: "Link",
  icon: Link,
  defaultStyles: {
    fontSize: "base",
    color: "#2563eb"
  },
  defaultData: {
    content: "Link text",
    href: "#"
  },
  fields: [textField({
    name: "content",
    label: "Text"
  }), urlField({
    name: "href",
    label: "Link URL"
  })]
});
defineUtility({
  type: "divider",
  label: "Divider",
  icon: Minus,
  defaultStyles: {
    marginY: "6"
  }
});
defineUtility({
  type: "spacer",
  label: "Spacer",
  icon: MoveVertical,
  defaultStyles: {
    height: "10"
  }
});
defineMedia({
  type: "video",
  label: "Video",
  icon: Play,
  defaultStyles: {
    maxWidth: "full"
  },
  defaultData: {
    src: ""
  },
  fields: [urlField({
    name: "src",
    label: "Video URL"
  })]
});
defineElement({
  type: "html",
  label: "HTML",
  icon: Code,
  category: "advanced",
  isContainer: false,
  defaultStyles: {},
  defaultData: {
    content: "<p>Custom HTML</p>"
  },
  fields: [textareaField({
    name: "content",
    label: "HTML",
    rows: 5
  })]
});
const SPACING = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "32", "40", "48", "56", "64", "auto"];
const WIDTH = ["0", "auto", "full", "screen", "1/2", "1/3", "2/3", "1/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "32", "40", "48", "56", "64", "72", "80", "96"];
const HEIGHT = ["0", "auto", "full", "screen", "1/2", "1/3", "2/3", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "32", "40", "48", "56", "64", "72", "80", "96"];
const MAX_WIDTH = ["0", "none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "full", "prose", "screen"];
const MIN_HEIGHT = ["0", "auto", "full", "screen", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "32", "40", "48", "56", "64", "72", "80", "96"];
const FONT_SIZE = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];
const FONT_WEIGHT = ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"];
const FONT_FAMILY = ["sans", "serif", "mono"];
const LINE_HEIGHT = ["none", "tight", "snug", "normal", "relaxed", "loose"];
const LETTER_SPACING = ["tighter", "tight", "normal", "wide", "wider", "widest"];
const TEXT_ALIGN = ["left", "center", "right", "justify"];
const DISPLAY = ["block", "inline-block", "inline", "flex", "inline-flex", "grid", "inline-grid", "hidden"];
const FLEX_DIRECTION = ["row", "row-reverse", "col", "col-reverse"];
const JUSTIFY_CONTENT = ["start", "end", "center", "between", "around", "evenly"];
const ALIGN_ITEMS = ["start", "end", "center", "stretch", "baseline"];
const FLEX_WRAP = ["wrap", "nowrap", "reverse"];
const BORDER_RADIUS = ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
const BORDER_WIDTH = ["0", "1", "2", "4", "8"];
const BORDER_STYLE = ["solid", "dashed", "dotted", "double", "none"];
const OPACITY = ["0", "5", "10", "20", "25", "30", "40", "50", "60", "70", "75", "80", "90", "95", "100"];
const OVERFLOW = ["auto", "hidden", "visible", "scroll"];
const BACKGROUND_SIZE = ["auto", "cover", "contain"];
const BACKGROUND_POSITION = ["center", "top", "bottom", "left", "right", "left-top", "left-bottom", "right-top", "right-bottom"];
const GAP = SPACING;
const GRID_COLUMNS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
defineStyleGroup({
  label: "Spacing",
  fields: [styleField({
    name: "padding",
    label: "Padding",
    options: SPACING
  }), styleField({
    name: "paddingX",
    label: "Padding X",
    options: SPACING
  }), styleField({
    name: "paddingY",
    label: "Padding Y",
    options: SPACING
  }), styleField({
    name: "margin",
    label: "Margin",
    options: SPACING
  }), styleField({
    name: "marginX",
    label: "Margin X",
    options: SPACING
  }), styleField({
    name: "marginY",
    label: "Margin Y",
    options: SPACING
  })]
});
defineStyleGroup({
  label: "Size",
  fields: [styleField({
    name: "width",
    label: "Width",
    options: WIDTH
  }), styleField({
    name: "height",
    label: "Height",
    options: HEIGHT
  }), styleField({
    name: "minHeight",
    label: "Min Height",
    options: MIN_HEIGHT
  }), styleField({
    name: "maxWidth",
    label: "Max Width",
    options: MAX_WIDTH
  })]
});
defineStyleGroup({
  label: "Typography",
  fields: [styleField({
    name: "fontSize",
    label: "Font Size",
    options: FONT_SIZE
  }), styleField({
    name: "fontWeight",
    label: "Font Weight",
    options: FONT_WEIGHT
  }), styleField({
    name: "fontFamily",
    label: "Font Family",
    options: FONT_FAMILY
  }), styleField({
    name: "lineHeight",
    label: "Line Height",
    options: LINE_HEIGHT
  }), styleField({
    name: "letterSpacing",
    label: "Letter Spacing",
    options: LETTER_SPACING
  }), styleField({
    name: "textAlign",
    label: "Text Align",
    options: TEXT_ALIGN
  }), styleField({
    name: "color",
    label: "Color",
    type: "color"
  })]
});
defineStyleGroup({
  label: "Background",
  fields: [styleField({
    name: "backgroundColor",
    label: "Background Color",
    type: "color"
  }), styleField({
    name: "backgroundImage",
    label: "Background Image",
    type: "text",
    placeholder: "url(...)"
  }), styleField({
    name: "backgroundSize",
    label: "Background Size",
    options: BACKGROUND_SIZE
  }), styleField({
    name: "backgroundPosition",
    label: "Background Position",
    options: BACKGROUND_POSITION
  })]
});
defineStyleGroup({
  label: "Layout",
  fields: [styleField({
    name: "display",
    label: "Display",
    options: DISPLAY
  }), styleField({
    name: "flexDirection",
    label: "Flex Direction",
    options: FLEX_DIRECTION
  }), styleField({
    name: "flexWrap",
    label: "Flex Wrap",
    options: FLEX_WRAP
  }), styleField({
    name: "justifyContent",
    label: "Justify Content",
    options: JUSTIFY_CONTENT
  }), styleField({
    name: "alignItems",
    label: "Align Items",
    options: ALIGN_ITEMS
  }), styleField({
    name: "gap",
    label: "Gap",
    options: GAP
  }), styleField({
    name: "gridTemplateColumns",
    label: "Grid Columns",
    options: GRID_COLUMNS
  })]
});
defineStyleGroup({
  label: "Border",
  fields: [styleField({
    name: "borderRadius",
    label: "Border Radius",
    options: BORDER_RADIUS
  }), styleField({
    name: "borderWidth",
    label: "Border Width",
    options: BORDER_WIDTH
  }), styleField({
    name: "borderColor",
    label: "Border Color",
    type: "color"
  }), styleField({
    name: "borderStyle",
    label: "Border Style",
    options: BORDER_STYLE
  })]
});
defineStyleGroup({
  label: "Effects",
  fields: [styleField({
    name: "opacity",
    label: "Opacity",
    options: OPACITY
  }), styleField({
    name: "overflow",
    label: "Overflow",
    options: OVERFLOW
  })]
});
const entityKind$1 = /* @__PURE__ */ Symbol.for("drizzle:entityKind");
function is$1(value, type) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (value instanceof type) {
    return true;
  }
  if (!Object.prototype.hasOwnProperty.call(type, entityKind$1)) {
    throw new Error(`Class "${type.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
  }
  let cls = Object.getPrototypeOf(value).constructor;
  if (cls) {
    while (cls) {
      if (entityKind$1 in cls && cls[entityKind$1] === type[entityKind$1]) {
        return true;
      }
      cls = Object.getPrototypeOf(cls);
    }
  }
  return false;
}
let Column$1 = class Column {
  constructor(table, config2) {
    this.table = table;
    this.config = config2;
    this.name = config2.name;
    this.keyAsName = config2.keyAsName;
    this.notNull = config2.notNull;
    this.default = config2.default;
    this.defaultFn = config2.defaultFn;
    this.onUpdateFn = config2.onUpdateFn;
    this.hasDefault = config2.hasDefault;
    this.primary = config2.primaryKey;
    this.isUnique = config2.isUnique;
    this.uniqueName = config2.uniqueName;
    this.uniqueType = config2.uniqueType;
    this.dataType = config2.dataType;
    this.columnType = config2.columnType;
    this.generated = config2.generated;
    this.generatedIdentity = config2.generatedIdentity;
  }
  static [entityKind$1] = "Column";
  name;
  keyAsName;
  primary;
  notNull;
  default;
  defaultFn;
  onUpdateFn;
  hasDefault;
  isUnique;
  uniqueName;
  uniqueType;
  dataType;
  columnType;
  enumValues = void 0;
  generated = void 0;
  generatedIdentity = void 0;
  config;
  mapFromDriverValue(value) {
    return value;
  }
  mapToDriverValue(value) {
    return value;
  }
  // ** @internal */
  shouldDisableInsert() {
    return this.config.generated !== void 0 && this.config.generated.type !== "byDefault";
  }
};
class ColumnBuilder {
  static [entityKind$1] = "ColumnBuilder";
  config;
  constructor(name, dataType, columnType) {
    this.config = {
      name,
      keyAsName: name === "",
      notNull: false,
      default: void 0,
      hasDefault: false,
      primaryKey: false,
      isUnique: false,
      uniqueName: void 0,
      uniqueType: void 0,
      dataType,
      columnType,
      generated: void 0
    };
  }
  /**
   * Changes the data type of the column. Commonly used with `json` columns. Also, useful for branded types.
   *
   * @example
   * ```ts
   * const users = pgTable('users', {
   * 	id: integer('id').$type<UserId>().primaryKey(),
   * 	details: json('details').$type<UserDetails>().notNull(),
   * });
   * ```
   */
  $type() {
    return this;
  }
  /**
   * Adds a `not null` clause to the column definition.
   *
   * Affects the `select` model of the table - columns *without* `not null` will be nullable on select.
   */
  notNull() {
    this.config.notNull = true;
    return this;
  }
  /**
   * Adds a `default <value>` clause to the column definition.
   *
   * Affects the `insert` model of the table - columns *with* `default` are optional on insert.
   *
   * If you need to set a dynamic default value, use {@link $defaultFn} instead.
   */
  default(value) {
    this.config.default = value;
    this.config.hasDefault = true;
    return this;
  }
  /**
   * Adds a dynamic default value to the column.
   * The function will be called when the row is inserted, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $defaultFn(fn2) {
    this.config.defaultFn = fn2;
    this.config.hasDefault = true;
    return this;
  }
  /**
   * Alias for {@link $defaultFn}.
   */
  $default = this.$defaultFn;
  /**
   * Adds a dynamic update value to the column.
   * The function will be called when the row is updated, and the returned value will be used as the column value if none is provided.
   * If no `default` (or `$defaultFn`) value is provided, the function will be called when the row is inserted as well, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $onUpdateFn(fn2) {
    this.config.onUpdateFn = fn2;
    this.config.hasDefault = true;
    return this;
  }
  /**
   * Alias for {@link $onUpdateFn}.
   */
  $onUpdate = this.$onUpdateFn;
  /**
   * Adds a `primary key` clause to the column definition. This implicitly makes the column `not null`.
   *
   * In SQLite, `integer primary key` implicitly makes the column auto-incrementing.
   */
  primaryKey() {
    this.config.primaryKey = true;
    this.config.notNull = true;
    return this;
  }
  /** @internal Sets the name of the column to the key within the table definition if a name was not given. */
  setName(name) {
    if (this.config.name !== "") return;
    this.config.name = name;
  }
}
const TableName$1 = /* @__PURE__ */ Symbol.for("drizzle:Name");
class ForeignKeyBuilder {
  static [entityKind$1] = "PgForeignKeyBuilder";
  /** @internal */
  reference;
  /** @internal */
  _onUpdate = "no action";
  /** @internal */
  _onDelete = "no action";
  constructor(config2, actions2) {
    this.reference = () => {
      const {
        name,
        columns,
        foreignColumns
      } = config2();
      return {
        name,
        columns,
        foreignTable: foreignColumns[0].table,
        foreignColumns
      };
    };
    if (actions2) {
      this._onUpdate = actions2.onUpdate;
      this._onDelete = actions2.onDelete;
    }
  }
  onUpdate(action) {
    this._onUpdate = action === void 0 ? "no action" : action;
    return this;
  }
  onDelete(action) {
    this._onDelete = action === void 0 ? "no action" : action;
    return this;
  }
  /** @internal */
  build(table) {
    return new ForeignKey(table, this);
  }
}
class ForeignKey {
  constructor(table, builder) {
    this.table = table;
    this.reference = builder.reference;
    this.onUpdate = builder._onUpdate;
    this.onDelete = builder._onDelete;
  }
  static [entityKind$1] = "PgForeignKey";
  reference;
  onUpdate;
  onDelete;
  getName() {
    const {
      name,
      columns,
      foreignColumns
    } = this.reference();
    const columnNames = columns.map((column) => column.name);
    const foreignColumnNames = foreignColumns.map((column) => column.name);
    const chunks = [this.table[TableName$1], ...columnNames, foreignColumns[0].table[TableName$1], ...foreignColumnNames];
    return name ?? `${chunks.join("_")}_fk`;
  }
}
function iife(fn2, ...args) {
  return fn2(...args);
}
function uniqueKeyName(table, columns) {
  return `${table[TableName$1]}_${columns.join("_")}_unique`;
}
function parsePgArrayValue(arrayString, startFrom, inQuotes) {
  for (let i = startFrom; i < arrayString.length; i++) {
    const char2 = arrayString[i];
    if (char2 === "\\") {
      i++;
      continue;
    }
    if (char2 === '"') {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i + 1];
    }
    if (inQuotes) {
      continue;
    }
    if (char2 === "," || char2 === "}") {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i];
    }
  }
  return [arrayString.slice(startFrom).replace(/\\/g, ""), arrayString.length];
}
function parsePgNestedArray(arrayString, startFrom = 0) {
  const result = [];
  let i = startFrom;
  let lastCharIsComma = false;
  while (i < arrayString.length) {
    const char2 = arrayString[i];
    if (char2 === ",") {
      if (lastCharIsComma || i === startFrom) {
        result.push("");
      }
      lastCharIsComma = true;
      i++;
      continue;
    }
    lastCharIsComma = false;
    if (char2 === "\\") {
      i += 2;
      continue;
    }
    if (char2 === '"') {
      const [value2, startFrom2] = parsePgArrayValue(arrayString, i + 1, true);
      result.push(value2);
      i = startFrom2;
      continue;
    }
    if (char2 === "}") {
      return [result, i + 1];
    }
    if (char2 === "{") {
      const [value2, startFrom2] = parsePgNestedArray(arrayString, i + 1);
      result.push(value2);
      i = startFrom2;
      continue;
    }
    const [value, newStartFrom] = parsePgArrayValue(arrayString, i, false);
    result.push(value);
    i = newStartFrom;
  }
  return [result, i];
}
function parsePgArray(arrayString) {
  const [result] = parsePgNestedArray(arrayString, 1);
  return result;
}
function makePgArray(array) {
  return `{${array.map((item) => {
    if (Array.isArray(item)) {
      return makePgArray(item);
    }
    if (typeof item === "string") {
      return `"${item.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
    }
    return `${item}`;
  }).join(",")}}`;
}
class PgColumnBuilder extends ColumnBuilder {
  foreignKeyConfigs = [];
  static [entityKind$1] = "PgColumnBuilder";
  array(size2) {
    return new PgArrayBuilder(this.config.name, this, size2);
  }
  references(ref, actions2 = {}) {
    this.foreignKeyConfigs.push({
      ref,
      actions: actions2
    });
    return this;
  }
  unique(name, config2) {
    this.config.isUnique = true;
    this.config.uniqueName = name;
    this.config.uniqueType = config2?.nulls;
    return this;
  }
  generatedAlwaysAs(as) {
    this.config.generated = {
      as,
      type: "always",
      mode: "stored"
    };
    return this;
  }
  /** @internal */
  buildForeignKeys(column, table) {
    return this.foreignKeyConfigs.map(({
      ref,
      actions: actions2
    }) => {
      return iife((ref2, actions22) => {
        const builder = new ForeignKeyBuilder(() => {
          const foreignColumn = ref2();
          return {
            columns: [column],
            foreignColumns: [foreignColumn]
          };
        });
        if (actions22.onUpdate) {
          builder.onUpdate(actions22.onUpdate);
        }
        if (actions22.onDelete) {
          builder.onDelete(actions22.onDelete);
        }
        return builder.build(table);
      }, ref, actions2);
    });
  }
  /** @internal */
  buildExtraConfigColumn(table) {
    return new ExtraConfigColumn(table, this.config);
  }
}
class PgColumn extends Column$1 {
  constructor(table, config2) {
    if (!config2.uniqueName) {
      config2.uniqueName = uniqueKeyName(table, [config2.name]);
    }
    super(table, config2);
    this.table = table;
  }
  static [entityKind$1] = "PgColumn";
}
class ExtraConfigColumn extends PgColumn {
  static [entityKind$1] = "ExtraConfigColumn";
  getSQLType() {
    return this.getSQLType();
  }
  indexConfig = {
    order: this.config.order ?? "asc",
    nulls: this.config.nulls ?? "last",
    opClass: this.config.opClass
  };
  defaultConfig = {
    order: "asc",
    nulls: "last",
    opClass: void 0
  };
  asc() {
    this.indexConfig.order = "asc";
    return this;
  }
  desc() {
    this.indexConfig.order = "desc";
    return this;
  }
  nullsFirst() {
    this.indexConfig.nulls = "first";
    return this;
  }
  nullsLast() {
    this.indexConfig.nulls = "last";
    return this;
  }
  /**
   * ### PostgreSQL documentation quote
   *
   * > An operator class with optional parameters can be specified for each column of an index.
   * The operator class identifies the operators to be used by the index for that column.
   * For example, a B-tree index on four-byte integers would use the int4_ops class;
   * this operator class includes comparison functions for four-byte integers.
   * In practice the default operator class for the column's data type is usually sufficient.
   * The main point of having operator classes is that for some data types, there could be more than one meaningful ordering.
   * For example, we might want to sort a complex-number data type either by absolute value or by real part.
   * We could do this by defining two operator classes for the data type and then selecting the proper class when creating an index.
   * More information about operator classes check:
   *
   * ### Useful links
   * https://www.postgresql.org/docs/current/sql-createindex.html
   *
   * https://www.postgresql.org/docs/current/indexes-opclass.html
   *
   * https://www.postgresql.org/docs/current/xindex.html
   *
   * ### Additional types
   * If you have the `pg_vector` extension installed in your database, you can use the
   * `vector_l2_ops`, `vector_ip_ops`, `vector_cosine_ops`, `vector_l1_ops`, `bit_hamming_ops`, `bit_jaccard_ops`, `halfvec_l2_ops`, `sparsevec_l2_ops` options, which are predefined types.
   *
   * **You can always specify any string you want in the operator class, in case Drizzle doesn't have it natively in its types**
   *
   * @param opClass
   * @returns
   */
  op(opClass) {
    this.indexConfig.opClass = opClass;
    return this;
  }
}
class IndexedColumn {
  static [entityKind$1] = "IndexedColumn";
  constructor(name, keyAsName, type, indexConfig) {
    this.name = name;
    this.keyAsName = keyAsName;
    this.type = type;
    this.indexConfig = indexConfig;
  }
  name;
  keyAsName;
  type;
  indexConfig;
}
class PgArrayBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgArrayBuilder";
  constructor(name, baseBuilder, size2) {
    super(name, "array", "PgArray");
    this.config.baseBuilder = baseBuilder;
    this.config.size = size2;
  }
  /** @internal */
  build(table) {
    const baseColumn = this.config.baseBuilder.build(table);
    return new PgArray(table, this.config, baseColumn);
  }
}
class PgArray extends PgColumn {
  constructor(table, config2, baseColumn, range) {
    super(table, config2);
    this.baseColumn = baseColumn;
    this.range = range;
    this.size = config2.size;
  }
  size;
  static [entityKind$1] = "PgArray";
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size === "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      value = parsePgArray(value);
    }
    return value.map((v2) => this.baseColumn.mapFromDriverValue(v2));
  }
  mapToDriverValue(value, isNestedArray = false) {
    const a2 = value.map((v2) => v2 === null ? null : is$1(this.baseColumn, PgArray) ? this.baseColumn.mapToDriverValue(v2, true) : this.baseColumn.mapToDriverValue(v2));
    if (isNestedArray) return a2;
    return makePgArray(a2);
  }
}
const isPgEnumSym$1 = /* @__PURE__ */ Symbol.for("drizzle:isPgEnum");
function isPgEnum$1(obj) {
  return !!obj && typeof obj === "function" && isPgEnumSym$1 in obj && obj[isPgEnumSym$1] === true;
}
let Subquery$1 = class Subquery {
  static [entityKind$1] = "Subquery";
  constructor(sql2, selection, alias, isWith = false) {
    this._ = {
      brand: "Subquery",
      sql: sql2,
      selectedFields: selection,
      alias,
      isWith
    };
  }
  // getSQL(): SQL<unknown> {
  // 	return new SQL([this]);
  // }
};
class WithSubquery extends Subquery$1 {
  static [entityKind$1] = "WithSubquery";
}
const tracer$1 = {
  startActiveSpan(name, fn2) {
    {
      return fn2();
    }
  }
};
const ViewBaseConfig$1 = /* @__PURE__ */ Symbol.for("drizzle:ViewBaseConfig");
const Schema$1 = /* @__PURE__ */ Symbol.for("drizzle:Schema");
const Columns$1 = /* @__PURE__ */ Symbol.for("drizzle:Columns");
const ExtraConfigColumns$1 = /* @__PURE__ */ Symbol.for("drizzle:ExtraConfigColumns");
const OriginalName$1 = /* @__PURE__ */ Symbol.for("drizzle:OriginalName");
const BaseName$1 = /* @__PURE__ */ Symbol.for("drizzle:BaseName");
const IsAlias$1 = /* @__PURE__ */ Symbol.for("drizzle:IsAlias");
const ExtraConfigBuilder$1 = /* @__PURE__ */ Symbol.for("drizzle:ExtraConfigBuilder");
const IsDrizzleTable$1 = /* @__PURE__ */ Symbol.for("drizzle:IsDrizzleTable");
let Table$1 = class Table {
  static [entityKind$1] = "Table";
  /** @internal */
  static Symbol = {
    Name: TableName$1,
    Schema: Schema$1,
    OriginalName: OriginalName$1,
    Columns: Columns$1,
    ExtraConfigColumns: ExtraConfigColumns$1,
    BaseName: BaseName$1,
    IsAlias: IsAlias$1,
    ExtraConfigBuilder: ExtraConfigBuilder$1
  };
  /**
   * @internal
   * Can be changed if the table is aliased.
   */
  [TableName$1];
  /**
   * @internal
   * Used to store the original name of the table, before any aliasing.
   */
  [OriginalName$1];
  /** @internal */
  [Schema$1];
  /** @internal */
  [Columns$1];
  /** @internal */
  [ExtraConfigColumns$1];
  /**
   *  @internal
   * Used to store the table name before the transformation via the `tableCreator` functions.
   */
  [BaseName$1];
  /** @internal */
  [IsAlias$1] = false;
  /** @internal */
  [IsDrizzleTable$1] = true;
  /** @internal */
  [ExtraConfigBuilder$1] = void 0;
  constructor(name, schema2, baseName) {
    this[TableName$1] = this[OriginalName$1] = name;
    this[Schema$1] = schema2;
    this[BaseName$1] = baseName;
  }
};
function getTableName(table) {
  return table[TableName$1];
}
function getTableUniqueName(table) {
  return `${table[Schema$1] ?? "public"}.${table[TableName$1]}`;
}
function isSQLWrapper$1(value) {
  return value !== null && value !== void 0 && typeof value.getSQL === "function";
}
function mergeQueries$1(queries) {
  const result = {
    sql: "",
    params: []
  };
  for (const query of queries) {
    result.sql += query.sql;
    result.params.push(...query.params);
    if (query.typings?.length) {
      if (!result.typings) {
        result.typings = [];
      }
      result.typings.push(...query.typings);
    }
  }
  return result;
}
let StringChunk$1 = class StringChunk {
  static [entityKind$1] = "StringChunk";
  value;
  constructor(value) {
    this.value = Array.isArray(value) ? value : [value];
  }
  getSQL() {
    return new SQL$1([this]);
  }
};
let SQL$1 = class SQL {
  constructor(queryChunks) {
    this.queryChunks = queryChunks;
  }
  static [entityKind$1] = "SQL";
  /** @internal */
  decoder = noopDecoder$1;
  shouldInlineParams = false;
  append(query) {
    this.queryChunks.push(...query.queryChunks);
    return this;
  }
  toQuery(config2) {
    return tracer$1.startActiveSpan("drizzle.buildSQL", (span) => {
      const query = this.buildQueryFromSourceParams(this.queryChunks, config2);
      span?.setAttributes({
        "drizzle.query.text": query.sql,
        "drizzle.query.params": JSON.stringify(query.params)
      });
      return query;
    });
  }
  buildQueryFromSourceParams(chunks, _config) {
    const config2 = Object.assign({}, _config, {
      inlineParams: _config.inlineParams || this.shouldInlineParams,
      paramStartIndex: _config.paramStartIndex || {
        value: 0
      }
    });
    const {
      casing,
      escapeName,
      escapeParam,
      prepareTyping,
      inlineParams,
      paramStartIndex
    } = config2;
    return mergeQueries$1(chunks.map((chunk) => {
      if (is$1(chunk, StringChunk$1)) {
        return {
          sql: chunk.value.join(""),
          params: []
        };
      }
      if (is$1(chunk, Name$1)) {
        return {
          sql: escapeName(chunk.value),
          params: []
        };
      }
      if (chunk === void 0) {
        return {
          sql: "",
          params: []
        };
      }
      if (Array.isArray(chunk)) {
        const result = [new StringChunk$1("(")];
        for (const [i, p2] of chunk.entries()) {
          result.push(p2);
          if (i < chunk.length - 1) {
            result.push(new StringChunk$1(", "));
          }
        }
        result.push(new StringChunk$1(")"));
        return this.buildQueryFromSourceParams(result, config2);
      }
      if (is$1(chunk, SQL)) {
        return this.buildQueryFromSourceParams(chunk.queryChunks, {
          ...config2,
          inlineParams: inlineParams || chunk.shouldInlineParams
        });
      }
      if (is$1(chunk, Table$1)) {
        const schemaName = chunk[Table$1.Symbol.Schema];
        const tableName = chunk[Table$1.Symbol.Name];
        return {
          sql: schemaName === void 0 || chunk[IsAlias$1] ? escapeName(tableName) : escapeName(schemaName) + "." + escapeName(tableName),
          params: []
        };
      }
      if (is$1(chunk, Column$1)) {
        const columnName = casing.getColumnCasing(chunk);
        if (_config.invokeSource === "indexes") {
          return {
            sql: escapeName(columnName),
            params: []
          };
        }
        const schemaName = chunk.table[Table$1.Symbol.Schema];
        return {
          sql: chunk.table[IsAlias$1] || schemaName === void 0 ? escapeName(chunk.table[Table$1.Symbol.Name]) + "." + escapeName(columnName) : escapeName(schemaName) + "." + escapeName(chunk.table[Table$1.Symbol.Name]) + "." + escapeName(columnName),
          params: []
        };
      }
      if (is$1(chunk, View$1)) {
        const schemaName = chunk[ViewBaseConfig$1].schema;
        const viewName = chunk[ViewBaseConfig$1].name;
        return {
          sql: schemaName === void 0 || chunk[ViewBaseConfig$1].isAlias ? escapeName(viewName) : escapeName(schemaName) + "." + escapeName(viewName),
          params: []
        };
      }
      if (is$1(chunk, Param$1)) {
        if (is$1(chunk.value, Placeholder$1)) {
          return {
            sql: escapeParam(paramStartIndex.value++, chunk),
            params: [chunk],
            typings: ["none"]
          };
        }
        const mappedValue = chunk.value === null ? null : chunk.encoder.mapToDriverValue(chunk.value);
        if (is$1(mappedValue, SQL)) {
          return this.buildQueryFromSourceParams([mappedValue], config2);
        }
        if (inlineParams) {
          return {
            sql: this.mapInlineParam(mappedValue, config2),
            params: []
          };
        }
        let typings = ["none"];
        if (prepareTyping) {
          typings = [prepareTyping(chunk.encoder)];
        }
        return {
          sql: escapeParam(paramStartIndex.value++, mappedValue),
          params: [mappedValue],
          typings
        };
      }
      if (is$1(chunk, Placeholder$1)) {
        return {
          sql: escapeParam(paramStartIndex.value++, chunk),
          params: [chunk],
          typings: ["none"]
        };
      }
      if (is$1(chunk, SQL.Aliased) && chunk.fieldAlias !== void 0) {
        return {
          sql: escapeName(chunk.fieldAlias),
          params: []
        };
      }
      if (is$1(chunk, Subquery$1)) {
        if (chunk._.isWith) {
          return {
            sql: escapeName(chunk._.alias),
            params: []
          };
        }
        return this.buildQueryFromSourceParams([new StringChunk$1("("), chunk._.sql, new StringChunk$1(") "), new Name$1(chunk._.alias)], config2);
      }
      if (isPgEnum$1(chunk)) {
        if (chunk.schema) {
          return {
            sql: escapeName(chunk.schema) + "." + escapeName(chunk.enumName),
            params: []
          };
        }
        return {
          sql: escapeName(chunk.enumName),
          params: []
        };
      }
      if (isSQLWrapper$1(chunk)) {
        if (chunk.shouldOmitSQLParens?.()) {
          return this.buildQueryFromSourceParams([chunk.getSQL()], config2);
        }
        return this.buildQueryFromSourceParams([new StringChunk$1("("), chunk.getSQL(), new StringChunk$1(")")], config2);
      }
      if (inlineParams) {
        return {
          sql: this.mapInlineParam(chunk, config2),
          params: []
        };
      }
      return {
        sql: escapeParam(paramStartIndex.value++, chunk),
        params: [chunk],
        typings: ["none"]
      };
    }));
  }
  mapInlineParam(chunk, {
    escapeString
  }) {
    if (chunk === null) {
      return "null";
    }
    if (typeof chunk === "number" || typeof chunk === "boolean") {
      return chunk.toString();
    }
    if (typeof chunk === "string") {
      return escapeString(chunk);
    }
    if (typeof chunk === "object") {
      const mappedValueAsString = chunk.toString();
      if (mappedValueAsString === "[object Object]") {
        return escapeString(JSON.stringify(chunk));
      }
      return escapeString(mappedValueAsString);
    }
    throw new Error("Unexpected param value: " + chunk);
  }
  getSQL() {
    return this;
  }
  as(alias) {
    if (alias === void 0) {
      return this;
    }
    return new SQL.Aliased(this, alias);
  }
  mapWith(decoder) {
    this.decoder = typeof decoder === "function" ? {
      mapFromDriverValue: decoder
    } : decoder;
    return this;
  }
  inlineParams() {
    this.shouldInlineParams = true;
    return this;
  }
  /**
   * This method is used to conditionally include a part of the query.
   *
   * @param condition - Condition to check
   * @returns itself if the condition is `true`, otherwise `undefined`
   */
  if(condition) {
    return condition ? this : void 0;
  }
};
let Name$1 = class Name {
  constructor(value) {
    this.value = value;
  }
  static [entityKind$1] = "Name";
  brand;
  getSQL() {
    return new SQL$1([this]);
  }
};
function isDriverValueEncoder$1(value) {
  return typeof value === "object" && value !== null && "mapToDriverValue" in value && typeof value.mapToDriverValue === "function";
}
const noopDecoder$1 = {
  mapFromDriverValue: (value) => value
};
const noopEncoder$1 = {
  mapToDriverValue: (value) => value
};
({
  ...noopDecoder$1,
  ...noopEncoder$1
});
let Param$1 = class Param {
  /**
   * @param value - Parameter value
   * @param encoder - Encoder to convert the value to a driver parameter
   */
  constructor(value, encoder = noopEncoder$1) {
    this.value = value;
    this.encoder = encoder;
  }
  static [entityKind$1] = "Param";
  brand;
  getSQL() {
    return new SQL$1([this]);
  }
};
function sql$1(strings, ...params) {
  const queryChunks = [];
  if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
    queryChunks.push(new StringChunk$1(strings[0]));
  }
  for (const [paramIndex, param2] of params.entries()) {
    queryChunks.push(param2, new StringChunk$1(strings[paramIndex + 1]));
  }
  return new SQL$1(queryChunks);
}
((sql2) => {
  function empty() {
    return new SQL$1([]);
  }
  sql2.empty = empty;
  function fromList(list) {
    return new SQL$1(list);
  }
  sql2.fromList = fromList;
  function raw(str) {
    return new SQL$1([new StringChunk$1(str)]);
  }
  sql2.raw = raw;
  function join(chunks, separator) {
    const result = [];
    for (const [i, chunk] of chunks.entries()) {
      if (i > 0 && separator !== void 0) {
        result.push(separator);
      }
      result.push(chunk);
    }
    return new SQL$1(result);
  }
  sql2.join = join;
  function identifier(value) {
    return new Name$1(value);
  }
  sql2.identifier = identifier;
  function placeholder2(name2) {
    return new Placeholder$1(name2);
  }
  sql2.placeholder = placeholder2;
  function param2(value, encoder) {
    return new Param$1(value, encoder);
  }
  sql2.param = param2;
})(sql$1 || (sql$1 = {}));
((SQL22) => {
  class Aliased {
    constructor(sql2, fieldAlias) {
      this.sql = sql2;
      this.fieldAlias = fieldAlias;
    }
    static [entityKind$1] = "SQL.Aliased";
    /** @internal */
    isSelectionField = false;
    getSQL() {
      return this.sql;
    }
    /** @internal */
    clone() {
      return new Aliased(this.sql, this.fieldAlias);
    }
  }
  SQL22.Aliased = Aliased;
})(SQL$1 || (SQL$1 = {}));
let Placeholder$1 = class Placeholder {
  constructor(name2) {
    this.name = name2;
  }
  static [entityKind$1] = "Placeholder";
  getSQL() {
    return new SQL$1([this]);
  }
};
function fillPlaceholders(params, values2) {
  return params.map((p2) => {
    if (is$1(p2, Placeholder$1)) {
      if (!(p2.name in values2)) {
        throw new Error(`No value for placeholder "${p2.name}" was provided`);
      }
      return values2[p2.name];
    }
    if (is$1(p2, Param$1) && is$1(p2.value, Placeholder$1)) {
      if (!(p2.value.name in values2)) {
        throw new Error(`No value for placeholder "${p2.value.name}" was provided`);
      }
      return p2.encoder.mapToDriverValue(values2[p2.value.name]);
    }
    return p2;
  });
}
const IsDrizzleView$1 = /* @__PURE__ */ Symbol.for("drizzle:IsDrizzleView");
let View$1 = class View {
  static [entityKind$1] = "View";
  /** @internal */
  [ViewBaseConfig$1];
  /** @internal */
  [IsDrizzleView$1] = true;
  constructor({
    name: name2,
    schema: schema2,
    selectedFields,
    query
  }) {
    this[ViewBaseConfig$1] = {
      name: name2,
      originalName: name2,
      schema: schema2,
      selectedFields,
      query,
      isExisting: !query,
      isAlias: false
    };
  }
  getSQL() {
    return new SQL$1([this]);
  }
};
Column$1.prototype.getSQL = function() {
  return new SQL$1([this]);
};
Table$1.prototype.getSQL = function() {
  return new SQL$1([this]);
};
Subquery$1.prototype.getSQL = function() {
  return new SQL$1([this]);
};
class ColumnAliasProxyHandler {
  constructor(table) {
    this.table = table;
  }
  static [entityKind$1] = "ColumnAliasProxyHandler";
  get(columnObj, prop) {
    if (prop === "table") {
      return this.table;
    }
    return columnObj[prop];
  }
}
class TableAliasProxyHandler {
  constructor(alias, replaceOriginalName) {
    this.alias = alias;
    this.replaceOriginalName = replaceOriginalName;
  }
  static [entityKind$1] = "TableAliasProxyHandler";
  get(target, prop) {
    if (prop === Table$1.Symbol.IsAlias) {
      return true;
    }
    if (prop === Table$1.Symbol.Name) {
      return this.alias;
    }
    if (this.replaceOriginalName && prop === Table$1.Symbol.OriginalName) {
      return this.alias;
    }
    if (prop === ViewBaseConfig$1) {
      return {
        ...target[ViewBaseConfig$1],
        name: this.alias,
        isAlias: true
      };
    }
    if (prop === Table$1.Symbol.Columns) {
      const columns = target[Table$1.Symbol.Columns];
      if (!columns) {
        return columns;
      }
      const proxiedColumns = {};
      Object.keys(columns).map((key) => {
        proxiedColumns[key] = new Proxy(columns[key], new ColumnAliasProxyHandler(new Proxy(target, this)));
      });
      return proxiedColumns;
    }
    const value = target[prop];
    if (is$1(value, Column$1)) {
      return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(target, this)));
    }
    return value;
  }
}
function aliasedTable(table, tableAlias) {
  return new Proxy(table, new TableAliasProxyHandler(tableAlias, false));
}
function aliasedTableColumn(column, tableAlias) {
  return new Proxy(column, new ColumnAliasProxyHandler(new Proxy(column.table, new TableAliasProxyHandler(tableAlias, false))));
}
function mapColumnsInAliasedSQLToAlias(query, alias) {
  return new SQL$1.Aliased(mapColumnsInSQLToAlias(query.sql, alias), query.fieldAlias);
}
function mapColumnsInSQLToAlias(query, alias) {
  return sql$1.join(query.queryChunks.map((c2) => {
    if (is$1(c2, Column$1)) {
      return aliasedTableColumn(c2, alias);
    }
    if (is$1(c2, SQL$1)) {
      return mapColumnsInSQLToAlias(c2, alias);
    }
    if (is$1(c2, SQL$1.Aliased)) {
      return mapColumnsInAliasedSQLToAlias(c2, alias);
    }
    return c2;
  }));
}
function mapResultRow(columns, row, joinsNotNullableMap) {
  const nullifyMap = {};
  const result = columns.reduce((result2, {
    path,
    field
  }, columnIndex) => {
    let decoder;
    if (is$1(field, Column$1)) {
      decoder = field;
    } else if (is$1(field, SQL$1)) {
      decoder = field.decoder;
    } else {
      decoder = field.sql.decoder;
    }
    let node = result2;
    for (const [pathChunkIndex, pathChunk] of path.entries()) {
      if (pathChunkIndex < path.length - 1) {
        if (!(pathChunk in node)) {
          node[pathChunk] = {};
        }
        node = node[pathChunk];
      } else {
        const rawValue = row[columnIndex];
        const value = node[pathChunk] = rawValue === null ? null : decoder.mapFromDriverValue(rawValue);
        if (joinsNotNullableMap && is$1(field, Column$1) && path.length === 2) {
          const objectName = path[0];
          if (!(objectName in nullifyMap)) {
            nullifyMap[objectName] = value === null ? getTableName(field.table) : false;
          } else if (typeof nullifyMap[objectName] === "string" && nullifyMap[objectName] !== getTableName(field.table)) {
            nullifyMap[objectName] = false;
          }
        }
      }
    }
    return result2;
  }, {});
  if (joinsNotNullableMap && Object.keys(nullifyMap).length > 0) {
    for (const [objectName, tableName] of Object.entries(nullifyMap)) {
      if (typeof tableName === "string" && !joinsNotNullableMap[tableName]) {
        result[objectName] = null;
      }
    }
  }
  return result;
}
function orderSelectedFields(fields, pathPrefix) {
  return Object.entries(fields).reduce((result, [name, field]) => {
    if (typeof name !== "string") {
      return result;
    }
    const newPath = pathPrefix ? [...pathPrefix, name] : [name];
    if (is$1(field, Column$1) || is$1(field, SQL$1) || is$1(field, SQL$1.Aliased)) {
      result.push({
        path: newPath,
        field
      });
    } else if (is$1(field, Table$1)) {
      result.push(...orderSelectedFields(field[Table$1.Symbol.Columns], newPath));
    } else {
      result.push(...orderSelectedFields(field, newPath));
    }
    return result;
  }, []);
}
function haveSameKeys(left, right) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) {
    return false;
  }
  for (const [index2, key] of leftKeys.entries()) {
    if (key !== rightKeys[index2]) {
      return false;
    }
  }
  return true;
}
function mapUpdateSet(table, values2) {
  const entries = Object.entries(values2).filter(([, value]) => value !== void 0).map(([key, value]) => {
    if (is$1(value, SQL$1) || is$1(value, Column$1)) {
      return [key, value];
    } else {
      return [key, new Param$1(value, table[Table$1.Symbol.Columns][key])];
    }
  });
  if (entries.length === 0) {
    throw new Error("No values to set");
  }
  return Object.fromEntries(entries);
}
function applyMixins(baseClass, extendedClasses) {
  for (const extendedClass of extendedClasses) {
    for (const name of Object.getOwnPropertyNames(extendedClass.prototype)) {
      if (name === "constructor") continue;
      Object.defineProperty(baseClass.prototype, name, Object.getOwnPropertyDescriptor(extendedClass.prototype, name) || /* @__PURE__ */ Object.create(null));
    }
  }
}
function getTableColumns(table) {
  return table[Table$1.Symbol.Columns];
}
function getTableLikeName(table) {
  return is$1(table, Subquery$1) ? table._.alias : is$1(table, View$1) ? table[ViewBaseConfig$1].name : is$1(table, SQL$1) ? void 0 : table[Table$1.Symbol.IsAlias] ? table[Table$1.Symbol.Name] : table[Table$1.Symbol.BaseName];
}
function getColumnNameAndConfig(a2, b2) {
  return {
    name: typeof a2 === "string" && a2.length > 0 ? a2 : "",
    config: typeof a2 === "object" ? a2 : b2
  };
}
function isConfig(data) {
  if (typeof data !== "object" || data === null) return false;
  if (data.constructor.name !== "Object") return false;
  if ("logger" in data) {
    const type = typeof data["logger"];
    if (type !== "boolean" && (type !== "object" || typeof data["logger"]["logQuery"] !== "function") && type !== "undefined") return false;
    return true;
  }
  if ("schema" in data) {
    const type = typeof data["schema"];
    if (type !== "object" && type !== "undefined") return false;
    return true;
  }
  if ("casing" in data) {
    const type = typeof data["casing"];
    if (type !== "string" && type !== "undefined") return false;
    return true;
  }
  if ("mode" in data) {
    if (data["mode"] !== "default" || data["mode"] !== "planetscale" || data["mode"] !== void 0) return false;
    return true;
  }
  if ("connection" in data) {
    const type = typeof data["connection"];
    if (type !== "string" && type !== "object" && type !== "undefined") return false;
    return true;
  }
  if ("client" in data) {
    const type = typeof data["client"];
    if (type !== "object" && type !== "function" && type !== "undefined") return false;
    return true;
  }
  if (Object.keys(data).length === 0) return true;
  return false;
}
class PgIntColumnBaseBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgIntColumnBaseBuilder";
  generatedAlwaysAsIdentity(sequence) {
    if (sequence) {
      const {
        name,
        ...options
      } = sequence;
      this.config.generatedIdentity = {
        type: "always",
        sequenceName: name,
        sequenceOptions: options
      };
    } else {
      this.config.generatedIdentity = {
        type: "always"
      };
    }
    this.config.hasDefault = true;
    this.config.notNull = true;
    return this;
  }
  generatedByDefaultAsIdentity(sequence) {
    if (sequence) {
      const {
        name,
        ...options
      } = sequence;
      this.config.generatedIdentity = {
        type: "byDefault",
        sequenceName: name,
        sequenceOptions: options
      };
    } else {
      this.config.generatedIdentity = {
        type: "byDefault"
      };
    }
    this.config.hasDefault = true;
    this.config.notNull = true;
    return this;
  }
}
class PgBigInt53Builder extends PgIntColumnBaseBuilder {
  static [entityKind$1] = "PgBigInt53Builder";
  constructor(name) {
    super(name, "number", "PgBigInt53");
  }
  /** @internal */
  build(table) {
    return new PgBigInt53(table, this.config);
  }
}
class PgBigInt53 extends PgColumn {
  static [entityKind$1] = "PgBigInt53";
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(value) {
    if (typeof value === "number") {
      return value;
    }
    return Number(value);
  }
}
class PgBigInt64Builder extends PgIntColumnBaseBuilder {
  static [entityKind$1] = "PgBigInt64Builder";
  constructor(name) {
    super(name, "bigint", "PgBigInt64");
  }
  /** @internal */
  build(table) {
    return new PgBigInt64(table, this.config);
  }
}
class PgBigInt64 extends PgColumn {
  static [entityKind$1] = "PgBigInt64";
  getSQLType() {
    return "bigint";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(value) {
    return BigInt(value);
  }
}
function bigint(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  if (config2.mode === "number") {
    return new PgBigInt53Builder(name);
  }
  return new PgBigInt64Builder(name);
}
class PgBigSerial53Builder extends PgColumnBuilder {
  static [entityKind$1] = "PgBigSerial53Builder";
  constructor(name) {
    super(name, "number", "PgBigSerial53");
    this.config.hasDefault = true;
    this.config.notNull = true;
  }
  /** @internal */
  build(table) {
    return new PgBigSerial53(table, this.config);
  }
}
class PgBigSerial53 extends PgColumn {
  static [entityKind$1] = "PgBigSerial53";
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(value) {
    if (typeof value === "number") {
      return value;
    }
    return Number(value);
  }
}
class PgBigSerial64Builder extends PgColumnBuilder {
  static [entityKind$1] = "PgBigSerial64Builder";
  constructor(name) {
    super(name, "bigint", "PgBigSerial64");
    this.config.hasDefault = true;
  }
  /** @internal */
  build(table) {
    return new PgBigSerial64(table, this.config);
  }
}
class PgBigSerial64 extends PgColumn {
  static [entityKind$1] = "PgBigSerial64";
  getSQLType() {
    return "bigserial";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(value) {
    return BigInt(value);
  }
}
function bigserial(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  if (config2.mode === "number") {
    return new PgBigSerial53Builder(name);
  }
  return new PgBigSerial64Builder(name);
}
class PgBooleanBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgBooleanBuilder";
  constructor(name) {
    super(name, "boolean", "PgBoolean");
  }
  /** @internal */
  build(table) {
    return new PgBoolean(table, this.config);
  }
}
class PgBoolean extends PgColumn {
  static [entityKind$1] = "PgBoolean";
  getSQLType() {
    return "boolean";
  }
}
function boolean(name) {
  return new PgBooleanBuilder(name ?? "");
}
class PgCharBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgCharBuilder";
  constructor(name, config2) {
    super(name, "string", "PgChar");
    this.config.length = config2.length;
    this.config.enumValues = config2.enum;
  }
  /** @internal */
  build(table) {
    return new PgChar(table, this.config);
  }
}
class PgChar extends PgColumn {
  static [entityKind$1] = "PgChar";
  length = this.config.length;
  enumValues = this.config.enumValues;
  getSQLType() {
    return this.length === void 0 ? `char` : `char(${this.length})`;
  }
}
function char(a2, b2 = {}) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  return new PgCharBuilder(name, config2);
}
class PgCidrBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgCidrBuilder";
  constructor(name) {
    super(name, "string", "PgCidr");
  }
  /** @internal */
  build(table) {
    return new PgCidr(table, this.config);
  }
}
class PgCidr extends PgColumn {
  static [entityKind$1] = "PgCidr";
  getSQLType() {
    return "cidr";
  }
}
function cidr(name) {
  return new PgCidrBuilder(name ?? "");
}
class PgCustomColumnBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgCustomColumnBuilder";
  constructor(name, fieldConfig, customTypeParams) {
    super(name, "custom", "PgCustomColumn");
    this.config.fieldConfig = fieldConfig;
    this.config.customTypeParams = customTypeParams;
  }
  /** @internal */
  build(table) {
    return new PgCustomColumn(table, this.config);
  }
}
class PgCustomColumn extends PgColumn {
  static [entityKind$1] = "PgCustomColumn";
  sqlName;
  mapTo;
  mapFrom;
  constructor(table, config2) {
    super(table, config2);
    this.sqlName = config2.customTypeParams.dataType(config2.fieldConfig);
    this.mapTo = config2.customTypeParams.toDriver;
    this.mapFrom = config2.customTypeParams.fromDriver;
  }
  getSQLType() {
    return this.sqlName;
  }
  mapFromDriverValue(value) {
    return typeof this.mapFrom === "function" ? this.mapFrom(value) : value;
  }
  mapToDriverValue(value) {
    return typeof this.mapTo === "function" ? this.mapTo(value) : value;
  }
}
function customType(customTypeParams) {
  return (a2, b2) => {
    const {
      name,
      config: config2
    } = getColumnNameAndConfig(a2, b2);
    return new PgCustomColumnBuilder(name, config2, customTypeParams);
  };
}
class PgDateColumnBaseBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgDateColumnBaseBuilder";
  defaultNow() {
    return this.default(sql$1`now()`);
  }
}
class PgDateBuilder extends PgDateColumnBaseBuilder {
  static [entityKind$1] = "PgDateBuilder";
  constructor(name) {
    super(name, "date", "PgDate");
  }
  /** @internal */
  build(table) {
    return new PgDate(table, this.config);
  }
}
class PgDate extends PgColumn {
  static [entityKind$1] = "PgDate";
  getSQLType() {
    return "date";
  }
  mapFromDriverValue(value) {
    return new Date(value);
  }
  mapToDriverValue(value) {
    return value.toISOString();
  }
}
class PgDateStringBuilder extends PgDateColumnBaseBuilder {
  static [entityKind$1] = "PgDateStringBuilder";
  constructor(name) {
    super(name, "string", "PgDateString");
  }
  /** @internal */
  build(table) {
    return new PgDateString(table, this.config);
  }
}
class PgDateString extends PgColumn {
  static [entityKind$1] = "PgDateString";
  getSQLType() {
    return "date";
  }
}
function date(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  if (config2?.mode === "date") {
    return new PgDateBuilder(name);
  }
  return new PgDateStringBuilder(name);
}
class PgDoublePrecisionBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgDoublePrecisionBuilder";
  constructor(name) {
    super(name, "number", "PgDoublePrecision");
  }
  /** @internal */
  build(table) {
    return new PgDoublePrecision(table, this.config);
  }
}
class PgDoublePrecision extends PgColumn {
  static [entityKind$1] = "PgDoublePrecision";
  getSQLType() {
    return "double precision";
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      return Number.parseFloat(value);
    }
    return value;
  }
}
function doublePrecision(name) {
  return new PgDoublePrecisionBuilder(name ?? "");
}
class PgInetBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgInetBuilder";
  constructor(name) {
    super(name, "string", "PgInet");
  }
  /** @internal */
  build(table) {
    return new PgInet(table, this.config);
  }
}
class PgInet extends PgColumn {
  static [entityKind$1] = "PgInet";
  getSQLType() {
    return "inet";
  }
}
function inet(name) {
  return new PgInetBuilder(name ?? "");
}
class PgIntegerBuilder extends PgIntColumnBaseBuilder {
  static [entityKind$1] = "PgIntegerBuilder";
  constructor(name) {
    super(name, "number", "PgInteger");
  }
  /** @internal */
  build(table) {
    return new PgInteger(table, this.config);
  }
}
class PgInteger extends PgColumn {
  static [entityKind$1] = "PgInteger";
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      return Number.parseInt(value);
    }
    return value;
  }
}
function integer(name) {
  return new PgIntegerBuilder(name ?? "");
}
class PgIntervalBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgIntervalBuilder";
  constructor(name, intervalConfig) {
    super(name, "string", "PgInterval");
    this.config.intervalConfig = intervalConfig;
  }
  /** @internal */
  build(table) {
    return new PgInterval(table, this.config);
  }
}
class PgInterval extends PgColumn {
  static [entityKind$1] = "PgInterval";
  fields = this.config.intervalConfig.fields;
  precision = this.config.intervalConfig.precision;
  getSQLType() {
    const fields = this.fields ? ` ${this.fields}` : "";
    const precision = this.precision ? `(${this.precision})` : "";
    return `interval${fields}${precision}`;
  }
}
function interval(a2, b2 = {}) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  return new PgIntervalBuilder(name, config2);
}
class PgJsonBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgJsonBuilder";
  constructor(name) {
    super(name, "json", "PgJson");
  }
  /** @internal */
  build(table) {
    return new PgJson(table, this.config);
  }
}
class PgJson extends PgColumn {
  static [entityKind$1] = "PgJson";
  constructor(table, config2) {
    super(table, config2);
  }
  getSQLType() {
    return "json";
  }
  mapToDriverValue(value) {
    return JSON.stringify(value);
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return value;
  }
}
function json(name) {
  return new PgJsonBuilder(name ?? "");
}
class PgJsonbBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgJsonbBuilder";
  constructor(name) {
    super(name, "json", "PgJsonb");
  }
  /** @internal */
  build(table) {
    return new PgJsonb(table, this.config);
  }
}
class PgJsonb extends PgColumn {
  static [entityKind$1] = "PgJsonb";
  constructor(table, config2) {
    super(table, config2);
  }
  getSQLType() {
    return "jsonb";
  }
  mapToDriverValue(value) {
    return JSON.stringify(value);
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return value;
  }
}
function jsonb(name) {
  return new PgJsonbBuilder(name ?? "");
}
class PgLineBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgLineBuilder";
  constructor(name) {
    super(name, "array", "PgLine");
  }
  /** @internal */
  build(table) {
    return new PgLineTuple(table, this.config);
  }
}
class PgLineTuple extends PgColumn {
  static [entityKind$1] = "PgLine";
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(value) {
    const [a2, b2, c2] = value.slice(1, -1).split(",");
    return [Number.parseFloat(a2), Number.parseFloat(b2), Number.parseFloat(c2)];
  }
  mapToDriverValue(value) {
    return `{${value[0]},${value[1]},${value[2]}}`;
  }
}
class PgLineABCBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgLineABCBuilder";
  constructor(name) {
    super(name, "json", "PgLineABC");
  }
  /** @internal */
  build(table) {
    return new PgLineABC(table, this.config);
  }
}
class PgLineABC extends PgColumn {
  static [entityKind$1] = "PgLineABC";
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(value) {
    const [a2, b2, c2] = value.slice(1, -1).split(",");
    return {
      a: Number.parseFloat(a2),
      b: Number.parseFloat(b2),
      c: Number.parseFloat(c2)
    };
  }
  mapToDriverValue(value) {
    return `{${value.a},${value.b},${value.c}}`;
  }
}
function line(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  if (!config2?.mode || config2.mode === "tuple") {
    return new PgLineBuilder(name);
  }
  return new PgLineABCBuilder(name);
}
class PgMacaddrBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgMacaddrBuilder";
  constructor(name) {
    super(name, "string", "PgMacaddr");
  }
  /** @internal */
  build(table) {
    return new PgMacaddr(table, this.config);
  }
}
class PgMacaddr extends PgColumn {
  static [entityKind$1] = "PgMacaddr";
  getSQLType() {
    return "macaddr";
  }
}
function macaddr(name) {
  return new PgMacaddrBuilder(name ?? "");
}
class PgMacaddr8Builder extends PgColumnBuilder {
  static [entityKind$1] = "PgMacaddr8Builder";
  constructor(name) {
    super(name, "string", "PgMacaddr8");
  }
  /** @internal */
  build(table) {
    return new PgMacaddr8(table, this.config);
  }
}
class PgMacaddr8 extends PgColumn {
  static [entityKind$1] = "PgMacaddr8";
  getSQLType() {
    return "macaddr8";
  }
}
function macaddr8(name) {
  return new PgMacaddr8Builder(name ?? "");
}
class PgNumericBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgNumericBuilder";
  constructor(name, precision, scale) {
    super(name, "string", "PgNumeric");
    this.config.precision = precision;
    this.config.scale = scale;
  }
  /** @internal */
  build(table) {
    return new PgNumeric(table, this.config);
  }
}
class PgNumeric extends PgColumn {
  static [entityKind$1] = "PgNumeric";
  precision;
  scale;
  constructor(table, config2) {
    super(table, config2);
    this.precision = config2.precision;
    this.scale = config2.scale;
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") return value;
    return String(value);
  }
  getSQLType() {
    if (this.precision !== void 0 && this.scale !== void 0) {
      return `numeric(${this.precision}, ${this.scale})`;
    } else if (this.precision === void 0) {
      return "numeric";
    } else {
      return `numeric(${this.precision})`;
    }
  }
}
class PgNumericNumberBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgNumericNumberBuilder";
  constructor(name, precision, scale) {
    super(name, "number", "PgNumericNumber");
    this.config.precision = precision;
    this.config.scale = scale;
  }
  /** @internal */
  build(table) {
    return new PgNumericNumber(table, this.config);
  }
}
class PgNumericNumber extends PgColumn {
  static [entityKind$1] = "PgNumericNumber";
  precision;
  scale;
  constructor(table, config2) {
    super(table, config2);
    this.precision = config2.precision;
    this.scale = config2.scale;
  }
  mapFromDriverValue(value) {
    if (typeof value === "number") return value;
    return Number(value);
  }
  mapToDriverValue = String;
  getSQLType() {
    if (this.precision !== void 0 && this.scale !== void 0) {
      return `numeric(${this.precision}, ${this.scale})`;
    } else if (this.precision === void 0) {
      return "numeric";
    } else {
      return `numeric(${this.precision})`;
    }
  }
}
class PgNumericBigIntBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgNumericBigIntBuilder";
  constructor(name, precision, scale) {
    super(name, "bigint", "PgNumericBigInt");
    this.config.precision = precision;
    this.config.scale = scale;
  }
  /** @internal */
  build(table) {
    return new PgNumericBigInt(table, this.config);
  }
}
class PgNumericBigInt extends PgColumn {
  static [entityKind$1] = "PgNumericBigInt";
  precision;
  scale;
  constructor(table, config2) {
    super(table, config2);
    this.precision = config2.precision;
    this.scale = config2.scale;
  }
  mapFromDriverValue = BigInt;
  mapToDriverValue = String;
  getSQLType() {
    if (this.precision !== void 0 && this.scale !== void 0) {
      return `numeric(${this.precision}, ${this.scale})`;
    } else if (this.precision === void 0) {
      return "numeric";
    } else {
      return `numeric(${this.precision})`;
    }
  }
}
function numeric(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  const mode = config2?.mode;
  return mode === "number" ? new PgNumericNumberBuilder(name, config2?.precision, config2?.scale) : mode === "bigint" ? new PgNumericBigIntBuilder(name, config2?.precision, config2?.scale) : new PgNumericBuilder(name, config2?.precision, config2?.scale);
}
class PgPointTupleBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgPointTupleBuilder";
  constructor(name) {
    super(name, "array", "PgPointTuple");
  }
  /** @internal */
  build(table) {
    return new PgPointTuple(table, this.config);
  }
}
class PgPointTuple extends PgColumn {
  static [entityKind$1] = "PgPointTuple";
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      const [x2, y2] = value.slice(1, -1).split(",");
      return [Number.parseFloat(x2), Number.parseFloat(y2)];
    }
    return [value.x, value.y];
  }
  mapToDriverValue(value) {
    return `(${value[0]},${value[1]})`;
  }
}
class PgPointObjectBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgPointObjectBuilder";
  constructor(name) {
    super(name, "json", "PgPointObject");
  }
  /** @internal */
  build(table) {
    return new PgPointObject(table, this.config);
  }
}
class PgPointObject extends PgColumn {
  static [entityKind$1] = "PgPointObject";
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      const [x2, y2] = value.slice(1, -1).split(",");
      return {
        x: Number.parseFloat(x2),
        y: Number.parseFloat(y2)
      };
    }
    return value;
  }
  mapToDriverValue(value) {
    return `(${value.x},${value.y})`;
  }
}
function point(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  if (!config2?.mode || config2.mode === "tuple") {
    return new PgPointTupleBuilder(name);
  }
  return new PgPointObjectBuilder(name);
}
function hexToBytes(hex) {
  const bytes = [];
  for (let c2 = 0; c2 < hex.length; c2 += 2) {
    bytes.push(Number.parseInt(hex.slice(c2, c2 + 2), 16));
  }
  return new Uint8Array(bytes);
}
function bytesToFloat64(bytes, offset) {
  const buffer2 = new ArrayBuffer(8);
  const view = new DataView(buffer2);
  for (let i = 0; i < 8; i++) {
    view.setUint8(i, bytes[offset + i]);
  }
  return view.getFloat64(0, true);
}
function parseEWKB(hex) {
  const bytes = hexToBytes(hex);
  let offset = 0;
  const byteOrder = bytes[offset];
  offset += 1;
  const view = new DataView(bytes.buffer);
  const geomType = view.getUint32(offset, byteOrder === 1);
  offset += 4;
  if (geomType & 536870912) {
    view.getUint32(offset, byteOrder === 1);
    offset += 4;
  }
  if ((geomType & 65535) === 1) {
    const x2 = bytesToFloat64(bytes, offset);
    offset += 8;
    const y2 = bytesToFloat64(bytes, offset);
    offset += 8;
    return [x2, y2];
  }
  throw new Error("Unsupported geometry type");
}
class PgGeometryBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgGeometryBuilder";
  constructor(name) {
    super(name, "array", "PgGeometry");
  }
  /** @internal */
  build(table) {
    return new PgGeometry(table, this.config);
  }
}
class PgGeometry extends PgColumn {
  static [entityKind$1] = "PgGeometry";
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(value) {
    return parseEWKB(value);
  }
  mapToDriverValue(value) {
    return `point(${value[0]} ${value[1]})`;
  }
}
class PgGeometryObjectBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgGeometryObjectBuilder";
  constructor(name) {
    super(name, "json", "PgGeometryObject");
  }
  /** @internal */
  build(table) {
    return new PgGeometryObject(table, this.config);
  }
}
class PgGeometryObject extends PgColumn {
  static [entityKind$1] = "PgGeometryObject";
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(value) {
    const parsed = parseEWKB(value);
    return {
      x: parsed[0],
      y: parsed[1]
    };
  }
  mapToDriverValue(value) {
    return `point(${value.x} ${value.y})`;
  }
}
function geometry(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  if (!config2?.mode || config2.mode === "tuple") {
    return new PgGeometryBuilder(name);
  }
  return new PgGeometryObjectBuilder(name);
}
class PgRealBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgRealBuilder";
  constructor(name, length) {
    super(name, "number", "PgReal");
    this.config.length = length;
  }
  /** @internal */
  build(table) {
    return new PgReal(table, this.config);
  }
}
class PgReal extends PgColumn {
  static [entityKind$1] = "PgReal";
  constructor(table, config2) {
    super(table, config2);
  }
  getSQLType() {
    return "real";
  }
  mapFromDriverValue = (value) => {
    if (typeof value === "string") {
      return Number.parseFloat(value);
    }
    return value;
  };
}
function real(name) {
  return new PgRealBuilder(name ?? "");
}
class PgSerialBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgSerialBuilder";
  constructor(name) {
    super(name, "number", "PgSerial");
    this.config.hasDefault = true;
    this.config.notNull = true;
  }
  /** @internal */
  build(table) {
    return new PgSerial(table, this.config);
  }
}
class PgSerial extends PgColumn {
  static [entityKind$1] = "PgSerial";
  getSQLType() {
    return "serial";
  }
}
function serial(name) {
  return new PgSerialBuilder(name ?? "");
}
class PgSmallIntBuilder extends PgIntColumnBaseBuilder {
  static [entityKind$1] = "PgSmallIntBuilder";
  constructor(name) {
    super(name, "number", "PgSmallInt");
  }
  /** @internal */
  build(table) {
    return new PgSmallInt(table, this.config);
  }
}
class PgSmallInt extends PgColumn {
  static [entityKind$1] = "PgSmallInt";
  getSQLType() {
    return "smallint";
  }
  mapFromDriverValue = (value) => {
    if (typeof value === "string") {
      return Number(value);
    }
    return value;
  };
}
function smallint(name) {
  return new PgSmallIntBuilder(name ?? "");
}
class PgSmallSerialBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgSmallSerialBuilder";
  constructor(name) {
    super(name, "number", "PgSmallSerial");
    this.config.hasDefault = true;
    this.config.notNull = true;
  }
  /** @internal */
  build(table) {
    return new PgSmallSerial(table, this.config);
  }
}
class PgSmallSerial extends PgColumn {
  static [entityKind$1] = "PgSmallSerial";
  getSQLType() {
    return "smallserial";
  }
}
function smallserial(name) {
  return new PgSmallSerialBuilder(name ?? "");
}
class PgTextBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgTextBuilder";
  constructor(name, config2) {
    super(name, "string", "PgText");
    this.config.enumValues = config2.enum;
  }
  /** @internal */
  build(table) {
    return new PgText(table, this.config);
  }
}
class PgText extends PgColumn {
  static [entityKind$1] = "PgText";
  enumValues = this.config.enumValues;
  getSQLType() {
    return "text";
  }
}
function text2(a2, b2 = {}) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  return new PgTextBuilder(name, config2);
}
class PgTimeBuilder extends PgDateColumnBaseBuilder {
  constructor(name, withTimezone, precision) {
    super(name, "string", "PgTime");
    this.withTimezone = withTimezone;
    this.precision = precision;
    this.config.withTimezone = withTimezone;
    this.config.precision = precision;
  }
  static [entityKind$1] = "PgTimeBuilder";
  /** @internal */
  build(table) {
    return new PgTime(table, this.config);
  }
}
class PgTime extends PgColumn {
  static [entityKind$1] = "PgTime";
  withTimezone;
  precision;
  constructor(table, config2) {
    super(table, config2);
    this.withTimezone = config2.withTimezone;
    this.precision = config2.precision;
  }
  getSQLType() {
    const precision = this.precision === void 0 ? "" : `(${this.precision})`;
    return `time${precision}${this.withTimezone ? " with time zone" : ""}`;
  }
}
function time(a2, b2 = {}) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  return new PgTimeBuilder(name, config2.withTimezone ?? false, config2.precision);
}
class PgTimestampBuilder extends PgDateColumnBaseBuilder {
  static [entityKind$1] = "PgTimestampBuilder";
  constructor(name, withTimezone, precision) {
    super(name, "date", "PgTimestamp");
    this.config.withTimezone = withTimezone;
    this.config.precision = precision;
  }
  /** @internal */
  build(table) {
    return new PgTimestamp(table, this.config);
  }
}
class PgTimestamp extends PgColumn {
  static [entityKind$1] = "PgTimestamp";
  withTimezone;
  precision;
  constructor(table, config2) {
    super(table, config2);
    this.withTimezone = config2.withTimezone;
    this.precision = config2.precision;
  }
  getSQLType() {
    const precision = this.precision === void 0 ? "" : ` (${this.precision})`;
    return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
  }
  mapFromDriverValue = (value) => {
    return new Date(this.withTimezone ? value : value + "+0000");
  };
  mapToDriverValue = (value) => {
    return value.toISOString();
  };
}
class PgTimestampStringBuilder extends PgDateColumnBaseBuilder {
  static [entityKind$1] = "PgTimestampStringBuilder";
  constructor(name, withTimezone, precision) {
    super(name, "string", "PgTimestampString");
    this.config.withTimezone = withTimezone;
    this.config.precision = precision;
  }
  /** @internal */
  build(table) {
    return new PgTimestampString(table, this.config);
  }
}
class PgTimestampString extends PgColumn {
  static [entityKind$1] = "PgTimestampString";
  withTimezone;
  precision;
  constructor(table, config2) {
    super(table, config2);
    this.withTimezone = config2.withTimezone;
    this.precision = config2.precision;
  }
  getSQLType() {
    const precision = this.precision === void 0 ? "" : `(${this.precision})`;
    return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
  }
}
function timestamp(a2, b2 = {}) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  if (config2?.mode === "string") {
    return new PgTimestampStringBuilder(name, config2.withTimezone ?? false, config2.precision);
  }
  return new PgTimestampBuilder(name, config2?.withTimezone ?? false, config2?.precision);
}
class PgUUIDBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgUUIDBuilder";
  constructor(name) {
    super(name, "string", "PgUUID");
  }
  /**
   * Adds `default gen_random_uuid()` to the column definition.
   */
  defaultRandom() {
    return this.default(sql$1`gen_random_uuid()`);
  }
  /** @internal */
  build(table) {
    return new PgUUID(table, this.config);
  }
}
class PgUUID extends PgColumn {
  static [entityKind$1] = "PgUUID";
  getSQLType() {
    return "uuid";
  }
}
function uuid(name) {
  return new PgUUIDBuilder(name ?? "");
}
class PgVarcharBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgVarcharBuilder";
  constructor(name, config2) {
    super(name, "string", "PgVarchar");
    this.config.length = config2.length;
    this.config.enumValues = config2.enum;
  }
  /** @internal */
  build(table) {
    return new PgVarchar(table, this.config);
  }
}
class PgVarchar extends PgColumn {
  static [entityKind$1] = "PgVarchar";
  length = this.config.length;
  enumValues = this.config.enumValues;
  getSQLType() {
    return this.length === void 0 ? `varchar` : `varchar(${this.length})`;
  }
}
function varchar(a2, b2 = {}) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  return new PgVarcharBuilder(name, config2);
}
class PgBinaryVectorBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgBinaryVectorBuilder";
  constructor(name, config2) {
    super(name, "string", "PgBinaryVector");
    this.config.dimensions = config2.dimensions;
  }
  /** @internal */
  build(table) {
    return new PgBinaryVector(table, this.config);
  }
}
class PgBinaryVector extends PgColumn {
  static [entityKind$1] = "PgBinaryVector";
  dimensions = this.config.dimensions;
  getSQLType() {
    return `bit(${this.dimensions})`;
  }
}
function bit(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  return new PgBinaryVectorBuilder(name, config2);
}
class PgHalfVectorBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgHalfVectorBuilder";
  constructor(name, config2) {
    super(name, "array", "PgHalfVector");
    this.config.dimensions = config2.dimensions;
  }
  /** @internal */
  build(table) {
    return new PgHalfVector(table, this.config);
  }
}
class PgHalfVector extends PgColumn {
  static [entityKind$1] = "PgHalfVector";
  dimensions = this.config.dimensions;
  getSQLType() {
    return `halfvec(${this.dimensions})`;
  }
  mapToDriverValue(value) {
    return JSON.stringify(value);
  }
  mapFromDriverValue(value) {
    return value.slice(1, -1).split(",").map((v2) => Number.parseFloat(v2));
  }
}
function halfvec(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  return new PgHalfVectorBuilder(name, config2);
}
class PgSparseVectorBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgSparseVectorBuilder";
  constructor(name, config2) {
    super(name, "string", "PgSparseVector");
    this.config.dimensions = config2.dimensions;
  }
  /** @internal */
  build(table) {
    return new PgSparseVector(table, this.config);
  }
}
class PgSparseVector extends PgColumn {
  static [entityKind$1] = "PgSparseVector";
  dimensions = this.config.dimensions;
  getSQLType() {
    return `sparsevec(${this.dimensions})`;
  }
}
function sparsevec(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  return new PgSparseVectorBuilder(name, config2);
}
class PgVectorBuilder extends PgColumnBuilder {
  static [entityKind$1] = "PgVectorBuilder";
  constructor(name, config2) {
    super(name, "array", "PgVector");
    this.config.dimensions = config2.dimensions;
  }
  /** @internal */
  build(table) {
    return new PgVector(table, this.config);
  }
}
class PgVector extends PgColumn {
  static [entityKind$1] = "PgVector";
  dimensions = this.config.dimensions;
  getSQLType() {
    return `vector(${this.dimensions})`;
  }
  mapToDriverValue(value) {
    return JSON.stringify(value);
  }
  mapFromDriverValue(value) {
    return value.slice(1, -1).split(",").map((v2) => Number.parseFloat(v2));
  }
}
function vector(a2, b2) {
  const {
    name,
    config: config2
  } = getColumnNameAndConfig(a2, b2);
  return new PgVectorBuilder(name, config2);
}
class QueryPromise {
  static [entityKind$1] = "QueryPromise";
  [Symbol.toStringTag] = "QueryPromise";
  catch(onRejected) {
    return this.then(void 0, onRejected);
  }
  finally(onFinally) {
    return this.then((value) => {
      onFinally?.();
      return value;
    }, (reason) => {
      onFinally?.();
      throw reason;
    });
  }
  then(onFulfilled, onRejected) {
    return this.execute().then(onFulfilled, onRejected);
  }
}
class SelectionProxyHandler {
  static [entityKind$1] = "SelectionProxyHandler";
  config;
  constructor(config2) {
    this.config = {
      ...config2
    };
  }
  get(subquery, prop) {
    if (prop === "_") {
      return {
        ...subquery["_"],
        selectedFields: new Proxy(subquery._.selectedFields, this)
      };
    }
    if (prop === ViewBaseConfig$1) {
      return {
        ...subquery[ViewBaseConfig$1],
        selectedFields: new Proxy(subquery[ViewBaseConfig$1].selectedFields, this)
      };
    }
    if (typeof prop === "symbol") {
      return subquery[prop];
    }
    const columns = is$1(subquery, Subquery$1) ? subquery._.selectedFields : is$1(subquery, View$1) ? subquery[ViewBaseConfig$1].selectedFields : subquery;
    const value = columns[prop];
    if (is$1(value, SQL$1.Aliased)) {
      if (this.config.sqlAliasedBehavior === "sql" && !value.isSelectionField) {
        return value.sql;
      }
      const newValue = value.clone();
      newValue.isSelectionField = true;
      return newValue;
    }
    if (is$1(value, SQL$1)) {
      if (this.config.sqlBehavior === "sql") {
        return value;
      }
      throw new Error(`You tried to reference "${prop}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`);
    }
    if (is$1(value, Column$1)) {
      if (this.config.alias) {
        return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(value.table, new TableAliasProxyHandler(this.config.alias, this.config.replaceOriginalName ?? false))));
      }
      return value;
    }
    if (typeof value !== "object" || value === null) {
      return value;
    }
    return new Proxy(value, new SelectionProxyHandler(this.config));
  }
}
class PgDeleteBase extends QueryPromise {
  constructor(table, session, dialect, withList) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = {
      table,
      withList
    };
  }
  static [entityKind$1] = "PgDelete";
  config;
  /**
   * Adds a `where` clause to the query.
   *
   * Calling this method will delete only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/delete}
   *
   * @param where the `where` clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be deleted.
   *
   * ```ts
   * // Delete all cars with green color
   * await db.delete(cars).where(eq(cars.color, 'green'));
   * // or
   * await db.delete(cars).where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Delete all BMW cars with a green color
   * await db.delete(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Delete all cars with the green or blue color
   * await db.delete(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(where) {
    this.config.where = where;
    return this;
  }
  returning(fields = this.config.table[Table$1.Symbol.Columns]) {
    this.config.returningFields = fields;
    this.config.returning = orderSelectedFields(fields);
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildDeleteQuery(this.config);
  }
  toSQL() {
    const {
      typings: _typings,
      ...rest
    } = this.dialect.sqlToQuery(this.getSQL());
    return rest;
  }
  /** @internal */
  _prepare(name) {
    return tracer$1.startActiveSpan("drizzle.prepareQuery", () => {
      return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name, true);
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  authToken;
  /** @internal */
  setToken(token) {
    this.authToken = token;
    return this;
  }
  execute = (placeholderValues) => {
    return tracer$1.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues, this.authToken);
    });
  };
  /** @internal */
  getSelectedFields() {
    return this.config.returningFields ? new Proxy(this.config.returningFields, new SelectionProxyHandler({
      alias: getTableName(this.config.table),
      sqlAliasedBehavior: "alias",
      sqlBehavior: "error"
    })) : void 0;
  }
  $dynamic() {
    return this;
  }
}
function toSnakeCase(input) {
  const words = input.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? [];
  return words.map((word) => word.toLowerCase()).join("_");
}
function toCamelCase(input) {
  const words = input.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? [];
  return words.reduce((acc, word, i) => {
    const formattedWord = i === 0 ? word.toLowerCase() : `${word[0].toUpperCase()}${word.slice(1)}`;
    return acc + formattedWord;
  }, "");
}
function noopCase(input) {
  return input;
}
class CasingCache {
  static [entityKind$1] = "CasingCache";
  /** @internal */
  cache = {};
  cachedTables = {};
  convert;
  constructor(casing) {
    this.convert = casing === "snake_case" ? toSnakeCase : casing === "camelCase" ? toCamelCase : noopCase;
  }
  getColumnCasing(column) {
    if (!column.keyAsName) return column.name;
    const schema2 = column.table[Table$1.Symbol.Schema] ?? "public";
    const tableName = column.table[Table$1.Symbol.OriginalName];
    const key = `${schema2}.${tableName}.${column.name}`;
    if (!this.cache[key]) {
      this.cacheTable(column.table);
    }
    return this.cache[key];
  }
  cacheTable(table) {
    const schema2 = table[Table$1.Symbol.Schema] ?? "public";
    const tableName = table[Table$1.Symbol.OriginalName];
    const tableKey = `${schema2}.${tableName}`;
    if (!this.cachedTables[tableKey]) {
      for (const column of Object.values(table[Table$1.Symbol.Columns])) {
        const columnKey = `${tableKey}.${column.name}`;
        this.cache[columnKey] = this.convert(column.name);
      }
      this.cachedTables[tableKey] = true;
    }
  }
  clearCache() {
    this.cache = {};
    this.cachedTables = {};
  }
}
class DrizzleError extends Error {
  static [entityKind$1] = "DrizzleError";
  constructor({
    message,
    cause
  }) {
    super(message);
    this.name = "DrizzleError";
    this.cause = cause;
  }
}
class TransactionRollbackError extends DrizzleError {
  static [entityKind$1] = "TransactionRollbackError";
  constructor() {
    super({
      message: "Rollback"
    });
  }
}
function getPgColumnBuilders() {
  return {
    bigint,
    bigserial,
    boolean,
    char,
    cidr,
    customType,
    date,
    doublePrecision,
    inet,
    integer,
    interval,
    json,
    jsonb,
    line,
    macaddr,
    macaddr8,
    numeric,
    point,
    geometry,
    real,
    serial,
    smallint,
    smallserial,
    text: text2,
    time,
    timestamp,
    uuid,
    varchar,
    bit,
    halfvec,
    sparsevec,
    vector
  };
}
const InlineForeignKeys$1 = /* @__PURE__ */ Symbol.for("drizzle:PgInlineForeignKeys");
const EnableRLS$1 = /* @__PURE__ */ Symbol.for("drizzle:EnableRLS");
let PgTable$1 = class PgTable extends Table$1 {
  static [entityKind$1] = "PgTable";
  /** @internal */
  static Symbol = Object.assign({}, Table$1.Symbol, {
    InlineForeignKeys: InlineForeignKeys$1,
    EnableRLS: EnableRLS$1
  });
  /**@internal */
  [InlineForeignKeys$1] = [];
  /** @internal */
  [EnableRLS$1] = false;
  /** @internal */
  [Table$1.Symbol.ExtraConfigBuilder] = void 0;
  /** @internal */
  [Table$1.Symbol.ExtraConfigColumns] = {};
};
function pgTableWithSchema(name, columns, extraConfig, schema2, baseName = name) {
  const rawTable = new PgTable$1(name, schema2, baseName);
  const parsedColumns = typeof columns === "function" ? columns(getPgColumnBuilders()) : columns;
  const builtColumns = Object.fromEntries(Object.entries(parsedColumns).map(([name2, colBuilderBase]) => {
    const colBuilder = colBuilderBase;
    colBuilder.setName(name2);
    const column = colBuilder.build(rawTable);
    rawTable[InlineForeignKeys$1].push(...colBuilder.buildForeignKeys(column, rawTable));
    return [name2, column];
  }));
  const builtColumnsForExtraConfig = Object.fromEntries(Object.entries(parsedColumns).map(([name2, colBuilderBase]) => {
    const colBuilder = colBuilderBase;
    colBuilder.setName(name2);
    const column = colBuilder.buildExtraConfigColumn(rawTable);
    return [name2, column];
  }));
  const table = Object.assign(rawTable, builtColumns);
  table[Table$1.Symbol.Columns] = builtColumns;
  table[Table$1.Symbol.ExtraConfigColumns] = builtColumnsForExtraConfig;
  if (extraConfig) {
    table[PgTable$1.Symbol.ExtraConfigBuilder] = extraConfig;
  }
  return Object.assign(table, {
    enableRLS: () => {
      table[PgTable$1.Symbol.EnableRLS] = true;
      return table;
    }
  });
}
const pgTable = (name, columns, extraConfig) => {
  return pgTableWithSchema(name, columns, extraConfig, void 0);
};
class PrimaryKeyBuilder {
  static [entityKind$1] = "PgPrimaryKeyBuilder";
  /** @internal */
  columns;
  /** @internal */
  name;
  constructor(columns, name) {
    this.columns = columns;
    this.name = name;
  }
  /** @internal */
  build(table) {
    return new PrimaryKey(table, this.columns, this.name);
  }
}
class PrimaryKey {
  constructor(table, columns, name) {
    this.table = table;
    this.columns = columns;
    this.name = name;
  }
  static [entityKind$1] = "PgPrimaryKey";
  columns;
  name;
  getName() {
    return this.name ?? `${this.table[PgTable$1.Symbol.Name]}_${this.columns.map((column) => column.name).join("_")}_pk`;
  }
}
function bindIfParam$1(value, column) {
  if (isDriverValueEncoder$1(column) && !isSQLWrapper$1(value) && !is$1(value, Param$1) && !is$1(value, Placeholder$1) && !is$1(value, Column$1) && !is$1(value, Table$1) && !is$1(value, View$1)) {
    return new Param$1(value, column);
  }
  return value;
}
const eq$1 = (left, right) => {
  return sql$1`${left} = ${bindIfParam$1(right, left)}`;
};
const ne = (left, right) => {
  return sql$1`${left} <> ${bindIfParam$1(right, left)}`;
};
function and(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter((c2) => c2 !== void 0);
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL$1(conditions);
  }
  return new SQL$1([new StringChunk$1("("), sql$1.join(conditions, new StringChunk$1(" and ")), new StringChunk$1(")")]);
}
function or(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter((c2) => c2 !== void 0);
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL$1(conditions);
  }
  return new SQL$1([new StringChunk$1("("), sql$1.join(conditions, new StringChunk$1(" or ")), new StringChunk$1(")")]);
}
function not(condition) {
  return sql$1`not ${condition}`;
}
const gt = (left, right) => {
  return sql$1`${left} > ${bindIfParam$1(right, left)}`;
};
const gte = (left, right) => {
  return sql$1`${left} >= ${bindIfParam$1(right, left)}`;
};
const lt = (left, right) => {
  return sql$1`${left} < ${bindIfParam$1(right, left)}`;
};
const lte = (left, right) => {
  return sql$1`${left} <= ${bindIfParam$1(right, left)}`;
};
function inArray(column, values2) {
  if (Array.isArray(values2)) {
    if (values2.length === 0) {
      return sql$1`false`;
    }
    return sql$1`${column} in ${values2.map((v2) => bindIfParam$1(v2, column))}`;
  }
  return sql$1`${column} in ${bindIfParam$1(values2, column)}`;
}
function notInArray(column, values2) {
  if (Array.isArray(values2)) {
    if (values2.length === 0) {
      return sql$1`true`;
    }
    return sql$1`${column} not in ${values2.map((v2) => bindIfParam$1(v2, column))}`;
  }
  return sql$1`${column} not in ${bindIfParam$1(values2, column)}`;
}
function isNull(value) {
  return sql$1`${value} is null`;
}
function isNotNull(value) {
  return sql$1`${value} is not null`;
}
function exists(subquery) {
  return sql$1`exists ${subquery}`;
}
function notExists(subquery) {
  return sql$1`not exists ${subquery}`;
}
function between(column, min, max) {
  return sql$1`${column} between ${bindIfParam$1(min, column)} and ${bindIfParam$1(max, column)}`;
}
function notBetween(column, min, max) {
  return sql$1`${column} not between ${bindIfParam$1(min, column)} and ${bindIfParam$1(max, column)}`;
}
function like(column, value) {
  return sql$1`${column} like ${value}`;
}
function notLike(column, value) {
  return sql$1`${column} not like ${value}`;
}
function ilike(column, value) {
  return sql$1`${column} ilike ${value}`;
}
function notIlike(column, value) {
  return sql$1`${column} not ilike ${value}`;
}
function asc$1(column) {
  return sql$1`${column} asc`;
}
function desc(column) {
  return sql$1`${column} desc`;
}
class Relation {
  constructor(sourceTable, referencedTable, relationName) {
    this.sourceTable = sourceTable;
    this.referencedTable = referencedTable;
    this.relationName = relationName;
    this.referencedTableName = referencedTable[Table$1.Symbol.Name];
  }
  static [entityKind$1] = "Relation";
  referencedTableName;
  fieldName;
}
class Relations {
  constructor(table, config2) {
    this.table = table;
    this.config = config2;
  }
  static [entityKind$1] = "Relations";
}
class One extends Relation {
  constructor(sourceTable, referencedTable, config2, isNullable) {
    super(sourceTable, referencedTable, config2?.relationName);
    this.config = config2;
    this.isNullable = isNullable;
  }
  static [entityKind$1] = "One";
  withFieldName(fieldName) {
    const relation = new One(this.sourceTable, this.referencedTable, this.config, this.isNullable);
    relation.fieldName = fieldName;
    return relation;
  }
}
class Many extends Relation {
  constructor(sourceTable, referencedTable, config2) {
    super(sourceTable, referencedTable, config2?.relationName);
    this.config = config2;
  }
  static [entityKind$1] = "Many";
  withFieldName(fieldName) {
    const relation = new Many(this.sourceTable, this.referencedTable, this.config);
    relation.fieldName = fieldName;
    return relation;
  }
}
function getOperators() {
  return {
    and,
    between,
    eq: eq$1,
    exists,
    gt,
    gte,
    ilike,
    inArray,
    isNull,
    isNotNull,
    like,
    lt,
    lte,
    ne,
    not,
    notBetween,
    notExists,
    notLike,
    notIlike,
    notInArray,
    or,
    sql: sql$1
  };
}
function getOrderByOperators() {
  return {
    sql: sql$1,
    asc: asc$1,
    desc
  };
}
function extractTablesRelationalConfig(schema2, configHelpers) {
  if (Object.keys(schema2).length === 1 && "default" in schema2 && !is$1(schema2["default"], Table$1)) {
    schema2 = schema2["default"];
  }
  const tableNamesMap = {};
  const relationsBuffer = {};
  const tablesConfig = {};
  for (const [key, value] of Object.entries(schema2)) {
    if (is$1(value, Table$1)) {
      const dbName = getTableUniqueName(value);
      const bufferedRelations = relationsBuffer[dbName];
      tableNamesMap[dbName] = key;
      tablesConfig[key] = {
        tsName: key,
        dbName: value[Table$1.Symbol.Name],
        schema: value[Table$1.Symbol.Schema],
        columns: value[Table$1.Symbol.Columns],
        relations: bufferedRelations?.relations ?? {},
        primaryKey: bufferedRelations?.primaryKey ?? []
      };
      for (const column of Object.values(value[Table$1.Symbol.Columns])) {
        if (column.primary) {
          tablesConfig[key].primaryKey.push(column);
        }
      }
      const extraConfig = value[Table$1.Symbol.ExtraConfigBuilder]?.(value[Table$1.Symbol.ExtraConfigColumns]);
      if (extraConfig) {
        for (const configEntry of Object.values(extraConfig)) {
          if (is$1(configEntry, PrimaryKeyBuilder)) {
            tablesConfig[key].primaryKey.push(...configEntry.columns);
          }
        }
      }
    } else if (is$1(value, Relations)) {
      const dbName = getTableUniqueName(value.table);
      const tableName = tableNamesMap[dbName];
      const relations2 = value.config(configHelpers(value.table));
      let primaryKey;
      for (const [relationName, relation] of Object.entries(relations2)) {
        if (tableName) {
          const tableConfig = tablesConfig[tableName];
          tableConfig.relations[relationName] = relation;
        } else {
          if (!(dbName in relationsBuffer)) {
            relationsBuffer[dbName] = {
              relations: {},
              primaryKey
            };
          }
          relationsBuffer[dbName].relations[relationName] = relation;
        }
      }
    }
  }
  return {
    tables: tablesConfig,
    tableNamesMap
  };
}
function relations(table, relations2) {
  return new Relations(table, (helpers) => Object.fromEntries(Object.entries(relations2(helpers)).map(([key, value]) => [key, value.withFieldName(key)])));
}
function createOne(sourceTable) {
  return function one(table, config2) {
    return new One(sourceTable, table, config2, config2?.fields.reduce((res, f2) => res && f2.notNull, true) ?? false);
  };
}
function createMany(sourceTable) {
  return function many(referencedTable, config2) {
    return new Many(sourceTable, referencedTable, config2);
  };
}
function normalizeRelation(schema2, tableNamesMap, relation) {
  if (is$1(relation, One) && relation.config) {
    return {
      fields: relation.config.fields,
      references: relation.config.references
    };
  }
  const referencedTableTsName = tableNamesMap[getTableUniqueName(relation.referencedTable)];
  if (!referencedTableTsName) {
    throw new Error(`Table "${relation.referencedTable[Table$1.Symbol.Name]}" not found in schema`);
  }
  const referencedTableConfig = schema2[referencedTableTsName];
  if (!referencedTableConfig) {
    throw new Error(`Table "${referencedTableTsName}" not found in schema`);
  }
  const sourceTable = relation.sourceTable;
  const sourceTableTsName = tableNamesMap[getTableUniqueName(sourceTable)];
  if (!sourceTableTsName) {
    throw new Error(`Table "${sourceTable[Table$1.Symbol.Name]}" not found in schema`);
  }
  const reverseRelations = [];
  for (const referencedTableRelation of Object.values(referencedTableConfig.relations)) {
    if (relation.relationName && relation !== referencedTableRelation && referencedTableRelation.relationName === relation.relationName || !relation.relationName && referencedTableRelation.referencedTable === relation.sourceTable) {
      reverseRelations.push(referencedTableRelation);
    }
  }
  if (reverseRelations.length > 1) {
    throw relation.relationName ? new Error(`There are multiple relations with name "${relation.relationName}" in table "${referencedTableTsName}"`) : new Error(`There are multiple relations between "${referencedTableTsName}" and "${relation.sourceTable[Table$1.Symbol.Name]}". Please specify relation name`);
  }
  if (reverseRelations[0] && is$1(reverseRelations[0], One) && reverseRelations[0].config) {
    return {
      fields: reverseRelations[0].config.references,
      references: reverseRelations[0].config.fields
    };
  }
  throw new Error(`There is not enough information to infer relation "${sourceTableTsName}.${relation.fieldName}"`);
}
function createTableRelationsHelpers(sourceTable) {
  return {
    one: createOne(sourceTable),
    many: createMany(sourceTable)
  };
}
function mapRelationalRow(tablesConfig, tableConfig, row, buildQueryResultSelection, mapColumnValue = (value) => value) {
  const result = {};
  for (const [selectionItemIndex, selectionItem] of buildQueryResultSelection.entries()) {
    if (selectionItem.isJson) {
      const relation = tableConfig.relations[selectionItem.tsKey];
      const rawSubRows = row[selectionItemIndex];
      const subRows = typeof rawSubRows === "string" ? JSON.parse(rawSubRows) : rawSubRows;
      result[selectionItem.tsKey] = is$1(relation, One) ? subRows && mapRelationalRow(tablesConfig, tablesConfig[selectionItem.relationTableTsKey], subRows, selectionItem.selection, mapColumnValue) : subRows.map((subRow) => mapRelationalRow(tablesConfig, tablesConfig[selectionItem.relationTableTsKey], subRow, selectionItem.selection, mapColumnValue));
    } else {
      const value = mapColumnValue(row[selectionItemIndex]);
      const field = selectionItem.field;
      let decoder;
      if (is$1(field, Column$1)) {
        decoder = field;
      } else if (is$1(field, SQL$1)) {
        decoder = field.decoder;
      } else {
        decoder = field.sql.decoder;
      }
      result[selectionItem.tsKey] = value === null ? null : decoder.mapFromDriverValue(value);
    }
  }
  return result;
}
class PgViewBase extends View$1 {
  static [entityKind$1] = "PgViewBase";
}
class PgDialect {
  static [entityKind$1] = "PgDialect";
  /** @internal */
  casing;
  constructor(config2) {
    this.casing = new CasingCache(config2?.casing);
  }
  async migrate(migrations, session, config2) {
    const migrationsTable = typeof config2 === "string" ? "__drizzle_migrations" : config2.migrationsTable ?? "__drizzle_migrations";
    const migrationsSchema = typeof config2 === "string" ? "drizzle" : config2.migrationsSchema ?? "drizzle";
    const migrationTableCreate = sql$1`
			CREATE TABLE IF NOT EXISTS ${sql$1.identifier(migrationsSchema)}.${sql$1.identifier(migrationsTable)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
    await session.execute(sql$1`CREATE SCHEMA IF NOT EXISTS ${sql$1.identifier(migrationsSchema)}`);
    await session.execute(migrationTableCreate);
    const dbMigrations = await session.all(sql$1`select id, hash, created_at from ${sql$1.identifier(migrationsSchema)}.${sql$1.identifier(migrationsTable)} order by created_at desc limit 1`);
    const lastDbMigration = dbMigrations[0];
    await session.transaction(async (tx) => {
      for await (const migration of migrations) {
        if (!lastDbMigration || Number(lastDbMigration.created_at) < migration.folderMillis) {
          for (const stmt of migration.sql) {
            await tx.execute(sql$1.raw(stmt));
          }
          await tx.execute(sql$1`insert into ${sql$1.identifier(migrationsSchema)}.${sql$1.identifier(migrationsTable)} ("hash", "created_at") values(${migration.hash}, ${migration.folderMillis})`);
        }
      }
    });
  }
  escapeName(name) {
    return `"${name}"`;
  }
  escapeParam(num) {
    return `$${num + 1}`;
  }
  escapeString(str) {
    return `'${str.replace(/'/g, "''")}'`;
  }
  buildWithCTE(queries) {
    if (!queries?.length) return void 0;
    const withSqlChunks = [sql$1`with `];
    for (const [i, w2] of queries.entries()) {
      withSqlChunks.push(sql$1`${sql$1.identifier(w2._.alias)} as (${w2._.sql})`);
      if (i < queries.length - 1) {
        withSqlChunks.push(sql$1`, `);
      }
    }
    withSqlChunks.push(sql$1` `);
    return sql$1.join(withSqlChunks);
  }
  buildDeleteQuery({
    table,
    where,
    returning,
    withList
  }) {
    const withSql = this.buildWithCTE(withList);
    const returningSql = returning ? sql$1` returning ${this.buildSelection(returning, {
      isSingleTable: true
    })}` : void 0;
    const whereSql = where ? sql$1` where ${where}` : void 0;
    return sql$1`${withSql}delete from ${table}${whereSql}${returningSql}`;
  }
  buildUpdateSet(table, set) {
    const tableColumns = table[Table$1.Symbol.Columns];
    const columnNames = Object.keys(tableColumns).filter((colName) => set[colName] !== void 0 || tableColumns[colName]?.onUpdateFn !== void 0);
    const setSize = columnNames.length;
    return sql$1.join(columnNames.flatMap((colName, i) => {
      const col = tableColumns[colName];
      const value = set[colName] ?? sql$1.param(col.onUpdateFn(), col);
      const res = sql$1`${sql$1.identifier(this.casing.getColumnCasing(col))} = ${value}`;
      if (i < setSize - 1) {
        return [res, sql$1.raw(", ")];
      }
      return [res];
    }));
  }
  buildUpdateQuery({
    table,
    set,
    where,
    returning,
    withList,
    from,
    joins
  }) {
    const withSql = this.buildWithCTE(withList);
    const tableName = table[PgTable$1.Symbol.Name];
    const tableSchema = table[PgTable$1.Symbol.Schema];
    const origTableName = table[PgTable$1.Symbol.OriginalName];
    const alias = tableName === origTableName ? void 0 : tableName;
    const tableSql = sql$1`${tableSchema ? sql$1`${sql$1.identifier(tableSchema)}.` : void 0}${sql$1.identifier(origTableName)}${alias && sql$1` ${sql$1.identifier(alias)}`}`;
    const setSql = this.buildUpdateSet(table, set);
    const fromSql = from && sql$1.join([sql$1.raw(" from "), this.buildFromTable(from)]);
    const joinsSql = this.buildJoins(joins);
    const returningSql = returning ? sql$1` returning ${this.buildSelection(returning, {
      isSingleTable: !from
    })}` : void 0;
    const whereSql = where ? sql$1` where ${where}` : void 0;
    return sql$1`${withSql}update ${tableSql} set ${setSql}${fromSql}${joinsSql}${whereSql}${returningSql}`;
  }
  /**
   * Builds selection SQL with provided fields/expressions
   *
   * Examples:
   *
   * `select <selection> from`
   *
   * `insert ... returning <selection>`
   *
   * If `isSingleTable` is true, then columns won't be prefixed with table name
   */
  buildSelection(fields, {
    isSingleTable = false
  } = {}) {
    const columnsLen = fields.length;
    const chunks = fields.flatMap(({
      field
    }, i) => {
      const chunk = [];
      if (is$1(field, SQL$1.Aliased) && field.isSelectionField) {
        chunk.push(sql$1.identifier(field.fieldAlias));
      } else if (is$1(field, SQL$1.Aliased) || is$1(field, SQL$1)) {
        const query = is$1(field, SQL$1.Aliased) ? field.sql : field;
        if (isSingleTable) {
          chunk.push(new SQL$1(query.queryChunks.map((c2) => {
            if (is$1(c2, PgColumn)) {
              return sql$1.identifier(this.casing.getColumnCasing(c2));
            }
            return c2;
          })));
        } else {
          chunk.push(query);
        }
        if (is$1(field, SQL$1.Aliased)) {
          chunk.push(sql$1` as ${sql$1.identifier(field.fieldAlias)}`);
        }
      } else if (is$1(field, Column$1)) {
        if (isSingleTable) {
          chunk.push(sql$1.identifier(this.casing.getColumnCasing(field)));
        } else {
          chunk.push(field);
        }
      }
      if (i < columnsLen - 1) {
        chunk.push(sql$1`, `);
      }
      return chunk;
    });
    return sql$1.join(chunks);
  }
  buildJoins(joins) {
    if (!joins || joins.length === 0) {
      return void 0;
    }
    const joinsArray = [];
    for (const [index2, joinMeta] of joins.entries()) {
      if (index2 === 0) {
        joinsArray.push(sql$1` `);
      }
      const table = joinMeta.table;
      const lateralSql = joinMeta.lateral ? sql$1` lateral` : void 0;
      const onSql = joinMeta.on ? sql$1` on ${joinMeta.on}` : void 0;
      if (is$1(table, PgTable$1)) {
        const tableName = table[PgTable$1.Symbol.Name];
        const tableSchema = table[PgTable$1.Symbol.Schema];
        const origTableName = table[PgTable$1.Symbol.OriginalName];
        const alias = tableName === origTableName ? void 0 : joinMeta.alias;
        joinsArray.push(sql$1`${sql$1.raw(joinMeta.joinType)} join${lateralSql} ${tableSchema ? sql$1`${sql$1.identifier(tableSchema)}.` : void 0}${sql$1.identifier(origTableName)}${alias && sql$1` ${sql$1.identifier(alias)}`}${onSql}`);
      } else if (is$1(table, View$1)) {
        const viewName = table[ViewBaseConfig$1].name;
        const viewSchema = table[ViewBaseConfig$1].schema;
        const origViewName = table[ViewBaseConfig$1].originalName;
        const alias = viewName === origViewName ? void 0 : joinMeta.alias;
        joinsArray.push(sql$1`${sql$1.raw(joinMeta.joinType)} join${lateralSql} ${viewSchema ? sql$1`${sql$1.identifier(viewSchema)}.` : void 0}${sql$1.identifier(origViewName)}${alias && sql$1` ${sql$1.identifier(alias)}`}${onSql}`);
      } else {
        joinsArray.push(sql$1`${sql$1.raw(joinMeta.joinType)} join${lateralSql} ${table}${onSql}`);
      }
      if (index2 < joins.length - 1) {
        joinsArray.push(sql$1` `);
      }
    }
    return sql$1.join(joinsArray);
  }
  buildFromTable(table) {
    if (is$1(table, Table$1) && table[Table$1.Symbol.IsAlias]) {
      let fullName = sql$1`${sql$1.identifier(table[Table$1.Symbol.OriginalName])}`;
      if (table[Table$1.Symbol.Schema]) {
        fullName = sql$1`${sql$1.identifier(table[Table$1.Symbol.Schema])}.${fullName}`;
      }
      return sql$1`${fullName} ${sql$1.identifier(table[Table$1.Symbol.Name])}`;
    }
    return table;
  }
  buildSelectQuery({
    withList,
    fields,
    fieldsFlat,
    where,
    having,
    table,
    joins,
    orderBy,
    groupBy,
    limit,
    offset,
    lockingClause,
    distinct,
    setOperators
  }) {
    const fieldsList = fieldsFlat ?? orderSelectedFields(fields);
    for (const f2 of fieldsList) {
      if (is$1(f2.field, Column$1) && getTableName(f2.field.table) !== (is$1(table, Subquery$1) ? table._.alias : is$1(table, PgViewBase) ? table[ViewBaseConfig$1].name : is$1(table, SQL$1) ? void 0 : getTableName(table)) && !((table2) => joins?.some(({
        alias
      }) => alias === (table2[Table$1.Symbol.IsAlias] ? getTableName(table2) : table2[Table$1.Symbol.BaseName])))(f2.field.table)) {
        const tableName = getTableName(f2.field.table);
        throw new Error(`Your "${f2.path.join("->")}" field references a column "${tableName}"."${f2.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`);
      }
    }
    const isSingleTable = !joins || joins.length === 0;
    const withSql = this.buildWithCTE(withList);
    let distinctSql;
    if (distinct) {
      distinctSql = distinct === true ? sql$1` distinct` : sql$1` distinct on (${sql$1.join(distinct.on, sql$1`, `)})`;
    }
    const selection = this.buildSelection(fieldsList, {
      isSingleTable
    });
    const tableSql = this.buildFromTable(table);
    const joinsSql = this.buildJoins(joins);
    const whereSql = where ? sql$1` where ${where}` : void 0;
    const havingSql = having ? sql$1` having ${having}` : void 0;
    let orderBySql;
    if (orderBy && orderBy.length > 0) {
      orderBySql = sql$1` order by ${sql$1.join(orderBy, sql$1`, `)}`;
    }
    let groupBySql;
    if (groupBy && groupBy.length > 0) {
      groupBySql = sql$1` group by ${sql$1.join(groupBy, sql$1`, `)}`;
    }
    const limitSql = typeof limit === "object" || typeof limit === "number" && limit >= 0 ? sql$1` limit ${limit}` : void 0;
    const offsetSql = offset ? sql$1` offset ${offset}` : void 0;
    const lockingClauseSql = sql$1.empty();
    if (lockingClause) {
      const clauseSql = sql$1` for ${sql$1.raw(lockingClause.strength)}`;
      if (lockingClause.config.of) {
        clauseSql.append(sql$1` of ${sql$1.join(Array.isArray(lockingClause.config.of) ? lockingClause.config.of : [lockingClause.config.of], sql$1`, `)}`);
      }
      if (lockingClause.config.noWait) {
        clauseSql.append(sql$1` nowait`);
      } else if (lockingClause.config.skipLocked) {
        clauseSql.append(sql$1` skip locked`);
      }
      lockingClauseSql.append(clauseSql);
    }
    const finalQuery = sql$1`${withSql}select${distinctSql} ${selection} from ${tableSql}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}${lockingClauseSql}`;
    if (setOperators.length > 0) {
      return this.buildSetOperations(finalQuery, setOperators);
    }
    return finalQuery;
  }
  buildSetOperations(leftSelect, setOperators) {
    const [setOperator, ...rest] = setOperators;
    if (!setOperator) {
      throw new Error("Cannot pass undefined values to any set operator");
    }
    if (rest.length === 0) {
      return this.buildSetOperationQuery({
        leftSelect,
        setOperator
      });
    }
    return this.buildSetOperations(this.buildSetOperationQuery({
      leftSelect,
      setOperator
    }), rest);
  }
  buildSetOperationQuery({
    leftSelect,
    setOperator: {
      type,
      isAll,
      rightSelect,
      limit,
      orderBy,
      offset
    }
  }) {
    const leftChunk = sql$1`(${leftSelect.getSQL()}) `;
    const rightChunk = sql$1`(${rightSelect.getSQL()})`;
    let orderBySql;
    if (orderBy && orderBy.length > 0) {
      const orderByValues = [];
      for (const singleOrderBy of orderBy) {
        if (is$1(singleOrderBy, PgColumn)) {
          orderByValues.push(sql$1.identifier(singleOrderBy.name));
        } else if (is$1(singleOrderBy, SQL$1)) {
          for (let i = 0; i < singleOrderBy.queryChunks.length; i++) {
            const chunk = singleOrderBy.queryChunks[i];
            if (is$1(chunk, PgColumn)) {
              singleOrderBy.queryChunks[i] = sql$1.identifier(chunk.name);
            }
          }
          orderByValues.push(sql$1`${singleOrderBy}`);
        } else {
          orderByValues.push(sql$1`${singleOrderBy}`);
        }
      }
      orderBySql = sql$1` order by ${sql$1.join(orderByValues, sql$1`, `)} `;
    }
    const limitSql = typeof limit === "object" || typeof limit === "number" && limit >= 0 ? sql$1` limit ${limit}` : void 0;
    const operatorChunk = sql$1.raw(`${type} ${isAll ? "all " : ""}`);
    const offsetSql = offset ? sql$1` offset ${offset}` : void 0;
    return sql$1`${leftChunk}${operatorChunk}${rightChunk}${orderBySql}${limitSql}${offsetSql}`;
  }
  buildInsertQuery({
    table,
    values: valuesOrSelect,
    onConflict,
    returning,
    withList,
    select: select2,
    overridingSystemValue_
  }) {
    const valuesSqlList = [];
    const columns = table[Table$1.Symbol.Columns];
    const colEntries = Object.entries(columns).filter(([_2, col]) => !col.shouldDisableInsert());
    const insertOrder = colEntries.map(([, column]) => sql$1.identifier(this.casing.getColumnCasing(column)));
    if (select2) {
      const select22 = valuesOrSelect;
      if (is$1(select22, SQL$1)) {
        valuesSqlList.push(select22);
      } else {
        valuesSqlList.push(select22.getSQL());
      }
    } else {
      const values2 = valuesOrSelect;
      valuesSqlList.push(sql$1.raw("values "));
      for (const [valueIndex, value] of values2.entries()) {
        const valueList = [];
        for (const [fieldName, col] of colEntries) {
          const colValue = value[fieldName];
          if (colValue === void 0 || is$1(colValue, Param$1) && colValue.value === void 0) {
            if (col.defaultFn !== void 0) {
              const defaultFnResult = col.defaultFn();
              const defaultValue = is$1(defaultFnResult, SQL$1) ? defaultFnResult : sql$1.param(defaultFnResult, col);
              valueList.push(defaultValue);
            } else if (!col.default && col.onUpdateFn !== void 0) {
              const onUpdateFnResult = col.onUpdateFn();
              const newValue = is$1(onUpdateFnResult, SQL$1) ? onUpdateFnResult : sql$1.param(onUpdateFnResult, col);
              valueList.push(newValue);
            } else {
              valueList.push(sql$1`default`);
            }
          } else {
            valueList.push(colValue);
          }
        }
        valuesSqlList.push(valueList);
        if (valueIndex < values2.length - 1) {
          valuesSqlList.push(sql$1`, `);
        }
      }
    }
    const withSql = this.buildWithCTE(withList);
    const valuesSql = sql$1.join(valuesSqlList);
    const returningSql = returning ? sql$1` returning ${this.buildSelection(returning, {
      isSingleTable: true
    })}` : void 0;
    const onConflictSql = onConflict ? sql$1` on conflict ${onConflict}` : void 0;
    const overridingSql = overridingSystemValue_ === true ? sql$1`overriding system value ` : void 0;
    return sql$1`${withSql}insert into ${table} ${insertOrder} ${overridingSql}${valuesSql}${onConflictSql}${returningSql}`;
  }
  buildRefreshMaterializedViewQuery({
    view,
    concurrently,
    withNoData
  }) {
    const concurrentlySql = concurrently ? sql$1` concurrently` : void 0;
    const withNoDataSql = withNoData ? sql$1` with no data` : void 0;
    return sql$1`refresh materialized view${concurrentlySql} ${view}${withNoDataSql}`;
  }
  prepareTyping(encoder) {
    if (is$1(encoder, PgJsonb) || is$1(encoder, PgJson)) {
      return "json";
    } else if (is$1(encoder, PgNumeric)) {
      return "decimal";
    } else if (is$1(encoder, PgTime)) {
      return "time";
    } else if (is$1(encoder, PgTimestamp) || is$1(encoder, PgTimestampString)) {
      return "timestamp";
    } else if (is$1(encoder, PgDate) || is$1(encoder, PgDateString)) {
      return "date";
    } else if (is$1(encoder, PgUUID)) {
      return "uuid";
    } else {
      return "none";
    }
  }
  sqlToQuery(sql2, invokeSource) {
    return sql2.toQuery({
      casing: this.casing,
      escapeName: this.escapeName,
      escapeParam: this.escapeParam,
      escapeString: this.escapeString,
      prepareTyping: this.prepareTyping,
      invokeSource
    });
  }
  // buildRelationalQueryWithPK({
  // 	fullSchema,
  // 	schema,
  // 	tableNamesMap,
  // 	table,
  // 	tableConfig,
  // 	queryConfig: config,
  // 	tableAlias,
  // 	isRoot = false,
  // 	joinOn,
  // }: {
  // 	fullSchema: Record<string, unknown>;
  // 	schema: TablesRelationalConfig;
  // 	tableNamesMap: Record<string, string>;
  // 	table: PgTable;
  // 	tableConfig: TableRelationalConfig;
  // 	queryConfig: true | DBQueryConfig<'many', true>;
  // 	tableAlias: string;
  // 	isRoot?: boolean;
  // 	joinOn?: SQL;
  // }): BuildRelationalQueryResult<PgTable, PgColumn> {
  // 	// For { "<relation>": true }, return a table with selection of all columns
  // 	if (config === true) {
  // 		const selectionEntries = Object.entries(tableConfig.columns);
  // 		const selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = selectionEntries.map((
  // 			[key, value],
  // 		) => ({
  // 			dbKey: value.name,
  // 			tsKey: key,
  // 			field: value as PgColumn,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 		return {
  // 			tableTsKey: tableConfig.tsName,
  // 			sql: table,
  // 			selection,
  // 		};
  // 	}
  // 	// let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
  // 	// let selectionForBuild = selection;
  // 	const aliasedColumns = Object.fromEntries(
  // 		Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)]),
  // 	);
  // 	const aliasedRelations = Object.fromEntries(
  // 		Object.entries(tableConfig.relations).map(([key, value]) => [key, aliasedRelation(value, tableAlias)]),
  // 	);
  // 	const aliasedFields = Object.assign({}, aliasedColumns, aliasedRelations);
  // 	let where, hasUserDefinedWhere;
  // 	if (config.where) {
  // 		const whereSql = typeof config.where === 'function' ? config.where(aliasedFields, operators) : config.where;
  // 		where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
  // 		hasUserDefinedWhere = !!where;
  // 	}
  // 	where = and(joinOn, where);
  // 	// const fieldsSelection: { tsKey: string; value: PgColumn | SQL.Aliased; isExtra?: boolean }[] = [];
  // 	let joins: Join[] = [];
  // 	let selectedColumns: string[] = [];
  // 	// Figure out which columns to select
  // 	if (config.columns) {
  // 		let isIncludeMode = false;
  // 		for (const [field, value] of Object.entries(config.columns)) {
  // 			if (value === undefined) {
  // 				continue;
  // 			}
  // 			if (field in tableConfig.columns) {
  // 				if (!isIncludeMode && value === true) {
  // 					isIncludeMode = true;
  // 				}
  // 				selectedColumns.push(field);
  // 			}
  // 		}
  // 		if (selectedColumns.length > 0) {
  // 			selectedColumns = isIncludeMode
  // 				? selectedColumns.filter((c) => config.columns?.[c] === true)
  // 				: Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
  // 		}
  // 	} else {
  // 		// Select all columns if selection is not specified
  // 		selectedColumns = Object.keys(tableConfig.columns);
  // 	}
  // 	// for (const field of selectedColumns) {
  // 	// 	const column = tableConfig.columns[field]! as PgColumn;
  // 	// 	fieldsSelection.push({ tsKey: field, value: column });
  // 	// }
  // 	let initiallySelectedRelations: {
  // 		tsKey: string;
  // 		queryConfig: true | DBQueryConfig<'many', false>;
  // 		relation: Relation;
  // 	}[] = [];
  // 	// let selectedRelations: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
  // 	// Figure out which relations to select
  // 	if (config.with) {
  // 		initiallySelectedRelations = Object.entries(config.with)
  // 			.filter((entry): entry is [typeof entry[0], NonNullable<typeof entry[1]>] => !!entry[1])
  // 			.map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey]! }));
  // 	}
  // 	const manyRelations = initiallySelectedRelations.filter((r) =>
  // 		is(r.relation, Many)
  // 		&& (schema[tableNamesMap[r.relation.referencedTable[Table.Symbol.Name]]!]?.primaryKey.length ?? 0) > 0
  // 	);
  // 	// If this is the last Many relation (or there are no Many relations), we are on the innermost subquery level
  // 	const isInnermostQuery = manyRelations.length < 2;
  // 	const selectedExtras: {
  // 		tsKey: string;
  // 		value: SQL.Aliased;
  // 	}[] = [];
  // 	// Figure out which extras to select
  // 	if (isInnermostQuery && config.extras) {
  // 		const extras = typeof config.extras === 'function'
  // 			? config.extras(aliasedFields, { sql })
  // 			: config.extras;
  // 		for (const [tsKey, value] of Object.entries(extras)) {
  // 			selectedExtras.push({
  // 				tsKey,
  // 				value: mapColumnsInAliasedSQLToAlias(value, tableAlias),
  // 			});
  // 		}
  // 	}
  // 	// Transform `fieldsSelection` into `selection`
  // 	// `fieldsSelection` shouldn't be used after this point
  // 	// for (const { tsKey, value, isExtra } of fieldsSelection) {
  // 	// 	selection.push({
  // 	// 		dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey]!.name,
  // 	// 		tsKey,
  // 	// 		field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
  // 	// 		relationTableTsKey: undefined,
  // 	// 		isJson: false,
  // 	// 		isExtra,
  // 	// 		selection: [],
  // 	// 	});
  // 	// }
  // 	let orderByOrig = typeof config.orderBy === 'function'
  // 		? config.orderBy(aliasedFields, orderByOperators)
  // 		: config.orderBy ?? [];
  // 	if (!Array.isArray(orderByOrig)) {
  // 		orderByOrig = [orderByOrig];
  // 	}
  // 	const orderBy = orderByOrig.map((orderByValue) => {
  // 		if (is(orderByValue, Column)) {
  // 			return aliasedTableColumn(orderByValue, tableAlias) as PgColumn;
  // 		}
  // 		return mapColumnsInSQLToAlias(orderByValue, tableAlias);
  // 	});
  // 	const limit = isInnermostQuery ? config.limit : undefined;
  // 	const offset = isInnermostQuery ? config.offset : undefined;
  // 	// For non-root queries without additional config except columns, return a table with selection
  // 	if (
  // 		!isRoot
  // 		&& initiallySelectedRelations.length === 0
  // 		&& selectedExtras.length === 0
  // 		&& !where
  // 		&& orderBy.length === 0
  // 		&& limit === undefined
  // 		&& offset === undefined
  // 	) {
  // 		return {
  // 			tableTsKey: tableConfig.tsName,
  // 			sql: table,
  // 			selection: selectedColumns.map((key) => ({
  // 				dbKey: tableConfig.columns[key]!.name,
  // 				tsKey: key,
  // 				field: tableConfig.columns[key] as PgColumn,
  // 				relationTableTsKey: undefined,
  // 				isJson: false,
  // 				selection: [],
  // 			})),
  // 		};
  // 	}
  // 	const selectedRelationsWithoutPK:
  // 	// Process all relations without primary keys, because they need to be joined differently and will all be on the same query level
  // 	for (
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationConfigValue,
  // 			relation,
  // 		} of initiallySelectedRelations
  // 	) {
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTable = schema[relationTableTsName]!;
  // 		if (relationTable.primaryKey.length > 0) {
  // 			continue;
  // 		}
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelation = this.buildRelationalQueryWithoutPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationConfigValue,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 			nestedQueryRelation: relation,
  // 		});
  // 		const field = sql`${sql.identifier(relationTableAlias)}.${sql.identifier('data')}`.as(selectedRelationTsKey);
  // 		joins.push({
  // 			on: sql`true`,
  // 			table: new Subquery(builtRelation.sql as SQL, {}, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: true,
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelation.selection,
  // 		});
  // 	}
  // 	const oneRelations = initiallySelectedRelations.filter((r): r is typeof r & { relation: One } =>
  // 		is(r.relation, One)
  // 	);
  // 	// Process all One relations with PKs, because they can all be joined on the same level
  // 	for (
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationConfigValue,
  // 			relation,
  // 		} of oneRelations
  // 	) {
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const relationTable = schema[relationTableTsName]!;
  // 		if (relationTable.primaryKey.length === 0) {
  // 			continue;
  // 		}
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelation = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationConfigValue,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 		});
  // 		const field = sql`case when ${sql.identifier(relationTableAlias)} is null then null else json_build_array(${
  // 			sql.join(
  // 				builtRelation.selection.map(({ field }) =>
  // 					is(field, SQL.Aliased)
  // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
  // 						: is(field, Column)
  // 						? aliasedTableColumn(field, relationTableAlias)
  // 						: field
  // 				),
  // 				sql`, `,
  // 			)
  // 		}) end`.as(selectedRelationTsKey);
  // 		const isLateralJoin = is(builtRelation.sql, SQL);
  // 		joins.push({
  // 			on: isLateralJoin ? sql`true` : joinOn,
  // 			table: is(builtRelation.sql, SQL)
  // 				? new Subquery(builtRelation.sql, {}, relationTableAlias)
  // 				: aliasedTable(builtRelation.sql, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: is(builtRelation.sql, SQL),
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelation.selection,
  // 		});
  // 	}
  // 	let distinct: PgSelectConfig['distinct'];
  // 	let tableFrom: PgTable | Subquery = table;
  // 	// Process first Many relation - each one requires a nested subquery
  // 	const manyRelation = manyRelations[0];
  // 	if (manyRelation) {
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationQueryConfig,
  // 			relation,
  // 		} = manyRelation;
  // 		distinct = {
  // 			on: tableConfig.primaryKey.map((c) => aliasedTableColumn(c as PgColumn, tableAlias)),
  // 		};
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelationJoin = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationQueryConfig,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 		});
  // 		const builtRelationSelectionField = sql`case when ${
  // 			sql.identifier(relationTableAlias)
  // 		} is null then '[]' else json_agg(json_build_array(${
  // 			sql.join(
  // 				builtRelationJoin.selection.map(({ field }) =>
  // 					is(field, SQL.Aliased)
  // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
  // 						: is(field, Column)
  // 						? aliasedTableColumn(field, relationTableAlias)
  // 						: field
  // 				),
  // 				sql`, `,
  // 			)
  // 		})) over (partition by ${sql.join(distinct.on, sql`, `)}) end`.as(selectedRelationTsKey);
  // 		const isLateralJoin = is(builtRelationJoin.sql, SQL);
  // 		joins.push({
  // 			on: isLateralJoin ? sql`true` : joinOn,
  // 			table: isLateralJoin
  // 				? new Subquery(builtRelationJoin.sql as SQL, {}, relationTableAlias)
  // 				: aliasedTable(builtRelationJoin.sql as PgTable, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: isLateralJoin,
  // 		});
  // 		// Build the "from" subquery with the remaining Many relations
  // 		const builtTableFrom = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table,
  // 			tableConfig,
  // 			queryConfig: {
  // 				...config,
  // 				where: undefined,
  // 				orderBy: undefined,
  // 				limit: undefined,
  // 				offset: undefined,
  // 				with: manyRelations.slice(1).reduce<NonNullable<typeof config['with']>>(
  // 					(result, { tsKey, queryConfig: configValue }) => {
  // 						result[tsKey] = configValue;
  // 						return result;
  // 					},
  // 					{},
  // 				),
  // 			},
  // 			tableAlias,
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field: builtRelationSelectionField,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelationJoin.selection,
  // 		});
  // 		// selection = builtTableFrom.selection.map((item) =>
  // 		// 	is(item.field, SQL.Aliased)
  // 		// 		? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
  // 		// 		: item
  // 		// );
  // 		// selectionForBuild = [{
  // 		// 	dbKey: '*',
  // 		// 	tsKey: '*',
  // 		// 	field: sql`${sql.identifier(tableAlias)}.*`,
  // 		// 	selection: [],
  // 		// 	isJson: false,
  // 		// 	relationTableTsKey: undefined,
  // 		// }];
  // 		// const newSelectionItem: (typeof selection)[number] = {
  // 		// 	dbKey: selectedRelationTsKey,
  // 		// 	tsKey: selectedRelationTsKey,
  // 		// 	field,
  // 		// 	relationTableTsKey: relationTableTsName,
  // 		// 	isJson: true,
  // 		// 	selection: builtRelationJoin.selection,
  // 		// };
  // 		// selection.push(newSelectionItem);
  // 		// selectionForBuild.push(newSelectionItem);
  // 		tableFrom = is(builtTableFrom.sql, PgTable)
  // 			? builtTableFrom.sql
  // 			: new Subquery(builtTableFrom.sql, {}, tableAlias);
  // 	}
  // 	if (selectedColumns.length === 0 && selectedRelations.length === 0 && selectedExtras.length === 0) {
  // 		throw new DrizzleError(`No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")`);
  // 	}
  // 	let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'];
  // 	function prepareSelectedColumns() {
  // 		return selectedColumns.map((key) => ({
  // 			dbKey: tableConfig.columns[key]!.name,
  // 			tsKey: key,
  // 			field: tableConfig.columns[key] as PgColumn,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 	}
  // 	function prepareSelectedExtras() {
  // 		return selectedExtras.map((item) => ({
  // 			dbKey: item.value.fieldAlias,
  // 			tsKey: item.tsKey,
  // 			field: item.value,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 	}
  // 	if (isRoot) {
  // 		selection = [
  // 			...prepareSelectedColumns(),
  // 			...prepareSelectedExtras(),
  // 		];
  // 	}
  // 	if (hasUserDefinedWhere || orderBy.length > 0) {
  // 		tableFrom = new Subquery(
  // 			this.buildSelectQuery({
  // 				table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
  // 				fields: {},
  // 				fieldsFlat: selectionForBuild.map(({ field }) => ({
  // 					path: [],
  // 					field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
  // 				})),
  // 				joins,
  // 				distinct,
  // 			}),
  // 			{},
  // 			tableAlias,
  // 		);
  // 		selectionForBuild = selection.map((item) =>
  // 			is(item.field, SQL.Aliased)
  // 				? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
  // 				: item
  // 		);
  // 		joins = [];
  // 		distinct = undefined;
  // 	}
  // 	const result = this.buildSelectQuery({
  // 		table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
  // 		fields: {},
  // 		fieldsFlat: selectionForBuild.map(({ field }) => ({
  // 			path: [],
  // 			field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
  // 		})),
  // 		where,
  // 		limit,
  // 		offset,
  // 		joins,
  // 		orderBy,
  // 		distinct,
  // 	});
  // 	return {
  // 		tableTsKey: tableConfig.tsName,
  // 		sql: result,
  // 		selection,
  // 	};
  // }
  buildRelationalQueryWithoutPK({
    fullSchema,
    schema: schema2,
    tableNamesMap,
    table,
    tableConfig,
    queryConfig: config2,
    tableAlias,
    nestedQueryRelation,
    joinOn
  }) {
    let selection = [];
    let limit, offset, orderBy = [], where;
    const joins = [];
    if (config2 === true) {
      const selectionEntries = Object.entries(tableConfig.columns);
      selection = selectionEntries.map(([key, value]) => ({
        dbKey: value.name,
        tsKey: key,
        field: aliasedTableColumn(value, tableAlias),
        relationTableTsKey: void 0,
        isJson: false,
        selection: []
      }));
    } else {
      const aliasedColumns = Object.fromEntries(Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)]));
      if (config2.where) {
        const whereSql = typeof config2.where === "function" ? config2.where(aliasedColumns, getOperators()) : config2.where;
        where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
      }
      const fieldsSelection = [];
      let selectedColumns = [];
      if (config2.columns) {
        let isIncludeMode = false;
        for (const [field, value] of Object.entries(config2.columns)) {
          if (value === void 0) {
            continue;
          }
          if (field in tableConfig.columns) {
            if (!isIncludeMode && value === true) {
              isIncludeMode = true;
            }
            selectedColumns.push(field);
          }
        }
        if (selectedColumns.length > 0) {
          selectedColumns = isIncludeMode ? selectedColumns.filter((c2) => config2.columns?.[c2] === true) : Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
        }
      } else {
        selectedColumns = Object.keys(tableConfig.columns);
      }
      for (const field of selectedColumns) {
        const column = tableConfig.columns[field];
        fieldsSelection.push({
          tsKey: field,
          value: column
        });
      }
      let selectedRelations = [];
      if (config2.with) {
        selectedRelations = Object.entries(config2.with).filter((entry) => !!entry[1]).map(([tsKey, queryConfig]) => ({
          tsKey,
          queryConfig,
          relation: tableConfig.relations[tsKey]
        }));
      }
      let extras;
      if (config2.extras) {
        extras = typeof config2.extras === "function" ? config2.extras(aliasedColumns, {
          sql: sql$1
        }) : config2.extras;
        for (const [tsKey, value] of Object.entries(extras)) {
          fieldsSelection.push({
            tsKey,
            value: mapColumnsInAliasedSQLToAlias(value, tableAlias)
          });
        }
      }
      for (const {
        tsKey,
        value
      } of fieldsSelection) {
        selection.push({
          dbKey: is$1(value, SQL$1.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey].name,
          tsKey,
          field: is$1(value, Column$1) ? aliasedTableColumn(value, tableAlias) : value,
          relationTableTsKey: void 0,
          isJson: false,
          selection: []
        });
      }
      let orderByOrig = typeof config2.orderBy === "function" ? config2.orderBy(aliasedColumns, getOrderByOperators()) : config2.orderBy ?? [];
      if (!Array.isArray(orderByOrig)) {
        orderByOrig = [orderByOrig];
      }
      orderBy = orderByOrig.map((orderByValue) => {
        if (is$1(orderByValue, Column$1)) {
          return aliasedTableColumn(orderByValue, tableAlias);
        }
        return mapColumnsInSQLToAlias(orderByValue, tableAlias);
      });
      limit = config2.limit;
      offset = config2.offset;
      for (const {
        tsKey: selectedRelationTsKey,
        queryConfig: selectedRelationConfigValue,
        relation
      } of selectedRelations) {
        const normalizedRelation = normalizeRelation(schema2, tableNamesMap, relation);
        const relationTableName = getTableUniqueName(relation.referencedTable);
        const relationTableTsName = tableNamesMap[relationTableName];
        const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
        const joinOn2 = and(...normalizedRelation.fields.map((field2, i) => eq$1(aliasedTableColumn(normalizedRelation.references[i], relationTableAlias), aliasedTableColumn(field2, tableAlias))));
        const builtRelation = this.buildRelationalQueryWithoutPK({
          fullSchema,
          schema: schema2,
          tableNamesMap,
          table: fullSchema[relationTableTsName],
          tableConfig: schema2[relationTableTsName],
          queryConfig: is$1(relation, One) ? selectedRelationConfigValue === true ? {
            limit: 1
          } : {
            ...selectedRelationConfigValue,
            limit: 1
          } : selectedRelationConfigValue,
          tableAlias: relationTableAlias,
          joinOn: joinOn2,
          nestedQueryRelation: relation
        });
        const field = sql$1`${sql$1.identifier(relationTableAlias)}.${sql$1.identifier("data")}`.as(selectedRelationTsKey);
        joins.push({
          on: sql$1`true`,
          table: new Subquery$1(builtRelation.sql, {}, relationTableAlias),
          alias: relationTableAlias,
          joinType: "left",
          lateral: true
        });
        selection.push({
          dbKey: selectedRelationTsKey,
          tsKey: selectedRelationTsKey,
          field,
          relationTableTsKey: relationTableTsName,
          isJson: true,
          selection: builtRelation.selection
        });
      }
    }
    if (selection.length === 0) {
      throw new DrizzleError({
        message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")`
      });
    }
    let result;
    where = and(joinOn, where);
    if (nestedQueryRelation) {
      let field = sql$1`json_build_array(${sql$1.join(selection.map(({
        field: field2,
        tsKey,
        isJson
      }) => isJson ? sql$1`${sql$1.identifier(`${tableAlias}_${tsKey}`)}.${sql$1.identifier("data")}` : is$1(field2, SQL$1.Aliased) ? field2.sql : field2), sql$1`, `)})`;
      if (is$1(nestedQueryRelation, Many)) {
        field = sql$1`coalesce(json_agg(${field}${orderBy.length > 0 ? sql$1` order by ${sql$1.join(orderBy, sql$1`, `)}` : void 0}), '[]'::json)`;
      }
      const nestedSelection = [{
        dbKey: "data",
        tsKey: "data",
        field: field.as("data"),
        isJson: true,
        relationTableTsKey: tableConfig.tsName,
        selection
      }];
      const needsSubquery = limit !== void 0 || offset !== void 0 || orderBy.length > 0;
      if (needsSubquery) {
        result = this.buildSelectQuery({
          table: aliasedTable(table, tableAlias),
          fields: {},
          fieldsFlat: [{
            path: [],
            field: sql$1.raw("*")
          }],
          where,
          limit,
          offset,
          orderBy,
          setOperators: []
        });
        where = void 0;
        limit = void 0;
        offset = void 0;
        orderBy = [];
      } else {
        result = aliasedTable(table, tableAlias);
      }
      result = this.buildSelectQuery({
        table: is$1(result, PgTable$1) ? result : new Subquery$1(result, {}, tableAlias),
        fields: {},
        fieldsFlat: nestedSelection.map(({
          field: field2
        }) => ({
          path: [],
          field: is$1(field2, Column$1) ? aliasedTableColumn(field2, tableAlias) : field2
        })),
        joins,
        where,
        limit,
        offset,
        orderBy,
        setOperators: []
      });
    } else {
      result = this.buildSelectQuery({
        table: aliasedTable(table, tableAlias),
        fields: {},
        fieldsFlat: selection.map(({
          field
        }) => ({
          path: [],
          field: is$1(field, Column$1) ? aliasedTableColumn(field, tableAlias) : field
        })),
        joins,
        where,
        limit,
        offset,
        orderBy,
        setOperators: []
      });
    }
    return {
      tableTsKey: tableConfig.tsName,
      sql: result,
      selection
    };
  }
}
class TypedQueryBuilder {
  static [entityKind$1] = "TypedQueryBuilder";
  /** @internal */
  getSelectedFields() {
    return this._.selectedFields;
  }
}
class PgSelectBuilder {
  static [entityKind$1] = "PgSelectBuilder";
  fields;
  session;
  dialect;
  withList = [];
  distinct;
  constructor(config2) {
    this.fields = config2.fields;
    this.session = config2.session;
    this.dialect = config2.dialect;
    if (config2.withList) {
      this.withList = config2.withList;
    }
    this.distinct = config2.distinct;
  }
  authToken;
  /** @internal */
  setToken(token) {
    this.authToken = token;
    return this;
  }
  /**
   * Specify the table, subquery, or other target that you're
   * building a select query against.
   *
   * {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FROM | Postgres from documentation}
   */
  from(source) {
    const isPartialSelect = !!this.fields;
    const src = source;
    let fields;
    if (this.fields) {
      fields = this.fields;
    } else if (is$1(src, Subquery$1)) {
      fields = Object.fromEntries(Object.keys(src._.selectedFields).map((key) => [key, src[key]]));
    } else if (is$1(src, PgViewBase)) {
      fields = src[ViewBaseConfig$1].selectedFields;
    } else if (is$1(src, SQL$1)) {
      fields = {};
    } else {
      fields = getTableColumns(src);
    }
    return new PgSelectBase({
      table: src,
      fields,
      isPartialSelect,
      session: this.session,
      dialect: this.dialect,
      withList: this.withList,
      distinct: this.distinct
    }).setToken(this.authToken);
  }
}
class PgSelectQueryBuilderBase extends TypedQueryBuilder {
  static [entityKind$1] = "PgSelectQueryBuilder";
  _;
  config;
  joinsNotNullableMap;
  tableName;
  isPartialSelect;
  session;
  dialect;
  constructor({
    table,
    fields,
    isPartialSelect,
    session,
    dialect,
    withList,
    distinct
  }) {
    super();
    this.config = {
      withList,
      table,
      fields: {
        ...fields
      },
      distinct,
      setOperators: []
    };
    this.isPartialSelect = isPartialSelect;
    this.session = session;
    this.dialect = dialect;
    this._ = {
      selectedFields: fields
    };
    this.tableName = getTableLikeName(table);
    this.joinsNotNullableMap = typeof this.tableName === "string" ? {
      [this.tableName]: true
    } : {};
  }
  createJoin(joinType, lateral) {
    return (table, on2) => {
      const baseTableName = this.tableName;
      const tableName = getTableLikeName(table);
      if (typeof tableName === "string" && this.config.joins?.some((join) => join.alias === tableName)) {
        throw new Error(`Alias "${tableName}" is already used in this query`);
      }
      if (!this.isPartialSelect) {
        if (Object.keys(this.joinsNotNullableMap).length === 1 && typeof baseTableName === "string") {
          this.config.fields = {
            [baseTableName]: this.config.fields
          };
        }
        if (typeof tableName === "string" && !is$1(table, SQL$1)) {
          const selection = is$1(table, Subquery$1) ? table._.selectedFields : is$1(table, View$1) ? table[ViewBaseConfig$1].selectedFields : table[Table$1.Symbol.Columns];
          this.config.fields[tableName] = selection;
        }
      }
      if (typeof on2 === "function") {
        on2 = on2(new Proxy(this.config.fields, new SelectionProxyHandler({
          sqlAliasedBehavior: "sql",
          sqlBehavior: "sql"
        })));
      }
      if (!this.config.joins) {
        this.config.joins = [];
      }
      this.config.joins.push({
        on: on2,
        table,
        joinType,
        alias: tableName,
        lateral
      });
      if (typeof tableName === "string") {
        switch (joinType) {
          case "left": {
            this.joinsNotNullableMap[tableName] = false;
            break;
          }
          case "right": {
            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
            this.joinsNotNullableMap[tableName] = true;
            break;
          }
          case "cross":
          case "inner": {
            this.joinsNotNullableMap[tableName] = true;
            break;
          }
          case "full": {
            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
            this.joinsNotNullableMap[tableName] = false;
            break;
          }
        }
      }
      return this;
    };
  }
  /**
   * Executes a `left join` operation by adding another table to the current query.
   *
   * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#left-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User; pets: Pet | null; }[] = await db.select()
   *   .from(users)
   *   .leftJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number | null; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .leftJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  leftJoin = this.createJoin("left", false);
  /**
   * Executes a `left join lateral` operation by adding subquery to the current query.
   *
   * A `lateral` join allows the right-hand expression to refer to columns from the left-hand side.
   *
   * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#left-join-lateral}
   *
   * @param table the subquery to join.
   * @param on the `on` clause.
   */
  leftJoinLateral = this.createJoin("left", true);
  /**
   * Executes a `right join` operation by adding another table to the current query.
   *
   * Calling this method associates each row of the joined table with the corresponding row from the main table, if a match is found. If no matching row exists, it sets all columns of the main table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#right-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User | null; pets: Pet; }[] = await db.select()
   *   .from(users)
   *   .rightJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number | null; petId: number; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .rightJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  rightJoin = this.createJoin("right", false);
  /**
   * Executes an `inner join` operation, creating a new table by combining rows from two tables that have matching values.
   *
   * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User; pets: Pet; }[] = await db.select()
   *   .from(users)
   *   .innerJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .innerJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  innerJoin = this.createJoin("inner", false);
  /**
   * Executes an `inner join lateral` operation, creating a new table by combining rows from two queries that have matching values.
   *
   * A `lateral` join allows the right-hand expression to refer to columns from the left-hand side.
   *
   * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join-lateral}
   *
   * @param table the subquery to join.
   * @param on the `on` clause.
   */
  innerJoinLateral = this.createJoin("inner", true);
  /**
   * Executes a `full join` operation by combining rows from two tables into a new table.
   *
   * Calling this method retrieves all rows from both main and joined tables, merging rows with matching values and filling in `null` for non-matching columns.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#full-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User | null; pets: Pet | null; }[] = await db.select()
   *   .from(users)
   *   .fullJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number | null; petId: number | null; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .fullJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  fullJoin = this.createJoin("full", false);
  /**
   * Executes a `cross join` operation by combining rows from two tables into a new table.
   *
   * Calling this method retrieves all rows from both main and joined tables, merging all rows from each table.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#cross-join}
   *
   * @param table the table to join.
   *
   * @example
   *
   * ```ts
   * // Select all users, each user with every pet
   * const usersWithPets: { user: User; pets: Pet; }[] = await db.select()
   *   .from(users)
   *   .crossJoin(pets)
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .crossJoin(pets)
   * ```
   */
  crossJoin = this.createJoin("cross", false);
  /**
   * Executes a `cross join lateral` operation by combining rows from two queries into a new table.
   *
   * A `lateral` join allows the right-hand expression to refer to columns from the left-hand side.
   *
   * Calling this method retrieves all rows from both main and joined queries, merging all rows from each query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#cross-join-lateral}
   *
   * @param table the query to join.
   */
  crossJoinLateral = this.createJoin("cross", true);
  createSetOperator(type, isAll) {
    return (rightSelection) => {
      const rightSelect = typeof rightSelection === "function" ? rightSelection(getPgSetOperators()) : rightSelection;
      if (!haveSameKeys(this.getSelectedFields(), rightSelect.getSelectedFields())) {
        throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
      }
      this.config.setOperators.push({
        type,
        isAll,
        rightSelect
      });
      return this;
    };
  }
  /**
   * Adds `union` set operator to the query.
   *
   * Calling this method will combine the result sets of the `select` statements and remove any duplicate rows that appear across them.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#union}
   *
   * @example
   *
   * ```ts
   * // Select all unique names from customers and users tables
   * await db.select({ name: users.name })
   *   .from(users)
   *   .union(
   *     db.select({ name: customers.name }).from(customers)
   *   );
   * // or
   * import { union } from 'drizzle-orm/pg-core'
   *
   * await union(
   *   db.select({ name: users.name }).from(users),
   *   db.select({ name: customers.name }).from(customers)
   * );
   * ```
   */
  union = this.createSetOperator("union", false);
  /**
   * Adds `union all` set operator to the query.
   *
   * Calling this method will combine the result-set of the `select` statements and keep all duplicate rows that appear across them.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#union-all}
   *
   * @example
   *
   * ```ts
   * // Select all transaction ids from both online and in-store sales
   * await db.select({ transaction: onlineSales.transactionId })
   *   .from(onlineSales)
   *   .unionAll(
   *     db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
   *   );
   * // or
   * import { unionAll } from 'drizzle-orm/pg-core'
   *
   * await unionAll(
   *   db.select({ transaction: onlineSales.transactionId }).from(onlineSales),
   *   db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
   * );
   * ```
   */
  unionAll = this.createSetOperator("union", true);
  /**
   * Adds `intersect` set operator to the query.
   *
   * Calling this method will retain only the rows that are present in both result sets and eliminate duplicates.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect}
   *
   * @example
   *
   * ```ts
   * // Select course names that are offered in both departments A and B
   * await db.select({ courseName: depA.courseName })
   *   .from(depA)
   *   .intersect(
   *     db.select({ courseName: depB.courseName }).from(depB)
   *   );
   * // or
   * import { intersect } from 'drizzle-orm/pg-core'
   *
   * await intersect(
   *   db.select({ courseName: depA.courseName }).from(depA),
   *   db.select({ courseName: depB.courseName }).from(depB)
   * );
   * ```
   */
  intersect = this.createSetOperator("intersect", false);
  /**
   * Adds `intersect all` set operator to the query.
   *
   * Calling this method will retain only the rows that are present in both result sets including all duplicates.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect-all}
   *
   * @example
   *
   * ```ts
   * // Select all products and quantities that are ordered by both regular and VIP customers
   * await db.select({
   *   productId: regularCustomerOrders.productId,
   *   quantityOrdered: regularCustomerOrders.quantityOrdered
   * })
   * .from(regularCustomerOrders)
   * .intersectAll(
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * // or
   * import { intersectAll } from 'drizzle-orm/pg-core'
   *
   * await intersectAll(
   *   db.select({
   *     productId: regularCustomerOrders.productId,
   *     quantityOrdered: regularCustomerOrders.quantityOrdered
   *   })
   *   .from(regularCustomerOrders),
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * ```
   */
  intersectAll = this.createSetOperator("intersect", true);
  /**
   * Adds `except` set operator to the query.
   *
   * Calling this method will retrieve all unique rows from the left query, except for the rows that are present in the result set of the right query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#except}
   *
   * @example
   *
   * ```ts
   * // Select all courses offered in department A but not in department B
   * await db.select({ courseName: depA.courseName })
   *   .from(depA)
   *   .except(
   *     db.select({ courseName: depB.courseName }).from(depB)
   *   );
   * // or
   * import { except } from 'drizzle-orm/pg-core'
   *
   * await except(
   *   db.select({ courseName: depA.courseName }).from(depA),
   *   db.select({ courseName: depB.courseName }).from(depB)
   * );
   * ```
   */
  except = this.createSetOperator("except", false);
  /**
   * Adds `except all` set operator to the query.
   *
   * Calling this method will retrieve all rows from the left query, except for the rows that are present in the result set of the right query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#except-all}
   *
   * @example
   *
   * ```ts
   * // Select all products that are ordered by regular customers but not by VIP customers
   * await db.select({
   *   productId: regularCustomerOrders.productId,
   *   quantityOrdered: regularCustomerOrders.quantityOrdered,
   * })
   * .from(regularCustomerOrders)
   * .exceptAll(
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered,
   *   })
   *   .from(vipCustomerOrders)
   * );
   * // or
   * import { exceptAll } from 'drizzle-orm/pg-core'
   *
   * await exceptAll(
   *   db.select({
   *     productId: regularCustomerOrders.productId,
   *     quantityOrdered: regularCustomerOrders.quantityOrdered
   *   })
   *   .from(regularCustomerOrders),
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * ```
   */
  exceptAll = this.createSetOperator("except", true);
  /** @internal */
  addSetOperators(setOperators) {
    this.config.setOperators.push(...setOperators);
    return this;
  }
  /**
   * Adds a `where` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#filtering}
   *
   * @param where the `where` clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be selected.
   *
   * ```ts
   * // Select all cars with green color
   * await db.select().from(cars).where(eq(cars.color, 'green'));
   * // or
   * await db.select().from(cars).where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Select all BMW cars with a green color
   * await db.select().from(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Select all cars with the green or blue color
   * await db.select().from(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(where) {
    if (typeof where === "function") {
      where = where(new Proxy(this.config.fields, new SelectionProxyHandler({
        sqlAliasedBehavior: "sql",
        sqlBehavior: "sql"
      })));
    }
    this.config.where = where;
    return this;
  }
  /**
   * Adds a `having` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition. It is typically used with aggregate functions to filter the aggregated data based on a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#aggregations}
   *
   * @param having the `having` clause.
   *
   * @example
   *
   * ```ts
   * // Select all brands with more than one car
   * await db.select({
   * 	brand: cars.brand,
   * 	count: sql<number>`cast(count(${cars.id}) as int)`,
   * })
   *   .from(cars)
   *   .groupBy(cars.brand)
   *   .having(({ count }) => gt(count, 1));
   * ```
   */
  having(having) {
    if (typeof having === "function") {
      having = having(new Proxy(this.config.fields, new SelectionProxyHandler({
        sqlAliasedBehavior: "sql",
        sqlBehavior: "sql"
      })));
    }
    this.config.having = having;
    return this;
  }
  groupBy(...columns) {
    if (typeof columns[0] === "function") {
      const groupBy = columns[0](new Proxy(this.config.fields, new SelectionProxyHandler({
        sqlAliasedBehavior: "alias",
        sqlBehavior: "sql"
      })));
      this.config.groupBy = Array.isArray(groupBy) ? groupBy : [groupBy];
    } else {
      this.config.groupBy = columns;
    }
    return this;
  }
  orderBy(...columns) {
    if (typeof columns[0] === "function") {
      const orderBy = columns[0](new Proxy(this.config.fields, new SelectionProxyHandler({
        sqlAliasedBehavior: "alias",
        sqlBehavior: "sql"
      })));
      const orderByArray = Array.isArray(orderBy) ? orderBy : [orderBy];
      if (this.config.setOperators.length > 0) {
        this.config.setOperators.at(-1).orderBy = orderByArray;
      } else {
        this.config.orderBy = orderByArray;
      }
    } else {
      const orderByArray = columns;
      if (this.config.setOperators.length > 0) {
        this.config.setOperators.at(-1).orderBy = orderByArray;
      } else {
        this.config.orderBy = orderByArray;
      }
    }
    return this;
  }
  /**
   * Adds a `limit` clause to the query.
   *
   * Calling this method will set the maximum number of rows that will be returned by this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param limit the `limit` clause.
   *
   * @example
   *
   * ```ts
   * // Get the first 10 people from this query.
   * await db.select().from(people).limit(10);
   * ```
   */
  limit(limit) {
    if (this.config.setOperators.length > 0) {
      this.config.setOperators.at(-1).limit = limit;
    } else {
      this.config.limit = limit;
    }
    return this;
  }
  /**
   * Adds an `offset` clause to the query.
   *
   * Calling this method will skip a number of rows when returning results from this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param offset the `offset` clause.
   *
   * @example
   *
   * ```ts
   * // Get the 10th-20th people from this query.
   * await db.select().from(people).offset(10).limit(10);
   * ```
   */
  offset(offset) {
    if (this.config.setOperators.length > 0) {
      this.config.setOperators.at(-1).offset = offset;
    } else {
      this.config.offset = offset;
    }
    return this;
  }
  /**
   * Adds a `for` clause to the query.
   *
   * Calling this method will specify a lock strength for this query that controls how strictly it acquires exclusive access to the rows being queried.
   *
   * See docs: {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE}
   *
   * @param strength the lock strength.
   * @param config the lock configuration.
   */
  for(strength, config2 = {}) {
    this.config.lockingClause = {
      strength,
      config: config2
    };
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildSelectQuery(this.config);
  }
  toSQL() {
    const {
      typings: _typings,
      ...rest
    } = this.dialect.sqlToQuery(this.getSQL());
    return rest;
  }
  as(alias) {
    return new Proxy(new Subquery$1(this.getSQL(), this.config.fields, alias), new SelectionProxyHandler({
      alias,
      sqlAliasedBehavior: "alias",
      sqlBehavior: "error"
    }));
  }
  /** @internal */
  getSelectedFields() {
    return new Proxy(this.config.fields, new SelectionProxyHandler({
      alias: this.tableName,
      sqlAliasedBehavior: "alias",
      sqlBehavior: "error"
    }));
  }
  $dynamic() {
    return this;
  }
}
class PgSelectBase extends PgSelectQueryBuilderBase {
  static [entityKind$1] = "PgSelect";
  /** @internal */
  _prepare(name) {
    const {
      session,
      config: config2,
      dialect,
      joinsNotNullableMap,
      authToken
    } = this;
    if (!session) {
      throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
    }
    return tracer$1.startActiveSpan("drizzle.prepareQuery", () => {
      const fieldsList = orderSelectedFields(config2.fields);
      const query = session.prepareQuery(dialect.sqlToQuery(this.getSQL()), fieldsList, name, true);
      query.joinsNotNullableMap = joinsNotNullableMap;
      return query.setToken(authToken);
    });
  }
  /**
   * Create a prepared statement for this query. This allows
   * the database to remember this query for the given session
   * and call it by name, rather than specifying the full query.
   *
   * {@link https://www.postgresql.org/docs/current/sql-prepare.html | Postgres prepare documentation}
   */
  prepare(name) {
    return this._prepare(name);
  }
  authToken;
  /** @internal */
  setToken(token) {
    this.authToken = token;
    return this;
  }
  execute = (placeholderValues) => {
    return tracer$1.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues, this.authToken);
    });
  };
}
applyMixins(PgSelectBase, [QueryPromise]);
function createSetOperator(type, isAll) {
  return (leftSelect, rightSelect, ...restSelects) => {
    const setOperators = [rightSelect, ...restSelects].map((select2) => ({
      type,
      isAll,
      rightSelect: select2
    }));
    for (const setOperator of setOperators) {
      if (!haveSameKeys(leftSelect.getSelectedFields(), setOperator.rightSelect.getSelectedFields())) {
        throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
      }
    }
    return leftSelect.addSetOperators(setOperators);
  };
}
const getPgSetOperators = () => ({
  union,
  unionAll,
  intersect,
  intersectAll,
  except,
  exceptAll
});
const union = createSetOperator("union", false);
const unionAll = createSetOperator("union", true);
const intersect = createSetOperator("intersect", false);
const intersectAll = createSetOperator("intersect", true);
const except = createSetOperator("except", false);
const exceptAll = createSetOperator("except", true);
class QueryBuilder {
  static [entityKind$1] = "PgQueryBuilder";
  dialect;
  dialectConfig;
  constructor(dialect) {
    this.dialect = is$1(dialect, PgDialect) ? dialect : void 0;
    this.dialectConfig = is$1(dialect, PgDialect) ? void 0 : dialect;
  }
  $with = (alias, selection) => {
    const queryBuilder = this;
    const as = (qb) => {
      if (typeof qb === "function") {
        qb = qb(queryBuilder);
      }
      return new Proxy(new WithSubquery(qb.getSQL(), selection ?? ("getSelectedFields" in qb ? qb.getSelectedFields() ?? {} : {}), alias, true), new SelectionProxyHandler({
        alias,
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error"
      }));
    };
    return {
      as
    };
  };
  with(...queries) {
    const self2 = this;
    function select2(fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: void 0,
        dialect: self2.getDialect(),
        withList: queries
      });
    }
    function selectDistinct(fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: void 0,
        dialect: self2.getDialect(),
        distinct: true
      });
    }
    function selectDistinctOn(on2, fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: void 0,
        dialect: self2.getDialect(),
        distinct: {
          on: on2
        }
      });
    }
    return {
      select: select2,
      selectDistinct,
      selectDistinctOn
    };
  }
  select(fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: void 0,
      dialect: this.getDialect()
    });
  }
  selectDistinct(fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: void 0,
      dialect: this.getDialect(),
      distinct: true
    });
  }
  selectDistinctOn(on2, fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: void 0,
      dialect: this.getDialect(),
      distinct: {
        on: on2
      }
    });
  }
  // Lazy load dialect to avoid circular dependency
  getDialect() {
    if (!this.dialect) {
      this.dialect = new PgDialect(this.dialectConfig);
    }
    return this.dialect;
  }
}
class PgInsertBuilder {
  constructor(table, session, dialect, withList, overridingSystemValue_) {
    this.table = table;
    this.session = session;
    this.dialect = dialect;
    this.withList = withList;
    this.overridingSystemValue_ = overridingSystemValue_;
  }
  static [entityKind$1] = "PgInsertBuilder";
  authToken;
  /** @internal */
  setToken(token) {
    this.authToken = token;
    return this;
  }
  overridingSystemValue() {
    this.overridingSystemValue_ = true;
    return this;
  }
  values(values2) {
    values2 = Array.isArray(values2) ? values2 : [values2];
    if (values2.length === 0) {
      throw new Error("values() must be called with at least one value");
    }
    const mappedValues = values2.map((entry) => {
      const result = {};
      const cols = this.table[Table$1.Symbol.Columns];
      for (const colKey of Object.keys(entry)) {
        const colValue = entry[colKey];
        result[colKey] = is$1(colValue, SQL$1) ? colValue : new Param$1(colValue, cols[colKey]);
      }
      return result;
    });
    return new PgInsertBase(this.table, mappedValues, this.session, this.dialect, this.withList, false, this.overridingSystemValue_).setToken(this.authToken);
  }
  select(selectQuery) {
    const select2 = typeof selectQuery === "function" ? selectQuery(new QueryBuilder()) : selectQuery;
    if (!is$1(select2, SQL$1) && !haveSameKeys(this.table[Columns$1], select2._.selectedFields)) {
      throw new Error("Insert select error: selected fields are not the same or are in a different order compared to the table definition");
    }
    return new PgInsertBase(this.table, select2, this.session, this.dialect, this.withList, true);
  }
}
class PgInsertBase extends QueryPromise {
  constructor(table, values2, session, dialect, withList, select2, overridingSystemValue_) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = {
      table,
      values: values2,
      withList,
      select: select2,
      overridingSystemValue_
    };
  }
  static [entityKind$1] = "PgInsert";
  config;
  returning(fields = this.config.table[Table$1.Symbol.Columns]) {
    this.config.returningFields = fields;
    this.config.returning = orderSelectedFields(fields);
    return this;
  }
  /**
   * Adds an `on conflict do nothing` clause to the query.
   *
   * Calling this method simply avoids inserting a row as its alternative action.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert#on-conflict-do-nothing}
   *
   * @param config The `target` and `where` clauses.
   *
   * @example
   * ```ts
   * // Insert one row and cancel the insert if there's a conflict
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoNothing();
   *
   * // Explicitly specify conflict target
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoNothing({ target: cars.id });
   * ```
   */
  onConflictDoNothing(config2 = {}) {
    if (config2.target === void 0) {
      this.config.onConflict = sql$1`do nothing`;
    } else {
      let targetColumn = "";
      targetColumn = Array.isArray(config2.target) ? config2.target.map((it) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(it))).join(",") : this.dialect.escapeName(this.dialect.casing.getColumnCasing(config2.target));
      const whereSql = config2.where ? sql$1` where ${config2.where}` : void 0;
      this.config.onConflict = sql$1`(${sql$1.raw(targetColumn)})${whereSql} do nothing`;
    }
    return this;
  }
  /**
   * Adds an `on conflict do update` clause to the query.
   *
   * Calling this method will update the existing row that conflicts with the row proposed for insertion as its alternative action.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert#upserts-and-conflicts}
   *
   * @param config The `target`, `set` and `where` clauses.
   *
   * @example
   * ```ts
   * // Update the row if there's a conflict
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoUpdate({
   *     target: cars.id,
   *     set: { brand: 'Porsche' }
   *   });
   *
   * // Upsert with 'where' clause
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoUpdate({
   *     target: cars.id,
   *     set: { brand: 'newBMW' },
   *     targetWhere: sql`${cars.createdAt} > '2023-01-01'::date`,
   *   });
   * ```
   */
  onConflictDoUpdate(config2) {
    if (config2.where && (config2.targetWhere || config2.setWhere)) {
      throw new Error('You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.');
    }
    const whereSql = config2.where ? sql$1` where ${config2.where}` : void 0;
    const targetWhereSql = config2.targetWhere ? sql$1` where ${config2.targetWhere}` : void 0;
    const setWhereSql = config2.setWhere ? sql$1` where ${config2.setWhere}` : void 0;
    const setSql = this.dialect.buildUpdateSet(this.config.table, mapUpdateSet(this.config.table, config2.set));
    let targetColumn = "";
    targetColumn = Array.isArray(config2.target) ? config2.target.map((it) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(it))).join(",") : this.dialect.escapeName(this.dialect.casing.getColumnCasing(config2.target));
    this.config.onConflict = sql$1`(${sql$1.raw(targetColumn)})${targetWhereSql} do update set ${setSql}${whereSql}${setWhereSql}`;
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildInsertQuery(this.config);
  }
  toSQL() {
    const {
      typings: _typings,
      ...rest
    } = this.dialect.sqlToQuery(this.getSQL());
    return rest;
  }
  /** @internal */
  _prepare(name) {
    return tracer$1.startActiveSpan("drizzle.prepareQuery", () => {
      return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name, true);
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  authToken;
  /** @internal */
  setToken(token) {
    this.authToken = token;
    return this;
  }
  execute = (placeholderValues) => {
    return tracer$1.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues, this.authToken);
    });
  };
  /** @internal */
  getSelectedFields() {
    return this.config.returningFields ? new Proxy(this.config.returningFields, new SelectionProxyHandler({
      alias: getTableName(this.config.table),
      sqlAliasedBehavior: "alias",
      sqlBehavior: "error"
    })) : void 0;
  }
  $dynamic() {
    return this;
  }
}
class PgRefreshMaterializedView extends QueryPromise {
  constructor(view, session, dialect) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = {
      view
    };
  }
  static [entityKind$1] = "PgRefreshMaterializedView";
  config;
  concurrently() {
    if (this.config.withNoData !== void 0) {
      throw new Error("Cannot use concurrently and withNoData together");
    }
    this.config.concurrently = true;
    return this;
  }
  withNoData() {
    if (this.config.concurrently !== void 0) {
      throw new Error("Cannot use concurrently and withNoData together");
    }
    this.config.withNoData = true;
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildRefreshMaterializedViewQuery(this.config);
  }
  toSQL() {
    const {
      typings: _typings,
      ...rest
    } = this.dialect.sqlToQuery(this.getSQL());
    return rest;
  }
  /** @internal */
  _prepare(name) {
    return tracer$1.startActiveSpan("drizzle.prepareQuery", () => {
      return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), void 0, name, true);
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  authToken;
  /** @internal */
  setToken(token) {
    this.authToken = token;
    return this;
  }
  execute = (placeholderValues) => {
    return tracer$1.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(placeholderValues, this.authToken);
    });
  };
}
class PgUpdateBuilder {
  constructor(table, session, dialect, withList) {
    this.table = table;
    this.session = session;
    this.dialect = dialect;
    this.withList = withList;
  }
  static [entityKind$1] = "PgUpdateBuilder";
  authToken;
  setToken(token) {
    this.authToken = token;
    return this;
  }
  set(values2) {
    return new PgUpdateBase(this.table, mapUpdateSet(this.table, values2), this.session, this.dialect, this.withList).setToken(this.authToken);
  }
}
class PgUpdateBase extends QueryPromise {
  constructor(table, set, session, dialect, withList) {
    super();
    this.session = session;
    this.dialect = dialect;
    this.config = {
      set,
      table,
      withList,
      joins: []
    };
    this.tableName = getTableLikeName(table);
    this.joinsNotNullableMap = typeof this.tableName === "string" ? {
      [this.tableName]: true
    } : {};
  }
  static [entityKind$1] = "PgUpdate";
  config;
  tableName;
  joinsNotNullableMap;
  from(source) {
    const src = source;
    const tableName = getTableLikeName(src);
    if (typeof tableName === "string") {
      this.joinsNotNullableMap[tableName] = true;
    }
    this.config.from = src;
    return this;
  }
  getTableLikeFields(table) {
    if (is$1(table, PgTable$1)) {
      return table[Table$1.Symbol.Columns];
    } else if (is$1(table, Subquery$1)) {
      return table._.selectedFields;
    }
    return table[ViewBaseConfig$1].selectedFields;
  }
  createJoin(joinType) {
    return (table, on2) => {
      const tableName = getTableLikeName(table);
      if (typeof tableName === "string" && this.config.joins.some((join) => join.alias === tableName)) {
        throw new Error(`Alias "${tableName}" is already used in this query`);
      }
      if (typeof on2 === "function") {
        const from = this.config.from && !is$1(this.config.from, SQL$1) ? this.getTableLikeFields(this.config.from) : void 0;
        on2 = on2(new Proxy(this.config.table[Table$1.Symbol.Columns], new SelectionProxyHandler({
          sqlAliasedBehavior: "sql",
          sqlBehavior: "sql"
        })), from && new Proxy(from, new SelectionProxyHandler({
          sqlAliasedBehavior: "sql",
          sqlBehavior: "sql"
        })));
      }
      this.config.joins.push({
        on: on2,
        table,
        joinType,
        alias: tableName
      });
      if (typeof tableName === "string") {
        switch (joinType) {
          case "left": {
            this.joinsNotNullableMap[tableName] = false;
            break;
          }
          case "right": {
            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
            this.joinsNotNullableMap[tableName] = true;
            break;
          }
          case "inner": {
            this.joinsNotNullableMap[tableName] = true;
            break;
          }
          case "full": {
            this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false]));
            this.joinsNotNullableMap[tableName] = false;
            break;
          }
        }
      }
      return this;
    };
  }
  leftJoin = this.createJoin("left");
  rightJoin = this.createJoin("right");
  innerJoin = this.createJoin("inner");
  fullJoin = this.createJoin("full");
  /**
   * Adds a 'where' clause to the query.
   *
   * Calling this method will update only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/update}
   *
   * @param where the 'where' clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be updated.
   *
   * ```ts
   * // Update all cars with green color
   * await db.update(cars).set({ color: 'red' })
   *   .where(eq(cars.color, 'green'));
   * // or
   * await db.update(cars).set({ color: 'red' })
   *   .where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Update all BMW cars with a green color
   * await db.update(cars).set({ color: 'red' })
   *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Update all cars with the green or blue color
   * await db.update(cars).set({ color: 'red' })
   *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(where) {
    this.config.where = where;
    return this;
  }
  returning(fields) {
    if (!fields) {
      fields = Object.assign({}, this.config.table[Table$1.Symbol.Columns]);
      if (this.config.from) {
        const tableName = getTableLikeName(this.config.from);
        if (typeof tableName === "string" && this.config.from && !is$1(this.config.from, SQL$1)) {
          const fromFields = this.getTableLikeFields(this.config.from);
          fields[tableName] = fromFields;
        }
        for (const join of this.config.joins) {
          const tableName2 = getTableLikeName(join.table);
          if (typeof tableName2 === "string" && !is$1(join.table, SQL$1)) {
            const fromFields = this.getTableLikeFields(join.table);
            fields[tableName2] = fromFields;
          }
        }
      }
    }
    this.config.returningFields = fields;
    this.config.returning = orderSelectedFields(fields);
    return this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildUpdateQuery(this.config);
  }
  toSQL() {
    const {
      typings: _typings,
      ...rest
    } = this.dialect.sqlToQuery(this.getSQL());
    return rest;
  }
  /** @internal */
  _prepare(name) {
    const query = this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name, true);
    query.joinsNotNullableMap = this.joinsNotNullableMap;
    return query;
  }
  prepare(name) {
    return this._prepare(name);
  }
  authToken;
  /** @internal */
  setToken(token) {
    this.authToken = token;
    return this;
  }
  execute = (placeholderValues) => {
    return this._prepare().execute(placeholderValues, this.authToken);
  };
  /** @internal */
  getSelectedFields() {
    return this.config.returningFields ? new Proxy(this.config.returningFields, new SelectionProxyHandler({
      alias: getTableName(this.config.table),
      sqlAliasedBehavior: "alias",
      sqlBehavior: "error"
    })) : void 0;
  }
  $dynamic() {
    return this;
  }
}
class PgCountBuilder extends SQL$1 {
  constructor(params) {
    super(PgCountBuilder.buildEmbeddedCount(params.source, params.filters).queryChunks);
    this.params = params;
    this.mapWith(Number);
    this.session = params.session;
    this.sql = PgCountBuilder.buildCount(params.source, params.filters);
  }
  sql;
  token;
  static [entityKind$1] = "PgCountBuilder";
  [Symbol.toStringTag] = "PgCountBuilder";
  session;
  static buildEmbeddedCount(source, filters) {
    return sql$1`(select count(*) from ${source}${sql$1.raw(" where ").if(filters)}${filters})`;
  }
  static buildCount(source, filters) {
    return sql$1`select count(*) as count from ${source}${sql$1.raw(" where ").if(filters)}${filters};`;
  }
  /** @intrnal */
  setToken(token) {
    this.token = token;
    return this;
  }
  then(onfulfilled, onrejected) {
    return Promise.resolve(this.session.count(this.sql, this.token)).then(onfulfilled, onrejected);
  }
  catch(onRejected) {
    return this.then(void 0, onRejected);
  }
  finally(onFinally) {
    return this.then((value) => {
      onFinally?.();
      return value;
    }, (reason) => {
      onFinally?.();
      throw reason;
    });
  }
}
class RelationalQueryBuilder {
  constructor(fullSchema, schema2, tableNamesMap, table, tableConfig, dialect, session) {
    this.fullSchema = fullSchema;
    this.schema = schema2;
    this.tableNamesMap = tableNamesMap;
    this.table = table;
    this.tableConfig = tableConfig;
    this.dialect = dialect;
    this.session = session;
  }
  static [entityKind$1] = "PgRelationalQueryBuilder";
  findMany(config2) {
    return new PgRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, config2 ? config2 : {}, "many");
  }
  findFirst(config2) {
    return new PgRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, config2 ? {
      ...config2,
      limit: 1
    } : {
      limit: 1
    }, "first");
  }
}
class PgRelationalQuery extends QueryPromise {
  constructor(fullSchema, schema2, tableNamesMap, table, tableConfig, dialect, session, config2, mode) {
    super();
    this.fullSchema = fullSchema;
    this.schema = schema2;
    this.tableNamesMap = tableNamesMap;
    this.table = table;
    this.tableConfig = tableConfig;
    this.dialect = dialect;
    this.session = session;
    this.config = config2;
    this.mode = mode;
  }
  static [entityKind$1] = "PgRelationalQuery";
  /** @internal */
  _prepare(name) {
    return tracer$1.startActiveSpan("drizzle.prepareQuery", () => {
      const {
        query,
        builtQuery
      } = this._toSQL();
      return this.session.prepareQuery(builtQuery, void 0, name, true, (rawRows, mapColumnValue) => {
        const rows = rawRows.map((row) => mapRelationalRow(this.schema, this.tableConfig, row, query.selection, mapColumnValue));
        if (this.mode === "first") {
          return rows[0];
        }
        return rows;
      });
    });
  }
  prepare(name) {
    return this._prepare(name);
  }
  _getQuery() {
    return this.dialect.buildRelationalQueryWithoutPK({
      fullSchema: this.fullSchema,
      schema: this.schema,
      tableNamesMap: this.tableNamesMap,
      table: this.table,
      tableConfig: this.tableConfig,
      queryConfig: this.config,
      tableAlias: this.tableConfig.tsName
    });
  }
  /** @internal */
  getSQL() {
    return this._getQuery().sql;
  }
  _toSQL() {
    const query = this._getQuery();
    const builtQuery = this.dialect.sqlToQuery(query.sql);
    return {
      query,
      builtQuery
    };
  }
  toSQL() {
    return this._toSQL().builtQuery;
  }
  authToken;
  /** @internal */
  setToken(token) {
    this.authToken = token;
    return this;
  }
  execute() {
    return tracer$1.startActiveSpan("drizzle.operation", () => {
      return this._prepare().execute(void 0, this.authToken);
    });
  }
}
class PgRaw extends QueryPromise {
  constructor(execute, sql2, query, mapBatchResult) {
    super();
    this.execute = execute;
    this.sql = sql2;
    this.query = query;
    this.mapBatchResult = mapBatchResult;
  }
  static [entityKind$1] = "PgRaw";
  /** @internal */
  getSQL() {
    return this.sql;
  }
  getQuery() {
    return this.query;
  }
  mapResult(result, isFromBatch) {
    return isFromBatch ? this.mapBatchResult(result) : result;
  }
  _prepare() {
    return this;
  }
  /** @internal */
  isResponseInArrayMode() {
    return false;
  }
}
class PgDatabase {
  constructor(dialect, session, schema2) {
    this.dialect = dialect;
    this.session = session;
    this._ = schema2 ? {
      schema: schema2.schema,
      fullSchema: schema2.fullSchema,
      tableNamesMap: schema2.tableNamesMap,
      session
    } : {
      schema: void 0,
      fullSchema: {},
      tableNamesMap: {},
      session
    };
    this.query = {};
    if (this._.schema) {
      for (const [tableName, columns] of Object.entries(this._.schema)) {
        this.query[tableName] = new RelationalQueryBuilder(schema2.fullSchema, this._.schema, this._.tableNamesMap, schema2.fullSchema[tableName], columns, dialect, session);
      }
    }
  }
  static [entityKind$1] = "PgDatabase";
  query;
  /**
   * Creates a subquery that defines a temporary named result set as a CTE.
   *
   * It is useful for breaking down complex queries into simpler parts and for reusing the result set in subsequent parts of the query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
   *
   * @param alias The alias for the subquery.
   *
   * Failure to provide an alias will result in a DrizzleTypeError, preventing the subquery from being referenced in other queries.
   *
   * @example
   *
   * ```ts
   * // Create a subquery with alias 'sq' and use it in the select query
   * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
   *
   * const result = await db.with(sq).select().from(sq);
   * ```
   *
   * To select arbitrary SQL values as fields in a CTE and reference them in other CTEs or in the main query, you need to add aliases to them:
   *
   * ```ts
   * // Select an arbitrary SQL value as a field in a CTE and reference it in the main query
   * const sq = db.$with('sq').as(db.select({
   *   name: sql<string>`upper(${users.name})`.as('name'),
   * })
   * .from(users));
   *
   * const result = await db.with(sq).select({ name: sq.name }).from(sq);
   * ```
   */
  $with = (alias, selection) => {
    const self2 = this;
    const as = (qb) => {
      if (typeof qb === "function") {
        qb = qb(new QueryBuilder(self2.dialect));
      }
      return new Proxy(new WithSubquery(qb.getSQL(), selection ?? ("getSelectedFields" in qb ? qb.getSelectedFields() ?? {} : {}), alias, true), new SelectionProxyHandler({
        alias,
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error"
      }));
    };
    return {
      as
    };
  };
  $count(source, filters) {
    return new PgCountBuilder({
      source,
      filters,
      session: this.session
    });
  }
  /**
   * Incorporates a previously defined CTE (using `$with`) into the main query.
   *
   * This method allows the main query to reference a temporary named result set.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
   *
   * @param queries The CTEs to incorporate into the main query.
   *
   * @example
   *
   * ```ts
   * // Define a subquery 'sq' as a CTE using $with
   * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
   *
   * // Incorporate the CTE 'sq' into the main query and select from it
   * const result = await db.with(sq).select().from(sq);
   * ```
   */
  with(...queries) {
    const self2 = this;
    function select2(fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: self2.session,
        dialect: self2.dialect,
        withList: queries
      });
    }
    function selectDistinct(fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: self2.session,
        dialect: self2.dialect,
        withList: queries,
        distinct: true
      });
    }
    function selectDistinctOn(on2, fields) {
      return new PgSelectBuilder({
        fields: fields ?? void 0,
        session: self2.session,
        dialect: self2.dialect,
        withList: queries,
        distinct: {
          on: on2
        }
      });
    }
    function update2(table) {
      return new PgUpdateBuilder(table, self2.session, self2.dialect, queries);
    }
    function insert(table) {
      return new PgInsertBuilder(table, self2.session, self2.dialect, queries);
    }
    function delete_(table) {
      return new PgDeleteBase(table, self2.session, self2.dialect, queries);
    }
    return {
      select: select2,
      selectDistinct,
      selectDistinctOn,
      update: update2,
      insert,
      delete: delete_
    };
  }
  select(fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: this.session,
      dialect: this.dialect
    });
  }
  selectDistinct(fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: this.session,
      dialect: this.dialect,
      distinct: true
    });
  }
  selectDistinctOn(on2, fields) {
    return new PgSelectBuilder({
      fields: fields ?? void 0,
      session: this.session,
      dialect: this.dialect,
      distinct: {
        on: on2
      }
    });
  }
  /**
   * Creates an update query.
   *
   * Calling this method without `.where()` clause will update all rows in a table. The `.where()` clause specifies which rows should be updated.
   *
   * Use `.set()` method to specify which values to update.
   *
   * See docs: {@link https://orm.drizzle.team/docs/update}
   *
   * @param table The table to update.
   *
   * @example
   *
   * ```ts
   * // Update all rows in the 'cars' table
   * await db.update(cars).set({ color: 'red' });
   *
   * // Update rows with filters and conditions
   * await db.update(cars).set({ color: 'red' }).where(eq(cars.brand, 'BMW'));
   *
   * // Update with returning clause
   * const updatedCar: Car[] = await db.update(cars)
   *   .set({ color: 'red' })
   *   .where(eq(cars.id, 1))
   *   .returning();
   * ```
   */
  update(table) {
    return new PgUpdateBuilder(table, this.session, this.dialect);
  }
  /**
   * Creates an insert query.
   *
   * Calling this method will create new rows in a table. Use `.values()` method to specify which values to insert.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert}
   *
   * @param table The table to insert into.
   *
   * @example
   *
   * ```ts
   * // Insert one row
   * await db.insert(cars).values({ brand: 'BMW' });
   *
   * // Insert multiple rows
   * await db.insert(cars).values([{ brand: 'BMW' }, { brand: 'Porsche' }]);
   *
   * // Insert with returning clause
   * const insertedCar: Car[] = await db.insert(cars)
   *   .values({ brand: 'BMW' })
   *   .returning();
   * ```
   */
  insert(table) {
    return new PgInsertBuilder(table, this.session, this.dialect);
  }
  /**
   * Creates a delete query.
   *
   * Calling this method without `.where()` clause will delete all rows in a table. The `.where()` clause specifies which rows should be deleted.
   *
   * See docs: {@link https://orm.drizzle.team/docs/delete}
   *
   * @param table The table to delete from.
   *
   * @example
   *
   * ```ts
   * // Delete all rows in the 'cars' table
   * await db.delete(cars);
   *
   * // Delete rows with filters and conditions
   * await db.delete(cars).where(eq(cars.color, 'green'));
   *
   * // Delete with returning clause
   * const deletedCar: Car[] = await db.delete(cars)
   *   .where(eq(cars.id, 1))
   *   .returning();
   * ```
   */
  delete(table) {
    return new PgDeleteBase(table, this.session, this.dialect);
  }
  refreshMaterializedView(view) {
    return new PgRefreshMaterializedView(view, this.session, this.dialect);
  }
  authToken;
  execute(query) {
    const sequel = typeof query === "string" ? sql$1.raw(query) : query.getSQL();
    const builtQuery = this.dialect.sqlToQuery(sequel);
    const prepared = this.session.prepareQuery(builtQuery, void 0, void 0, false);
    return new PgRaw(() => prepared.execute(void 0, this.authToken), sequel, builtQuery, (result) => prepared.mapResult(result, true));
  }
  transaction(transaction, config2) {
    return this.session.transaction(transaction, config2);
  }
}
class IndexBuilderOn {
  constructor(unique, name) {
    this.unique = unique;
    this.name = name;
  }
  static [entityKind$1] = "PgIndexBuilderOn";
  on(...columns) {
    return new IndexBuilder(columns.map((it) => {
      if (is$1(it, SQL$1)) {
        return it;
      }
      it = it;
      const clonedIndexedColumn = new IndexedColumn(it.name, !!it.keyAsName, it.columnType, it.indexConfig);
      it.indexConfig = JSON.parse(JSON.stringify(it.defaultConfig));
      return clonedIndexedColumn;
    }), this.unique, false, this.name);
  }
  onOnly(...columns) {
    return new IndexBuilder(columns.map((it) => {
      if (is$1(it, SQL$1)) {
        return it;
      }
      it = it;
      const clonedIndexedColumn = new IndexedColumn(it.name, !!it.keyAsName, it.columnType, it.indexConfig);
      it.indexConfig = it.defaultConfig;
      return clonedIndexedColumn;
    }), this.unique, true, this.name);
  }
  /**
   * Specify what index method to use. Choices are `btree`, `hash`, `gist`, `spgist`, `gin`, `brin`, or user-installed access methods like `bloom`. The default method is `btree.
   *
   * If you have the `pg_vector` extension installed in your database, you can use the `hnsw` and `ivfflat` options, which are predefined types.
   *
   * **You can always specify any string you want in the method, in case Drizzle doesn't have it natively in its types**
   *
   * @param method The name of the index method to be used
   * @param columns
   * @returns
   */
  using(method, ...columns) {
    return new IndexBuilder(columns.map((it) => {
      if (is$1(it, SQL$1)) {
        return it;
      }
      it = it;
      const clonedIndexedColumn = new IndexedColumn(it.name, !!it.keyAsName, it.columnType, it.indexConfig);
      it.indexConfig = JSON.parse(JSON.stringify(it.defaultConfig));
      return clonedIndexedColumn;
    }), this.unique, true, this.name, method);
  }
}
class IndexBuilder {
  static [entityKind$1] = "PgIndexBuilder";
  /** @internal */
  config;
  constructor(columns, unique, only, name, method = "btree") {
    this.config = {
      name,
      columns,
      unique,
      only,
      method
    };
  }
  concurrently() {
    this.config.concurrently = true;
    return this;
  }
  with(obj) {
    this.config.with = obj;
    return this;
  }
  where(condition) {
    this.config.where = condition;
    return this;
  }
  /** @internal */
  build(table) {
    return new Index(this.config, table);
  }
}
class Index {
  static [entityKind$1] = "PgIndex";
  config;
  constructor(config2, table) {
    this.config = {
      ...config2,
      table
    };
  }
}
function index(name) {
  return new IndexBuilderOn(false, name);
}
class PgPreparedQuery {
  constructor(query) {
    this.query = query;
  }
  authToken;
  getQuery() {
    return this.query;
  }
  mapResult(response, _isFromBatch) {
    return response;
  }
  /** @internal */
  setToken(token) {
    this.authToken = token;
    return this;
  }
  static [entityKind$1] = "PgPreparedQuery";
  /** @internal */
  joinsNotNullableMap;
}
class PgSession {
  constructor(dialect) {
    this.dialect = dialect;
  }
  static [entityKind$1] = "PgSession";
  /** @internal */
  execute(query, token) {
    return tracer$1.startActiveSpan("drizzle.operation", () => {
      const prepared = tracer$1.startActiveSpan("drizzle.prepareQuery", () => {
        return this.prepareQuery(this.dialect.sqlToQuery(query), void 0, void 0, false);
      });
      return prepared.setToken(token).execute(void 0, token);
    });
  }
  all(query) {
    return this.prepareQuery(this.dialect.sqlToQuery(query), void 0, void 0, false).all();
  }
  /** @internal */
  async count(sql2, token) {
    const res = await this.execute(sql2, token);
    return Number(res[0]["count"]);
  }
}
class PgTransaction extends PgDatabase {
  constructor(dialect, session, schema2, nestedIndex = 0) {
    super(dialect, session, schema2);
    this.schema = schema2;
    this.nestedIndex = nestedIndex;
  }
  static [entityKind$1] = "PgTransaction";
  rollback() {
    throw new TransactionRollbackError();
  }
  /** @internal */
  getTransactionConfigSQL(config2) {
    const chunks = [];
    if (config2.isolationLevel) {
      chunks.push(`isolation level ${config2.isolationLevel}`);
    }
    if (config2.accessMode) {
      chunks.push(config2.accessMode);
    }
    if (typeof config2.deferrable === "boolean") {
      chunks.push(config2.deferrable ? "deferrable" : "not deferrable");
    }
    return sql$1.raw(chunks.join(" "));
  }
  setTransaction(config2) {
    return this.session.execute(sql$1`set transaction ${this.getTransactionConfigSQL(config2)}`);
  }
}
class ConsoleLogWriter {
  static [entityKind$1] = "ConsoleLogWriter";
  write(message) {
    console.log(message);
  }
}
class DefaultLogger {
  static [entityKind$1] = "DefaultLogger";
  writer;
  constructor(config2) {
    this.writer = config2?.writer ?? new ConsoleLogWriter();
  }
  logQuery(query, params) {
    const stringifiedParams = params.map((p2) => {
      try {
        return JSON.stringify(p2);
      } catch {
        return String(p2);
      }
    });
    const paramsStr = stringifiedParams.length ? ` -- params: [${stringifiedParams.join(", ")}]` : "";
    this.writer.write(`Query: ${query}${paramsStr}`);
  }
}
class NoopLogger {
  static [entityKind$1] = "NoopLogger";
  logQuery() {
  }
}
const sites = pgTable("sites", {
  id: varchar("id", {
    length: 21
  }).primaryKey(),
  slug: varchar("slug", {
    length: 255
  }).notNull().unique(),
  data: jsonb("data").$type().notNull().default({}),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
const pages = pgTable("pages", {
  id: varchar("id", {
    length: 21
  }).primaryKey(),
  siteId: varchar("site_id", {
    length: 21
  }).notNull().references(() => sites.id, {
    onDelete: "cascade"
  }),
  slug: varchar("slug", {
    length: 255
  }).notNull(),
  data: jsonb("data").$type().notNull().default({}),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
const elements = pgTable("elements", {
  id: varchar("id", {
    length: 21
  }).primaryKey(),
  pageId: varchar("page_id", {
    length: 21
  }).notNull().references(() => pages.id, {
    onDelete: "cascade"
  }),
  parentId: varchar("parent_id", {
    length: 21
  }),
  type: varchar("type", {
    length: 100
  }).notNull(),
  data: jsonb("data").$type().notNull().default({}),
  styles: jsonb("styles").$type().notNull().default({}),
  order: integer("order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
}, (table) => ({
  pageIdx: index("elements_page_id_idx").on(table.pageId),
  parentIdx: index("elements_parent_id_idx").on(table.parentId)
}));
const files2 = pgTable("files", {
  id: varchar("id", {
    length: 21
  }).primaryKey(),
  siteId: varchar("site_id", {
    length: 21
  }).notNull().references(() => sites.id, {
    onDelete: "cascade"
  }),
  data: jsonb("data").$type().notNull().default({}),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
const sitesRelations = relations(sites, ({
  many
}) => ({
  pages: many(pages),
  files: many(files2)
}));
const pagesRelations = relations(pages, ({
  one,
  many
}) => ({
  site: one(sites, {
    fields: [pages.siteId],
    references: [sites.id]
  }),
  elements: many(elements)
}));
const elementsRelations = relations(elements, ({
  one,
  many
}) => ({
  page: one(pages, {
    fields: [elements.pageId],
    references: [pages.id]
  }),
  parent: one(elements, {
    fields: [elements.parentId],
    references: [elements.id],
    relationName: "elementTree"
  }),
  children: many(elements, {
    relationName: "elementTree"
  })
}));
const filesRelations = relations(files2, ({
  one
}) => ({
  site: one(sites, {
    fields: [files2.siteId],
    references: [sites.id]
  })
}));
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  elements,
  elementsRelations,
  files: files2,
  filesRelations,
  pages,
  pagesRelations,
  sites,
  sitesRelations
}, Symbol.toStringTag, { value: "Module" }));
const originCache = /* @__PURE__ */ new Map(), originStackCache = /* @__PURE__ */ new Map(), originError = /* @__PURE__ */ Symbol("OriginError");
const CLOSE = {};
class Query extends Promise {
  constructor(strings, args, handler2, canceller, options = {}) {
    let resolve, reject;
    super((a2, b2) => {
      resolve = a2;
      reject = b2;
    });
    this.tagged = Array.isArray(strings.raw);
    this.strings = strings;
    this.args = args;
    this.handler = handler2;
    this.canceller = canceller;
    this.options = options;
    this.state = null;
    this.statement = null;
    this.resolve = (x2) => (this.active = false, resolve(x2));
    this.reject = (x2) => (this.active = false, reject(x2));
    this.active = false;
    this.cancelled = null;
    this.executed = false;
    this.signature = "";
    this[originError] = this.handler.debug ? new Error() : this.tagged && cachedError(this.strings);
  }
  get origin() {
    return (this.handler.debug ? this[originError].stack : this.tagged && originStackCache.has(this.strings) ? originStackCache.get(this.strings) : originStackCache.set(this.strings, this[originError].stack).get(this.strings)) || "";
  }
  static get [Symbol.species]() {
    return Promise;
  }
  cancel() {
    return this.canceller && (this.canceller(this), this.canceller = null);
  }
  simple() {
    this.options.simple = true;
    this.options.prepare = false;
    return this;
  }
  async readable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  async writable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  cursor(rows = 1, fn2) {
    this.options.simple = false;
    if (typeof rows === "function") {
      fn2 = rows;
      rows = 1;
    }
    this.cursorRows = rows;
    if (typeof fn2 === "function") return this.cursorFn = fn2, this;
    let prev;
    return {
      [Symbol.asyncIterator]: () => ({
        next: () => {
          if (this.executed && !this.active) return {
            done: true
          };
          prev && prev();
          const promise = new Promise((resolve, reject) => {
            this.cursorFn = (value) => {
              resolve({
                value,
                done: false
              });
              return new Promise((r2) => prev = r2);
            };
            this.resolve = () => (this.active = false, resolve({
              done: true
            }));
            this.reject = (x2) => (this.active = false, reject(x2));
          });
          this.execute();
          return promise;
        },
        return() {
          prev && prev(CLOSE);
          return {
            done: true
          };
        }
      })
    };
  }
  describe() {
    this.options.simple = false;
    this.onlyDescribe = this.options.prepare = true;
    return this;
  }
  stream() {
    throw new Error(".stream has been renamed to .forEach");
  }
  forEach(fn2) {
    this.forEachFn = fn2;
    this.handle();
    return this;
  }
  raw() {
    this.isRaw = true;
    return this;
  }
  values() {
    this.isRaw = "values";
    return this;
  }
  async handle() {
    !this.executed && (this.executed = true) && await 1 && this.handler(this);
  }
  execute() {
    this.handle();
    return this;
  }
  then() {
    this.handle();
    return super.then.apply(this, arguments);
  }
  catch() {
    this.handle();
    return super.catch.apply(this, arguments);
  }
  finally() {
    this.handle();
    return super.finally.apply(this, arguments);
  }
}
function cachedError(xs) {
  if (originCache.has(xs)) return originCache.get(xs);
  const x2 = Error.stackTraceLimit;
  Error.stackTraceLimit = 4;
  originCache.set(xs, new Error());
  Error.stackTraceLimit = x2;
  return originCache.get(xs);
}
class PostgresError extends Error {
  constructor(x2) {
    super(x2.message);
    this.name = this.constructor.name;
    Object.assign(this, x2);
  }
}
const Errors = {
  connection,
  postgres,
  generic,
  notSupported
};
function connection(x2, options, socket) {
  const {
    host,
    port
  } = socket || options;
  const error = Object.assign(new Error("write " + x2 + " " + (options.path || host + ":" + port)), {
    code: x2,
    errno: x2,
    address: options.path || host
  }, options.path ? {} : {
    port
  });
  Error.captureStackTrace(error, connection);
  return error;
}
function postgres(x2) {
  const error = new PostgresError(x2);
  Error.captureStackTrace(error, postgres);
  return error;
}
function generic(code, message) {
  const error = Object.assign(new Error(code + ": " + message), {
    code
  });
  Error.captureStackTrace(error, generic);
  return error;
}
function notSupported(x2) {
  const error = Object.assign(new Error(x2 + " (B) is not supported"), {
    code: "MESSAGE_NOT_SUPPORTED",
    name: x2
  });
  Error.captureStackTrace(error, notSupported);
  return error;
}
const types = {
  string: {
    to: 25,
    from: null,
    // defaults to string
    serialize: (x2) => "" + x2
  },
  number: {
    to: 0,
    from: [21, 23, 26, 700, 701],
    serialize: (x2) => "" + x2,
    parse: (x2) => +x2
  },
  json: {
    to: 114,
    from: [114, 3802],
    serialize: (x2) => JSON.stringify(x2),
    parse: (x2) => JSON.parse(x2)
  },
  boolean: {
    to: 16,
    from: 16,
    serialize: (x2) => x2 === true ? "t" : "f",
    parse: (x2) => x2 === "t"
  },
  date: {
    to: 1184,
    from: [1082, 1114, 1184],
    serialize: (x2) => (x2 instanceof Date ? x2 : new Date(x2)).toISOString(),
    parse: (x2) => new Date(x2)
  },
  bytea: {
    to: 17,
    from: 17,
    serialize: (x2) => "\\x" + Buffer.from(x2).toString("hex"),
    parse: (x2) => Buffer.from(x2.slice(2), "hex")
  }
};
class NotTagged {
  then() {
    notTagged();
  }
  catch() {
    notTagged();
  }
  finally() {
    notTagged();
  }
}
class Identifier extends NotTagged {
  constructor(value) {
    super();
    this.value = escapeIdentifier(value);
  }
}
class Parameter extends NotTagged {
  constructor(value, type, array) {
    super();
    this.value = value;
    this.type = type;
    this.array = array;
  }
}
class Builder extends NotTagged {
  constructor(first, rest) {
    super();
    this.first = first;
    this.rest = rest;
  }
  build(before, parameters, types2, options) {
    const keyword = builders.map(([x2, fn2]) => ({
      fn: fn2,
      i: before.search(x2)
    })).sort((a2, b2) => a2.i - b2.i).pop();
    return keyword.i === -1 ? escapeIdentifiers(this.first, options) : keyword.fn(this.first, this.rest, parameters, types2, options);
  }
}
function handleValue(x2, parameters, types2, options) {
  let value = x2 instanceof Parameter ? x2.value : x2;
  if (value === void 0) {
    x2 instanceof Parameter ? x2.value = options.transform.undefined : value = x2 = options.transform.undefined;
    if (value === void 0) throw Errors.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
  }
  return "$" + types2.push(x2 instanceof Parameter ? (parameters.push(x2.value), x2.array ? x2.array[x2.type || inferType(x2.value)] || x2.type || firstIsString(x2.value) : x2.type) : (parameters.push(x2), inferType(x2)));
}
const defaultHandlers = typeHandlers(types);
function stringify(q2, string, value, parameters, types2, options) {
  for (let i = 1; i < q2.strings.length; i++) {
    string += stringifyValue(string, value, parameters, types2, options) + q2.strings[i];
    value = q2.args[i];
  }
  return string;
}
function stringifyValue(string, value, parameters, types2, o) {
  return value instanceof Builder ? value.build(string, parameters, types2, o) : value instanceof Query ? fragment(value, parameters, types2, o) : value instanceof Identifier ? value.value : value && value[0] instanceof Query ? value.reduce((acc, x2) => acc + " " + fragment(x2, parameters, types2, o), "") : handleValue(value, parameters, types2, o);
}
function fragment(q2, parameters, types2, options) {
  q2.fragment = true;
  return stringify(q2, q2.strings[0], q2.args[0], parameters, types2, options);
}
function valuesBuilder(first, parameters, types2, columns, options) {
  return first.map((row) => "(" + columns.map((column) => stringifyValue("values", row[column], parameters, types2, options)).join(",") + ")").join(",");
}
function values(first, rest, parameters, types2, options) {
  const multi = Array.isArray(first[0]);
  const columns = rest.length ? rest.flat() : Object.keys(multi ? first[0] : first);
  return valuesBuilder(multi ? first : [first], parameters, types2, columns, options);
}
function select(first, rest, parameters, types2, options) {
  typeof first === "string" && (first = [first].concat(rest));
  if (Array.isArray(first)) return escapeIdentifiers(first, options);
  let value;
  const columns = rest.length ? rest.flat() : Object.keys(first);
  return columns.map((x2) => {
    value = first[x2];
    return (value instanceof Query ? fragment(value, parameters, types2, options) : value instanceof Identifier ? value.value : handleValue(value, parameters, types2, options)) + " as " + escapeIdentifier(options.transform.column.to ? options.transform.column.to(x2) : x2);
  }).join(",");
}
const builders = Object.entries({
  values,
  in: (...xs) => {
    const x2 = values(...xs);
    return x2 === "()" ? "(null)" : x2;
  },
  select,
  as: select,
  returning: select,
  "\\(": select,
  update(first, rest, parameters, types2, options) {
    return (rest.length ? rest.flat() : Object.keys(first)).map((x2) => escapeIdentifier(options.transform.column.to ? options.transform.column.to(x2) : x2) + "=" + stringifyValue("values", first[x2], parameters, types2, options));
  },
  insert(first, rest, parameters, types2, options) {
    const columns = rest.length ? rest.flat() : Object.keys(Array.isArray(first) ? first[0] : first);
    return "(" + escapeIdentifiers(columns, options) + ")values" + valuesBuilder(Array.isArray(first) ? first : [first], parameters, types2, columns, options);
  }
}).map(([x2, fn2]) => [new RegExp("((?:^|[\\s(])" + x2 + "(?:$|[\\s(]))(?![\\s\\S]*\\1)", "i"), fn2]);
function notTagged() {
  throw Errors.generic("NOT_TAGGED_CALL", "Query not called as a tagged template literal");
}
const serializers = defaultHandlers.serializers;
const parsers = defaultHandlers.parsers;
function firstIsString(x2) {
  if (Array.isArray(x2)) return firstIsString(x2[0]);
  return typeof x2 === "string" ? 1009 : 0;
}
const mergeUserTypes = function(types2) {
  const user = typeHandlers(types2 || {});
  return {
    serializers: Object.assign({}, serializers, user.serializers),
    parsers: Object.assign({}, parsers, user.parsers)
  };
};
function typeHandlers(types2) {
  return Object.keys(types2).reduce((acc, k2) => {
    types2[k2].from && [].concat(types2[k2].from).forEach((x2) => acc.parsers[x2] = types2[k2].parse);
    if (types2[k2].serialize) {
      acc.serializers[types2[k2].to] = types2[k2].serialize;
      types2[k2].from && [].concat(types2[k2].from).forEach((x2) => acc.serializers[x2] = types2[k2].serialize);
    }
    return acc;
  }, {
    parsers: {},
    serializers: {}
  });
}
function escapeIdentifiers(xs, {
  transform: {
    column
  }
}) {
  return xs.map((x2) => escapeIdentifier(column.to ? column.to(x2) : x2)).join(",");
}
const escapeIdentifier = function escape(str) {
  return '"' + str.replace(/"/g, '""').replace(/\./g, '"."') + '"';
};
const inferType = function inferType2(x2) {
  return x2 instanceof Parameter ? x2.type : x2 instanceof Date ? 1184 : x2 instanceof Uint8Array ? 17 : x2 === true || x2 === false ? 16 : typeof x2 === "bigint" ? 20 : Array.isArray(x2) ? inferType2(x2[0]) : 0;
};
const escapeBackslash = /\\/g;
const escapeQuote = /"/g;
function arrayEscape(x2) {
  return x2.replace(escapeBackslash, "\\\\").replace(escapeQuote, '\\"');
}
const arraySerializer = function arraySerializer2(xs, serializer, options, typarray) {
  if (Array.isArray(xs) === false) return xs;
  if (!xs.length) return "{}";
  const first = xs[0];
  const delimiter = typarray === 1020 ? ";" : ",";
  if (Array.isArray(first) && !first.type) return "{" + xs.map((x2) => arraySerializer2(x2, serializer, options, typarray)).join(delimiter) + "}";
  return "{" + xs.map((x2) => {
    if (x2 === void 0) {
      x2 = options.transform.undefined;
      if (x2 === void 0) throw Errors.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
    }
    return x2 === null ? "null" : '"' + arrayEscape(serializer ? serializer(x2.type ? x2.value : x2) : "" + x2) + '"';
  }).join(delimiter) + "}";
};
const arrayParserState = {
  i: 0,
  char: null,
  str: "",
  quoted: false,
  last: 0
};
const arrayParser = function arrayParser2(x2, parser, typarray) {
  arrayParserState.i = arrayParserState.last = 0;
  return arrayParserLoop(arrayParserState, x2, parser, typarray);
};
function arrayParserLoop(s2, x2, parser, typarray) {
  const xs = [];
  const delimiter = typarray === 1020 ? ";" : ",";
  for (; s2.i < x2.length; s2.i++) {
    s2.char = x2[s2.i];
    if (s2.quoted) {
      if (s2.char === "\\") {
        s2.str += x2[++s2.i];
      } else if (s2.char === '"') {
        xs.push(parser ? parser(s2.str) : s2.str);
        s2.str = "";
        s2.quoted = x2[s2.i + 1] === '"';
        s2.last = s2.i + 2;
      } else {
        s2.str += s2.char;
      }
    } else if (s2.char === '"') {
      s2.quoted = true;
    } else if (s2.char === "{") {
      s2.last = ++s2.i;
      xs.push(arrayParserLoop(s2, x2, parser, typarray));
    } else if (s2.char === "}") {
      s2.quoted = false;
      s2.last < s2.i && xs.push(parser ? parser(x2.slice(s2.last, s2.i)) : x2.slice(s2.last, s2.i));
      s2.last = s2.i + 1;
      break;
    } else if (s2.char === delimiter && s2.p !== "}" && s2.p !== '"') {
      xs.push(parser ? parser(x2.slice(s2.last, s2.i)) : x2.slice(s2.last, s2.i));
      s2.last = s2.i + 1;
    }
    s2.p = s2.char;
  }
  s2.last < s2.i && xs.push(parser ? parser(x2.slice(s2.last, s2.i + 1)) : x2.slice(s2.last, s2.i + 1));
  return xs;
}
const toCamel = (x2) => {
  let str = x2[0];
  for (let i = 1; i < x2.length; i++) str += x2[i] === "_" ? x2[++i].toUpperCase() : x2[i];
  return str;
};
const toPascal = (x2) => {
  let str = x2[0].toUpperCase();
  for (let i = 1; i < x2.length; i++) str += x2[i] === "_" ? x2[++i].toUpperCase() : x2[i];
  return str;
};
const toKebab = (x2) => x2.replace(/_/g, "-");
const fromCamel = (x2) => x2.replace(/([A-Z])/g, "_$1").toLowerCase();
const fromPascal = (x2) => (x2.slice(0, 1) + x2.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase();
const fromKebab = (x2) => x2.replace(/-/g, "_");
function createJsonTransform(fn2) {
  return function jsonTransform(x2, column) {
    return typeof x2 === "object" && x2 !== null && (column.type === 114 || column.type === 3802) ? Array.isArray(x2) ? x2.map((x3) => jsonTransform(x3, column)) : Object.entries(x2).reduce((acc, [k2, v2]) => Object.assign(acc, {
      [fn2(k2)]: jsonTransform(v2, column)
    }), {}) : x2;
  };
}
toCamel.column = {
  from: toCamel
};
toCamel.value = {
  from: createJsonTransform(toCamel)
};
fromCamel.column = {
  to: fromCamel
};
const camel = {
  ...toCamel
};
camel.column.to = fromCamel;
toPascal.column = {
  from: toPascal
};
toPascal.value = {
  from: createJsonTransform(toPascal)
};
fromPascal.column = {
  to: fromPascal
};
const pascal = {
  ...toPascal
};
pascal.column.to = fromPascal;
toKebab.column = {
  from: toKebab
};
toKebab.value = {
  from: createJsonTransform(toKebab)
};
fromKebab.column = {
  to: fromKebab
};
const kebab = {
  ...toKebab
};
kebab.column.to = fromKebab;
class Result extends Array {
  constructor() {
    super();
    Object.defineProperties(this, {
      count: {
        value: null,
        writable: true
      },
      state: {
        value: null,
        writable: true
      },
      command: {
        value: null,
        writable: true
      },
      columns: {
        value: null,
        writable: true
      },
      statement: {
        value: null,
        writable: true
      }
    });
  }
  static get [Symbol.species]() {
    return Array;
  }
}
function Queue(initial = []) {
  let xs = initial.slice();
  let index2 = 0;
  return {
    get length() {
      return xs.length - index2;
    },
    remove: (x2) => {
      const index3 = xs.indexOf(x2);
      return index3 === -1 ? null : (xs.splice(index3, 1), x2);
    },
    push: (x2) => (xs.push(x2), x2),
    shift: () => {
      const out = xs[index2++];
      if (index2 === xs.length) {
        index2 = 0;
        xs = [];
      } else {
        xs[index2 - 1] = void 0;
      }
      return out;
    }
  };
}
const size = 256;
let buffer = Buffer.allocUnsafe(size);
const messages = "BCcDdEFfHPpQSX".split("").reduce((acc, x2) => {
  const v2 = x2.charCodeAt(0);
  acc[x2] = () => {
    buffer[0] = v2;
    b.i = 5;
    return b;
  };
  return acc;
}, {});
const b = Object.assign(reset, messages, {
  N: String.fromCharCode(0),
  i: 0,
  inc(x2) {
    b.i += x2;
    return b;
  },
  str(x2) {
    const length = Buffer.byteLength(x2);
    fit(length);
    b.i += buffer.write(x2, b.i, length, "utf8");
    return b;
  },
  i16(x2) {
    fit(2);
    buffer.writeUInt16BE(x2, b.i);
    b.i += 2;
    return b;
  },
  i32(x2, i) {
    if (i || i === 0) {
      buffer.writeUInt32BE(x2, i);
      return b;
    }
    fit(4);
    buffer.writeUInt32BE(x2, b.i);
    b.i += 4;
    return b;
  },
  z(x2) {
    fit(x2);
    buffer.fill(0, b.i, b.i + x2);
    b.i += x2;
    return b;
  },
  raw(x2) {
    buffer = Buffer.concat([buffer.subarray(0, b.i), x2]);
    b.i = buffer.length;
    return b;
  },
  end(at = 1) {
    buffer.writeUInt32BE(b.i - at, at);
    const out = buffer.subarray(0, b.i);
    b.i = 0;
    buffer = Buffer.allocUnsafe(size);
    return out;
  }
});
function fit(x2) {
  if (buffer.length - b.i < x2) {
    const prev = buffer, length = prev.length;
    buffer = Buffer.allocUnsafe(length + (length >> 1) + x2);
    prev.copy(buffer);
  }
}
function reset() {
  b.i = 0;
  return b;
}
let uid = 1;
const Sync = b().S().end(), Flush = b().H().end(), SSLRequest = b().i32(8).i32(80877103).end(8), ExecuteUnnamed = Buffer.concat([b().E().str(b.N).i32(0).end(), Sync]), DescribeUnnamed = b().D().str("S").str(b.N).end(), noop$1 = () => {
};
const retryRoutines = /* @__PURE__ */ new Set(["FetchPreparedStatement", "RevalidateCachedQuery", "transformAssignedExpr"]);
const errorFields = {
  83: "severity_local",
  // S
  86: "severity",
  // V
  67: "code",
  // C
  77: "message",
  // M
  68: "detail",
  // D
  72: "hint",
  // H
  80: "position",
  // P
  112: "internal_position",
  // p
  113: "internal_query",
  // q
  87: "where",
  // W
  115: "schema_name",
  // s
  116: "table_name",
  // t
  99: "column_name",
  // c
  100: "data type_name",
  // d
  110: "constraint_name",
  // n
  70: "file",
  // F
  76: "line",
  // L
  82: "routine"
  // R
};
function Connection(options, queues = {}, {
  onopen = noop$1,
  onend = noop$1,
  onclose = noop$1
} = {}) {
  const {
    sslnegotiation,
    ssl,
    max,
    user,
    host,
    port,
    database,
    parsers: parsers2,
    transform,
    onnotice,
    onnotify,
    onparameter,
    max_pipeline,
    keep_alive,
    backoff: backoff2,
    target_session_attrs
  } = options;
  const sent = Queue(), id = uid++, backend = {
    pid: null,
    secret: null
  }, idleTimer = timer(end, options.idle_timeout), lifeTimer = timer(end, options.max_lifetime), connectTimer = timer(connectTimedOut, options.connect_timeout);
  let socket = null, cancelMessage, errorResponse = null, result = new Result(), incoming = Buffer.alloc(0), needsTypes = options.fetch_types, backendParameters = {}, statements = {}, statementId = Math.random().toString(36).slice(2), statementCount = 1, closedTime = 0, remaining = 0, hostIndex = 0, retries = 0, length = 0, delay = 0, rows = 0, serverSignature = null, nextWriteTimer = null, terminated = false, incomings = null, results = null, initial = null, ending = null, stream = null, chunk = null, ended = null, nonce = null, query = null, final = null;
  const connection2 = {
    queue: queues.closed,
    idleTimer,
    connect(query2) {
      initial = query2;
      reconnect();
    },
    terminate,
    execute,
    cancel,
    end,
    count: 0,
    id
  };
  queues.closed && queues.closed.push(connection2);
  return connection2;
  async function createSocket() {
    let x2;
    try {
      x2 = options.socket ? await Promise.resolve(options.socket(options)) : new net.Socket();
    } catch (e2) {
      error(e2);
      return;
    }
    x2.on("error", error);
    x2.on("close", closed);
    x2.on("drain", drain);
    return x2;
  }
  async function cancel({
    pid,
    secret
  }, resolve, reject) {
    try {
      cancelMessage = b().i32(16).i32(80877102).i32(pid).i32(secret).end(16);
      await connect();
      socket.once("error", reject);
      socket.once("close", resolve);
    } catch (error2) {
      reject(error2);
    }
  }
  function execute(q2) {
    if (terminated) return queryError(q2, Errors.connection("CONNECTION_DESTROYED", options));
    if (stream) return queryError(q2, Errors.generic("COPY_IN_PROGRESS", "You cannot execute queries during copy"));
    if (q2.cancelled) return;
    try {
      q2.state = backend;
      query ? sent.push(q2) : (query = q2, query.active = true);
      build(q2);
      return write(toBuffer(q2)) && !q2.describeFirst && !q2.cursorFn && sent.length < max_pipeline && (!q2.options.onexecute || q2.options.onexecute(connection2));
    } catch (error2) {
      sent.length === 0 && write(Sync);
      errored(error2);
      return true;
    }
  }
  function toBuffer(q2) {
    if (q2.parameters.length >= 65534) throw Errors.generic("MAX_PARAMETERS_EXCEEDED", "Max number of parameters (65534) exceeded");
    return q2.options.simple ? b().Q().str(q2.statement.string + b.N).end() : q2.describeFirst ? Buffer.concat([describe(q2), Flush]) : q2.prepare ? q2.prepared ? prepared(q2) : Buffer.concat([describe(q2), prepared(q2)]) : unnamed(q2);
  }
  function describe(q2) {
    return Buffer.concat([Parse(q2.statement.string, q2.parameters, q2.statement.types, q2.statement.name), Describe("S", q2.statement.name)]);
  }
  function prepared(q2) {
    return Buffer.concat([Bind(q2.parameters, q2.statement.types, q2.statement.name, q2.cursorName), q2.cursorFn ? Execute("", q2.cursorRows) : ExecuteUnnamed]);
  }
  function unnamed(q2) {
    return Buffer.concat([Parse(q2.statement.string, q2.parameters, q2.statement.types), DescribeUnnamed, prepared(q2)]);
  }
  function build(q2) {
    const parameters = [], types2 = [];
    const string = stringify(q2, q2.strings[0], q2.args[0], parameters, types2, options);
    !q2.tagged && q2.args.forEach((x2) => handleValue(x2, parameters, types2, options));
    q2.prepare = options.prepare && ("prepare" in q2.options ? q2.options.prepare : true);
    q2.string = string;
    q2.signature = q2.prepare && types2 + string;
    q2.onlyDescribe && delete statements[q2.signature];
    q2.parameters = q2.parameters || parameters;
    q2.prepared = q2.prepare && q2.signature in statements;
    q2.describeFirst = q2.onlyDescribe || parameters.length && !q2.prepared;
    q2.statement = q2.prepared ? statements[q2.signature] : {
      string,
      types: types2,
      name: q2.prepare ? statementId + statementCount++ : ""
    };
    typeof options.debug === "function" && options.debug(id, string, parameters, types2);
  }
  function write(x2, fn2) {
    chunk = chunk ? Buffer.concat([chunk, x2]) : Buffer.from(x2);
    if (chunk.length >= 1024) return nextWrite(fn2);
    nextWriteTimer === null && (nextWriteTimer = setImmediate(nextWrite));
    return true;
  }
  function nextWrite(fn2) {
    const x2 = socket.write(chunk, fn2);
    nextWriteTimer !== null && clearImmediate(nextWriteTimer);
    chunk = nextWriteTimer = null;
    return x2;
  }
  function connectTimedOut() {
    errored(Errors.connection("CONNECT_TIMEOUT", options, socket));
    socket.destroy();
  }
  async function secure() {
    if (sslnegotiation !== "direct") {
      write(SSLRequest);
      const canSSL = await new Promise((r2) => socket.once("data", (x2) => r2(x2[0] === 83)));
      if (!canSSL && ssl === "prefer") return connected();
    }
    const options2 = {
      socket,
      servername: net.isIP(socket.host) ? void 0 : socket.host
    };
    if (sslnegotiation === "direct") options2.ALPNProtocols = ["postgresql"];
    if (ssl === "require" || ssl === "allow" || ssl === "prefer") options2.rejectUnauthorized = false;
    else if (typeof ssl === "object") Object.assign(options2, ssl);
    socket.removeAllListeners();
    socket = tls.connect(options2);
    socket.on("secureConnect", connected);
    socket.on("error", error);
    socket.on("close", closed);
    socket.on("drain", drain);
  }
  function drain() {
    !query && onopen(connection2);
  }
  function data(x2) {
    if (incomings) {
      incomings.push(x2);
      remaining -= x2.length;
      if (remaining > 0) return;
    }
    incoming = incomings ? Buffer.concat(incomings, length - remaining) : incoming.length === 0 ? x2 : Buffer.concat([incoming, x2], incoming.length + x2.length);
    while (incoming.length > 4) {
      length = incoming.readUInt32BE(1);
      if (length >= incoming.length) {
        remaining = length - incoming.length;
        incomings = [incoming];
        break;
      }
      try {
        handle(incoming.subarray(0, length + 1));
      } catch (e2) {
        query && (query.cursorFn || query.describeFirst) && write(Sync);
        errored(e2);
      }
      incoming = incoming.subarray(length + 1);
      remaining = 0;
      incomings = null;
    }
  }
  async function connect() {
    terminated = false;
    backendParameters = {};
    socket || (socket = await createSocket());
    if (!socket) return;
    connectTimer.start();
    if (options.socket) return ssl ? secure() : connected();
    socket.on("connect", ssl ? secure : connected);
    if (options.path) return socket.connect(options.path);
    socket.ssl = ssl;
    socket.connect(port[hostIndex], host[hostIndex]);
    socket.host = host[hostIndex];
    socket.port = port[hostIndex];
    hostIndex = (hostIndex + 1) % port.length;
  }
  function reconnect() {
    setTimeout(connect, closedTime ? Math.max(0, closedTime + delay - performance$1.now()) : 0);
  }
  function connected() {
    try {
      statements = {};
      needsTypes = options.fetch_types;
      statementId = Math.random().toString(36).slice(2);
      statementCount = 1;
      lifeTimer.start();
      socket.on("data", data);
      keep_alive && socket.setKeepAlive && socket.setKeepAlive(true, 1e3 * keep_alive);
      const s2 = StartupMessage();
      write(s2);
    } catch (err) {
      error(err);
    }
  }
  function error(err) {
    if (connection2.queue === queues.connecting && options.host[retries + 1]) return;
    errored(err);
    while (sent.length) queryError(sent.shift(), err);
  }
  function errored(err) {
    stream && (stream.destroy(err), stream = null);
    query && queryError(query, err);
    initial && (queryError(initial, err), initial = null);
  }
  function queryError(query2, err) {
    if (query2.reserve) return query2.reject(err);
    if (!err || typeof err !== "object") err = new Error(err);
    "query" in err || "parameters" in err || Object.defineProperties(err, {
      stack: {
        value: err.stack + query2.origin.replace(/.*\n/, "\n"),
        enumerable: options.debug
      },
      query: {
        value: query2.string,
        enumerable: options.debug
      },
      parameters: {
        value: query2.parameters,
        enumerable: options.debug
      },
      args: {
        value: query2.args,
        enumerable: options.debug
      },
      types: {
        value: query2.statement && query2.statement.types,
        enumerable: options.debug
      }
    });
    query2.reject(err);
  }
  function end() {
    return ending || (!connection2.reserved && onend(connection2), !connection2.reserved && !initial && !query && sent.length === 0 ? (terminate(), new Promise((r2) => socket && socket.readyState !== "closed" ? socket.once("close", r2) : r2())) : ending = new Promise((r2) => ended = r2));
  }
  function terminate() {
    terminated = true;
    if (stream || query || initial || sent.length) error(Errors.connection("CONNECTION_DESTROYED", options));
    clearImmediate(nextWriteTimer);
    if (socket) {
      socket.removeListener("data", data);
      socket.removeListener("connect", connected);
      socket.readyState === "open" && socket.end(b().X().end());
    }
    ended && (ended(), ending = ended = null);
  }
  async function closed(hadError) {
    incoming = Buffer.alloc(0);
    remaining = 0;
    incomings = null;
    clearImmediate(nextWriteTimer);
    socket.removeListener("data", data);
    socket.removeListener("connect", connected);
    idleTimer.cancel();
    lifeTimer.cancel();
    connectTimer.cancel();
    socket.removeAllListeners();
    socket = null;
    if (initial) return reconnect();
    !hadError && (query || sent.length) && error(Errors.connection("CONNECTION_CLOSED", options, socket));
    closedTime = performance$1.now();
    hadError && options.shared.retries++;
    delay = (typeof backoff2 === "function" ? backoff2(options.shared.retries) : backoff2) * 1e3;
    onclose(connection2, Errors.connection("CONNECTION_CLOSED", options, socket));
  }
  function handle(xs, x2 = xs[0]) {
    (x2 === 68 ? DataRow : (
      // D
      x2 === 100 ? CopyData : (
        // d
        x2 === 65 ? NotificationResponse : (
          // A
          x2 === 83 ? ParameterStatus : (
            // S
            x2 === 90 ? ReadyForQuery : (
              // Z
              x2 === 67 ? CommandComplete : (
                // C
                x2 === 50 ? BindComplete : (
                  // 2
                  x2 === 49 ? ParseComplete : (
                    // 1
                    x2 === 116 ? ParameterDescription : (
                      // t
                      x2 === 84 ? RowDescription : (
                        // T
                        x2 === 82 ? Authentication : (
                          // R
                          x2 === 110 ? NoData : (
                            // n
                            x2 === 75 ? BackendKeyData : (
                              // K
                              x2 === 69 ? ErrorResponse : (
                                // E
                                x2 === 115 ? PortalSuspended : (
                                  // s
                                  x2 === 51 ? CloseComplete : (
                                    // 3
                                    x2 === 71 ? CopyInResponse : (
                                      // G
                                      x2 === 78 ? NoticeResponse : (
                                        // N
                                        x2 === 72 ? CopyOutResponse : (
                                          // H
                                          x2 === 99 ? CopyDone : (
                                            // c
                                            x2 === 73 ? EmptyQueryResponse : (
                                              // I
                                              x2 === 86 ? FunctionCallResponse : (
                                                // V
                                                x2 === 118 ? NegotiateProtocolVersion : (
                                                  // v
                                                  x2 === 87 ? CopyBothResponse : (
                                                    // W
                                                    /* c8 ignore next */
                                                    UnknownMessage
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    ))(xs);
  }
  function DataRow(x2) {
    let index2 = 7;
    let length2;
    let column;
    let value;
    const row = query.isRaw ? new Array(query.statement.columns.length) : {};
    for (let i = 0; i < query.statement.columns.length; i++) {
      column = query.statement.columns[i];
      length2 = x2.readInt32BE(index2);
      index2 += 4;
      value = length2 === -1 ? null : query.isRaw === true ? x2.subarray(index2, index2 += length2) : column.parser === void 0 ? x2.toString("utf8", index2, index2 += length2) : column.parser.array === true ? column.parser(x2.toString("utf8", index2 + 1, index2 += length2)) : column.parser(x2.toString("utf8", index2, index2 += length2));
      query.isRaw ? row[i] = query.isRaw === true ? value : transform.value.from ? transform.value.from(value, column) : value : row[column.name] = transform.value.from ? transform.value.from(value, column) : value;
    }
    query.forEachFn ? query.forEachFn(transform.row.from ? transform.row.from(row) : row, result) : result[rows++] = transform.row.from ? transform.row.from(row) : row;
  }
  function ParameterStatus(x2) {
    const [k2, v2] = x2.toString("utf8", 5, x2.length - 1).split(b.N);
    backendParameters[k2] = v2;
    if (options.parameters[k2] !== v2) {
      options.parameters[k2] = v2;
      onparameter && onparameter(k2, v2);
    }
  }
  function ReadyForQuery(x2) {
    if (query) {
      if (errorResponse) {
        query.retried ? errored(query.retried) : query.prepared && retryRoutines.has(errorResponse.routine) ? retry(query, errorResponse) : errored(errorResponse);
      } else {
        query.resolve(results || result);
      }
    } else if (errorResponse) {
      errored(errorResponse);
    }
    query = results = errorResponse = null;
    result = new Result();
    connectTimer.cancel();
    if (initial) {
      if (target_session_attrs) {
        if (!backendParameters.in_hot_standby || !backendParameters.default_transaction_read_only) return fetchState();
        else if (tryNext(target_session_attrs, backendParameters)) return terminate();
      }
      if (needsTypes) {
        initial.reserve && (initial = null);
        return fetchArrayTypes();
      }
      initial && !initial.reserve && execute(initial);
      options.shared.retries = retries = 0;
      initial = null;
      return;
    }
    while (sent.length && (query = sent.shift()) && (query.active = true, query.cancelled)) Connection(options).cancel(query.state, query.cancelled.resolve, query.cancelled.reject);
    if (query) return;
    connection2.reserved ? !connection2.reserved.release && x2[5] === 73 ? ending ? terminate() : (connection2.reserved = null, onopen(connection2)) : connection2.reserved() : ending ? terminate() : onopen(connection2);
  }
  function CommandComplete(x2) {
    rows = 0;
    for (let i = x2.length - 1; i > 0; i--) {
      if (x2[i] === 32 && x2[i + 1] < 58 && result.count === null) result.count = +x2.toString("utf8", i + 1, x2.length - 1);
      if (x2[i - 1] >= 65) {
        result.command = x2.toString("utf8", 5, i);
        result.state = backend;
        break;
      }
    }
    final && (final(), final = null);
    if (result.command === "BEGIN" && max !== 1 && !connection2.reserved) return errored(Errors.generic("UNSAFE_TRANSACTION", "Only use sql.begin, sql.reserved or max: 1"));
    if (query.options.simple) return BindComplete();
    if (query.cursorFn) {
      result.count && query.cursorFn(result);
      write(Sync);
    }
  }
  function ParseComplete() {
    query.parsing = false;
  }
  function BindComplete() {
    !result.statement && (result.statement = query.statement);
    result.columns = query.statement.columns;
  }
  function ParameterDescription(x2) {
    const length2 = x2.readUInt16BE(5);
    for (let i = 0; i < length2; ++i) !query.statement.types[i] && (query.statement.types[i] = x2.readUInt32BE(7 + i * 4));
    query.prepare && (statements[query.signature] = query.statement);
    query.describeFirst && !query.onlyDescribe && (write(prepared(query)), query.describeFirst = false);
  }
  function RowDescription(x2) {
    if (result.command) {
      results = results || [result];
      results.push(result = new Result());
      result.count = null;
      query.statement.columns = null;
    }
    const length2 = x2.readUInt16BE(5);
    let index2 = 7;
    let start;
    query.statement.columns = Array(length2);
    for (let i = 0; i < length2; ++i) {
      start = index2;
      while (x2[index2++] !== 0) {
      }
      const table = x2.readUInt32BE(index2);
      const number = x2.readUInt16BE(index2 + 4);
      const type = x2.readUInt32BE(index2 + 6);
      query.statement.columns[i] = {
        name: transform.column.from ? transform.column.from(x2.toString("utf8", start, index2 - 1)) : x2.toString("utf8", start, index2 - 1),
        parser: parsers2[type],
        table,
        number,
        type
      };
      index2 += 18;
    }
    result.statement = query.statement;
    if (query.onlyDescribe) return query.resolve(query.statement), write(Sync);
  }
  async function Authentication(x2, type = x2.readUInt32BE(5)) {
    (type === 3 ? AuthenticationCleartextPassword : type === 5 ? AuthenticationMD5Password : type === 10 ? SASL : type === 11 ? SASLContinue : type === 12 ? SASLFinal : type !== 0 ? UnknownAuth : noop$1)(x2, type);
  }
  async function AuthenticationCleartextPassword() {
    const payload = await Pass();
    write(b().p().str(payload).z(1).end());
  }
  async function AuthenticationMD5Password(x2) {
    const payload = "md5" + await md5(Buffer.concat([Buffer.from(await md5(await Pass() + user)), x2.subarray(9)]));
    write(b().p().str(payload).z(1).end());
  }
  async function SASL() {
    nonce = (await crypto.randomBytes(18)).toString("base64");
    b().p().str("SCRAM-SHA-256" + b.N);
    const i = b.i;
    write(b.inc(4).str("n,,n=*,r=" + nonce).i32(b.i - i - 4, i).end());
  }
  async function SASLContinue(x2) {
    const res = x2.toString("utf8", 9).split(",").reduce((acc, x3) => (acc[x3[0]] = x3.slice(2), acc), {});
    const saltedPassword = await crypto.pbkdf2Sync(await Pass(), Buffer.from(res.s, "base64"), parseInt(res.i), 32, "sha256");
    const clientKey = await hmac(saltedPassword, "Client Key");
    const auth = "n=*,r=" + nonce + ",r=" + res.r + ",s=" + res.s + ",i=" + res.i + ",c=biws,r=" + res.r;
    serverSignature = (await hmac(await hmac(saltedPassword, "Server Key"), auth)).toString("base64");
    const payload = "c=biws,r=" + res.r + ",p=" + xor(clientKey, Buffer.from(await hmac(await sha256(clientKey), auth))).toString("base64");
    write(b().p().str(payload).end());
  }
  function SASLFinal(x2) {
    if (x2.toString("utf8", 9).split(b.N, 1)[0].slice(2) === serverSignature) return;
    errored(Errors.generic("SASL_SIGNATURE_MISMATCH", "The server did not return the correct signature"));
    socket.destroy();
  }
  function Pass() {
    return Promise.resolve(typeof options.pass === "function" ? options.pass() : options.pass);
  }
  function NoData() {
    result.statement = query.statement;
    result.statement.columns = [];
    if (query.onlyDescribe) return query.resolve(query.statement), write(Sync);
  }
  function BackendKeyData(x2) {
    backend.pid = x2.readUInt32BE(5);
    backend.secret = x2.readUInt32BE(9);
  }
  async function fetchArrayTypes() {
    needsTypes = false;
    const types2 = await new Query([`
      select b.oid, b.typarray
      from pg_catalog.pg_type a
      left join pg_catalog.pg_type b on b.oid = a.typelem
      where a.typcategory = 'A'
      group by b.oid, b.typarray
      order by b.oid
    `], [], execute);
    types2.forEach(({
      oid,
      typarray
    }) => addArrayType(oid, typarray));
  }
  function addArrayType(oid, typarray) {
    if (!!options.parsers[typarray] && !!options.serializers[typarray]) return;
    const parser = options.parsers[oid];
    options.shared.typeArrayMap[oid] = typarray;
    options.parsers[typarray] = (xs) => arrayParser(xs, parser, typarray);
    options.parsers[typarray].array = true;
    options.serializers[typarray] = (xs) => arraySerializer(xs, options.serializers[oid], options, typarray);
  }
  function tryNext(x2, xs) {
    return x2 === "read-write" && xs.default_transaction_read_only === "on" || x2 === "read-only" && xs.default_transaction_read_only === "off" || x2 === "primary" && xs.in_hot_standby === "on" || x2 === "standby" && xs.in_hot_standby === "off" || x2 === "prefer-standby" && xs.in_hot_standby === "off" && options.host[retries];
  }
  function fetchState() {
    const query2 = new Query([`
      show transaction_read_only;
      select pg_catalog.pg_is_in_recovery()
    `], [], execute, null, {
      simple: true
    });
    query2.resolve = ([[a2], [b2]]) => {
      backendParameters.default_transaction_read_only = a2.transaction_read_only;
      backendParameters.in_hot_standby = b2.pg_is_in_recovery ? "on" : "off";
    };
    query2.execute();
  }
  function ErrorResponse(x2) {
    if (query) {
      (query.cursorFn || query.describeFirst) && write(Sync);
      errorResponse = Errors.postgres(parseError(x2));
    } else {
      errored(Errors.postgres(parseError(x2)));
    }
  }
  function retry(q2, error2) {
    delete statements[q2.signature];
    q2.retried = error2;
    execute(q2);
  }
  function NotificationResponse(x2) {
    if (!onnotify) return;
    let index2 = 9;
    while (x2[index2++] !== 0) {
    }
    onnotify(x2.toString("utf8", 9, index2 - 1), x2.toString("utf8", index2, x2.length - 1));
  }
  async function PortalSuspended() {
    try {
      const x2 = await Promise.resolve(query.cursorFn(result));
      rows = 0;
      x2 === CLOSE ? write(Close(query.portal)) : (result = new Result(), write(Execute("", query.cursorRows)));
    } catch (err) {
      write(Sync);
      query.reject(err);
    }
  }
  function CloseComplete() {
    result.count && query.cursorFn(result);
    query.resolve(result);
  }
  function CopyInResponse() {
    stream = new Stream.Writable({
      autoDestroy: true,
      write(chunk2, encoding, callback) {
        socket.write(b().d().raw(chunk2).end(), callback);
      },
      destroy(error2, callback) {
        callback(error2);
        socket.write(b().f().str(error2 + b.N).end());
        stream = null;
      },
      final(callback) {
        socket.write(b().c().end());
        final = callback;
        stream = null;
      }
    });
    query.resolve(stream);
  }
  function CopyOutResponse() {
    stream = new Stream.Readable({
      read() {
        socket.resume();
      }
    });
    query.resolve(stream);
  }
  function CopyBothResponse() {
    stream = new Stream.Duplex({
      autoDestroy: true,
      read() {
        socket.resume();
      },
      /* c8 ignore next 11 */
      write(chunk2, encoding, callback) {
        socket.write(b().d().raw(chunk2).end(), callback);
      },
      destroy(error2, callback) {
        callback(error2);
        socket.write(b().f().str(error2 + b.N).end());
        stream = null;
      },
      final(callback) {
        socket.write(b().c().end());
        final = callback;
      }
    });
    query.resolve(stream);
  }
  function CopyData(x2) {
    stream && (stream.push(x2.subarray(5)) || socket.pause());
  }
  function CopyDone() {
    stream && stream.push(null);
    stream = null;
  }
  function NoticeResponse(x2) {
    onnotice ? onnotice(parseError(x2)) : console.log(parseError(x2));
  }
  function EmptyQueryResponse() {
  }
  function FunctionCallResponse() {
    errored(Errors.notSupported("FunctionCallResponse"));
  }
  function NegotiateProtocolVersion() {
    errored(Errors.notSupported("NegotiateProtocolVersion"));
  }
  function UnknownMessage(x2) {
    console.error("Postgres.js : Unknown Message:", x2[0]);
  }
  function UnknownAuth(x2, type) {
    console.error("Postgres.js : Unknown Auth:", type);
  }
  function Bind(parameters, types2, statement = "", portal = "") {
    let prev, type;
    b().B().str(portal + b.N).str(statement + b.N).i16(0).i16(parameters.length);
    parameters.forEach((x2, i) => {
      if (x2 === null) return b.i32(4294967295);
      type = types2[i];
      parameters[i] = x2 = type in options.serializers ? options.serializers[type](x2) : "" + x2;
      prev = b.i;
      b.inc(4).str(x2).i32(b.i - prev - 4, prev);
    });
    b.i16(0);
    return b.end();
  }
  function Parse(str, parameters, types2, name = "") {
    b().P().str(name + b.N).str(str + b.N).i16(parameters.length);
    parameters.forEach((x2, i) => b.i32(types2[i] || 0));
    return b.end();
  }
  function Describe(x2, name = "") {
    return b().D().str(x2).str(name + b.N).end();
  }
  function Execute(portal = "", rows2 = 0) {
    return Buffer.concat([b().E().str(portal + b.N).i32(rows2).end(), Flush]);
  }
  function Close(portal = "") {
    return Buffer.concat([b().C().str("P").str(portal + b.N).end(), b().S().end()]);
  }
  function StartupMessage() {
    return cancelMessage || b().inc(4).i16(3).z(2).str(Object.entries(Object.assign({
      user,
      database,
      client_encoding: "UTF8"
    }, options.connection)).filter(([, v2]) => v2).map(([k2, v2]) => k2 + b.N + v2).join(b.N)).z(2).end(0);
  }
}
function parseError(x2) {
  const error = {};
  let start = 5;
  for (let i = 5; i < x2.length - 1; i++) {
    if (x2[i] === 0) {
      error[errorFields[x2[start]]] = x2.toString("utf8", start + 1, i);
      start = i + 1;
    }
  }
  return error;
}
function md5(x2) {
  return crypto.createHash("md5").update(x2).digest("hex");
}
function hmac(key, x2) {
  return crypto.createHmac("sha256", key).update(x2).digest();
}
function sha256(x2) {
  return crypto.createHash("sha256").update(x2).digest();
}
function xor(a2, b2) {
  const length = Math.max(a2.length, b2.length);
  const buffer2 = Buffer.allocUnsafe(length);
  for (let i = 0; i < length; i++) buffer2[i] = a2[i] ^ b2[i];
  return buffer2;
}
function timer(fn2, seconds) {
  seconds = typeof seconds === "function" ? seconds() : seconds;
  if (!seconds) return {
    cancel: noop$1,
    start: noop$1
  };
  let timer2;
  return {
    cancel() {
      timer2 && (clearTimeout(timer2), timer2 = null);
    },
    start() {
      timer2 && clearTimeout(timer2);
      timer2 = setTimeout(done, seconds * 1e3, arguments);
    }
  };
  function done(args) {
    fn2.apply(null, args);
    timer2 = null;
  }
}
const noop = () => {
};
function Subscribe(postgres2, options) {
  const subscribers = /* @__PURE__ */ new Map(), slot = "postgresjs_" + Math.random().toString(36).slice(2), state = {};
  let connection2, stream, ended = false;
  const sql2 = subscribe.sql = postgres2({
    ...options,
    transform: {
      column: {},
      value: {},
      row: {}
    },
    max: 1,
    fetch_types: false,
    idle_timeout: null,
    max_lifetime: null,
    connection: {
      ...options.connection,
      replication: "database"
    },
    onclose: async function() {
      if (ended) return;
      stream = null;
      state.pid = state.secret = void 0;
      connected(await init(sql2, slot, options.publications));
      subscribers.forEach((event) => event.forEach(({
        onsubscribe
      }) => onsubscribe()));
    },
    no_subscribe: true
  });
  const end = sql2.end, close = sql2.close;
  sql2.end = async () => {
    ended = true;
    stream && await new Promise((r2) => (stream.once("close", r2), stream.end()));
    return end();
  };
  sql2.close = async () => {
    stream && await new Promise((r2) => (stream.once("close", r2), stream.end()));
    return close();
  };
  return subscribe;
  async function subscribe(event, fn2, onsubscribe = noop, onerror = noop) {
    event = parseEvent(event);
    if (!connection2) connection2 = init(sql2, slot, options.publications);
    const subscriber = {
      fn: fn2,
      onsubscribe
    };
    const fns = subscribers.has(event) ? subscribers.get(event).add(subscriber) : subscribers.set(event, /* @__PURE__ */ new Set([subscriber])).get(event);
    const unsubscribe = () => {
      fns.delete(subscriber);
      fns.size === 0 && subscribers.delete(event);
    };
    return connection2.then((x2) => {
      connected(x2);
      onsubscribe();
      stream && stream.on("error", onerror);
      return {
        unsubscribe,
        state,
        sql: sql2
      };
    });
  }
  function connected(x2) {
    stream = x2.stream;
    state.pid = x2.state.pid;
    state.secret = x2.state.secret;
  }
  async function init(sql3, slot2, publications) {
    if (!publications) throw new Error("Missing publication names");
    const xs = await sql3.unsafe(`CREATE_REPLICATION_SLOT ${slot2} TEMPORARY LOGICAL pgoutput NOEXPORT_SNAPSHOT`);
    const [x2] = xs;
    const stream2 = await sql3.unsafe(`START_REPLICATION SLOT ${slot2} LOGICAL ${x2.consistent_point} (proto_version '1', publication_names '${publications}')`).writable();
    const state2 = {
      lsn: Buffer.concat(x2.consistent_point.split("/").map((x3) => Buffer.from(("00000000" + x3).slice(-8), "hex")))
    };
    stream2.on("data", data);
    stream2.on("error", error);
    stream2.on("close", sql3.close);
    return {
      stream: stream2,
      state: xs.state
    };
    function error(e2) {
      console.error("Unexpected error during logical streaming - reconnecting", e2);
    }
    function data(x3) {
      if (x3[0] === 119) {
        parse(x3.subarray(25), state2, sql3.options.parsers, handle, options.transform);
      } else if (x3[0] === 107 && x3[17]) {
        state2.lsn = x3.subarray(1, 9);
        pong();
      }
    }
    function handle(a2, b2) {
      const path = b2.relation.schema + "." + b2.relation.table;
      call("*", a2, b2);
      call("*:" + path, a2, b2);
      b2.relation.keys.length && call("*:" + path + "=" + b2.relation.keys.map((x3) => a2[x3.name]), a2, b2);
      call(b2.command, a2, b2);
      call(b2.command + ":" + path, a2, b2);
      b2.relation.keys.length && call(b2.command + ":" + path + "=" + b2.relation.keys.map((x3) => a2[x3.name]), a2, b2);
    }
    function pong() {
      const x3 = Buffer.alloc(34);
      x3[0] = "r".charCodeAt(0);
      x3.fill(state2.lsn, 1);
      x3.writeBigInt64BE(BigInt(Date.now() - Date.UTC(2e3, 0, 1)) * BigInt(1e3), 25);
      stream2.write(x3);
    }
  }
  function call(x2, a2, b2) {
    subscribers.has(x2) && subscribers.get(x2).forEach(({
      fn: fn2
    }) => fn2(a2, b2, x2));
  }
}
function Time(x2) {
  return new Date(Date.UTC(2e3, 0, 1) + Number(x2 / BigInt(1e3)));
}
function parse(x2, state, parsers2, handle, transform) {
  const char2 = (acc, [k2, v2]) => (acc[k2.charCodeAt(0)] = v2, acc);
  Object.entries({
    R: (x3) => {
      let i = 1;
      const r2 = state[x3.readUInt32BE(i)] = {
        schema: x3.toString("utf8", i += 4, i = x3.indexOf(0, i)) || "pg_catalog",
        table: x3.toString("utf8", i + 1, i = x3.indexOf(0, i + 1)),
        columns: Array(x3.readUInt16BE(i += 2)),
        keys: []
      };
      i += 2;
      let columnIndex = 0, column;
      while (i < x3.length) {
        column = r2.columns[columnIndex++] = {
          key: x3[i++],
          name: transform.column.from ? transform.column.from(x3.toString("utf8", i, i = x3.indexOf(0, i))) : x3.toString("utf8", i, i = x3.indexOf(0, i)),
          type: x3.readUInt32BE(i += 1),
          parser: parsers2[x3.readUInt32BE(i)],
          atttypmod: x3.readUInt32BE(i += 4)
        };
        column.key && r2.keys.push(column);
        i += 4;
      }
    },
    Y: () => {
    },
    // Type
    O: () => {
    },
    // Origin
    B: (x3) => {
      state.date = Time(x3.readBigInt64BE(9));
      state.lsn = x3.subarray(1, 9);
    },
    I: (x3) => {
      let i = 1;
      const relation = state[x3.readUInt32BE(i)];
      const {
        row
      } = tuples(x3, relation.columns, i += 7, transform);
      handle(row, {
        command: "insert",
        relation
      });
    },
    D: (x3) => {
      let i = 1;
      const relation = state[x3.readUInt32BE(i)];
      i += 4;
      const key = x3[i] === 75;
      handle(key || x3[i] === 79 ? tuples(x3, relation.columns, i += 3, transform).row : null, {
        command: "delete",
        relation,
        key
      });
    },
    U: (x3) => {
      let i = 1;
      const relation = state[x3.readUInt32BE(i)];
      i += 4;
      const key = x3[i] === 75;
      const xs = key || x3[i] === 79 ? tuples(x3, relation.columns, i += 3, transform) : null;
      xs && (i = xs.i);
      const {
        row
      } = tuples(x3, relation.columns, i + 3, transform);
      handle(row, {
        command: "update",
        relation,
        key,
        old: xs && xs.row
      });
    },
    T: () => {
    },
    // Truncate,
    C: () => {
    }
    // Commit
  }).reduce(char2, {})[x2[0]](x2);
}
function tuples(x2, columns, xi, transform) {
  let type, column, value;
  const row = transform.raw ? new Array(columns.length) : {};
  for (let i = 0; i < columns.length; i++) {
    type = x2[xi++];
    column = columns[i];
    value = type === 110 ? null : type === 117 ? void 0 : column.parser === void 0 ? x2.toString("utf8", xi + 4, xi += 4 + x2.readUInt32BE(xi)) : column.parser.array === true ? column.parser(x2.toString("utf8", xi + 5, xi += 4 + x2.readUInt32BE(xi))) : column.parser(x2.toString("utf8", xi + 4, xi += 4 + x2.readUInt32BE(xi)));
    transform.raw ? row[i] = transform.raw === true ? value : transform.value.from ? transform.value.from(value, column) : value : row[column.name] = transform.value.from ? transform.value.from(value, column) : value;
  }
  return {
    i: xi,
    row: transform.row.from ? transform.row.from(row) : row
  };
}
function parseEvent(x2) {
  const xs = x2.match(/^(\*|insert|update|delete)?:?([^.]+?\.?[^=]+)?=?(.+)?/i) || [];
  if (!xs) throw new Error("Malformed subscribe pattern: " + x2);
  const [, command, path, key] = xs;
  return (command || "*") + (path ? ":" + (path.indexOf(".") === -1 ? "public." + path : path) : "") + (key ? "=" + key : "");
}
function largeObject(sql2, oid, mode = 131072 | 262144) {
  return new Promise(async (resolve, reject) => {
    await sql2.begin(async (sql3) => {
      let finish;
      !oid && ([{
        oid
      }] = await sql3`select lo_creat(-1) as oid`);
      const [{
        fd
      }] = await sql3`select lo_open(${oid}, ${mode}) as fd`;
      const lo = {
        writable,
        readable,
        close: () => sql3`select lo_close(${fd})`.then(finish),
        tell: () => sql3`select lo_tell64(${fd})`,
        read: (x2) => sql3`select loread(${fd}, ${x2}) as data`,
        write: (x2) => sql3`select lowrite(${fd}, ${x2})`,
        truncate: (x2) => sql3`select lo_truncate64(${fd}, ${x2})`,
        seek: (x2, whence = 0) => sql3`select lo_lseek64(${fd}, ${x2}, ${whence})`,
        size: () => sql3`
          select
            lo_lseek64(${fd}, location, 0) as position,
            seek.size
          from (
            select
              lo_lseek64($1, 0, 2) as size,
              tell.location
            from (select lo_tell64($1) as location) tell
          ) seek
        `
      };
      resolve(lo);
      return new Promise(async (r2) => finish = r2);
      async function readable({
        highWaterMark = 2048 * 8,
        start = 0,
        end = Infinity
      } = {}) {
        let max = end - start;
        start && await lo.seek(start);
        return new Stream.Readable({
          highWaterMark,
          async read(size2) {
            const l2 = size2 > max ? size2 - max : size2;
            max -= size2;
            const [{
              data
            }] = await lo.read(l2);
            this.push(data);
            if (data.length < size2) this.push(null);
          }
        });
      }
      async function writable({
        highWaterMark = 2048 * 8,
        start = 0
      } = {}) {
        start && await lo.seek(start);
        return new Stream.Writable({
          highWaterMark,
          write(chunk, encoding, callback) {
            lo.write(chunk).then(() => callback(), callback);
          }
        });
      }
    }).catch(reject);
  });
}
Object.assign(Postgres, {
  PostgresError,
  toPascal,
  pascal,
  toCamel,
  camel,
  toKebab,
  kebab,
  fromPascal,
  fromCamel,
  fromKebab,
  BigInt: {
    to: 20,
    from: [20],
    parse: (x2) => BigInt(x2),
    // eslint-disable-line
    serialize: (x2) => x2.toString()
  }
});
function Postgres(a2, b2) {
  const options = parseOptions(a2, b2), subscribe = options.no_subscribe || Subscribe(Postgres, {
    ...options
  });
  let ending = false;
  const queries = Queue(), connecting = Queue(), reserved = Queue(), closed = Queue(), ended = Queue(), open = Queue(), busy = Queue(), full = Queue(), queues = {
    connecting,
    closed
  };
  const connections = [...Array(options.max)].map(() => Connection(options, queues, {
    onopen,
    onend,
    onclose
  }));
  const sql2 = Sql(handler2);
  Object.assign(sql2, {
    get parameters() {
      return options.parameters;
    },
    largeObject: largeObject.bind(null, sql2),
    subscribe,
    CLOSE,
    END: CLOSE,
    PostgresError,
    options,
    reserve,
    listen,
    begin,
    close,
    end
  });
  return sql2;
  function Sql(handler3) {
    handler3.debug = options.debug;
    Object.entries(options.types).reduce((acc, [name, type]) => {
      acc[name] = (x2) => new Parameter(x2, type.to);
      return acc;
    }, typed);
    Object.assign(sql3, {
      types: typed,
      typed,
      unsafe,
      notify,
      array,
      json: json2,
      file
    });
    return sql3;
    function typed(value, type) {
      return new Parameter(value, type);
    }
    function sql3(strings, ...args) {
      const query = strings && Array.isArray(strings.raw) ? new Query(strings, args, handler3, cancel) : typeof strings === "string" && !args.length ? new Identifier(options.transform.column.to ? options.transform.column.to(strings) : strings) : new Builder(strings, args);
      return query;
    }
    function unsafe(string, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query = new Query([string], args, handler3, cancel, {
        prepare: false,
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query;
    }
    function file(path, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query = new Query([], args, (query2) => {
        fs.readFile(path, "utf8", (err, string) => {
          if (err) return query2.reject(err);
          query2.strings = [string];
          handler3(query2);
        });
      }, cancel, {
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query;
    }
  }
  async function listen(name, fn2, onlisten) {
    const listener = {
      fn: fn2,
      onlisten
    };
    const sql3 = listen.sql || (listen.sql = Postgres({
      ...options,
      max: 1,
      idle_timeout: null,
      max_lifetime: null,
      fetch_types: false,
      onclose() {
        Object.entries(listen.channels).forEach(([name2, {
          listeners
        }]) => {
          delete listen.channels[name2];
          Promise.all(listeners.map((l2) => listen(name2, l2.fn, l2.onlisten).catch(() => {
          })));
        });
      },
      onnotify(c2, x2) {
        c2 in listen.channels && listen.channels[c2].listeners.forEach((l2) => l2.fn(x2));
      }
    }));
    const channels = listen.channels || (listen.channels = {}), exists2 = name in channels;
    if (exists2) {
      channels[name].listeners.push(listener);
      const result2 = await channels[name].result;
      listener.onlisten && listener.onlisten();
      return {
        state: result2.state,
        unlisten
      };
    }
    channels[name] = {
      result: sql3`listen ${sql3.unsafe('"' + name.replace(/"/g, '""') + '"')}`,
      listeners: [listener]
    };
    const result = await channels[name].result;
    listener.onlisten && listener.onlisten();
    return {
      state: result.state,
      unlisten
    };
    async function unlisten() {
      if (name in channels === false) return;
      channels[name].listeners = channels[name].listeners.filter((x2) => x2 !== listener);
      if (channels[name].listeners.length) return;
      delete channels[name];
      return sql3`unlisten ${sql3.unsafe('"' + name.replace(/"/g, '""') + '"')}`;
    }
  }
  async function notify(channel, payload) {
    return await sql2`select pg_notify(${channel}, ${"" + payload})`;
  }
  async function reserve() {
    const queue = Queue();
    const c2 = open.length ? open.shift() : await new Promise((resolve, reject) => {
      const query = {
        reserve: resolve,
        reject
      };
      queries.push(query);
      closed.length && connect(closed.shift(), query);
    });
    move(c2, reserved);
    c2.reserved = () => queue.length ? c2.execute(queue.shift()) : move(c2, reserved);
    c2.reserved.release = true;
    const sql3 = Sql(handler3);
    sql3.release = () => {
      c2.reserved = null;
      onopen(c2);
    };
    return sql3;
    function handler3(q2) {
      c2.queue === full ? queue.push(q2) : c2.execute(q2) || move(c2, full);
    }
  }
  async function begin(options2, fn2) {
    !fn2 && (fn2 = options2, options2 = "");
    const queries2 = Queue();
    let savepoints = 0, connection2, prepare = null;
    try {
      await sql2.unsafe("begin " + options2.replace(/[^a-z ]/ig, ""), [], {
        onexecute
      }).execute();
      return await Promise.race([scope2(connection2, fn2), new Promise((_2, reject) => connection2.onclose = reject)]);
    } catch (error) {
      throw error;
    }
    async function scope2(c2, fn3, name) {
      const sql3 = Sql(handler3);
      sql3.savepoint = savepoint;
      sql3.prepare = (x2) => prepare = x2.replace(/[^a-z0-9$-_. ]/gi);
      let uncaughtError, result;
      name && await sql3`savepoint ${sql3(name)}`;
      try {
        result = await new Promise((resolve, reject) => {
          const x2 = fn3(sql3);
          Promise.resolve(Array.isArray(x2) ? Promise.all(x2) : x2).then(resolve, reject);
        });
        if (uncaughtError) throw uncaughtError;
      } catch (e2) {
        await (name ? sql3`rollback to ${sql3(name)}` : sql3`rollback`);
        throw e2 instanceof PostgresError && e2.code === "25P02" && uncaughtError || e2;
      }
      if (!name) {
        prepare ? await sql3`prepare transaction '${sql3.unsafe(prepare)}'` : await sql3`commit`;
      }
      return result;
      function savepoint(name2, fn4) {
        if (name2 && Array.isArray(name2.raw)) return savepoint((sql4) => sql4.apply(sql4, arguments));
        arguments.length === 1 && (fn4 = name2, name2 = null);
        return scope2(c2, fn4, "s" + savepoints++ + (name2 ? "_" + name2 : ""));
      }
      function handler3(q2) {
        q2.catch((e2) => uncaughtError || (uncaughtError = e2));
        c2.queue === full ? queries2.push(q2) : c2.execute(q2) || move(c2, full);
      }
    }
    function onexecute(c2) {
      connection2 = c2;
      move(c2, reserved);
      c2.reserved = () => queries2.length ? c2.execute(queries2.shift()) : move(c2, reserved);
    }
  }
  function move(c2, queue) {
    c2.queue.remove(c2);
    queue.push(c2);
    c2.queue = queue;
    queue === open ? c2.idleTimer.start() : c2.idleTimer.cancel();
    return c2;
  }
  function json2(x2) {
    return new Parameter(x2, 3802);
  }
  function array(x2, type) {
    if (!Array.isArray(x2)) return array(Array.from(arguments));
    return new Parameter(x2, type || (x2.length ? inferType(x2) || 25 : 0), options.shared.typeArrayMap);
  }
  function handler2(query) {
    if (ending) return query.reject(Errors.connection("CONNECTION_ENDED", options, options));
    if (open.length) return go(open.shift(), query);
    if (closed.length) return connect(closed.shift(), query);
    busy.length ? go(busy.shift(), query) : queries.push(query);
  }
  function go(c2, query) {
    return c2.execute(query) ? move(c2, busy) : move(c2, full);
  }
  function cancel(query) {
    return new Promise((resolve, reject) => {
      query.state ? query.active ? Connection(options).cancel(query.state, resolve, reject) : query.cancelled = {
        resolve,
        reject
      } : (queries.remove(query), query.cancelled = true, query.reject(Errors.generic("57014", "canceling statement due to user request")), resolve());
    });
  }
  async function end({
    timeout = null
  } = {}) {
    if (ending) return ending;
    await 1;
    let timer2;
    return ending = Promise.race([new Promise((r2) => timeout !== null && (timer2 = setTimeout(destroy, timeout * 1e3, r2))), Promise.all(connections.map((c2) => c2.end()).concat(listen.sql ? listen.sql.end({
      timeout: 0
    }) : [], subscribe.sql ? subscribe.sql.end({
      timeout: 0
    }) : []))]).then(() => clearTimeout(timer2));
  }
  async function close() {
    await Promise.all(connections.map((c2) => c2.end()));
  }
  async function destroy(resolve) {
    await Promise.all(connections.map((c2) => c2.terminate()));
    while (queries.length) queries.shift().reject(Errors.connection("CONNECTION_DESTROYED", options));
    resolve();
  }
  function connect(c2, query) {
    move(c2, connecting);
    c2.connect(query);
    return c2;
  }
  function onend(c2) {
    move(c2, ended);
  }
  function onopen(c2) {
    if (queries.length === 0) return move(c2, open);
    let max = Math.ceil(queries.length / (connecting.length + 1)), ready = true;
    while (ready && queries.length && max-- > 0) {
      const query = queries.shift();
      if (query.reserve) return query.reserve(c2);
      ready = c2.execute(query);
    }
    ready ? move(c2, busy) : move(c2, full);
  }
  function onclose(c2, e2) {
    move(c2, closed);
    c2.reserved = null;
    c2.onclose && (c2.onclose(e2), c2.onclose = null);
    options.onclose && options.onclose(c2.id);
    queries.length && connect(c2, queries.shift());
  }
}
function parseOptions(a2, b2) {
  if (a2 && a2.shared) return a2;
  const env = process.env, o = (!a2 || typeof a2 === "string" ? b2 : a2) || {}, {
    url,
    multihost
  } = parseUrl(a2), query = [...url.searchParams].reduce((a3, [b3, c2]) => (a3[b3] = c2, a3), {}), host = o.hostname || o.host || multihost || url.hostname || env.PGHOST || "localhost", port = o.port || url.port || env.PGPORT || 5432, user = o.user || o.username || url.username || env.PGUSERNAME || env.PGUSER || osUsername();
  o.no_prepare && (o.prepare = false);
  query.sslmode && (query.ssl = query.sslmode, delete query.sslmode);
  "timeout" in o && (console.log("The timeout option is deprecated, use idle_timeout instead"), o.idle_timeout = o.timeout);
  query.sslrootcert === "system" && (query.ssl = "verify-full");
  const ints = ["idle_timeout", "connect_timeout", "max_lifetime", "max_pipeline", "backoff", "keep_alive"];
  const defaults = {
    max: globalThis.Cloudflare ? 3 : 10,
    ssl: false,
    sslnegotiation: null,
    idle_timeout: null,
    connect_timeout: 30,
    max_lifetime,
    max_pipeline: 100,
    backoff,
    keep_alive: 60,
    prepare: true,
    debug: false,
    fetch_types: true,
    publications: "alltables",
    target_session_attrs: null
  };
  return {
    host: Array.isArray(host) ? host : host.split(",").map((x2) => x2.split(":")[0]),
    port: Array.isArray(port) ? port : host.split(",").map((x2) => parseInt(x2.split(":")[1] || port)),
    path: o.path || host.indexOf("/") > -1 && host + "/.s.PGSQL." + port,
    database: o.database || o.db || (url.pathname || "").slice(1) || env.PGDATABASE || user,
    user,
    pass: o.pass || o.password || url.password || env.PGPASSWORD || "",
    ...Object.entries(defaults).reduce((acc, [k2, d2]) => {
      const value = k2 in o ? o[k2] : k2 in query ? query[k2] === "disable" || query[k2] === "false" ? false : query[k2] : env["PG" + k2.toUpperCase()] || d2;
      acc[k2] = typeof value === "string" && ints.includes(k2) ? +value : value;
      return acc;
    }, {}),
    connection: {
      application_name: env.PGAPPNAME || "postgres.js",
      ...o.connection,
      ...Object.entries(query).reduce((acc, [k2, v2]) => (k2 in defaults || (acc[k2] = v2), acc), {})
    },
    types: o.types || {},
    target_session_attrs: tsa(o, url, env),
    onnotice: o.onnotice,
    onnotify: o.onnotify,
    onclose: o.onclose,
    onparameter: o.onparameter,
    socket: o.socket,
    transform: parseTransform(o.transform || {
      undefined: void 0
    }),
    parameters: {},
    shared: {
      retries: 0,
      typeArrayMap: {}
    },
    ...mergeUserTypes(o.types)
  };
}
function tsa(o, url, env) {
  const x2 = o.target_session_attrs || url.searchParams.get("target_session_attrs") || env.PGTARGETSESSIONATTRS;
  if (!x2 || ["read-write", "read-only", "primary", "standby", "prefer-standby"].includes(x2)) return x2;
  throw new Error("target_session_attrs " + x2 + " is not supported");
}
function backoff(retries) {
  return (0.5 + Math.random() / 2) * Math.min(3 ** retries / 100, 20);
}
function max_lifetime() {
  return 60 * (30 + Math.random() * 30);
}
function parseTransform(x2) {
  return {
    undefined: x2.undefined,
    column: {
      from: typeof x2.column === "function" ? x2.column : x2.column && x2.column.from,
      to: x2.column && x2.column.to
    },
    value: {
      from: typeof x2.value === "function" ? x2.value : x2.value && x2.value.from,
      to: x2.value && x2.value.to
    },
    row: {
      from: typeof x2.row === "function" ? x2.row : x2.row && x2.row.from,
      to: x2.row && x2.row.to
    }
  };
}
function parseUrl(url) {
  if (!url || typeof url !== "string") return {
    url: {
      searchParams: /* @__PURE__ */ new Map()
    }
  };
  let host = url;
  host = host.slice(host.indexOf("://") + 3).split(/[?/]/)[0];
  host = decodeURIComponent(host.slice(host.indexOf("@") + 1));
  const urlObj = new URL(url.replace(host, host.split(",")[0]));
  return {
    url: {
      username: decodeURIComponent(urlObj.username),
      password: decodeURIComponent(urlObj.password),
      host: urlObj.host,
      hostname: urlObj.hostname,
      port: urlObj.port,
      pathname: urlObj.pathname,
      searchParams: urlObj.searchParams
    },
    multihost: host.indexOf(",") > -1 && host
  };
}
function osUsername() {
  try {
    return os.userInfo().username;
  } catch (_2) {
    return process.env.USERNAME || process.env.USER || process.env.LOGNAME;
  }
}
class PostgresJsPreparedQuery extends PgPreparedQuery {
  constructor(client, queryString, params, logger, fields, _isResponseInArrayMode, customResultMapper) {
    super({
      sql: queryString,
      params
    });
    this.client = client;
    this.queryString = queryString;
    this.params = params;
    this.logger = logger;
    this.fields = fields;
    this._isResponseInArrayMode = _isResponseInArrayMode;
    this.customResultMapper = customResultMapper;
  }
  static [entityKind$1] = "PostgresJsPreparedQuery";
  async execute(placeholderValues = {}) {
    return tracer$1.startActiveSpan("drizzle.execute", async (span) => {
      const params = fillPlaceholders(this.params, placeholderValues);
      span?.setAttributes({
        "drizzle.query.text": this.queryString,
        "drizzle.query.params": JSON.stringify(params)
      });
      this.logger.logQuery(this.queryString, params);
      const {
        fields,
        queryString: query,
        client,
        joinsNotNullableMap,
        customResultMapper
      } = this;
      if (!fields && !customResultMapper) {
        return tracer$1.startActiveSpan("drizzle.driver.execute", () => {
          return client.unsafe(query, params);
        });
      }
      const rows = await tracer$1.startActiveSpan("drizzle.driver.execute", () => {
        span?.setAttributes({
          "drizzle.query.text": query,
          "drizzle.query.params": JSON.stringify(params)
        });
        return client.unsafe(query, params).values();
      });
      return tracer$1.startActiveSpan("drizzle.mapResponse", () => {
        return customResultMapper ? customResultMapper(rows) : rows.map((row) => mapResultRow(fields, row, joinsNotNullableMap));
      });
    });
  }
  all(placeholderValues = {}) {
    return tracer$1.startActiveSpan("drizzle.execute", async (span) => {
      const params = fillPlaceholders(this.params, placeholderValues);
      span?.setAttributes({
        "drizzle.query.text": this.queryString,
        "drizzle.query.params": JSON.stringify(params)
      });
      this.logger.logQuery(this.queryString, params);
      return tracer$1.startActiveSpan("drizzle.driver.execute", () => {
        span?.setAttributes({
          "drizzle.query.text": this.queryString,
          "drizzle.query.params": JSON.stringify(params)
        });
        return this.client.unsafe(this.queryString, params);
      });
    });
  }
  /** @internal */
  isResponseInArrayMode() {
    return this._isResponseInArrayMode;
  }
}
class PostgresJsSession extends PgSession {
  constructor(client, dialect, schema2, options = {}) {
    super(dialect);
    this.client = client;
    this.schema = schema2;
    this.options = options;
    this.logger = options.logger ?? new NoopLogger();
  }
  static [entityKind$1] = "PostgresJsSession";
  logger;
  prepareQuery(query, fields, name, isResponseInArrayMode, customResultMapper) {
    return new PostgresJsPreparedQuery(this.client, query.sql, query.params, this.logger, fields, isResponseInArrayMode, customResultMapper);
  }
  query(query, params) {
    this.logger.logQuery(query, params);
    return this.client.unsafe(query, params).values();
  }
  queryObjects(query, params) {
    return this.client.unsafe(query, params);
  }
  transaction(transaction, config2) {
    return this.client.begin(async (client) => {
      const session = new PostgresJsSession(client, this.dialect, this.schema, this.options);
      const tx = new PostgresJsTransaction(this.dialect, session, this.schema);
      if (config2) {
        await tx.setTransaction(config2);
      }
      return transaction(tx);
    });
  }
}
class PostgresJsTransaction extends PgTransaction {
  constructor(dialect, session, schema2, nestedIndex = 0) {
    super(dialect, session, schema2, nestedIndex);
    this.session = session;
  }
  static [entityKind$1] = "PostgresJsTransaction";
  transaction(transaction) {
    return this.session.client.savepoint((client) => {
      const session = new PostgresJsSession(client, this.dialect, this.schema, this.session.options);
      const tx = new PostgresJsTransaction(this.dialect, session, this.schema);
      return transaction(tx);
    });
  }
}
class PostgresJsDatabase extends PgDatabase {
  static [entityKind$1] = "PostgresJsDatabase";
}
function construct(client, config2 = {}) {
  const transparentParser = (val) => val;
  for (const type of ["1184", "1082", "1083", "1114", "1182", "1185", "1115", "1231"]) {
    client.options.parsers[type] = transparentParser;
    client.options.serializers[type] = transparentParser;
  }
  client.options.serializers["114"] = transparentParser;
  client.options.serializers["3802"] = transparentParser;
  const dialect = new PgDialect({
    casing: config2.casing
  });
  let logger;
  if (config2.logger === true) {
    logger = new DefaultLogger();
  } else if (config2.logger !== false) {
    logger = config2.logger;
  }
  let schema2;
  if (config2.schema) {
    const tablesConfig = extractTablesRelationalConfig(config2.schema, createTableRelationsHelpers);
    schema2 = {
      fullSchema: config2.schema,
      schema: tablesConfig.tables,
      tableNamesMap: tablesConfig.tableNamesMap
    };
  }
  const session = new PostgresJsSession(client, dialect, schema2, {
    logger
  });
  const db2 = new PostgresJsDatabase(dialect, session, schema2);
  db2.$client = client;
  return db2;
}
function drizzle(...params) {
  if (typeof params[0] === "string") {
    const instance = Postgres(params[0]);
    return construct(instance, params[1]);
  }
  if (isConfig(params[0])) {
    const {
      connection: connection2,
      client,
      ...drizzleConfig
    } = params[0];
    if (client) return construct(client, drizzleConfig);
    if (typeof connection2 === "object" && connection2.url !== void 0) {
      const {
        url,
        ...config2
      } = connection2;
      const instance2 = Postgres(url, config2);
      return construct(instance2, drizzleConfig);
    }
    const instance = Postgres(connection2);
    return construct(instance, drizzleConfig);
  }
  return construct(params[0], params[1]);
}
((drizzle2) => {
  function mock(config2) {
    return construct({
      options: {
        parsers: {},
        serializers: {}
      }
    }, config2);
  }
  drizzle2.mock = mock;
})(drizzle || (drizzle = {}));
const connectionString = Deno.env.get("DATABASE_URL");
const queryClient = Postgres(connectionString);
const db = drizzle(queryClient, {
  schema
});
const entityKind = /* @__PURE__ */ Symbol.for("drizzle:entityKind");
function is(value, type) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (value instanceof type) {
    return true;
  }
  if (!Object.prototype.hasOwnProperty.call(type, entityKind)) {
    throw new Error(`Class "${type.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
  }
  let cls = Object.getPrototypeOf(value).constructor;
  if (cls) {
    while (cls) {
      if (entityKind in cls && cls[entityKind] === type[entityKind]) {
        return true;
      }
      cls = Object.getPrototypeOf(cls);
    }
  }
  return false;
}
class Column2 {
  constructor(table, config2) {
    this.table = table;
    this.config = config2;
    this.name = config2.name;
    this.keyAsName = config2.keyAsName;
    this.notNull = config2.notNull;
    this.default = config2.default;
    this.defaultFn = config2.defaultFn;
    this.onUpdateFn = config2.onUpdateFn;
    this.hasDefault = config2.hasDefault;
    this.primary = config2.primaryKey;
    this.isUnique = config2.isUnique;
    this.uniqueName = config2.uniqueName;
    this.uniqueType = config2.uniqueType;
    this.dataType = config2.dataType;
    this.columnType = config2.columnType;
    this.generated = config2.generated;
    this.generatedIdentity = config2.generatedIdentity;
  }
  static [entityKind] = "Column";
  name;
  keyAsName;
  primary;
  notNull;
  default;
  defaultFn;
  onUpdateFn;
  hasDefault;
  isUnique;
  uniqueName;
  uniqueType;
  dataType;
  columnType;
  enumValues = void 0;
  generated = void 0;
  generatedIdentity = void 0;
  config;
  mapFromDriverValue(value) {
    return value;
  }
  mapToDriverValue(value) {
    return value;
  }
  // ** @internal */
  shouldDisableInsert() {
    return this.config.generated !== void 0 && this.config.generated.type !== "byDefault";
  }
}
const TableName = /* @__PURE__ */ Symbol.for("drizzle:Name");
const isPgEnumSym = /* @__PURE__ */ Symbol.for("drizzle:isPgEnum");
function isPgEnum(obj) {
  return !!obj && typeof obj === "function" && isPgEnumSym in obj && obj[isPgEnumSym] === true;
}
class Subquery2 {
  static [entityKind] = "Subquery";
  constructor(sql2, selection, alias, isWith = false) {
    this._ = {
      brand: "Subquery",
      sql: sql2,
      selectedFields: selection,
      alias,
      isWith
    };
  }
  // getSQL(): SQL<unknown> {
  // 	return new SQL([this]);
  // }
}
const tracer = {
  startActiveSpan(name, fn2) {
    {
      return fn2();
    }
  }
};
const ViewBaseConfig = /* @__PURE__ */ Symbol.for("drizzle:ViewBaseConfig");
const Schema = /* @__PURE__ */ Symbol.for("drizzle:Schema");
const Columns = /* @__PURE__ */ Symbol.for("drizzle:Columns");
const ExtraConfigColumns = /* @__PURE__ */ Symbol.for("drizzle:ExtraConfigColumns");
const OriginalName = /* @__PURE__ */ Symbol.for("drizzle:OriginalName");
const BaseName = /* @__PURE__ */ Symbol.for("drizzle:BaseName");
const IsAlias = /* @__PURE__ */ Symbol.for("drizzle:IsAlias");
const ExtraConfigBuilder = /* @__PURE__ */ Symbol.for("drizzle:ExtraConfigBuilder");
const IsDrizzleTable = /* @__PURE__ */ Symbol.for("drizzle:IsDrizzleTable");
class Table2 {
  static [entityKind] = "Table";
  /** @internal */
  static Symbol = {
    Name: TableName,
    Schema,
    OriginalName,
    Columns,
    ExtraConfigColumns,
    BaseName,
    IsAlias,
    ExtraConfigBuilder
  };
  /**
   * @internal
   * Can be changed if the table is aliased.
   */
  [TableName];
  /**
   * @internal
   * Used to store the original name of the table, before any aliasing.
   */
  [OriginalName];
  /** @internal */
  [Schema];
  /** @internal */
  [Columns];
  /** @internal */
  [ExtraConfigColumns];
  /**
   *  @internal
   * Used to store the table name before the transformation via the `tableCreator` functions.
   */
  [BaseName];
  /** @internal */
  [IsAlias] = false;
  /** @internal */
  [IsDrizzleTable] = true;
  /** @internal */
  [ExtraConfigBuilder] = void 0;
  constructor(name, schema2, baseName) {
    this[TableName] = this[OriginalName] = name;
    this[Schema] = schema2;
    this[BaseName] = baseName;
  }
}
function isSQLWrapper(value) {
  return value !== null && value !== void 0 && typeof value.getSQL === "function";
}
function mergeQueries(queries) {
  const result = {
    sql: "",
    params: []
  };
  for (const query of queries) {
    result.sql += query.sql;
    result.params.push(...query.params);
    if (query.typings?.length) {
      if (!result.typings) {
        result.typings = [];
      }
      result.typings.push(...query.typings);
    }
  }
  return result;
}
class StringChunk2 {
  static [entityKind] = "StringChunk";
  value;
  constructor(value) {
    this.value = Array.isArray(value) ? value : [value];
  }
  getSQL() {
    return new SQL2([this]);
  }
}
class SQL2 {
  constructor(queryChunks) {
    this.queryChunks = queryChunks;
  }
  static [entityKind] = "SQL";
  /** @internal */
  decoder = noopDecoder;
  shouldInlineParams = false;
  append(query) {
    this.queryChunks.push(...query.queryChunks);
    return this;
  }
  toQuery(config2) {
    return tracer.startActiveSpan("drizzle.buildSQL", (span) => {
      const query = this.buildQueryFromSourceParams(this.queryChunks, config2);
      span?.setAttributes({
        "drizzle.query.text": query.sql,
        "drizzle.query.params": JSON.stringify(query.params)
      });
      return query;
    });
  }
  buildQueryFromSourceParams(chunks, _config) {
    const config2 = Object.assign({}, _config, {
      inlineParams: _config.inlineParams || this.shouldInlineParams,
      paramStartIndex: _config.paramStartIndex || {
        value: 0
      }
    });
    const {
      casing,
      escapeName,
      escapeParam,
      prepareTyping,
      inlineParams,
      paramStartIndex
    } = config2;
    return mergeQueries(chunks.map((chunk) => {
      if (is(chunk, StringChunk2)) {
        return {
          sql: chunk.value.join(""),
          params: []
        };
      }
      if (is(chunk, Name2)) {
        return {
          sql: escapeName(chunk.value),
          params: []
        };
      }
      if (chunk === void 0) {
        return {
          sql: "",
          params: []
        };
      }
      if (Array.isArray(chunk)) {
        const result = [new StringChunk2("(")];
        for (const [i, p2] of chunk.entries()) {
          result.push(p2);
          if (i < chunk.length - 1) {
            result.push(new StringChunk2(", "));
          }
        }
        result.push(new StringChunk2(")"));
        return this.buildQueryFromSourceParams(result, config2);
      }
      if (is(chunk, SQL2)) {
        return this.buildQueryFromSourceParams(chunk.queryChunks, {
          ...config2,
          inlineParams: inlineParams || chunk.shouldInlineParams
        });
      }
      if (is(chunk, Table2)) {
        const schemaName = chunk[Table2.Symbol.Schema];
        const tableName = chunk[Table2.Symbol.Name];
        return {
          sql: schemaName === void 0 || chunk[IsAlias] ? escapeName(tableName) : escapeName(schemaName) + "." + escapeName(tableName),
          params: []
        };
      }
      if (is(chunk, Column2)) {
        const columnName = casing.getColumnCasing(chunk);
        if (_config.invokeSource === "indexes") {
          return {
            sql: escapeName(columnName),
            params: []
          };
        }
        const schemaName = chunk.table[Table2.Symbol.Schema];
        return {
          sql: chunk.table[IsAlias] || schemaName === void 0 ? escapeName(chunk.table[Table2.Symbol.Name]) + "." + escapeName(columnName) : escapeName(schemaName) + "." + escapeName(chunk.table[Table2.Symbol.Name]) + "." + escapeName(columnName),
          params: []
        };
      }
      if (is(chunk, View2)) {
        const schemaName = chunk[ViewBaseConfig].schema;
        const viewName = chunk[ViewBaseConfig].name;
        return {
          sql: schemaName === void 0 || chunk[ViewBaseConfig].isAlias ? escapeName(viewName) : escapeName(schemaName) + "." + escapeName(viewName),
          params: []
        };
      }
      if (is(chunk, Param2)) {
        if (is(chunk.value, Placeholder2)) {
          return {
            sql: escapeParam(paramStartIndex.value++, chunk),
            params: [chunk],
            typings: ["none"]
          };
        }
        const mappedValue = chunk.value === null ? null : chunk.encoder.mapToDriverValue(chunk.value);
        if (is(mappedValue, SQL2)) {
          return this.buildQueryFromSourceParams([mappedValue], config2);
        }
        if (inlineParams) {
          return {
            sql: this.mapInlineParam(mappedValue, config2),
            params: []
          };
        }
        let typings = ["none"];
        if (prepareTyping) {
          typings = [prepareTyping(chunk.encoder)];
        }
        return {
          sql: escapeParam(paramStartIndex.value++, mappedValue),
          params: [mappedValue],
          typings
        };
      }
      if (is(chunk, Placeholder2)) {
        return {
          sql: escapeParam(paramStartIndex.value++, chunk),
          params: [chunk],
          typings: ["none"]
        };
      }
      if (is(chunk, SQL2.Aliased) && chunk.fieldAlias !== void 0) {
        return {
          sql: escapeName(chunk.fieldAlias),
          params: []
        };
      }
      if (is(chunk, Subquery2)) {
        if (chunk._.isWith) {
          return {
            sql: escapeName(chunk._.alias),
            params: []
          };
        }
        return this.buildQueryFromSourceParams([new StringChunk2("("), chunk._.sql, new StringChunk2(") "), new Name2(chunk._.alias)], config2);
      }
      if (isPgEnum(chunk)) {
        if (chunk.schema) {
          return {
            sql: escapeName(chunk.schema) + "." + escapeName(chunk.enumName),
            params: []
          };
        }
        return {
          sql: escapeName(chunk.enumName),
          params: []
        };
      }
      if (isSQLWrapper(chunk)) {
        if (chunk.shouldOmitSQLParens?.()) {
          return this.buildQueryFromSourceParams([chunk.getSQL()], config2);
        }
        return this.buildQueryFromSourceParams([new StringChunk2("("), chunk.getSQL(), new StringChunk2(")")], config2);
      }
      if (inlineParams) {
        return {
          sql: this.mapInlineParam(chunk, config2),
          params: []
        };
      }
      return {
        sql: escapeParam(paramStartIndex.value++, chunk),
        params: [chunk],
        typings: ["none"]
      };
    }));
  }
  mapInlineParam(chunk, {
    escapeString
  }) {
    if (chunk === null) {
      return "null";
    }
    if (typeof chunk === "number" || typeof chunk === "boolean") {
      return chunk.toString();
    }
    if (typeof chunk === "string") {
      return escapeString(chunk);
    }
    if (typeof chunk === "object") {
      const mappedValueAsString = chunk.toString();
      if (mappedValueAsString === "[object Object]") {
        return escapeString(JSON.stringify(chunk));
      }
      return escapeString(mappedValueAsString);
    }
    throw new Error("Unexpected param value: " + chunk);
  }
  getSQL() {
    return this;
  }
  as(alias) {
    if (alias === void 0) {
      return this;
    }
    return new SQL2.Aliased(this, alias);
  }
  mapWith(decoder) {
    this.decoder = typeof decoder === "function" ? {
      mapFromDriverValue: decoder
    } : decoder;
    return this;
  }
  inlineParams() {
    this.shouldInlineParams = true;
    return this;
  }
  /**
   * This method is used to conditionally include a part of the query.
   *
   * @param condition - Condition to check
   * @returns itself if the condition is `true`, otherwise `undefined`
   */
  if(condition) {
    return condition ? this : void 0;
  }
}
class Name2 {
  constructor(value) {
    this.value = value;
  }
  static [entityKind] = "Name";
  brand;
  getSQL() {
    return new SQL2([this]);
  }
}
function isDriverValueEncoder(value) {
  return typeof value === "object" && value !== null && "mapToDriverValue" in value && typeof value.mapToDriverValue === "function";
}
const noopDecoder = {
  mapFromDriverValue: (value) => value
};
const noopEncoder = {
  mapToDriverValue: (value) => value
};
({
  ...noopDecoder,
  ...noopEncoder
});
class Param2 {
  /**
   * @param value - Parameter value
   * @param encoder - Encoder to convert the value to a driver parameter
   */
  constructor(value, encoder = noopEncoder) {
    this.value = value;
    this.encoder = encoder;
  }
  static [entityKind] = "Param";
  brand;
  getSQL() {
    return new SQL2([this]);
  }
}
function sql(strings, ...params) {
  const queryChunks = [];
  if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
    queryChunks.push(new StringChunk2(strings[0]));
  }
  for (const [paramIndex, param2] of params.entries()) {
    queryChunks.push(param2, new StringChunk2(strings[paramIndex + 1]));
  }
  return new SQL2(queryChunks);
}
((sql2) => {
  function empty() {
    return new SQL2([]);
  }
  sql2.empty = empty;
  function fromList(list) {
    return new SQL2(list);
  }
  sql2.fromList = fromList;
  function raw(str) {
    return new SQL2([new StringChunk2(str)]);
  }
  sql2.raw = raw;
  function join(chunks, separator) {
    const result = [];
    for (const [i, chunk] of chunks.entries()) {
      if (i > 0 && separator !== void 0) {
        result.push(separator);
      }
      result.push(chunk);
    }
    return new SQL2(result);
  }
  sql2.join = join;
  function identifier(value) {
    return new Name2(value);
  }
  sql2.identifier = identifier;
  function placeholder2(name2) {
    return new Placeholder2(name2);
  }
  sql2.placeholder = placeholder2;
  function param2(value, encoder) {
    return new Param2(value, encoder);
  }
  sql2.param = param2;
})(sql || (sql = {}));
((SQL22) => {
  class Aliased {
    constructor(sql2, fieldAlias) {
      this.sql = sql2;
      this.fieldAlias = fieldAlias;
    }
    static [entityKind] = "SQL.Aliased";
    /** @internal */
    isSelectionField = false;
    getSQL() {
      return this.sql;
    }
    /** @internal */
    clone() {
      return new Aliased(this.sql, this.fieldAlias);
    }
  }
  SQL22.Aliased = Aliased;
})(SQL2 || (SQL2 = {}));
class Placeholder2 {
  constructor(name2) {
    this.name = name2;
  }
  static [entityKind] = "Placeholder";
  getSQL() {
    return new SQL2([this]);
  }
}
const IsDrizzleView = /* @__PURE__ */ Symbol.for("drizzle:IsDrizzleView");
class View2 {
  static [entityKind] = "View";
  /** @internal */
  [ViewBaseConfig];
  /** @internal */
  [IsDrizzleView] = true;
  constructor({
    name: name2,
    schema: schema2,
    selectedFields,
    query
  }) {
    this[ViewBaseConfig] = {
      name: name2,
      originalName: name2,
      schema: schema2,
      selectedFields,
      query,
      isExisting: !query,
      isAlias: false
    };
  }
  getSQL() {
    return new SQL2([this]);
  }
}
Column2.prototype.getSQL = function() {
  return new SQL2([this]);
};
Table2.prototype.getSQL = function() {
  return new SQL2([this]);
};
Subquery2.prototype.getSQL = function() {
  return new SQL2([this]);
};
const InlineForeignKeys = /* @__PURE__ */ Symbol.for("drizzle:PgInlineForeignKeys");
const EnableRLS = /* @__PURE__ */ Symbol.for("drizzle:EnableRLS");
class PgTable2 extends Table2 {
  static [entityKind] = "PgTable";
  /** @internal */
  static Symbol = Object.assign({}, Table2.Symbol, {
    InlineForeignKeys,
    EnableRLS
  });
  /**@internal */
  [InlineForeignKeys] = [];
  /** @internal */
  [EnableRLS] = false;
  /** @internal */
  [Table2.Symbol.ExtraConfigBuilder] = void 0;
  /** @internal */
  [Table2.Symbol.ExtraConfigColumns] = {};
}
function bindIfParam(value, column) {
  if (isDriverValueEncoder(column) && !isSQLWrapper(value) && !is(value, Param2) && !is(value, Placeholder2) && !is(value, Column2) && !is(value, Table2) && !is(value, View2)) {
    return new Param2(value, column);
  }
  return value;
}
const eq = (left, right) => {
  return sql`${left} = ${bindIfParam(right, left)}`;
};
function asc(column) {
  return sql`${column} asc`;
}
const $$_tpl_1 = ['<div class="flex min-h-screen items-center justify-center"><p class="text-lg text-gray-500">', "</p></div>"];
const fallbackElements = [{
  id: "s1",
  parentId: null,
  type: "section",
  order: 0,
  data: {},
  styles: {
    width: "full",
    padding: "16",
    paddingX: "6"
  }
}, {
  id: "h1",
  parentId: "s1",
  type: "heading",
  order: 0,
  data: {
    content: "@hi/web",
    tagName: "h1"
  },
  styles: {
    fontSize: "4xl",
    fontWeight: "bold"
  }
}, {
  id: "t1",
  parentId: "s1",
  type: "text",
  order: 1,
  data: {
    content: "Configure SITE_ID and seed the database to render pages."
  },
  styles: {
    fontSize: "lg",
    color: "#6b7280"
  }
}];
const handler$1 = define.handlers({
  async GET(ctx) {
    const siteId = Deno.env.get("SITE_ID");
    if (!siteId) {
      return page({
        error: "SITE_ID not configured",
        elements: null
      });
    }
    const slug = ctx.params.slug ?? "";
    const path = "/" + slug;
    const allPages = await db.select().from(pages).where(eq(pages.siteId, siteId));
    const found = allPages.find((p2) => p2.data?.path === (path === "" ? "/" : path));
    if (!found) {
      return page({
        error: "Page not found: " + (path || "/"),
        elements: null
      });
    }
    const pageElements = await db.select().from(elements).where(eq(elements.pageId, found.id)).orderBy(asc(elements.order));
    const renderElements = pageElements.map((e2) => ({
      id: e2.id,
      parentId: e2.parentId,
      type: e2.type,
      data: e2.data ?? {},
      styles: e2.styles ?? {},
      order: e2.order
    }));
    return page({
      error: null,
      elements: renderElements
    });
  }
});
const __slug__ = define.page(({
  data
}) => {
  if (!data.elements) {
    if (data.error) {
      return a($$_tpl_1, s(data.error));
    }
    return u(PageRenderer, {
      elements: fallbackElements
    });
  }
  return u(PageRenderer, {
    elements: data.elements
  });
});
const routeCss = null;
const css = routeCss;
const config = void 0;
const handler = handler$1;
const handlers = void 0;
const _freshRoute___slug_ = __slug__;
export {
  config,
  css,
  _freshRoute___slug_ as default,
  handler,
  handlers
};
