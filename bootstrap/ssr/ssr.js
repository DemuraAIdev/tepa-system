import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
function t(t4, r2) {
  for (var e2 = 0; e2 < r2.length; e2++) {
    var n2 = r2[e2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t4, "symbol" == typeof (i2 = function(t5, r3) {
      if ("object" != typeof t5 || null === t5)
        return t5;
      var e3 = t5[Symbol.toPrimitive];
      if (void 0 !== e3) {
        var n3 = e3.call(t5, "string");
        if ("object" != typeof n3)
          return n3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t5);
    }(n2.key)) ? i2 : String(i2), n2);
  }
  var i2;
}
function r(r2, e2, n2) {
  return e2 && t(r2.prototype, e2), n2 && t(r2, n2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function e() {
  return e = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var e2 = arguments[r2];
      for (var n2 in e2)
        Object.prototype.hasOwnProperty.call(e2, n2) && (t4[n2] = e2[n2]);
    }
    return t4;
  }, e.apply(this, arguments);
}
function n(t4) {
  return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, n(t4);
}
function i(t4, r2) {
  return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, i(t4, r2);
}
function o(t4, r2, e2) {
  return o = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (t5) {
      return false;
    }
  }() ? Reflect.construct.bind() : function(t5, r3, e3) {
    var n2 = [null];
    n2.push.apply(n2, r3);
    var o2 = new (Function.bind.apply(t5, n2))();
    return e3 && i(o2, e3.prototype), o2;
  }, o.apply(null, arguments);
}
function u(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return u = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, e2);
    }
    function e2() {
      return o(t5, arguments, n(this).constructor);
    }
    return e2.prototype = Object.create(t5.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }), i(e2, t5);
  }, u(t4);
}
var f = String.prototype.replace, a = /%20/g, c = "RFC3986", l = { default: c, formatters: { RFC1738: function(t4) {
  return f.call(t4, a, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: c }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var e2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2)
    void 0 !== t4[n2] && (e2[n2] = t4[n2]);
  return e2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, e2) {
    return t5[e2] = r2[e2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], e2 = [], n2 = 0; n2 < r2.length; ++n2)
    for (var i2 = r2[n2], o2 = i2.obj[i2.prop], u2 = Object.keys(o2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = o2[a2];
      "object" == typeof c2 && null !== c2 && -1 === e2.indexOf(c2) && (r2.push({ obj: o2, prop: a2 }), e2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), e3 = r3.obj[r3.prop];
      if (v(e3)) {
        for (var n3 = [], i3 = 0; i3 < e3.length; ++i3)
          void 0 !== e3[i3] && n3.push(e3[i3]);
        r3.obj[r3.prop] = n3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, e2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === e2)
    return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, r2, e2, n2, i2) {
  if (0 === t4.length)
    return t4;
  var o2 = t4;
  if ("symbol" == typeof t4 ? o2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (o2 = String(t4)), "iso-8859-1" === e2)
    return escape(o2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < o2.length; ++f2) {
    var a2 = o2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || i2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += o2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & o2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var e2 = [], n2 = 0; n2 < t4.length; n2 += 1)
      e2.push(r2(t4[n2]));
    return e2;
  }
  return r2(t4);
}, merge: function t2(r2, e2, n2) {
  if (!e2)
    return r2;
  if ("object" != typeof e2) {
    if (v(r2))
      r2.push(e2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, e2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !s.call(Object.prototype, e2)) && (r2[e2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(e2);
  var i2 = r2;
  return v(r2) && !v(e2) && (i2 = y(r2, n2)), v(r2) && v(e2) ? (e2.forEach(function(e3, i3) {
    if (s.call(r2, i3)) {
      var o2 = r2[i3];
      o2 && "object" == typeof o2 && e3 && "object" == typeof e3 ? r2[i3] = t2(o2, e3, n2) : r2.push(e3);
    } else
      r2[i3] = e3;
  }), r2) : Object.keys(e2).reduce(function(r3, i3) {
    var o2 = e2[i3];
    return r3[i3] = s.call(r3, i3) ? t2(r3[i3], o2, n2) : o2, r3;
  }, i2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, g = Array.isArray, m = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, g(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, e2, n2, i2, o2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(e2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === n2 && g(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (i2)
      return u2 && !p2 ? u2(e2, R.encoder, y2, "key", s2) : e2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? e2 : u2(e2, R.encoder, y2, "key", s2);
      if ("comma" === n2 && p2) {
        for (var O2 = m.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(e2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === n2 && g(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (g(f2))
    k2 = f2;
  else {
    var T2 = Object.keys(h2);
    k2 = a2 ? T2.sort(a2) : T2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var C2 = k2[N2], D2 = "object" == typeof C2 && void 0 !== C2.value ? C2.value : h2[C2];
    if (!o2 || null !== D2) {
      var $2 = g(h2) ? "function" == typeof n2 ? n2(e2, C2) : e2 : e2 + (c2 ? "." + C2 : "[" + C2 + "]");
      w(x2, t3(D2, $2, n2, i2, o2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, T = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, C = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, D = function(t4, r2, e2, n2) {
  if (t4) {
    var i2 = e2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, o2 = /(\[[^[\]]*])/g, u2 = e2.depth > 0 && /(\[[^[\]]*])/.exec(i2), f2 = u2 ? i2.slice(0, u2.index) : i2, a2 = [];
    if (f2) {
      if (!e2.plainObjects && k.call(Object.prototype, f2) && !e2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; e2.depth > 0 && null !== (u2 = o2.exec(i2)) && c2 < e2.depth; ) {
      if (c2 += 1, !e2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !e2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + i2.slice(u2.index) + "]"), function(t5, r3, e3, n3) {
      for (var i3 = n3 ? r3 : C(r3, e3), o3 = t5.length - 1; o3 >= 0; --o3) {
        var u3, f3 = t5[o3];
        if ("[]" === f3 && e3.parseArrays)
          u3 = [].concat(i3);
        else {
          u3 = e3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          e3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && e3.parseArrays && c3 <= e3.arrayLimit ? (u3 = [])[c3] = i3 : "__proto__" !== a3 && (u3[a3] = i3) : u3 = { 0: i3 };
        }
        i3 = u3;
      }
      return i3;
    }(a2, r2, e2, n2);
  }
}, $ = function(t4, r2) {
  var e2 = function(t5) {
    if (!t5)
      return T;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? T.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : T.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : T.arrayLimit, charset: void 0 === t5.charset ? T.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : T.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : T.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : T.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : T.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : T.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : T.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : T.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : T.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : T.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, r3) {
    var e3, n3 = {}, i3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), o3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (e3 = 0; e3 < i3.length; ++e3)
        0 === i3[e3].indexOf("utf8=") && ("utf8=%E2%9C%93" === i3[e3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === i3[e3] && (u3 = "iso-8859-1"), o3 = e3, e3 = i3.length);
    for (e3 = 0; e3 < i3.length; ++e3)
      if (e3 !== o3) {
        var f3, a3, c2 = i3[e3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, T.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), T.decoder, u3, "key"), a3 = d.maybeMap(C(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, T.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), n3[f3] = k.call(n3, f3) ? d.combine(n3[f3], a3) : a3;
      }
    return n3;
  }(t4, e2) : t4, i2 = e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o2 = Object.keys(n2), u2 = 0; u2 < o2.length; ++u2) {
    var f2 = o2[u2], a2 = D(f2, n2[f2], e2, "string" == typeof t4);
    i2 = d.merge(i2, a2, e2);
  }
  return d.compact(i2);
}, F = /* @__PURE__ */ function() {
  function t4(t5, r2, e3) {
    var n2, i2;
    this.name = t5, this.definition = r2, this.bindings = null != (n2 = r2.bindings) ? n2 : {}, this.wheres = null != (i2 = r2.wheres) ? i2 : {}, this.config = e3;
  }
  var e2 = t4.prototype;
  return e2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var e3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, e4, n3, i3) {
      var o3, u3 = "(?<" + n3 + ">" + ((null == (o3 = r2.wheres[n3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return i3 ? "(" + e4 + u3 + ")?" : "" + e4 + u3;
    }).replace(/^\w+:\/\//, ""), n2 = t5.replace(/^\w+:\/\//, "").split("?"), i2 = n2[0], o2 = n2[1], u2 = new RegExp("^" + e3 + "/?$").exec(i2);
    if (u2) {
      for (var f2 in u2.groups)
        u2.groups[f2] = "string" == typeof u2.groups[f2] ? decodeURIComponent(u2.groups[f2]) : u2.groups[f2];
      return { params: u2.groups, query: $(o2) };
    }
    return false;
  }, e2.compile = function(t5) {
    var r2 = this;
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e3, n2, i2) {
      var o2, u2;
      if (!i2 && [null, void 0].includes(t5[n2]))
        throw new Error("Ziggy error: '" + n2 + "' parameter is required for route '" + r2.name + "'.");
      if (r2.wheres[n2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[n2] + ")?" : r2.wheres[n2]) + "$").test(null != (u2 = t5[n2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + n2 + "' parameter does not match required format '" + r2.wheres[n2] + "' for route '" + r2.name + "'.");
      return encodeURI(null != (o2 = t5[n2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.origin + "//", this.origin + "/").replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    var t5 = (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
    return "" === t5 ? "/" : t5;
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), P = /* @__PURE__ */ function(t4) {
  var n2, o2;
  function u2(r2, n3, i2, o3) {
    var u3;
    if (void 0 === i2 && (i2 = true), (u3 = t4.call(this) || this).t = null != o3 ? o3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = e({}, u3.t, { absolute: i2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new F(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(n3);
    }
    return u3;
  }
  o2 = t4, (n2 = u2).prototype = Object.create(o2.prototype), n2.prototype.constructor = n2, i(n2, o2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, n3) {
      var i2;
      return e({}, r3, ((i2 = {})[n3] = t5.u[n3], i2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var e2, n3 = t6, i2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var e3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          e3 = t7.format;
        }
        var n4 = l.formatters[e3], i3 = R.filter;
        return ("function" == typeof t7.filter || g(t7.filter)) && (i3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: i3, format: e3, formatter: n4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof i2.filter ? n3 = (0, i2.filter)("", n3) : g(i2.filter) && (e2 = i2.filter);
      var o3 = [];
      if ("object" != typeof n3 || null === n3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      e2 || (e2 = Object.keys(n3)), i2.sort && e2.sort(i2.sort);
      for (var f3 = 0; f3 < e2.length; ++f3) {
        var a2 = e2[f3];
        i2.skipNulls && null === n3[a2] || w(o3, S(n3[a2], a2, u3, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var c2 = o3.join(i2.delimiter), s2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (s2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(e({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var n3 = {}, i2 = Object.entries(this.t.routes).find(function(e2) {
      return n3 = new F(e2[0], e2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return e({ name: i2[0] }, n3, { route: i2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, e2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + e2;
  }, f2.current = function(t5, r2) {
    var n3 = this.v(), i2 = n3.name, o3 = n3.params, u3 = n3.query, f3 = n3.route;
    if (!t5)
      return i2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(i2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new F(i2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = e({}, o3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, e2, n3, i2, o3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (e2 = null == (n3 = this.t.location) ? void 0 : n3.pathname) ? e2 : void 0 === a2 ? "" : a2, search: null != (i2 = null == (o3 = this.t.location) ? void 0 : o3.search) ? i2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var n3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var i2 = r2.parameterSegments.filter(function(t6) {
      return !n3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, n4) {
        var o4, u3;
        return e({}, t6, i2[n4] ? ((o4 = {})[i2[n4].name] = r3, o4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === i2.length && !t5[i2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var o3;
      (o3 = {})[i2[0].name] = t5, t5 = o3;
    }
    return e({}, this.g(r2), this.m(t5, r2));
  }, f2.g = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, n3, i2) {
      var o3, u3 = n3.name;
      return e({}, t6, ((o3 = {})[u3] = r2.t.defaults[u3], o3));
    }, {});
  }, f2.m = function(t5, r2) {
    var n3 = r2.bindings, i2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var o3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !i2.some(function(t7) {
        return t7.name === f3;
      }))
        return e({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(n3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + n3[f3] + "'.");
        n3[f3] = "id";
      }
      return e({}, t6, ((o3 = {})[f3] = a2[n3[f3]], o3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return e({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ u(String));
function A(t4, r2, e2, n2) {
  var i2 = new P(t4, r2, e2, n2);
  return t4 ? i2.toString() : i2;
}
const appName = "TEPA";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/Admins/AddAdmin.jsx": () => import("./assets/AddAdmin-b50fcb5b.js"), "./Pages/Admins/Dashboard.jsx": () => import("./assets/Dashboard-0dc72f91.js"), "./Pages/Admins/Product.jsx": () => import("./assets/Product-0d849188.js"), "./Pages/Admins/Profile.jsx": () => import("./assets/Profile-e6aa5e54.js"), "./Pages/Admins/Report.jsx": () => import("./assets/Report-b39e33aa.js"), "./Pages/Admins/SellingTabs.jsx": () => import("./assets/SellingTabs-e4b27d20.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-43373d38.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-f466bcdb.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-4583f474.js"), "./Pages/Dev.jsx": () => import("./assets/Dev-8ba5edae.js"), "./Pages/Error.jsx": () => import("./assets/Error-9e4d9b66.js"), "./Pages/Supplies.jsx": () => import("./assets/Supplies-72fc399e.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-66592fcb.js") })),
    setup: ({ App, props }) => {
      global.route = (name, params, absolute) => A(name, params, absolute, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
