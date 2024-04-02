/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (C, e) {
  'use strict';
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    v = {},
    m = function (e) {
      return (
        'function' == typeof e &&
        'number' != typeof e.nodeType &&
        'function' != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement('script');
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? n[o.call(e)] || 'object'
      : typeof e;
  }
  var f = '3.6.1',
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || '[object Object]' !== o.call(e)) &&
          (!(t = r(e)) ||
            ('function' ==
              typeof (n = y.call(t, 'constructor') && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, 'string' == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: v,
    }),
    'function' == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        n['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      y,
      s,
      c,
      v,
      S = 'sizzle' + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      I =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        M +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      W =
        '\\[' +
        M +
        '*(' +
        I +
        ')(?:' +
        M +
        '*([*^$|!~]?=)' +
        M +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        I +
        '))|)' +
        M +
        '*\\]',
      F =
        ':(' +
        I +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        W +
        ')*)|.*)\\)|)',
      $ = new RegExp(M + '+', 'g'),
      B = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      _ = new RegExp('^' + M + '*,' + M + '*'),
      z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp(M + '|>'),
      X = new RegExp(F),
      V = new RegExp('^' + I + '$'),
      G = {
        ID: new RegExp('^#(' + I + ')'),
        CLASS: new RegExp('^\\.(' + I + ')'),
        TAG: new RegExp('^(' + I + '|[*])'),
        ATTR: new RegExp('^' + W),
        PSEUDO: new RegExp('^' + F),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            M +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            M +
            '*(?:([+-]|)' +
            M +
            '*(\\d+)|))' +
            M +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + R + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            M +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            M +
            '*((?:-\\d)?\\d*)' +
            M +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + ' '] &&
          (!y || !y.test(t)) &&
          (1 !== p || 'object' !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ve(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute('id'))
                ? (s = s.replace(re, ie))
                : e.setAttribute('id', (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o]);
            c = l.join(',');
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute('id');
          }
        }
      }
      return g(t.replace(B, '$1'), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split('|'),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ('input' === t || 'button' === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function ye(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ve(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || 'HTML');
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener('unload', oe, !1)
                : n.attachEvent && n.attachEvent('onunload', oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement('div')),
                'undefined' != typeof e.querySelectorAll &&
                  !e.querySelectorAll(':scope fieldset div').length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment('')),
                !e.getElementsByTagName('*').length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      'undefined' != typeof e.getAttributeNode &&
                      e.getAttributeNode('id');
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return 'undefined' != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (y = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    y.push('[*^$]=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    y.push('\\[' + M + '*(?:value|' + R + ')'),
                  e.querySelectorAll('[id~=' + S + '-]').length || y.push('~='),
                  (t = C.createElement('input')).setAttribute('name', ''),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    y.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll(':checked').length || y.push(':checked'),
                  e.querySelectorAll('a#' + S + '+*').length ||
                    y.push('.#.+[+~]'),
                  e.querySelectorAll('\\\f'),
                  y.push('[\\r\\n\\f]');
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    y.push('name' + M + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    y.push(':enabled', ':disabled'),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    y.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  y.push(',.*:');
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, '*')),
                  c.call(e, "[s!='']:x"),
                  s.push('!=', F);
              }),
            (y = y.length && new RegExp(y.join('|'))),
            (s = s.length && new RegExp(s.join('|'))),
            (t = K.test(a.compareDocumentPosition)),
            (v =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && v(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && v(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + ' '] &&
          (!s || !s.test(t)) &&
          (!y || !y.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), v(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                m(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      ('undefined' != typeof e.getAttribute &&
                        e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? '!=' === r
                : !r ||
                    ((t += ''),
                    '=' === r
                      ? t === i
                      : '!=' === r
                      ? t !== i
                      : '^=' === r
                      ? i && 0 === t.indexOf(i)
                      : '*=' === r
                      ? i && -1 < t.indexOf(i)
                      : '$=' === r
                      ? i && t.slice(-i.length) === i
                      : '~=' === r
                      ? -1 < (' ' + t.replace($, ' ') + ' ').indexOf(i)
                      : '|=' === r &&
                        (t === i || t.slice(0, i.length + 1) === i + '-'));
            };
          },
          CHILD: function (h, e, t, g, y) {
            var v = 'nth' !== h.slice(0, 3),
              m = 'last' !== h.slice(-4),
              x = 'of-type' === e;
            return 1 === g && 0 === y
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = v !== m ? 'nextSibling' : 'previousSibling',
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (v) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = 'only' === h && !u && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error('unsupported pseudo: ' + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, '$1'));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || '') || se.error('unsupported lang: ' + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: ye(function () {
            return [0];
          }),
          last: ye(function (e, t) {
            return [t - 1];
          }),
          eq: ye(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ye(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ye(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && 'parentNode' === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, y, v, e) {
      return (
        y && !y[S] && (y = Ce(y)),
        v && !v[S] && (v = Ce(v, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || '*', n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (v || (e ? d : l || y) ? [] : t) : f;
          if ((g && g(f, p, n, r), y)) {
            (i = Te(p, u)), y(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (v || d) {
              if (v) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                v(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = v ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[' '],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                ).replace(B, '$1'),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + ' '];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, ' ') }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            y,
            v,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + ' '];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((y = o),
              (m = 0 < (v = i).length),
              (x = 0 < y.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG('*', i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = y[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = v[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + v.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = 'function' == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              'ID' === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split('').sort(j).join('') === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[':'] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : 'string' != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, 'string' == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), 'string' == typeof e)) {
      if (
        !(r =
          '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return h(e, 'parentNode', n);
        },
        next: function (e) {
          return O(e, 'nextSibling');
        },
        prev: function (e) {
          return O(e, 'previousSibling');
        },
        nextAll: function (e) {
          return h(e, 'nextSibling');
        },
        prevAll: function (e) {
          return h(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return h(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return h(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            'Until' !== r.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      'string' == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && 'string' !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ''), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              S.Callbacks('memory'),
              S.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + 'With'](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError('Thenable self-resolution');
                        (t =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + 'With'] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          'pending' === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function $() {
    E.removeEventListener('DOMContentLoaded', $),
      C.removeEventListener('load', $),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)['catch'](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    'complete' === E.readyState ||
    ('loading' !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener('DOMContentLoaded', $),
        C.addEventListener('load', $));
  var B = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === w(n))
        for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, 'ms-').replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === (i = n) ||
            ('false' !== i &&
              ('null' === i
                ? null
                : i === +i + ''
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf('data-') &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : B(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
        while (a--)
          (n = Y.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && ie(e) && 'none' === S.css(e, 'display'))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ('px' !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((l[c] = Y.get(r, 'display') || null),
              l[c] || (r.style.display = '')),
            '' === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, 'display')),
                  o.parentNode.removeChild(o),
                  'none' === u && (u = 'block'),
                  (ue[s] = u)))))
          : 'none' !== n && ((l[c] = 'none'), Y.set(r, 'display', n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement('div'))),
    (fe = E.createElement('input')).setAttribute('type', 'radio'),
    fe.setAttribute('checked', 'checked'),
    fe.setAttribute('name', 't'),
    ce.appendChild(fe),
    (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = '<textarea>x</textarea>'),
    (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = '<option></option>'),
    (v.option = !!ce.lastChild);
  var ge = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  function ye(e, t) {
    var n;
    return (
      (n =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    v.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement('div'))),
            (s = (de.exec(o) || ['', ''])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    (f.textContent = ''), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ye(f.appendChild(o), 'script')), l && ve(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || '') && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = y.events) || (u = y.events = Object.create(null)),
          (a = y.handle) ||
            (a = y.handle =
              function (e) {
                return 'undefined' != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || '').match(P) || ['']).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.hasData(e) && Y.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || '').match(P) || ['']).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                S.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, 'events') || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click', we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click'), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, 'input') &&
              Y.get(t, 'click')) ||
            A(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
      S.event.special[t] = {
        setup: function () {
          return Se(this, t, Ce), !1;
        },
        trigger: function () {
          return Se(this, t), !0;
        },
        _default: function (e) {
          return Y.get(e.target, t);
        },
        delegateType: e,
      };
    }),
    S.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function je(e, t) {
    return (
      (A(e, 'table') &&
        A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        S(e).children('tbody')[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function qe(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, 'handle events'), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && 'string' == typeof d && !v.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ye(e, 'script'), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ye(u, 'script'))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || '') &&
              !Y.access(u, 'globalEval') &&
              S.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute('nonce') },
                    l
                  )
                : b(u.textContent.replace(Ne, ''), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ye(r)),
        r.parentNode &&
          (n && ie(r) && ve(ye(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          v.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ye(c, 'script')).length && ve(a, !f && ye(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ye(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ye(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Re = /^--/,
    Me = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Ie = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    We = new RegExp(ne.join('|'), 'i'),
    Fe = '[\\x20\\t\\r\\n\\f]',
    $e = new RegExp('^' + Fe + '+|((?:^|[^\\\\])(?:\\\\.)*)' + Fe + '+$', 'g');
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Re.test(t),
      u = e.style;
    return (
      (n = n || Me(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && (a = a.replace($e, '$1')),
        '' !== a || ie(e) || (a = S.style(e, t)),
        !v.pixelBoxStyles() &&
          Pe.test(a) &&
          We.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = '1%' !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = '60%'),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = 'absolute'),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement('div'),
      l = E.createElement('div');
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (v.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      S.extend(v, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement('table')),
              (t = E.createElement('tr')),
              (n = E.createElement('div')),
              (e.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var ze = ['Webkit', 'Moz', 'ms'],
    Ue = E.createElement('div').style,
    Xe = {};
  function Ve(e) {
    var t = S.cssProps[e] || Xe[e];
    return (
      t ||
      (e in Ue
        ? e
        : (Xe[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
              while (n--) if ((e = ze[n] + t) in Ue) return e;
            })(e) || e))
    );
  }
  var Ge = /^(none|table(?!-c[ea]).+)/,
    Ye = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Qe = { letterSpacing: '0', fontWeight: '400' };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= S.css(e, 'padding' + ne[a], !0, i)),
            'margin' !== n &&
              (u -= S.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += S.css(e, 'padding' + ne[a], !0, i)),
            'padding' !== n
              ? (u += S.css(e, 'border' + ne[a] + 'Width', !0, i))
              : (s += S.css(e, 'border' + ne[a] + 'Width', !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Me(e),
      i =
        (!v.boxSizingReliable() || n) &&
        'border-box' === S.css(e, 'boxSizing', !1, r),
      o = i,
      a = Be(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!v.boxSizingReliable() && i) ||
        (!v.reliableTrDimensions() && A(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Re.test(t),
          l = e.style;
        if (
          (u || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
            v.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Re.test(t) || (t = Ve(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        'normal' === i && t in Qe && (i = Qe[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(['height', 'width'], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ge.test(S.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : Ie(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Me(e),
            o = !v.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === S.css(e, 'boxSizing', !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, 'border', !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Ie(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    S.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        'margin' !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Me(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = ne[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = Y.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !y || void 0 === y[r]) continue;
              g = !0;
            }
            d[r] = (y && y[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = y && y.display) && (l = Y.get(e, 'display')),
            'none' === (c = S.css(e, 'display')) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, 'display')),
                  le([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === S.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (y
                ? 'hidden' in y && (g = y.hidden)
                : (y = Y.access(e, 'fxshow', { display: l })),
              o && (y.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, 'fxshow'), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? y[r] : 0, r, p)),
              r in y ||
                ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, 'finish')) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt('show'),
        slideUp: lt('hide'),
        slideToggle: lt('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement('input')),
    (it = E.createElement('select').appendChild(E.createElement('option'))),
    (rt.type = 'checkbox'),
    (v.checkOn = '' !== rt.value),
    (v.optSelected = it.selected),
    ((rt = E.createElement('input')).value = 't'),
    (rt.type = 'radio'),
    (v.radioValue = 't' === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return B(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match(P) || []).join(' ');
  }
  function vt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function mt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return B(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    v.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              S(this).addClass(t.call(this, e, vt(this)));
            })
          : (e = mt(t)).length
          ? this.each(function () {
              if (
                ((r = vt(this)), (n = 1 === this.nodeType && ' ' + yt(r) + ' '))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(' ' + i + ' ') < 0 && (n += i + ' ');
                (a = yt(n)), r !== a && this.setAttribute('class', a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              S(this).removeClass(t.call(this, e, vt(this)));
            })
          : arguments.length
          ? (e = mt(t)).length
            ? this.each(function () {
                if (
                  ((r = vt(this)),
                  (n = 1 === this.nodeType && ' ' + yt(r) + ' '))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(' ' + i + ' '))
                      n = n.replace(' ' + i + ' ', ' ');
                  }
                  (a = yt(n)), r !== a && this.setAttribute('class', a);
                }
              })
            : this
          : this.attr('class', '');
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = 'string' === a || Array.isArray(t);
        return m(t)
          ? this.each(function (e) {
              S(this).toggleClass(t.call(this, e, vt(this), n), n);
            })
          : 'boolean' == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = mt(t)),
            this.each(function () {
              if (s)
                for (o = S(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && 'boolean' !== a) ||
                  ((r = vt(this)) && Y.set(this, '__className__', r),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      r || !1 === t ? '' : Y.get(this, '__className__') || ''
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = ' ' + e + ' ';
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (' ' + yt(vt(n)) + ' ').indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in r &&
                void 0 !== r.set(this, t, 'value')) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in r &&
          void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(xt, '')
          : null == e
          ? ''
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, 'value');
            return null != t ? t : yt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(['radio', 'checkbox'], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        v.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (v.focusin = 'onfocusin' in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = y.call(e, 'type') ? e.type : e,
        h = y.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
          (u = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, 'events') || Object.create(null))[e.type] &&
              Y.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    v.focusin ||
      S.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (t && !n) ||
        S.error(
          'Invalid XML: ' +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join('\n')
              : e)
        ),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function jt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : jt(
              n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
              t,
              r,
              i
            );
      });
    else if (r || 'object' !== w(e)) i(n, e);
    else for (t in e) jt(n + '[' + t + ']', e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join('&');
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, 'elements');
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(':disabled') &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, '\r\n') };
                })
              : { name: t.name, value: n.replace(kt, '\r\n') };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = '*/'.concat('*'),
    Wt = E.createElement('a');
  function Ft(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function $t(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return 'string' != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'));
  }
  function Bt(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': It,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          y = S.ajaxSetup({}, t),
          v = y.context || y,
          m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
          x = S.Deferred(),
          b = S.Callbacks('once memory'),
          w = y.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (y.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (y.url = ((e || y.url || Tt.href) + '').replace(
            Pt,
            Tt.protocol + '//'
          )),
          (y.type = t.method || t.type || y.method || y.type),
          (y.dataTypes = (y.dataType || '*').toLowerCase().match(P) || ['']),
          null == y.crossDomain)
        ) {
          r = E.createElement('a');
          try {
            (r.href = y.url),
              (r.href = r.href),
              (y.crossDomain =
                Wt.protocol + '//' + Wt.host != r.protocol + '//' + r.host);
          } catch (e) {
            y.crossDomain = !0;
          }
        }
        if (
          (y.data &&
            y.processData &&
            'string' != typeof y.data &&
            (y.data = S.param(y.data, y.traditional)),
          $t(Rt, y, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && y.global) &&
          0 == S.active++ &&
          S.event.trigger('ajaxStart'),
        (y.type = y.type.toUpperCase()),
        (y.hasContent = !Ot.test(y.type)),
        (f = y.url.replace(qt, '')),
        y.hasContent
          ? y.data &&
            y.processData &&
            0 ===
              (y.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (y.data = y.data.replace(Dt, '+'))
          : ((o = y.url.slice(f.length)),
            y.data &&
              (y.processData || 'string' == typeof y.data) &&
              ((f += (Et.test(f) ? '&' : '?') + y.data), delete y.data),
            !1 === y.cache &&
              ((f = f.replace(Lt, '$1')),
              (o = (Et.test(f) ? '&' : '?') + '_=' + Ct.guid++ + o)),
            (y.url = f + o)),
        y.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader('If-Modified-Since', S.lastModified[f]),
          S.etag[f] && T.setRequestHeader('If-None-Match', S.etag[f])),
        ((y.data && y.hasContent && !1 !== y.contentType) || t.contentType) &&
          T.setRequestHeader('Content-Type', y.contentType),
        T.setRequestHeader(
          'Accept',
          y.dataTypes[0] && y.accepts[y.dataTypes[0]]
            ? y.accepts[y.dataTypes[0]] +
                ('*' !== y.dataTypes[0] ? ', ' + It + '; q=0.01' : '')
            : y.accepts['*']
        ),
        y.headers))
          T.setRequestHeader(i, y.headers[i]);
        if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
          return T.abort();
        if (
          ((u = 'abort'),
          b.add(y.complete),
          T.done(y.success),
          T.fail(y.error),
          (c = $t(Mt, y, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, y]), h))
            return T;
          y.async &&
            0 < y.timeout &&
            (d = C.setTimeout(function () {
              T.abort('timeout');
            }, y.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, 'No Transport');
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ('*' === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(y, T, n)),
            !i &&
              -1 < S.inArray('script', y.dataTypes) &&
              S.inArray('json', y.dataTypes) < 0 &&
              (y.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e['throws']) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(y, s, T, i)),
            i
              ? (y.ifModified &&
                  ((u = T.getResponseHeader('Last-Modified')) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader('etag')) && (S.etag[f] = u)),
                204 === e || 'HEAD' === y.type
                  ? (l = 'nocontent')
                  : 304 === e
                  ? (l = 'notmodified')
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, y, i ? o : a]),
            b.fireWith(v, [T, l]),
            g &&
              (m.trigger('ajaxComplete', [T, y]),
              --S.active || S.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, 'script');
      },
    }),
    S.each(['get', 'post'], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (v.cors = !!zt && 'withCredentials' in zt),
    (v.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (v.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        'text' !== (r.responseType || 'text') ||
                          'string' != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o('abort'));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    S.ajaxTransport('script', function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S('<script>')
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + '_' + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Vt.test(e.data) &&
              'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || S.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          'script'
        );
    }),
    (v.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (v.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          S.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, 'position'),
          c = S(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = S.css(e, 'top')),
          (u = S.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === S.css(e, 'position')
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)),
              (i.left += S.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - i.top - S.css(r, 'marginTop', !0),
            left: t.left - i.left - S.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && 'static' === S.css(e, 'position')) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (t, i) {
        var o = 'pageYOffset' === i;
        S.fn[t] = function (e) {
          return B(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(['top', 'left'], function (e, n) {
      S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Pe.test(t) ? S(e).position()[n] + 'px' : t;
      });
    }),
    S.each({ Height: 'height', Width: 'width' }, function (a, s) {
      S.each(
        { padding: 'inner' + a, content: s, '': 'outer' + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || 'boolean' != typeof e),
              i = r || (!0 === e || !0 === t ? 'margin' : 'border');
            return B(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf('outer')
                    ? e['inner' + a]
                    : e.document.documentElement['client' + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body['scroll' + a],
                      r['scroll' + a],
                      e.body['offset' + a],
                      r['offset' + a],
                      r['client' + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? '' : (e + '').replace(Gt, '$1');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    'undefined' == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
'undefined' == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(['jquery'], function (e) {
          return t(e, window);
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = t(require('jquery'), window))
      : t(jQuery, window);
  })(function (s, n) {
    'use strict';
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              a = 1;
            a <= 3;
            a++
          ) {
            if (+n[a] > +o[a]) return 1;
            if (+n[a] < +o[a]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    s.migrateVersion = '3.4.0';
    var t = Object.create(null),
      o =
        ((s.migrateDisablePatches = function () {
          for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
        }),
        (s.migrateEnablePatches = function () {
          for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
        }),
        (s.migrateIsPatchEnabled = function (e) {
          return !t[e];
        }),
        n.console &&
          n.console.log &&
          ((s && e('3.0.0')) ||
            n.console.log('JQMIGRATE: jQuery 3.0.0+ REQUIRED'),
          s.migrateWarnings &&
            n.console.log('JQMIGRATE: Migrate plugin loaded multiple times'),
          n.console.log(
            'JQMIGRATE: Migrate is installed' +
              (s.migrateMute ? '' : ' with logging active') +
              ', version ' +
              s.migrateVersion
          )),
        {});
    function i(e, t) {
      var r = n.console;
      !s.migrateIsPatchEnabled(e) ||
        (s.migrateDeduplicateWarnings && o[t]) ||
        ((o[t] = !0),
        s.migrateWarnings.push(t + ' [' + e + ']'),
        r &&
          r.warn &&
          !s.migrateMute &&
          (r.warn('JQMIGRATE: ' + t), s.migrateTrace && r.trace && r.trace()));
    }
    function r(e, t, r, n, o) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return i(n, o), r;
        },
        set: function (e) {
          i(n, o), (r = e);
        },
      });
    }
    function a(e, t, r, n, o) {
      var a = e[t];
      e[t] = function () {
        return (
          o && i(n, o),
          (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        );
      };
    }
    function u(e, t, r, n, o) {
      if (!o) throw new Error('No warning message provided');
      a(e, t, r, n, o);
    }
    function d(e, t, r, n) {
      a(e, t, r, n);
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (o = {}), (s.migrateWarnings.length = 0);
      }),
      'BackCompat' === n.document.compatMode &&
        i('quirks', 'jQuery is not compatible with Quirks Mode');
    var c,
      l,
      p,
      f = {},
      m = s.fn.init,
      y = s.find,
      h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (c in (d(
      s.fn,
      'init',
      function (e) {
        var t = Array.prototype.slice.call(arguments);
        return (
          s.migrateIsPatchEnabled('selector-empty-id') &&
            'string' == typeof e &&
            '#' === e &&
            (i('selector-empty-id', "jQuery( '#' ) is not a valid selector"),
            (t[0] = [])),
          m.apply(this, t)
        );
      },
      'selector-empty-id'
    ),
    (s.fn.init.prototype = s.fn),
    d(
      s,
      'find',
      function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ('string' == typeof t && h.test(t))
          try {
            n.document.querySelector(t);
          } catch (e) {
            t = t.replace(g, function (e, t, r, n) {
              return '[' + t + r + '"' + n + '"]';
            });
            try {
              n.document.querySelector(t),
                i(
                  'selector-hash',
                  "Attribute selector with '#' must be quoted: " + r[0]
                ),
                (r[0] = t);
            } catch (e) {
              i(
                'selector-hash',
                "Attribute selector with '#' was not fixed: " + r[0]
              );
            }
          }
        return y.apply(this, r);
      },
      'selector-hash'
    ),
    y))
      Object.prototype.hasOwnProperty.call(y, c) && (s.find[c] = y[c]);
    u(
      s.fn,
      'size',
      function () {
        return this.length;
      },
      'size',
      'jQuery.fn.size() is deprecated and removed; use the .length property'
    ),
      u(
        s,
        'parseJSON',
        function () {
          return JSON.parse.apply(null, arguments);
        },
        'parseJSON',
        'jQuery.parseJSON is deprecated; use JSON.parse'
      ),
      u(
        s,
        'holdReady',
        s.holdReady,
        'holdReady',
        'jQuery.holdReady is deprecated'
      ),
      u(
        s,
        'unique',
        s.uniqueSort,
        'unique',
        'jQuery.unique is deprecated; use jQuery.uniqueSort'
      ),
      r(
        s.expr,
        'filters',
        s.expr.pseudos,
        'expr-pre-pseudos',
        'jQuery.expr.filters is deprecated; use jQuery.expr.pseudos'
      ),
      r(
        s.expr,
        ':',
        s.expr.pseudos,
        'expr-pre-pseudos',
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e('3.1.1') &&
        u(
          s,
          'trim',
          function (e) {
            return null == e ? '' : (e + '').replace(v, '');
          },
          'trim',
          'jQuery.trim is deprecated; use String.prototype.trim'
        ),
      e('3.2.0') &&
        (u(
          s,
          'nodeName',
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          'nodeName',
          'jQuery.nodeName is deprecated'
        ),
        u(
          s,
          'isArray',
          Array.isArray,
          'isArray',
          'jQuery.isArray is deprecated; use Array.isArray'
        )),
      e('3.3.0') &&
        (u(
          s,
          'isNumeric',
          function (e) {
            var t = typeof e;
            return (
              ('number' == t || 'string' == t) && !isNaN(e - parseFloat(e))
            );
          },
          'isNumeric',
          'jQuery.isNumeric() is deprecated'
        ),
        s.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
            ' '
          ),
          function (e, t) {
            f['[object ' + t + ']'] = t.toLowerCase();
          }
        ),
        u(
          s,
          'type',
          function (e) {
            return null == e
              ? e + ''
              : 'object' == typeof e || 'function' == typeof e
              ? f[Object.prototype.toString.call(e)] || 'object'
              : typeof e;
          },
          'type',
          'jQuery.type is deprecated'
        ),
        u(
          s,
          'isFunction',
          function (e) {
            return 'function' == typeof e;
          },
          'isFunction',
          'jQuery.isFunction() is deprecated'
        ),
        u(
          s,
          'isWindow',
          function (e) {
            return null != e && e === e.window;
          },
          'isWindow',
          'jQuery.isWindow() is deprecated'
        )),
      s.ajax &&
        ((l = s.ajax),
        (p = /(=)\?(?=&|$)|\?\?/),
        d(
          s,
          'ajax',
          function () {
            var e = l.apply(this, arguments);
            return (
              e.promise &&
                (u(
                  e,
                  'success',
                  e.done,
                  'jqXHR-methods',
                  'jQXHR.success is deprecated and removed'
                ),
                u(
                  e,
                  'error',
                  e.fail,
                  'jqXHR-methods',
                  'jQXHR.error is deprecated and removed'
                ),
                u(
                  e,
                  'complete',
                  e.always,
                  'jqXHR-methods',
                  'jQXHR.complete is deprecated and removed'
                )),
              e
            );
          },
          'jqXHR-methods'
        ),
        e('4.0.0') ||
          s.ajaxPrefilter('+json', function (e) {
            !1 !== e.jsonp &&
              (p.test(e.url) ||
                ('string' == typeof e.data &&
                  0 ===
                    (e.contentType || '').indexOf(
                      'application/x-www-form-urlencoded'
                    ) &&
                  p.test(e.data))) &&
              i(
                'jsonp-promotion',
                'JSON-to-JSONP auto-promotion is deprecated'
              );
          }));
    var j = s.fn.removeAttr,
      b = s.fn.toggleClass,
      w = /\S+/g;
    function Q(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    d(
      s.fn,
      'removeAttr',
      function (e) {
        var r = this;
        return (
          s.each(e.match(w), function (e, t) {
            s.expr.match.bool.test(t) &&
              (i(
                'removeAttr-bool',
                'jQuery.fn.removeAttr no longer sets boolean properties: ' + t
              ),
              r.prop(t, !1));
          }),
          j.apply(this, arguments)
        );
      },
      'removeAttr-bool'
    ),
      d(
        s.fn,
        'toggleClass',
        function (t) {
          return void 0 !== t && 'boolean' != typeof t
            ? b.apply(this, arguments)
            : (i(
                'toggleClass-bool',
                'jQuery.fn.toggleClass( boolean ) is deprecated'
              ),
              this.each(function () {
                var e = (this.getAttribute && this.getAttribute('class')) || '';
                e && s.data(this, '__className__', e),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      (!e && !1 !== t && s.data(this, '__className__')) || ''
                    );
              }));
        },
        'toggleClass-bool'
      );
    var x,
      A = !1,
      R = /^[a-z]/,
      T =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(['height', 'width', 'reliableMarginRight'], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (A = !0), (e = r.apply(this, arguments)), (A = !1), e;
          });
      }),
      d(
        s,
        'swap',
        function (e, t, r, n) {
          var o,
            a = {};
          for (o in (A ||
            i('swap', 'jQuery.swap() is undocumented and deprecated'),
          t))
            (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = r.apply(e, n || [])), t)) e.style[o] = a[o];
          return r;
        },
        'swap'
      ),
      e('3.4.0') &&
        'undefined' != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              i('cssProps', 'jQuery.cssProps is deprecated'),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      e('4.0.0') &&
        'undefined' != typeof Proxy &&
        (s.cssNumber = new Proxy(
          {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          {
            get: function () {
              return (
                i('css-number', 'jQuery.cssNumber is deprecated'),
                Reflect.get.apply(this, arguments)
              );
            },
            set: function () {
              return (
                i('css-number', 'jQuery.cssNumber is deprecated'),
                Reflect.set.apply(this, arguments)
              );
            },
          }
        )),
      (x = s.fn.css),
      d(
        s.fn,
        'css',
        function (e, t) {
          var r,
            n = this;
          return e && 'object' == typeof e && !Array.isArray(e)
            ? (s.each(e, function (e, t) {
                s.fn.css.call(n, e, t);
              }),
              this)
            : ('number' == typeof t &&
                ((t = Q(e)),
                (r = t),
                (R.test(r) && T.test(r[0].toUpperCase() + r.slice(1))) ||
                  s.cssNumber[t] ||
                  i(
                    'css-number',
                    'Number-typed values are deprecated for jQuery.fn.css( "' +
                      e +
                      '", value )'
                  )),
              x.apply(this, arguments));
        },
        'css-number'
      );
    function C(e) {
      var t = n.document.implementation.createHTMLDocument('');
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    var S,
      N,
      P,
      k,
      H,
      E,
      M,
      q = s.data,
      D =
        (d(
          s,
          'data',
          function (e, t, r) {
            var n, o, a;
            if (t && 'object' == typeof t && 2 === arguments.length) {
              for (a in ((n = s.hasData(e) && q.call(this, e)), (o = {}), t))
                a !== Q(a)
                  ? (i(
                      'data-camelCase',
                      'jQuery.data() always sets/gets camelCased names: ' + a
                    ),
                    (n[a] = t[a]))
                  : (o[a] = t[a]);
              return q.call(this, e, o), t;
            }
            return t &&
              'string' == typeof t &&
              t !== Q(t) &&
              (n = s.hasData(e) && q.call(this, e)) &&
              t in n
              ? (i(
                  'data-camelCase',
                  'jQuery.data() always sets/gets camelCased names: ' + t
                ),
                2 < arguments.length && (n[t] = r),
                n[t])
              : q.apply(this, arguments);
          },
          'data-camelCase'
        ),
        s.fx &&
          ((P = s.Tween.prototype.run),
          (k = function (e) {
            return e;
          }),
          d(
            s.Tween.prototype,
            'run',
            function () {
              1 < s.easing[this.easing].length &&
                (i(
                  'easing-one-arg',
                  "'jQuery.easing." +
                    this.easing.toString() +
                    "' should use only one argument"
                ),
                (s.easing[this.easing] = k)),
                P.apply(this, arguments);
            },
            'easing-one-arg'
          ),
          (S = s.fx.interval),
          (N = 'jQuery.fx.interval is deprecated'),
          n.requestAnimationFrame &&
            Object.defineProperty(s.fx, 'interval', {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return (
                  n.document.hidden || i('fx-interval', N),
                  s.migrateIsPatchEnabled('fx-interval') && void 0 === S
                    ? 13
                    : S
                );
              },
              set: function (e) {
                i('fx-interval', N), (S = e);
              },
            })),
        s.fn.load),
      F = s.event.add,
      W = s.event.fix,
      O =
        ((s.event.props = []),
        (s.event.fixHooks = {}),
        r(
          s.event.props,
          'concat',
          s.event.props.concat,
          'event-old-patch',
          'jQuery.event.props.concat() is deprecated and removed'
        ),
        d(
          s.event,
          'fix',
          function (e) {
            var t = e.type,
              r = this.fixHooks[t],
              n = s.event.props;
            if (n.length) {
              i(
                'event-old-patch',
                'jQuery.event.props are deprecated and removed: ' + n.join()
              );
              while (n.length) s.event.addProp(n.pop());
            }
            if (
              r &&
              !r._migrated_ &&
              ((r._migrated_ = !0),
              i(
                'event-old-patch',
                'jQuery.event.fixHooks are deprecated and removed: ' + t
              ),
              (n = r.props) && n.length)
            )
              while (n.length) s.event.addProp(n.pop());
            return (t = W.call(this, e)), r && r.filter ? r.filter(t, e) : t;
          },
          'event-old-patch'
        ),
        d(
          s.event,
          'add',
          function (e, t) {
            return (
              e === n &&
                'load' === t &&
                'complete' === n.document.readyState &&
                i(
                  'load-after-event',
                  "jQuery(window).on('load'...) called after load event occurred"
                ),
              F.apply(this, arguments)
            );
          },
          'load-after-event'
        ),
        s.each(['load', 'unload', 'error'], function (e, t) {
          d(
            s.fn,
            t,
            function () {
              var e = Array.prototype.slice.call(arguments, 0);
              return 'load' === t && 'string' == typeof e[0]
                ? D.apply(this, e)
                : (i(
                    'shorthand-removed-v3',
                    'jQuery.fn.' + t + '() is deprecated'
                  ),
                  e.splice(0, 0, t),
                  arguments.length
                    ? this.on.apply(this, e)
                    : (this.triggerHandler.apply(this, e), this));
            },
            'shorthand-removed-v3'
          );
        }),
        s.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function (e, r) {
            u(
              s.fn,
              r,
              function (e, t) {
                return 0 < arguments.length
                  ? this.on(r, null, e, t)
                  : this.trigger(r);
              },
              'shorthand-deprecated-v3',
              'jQuery.fn.' + r + '() event shorthand is deprecated'
            );
          }
        ),
        s(function () {
          s(n.document).triggerHandler('ready');
        }),
        (s.event.special.ready = {
          setup: function () {
            this === n.document &&
              i('ready-event', "'ready' event is deprecated");
          },
        }),
        u(
          s.fn,
          'bind',
          function (e, t, r) {
            return this.on(e, null, t, r);
          },
          'pre-on-methods',
          'jQuery.fn.bind() is deprecated'
        ),
        u(
          s.fn,
          'unbind',
          function (e, t) {
            return this.off(e, null, t);
          },
          'pre-on-methods',
          'jQuery.fn.unbind() is deprecated'
        ),
        u(
          s.fn,
          'delegate',
          function (e, t, r, n) {
            return this.on(t, e, r, n);
          },
          'pre-on-methods',
          'jQuery.fn.delegate() is deprecated'
        ),
        u(
          s.fn,
          'undelegate',
          function (e, t, r) {
            return 1 === arguments.length
              ? this.off(e, '**')
              : this.off(t, e || '**', r);
          },
          'pre-on-methods',
          'jQuery.fn.undelegate() is deprecated'
        ),
        u(
          s.fn,
          'hover',
          function (e, t) {
            return this.on('mouseenter', e).on('mouseleave', t || e);
          },
          'pre-on-methods',
          'jQuery.fn.hover() is deprecated'
        ),
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),
      _ =
        ((s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
          s.migrateEnablePatches('self-closed-tags');
        }),
        d(
          s,
          'htmlPrefilter',
          function (e) {
            var t, r;
            return (
              (r = (t = e).replace(O, '<$1></$2>')) !== t &&
                C(t) !== C(r) &&
                i(
                  'self-closed-tags',
                  'HTML tags must be properly nested and closed: ' + t
                ),
              e.replace(O, '<$1></$2>')
            );
          },
          'self-closed-tags'
        ),
        s.migrateDisablePatches('self-closed-tags'),
        s.fn.offset);
    return (
      d(
        s.fn,
        'offset',
        function () {
          var e = this[0];
          return !e || (e.nodeType && e.getBoundingClientRect)
            ? _.apply(this, arguments)
            : (i(
                'offset-valid-elem',
                'jQuery.fn.offset() requires a valid DOM element'
              ),
              arguments.length ? this : void 0);
        },
        'offset-valid-elem'
      ),
      s.ajax &&
        ((H = s.param),
        d(
          s,
          'param',
          function (e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return (
              void 0 === t &&
                r &&
                (i(
                  'param-ajax-traditional',
                  'jQuery.param() no longer uses jQuery.ajaxSettings.traditional'
                ),
                (t = r)),
              H.call(this, e, t)
            );
          },
          'param-ajax-traditional'
        )),
      u(
        s.fn,
        'andSelf',
        s.fn.addBack,
        'andSelf',
        'jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()'
      ),
      s.Deferred &&
        ((E = s.Deferred),
        (M = [
          [
            'resolve',
            'done',
            s.Callbacks('once memory'),
            s.Callbacks('once memory'),
            'resolved',
          ],
          [
            'reject',
            'fail',
            s.Callbacks('once memory'),
            s.Callbacks('once memory'),
            'rejected',
          ],
          ['notify', 'progress', s.Callbacks('memory'), s.Callbacks('memory')],
        ]),
        d(
          s,
          'Deferred',
          function (e) {
            var a = E(),
              i = a.promise();
            function t() {
              var o = arguments;
              return s
                .Deferred(function (n) {
                  s.each(M, function (e, t) {
                    var r = 'function' == typeof o[e] && o[e];
                    a[t[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && 'function' == typeof e.promise
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[t[0] + 'With'](
                            this === i ? n.promise() : this,
                            r ? [e] : arguments
                          );
                    });
                  }),
                    (o = null);
                })
                .promise();
            }
            return (
              u(a, 'pipe', t, 'deferred-pipe', 'deferred.pipe() is deprecated'),
              u(i, 'pipe', t, 'deferred-pipe', 'deferred.pipe() is deprecated'),
              e && e.call(a, a),
              a
            );
          },
          'deferred-pipe'
        ),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });

/*!
 * Bootstrap v4.6.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery'], e)
    : e(
        ((t =
          'undefined' != typeof globalThis ? globalThis : t || self).bootstrap =
          {}),
        t.jQuery
      );
})(this, function (t, e) {
  'use strict';
  function n(t) {
    return t && 'object' == typeof t && 'default' in t ? t : { default: t };
  }
  var i = n(e);
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function r(t, e, n) {
    return (
      e && o(t.prototype, e),
      n && o(t, n),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      t
    );
  }
  function a() {
    return (
      (a = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
      a.apply(this, arguments)
    );
  }
  function s(t, e) {
    return (
      (s = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      s(t, e)
    );
  }
  var l = 'transitionend';
  var u = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute('data-target');
      if (!e || '#' === e) {
        var n = t.getAttribute('href');
        e = n && '#' !== n ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = i.default(t).css('transition-duration'),
        n = i.default(t).css('transition-delay'),
        o = parseFloat(e),
        r = parseFloat(n);
      return o || r
        ? ((e = e.split(',')[0]),
          (n = n.split(',')[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      i.default(t).trigger(l);
    },
    supportsTransitionEnd: function () {
      return Boolean(l);
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            a =
              r && u.isElement(r)
                ? 'element'
                : null === (s = r) || 'undefined' == typeof s
                ? '' + s
                : {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(a))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                a +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var s;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ('function' == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? u.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ('undefined' == typeof i.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = i.default.fn.jquery.split(' ')[0].split('.');
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  u.jQueryDetection(),
    (i.default.fn.emulateTransitionEnd = function (t) {
      var e = this,
        n = !1;
      return (
        i.default(this).one(u.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || u.triggerTransitionEnd(e);
        }, t),
        this
      );
    }),
    (i.default.event.special[u.TRANSITION_END] = {
      bindType: l,
      delegateType: l,
      handle: function (t) {
        if (i.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var f = 'bs.alert',
    d = i.default.fn.alert,
    c = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, f), (this._element = null);
        }),
        (e._getRootElement = function (t) {
          var e = u.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = i.default(t).closest('.alert')[0]),
            n
          );
        }),
        (e._triggerCloseEvent = function (t) {
          var e = i.default.Event('close.bs.alert');
          return i.default(t).trigger(e), e;
        }),
        (e._removeElement = function (t) {
          var e = this;
          if (
            (i.default(t).removeClass('show'), i.default(t).hasClass('fade'))
          ) {
            var n = u.getTransitionDurationFromElement(t);
            i.default(t)
              .one(u.TRANSITION_END, function (n) {
                return e._destroyElement(t, n);
              })
              .emulateTransitionEnd(n);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (t) {
          i.default(t).detach().trigger('closed.bs.alert').remove();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(f);
            o || ((o = new t(this)), n.data(f, o)), 'close' === e && o[e](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      'click.bs.alert.data-api',
      '[data-dismiss="alert"]',
      c._handleDismiss(new c())
    ),
    (i.default.fn.alert = c._jQueryInterface),
    (i.default.fn.alert.Constructor = c),
    (i.default.fn.alert.noConflict = function () {
      return (i.default.fn.alert = d), c._jQueryInterface;
    });
  var h = 'bs.button',
    p = i.default.fn.button,
    m = 'active',
    g = '[data-toggle^="button"]',
    _ = 'input:not([type="hidden"])',
    v = '.btn',
    b = (function () {
      function t(t) {
        (this._element = t), (this.shouldAvoidTriggerChange = !1);
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          var t = !0,
            e = !0,
            n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
          if (n) {
            var o = this._element.querySelector(_);
            if (o) {
              if ('radio' === o.type)
                if (o.checked && this._element.classList.contains(m)) t = !1;
                else {
                  var r = n.querySelector('.active');
                  r && i.default(r).removeClass(m);
                }
              t &&
                (('checkbox' !== o.type && 'radio' !== o.type) ||
                  (o.checked = !this._element.classList.contains(m)),
                this.shouldAvoidTriggerChange ||
                  i.default(o).trigger('change')),
                o.focus(),
                (e = !1);
            }
          }
          this._element.hasAttribute('disabled') ||
            this._element.classList.contains('disabled') ||
            (e &&
              this._element.setAttribute(
                'aria-pressed',
                !this._element.classList.contains(m)
              ),
            t && i.default(this._element).toggleClass(m));
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, h), (this._element = null);
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this),
              r = o.data(h);
            r || ((r = new t(this)), o.data(h, r)),
              (r.shouldAvoidTriggerChange = n),
              'toggle' === e && r[e]();
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on('click.bs.button.data-api', g, function (t) {
      var e = t.target,
        n = e;
      if (
        (i.default(e).hasClass('btn') || (e = i.default(e).closest(v)[0]),
        !e || e.hasAttribute('disabled') || e.classList.contains('disabled'))
      )
        t.preventDefault();
      else {
        var o = e.querySelector(_);
        if (
          o &&
          (o.hasAttribute('disabled') || o.classList.contains('disabled'))
        )
          return void t.preventDefault();
        ('INPUT' !== n.tagName && 'LABEL' === e.tagName) ||
          b._jQueryInterface.call(
            i.default(e),
            'toggle',
            'INPUT' === n.tagName
          );
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', g, function (t) {
      var e = i.default(t.target).closest(v)[0];
      i.default(e).toggleClass('focus', /^focus(in)?$/.test(t.type));
    }),
    i.default(window).on('load.bs.button.data-api', function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector(_);
        o.checked || o.hasAttribute('checked')
          ? i.classList.add(m)
          : i.classList.remove(m);
      }
      for (
        var r = 0,
          a = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        r < a;
        r++
      ) {
        var s = t[r];
        'true' === s.getAttribute('aria-pressed')
          ? s.classList.add(m)
          : s.classList.remove(m);
      }
    }),
    (i.default.fn.button = b._jQueryInterface),
    (i.default.fn.button.Constructor = b),
    (i.default.fn.button.noConflict = function () {
      return (i.default.fn.button = p), b._jQueryInterface;
    });
  var y = 'carousel',
    E = 'bs.carousel',
    w = i.default.fn[y],
    T = 'active',
    C = 'next',
    S = 'prev',
    N = 'slid.bs.carousel',
    D = '.active.carousel-item',
    A = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0,
    },
    k = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean',
    },
    I = { TOUCH: 'touch', PEN: 'pen' },
    O = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            '.carousel-indicators'
          )),
          (this._touchSupported =
            'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide(C);
        }),
        (e.nextWhenVisible = function () {
          var t = i.default(this._element);
          !document.hidden &&
            t.is(':visible') &&
            'hidden' !== t.css('visibility') &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide(S);
        }),
        (e.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              '.carousel-item-next, .carousel-item-prev'
            ) && (u.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._updateInterval(),
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              )));
        }),
        (e.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(D);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              i.default(this._element).one(N, function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var o = t > n ? C : S;
              this._slide(o, this._items[t]);
            }
        }),
        (e.dispose = function () {
          i.default(this._element).off('.bs.carousel'),
            i.default.removeData(this._element, E),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (t) {
          return (t = a({}, A, t)), u.typeCheckConfig(y, t, k), t;
        }),
        (e._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            i.default(this._element).on('keydown.bs.carousel', function (e) {
              return t._keydown(e);
            }),
            'hover' === this._config.pause &&
              i
                .default(this._element)
                .on('mouseenter.bs.carousel', function (e) {
                  return t.pause(e);
                })
                .on('mouseleave.bs.carousel', function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var e = function (e) {
                t._pointerEvent && I[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              n = function (e) {
                t._pointerEvent &&
                  I[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  'hover' === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            i
              .default(this._element.querySelectorAll('.carousel-item img'))
              .on('dragstart.bs.carousel', function (t) {
                return t.preventDefault();
              }),
              this._pointerEvent
                ? (i
                    .default(this._element)
                    .on('pointerdown.bs.carousel', function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on('pointerup.bs.carousel', function (t) {
                      return n(t);
                    }),
                  this._element.classList.add('pointer-event'))
                : (i
                    .default(this._element)
                    .on('touchstart.bs.carousel', function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on('touchmove.bs.carousel', function (e) {
                      return (function (e) {
                        t.touchDeltaX =
                          e.originalEvent.touches &&
                          e.originalEvent.touches.length > 1
                            ? 0
                            : e.originalEvent.touches[0].clientX -
                              t.touchStartX;
                      })(e);
                    }),
                  i
                    .default(this._element)
                    .on('touchend.bs.carousel', function (t) {
                      return n(t);
                    }));
          }
        }),
        (e._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll('.carousel-item'))
                : []),
            this._items.indexOf(t)
          );
        }),
        (e._getItemByDirection = function (t, e) {
          var n = t === C,
            i = t === S,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var a = (o + (t === S ? -1 : 1)) % this._items.length;
          return -1 === a
            ? this._items[this._items.length - 1]
            : this._items[a];
        }),
        (e._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            o = this._getItemIndex(this._element.querySelector(D)),
            r = i.default.Event('slide.bs.carousel', {
              relatedTarget: t,
              direction: e,
              from: o,
              to: n,
            });
          return i.default(this._element).trigger(r), r;
        }),
        (e._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll('.active')
            );
            i.default(e).removeClass(T);
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && i.default(n).addClass(T);
          }
        }),
        (e._updateInterval = function () {
          var t = this._activeElement || this._element.querySelector(D);
          if (t) {
            var e = parseInt(t.getAttribute('data-interval'), 10);
            e
              ? ((this._config.defaultInterval =
                  this._config.defaultInterval || this._config.interval),
                (this._config.interval = e))
              : (this._config.interval =
                  this._config.defaultInterval || this._config.interval);
          }
        }),
        (e._slide = function (t, e) {
          var n,
            o,
            r,
            a = this,
            s = this._element.querySelector(D),
            l = this._getItemIndex(s),
            f = e || (s && this._getItemByDirection(t, s)),
            d = this._getItemIndex(f),
            c = Boolean(this._interval);
          if (
            (t === C
              ? ((n = 'carousel-item-left'),
                (o = 'carousel-item-next'),
                (r = 'left'))
              : ((n = 'carousel-item-right'),
                (o = 'carousel-item-prev'),
                (r = 'right')),
            f && i.default(f).hasClass(T))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(f, r).isDefaultPrevented() &&
            s &&
            f
          ) {
            (this._isSliding = !0),
              c && this.pause(),
              this._setActiveIndicatorElement(f),
              (this._activeElement = f);
            var h = i.default.Event(N, {
              relatedTarget: f,
              direction: r,
              from: l,
              to: d,
            });
            if (i.default(this._element).hasClass('slide')) {
              i.default(f).addClass(o),
                u.reflow(f),
                i.default(s).addClass(n),
                i.default(f).addClass(n);
              var p = u.getTransitionDurationFromElement(s);
              i.default(s)
                .one(u.TRANSITION_END, function () {
                  i
                    .default(f)
                    .removeClass(n + ' ' + o)
                    .addClass(T),
                    i.default(s).removeClass('active ' + o + ' ' + n),
                    (a._isSliding = !1),
                    setTimeout(function () {
                      return i.default(a._element).trigger(h);
                    }, 0);
                })
                .emulateTransitionEnd(p);
            } else
              i.default(s).removeClass(T),
                i.default(f).addClass(T),
                (this._isSliding = !1),
                i.default(this._element).trigger(h);
            c && this.cycle();
          }
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data(E),
              o = a({}, A, i.default(this).data());
            'object' == typeof e && (o = a({}, o, e));
            var r = 'string' == typeof e ? e : o.slide;
            if (
              (n || ((n = new t(this, o)), i.default(this).data(E, n)),
              'number' == typeof e)
            )
              n.to(e);
            else if ('string' == typeof r) {
              if ('undefined' == typeof n[r])
                throw new TypeError('No method named "' + r + '"');
              n[r]();
            } else o.interval && o.ride && (n.pause(), n.cycle());
          });
        }),
        (t._dataApiClickHandler = function (e) {
          var n = u.getSelectorFromElement(this);
          if (n) {
            var o = i.default(n)[0];
            if (o && i.default(o).hasClass('carousel')) {
              var r = a({}, i.default(o).data(), i.default(this).data()),
                s = this.getAttribute('data-slide-to');
              s && (r.interval = !1),
                t._jQueryInterface.call(i.default(o), r),
                s && i.default(o).data(E).to(s),
                e.preventDefault();
            }
          }
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
          {
            key: 'Default',
            get: function () {
              return A;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      'click.bs.carousel.data-api',
      '[data-slide], [data-slide-to]',
      O._dataApiClickHandler
    ),
    i.default(window).on('load.bs.carousel.data-api', function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var o = i.default(t[e]);
        O._jQueryInterface.call(o, o.data());
      }
    }),
    (i.default.fn[y] = O._jQueryInterface),
    (i.default.fn[y].Constructor = O),
    (i.default.fn[y].noConflict = function () {
      return (i.default.fn[y] = w), O._jQueryInterface;
    });
  var x = 'collapse',
    j = 'bs.collapse',
    L = i.default.fn[x],
    P = 'show',
    F = 'collapse',
    R = 'collapsing',
    B = 'collapsed',
    H = 'width',
    M = '[data-toggle="collapse"]',
    q = { toggle: !0, parent: '' },
    Q = { toggle: 'boolean', parent: '(string|element)' },
    W = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(M)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            a = u.getSelectorFromElement(r),
            s = [].slice
              .call(document.querySelectorAll(a))
              .filter(function (e) {
                return e === t;
              });
          null !== a &&
            s.length > 0 &&
            ((this._selector = a), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          i.default(this._element).hasClass(P) ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            n,
            o = this;
          if (
            !(
              this._isTransitioning ||
              i.default(this._element).hasClass(P) ||
              (this._parent &&
                0 ===
                  (e = [].slice
                    .call(this._parent.querySelectorAll('.show, .collapsing'))
                    .filter(function (t) {
                      return 'string' == typeof o._config.parent
                        ? t.getAttribute('data-parent') === o._config.parent
                        : t.classList.contains(F);
                    })).length &&
                (e = null),
              e &&
                (n = i.default(e).not(this._selector).data(j)) &&
                n._isTransitioning)
            )
          ) {
            var r = i.default.Event('show.bs.collapse');
            if (
              (i.default(this._element).trigger(r), !r.isDefaultPrevented())
            ) {
              e &&
                (t._jQueryInterface.call(
                  i.default(e).not(this._selector),
                  'hide'
                ),
                n || i.default(e).data(j, null));
              var a = this._getDimension();
              i.default(this._element).removeClass(F).addClass(R),
                (this._element.style[a] = 0),
                this._triggerArray.length &&
                  i
                    .default(this._triggerArray)
                    .removeClass(B)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0);
              var s = 'scroll' + (a[0].toUpperCase() + a.slice(1)),
                l = u.getTransitionDurationFromElement(this._element);
              i
                .default(this._element)
                .one(u.TRANSITION_END, function () {
                  i
                    .default(o._element)
                    .removeClass(R)
                    .addClass('collapse show'),
                    (o._element.style[a] = ''),
                    o.setTransitioning(!1),
                    i.default(o._element).trigger('shown.bs.collapse');
                })
                .emulateTransitionEnd(l),
                (this._element.style[a] = this._element[s] + 'px');
            }
          }
        }),
        (e.hide = function () {
          var t = this;
          if (!this._isTransitioning && i.default(this._element).hasClass(P)) {
            var e = i.default.Event('hide.bs.collapse');
            if (
              (i.default(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + 'px'),
                u.reflow(this._element),
                i
                  .default(this._element)
                  .addClass(R)
                  .removeClass('collapse show');
              var o = this._triggerArray.length;
              if (o > 0)
                for (var r = 0; r < o; r++) {
                  var a = this._triggerArray[r],
                    s = u.getSelectorFromElement(a);
                  null !== s &&
                    (i
                      .default([].slice.call(document.querySelectorAll(s)))
                      .hasClass(P) ||
                      i.default(a).addClass(B).attr('aria-expanded', !1));
                }
              this.setTransitioning(!0), (this._element.style[n] = '');
              var l = u.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(u.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    i
                      .default(t._element)
                      .removeClass(R)
                      .addClass(F)
                      .trigger('hidden.bs.collapse');
                })
                .emulateTransitionEnd(l);
            }
          }
        }),
        (e.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, j),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (t) {
          return (
            ((t = a({}, q, t)).toggle = Boolean(t.toggle)),
            u.typeCheckConfig(x, t, Q),
            t
          );
        }),
        (e._getDimension = function () {
          return i.default(this._element).hasClass(H) ? H : 'height';
        }),
        (e._getParent = function () {
          var e,
            n = this;
          u.isElement(this._config.parent)
            ? ((e = this._config.parent),
              'undefined' != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            r = [].slice.call(e.querySelectorAll(o));
          return (
            i.default(r).each(function (e, i) {
              n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (t, e) {
          var n = i.default(t).hasClass(P);
          e.length && i.default(e).toggleClass(B, !n).attr('aria-expanded', n);
        }),
        (t._getTargetFromElement = function (t) {
          var e = u.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(j),
              r = a({}, q, n.data(), 'object' == typeof e && e ? e : {});
            if (
              (!o &&
                r.toggle &&
                'string' == typeof e &&
                /show|hide/.test(e) &&
                (r.toggle = !1),
              o || ((o = new t(this, r)), n.data(j, o)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
          {
            key: 'Default',
            get: function () {
              return q;
            },
          },
        ]),
        t
      );
    })();
  i.default(document).on('click.bs.collapse.data-api', M, function (t) {
    'A' === t.currentTarget.tagName && t.preventDefault();
    var e = i.default(this),
      n = u.getSelectorFromElement(this),
      o = [].slice.call(document.querySelectorAll(n));
    i.default(o).each(function () {
      var t = i.default(this),
        n = t.data(j) ? 'toggle' : e.data();
      W._jQueryInterface.call(t, n);
    });
  }),
    (i.default.fn[x] = W._jQueryInterface),
    (i.default.fn[x].Constructor = W),
    (i.default.fn[x].noConflict = function () {
      return (i.default.fn[x] = L), W._jQueryInterface;
    });
  var U =
      'undefined' != typeof window &&
      'undefined' != typeof document &&
      'undefined' != typeof navigator,
    V = (function () {
      for (var t = ['Edge', 'Trident', 'Firefox'], e = 0; e < t.length; e += 1)
        if (U && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      return 0;
    })(),
    Y =
      U && window.Promise
        ? function (t) {
            var e = !1;
            return function () {
              e ||
                ((e = !0),
                window.Promise.resolve().then(function () {
                  (e = !1), t();
                }));
            };
          }
        : function (t) {
            var e = !1;
            return function () {
              e ||
                ((e = !0),
                setTimeout(function () {
                  (e = !1), t();
                }, V));
            };
          };
  function z(t) {
    return t && '[object Function]' === {}.toString.call(t);
  }
  function K(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function X(t) {
    return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
  }
  function G(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case 'HTML':
      case 'BODY':
        return t.ownerDocument.body;
      case '#document':
        return t.body;
    }
    var e = K(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : G(X(t));
  }
  function $(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var J = U && !(!window.MSInputMethodContext || !document.documentMode),
    Z = U && /MSIE 10/.test(navigator.userAgent);
  function tt(t) {
    return 11 === t ? J : 10 === t ? Z : J || Z;
  }
  function et(t) {
    if (!t) return document.documentElement;
    for (
      var e = tt(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i
      ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) &&
        'static' === K(n, 'position')
        ? et(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function nt(t) {
    return null !== t.parentNode ? nt(t.parentNode) : t;
  }
  function it(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var a,
      s,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return 'BODY' === (s = (a = l).nodeName) ||
        ('HTML' !== s && et(a.firstElementChild) !== a)
        ? et(l)
        : l;
    var u = nt(t);
    return u.host ? it(u.host, e) : it(t, nt(e).host);
  }
  function ot(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top',
      n = 'top' === e ? 'scrollTop' : 'scrollLeft',
      i = t.nodeName;
    if ('BODY' === i || 'HTML' === i) {
      var o = t.ownerDocument.documentElement,
        r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function rt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = ot(e, 'top'),
      o = ot(e, 'left'),
      r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function at(t, e) {
    var n = 'x' === e ? 'Left' : 'Top',
      i = 'Left' === n ? 'Right' : 'Bottom';
    return (
      parseFloat(t['border' + n + 'Width']) +
      parseFloat(t['border' + i + 'Width'])
    );
  }
  function st(t, e, n, i) {
    return Math.max(
      e['offset' + t],
      e['scroll' + t],
      n['client' + t],
      n['offset' + t],
      n['scroll' + t],
      tt(10)
        ? parseInt(n['offset' + t]) +
            parseInt(i['margin' + ('Height' === t ? 'Top' : 'Left')]) +
            parseInt(i['margin' + ('Height' === t ? 'Bottom' : 'Right')])
        : 0
    );
  }
  function lt(t) {
    var e = t.body,
      n = t.documentElement,
      i = tt(10) && getComputedStyle(n);
    return { height: st('Height', e, n, i), width: st('Width', e, n, i) };
  }
  var ut = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    },
    ft = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    dt = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    ct =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function ht(t) {
    return ct({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function pt(t) {
    var e = {};
    try {
      if (tt(10)) {
        e = t.getBoundingClientRect();
        var n = ot(t, 'top'),
          i = ot(t, 'left');
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = 'HTML' === t.nodeName ? lt(t.ownerDocument) : {},
      a = r.width || t.clientWidth || o.width,
      s = r.height || t.clientHeight || o.height,
      l = t.offsetWidth - a,
      u = t.offsetHeight - s;
    if (l || u) {
      var f = K(t);
      (l -= at(f, 'x')), (u -= at(f, 'y')), (o.width -= l), (o.height -= u);
    }
    return ht(o);
  }
  function mt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = tt(10),
      o = 'HTML' === e.nodeName,
      r = pt(t),
      a = pt(e),
      s = G(t),
      l = K(e),
      u = parseFloat(l.borderTopWidth),
      f = parseFloat(l.borderLeftWidth);
    n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var d = ht({
      top: r.top - a.top - u,
      left: r.left - a.left - f,
      width: r.width,
      height: r.height,
    });
    if (((d.marginTop = 0), (d.marginLeft = 0), !i && o)) {
      var c = parseFloat(l.marginTop),
        h = parseFloat(l.marginLeft);
      (d.top -= u - c),
        (d.bottom -= u - c),
        (d.left -= f - h),
        (d.right -= f - h),
        (d.marginTop = c),
        (d.marginLeft = h);
    }
    return (
      (i && !n ? e.contains(s) : e === s && 'BODY' !== s.nodeName) &&
        (d = rt(d, e)),
      d
    );
  }
  function gt(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.ownerDocument.documentElement,
      i = mt(t, n),
      o = Math.max(n.clientWidth, window.innerWidth || 0),
      r = Math.max(n.clientHeight, window.innerHeight || 0),
      a = e ? 0 : ot(n),
      s = e ? 0 : ot(n, 'left'),
      l = {
        top: a - i.top + i.marginTop,
        left: s - i.left + i.marginLeft,
        width: o,
        height: r,
      };
    return ht(l);
  }
  function _t(t) {
    var e = t.nodeName;
    if ('BODY' === e || 'HTML' === e) return !1;
    if ('fixed' === K(t, 'position')) return !0;
    var n = X(t);
    return !!n && _t(n);
  }
  function vt(t) {
    if (!t || !t.parentElement || tt()) return document.documentElement;
    for (var e = t.parentElement; e && 'none' === K(e, 'transform'); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function bt(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      a = o ? vt(t) : it(t, $(e));
    if ('viewport' === i) r = gt(a, o);
    else {
      var s = void 0;
      'scrollParent' === i
        ? 'BODY' === (s = G(X(e))).nodeName &&
          (s = t.ownerDocument.documentElement)
        : (s = 'window' === i ? t.ownerDocument.documentElement : i);
      var l = mt(s, a, o);
      if ('HTML' !== s.nodeName || _t(a)) r = l;
      else {
        var u = lt(t.ownerDocument),
          f = u.height,
          d = u.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = f + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = d + l.left);
      }
    }
    var c = 'number' == typeof (n = n || 0);
    return (
      (r.left += c ? n : n.left || 0),
      (r.top += c ? n : n.top || 0),
      (r.right -= c ? n : n.right || 0),
      (r.bottom -= c ? n : n.bottom || 0),
      r
    );
  }
  function yt(t) {
    return t.width * t.height;
  }
  function Et(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf('auto')) return t;
    var a = bt(n, i, r, o),
      s = {
        top: { width: a.width, height: e.top - a.top },
        right: { width: a.right - e.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - e.bottom },
        left: { width: e.left - a.left, height: a.height },
      },
      l = Object.keys(s)
        .map(function (t) {
          return ct({ key: t }, s[t], { area: yt(s[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      u = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      f = u.length > 0 ? u[0].key : l[0].key,
      d = t.split('-')[1];
    return f + (d ? '-' + d : '');
  }
  function wt(t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = i ? vt(e) : it(e, $(n));
    return mt(n, o, i);
  }
  function Tt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function Ct(t) {
    var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function St(t, e, n) {
    n = n.split('-')[0];
    var i = Tt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ['right', 'left'].indexOf(n),
      a = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      l = r ? 'height' : 'width',
      u = r ? 'width' : 'height';
    return (
      (o[a] = e[a] + e[l] / 2 - i[l] / 2),
      (o[s] = n === s ? e[s] - i[u] : e[Ct(s)]),
      o
    );
  }
  function Nt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function Dt(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t.name === n;
                });
              var i = Nt(t, function (t) {
                return t.name === n;
              });
              return t.indexOf(i);
            })(t, 0, n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        var n = t.function || t.fn;
        t.enabled &&
          z(n) &&
          ((e.offsets.popper = ht(e.offsets.popper)),
          (e.offsets.reference = ht(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function At() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = wt(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = Et(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = St(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? 'fixed'
          : 'absolute'),
        (t = Dt(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function kt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function It(t) {
    for (
      var e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? '' + o + n : t;
      if ('undefined' != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function Ot() {
    return (
      (this.state.isDestroyed = !0),
      kt(this.modifiers, 'applyStyle') &&
        (this.popper.removeAttribute('x-placement'),
        (this.popper.style.position = ''),
        (this.popper.style.top = ''),
        (this.popper.style.left = ''),
        (this.popper.style.right = ''),
        (this.popper.style.bottom = ''),
        (this.popper.style.willChange = ''),
        (this.popper.style[It('transform')] = '')),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function xt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function jt(t, e, n, i) {
    var o = 'BODY' === t.nodeName,
      r = o ? t.ownerDocument.defaultView : t;
    r.addEventListener(e, n, { passive: !0 }),
      o || jt(G(r.parentNode), e, n, i),
      i.push(r);
  }
  function Lt(t, e, n, i) {
    (n.updateBound = i),
      xt(t).addEventListener('resize', n.updateBound, { passive: !0 });
    var o = G(t);
    return (
      jt(o, 'scroll', n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function Pt() {
    this.state.eventsEnabled ||
      (this.state = Lt(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function Ft() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        xt(t).removeEventListener('resize', e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener('scroll', e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function Rt(t) {
    return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function Bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) &&
        Rt(e[n]) &&
        (i = 'px'),
        (t.style[n] = e[n] + i);
    });
  }
  var Ht = U && /Firefox/i.test(navigator.userAgent);
  function Mt(t, e, n) {
    var i = Nt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = '`' + e + '`',
        a = '`' + n + '`';
      console.warn(
        a +
          ' modifier is required by ' +
          r +
          ' modifier in order to work, be sure to include it before ' +
          r +
          '!'
      );
    }
    return o;
  }
  var qt = [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
    Qt = qt.slice(3);
  function Wt(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = Qt.indexOf(t),
      i = Qt.slice(n + 1).concat(Qt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var Ut = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split('-')[0],
              i = e.split('-')[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                a = o.popper,
                s = -1 !== ['bottom', 'top'].indexOf(n),
                l = s ? 'left' : 'top',
                u = s ? 'width' : 'height',
                f = {
                  start: dt({}, l, r[l]),
                  end: dt({}, l, r[l] + r[u] - a[u]),
                };
              t.offsets.popper = ct({}, a, f[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n,
              i = e.offset,
              o = t.placement,
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = o.split('-')[0];
            return (
              (n = Rt(+i)
                ? [+i, 0]
                : (function (t, e, n, i) {
                    var o = [0, 0],
                      r = -1 !== ['right', 'left'].indexOf(i),
                      a = t.split(/(\+|\-)/).map(function (t) {
                        return t.trim();
                      }),
                      s = a.indexOf(
                        Nt(a, function (t) {
                          return -1 !== t.search(/,|\s/);
                        })
                      );
                    a[s] &&
                      -1 === a[s].indexOf(',') &&
                      console.warn(
                        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
                      );
                    var l = /\s*,\s*|\s+/,
                      u =
                        -1 !== s
                          ? [
                              a.slice(0, s).concat([a[s].split(l)[0]]),
                              [a[s].split(l)[1]].concat(a.slice(s + 1)),
                            ]
                          : [a];
                    return (
                      (u = u.map(function (t, i) {
                        var o = (1 === i ? !r : r) ? 'height' : 'width',
                          a = !1;
                        return t
                          .reduce(function (t, e) {
                            return '' === t[t.length - 1] &&
                              -1 !== ['+', '-'].indexOf(e)
                              ? ((t[t.length - 1] = e), (a = !0), t)
                              : a
                              ? ((t[t.length - 1] += e), (a = !1), t)
                              : t.concat(e);
                          }, [])
                          .map(function (t) {
                            return (function (t, e, n, i) {
                              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                a = o[2];
                              return r
                                ? 0 === a.indexOf('%')
                                  ? (ht('%p' === a ? n : i)[e] / 100) * r
                                  : 'vh' === a || 'vw' === a
                                  ? (('vh' === a
                                      ? Math.max(
                                          document.documentElement.clientHeight,
                                          window.innerHeight || 0
                                        )
                                      : Math.max(
                                          document.documentElement.clientWidth,
                                          window.innerWidth || 0
                                        )) /
                                      100) *
                                    r
                                  : r
                                : t;
                            })(t, o, e, n);
                          });
                      })),
                      u.forEach(function (t, e) {
                        t.forEach(function (n, i) {
                          Rt(n) && (o[e] += n * ('-' === t[i - 1] ? -1 : 1));
                        });
                      }),
                      o
                    );
                  })(i, a, s, l)),
              'left' === l
                ? ((a.top += n[0]), (a.left -= n[1]))
                : 'right' === l
                ? ((a.top += n[0]), (a.left += n[1]))
                : 'top' === l
                ? ((a.left += n[0]), (a.top -= n[1]))
                : 'bottom' === l && ((a.left += n[0]), (a.top += n[1])),
              (t.popper = a),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || et(t.instance.popper);
            t.instance.reference === n && (n = et(n));
            var i = It('transform'),
              o = t.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[i];
            (o.top = ''), (o.left = ''), (o[i] = '');
            var l = bt(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = a), (o[i] = s), (e.boundaries = l);
            var u = e.priority,
              f = t.offsets.popper,
              d = {
                primary: function (t) {
                  var n = f[t];
                  return (
                    f[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(f[t], l[t])),
                    dt({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = 'right' === t ? 'left' : 'top',
                    i = f[n];
                  return (
                    f[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        f[n],
                        l[t] - ('right' === t ? f.width : f.height)
                      )),
                    dt({}, n, i)
                  );
                },
              };
            return (
              u.forEach(function (t) {
                var e =
                  -1 !== ['left', 'top'].indexOf(t) ? 'primary' : 'secondary';
                f = ct({}, f, d[e](t));
              }),
              (t.offsets.popper = f),
              t
            );
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent',
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split('-')[0],
              r = Math.floor,
              a = -1 !== ['top', 'bottom'].indexOf(o),
              s = a ? 'right' : 'bottom',
              l = a ? 'left' : 'top',
              u = a ? 'width' : 'height';
            return (
              n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]),
              n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!Mt(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
            var i = e.element;
            if ('string' == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  'WARNING: `arrow.element` must be child of its popper element!'
                ),
                t
              );
            var o = t.placement.split('-')[0],
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = -1 !== ['left', 'right'].indexOf(o),
              u = l ? 'height' : 'width',
              f = l ? 'Top' : 'Left',
              d = f.toLowerCase(),
              c = l ? 'left' : 'top',
              h = l ? 'bottom' : 'right',
              p = Tt(i)[u];
            s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)),
              s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]),
              (t.offsets.popper = ht(t.offsets.popper));
            var m = s[d] + s[u] / 2 - p / 2,
              g = K(t.instance.popper),
              _ = parseFloat(g['margin' + f]),
              v = parseFloat(g['border' + f + 'Width']),
              b = m - t.offsets.popper[d] - _ - v;
            return (
              (b = Math.max(Math.min(a[u] - p, b), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (dt((n = {}), d, Math.round(b)), dt(n, c, ''), n)),
              t
            );
          },
          element: '[x-arrow]',
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (kt(t.instance.modifiers, 'inner')) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = bt(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split('-')[0],
              o = Ct(i),
              r = t.placement.split('-')[1] || '',
              a = [];
            switch (e.behavior) {
              case 'flip':
                a = [i, o];
                break;
              case 'clockwise':
                a = Wt(i);
                break;
              case 'counterclockwise':
                a = Wt(i, !0);
                break;
              default:
                a = e.behavior;
            }
            return (
              a.forEach(function (s, l) {
                if (i !== s || a.length === l + 1) return t;
                (i = t.placement.split('-')[0]), (o = Ct(i));
                var u = t.offsets.popper,
                  f = t.offsets.reference,
                  d = Math.floor,
                  c =
                    ('left' === i && d(u.right) > d(f.left)) ||
                    ('right' === i && d(u.left) < d(f.right)) ||
                    ('top' === i && d(u.bottom) > d(f.top)) ||
                    ('bottom' === i && d(u.top) < d(f.bottom)),
                  h = d(u.left) < d(n.left),
                  p = d(u.right) > d(n.right),
                  m = d(u.top) < d(n.top),
                  g = d(u.bottom) > d(n.bottom),
                  _ =
                    ('left' === i && h) ||
                    ('right' === i && p) ||
                    ('top' === i && m) ||
                    ('bottom' === i && g),
                  v = -1 !== ['top', 'bottom'].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((v && 'start' === r && h) ||
                      (v && 'end' === r && p) ||
                      (!v && 'start' === r && m) ||
                      (!v && 'end' === r && g)),
                  y =
                    !!e.flipVariationsByContent &&
                    ((v && 'start' === r && p) ||
                      (v && 'end' === r && h) ||
                      (!v && 'start' === r && g) ||
                      (!v && 'end' === r && m)),
                  E = b || y;
                (c || _ || E) &&
                  ((t.flipped = !0),
                  (c || _) && (i = a[l + 1]),
                  E &&
                    (r = (function (t) {
                      return 'end' === t ? 'start' : 'start' === t ? 'end' : t;
                    })(r)),
                  (t.placement = i + (r ? '-' + r : '')),
                  (t.offsets.popper = ct(
                    {},
                    t.offsets.popper,
                    St(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = Dt(t.instance.modifiers, t, 'flip')));
              }),
              t
            );
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split('-')[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ['left', 'right'].indexOf(n),
              s = -1 === ['top', 'left'].indexOf(n);
            return (
              (o[a ? 'left' : 'top'] =
                r[n] - (s ? o[a ? 'width' : 'height'] : 0)),
              (t.placement = Ct(e)),
              (t.offsets.popper = ht(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!Mt(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
            var e = t.offsets.reference,
              n = Nt(t.instance.modifiers, function (t) {
                return 'preventOverflow' === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = Nt(t.instance.modifiers, function (t) {
                return 'applyStyle' === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
              );
            var a,
              s,
              l = void 0 !== r ? r : e.gpuAcceleration,
              u = et(t.instance.popper),
              f = pt(u),
              d = { position: o.position },
              c = (function (t, e) {
                var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  a = Math.floor,
                  s = function (t) {
                    return t;
                  },
                  l = r(o.width),
                  u = r(i.width),
                  f = -1 !== ['left', 'right'].indexOf(t.placement),
                  d = -1 !== t.placement.indexOf('-'),
                  c = e ? (f || d || l % 2 == u % 2 ? r : a) : s,
                  h = e ? r : s;
                return {
                  left: c(
                    l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left
                  ),
                  top: h(i.top),
                  bottom: h(i.bottom),
                  right: c(i.right),
                };
              })(t, window.devicePixelRatio < 2 || !Ht),
              h = 'bottom' === n ? 'top' : 'bottom',
              p = 'right' === i ? 'left' : 'right',
              m = It('transform');
            if (
              ((s =
                'bottom' === h
                  ? 'HTML' === u.nodeName
                    ? -u.clientHeight + c.bottom
                    : -f.height + c.bottom
                  : c.top),
              (a =
                'right' === p
                  ? 'HTML' === u.nodeName
                    ? -u.clientWidth + c.right
                    : -f.width + c.right
                  : c.left),
              l && m)
            )
              (d[m] = 'translate3d(' + a + 'px, ' + s + 'px, 0)'),
                (d[h] = 0),
                (d[p] = 0),
                (d.willChange = 'transform');
            else {
              var g = 'bottom' === h ? -1 : 1,
                _ = 'right' === p ? -1 : 1;
              (d[h] = s * g), (d[p] = a * _), (d.willChange = h + ', ' + p);
            }
            var v = { 'x-placement': t.placement };
            return (
              (t.attributes = ct({}, v, t.attributes)),
              (t.styles = ct({}, d, t.styles)),
              (t.arrowStyles = ct({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right',
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              Bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                Bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = wt(o, e, t, n.positionFixed),
              a = Et(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute('x-placement', a),
              Bt(e, { position: n.positionFixed ? 'fixed' : 'absolute' }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    Vt = (function () {
      function t(e, n) {
        var i = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        ut(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = Y(this.update.bind(this))),
          (this.options = ct({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(ct({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = ct(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return ct({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              z(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        ft(t, [
          {
            key: 'update',
            value: function () {
              return At.call(this);
            },
          },
          {
            key: 'destroy',
            value: function () {
              return Ot.call(this);
            },
          },
          {
            key: 'enableEventListeners',
            value: function () {
              return Pt.call(this);
            },
          },
          {
            key: 'disableEventListeners',
            value: function () {
              return Ft.call(this);
            },
          },
        ]),
        t
      );
    })();
  (Vt.Utils = ('undefined' != typeof window ? window : global).PopperUtils),
    (Vt.placements = qt),
    (Vt.Defaults = Ut);
  var Yt = Vt,
    zt = 'dropdown',
    Kt = 'bs.dropdown',
    Xt = i.default.fn[zt],
    Gt = new RegExp('38|40|27'),
    $t = 'disabled',
    Jt = 'show',
    Zt = 'dropdown-menu-right',
    te = 'hide.bs.dropdown',
    ee = 'hidden.bs.dropdown',
    ne = 'click.bs.dropdown.data-api',
    ie = 'keydown.bs.dropdown.data-api',
    oe = '[data-toggle="dropdown"]',
    re = '.dropdown-menu',
    ae = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null,
    },
    se = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string',
      popperConfig: '(null|object)',
    },
    le = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass($t)
          ) {
            var e = i.default(this._menu).hasClass(Jt);
            t._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              i.default(this._element).hasClass($t) ||
              i.default(this._menu).hasClass(Jt)
            ))
          ) {
            var n = { relatedTarget: this._element },
              o = i.default.Event('show.bs.dropdown', n),
              r = t._getParentFromElement(this._element);
            if ((i.default(r).trigger(o), !o.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ('undefined' == typeof Yt)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                  );
                var a = this._element;
                'parent' === this._config.reference
                  ? (a = r)
                  : u.isElement(this._config.reference) &&
                    ((a = this._config.reference),
                    'undefined' != typeof this._config.reference.jquery &&
                      (a = this._config.reference[0])),
                  'scrollParent' !== this._config.boundary &&
                    i.default(r).addClass('position-static'),
                  (this._popper = new Yt(
                    a,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              'ontouchstart' in document.documentElement &&
                0 === i.default(r).closest('.navbar-nav').length &&
                i
                  .default(document.body)
                  .children()
                  .on('mouseover', null, i.default.noop),
                this._element.focus(),
                this._element.setAttribute('aria-expanded', !0),
                i.default(this._menu).toggleClass(Jt),
                i
                  .default(r)
                  .toggleClass(Jt)
                  .trigger(i.default.Event('shown.bs.dropdown', n));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass($t) &&
            i.default(this._menu).hasClass(Jt)
          ) {
            var e = { relatedTarget: this._element },
              n = i.default.Event(te, e),
              o = t._getParentFromElement(this._element);
            i.default(o).trigger(n),
              n.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                i.default(this._menu).toggleClass(Jt),
                i.default(o).toggleClass(Jt).trigger(i.default.Event(ee, e)));
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, Kt),
            i.default(this._element).off('.bs.dropdown'),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          i.default(this._element).on('click.bs.dropdown', function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              this.constructor.Default,
              i.default(this._element).data(),
              t
            )),
            u.typeCheckConfig(zt, t, this.constructor.DefaultType),
            t
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(re));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var t = i.default(this._element.parentNode),
            e = 'bottom-start';
          return (
            t.hasClass('dropup')
              ? (e = i.default(this._menu).hasClass(Zt)
                  ? 'top-end'
                  : 'top-start')
              : t.hasClass('dropright')
              ? (e = 'right-start')
              : t.hasClass('dropleft')
              ? (e = 'left-start')
              : i.default(this._menu).hasClass(Zt) && (e = 'bottom-end'),
            e
          );
        }),
        (e._detectNavbar = function () {
          return i.default(this._element).closest('.navbar').length > 0;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            'function' == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element)
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            'static' === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            a({}, t, this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data(Kt);
            if (
              (n ||
                ((n = new t(this, 'object' == typeof e ? e : null)),
                i.default(this).data(Kt, n)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t._clearMenus = function (e) {
          if (!e || (3 !== e.which && ('keyup' !== e.type || 9 === e.which)))
            for (
              var n = [].slice.call(document.querySelectorAll(oe)),
                o = 0,
                r = n.length;
              o < r;
              o++
            ) {
              var a = t._getParentFromElement(n[o]),
                s = i.default(n[o]).data(Kt),
                l = { relatedTarget: n[o] };
              if ((e && 'click' === e.type && (l.clickEvent = e), s)) {
                var u = s._menu;
                if (
                  i.default(a).hasClass(Jt) &&
                  !(
                    e &&
                    (('click' === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ('keyup' === e.type && 9 === e.which)) &&
                    i.default.contains(a, e.target)
                  )
                ) {
                  var f = i.default.Event(te, l);
                  i.default(a).trigger(f),
                    f.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        i
                          .default(document.body)
                          .children()
                          .off('mouseover', null, i.default.noop),
                      n[o].setAttribute('aria-expanded', 'false'),
                      s._popper && s._popper.destroy(),
                      i.default(u).removeClass(Jt),
                      i
                        .default(a)
                        .removeClass(Jt)
                        .trigger(i.default.Event(ee, l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = u.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (e) {
          if (
            !(/input|textarea/i.test(e.target.tagName)
              ? 32 === e.which ||
                (27 !== e.which &&
                  ((40 !== e.which && 38 !== e.which) ||
                    i.default(e.target).closest(re).length))
              : !Gt.test(e.which)) &&
            !this.disabled &&
            !i.default(this).hasClass($t)
          ) {
            var n = t._getParentFromElement(this),
              o = i.default(n).hasClass(Jt);
            if (o || 27 !== e.which) {
              if (
                (e.preventDefault(),
                e.stopPropagation(),
                !o || 27 === e.which || 32 === e.which)
              )
                return (
                  27 === e.which &&
                    i.default(n.querySelector(oe)).trigger('focus'),
                  void i.default(this).trigger('click')
                );
              var r = [].slice
                .call(
                  n.querySelectorAll(
                    '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
                  )
                )
                .filter(function (t) {
                  return i.default(t).is(':visible');
                });
              if (0 !== r.length) {
                var a = r.indexOf(e.target);
                38 === e.which && a > 0 && a--,
                  40 === e.which && a < r.length - 1 && a++,
                  a < 0 && (a = 0),
                  r[a].focus();
              }
            }
          }
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
          {
            key: 'Default',
            get: function () {
              return ae;
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return se;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(ie, oe, le._dataApiKeydownHandler)
    .on(ie, re, le._dataApiKeydownHandler)
    .on(ne + ' keyup.bs.dropdown.data-api', le._clearMenus)
    .on(ne, oe, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        le._jQueryInterface.call(i.default(this), 'toggle');
    })
    .on(ne, '.dropdown form', function (t) {
      t.stopPropagation();
    }),
    (i.default.fn[zt] = le._jQueryInterface),
    (i.default.fn[zt].Constructor = le),
    (i.default.fn[zt].noConflict = function () {
      return (i.default.fn[zt] = Xt), le._jQueryInterface;
    });
  var ue = 'bs.modal',
    fe = i.default.fn.modal,
    de = 'modal-open',
    ce = 'fade',
    he = 'show',
    pe = 'modal-static',
    me = 'hidden.bs.modal',
    ge = 'show.bs.modal',
    _e = 'focusin.bs.modal',
    ve = 'resize.bs.modal',
    be = 'click.dismiss.bs.modal',
    ye = 'keydown.dismiss.bs.modal',
    Ee = 'mousedown.dismiss.bs.modal',
    we = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    Te = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Ce = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean',
    },
    Se = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector('.modal-dialog')),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = t.prototype;
      return (
        (e.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (e.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            var n = i.default.Event(ge, { relatedTarget: t });
            i.default(this._element).trigger(n),
              n.isDefaultPrevented() ||
                ((this._isShown = !0),
                i.default(this._element).hasClass(ce) &&
                  (this._isTransitioning = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i
                  .default(this._element)
                  .on(be, '[data-dismiss="modal"]', function (t) {
                    return e.hide(t);
                  }),
                i.default(this._dialog).on(Ee, function () {
                  i.default(e._element).one(
                    'mouseup.dismiss.bs.modal',
                    function (t) {
                      i.default(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    }
                  );
                }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (e.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = i.default.Event('hide.bs.modal');
            if (
              (i.default(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = i.default(this._element).hasClass(ce);
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i.default(document).off(_e),
                i.default(this._element).removeClass(he),
                i.default(this._element).off(be),
                i.default(this._dialog).off(Ee),
                o)
              ) {
                var r = u.getTransitionDurationFromElement(this._element);
                i.default(this._element)
                  .one(u.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return i.default(t).off('.bs.modal');
          }),
            i.default(document).off(_e),
            i.default.removeData(this._element, ue),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (t) {
          return (t = a({}, Te, t)), u.typeCheckConfig('modal', t, Ce), t;
        }),
        (e._triggerBackdropTransition = function () {
          var t = this,
            e = i.default.Event('hidePrevented.bs.modal');
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = 'hidden'),
              this._element.classList.add(pe);
            var o = u.getTransitionDurationFromElement(this._dialog);
            i.default(this._element).off(u.TRANSITION_END),
              i
                .default(this._element)
                .one(u.TRANSITION_END, function () {
                  t._element.classList.remove(pe),
                    n ||
                      i
                        .default(t._element)
                        .one(u.TRANSITION_END, function () {
                          t._element.style.overflowY = '';
                        })
                        .emulateTransitionEnd(t._element, o);
                })
                .emulateTransitionEnd(o),
              this._element.focus();
          }
        }),
        (e._showElement = function (t) {
          var e = this,
            n = i.default(this._element).hasClass(ce),
            o = this._dialog ? this._dialog.querySelector('.modal-body') : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            this._element.setAttribute('role', 'dialog'),
            i.default(this._dialog).hasClass('modal-dialog-scrollable') && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && u.reflow(this._element),
            i.default(this._element).addClass(he),
            this._config.focus && this._enforceFocus();
          var r = i.default.Event('shown.bs.modal', { relatedTarget: t }),
            a = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                i.default(e._element).trigger(r);
            };
          if (n) {
            var s = u.getTransitionDurationFromElement(this._dialog);
            i.default(this._dialog)
              .one(u.TRANSITION_END, a)
              .emulateTransitionEnd(s);
          } else a();
        }),
        (e._enforceFocus = function () {
          var t = this;
          i.default(document)
            .off(_e)
            .on(_e, function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === i.default(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? i.default(this._element).on(ye, function (e) {
                t._config.keyboard && 27 === e.which
                  ? (e.preventDefault(), t.hide())
                  : t._config.keyboard ||
                    27 !== e.which ||
                    t._triggerBackdropTransition();
              })
            : this._isShown || i.default(this._element).off(ye);
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? i.default(window).on(ve, function (e) {
                return t.handleUpdate(e);
              })
            : i.default(window).off(ve);
        }),
        (e._hideModal = function () {
          var t = this;
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            this._element.removeAttribute('role'),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              i.default(document.body).removeClass(de),
                t._resetAdjustments(),
                t._resetScrollbar(),
                i.default(t._element).trigger(me);
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (i.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (t) {
          var e = this,
            n = i.default(this._element).hasClass(ce) ? ce : '';
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = 'modal-backdrop'),
              n && this._backdrop.classList.add(n),
              i.default(this._backdrop).appendTo(document.body),
              i.default(this._element).on(be, function (t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ('static' === e._config.backdrop
                      ? e._triggerBackdropTransition()
                      : e.hide());
              }),
              n && u.reflow(this._backdrop),
              i.default(this._backdrop).addClass(he),
              !t)
            )
              return;
            if (!n) return void t();
            var o = u.getTransitionDurationFromElement(this._backdrop);
            i.default(this._backdrop)
              .one(u.TRANSITION_END, t)
              .emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            i.default(this._backdrop).removeClass(he);
            var r = function () {
              e._removeBackdrop(), t && t();
            };
            if (i.default(this._element).hasClass(ce)) {
              var a = u.getTransitionDurationFromElement(this._backdrop);
              i.default(this._backdrop)
                .one(u.TRANSITION_END, r)
                .emulateTransitionEnd(a);
            } else r();
          } else t && t();
        }),
        (e._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + 'px');
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '');
        }),
        (e._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(document.querySelectorAll(we)),
              n = [].slice.call(document.querySelectorAll('.sticky-top'));
            i.default(e).each(function (e, n) {
              var o = n.style.paddingRight,
                r = i.default(n).css('padding-right');
              i.default(n)
                .data('padding-right', o)
                .css('padding-right', parseFloat(r) + t._scrollbarWidth + 'px');
            }),
              i.default(n).each(function (e, n) {
                var o = n.style.marginRight,
                  r = i.default(n).css('margin-right');
                i.default(n)
                  .data('margin-right', o)
                  .css(
                    'margin-right',
                    parseFloat(r) - t._scrollbarWidth + 'px'
                  );
              });
            var o = document.body.style.paddingRight,
              r = i.default(document.body).css('padding-right');
            i.default(document.body)
              .data('padding-right', o)
              .css(
                'padding-right',
                parseFloat(r) + this._scrollbarWidth + 'px'
              );
          }
          i.default(document.body).addClass(de);
        }),
        (e._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(we));
          i.default(t).each(function (t, e) {
            var n = i.default(e).data('padding-right');
            i.default(e).removeData('padding-right'),
              (e.style.paddingRight = n || '');
          });
          var e = [].slice.call(document.querySelectorAll('.sticky-top'));
          i.default(e).each(function (t, e) {
            var n = i.default(e).data('margin-right');
            'undefined' != typeof n &&
              i.default(e).css('margin-right', n).removeData('margin-right');
          });
          var n = i.default(document.body).data('padding-right');
          i.default(document.body).removeData('padding-right'),
            (document.body.style.paddingRight = n || '');
        }),
        (e._getScrollbarWidth = function () {
          var t = document.createElement('div');
          (t.className = 'modal-scrollbar-measure'),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this).data(ue),
              r = a(
                {},
                Te,
                i.default(this).data(),
                'object' == typeof e && e ? e : {}
              );
            if (
              (o || ((o = new t(this, r)), i.default(this).data(ue, o)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](n);
            } else r.show && o.show(n);
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Te;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on('click.bs.modal.data-api', '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        o = u.getSelectorFromElement(this);
      o && (e = document.querySelector(o));
      var r = i.default(e).data(ue)
        ? 'toggle'
        : a({}, i.default(e).data(), i.default(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault();
      var s = i.default(e).one(ge, function (t) {
        t.isDefaultPrevented() ||
          s.one(me, function () {
            i.default(n).is(':visible') && n.focus();
          });
      });
      Se._jQueryInterface.call(i.default(e), r, this);
    }),
    (i.default.fn.modal = Se._jQueryInterface),
    (i.default.fn.modal.Constructor = Se),
    (i.default.fn.modal.noConflict = function () {
      return (i.default.fn.modal = fe), Se._jQueryInterface;
    });
  var Ne = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ],
    De = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Ae =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function ke(t, e, n) {
    if (0 === t.length) return t;
    if (n && 'function' == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, 'text/html'),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll('*')),
        a = function (t, n) {
          var i = r[t],
            a = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), 'continue';
          var s = [].slice.call(i.attributes),
            l = [].concat(e['*'] || [], e[a] || []);
          s.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Ne.indexOf(n) ||
                  Boolean(De.test(t.nodeValue) || Ae.test(t.nodeValue))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (i[o].test(n)) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        s = 0,
        l = r.length;
      s < l;
      s++
    )
      a(s);
    return i.body.innerHTML;
  }
  var Ie = 'tooltip',
    Oe = 'bs.tooltip',
    xe = i.default.fn.tooltip,
    je = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
    Le = ['sanitize', 'whiteList', 'sanitizeFn'],
    Pe = 'fade',
    Fe = 'show',
    Re = 'show',
    Be = 'out',
    He = 'hover',
    Me = 'focus',
    qe = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left',
    },
    Qe = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      customClass: '',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
        a: ['target', 'href', 'title', 'rel'],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    We = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      customClass: '(string|function)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object',
      popperConfig: '(null|object)',
    },
    Ue = {
      HIDE: 'hide.bs.tooltip',
      HIDDEN: 'hidden.bs.tooltip',
      SHOW: 'show.bs.tooltip',
      SHOWN: 'shown.bs.tooltip',
      INSERTED: 'inserted.bs.tooltip',
      CLICK: 'click.bs.tooltip',
      FOCUSIN: 'focusin.bs.tooltip',
      FOCUSOUT: 'focusout.bs.tooltip',
      MOUSEENTER: 'mouseenter.bs.tooltip',
      MOUSELEAVE: 'mouseleave.bs.tooltip',
    },
    Ve = (function () {
      function t(t, e) {
        if ('undefined' == typeof Yt)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = i.default(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                i.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (i.default(this.getTipElement()).hasClass(Fe))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            i.default.removeData(this.element, this.constructor.DATA_KEY),
            i.default(this.element).off(this.constructor.EVENT_KEY),
            i
              .default(this.element)
              .closest('.modal')
              .off('hide.bs.modal', this._hideModalHandler),
            this.tip && i.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ('none' === i.default(this.element).css('display'))
            throw new Error('Please use show on visible elements');
          var e = i.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            i.default(this.element).trigger(e);
            var n = u.findShadowRoot(this.element),
              o = i.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !o) return;
            var r = this.getTipElement(),
              a = u.getUID(this.constructor.NAME);
            r.setAttribute('id', a),
              this.element.setAttribute('aria-describedby', a),
              this.setContent(),
              this.config.animation && i.default(r).addClass(Pe);
            var s =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              l = this._getAttachment(s);
            this.addAttachmentClass(l);
            var f = this._getContainer();
            i.default(r).data(this.constructor.DATA_KEY, this),
              i.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || i.default(r).appendTo(f),
              i.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new Yt(
                this.element,
                r,
                this._getPopperConfig(l)
              )),
              i.default(r).addClass(Fe),
              i.default(r).addClass(this.config.customClass),
              'ontouchstart' in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .on('mouseover', null, i.default.noop);
            var d = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                i.default(t.element).trigger(t.constructor.Event.SHOWN),
                e === Be && t._leave(null, t);
            };
            if (i.default(this.tip).hasClass(Pe)) {
              var c = u.getTransitionDurationFromElement(this.tip);
              i.default(this.tip)
                .one(u.TRANSITION_END, d)
                .emulateTransitionEnd(c);
            } else d();
          }
        }),
        (e.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            o = i.default.Event(this.constructor.Event.HIDE),
            r = function () {
              e._hoverState !== Re &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute('aria-describedby'),
                i.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((i.default(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (i.default(n).removeClass(Fe),
              'ontouchstart' in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .off('mouseover', null, i.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              i.default(this.tip).hasClass(Pe))
            ) {
              var a = u.getTransitionDurationFromElement(n);
              i.default(n).one(u.TRANSITION_END, r).emulateTransitionEnd(a);
            } else r();
            this._hoverState = '';
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass('bs-tooltip-' + t);
        }),
        (e.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            i.default(t.querySelectorAll('.tooltip-inner')),
            this.getTitle()
          ),
            i.default(t).removeClass('fade show');
        }),
        (e.setElementContent = function (t, e) {
          'object' != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = ke(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? i.default(e).parent().is(t) || t.empty().append(e)
            : t.text(i.default(e).text());
        }),
        (e.getTitle = function () {
          var t = this.element.getAttribute('data-original-title');
          return (
            t ||
              (t =
                'function' == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (e._getPopperConfig = function (t) {
          var e = this;
          return a(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: '.arrow' },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            'function' == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element)
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : u.isElement(this.config.container)
            ? i.default(this.config.container)
            : i.default(document).find(this.config.container);
        }),
        (e._getAttachment = function (t) {
          return qe[t.toUpperCase()];
        }),
        (e._setListeners = function () {
          var t = this;
          this.config.trigger.split(' ').forEach(function (e) {
            if ('click' === e)
              i.default(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ('manual' !== e) {
              var n =
                  e === He
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  e === He
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              i.default(t.element)
                .on(n, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            i
              .default(this.element)
              .closest('.modal')
              .on('hide.bs.modal', this._hideModalHandler),
            this.config.selector
              ? (this.config = a({}, this.config, {
                  trigger: 'manual',
                  selector: '',
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var t = typeof this.element.getAttribute('data-original-title');
          (this.element.getAttribute('title') || 'string' !== t) &&
            (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || ''
            ),
            this.element.setAttribute('title', ''));
        }),
        (e._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusin' === t.type ? Me : He] = !0),
            i.default(e.getTipElement()).hasClass(Fe) || e._hoverState === Re
              ? (e._hoverState = Re)
              : (clearTimeout(e._timeout),
                (e._hoverState = Re),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Re && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (e._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusout' === t.type ? Me : He] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = Be),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    e._hoverState === Be && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (e._getConfig = function (t) {
          var e = i.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== Le.indexOf(t) && delete e[t];
            }),
            'number' ==
              typeof (t = a(
                {},
                this.constructor.Default,
                e,
                'object' == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            'number' == typeof t.title && (t.title = t.title.toString()),
            'number' == typeof t.content && (t.content = t.content.toString()),
            u.typeCheckConfig(Ie, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = ke(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (e._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (e._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr('class').match(je);
          null !== e && e.length && t.removeClass(e.join(''));
        }),
        (e._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (e._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute('x-placement') &&
            (i.default(t).removeClass(Pe),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(Oe),
              r = 'object' == typeof e && e;
            if (
              (o || !/dispose|hide/.test(e)) &&
              (o || ((o = new t(this, r)), n.data(Oe, o)), 'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Qe;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return Ie;
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return Oe;
            },
          },
          {
            key: 'Event',
            get: function () {
              return Ue;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return '.bs.tooltip';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return We;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn.tooltip = Ve._jQueryInterface),
    (i.default.fn.tooltip.Constructor = Ve),
    (i.default.fn.tooltip.noConflict = function () {
      return (i.default.fn.tooltip = xe), Ve._jQueryInterface;
    });
  var Ye = 'bs.popover',
    ze = i.default.fn.popover,
    Ke = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
    Xe = a({}, Ve.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    Ge = a({}, Ve.DefaultType, { content: '(string|element|function)' }),
    $e = {
      HIDE: 'hide.bs.popover',
      HIDDEN: 'hidden.bs.popover',
      SHOW: 'show.bs.popover',
      SHOWN: 'shown.bs.popover',
      INSERTED: 'inserted.bs.popover',
      CLICK: 'click.bs.popover',
      FOCUSIN: 'focusin.bs.popover',
      FOCUSOUT: 'focusout.bs.popover',
      MOUSEENTER: 'mouseenter.bs.popover',
      MOUSELEAVE: 'mouseleave.bs.popover',
    },
    Je = (function (t) {
      var e, n;
      function o() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = o).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        s(e, n);
      var a = o.prototype;
      return (
        (a.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (a.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass('bs-popover-' + t);
        }),
        (a.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (a.setContent = function () {
          var t = i.default(this.getTipElement());
          this.setElementContent(t.find('.popover-header'), this.getTitle());
          var e = this._getContent();
          'function' == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find('.popover-body'), e),
            t.removeClass('fade show');
        }),
        (a._getContent = function () {
          return (
            this.element.getAttribute('data-content') || this.config.content
          );
        }),
        (a._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr('class').match(Ke);
          null !== e && e.length > 0 && t.removeClass(e.join(''));
        }),
        (o._jQueryInterface = function (t) {
          return this.each(function () {
            var e = i.default(this).data(Ye),
              n = 'object' == typeof t ? t : null;
            if (
              (e || !/dispose|hide/.test(t)) &&
              (e || ((e = new o(this, n)), i.default(this).data(Ye, e)),
              'string' == typeof t)
            ) {
              if ('undefined' == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        r(o, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Xe;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return 'popover';
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return Ye;
            },
          },
          {
            key: 'Event',
            get: function () {
              return $e;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return '.bs.popover';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return Ge;
            },
          },
        ]),
        o
      );
    })(Ve);
  (i.default.fn.popover = Je._jQueryInterface),
    (i.default.fn.popover.Constructor = Je),
    (i.default.fn.popover.noConflict = function () {
      return (i.default.fn.popover = ze), Je._jQueryInterface;
    });
  var Ze = 'scrollspy',
    tn = 'bs.scrollspy',
    en = i.default.fn[Ze],
    nn = 'active',
    on = 'position',
    rn = '.nav, .list-group',
    an = { offset: 10, method: 'auto', target: '' },
    sn = { offset: 'number', method: 'string', target: '(string|element)' },
    ln = (function () {
      function t(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = 'BODY' === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            ' .nav-link,' +
            this._config.target +
            ' .list-group-item,' +
            this._config.target +
            ' .dropdown-item'),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          i
            .default(this._scrollElement)
            .on('scroll.bs.scrollspy', function (t) {
              return n._process(t);
            }),
          this.refresh(),
          this._process();
      }
      var e = t.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e =
              this._scrollElement === this._scrollElement.window
                ? 'offset'
                : on,
            n = 'auto' === this._config.method ? e : this._config.method,
            o = n === on ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  r = u.getSelectorFromElement(t);
                if ((r && (e = document.querySelector(r)), e)) {
                  var a = e.getBoundingClientRect();
                  if (a.width || a.height)
                    return [i.default(e)[n]().top + o, r];
                }
                return null;
              })
              .filter(Boolean)
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, tn),
            i.default(this._scrollElement).off('.bs.scrollspy'),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (t) {
          if (
            'string' !=
              typeof (t = a({}, an, 'object' == typeof t && t ? t : {}))
                .target &&
            u.isElement(t.target)
          ) {
            var e = i.default(t.target).attr('id');
            e || ((e = u.getUID(Ze)), i.default(t.target).attr('id', e)),
              (t.target = '#' + e);
          }
          return u.typeCheckConfig(Ze, t, sn), t;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; )
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ('undefined' == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(',').map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = i.default(
              [].slice.call(document.querySelectorAll(e.join(',')))
            );
          n.hasClass('dropdown-item')
            ? (n.closest('.dropdown').find('.dropdown-toggle').addClass(nn),
              n.addClass(nn))
            : (n.addClass(nn),
              n.parents(rn).prev('.nav-link, .list-group-item').addClass(nn),
              n
                .parents(rn)
                .prev('.nav-item')
                .children('.nav-link')
                .addClass(nn)),
            i
              .default(this._scrollElement)
              .trigger('activate.bs.scrollspy', { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(nn);
            })
            .forEach(function (t) {
              return t.classList.remove(nn);
            });
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data(tn);
            if (
              (n ||
                ((n = new t(this, 'object' == typeof e && e)),
                i.default(this).data(tn, n)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
          {
            key: 'Default',
            get: function () {
              return an;
            },
          },
        ]),
        t
      );
    })();
  i.default(window).on('load.bs.scrollspy.data-api', function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        e = t.length;
      e--;

    ) {
      var n = i.default(t[e]);
      ln._jQueryInterface.call(n, n.data());
    }
  }),
    (i.default.fn[Ze] = ln._jQueryInterface),
    (i.default.fn[Ze].Constructor = ln),
    (i.default.fn[Ze].noConflict = function () {
      return (i.default.fn[Ze] = en), ln._jQueryInterface;
    });
  var un = 'bs.tab',
    fn = i.default.fn.tab,
    dn = 'active',
    cn = 'fade',
    hn = 'show',
    pn = '.active',
    mn = '> li > .active',
    gn = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                i.default(this._element).hasClass(dn)) ||
              i.default(this._element).hasClass('disabled') ||
              this._element.hasAttribute('disabled')
            )
          ) {
            var e,
              n,
              o = i.default(this._element).closest('.nav, .list-group')[0],
              r = u.getSelectorFromElement(this._element);
            if (o) {
              var a = 'UL' === o.nodeName || 'OL' === o.nodeName ? mn : pn;
              n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1];
            }
            var s = i.default.Event('hide.bs.tab', {
                relatedTarget: this._element,
              }),
              l = i.default.Event('show.bs.tab', { relatedTarget: n });
            if (
              (n && i.default(n).trigger(s),
              i.default(this._element).trigger(l),
              !l.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              r && (e = document.querySelector(r)),
                this._activate(this._element, o);
              var f = function () {
                var e = i.default.Event('hidden.bs.tab', {
                    relatedTarget: t._element,
                  }),
                  o = i.default.Event('shown.bs.tab', { relatedTarget: n });
                i.default(n).trigger(e), i.default(t._element).trigger(o);
              };
              e ? this._activate(e, e.parentNode, f) : f();
            }
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, un), (this._element = null);
        }),
        (e._activate = function (t, e, n) {
          var o = this,
            r = (
              !e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
                ? i.default(e).children(pn)
                : i.default(e).find(mn)
            )[0],
            a = n && r && i.default(r).hasClass(cn),
            s = function () {
              return o._transitionComplete(t, r, n);
            };
          if (r && a) {
            var l = u.getTransitionDurationFromElement(r);
            i.default(r)
              .removeClass(hn)
              .one(u.TRANSITION_END, s)
              .emulateTransitionEnd(l);
          } else s();
        }),
        (e._transitionComplete = function (t, e, n) {
          if (e) {
            i.default(e).removeClass(dn);
            var o = i.default(e.parentNode).find('> .dropdown-menu .active')[0];
            o && i.default(o).removeClass(dn),
              'tab' === e.getAttribute('role') &&
                e.setAttribute('aria-selected', !1);
          }
          i.default(t).addClass(dn),
            'tab' === t.getAttribute('role') &&
              t.setAttribute('aria-selected', !0),
            u.reflow(t),
            t.classList.contains(cn) && t.classList.add(hn);
          var r = t.parentNode;
          if (
            (r && 'LI' === r.nodeName && (r = r.parentNode),
            r && i.default(r).hasClass('dropdown-menu'))
          ) {
            var a = i.default(t).closest('.dropdown')[0];
            if (a) {
              var s = [].slice.call(a.querySelectorAll('.dropdown-toggle'));
              i.default(s).addClass(dn);
            }
            t.setAttribute('aria-expanded', !0);
          }
          n && n();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(un);
            if (
              (o || ((o = new t(this)), n.data(un, o)), 'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      'click.bs.tab.data-api',
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), gn._jQueryInterface.call(i.default(this), 'show');
      }
    ),
    (i.default.fn.tab = gn._jQueryInterface),
    (i.default.fn.tab.Constructor = gn),
    (i.default.fn.tab.noConflict = function () {
      return (i.default.fn.tab = fn), gn._jQueryInterface;
    });
  var _n = 'bs.toast',
    vn = i.default.fn.toast,
    bn = 'hide',
    yn = 'show',
    En = 'showing',
    wn = 'click.dismiss.bs.toast',
    Tn = { animation: !0, autohide: !0, delay: 500 },
    Cn = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
    Sn = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this,
            e = i.default.Event('show.bs.toast');
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add('fade');
            var n = function () {
              t._element.classList.remove(En),
                t._element.classList.add(yn),
                i.default(t._element).trigger('shown.bs.toast'),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove(bn),
              u.reflow(this._element),
              this._element.classList.add(En),
              this._config.animation)
            ) {
              var o = u.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(u.TRANSITION_END, n)
                .emulateTransitionEnd(o);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains(yn)) {
            var t = i.default.Event('hide.bs.toast');
            i.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains(yn) &&
              this._element.classList.remove(yn),
            i.default(this._element).off(wn),
            i.default.removeData(this._element, _n),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              Tn,
              i.default(this._element).data(),
              'object' == typeof t && t ? t : {}
            )),
            u.typeCheckConfig('toast', t, this.constructor.DefaultType),
            t
          );
        }),
        (e._setListeners = function () {
          var t = this;
          i.default(this._element).on(
            wn,
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (e._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add(bn),
                i.default(t._element).trigger('hidden.bs.toast');
            };
          if ((this._element.classList.remove(yn), this._config.animation)) {
            var n = u.getTransitionDurationFromElement(this._element);
            i.default(this._element)
              .one(u.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (e._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(_n);
            if (
              (o ||
                ((o = new t(this, 'object' == typeof e && e)), n.data(_n, o)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](this);
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.2';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return Cn;
            },
          },
          {
            key: 'Default',
            get: function () {
              return Tn;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn.toast = Sn._jQueryInterface),
    (i.default.fn.toast.Constructor = Sn),
    (i.default.fn.toast.noConflict = function () {
      return (i.default.fn.toast = vn), Sn._jQueryInterface;
    }),
    (t.Alert = c),
    (t.Button = b),
    (t.Carousel = O),
    (t.Collapse = W),
    (t.Dropdown = le),
    (t.Modal = Se),
    (t.Popover = Je),
    (t.Scrollspy = ln),
    (t.Tab = gn),
    (t.Toast = Sn),
    (t.Tooltip = Ve),
    (t.Util = u),
    Object.defineProperty(t, '__esModule', { value: !0 });
});

(function ($) {
  $.each(['show', 'hide'], function (i, ev) {
    var el = $.fn[ev];
    $.fn[ev] = function () {
      this.trigger(ev);
      return el.apply(this, arguments);
    };
  });
})(jQuery);

window.mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

jQuery.fn.preventDoubleSubmission = function () {
  $(this).on('submit', function (e) {
    var $form = $(this);

    if ($form.data('submitted') === true) {
      // Previously submitted - don't submit again
      e.preventDefault();
      console.log('prevent double submittion');
    } else {
      // Mark it so that the next submit can be ignored
      $form.data('submitted', true);
    }
  });

  // Keep chainability
  return this;
};

function lazyImages() {
  $('.lazyset').each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
      $(this)
        .attr('srcset', $(this).data('srcset'))
        .removeAttr('data-srcset')
        .addClass('loaded');
    }
  });
  $('.lazy').each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
      $(this)
        .attr('src', $(this).data('src'))
        .removeAttr('data-src')
        .addClass('loaded');
    }
  });

  $(window).on('scroll resize', function () {
    $('.lazyset').each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
        $(this)
          .attr('srcset', $(this).data('srcset'))
          .removeAttr('data-srcset')
          .addClass('loaded');
      }
    });
    $('.lazy').each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
        $(this)
          .attr('src', $(this).data('src'))
          .removeAttr('data-src')
          .addClass('loaded');
      }
    });
  });
}

function slideTo(el) {
  $('html, body').animate(
    {
      scrollTop: $(el).offset().top - 160,
    },
    500
  );
}

function spaceFromBottom(el) {
  var eTop = $(el).offset().top; //get the offset top of the element
  if (eTop - $(window).scrollTop() < $(window).height() + 600) {
    return true;
  } else {
    return false;
  }
}

function getFileName($input, $el) {
  $text = $input.value;
  document.getElementById($el).innerHTML = $text.split('\\')[2];
}

function isScriptLoaded(url) {
  var scripts = document.getElementsByTagName('script');
  for (var i = scripts.length; i--; ) {
    if (scripts[i].src == url) return true;
  }
  return false;
}

function addScript($src) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = $src;
  head.appendChild(script);
}

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState) {
    // only required for IE <9
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

/**
 * Parse url
 */
function urlParser($url) {
  var parser = document.createElement('a');
  parser.href = $url;

  var $result = parser.hostname;

  return $result;
}

/**
 * Get referrer address
 */
function getReferrer() {
  var $url = document.referrer;

  if (getCookie('referrerURL')) {
    var $oldURL = getCookie('referrerURL');
  }

  if ($url.length > 0 || $oldURL) {
    if (typeof $oldURL != 'undefined' && $oldURL !== null) {
      var $hostname = urlParser($oldURL);
      var $search = $oldURL.split('?')[1];
    } else {
      var $hostname = urlParser($url);
      var $search = $url.split('?')[1];
    }

    var $searchAdwords = false;
    var $host = $hostname;

    if (typeof $search != 'undefined' && $search !== null) {
      var $searchParts = $search.split('&');
      var $searchPhrase = 'gclid';
      var $searchPartsArr = [];

      for (var $i = 0; $i < $searchParts.length; $i++) {
        $searchPartsArr.push($searchParts[$i].split('='));
      }
      for (var $i = 0; $i < $searchPartsArr.length; $i++) {
        var $part = $searchPartsArr[$i];
        for (var $j = 0; $j < $part.length; $j++) {
          if ($part[$j].match($searchPhrase) !== null) {
            $searchAdwords = true;
            break;
          }
        }
      }
    }

    if ($hostname !== window.location.hostname) {
      if (!$oldURL) {
        setCookie('referrerURL', $url, '7');
      }

      if ($searchAdwords === true) {
        $('#cv-upload-form, #job-application-form')
          .find('input[name="applicant-find"]')
          .val('Google Adwords');
      } else {
        $('#cv-upload-form, #job-application-form')
          .find('input[name="applicant-find"]')
          .val($host);
      }
    }
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function parseParams(querystring) {
  // parse query string
  const params = new URLSearchParams(querystring);

  const obj = {};

  // iterate over all keys
  for (const key of params.keys()) {
    if (params.getAll(key).length > 1) {
      obj[key] = params.getAll(key);
    } else {
      obj[key] = params.get(key);
    }
  }

  return obj;
}

function itemsDown($item) {
  var item = $('.' + $item);
  var cont = item.parent();
  var elH = 0;
  var dropH = cont.height();
  cont.children().each(function () {
    if (!$(this).hasClass($item)) {
      elH = elH + $(this).outerHeight(true);
      console.log($(this));
    }
  });
  var fH = dropH - elH - item.height() - 50;
  if (fH > 0) {
    item.css({ 'margin-top': fH + 'px' });
  }
}

/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return void 0===a?"":a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()&&0===this.pendingRequest?(a(this.currentForm).trigger("submit"),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a["date"===b?"dateISO":c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(a,d){b[a]="function"==typeof d&&"normalizer"!==a?d(c):d}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var a;b[this]&&(Array.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(a=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(a[0]),Number(a[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c},maxlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d<=c},rangelength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c[0]&&d<=c[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});
/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery', './jquery.validate.min'], a)
    : 'object' == typeof module && module.exports
    ? (module.exports = a(require('jquery')))
    : a(jQuery);
})(function (a) {
  return (
    (function () {
      function b(a) {
        return a
          .replace(/<.[^<>]*?>/g, ' ')
          .replace(/&nbsp;|&#160;/gi, ' ')
          .replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, '');
      }
      a.validator.addMethod(
        'maxWords',
        function (a, c, d) {
          return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d;
        },
        a.validator.format('Please enter {0} words or less.')
      ),
        a.validator.addMethod(
          'minWords',
          function (a, c, d) {
            return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d;
          },
          a.validator.format('Please enter at least {0} words.')
        ),
        a.validator.addMethod(
          'rangeWords',
          function (a, c, d) {
            var e = b(a),
              f = /\b\w+\b/g;
            return (
              this.optional(c) ||
              (e.match(f).length >= d[0] && e.match(f).length <= d[1])
            );
          },
          a.validator.format('Please enter between {0} and {1} words.')
        );
    })(),
    a.validator.addMethod(
      'abaRoutingNumber',
      function (a) {
        var b = 0,
          c = a.split(''),
          d = c.length;
        if (9 !== d) return !1;
        for (var e = 0; e < d; e += 3)
          b +=
            3 * parseInt(c[e], 10) +
            7 * parseInt(c[e + 1], 10) +
            parseInt(c[e + 2], 10);
        return 0 !== b && b % 10 === 0;
      },
      'Please enter a valid routing number.'
    ),
    a.validator.addMethod(
      'accept',
      function (b, c, d) {
        var e,
          f,
          g,
          h = 'string' == typeof d ? d.replace(/\s/g, '') : 'image/*',
          i = this.optional(c);
        if (i) return i;
        if (
          'file' === a(c).attr('type') &&
          ((h = h
            .replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, '\\$&')
            .replace(/,/g, '|')
            .replace(/\/\*/g, '/.*')),
          c.files && c.files.length)
        )
          for (
            g = new RegExp('.?(' + h + ')$', 'i'), e = 0;
            e < c.files.length;
            e++
          )
            if (((f = c.files[e]), !f.type.match(g))) return !1;
        return !0;
      },
      a.validator.format('Please enter a value with a valid mimetype.')
    ),
    a.validator.addMethod(
      'alphanumeric',
      function (a, b) {
        return this.optional(b) || /^\w+$/i.test(a);
      },
      'Letters, numbers, and underscores only please.'
    ),
    a.validator.addMethod(
      'bankaccountNL',
      function (a, b) {
        if (this.optional(b)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
        var c,
          d,
          e,
          f = a.replace(/ /g, ''),
          g = 0,
          h = f.length;
        for (c = 0; c < h; c++)
          (d = h - c), (e = f.substring(c, c + 1)), (g += d * e);
        return g % 11 === 0;
      },
      'Please specify a valid bank account number.'
    ),
    a.validator.addMethod(
      'bankorgiroaccountNL',
      function (b, c) {
        return (
          this.optional(c) ||
          a.validator.methods.bankaccountNL.call(this, b, c) ||
          a.validator.methods.giroaccountNL.call(this, b, c)
        );
      },
      'Please specify a valid bank or giro account number.'
    ),
    a.validator.addMethod(
      'bic',
      function (a, b) {
        return (
          this.optional(b) ||
          /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(
            a.toUpperCase()
          )
        );
      },
      'Please specify a valid BIC code.'
    ),
    a.validator.addMethod(
      'cifES',
      function (a, b) {
        'use strict';
        function c(a) {
          return a % 2 === 0;
        }
        if (this.optional(b)) return !0;
        var d,
          e,
          f,
          g,
          h = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),
          i = a.substring(0, 1),
          j = a.substring(1, 8),
          k = a.substring(8, 9),
          l = 0,
          m = 0,
          n = 0;
        if (9 !== a.length || !h.test(a)) return !1;
        for (d = 0; d < j.length; d++)
          (e = parseInt(j[d], 10)),
            c(d) ? ((e *= 2), (n += e < 10 ? e : e - 9)) : (m += e);
        return (
          (l = m + n),
          (f = (10 - l.toString().substr(-1)).toString()),
          (f = parseInt(f, 10) > 9 ? '0' : f),
          (g = 'JABCDEFGHI'.substr(f, 1).toString()),
          i.match(/[ABEH]/)
            ? k === f
            : i.match(/[KPQS]/)
            ? k === g
            : k === f || k === g
        );
      },
      'Please specify a valid CIF number.'
    ),
    a.validator.addMethod(
      'cnhBR',
      function (a) {
        if (
          ((a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, '')),
          11 !== a.length)
        )
          return !1;
        var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = 0;
        if (((b = a.charAt(0)), new Array(12).join(b) === a)) return !1;
        for (e = 0, f = 9, g = 0; e < 9; ++e, --f) h += +(a.charAt(e) * f);
        for (
          c = h % 11, c >= 10 && ((c = 0), (i = 2)), h = 0, e = 0, f = 1, g = 0;
          e < 9;
          ++e, ++f
        )
          h += +(a.charAt(e) * f);
        return (
          (d = h % 11),
          d >= 10 ? (d = 0) : (d -= i),
          String(c).concat(d) === a.substr(-2)
        );
      },
      'Please specify a valid CNH number.'
    ),
    a.validator.addMethod(
      'cnpjBR',
      function (a, b) {
        'use strict';
        if (this.optional(b)) return !0;
        if (((a = a.replace(/[^\d]+/g, '')), 14 !== a.length)) return !1;
        if (
          '00000000000000' === a ||
          '11111111111111' === a ||
          '22222222222222' === a ||
          '33333333333333' === a ||
          '44444444444444' === a ||
          '55555555555555' === a ||
          '66666666666666' === a ||
          '77777777777777' === a ||
          '88888888888888' === a ||
          '99999999999999' === a
        )
          return !1;
        for (
          var c = a.length - 2,
            d = a.substring(0, c),
            e = a.substring(c),
            f = 0,
            g = c - 7,
            h = c;
          h >= 1;
          h--
        )
          (f += d.charAt(c - h) * g--), g < 2 && (g = 9);
        var i = f % 11 < 2 ? 0 : 11 - (f % 11);
        if (i !== parseInt(e.charAt(0), 10)) return !1;
        (c += 1), (d = a.substring(0, c)), (f = 0), (g = c - 7);
        for (var j = c; j >= 1; j--)
          (f += d.charAt(c - j) * g--), g < 2 && (g = 9);
        return (
          (i = f % 11 < 2 ? 0 : 11 - (f % 11)), i === parseInt(e.charAt(1), 10)
        );
      },
      'Please specify a CNPJ value number.'
    ),
    a.validator.addMethod(
      'cpfBR',
      function (a, b) {
        'use strict';
        if (this.optional(b)) return !0;
        if (
          ((a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, '')),
          11 !== a.length)
        )
          return !1;
        var c,
          d,
          e,
          f,
          g = 0;
        if (
          ((c = parseInt(a.substring(9, 10), 10)),
          (d = parseInt(a.substring(10, 11), 10)),
          (e = function (a, b) {
            var c = (10 * a) % 11;
            return (10 !== c && 11 !== c) || (c = 0), c === b;
          }),
          '' === a ||
            '00000000000' === a ||
            '11111111111' === a ||
            '22222222222' === a ||
            '33333333333' === a ||
            '44444444444' === a ||
            '55555555555' === a ||
            '66666666666' === a ||
            '77777777777' === a ||
            '88888888888' === a ||
            '99999999999' === a)
        )
          return !1;
        for (f = 1; f <= 9; f++)
          g += parseInt(a.substring(f - 1, f), 10) * (11 - f);
        if (e(g, c)) {
          for (g = 0, f = 1; f <= 10; f++)
            g += parseInt(a.substring(f - 1, f), 10) * (12 - f);
          return e(g, d);
        }
        return !1;
      },
      'Please specify a valid CPF number.'
    ),
    a.validator.addMethod(
      'creditcard',
      function (a, b) {
        if (this.optional(b)) return 'dependency-mismatch';
        if (/[^0-9 \-]+/.test(a)) return !1;
        var c,
          d,
          e = 0,
          f = 0,
          g = !1;
        if (((a = a.replace(/\D/g, '')), a.length < 13 || a.length > 19))
          return !1;
        for (c = a.length - 1; c >= 0; c--)
          (d = a.charAt(c)),
            (f = parseInt(d, 10)),
            g && (f *= 2) > 9 && (f -= 9),
            (e += f),
            (g = !g);
        return e % 10 === 0;
      },
      'Please enter a valid credit card number.'
    ),
    a.validator.addMethod(
      'creditcardtypes',
      function (a, b, c) {
        if (/[^0-9\-]+/.test(a)) return !1;
        a = a.replace(/\D/g, '');
        var d = 0;
        return (
          c.mastercard && (d |= 1),
          c.visa && (d |= 2),
          c.amex && (d |= 4),
          c.dinersclub && (d |= 8),
          c.enroute && (d |= 16),
          c.discover && (d |= 32),
          c.jcb && (d |= 64),
          c.unknown && (d |= 128),
          c.all && (d = 255),
          1 & d && (/^(5[12345])/.test(a) || /^(2[234567])/.test(a))
            ? 16 === a.length
            : 2 & d && /^(4)/.test(a)
            ? 16 === a.length
            : 4 & d && /^(3[47])/.test(a)
            ? 15 === a.length
            : 8 & d && /^(3(0[012345]|[68]))/.test(a)
            ? 14 === a.length
            : 16 & d && /^(2(014|149))/.test(a)
            ? 15 === a.length
            : 32 & d && /^(6011)/.test(a)
            ? 16 === a.length
            : 64 & d && /^(3)/.test(a)
            ? 16 === a.length
            : 64 & d && /^(2131|1800)/.test(a)
            ? 15 === a.length
            : !!(128 & d)
        );
      },
      'Please enter a valid credit card number.'
    ),
    a.validator.addMethod(
      'currency',
      function (a, b, c) {
        var d,
          e = 'string' == typeof c,
          f = e ? c : c[0],
          g = !!e || c[1];
        return (
          (f = f.replace(/,/g, '')),
          (f = g ? f + ']' : f + ']?'),
          (d =
            '^[' +
            f +
            '([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$'),
          (d = new RegExp(d)),
          this.optional(b) || d.test(a)
        );
      },
      'Please specify a valid currency.'
    ),
    a.validator.addMethod(
      'dateFA',
      function (a, b) {
        return (
          this.optional(b) ||
          /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(
            a
          )
        );
      },
      a.validator.messages.date
    ),
    a.validator.addMethod(
      'dateITA',
      function (a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = !1,
          i = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return (
          i.test(a)
            ? ((c = a.split('/')),
              (d = parseInt(c[0], 10)),
              (e = parseInt(c[1], 10)),
              (f = parseInt(c[2], 10)),
              (g = new Date(Date.UTC(f, e - 1, d, 12, 0, 0, 0))),
              (h =
                g.getUTCFullYear() === f &&
                g.getUTCMonth() === e - 1 &&
                g.getUTCDate() === d))
            : (h = !1),
          this.optional(b) || h
        );
      },
      a.validator.messages.date
    ),
    a.validator.addMethod(
      'dateNL',
      function (a, b) {
        return (
          this.optional(b) ||
          /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(
            a
          )
        );
      },
      a.validator.messages.date
    ),
    a.validator.addMethod(
      'extension',
      function (a, b, c) {
        return (
          (c = 'string' == typeof c ? c.replace(/,/g, '|') : 'png|jpe?g|gif'),
          this.optional(b) || a.match(new RegExp('\\.(' + c + ')$', 'i'))
        );
      },
      a.validator.format('Please enter a value with a valid extension.')
    ),
    a.validator.addMethod(
      'giroaccountNL',
      function (a, b) {
        return this.optional(b) || /^[0-9]{1,7}$/.test(a);
      },
      'Please specify a valid giro account number.'
    ),
    a.validator.addMethod(
      'greaterThan',
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not('.validate-greaterThan-blur').length &&
            e
              .addClass('validate-greaterThan-blur')
              .on('blur.validate-greaterThan', function () {
                a(c).valid();
              }),
          b > e.val()
        );
      },
      'Please enter a greater value.'
    ),
    a.validator.addMethod(
      'greaterThanEqual',
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not('.validate-greaterThanEqual-blur').length &&
            e
              .addClass('validate-greaterThanEqual-blur')
              .on('blur.validate-greaterThanEqual', function () {
                a(c).valid();
              }),
          b >= e.val()
        );
      },
      'Please enter a greater value.'
    ),
    a.validator.addMethod(
      'iban',
      function (a, b) {
        if (this.optional(b)) return !0;
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = a.replace(/ /g, '').toUpperCase(),
          m = '',
          n = !0,
          o = '',
          p = '',
          q = 5;
        if (l.length < q) return !1;
        if (
          ((c = l.substring(0, 2)),
          (h = {
            AL: '\\d{8}[\\dA-Z]{16}',
            AD: '\\d{8}[\\dA-Z]{12}',
            AT: '\\d{16}',
            AZ: '[\\dA-Z]{4}\\d{20}',
            BE: '\\d{12}',
            BH: '[A-Z]{4}[\\dA-Z]{14}',
            BA: '\\d{16}',
            BR: '\\d{23}[A-Z][\\dA-Z]',
            BG: '[A-Z]{4}\\d{6}[\\dA-Z]{8}',
            CR: '\\d{17}',
            HR: '\\d{17}',
            CY: '\\d{8}[\\dA-Z]{16}',
            CZ: '\\d{20}',
            DK: '\\d{14}',
            DO: '[A-Z]{4}\\d{20}',
            EE: '\\d{16}',
            FO: '\\d{14}',
            FI: '\\d{14}',
            FR: '\\d{10}[\\dA-Z]{11}\\d{2}',
            GE: '[\\dA-Z]{2}\\d{16}',
            DE: '\\d{18}',
            GI: '[A-Z]{4}[\\dA-Z]{15}',
            GR: '\\d{7}[\\dA-Z]{16}',
            GL: '\\d{14}',
            GT: '[\\dA-Z]{4}[\\dA-Z]{20}',
            HU: '\\d{24}',
            IS: '\\d{22}',
            IE: '[\\dA-Z]{4}\\d{14}',
            IL: '\\d{19}',
            IT: '[A-Z]\\d{10}[\\dA-Z]{12}',
            KZ: '\\d{3}[\\dA-Z]{13}',
            KW: '[A-Z]{4}[\\dA-Z]{22}',
            LV: '[A-Z]{4}[\\dA-Z]{13}',
            LB: '\\d{4}[\\dA-Z]{20}',
            LI: '\\d{5}[\\dA-Z]{12}',
            LT: '\\d{16}',
            LU: '\\d{3}[\\dA-Z]{13}',
            MK: '\\d{3}[\\dA-Z]{10}\\d{2}',
            MT: '[A-Z]{4}\\d{5}[\\dA-Z]{18}',
            MR: '\\d{23}',
            MU: '[A-Z]{4}\\d{19}[A-Z]{3}',
            MC: '\\d{10}[\\dA-Z]{11}\\d{2}',
            MD: '[\\dA-Z]{2}\\d{18}',
            ME: '\\d{18}',
            NL: '[A-Z]{4}\\d{10}',
            NO: '\\d{11}',
            PK: '[\\dA-Z]{4}\\d{16}',
            PS: '[\\dA-Z]{4}\\d{21}',
            PL: '\\d{24}',
            PT: '\\d{21}',
            RO: '[A-Z]{4}[\\dA-Z]{16}',
            SM: '[A-Z]\\d{10}[\\dA-Z]{12}',
            SA: '\\d{2}[\\dA-Z]{18}',
            RS: '\\d{18}',
            SK: '\\d{20}',
            SI: '\\d{15}',
            ES: '\\d{20}',
            SE: '\\d{20}',
            CH: '\\d{5}[\\dA-Z]{12}',
            TN: '\\d{20}',
            TR: '\\d{5}[\\dA-Z]{17}',
            AE: '\\d{3}\\d{16}',
            GB: '[A-Z]{4}\\d{14}',
            VG: '[\\dA-Z]{4}\\d{16}',
          }),
          (g = h[c]),
          'undefined' != typeof g &&
            ((i = new RegExp('^[A-Z]{2}\\d{2}' + g + '$', '')), !i.test(l)))
        )
          return !1;
        for (
          d = l.substring(4, l.length) + l.substring(0, 4), j = 0;
          j < d.length;
          j++
        )
          (e = d.charAt(j)),
            '0' !== e && (n = !1),
            n || (m += '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(e));
        for (k = 0; k < m.length; k++)
          (f = m.charAt(k)), (p = '' + o + f), (o = p % 97);
        return 1 === o;
      },
      'Please specify a valid IBAN.'
    ),
    a.validator.addMethod(
      'integer',
      function (a, b) {
        return this.optional(b) || /^-?\d+$/.test(a);
      },
      'A positive or negative non-decimal number please.'
    ),
    a.validator.addMethod(
      'ipv4',
      function (a, b) {
        return (
          this.optional(b) ||
          /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(
            a
          )
        );
      },
      'Please enter a valid IP v4 address.'
    ),
    a.validator.addMethod(
      'ipv6',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(
            a
          )
        );
      },
      'Please enter a valid IP v6 address.'
    ),
    a.validator.addMethod(
      'lessThan',
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not('.validate-lessThan-blur').length &&
            e
              .addClass('validate-lessThan-blur')
              .on('blur.validate-lessThan', function () {
                a(c).valid();
              }),
          b < e.val()
        );
      },
      'Please enter a lesser value.'
    ),
    a.validator.addMethod(
      'lessThanEqual',
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not('.validate-lessThanEqual-blur').length &&
            e
              .addClass('validate-lessThanEqual-blur')
              .on('blur.validate-lessThanEqual', function () {
                a(c).valid();
              }),
          b <= e.val()
        );
      },
      'Please enter a lesser value.'
    ),
    a.validator.addMethod(
      'lettersonly',
      function (a, b) {
        return this.optional(b) || /^[a-z]+$/i.test(a);
      },
      'Letters only please.'
    ),
    a.validator.addMethod(
      'letterswithbasicpunc',
      function (a, b) {
        return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a);
      },
      'Letters or punctuation only please.'
    ),
    a.validator.addMethod(
      'maxfiles',
      function (b, c, d) {
        return (
          !!this.optional(c) ||
          !('file' === a(c).attr('type') && c.files && c.files.length > d)
        );
      },
      a.validator.format('Please select no more than {0} files.')
    ),
    a.validator.addMethod(
      'maxsize',
      function (b, c, d) {
        if (this.optional(c)) return !0;
        if ('file' === a(c).attr('type') && c.files && c.files.length)
          for (var e = 0; e < c.files.length; e++)
            if (c.files[e].size > d) return !1;
        return !0;
      },
      a.validator.format('File size must not exceed {0} bytes each.')
    ),
    a.validator.addMethod(
      'maxsizetotal',
      function (b, c, d) {
        if (this.optional(c)) return !0;
        if ('file' === a(c).attr('type') && c.files && c.files.length)
          for (var e = 0, f = 0; f < c.files.length; f++)
            if (((e += c.files[f].size), e > d)) return !1;
        return !0;
      },
      a.validator.format('Total size of all files must not exceed {0} bytes.')
    ),
    a.validator.addMethod(
      'mobileNL',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(
            a
          )
        );
      },
      'Please specify a valid mobile number.'
    ),
    a.validator.addMethod(
      'mobileRU',
      function (a, b) {
        var c = a.replace(/\(|\)|\s+|-/g, '');
        return (
          this.optional(b) ||
          (c.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test(c))
        );
      },
      'Please specify a valid mobile number.'
    ),
    a.validator.addMethod(
      'mobileUK',
      function (a, b) {
        return (
          (a = a.replace(/\(|\)|\s+|-/g, '')),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/
              ))
        );
      },
      'Please specify a valid mobile number.'
    ),
    a.validator.addMethod(
      'netmask',
      function (a, b) {
        return (
          this.optional(b) ||
          /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(
            a
          )
        );
      },
      'Please enter a valid netmask.'
    ),
    a.validator.addMethod(
      'nieES',
      function (a, b) {
        'use strict';
        if (this.optional(b)) return !0;
        var c,
          d = new RegExp(
            /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi
          ),
          e = 'TRWAGMYFPDXBNJZSQVHLCKET',
          f = a.substr(a.length - 1).toUpperCase();
        return (
          (a = a.toString().toUpperCase()),
          !(a.length > 10 || a.length < 9 || !d.test(a)) &&
            ((a = a
              .replace(/^[X]/, '0')
              .replace(/^[Y]/, '1')
              .replace(/^[Z]/, '2')),
            (c = 9 === a.length ? a.substr(0, 8) : a.substr(0, 9)),
            e.charAt(parseInt(c, 10) % 23) === f)
        );
      },
      'Please specify a valid NIE number.'
    ),
    a.validator.addMethod(
      'nifES',
      function (a, b) {
        'use strict';
        return (
          !!this.optional(b) ||
          ((a = a.toUpperCase()),
          !!a.match(
            '((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)'
          ) &&
            (/^[0-9]{8}[A-Z]{1}$/.test(a)
              ? 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(a.substring(8, 0) % 23) ===
                a.charAt(8)
              : !!/^[KLM]{1}/.test(a) &&
                a[8] ===
                  'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(a.substring(8, 1) % 23)))
        );
      },
      'Please specify a valid NIF number.'
    ),
    a.validator.addMethod(
      'nipPL',
      function (a) {
        'use strict';
        if (((a = a.replace(/[^0-9]/g, '')), 10 !== a.length)) return !1;
        for (var b = [6, 5, 7, 2, 3, 4, 5, 6, 7], c = 0, d = 0; d < 9; d++)
          c += b[d] * a[d];
        var e = c % 11,
          f = 10 === e ? 0 : e;
        return f === parseInt(a[9], 10);
      },
      'Please specify a valid NIP number.'
    ),
    a.validator.addMethod(
      'nisBR',
      function (a) {
        var b,
          c,
          d,
          e,
          f,
          g = 0;
        if (
          ((a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, '')),
          11 !== a.length)
        )
          return !1;
        for (
          c = parseInt(a.substring(10, 11), 10),
            b = parseInt(a.substring(0, 10), 10),
            e = 2;
          e < 12;
          e++
        )
          (f = e),
            10 === e && (f = 2),
            11 === e && (f = 3),
            (g += (b % 10) * f),
            (b = parseInt(b / 10, 10));
        return (d = g % 11), (d = d > 1 ? 11 - d : 0), c === d;
      },
      'Please specify a valid NIS/PIS number.'
    ),
    a.validator.addMethod(
      'notEqualTo',
      function (b, c, d) {
        return (
          this.optional(c) || !a.validator.methods.equalTo.call(this, b, c, d)
        );
      },
      'Please enter a different value, values must not be the same.'
    ),
    a.validator.addMethod(
      'nowhitespace',
      function (a, b) {
        return this.optional(b) || /^\S+$/i.test(a);
      },
      'No white space please.'
    ),
    a.validator.addMethod(
      'pattern',
      function (a, b, c) {
        return (
          !!this.optional(b) ||
          ('string' == typeof c && (c = new RegExp('^(?:' + c + ')$')),
          c.test(a))
        );
      },
      'Invalid format.'
    ),
    a.validator.addMethod(
      'phoneNL',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(
            a
          )
        );
      },
      'Please specify a valid phone number.'
    ),
    a.validator.addMethod(
      'phonePL',
      function (a, b) {
        a = a.replace(/\s+/g, '');
        var c =
          /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;
        return this.optional(b) || c.test(a);
      },
      'Please specify a valid phone number.'
    ),
    a.validator.addMethod(
      'phonesUK',
      function (a, b) {
        return (
          (a = a.replace(/\(|\)|\s+|-/g, '')),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/
              ))
        );
      },
      'Please specify a valid uk phone number.'
    ),
    a.validator.addMethod(
      'phoneUK',
      function (a, b) {
        return (
          (a = a.replace(/\(|\)|\s+|-/g, '')),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/
              ))
        );
      },
      'Please specify a valid phone number.'
    ),
    a.validator.addMethod(
      'phoneUS',
      function (a, b) {
        return (
          (a = a.replace(/\s+/g, '')),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/
              ))
        );
      },
      'Please specify a valid phone number.'
    ),
    a.validator.addMethod(
      'postalcodeBR',
      function (a, b) {
        return (
          this.optional(b) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)
        );
      },
      'Informe um CEP válido.'
    ),
    a.validator.addMethod(
      'postalCodeCA',
      function (a, b) {
        return (
          this.optional(b) ||
          /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(
            a
          )
        );
      },
      'Please specify a valid postal code.'
    ),
    a.validator.addMethod(
      'postalcodeIT',
      function (a, b) {
        return this.optional(b) || /^\d{5}$/.test(a);
      },
      'Please specify a valid postal code.'
    ),
    a.validator.addMethod(
      'postalcodeNL',
      function (a, b) {
        return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a);
      },
      'Please specify a valid postal code.'
    ),
    a.validator.addMethod(
      'postcodeUK',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(
            a
          )
        );
      },
      'Please specify a valid UK postcode.'
    ),
    a.validator.addMethod(
      'require_from_group',
      function (b, c, d) {
        var e = a(d[1], c.form),
          f = e.eq(0),
          g = f.data('valid_req_grp')
            ? f.data('valid_req_grp')
            : a.extend({}, this),
          h =
            e.filter(function () {
              return g.elementValue(this);
            }).length >= d[0];
        return (
          f.data('valid_req_grp', g),
          a(c).data('being_validated') ||
            (e.data('being_validated', !0),
            e.each(function () {
              g.element(this);
            }),
            e.data('being_validated', !1)),
          h
        );
      },
      a.validator.format('Please fill at least {0} of these fields.')
    ),
    a.validator.addMethod(
      'skip_or_fill_minimum',
      function (b, c, d) {
        var e = a(d[1], c.form),
          f = e.eq(0),
          g = f.data('valid_skip') ? f.data('valid_skip') : a.extend({}, this),
          h = e.filter(function () {
            return g.elementValue(this);
          }).length,
          i = 0 === h || h >= d[0];
        return (
          f.data('valid_skip', g),
          a(c).data('being_validated') ||
            (e.data('being_validated', !0),
            e.each(function () {
              g.element(this);
            }),
            e.data('being_validated', !1)),
          i
        );
      },
      a.validator.format(
        'Please either skip these fields or fill at least {0} of them.'
      )
    ),
    a.validator.addMethod(
      'stateUS',
      function (a, b, c) {
        var d,
          e = 'undefined' == typeof c,
          f = !e && 'undefined' != typeof c.caseSensitive && c.caseSensitive,
          g =
            !e &&
            'undefined' != typeof c.includeTerritories &&
            c.includeTerritories,
          h =
            !e && 'undefined' != typeof c.includeMilitary && c.includeMilitary;
        return (
          (d =
            g || h
              ? g && h
                ? '^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$'
                : g
                ? '^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$'
                : '^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$'
              : '^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$'),
          (d = f ? new RegExp(d) : new RegExp(d, 'i')),
          this.optional(b) || d.test(a)
        );
      },
      'Please specify a valid state.'
    ),
    a.validator.addMethod(
      'strippedminlength',
      function (b, c, d) {
        return a(b).text().length >= d;
      },
      a.validator.format('Please enter at least {0} characters.')
    ),
    a.validator.addMethod(
      'time',
      function (a, b) {
        return (
          this.optional(b) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)
        );
      },
      'Please enter a valid time, between 00:00 and 23:59.'
    ),
    a.validator.addMethod(
      'time12h',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)
        );
      },
      'Please enter a valid time in 12-hour am/pm format.'
    ),
    a.validator.addMethod(
      'url2',
      function (a, b) {
        return (
          this.optional(b) ||
          /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?)|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff])|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62}\.)))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
            a
          )
        );
      },
      a.validator.messages.url
    ),
    a.validator.addMethod(
      'vinUS',
      function (a) {
        if (17 !== a.length) return !1;
        var b,
          c,
          d,
          e,
          f,
          g,
          h = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'J',
            'K',
            'L',
            'M',
            'N',
            'P',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
          ],
          i = [
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9,
          ],
          j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
          k = 0;
        for (b = 0; b < 17; b++) {
          if (
            ((e = j[b]), (d = a.slice(b, b + 1)), 8 === b && (g = d), isNaN(d))
          ) {
            for (c = 0; c < h.length; c++)
              if (d.toUpperCase() === h[c]) {
                (d = i[c]), (d *= e), isNaN(g) && 8 === c && (g = h[c]);
                break;
              }
          } else d *= e;
          k += d;
        }
        return (f = k % 11), 10 === f && (f = 'X'), f === g;
      },
      'The specified vehicle identification number (VIN) is invalid.'
    ),
    a.validator.addMethod(
      'zipcodeUS',
      function (a, b) {
        return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a);
      },
      'The specified US ZIP Code is invalid.'
    ),
    a.validator.addMethod(
      'ziprange',
      function (a, b) {
        return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a);
      },
      'Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx.'
    ),
    a
  );
});

function jobsAjaxFiltering() {
  $('.filters.job')
    .find('input')
    .on('click', function () {
      var $key = $(this).data('key');
      var $value = $(this).val();
      var $data = {
        action: 'jobs_ajax_filtering',
        url: window.location.href,
      };
      // console.log($(this).val());
      // console.log($(this).closest('.filter-input-li').hasClass('active'));
      $('.job-category-filters')
        .find('input')
        .each(function () {
          if ($(this).closest('.filter-input-li').hasClass('active')) {
            var $filtersKey = $(this).data('key');
            var $filtersValue = $(this).val();
            if (Array.isArray($data['"' + $filtersKey + '"'])) {
              $data['"' + $filtersKey + '"'].push($filtersValue);
            } else {
              $data['"' + $filtersKey + '"'] = [$filtersValue];
            }
          }
        });

      if ($(this).closest('.filter-input-li').hasClass('active')) {
        var $index = $data['"' + $key + '"'].indexOf($value);
        if ($index > -1) {
          $data['"' + $key + '"'].splice($index, 1);
        }
        $(this)
          .closest('.filter-input-li')
          .find('.filter-input-li.active')
          .find('input')
          .each(function () {
            var $dataKey = $(this).data('key');
            var $dataValue = $(this).val();
            var $index = $data['"' + $dataKey + '"'].indexOf($dataValue);

            if ($index > -1) {
              $data['"' + $dataKey + '"'].splice($index, 1);
            }
          });

        $(this)
          .closest('.filter-input-li')
          .find('.filter-input-li.active')
          .removeClass('active');
        $(this).closest('.filter-input-li').removeClass('active');
      } else {
        $(this).closest('.filter-input-li').addClass('active');
        if (Array.isArray($data['"' + $key + '"'])) {
          $data['"' + $key + '"'].push($value);
        } else {
          $data['"' + $key + '"'] = [$value];
        }
      }

      var $dataCopy = {};
      for (var [key, value] of Object.entries($data)) {
        if (key !== 'action' && key !== 'url') {
          $dataCopy[key] = value;
        }
      }

      var $cURL = $data.url;

      var recursiveEncoded = $.param($dataCopy);
      var url = new URL($cURL);
      url.search = recursiveEncoded;
      var params = recursiveEncoded
        .toString()
        .replace(/"/g, '')
        .replace(/%22/g, '');
      var new_url = url.toString().replace(/"/g, '').replace(/%22/g, '');
      window.history.replaceState({}, '', new_url);

      var $current = window.location;
      var $currentObj = parseParams($current.search);
      console.log($currentObj);

      $data['params'] = params;

      console.log($data);

      $.ajax({
        type: 'POST',
        url: '/wp-admin/admin-ajax.php',
        dataType: 'json',
        data: $data,
        success: function (res) {
          $('#jobs__list-cont').html(res.html);
        },
        error: function (err) {
          console.error(err);
        },
      });

      return false;
    });
}

function postsAjaxFiltering() {
  $('.filters.post')
    .find('ul')
    .find('li')
    .find('a, input')
    .on('click', function () {
      //var $current = window.location.search;
      //var $currentObj = parseParams($current.search);

      var $key = $(this).data('key');
      var $value = $(this).data('value');
      var $data = {
        action: 'post_ajax_filtering',
        url: window.location.href,
      };

      $('.job-category-filters')
        .find('*[data-key]')
        .each(function () {
          if ($(this).parent().parent('li').hasClass('active')) {
            var $filtersKey = $(this).data('key');
            var $filtersValue = $(this).data('value');
            if (Array.isArray($data['"' + $filtersKey + '"'])) {
              $data['"' + $filtersKey + '"'].push($filtersValue);
            } else {
              $data['"' + $filtersKey + '"'] = [$filtersValue];
            }
          }
        });

      if ($(this).parent().parent('li').hasClass('active')) {
        var $index = $data['"' + $key + '"'].indexOf($value);
        if ($index > -1) {
          $data['"' + $key + '"'].splice($index, 1);
        }
        $(this).parent().parent('li').removeClass('active');
      } else {
        $(this).parent().parent('li').addClass('active');

        if (Array.isArray($data['"' + $key + '"'])) {
          $data['"' + $key + '"'].push($value);
        } else {
          $data['"' + $key + '"'] = [$value];
        }
      }

      var $dataCopy = {};
      for (var [key, value] of Object.entries($data)) {
        if (key !== 'action' && key !== 'url') {
          $dataCopy[key] = value;
        }
      }

      var $cURL = $data.url;

      var recursiveEncoded = $.param($dataCopy);
      var url = new URL($cURL);
      url.search = recursiveEncoded;
      // var params = recursiveEncoded
      //   .toString()
      //   .replace(/"/g, '')
      //   .replace(/%22/g, '');
      var new_url = url.toString().replace(/"/g, '').replace(/%22/g, '');
      //window.history.replaceState({}, '', new_url);
      window.location.href = new_url;
      //$data['params'] = params;
      // $.ajax({
      //   type: 'POST',
      //   url: '/wp-admin/admin-ajax.php',
      //   dataType: 'json',
      //   data: $data,
      //   success: function (res) {
      //     $('#jobs__list-cont').html(res.html);
      //   },
      //   error: function (err) {
      //     console.error(err);
      //   },
      // });

      return false;
    });
}

function acceptCookies() {
  setCookie('cookies-accepted', 'accepted', 365);
  closeCookies();
}

function closeCookies() {
  $('.cookies-notifictaion').addClass('d-none');
}

/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(c,d){return function(){return d!==b&&a.fn.datepicker.deprecated(d),this[c].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;c<d;c++)if(0<=this[c].valueOf()-b&&this[c].valueOf()-b<864e5)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a.data(b,"datepicker",this),this._events=[],this._secondaryEvents=[],this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return Number(b)+1}),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(b){return a.each(r.viewModes,function(c,d){if(b===c||-1!==a.inArray(b,d.names))return b=c,!1}),b},_resolveDaysOfWeek:function(b){return a.isArray(b)||(b=b.split(/[,\s]*/)),a.map(b,Number)},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;return a(c).length>0}catch(a){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView),e.minViewMode=this._resolveViewName(e.minViewMode),e.maxViewMode=this._resolveViewName(e.maxViewMode),e.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,e.startView)),!0!==e.multidate&&(e.multidate=Number(e.multidate)||!1,!1!==e.multidate&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-1/0&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-1/0),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=this._resolveDaysOfWeek(e.daysOfWeekDisabled||[]),e.daysOfWeekHighlighted=this._resolveDaysOfWeek(e.daysOfWeekHighlighted||[]),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=e.datesDisabled.split(",")),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate instanceof Date||"string"==typeof e.defaultViewDate)e.defaultViewDate=r.parseDate(e.defaultViewDate,g,e.language,e.assumeNearbyYear);else if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};!0===this.o.showOnFocus&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.inputField.length?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[this.picker,".prev, .next",{click:a.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:a.proxy(this.dayCellClick,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,viewMode:this.viewMode,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){if(!(this.inputField.is(":disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){if(!a)return a;var b=new Date(a.getTime()+6e4*a.getTimezoneOffset());return b.getTimezoneOffset()!==a.getTimezoneOffset()&&(b=new Date(a.getTime()+6e4*b.getTimezoneOffset())),b},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&c(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return a!==b?new Date(a):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,a.map(b,this._utc_to_local)),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){return this._process_options({datesDisabled:a}),this.update(),this},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=a(this.o.container),e=d.width(),f="body"===this.o.container?a(document).scrollTop():d.scrollTop(),g=d.offset(),h=[0];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==Number(b)&&h.push(Number(b))});var i=Math.max.apply(Math,h)+this.o.zIndexOffset,j=this.component?this.component.parent().offset():this.element.offset(),k=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),l=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),m=j.left-g.left,n=j.top-g.top;"body"!==this.o.container&&(n+=f),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(m-=b-l)):j.left<0?(this.picker.addClass("datepicker-orient-left"),m-=j.left-10):m+b>e?(this.picker.addClass("datepicker-orient-right"),m+=l-b):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var o,p=this.o.orientation.y;if("auto"===p&&(o=-f+n-c,p=o<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+p),"top"===p?n-=c+parseInt(this.picker.css("padding-top")):n+=k,this.o.rtl){var q=e-(m+l);this.picker.css({top:n,right:q,zIndex:i})}else this.picker.css({top:n,left:m,zIndex:i});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),d?(this.setValue(),this.element.change()):this.dates.length&&String(b)!==String(this.dates)&&d&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&b.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',-1!==a.inArray(b,this.o.daysOfWeekDisabled)&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)}},fillMonths:function(){for(var a,b=this._utc_to_local(this.viewDate),c="",d=0;d<12;d++)a=b&&b.getMonth()===d?" focused":"",c+='<span class="month'+a+'">'+q[this.o.language].monthsShort[d]+"</span>";this.picker.find(".datepicker-months td").html(c)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],f=this.viewDate.getUTCFullYear(),g=this.viewDate.getUTCMonth(),h=d();return b.getUTCFullYear()<f||b.getUTCFullYear()===f&&b.getUTCMonth()<g?c.push("old"):(b.getUTCFullYear()>f||b.getUTCFullYear()===f&&b.getUTCMonth()>g)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&e(b,h)&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i){for(var j,k,l,m="",n=e/10,o=this.picker.find(c),p=Math.floor(f/e)*e,q=p+9*n,r=Math.floor(this.viewDate.getFullYear()/n)*n,s=a.map(this.dates,function(a){return Math.floor(a.getUTCFullYear()/n)*n}),t=p-n;t<=q+n;t+=n)j=[d],k=null,t===p-n?j.push("old"):t===q+n&&j.push("new"),-1!==a.inArray(t,s)&&j.push("active"),(t<g||t>h)&&j.push("disabled"),t===r&&j.push("focused"),i!==a.noop&&(l=i(new Date(t,0,1)),l===b?l={}:"boolean"==typeof l?l={enabled:l}:"string"==typeof l&&(l={classes:l}),!1===l.enabled&&j.push("disabled"),l.classes&&(j=j.concat(l.classes.split(/\s+/))),l.tooltip&&(k=l.tooltip)),m+='<span class="'+j.join(" ")+'"'+(k?' title="'+k+'"':"")+">"+t+"</span>";o.find(".datepicker-switch").text(p+"-"+q),o.find("td").html(m)},fill:function(){var e,f,g=new Date(this.viewDate),h=g.getUTCFullYear(),i=g.getUTCMonth(),j=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,k=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,m=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,n=q[this.o.language].today||q.en.today||"",o=q[this.o.language].clear||q.en.clear||"",p=q[this.o.language].titleFormat||q.en.titleFormat,s=d(),t=(!0===this.o.todayBtn||"linked"===this.o.todayBtn)&&s>=this.o.startDate&&s<=this.o.endDate&&!this.weekOfDateIsDisabled(s);if(!isNaN(h)&&!isNaN(i)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(g,p,this.o.language)),this.picker.find("tfoot .today").text(n).css("display",t?"table-cell":"none"),this.picker.find("tfoot .clear").text(o).css("display",!0===this.o.clearBtn?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var u=c(h,i,0),v=u.getUTCDate();u.setUTCDate(v-(u.getUTCDay()-this.o.weekStart+7)%7);var w=new Date(u);u.getUTCFullYear()<100&&w.setUTCFullYear(u.getUTCFullYear()),w.setUTCDate(w.getUTCDate()+42),w=w.valueOf();for(var x,y,z=[];u.valueOf()<w;){if((x=u.getUTCDay())===this.o.weekStart&&(z.push("<tr>"),this.o.calendarWeeks)){var A=new Date(+u+(this.o.weekStart-x-7)%7*864e5),B=new Date(Number(A)+(11-A.getUTCDay())%7*864e5),C=new Date(Number(C=c(B.getUTCFullYear(),0,1))+(11-C.getUTCDay())%7*864e5),D=(B-C)/864e5/7+1;z.push('<td class="cw">'+D+"</td>")}y=this.getClassNames(u),y.push("day");var E=u.getUTCDate();this.o.beforeShowDay!==a.noop&&(f=this.o.beforeShowDay(this._utc_to_local(u)),f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1===f.enabled&&y.push("disabled"),f.classes&&(y=y.concat(f.classes.split(/\s+/))),f.tooltip&&(e=f.tooltip),f.content&&(E=f.content)),y=a.isFunction(a.uniqueSort)?a.uniqueSort(y):a.unique(y),z.push('<td class="'+y.join(" ")+'"'+(e?' title="'+e+'"':"")+' data-date="'+u.getTime().toString()+'">'+E+"</td>"),e=null,x===this.o.weekEnd&&z.push("</tr>"),u.setUTCDate(u.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(z.join(""));var F=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",G=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?F:h).end().find("tbody span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===h&&G.eq(b.getUTCMonth()).addClass("active")}),(h<j||h>l)&&G.addClass("disabled"),h===j&&G.slice(0,k).addClass("disabled"),h===l&&G.slice(m+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var H=this;a.each(G,function(c,d){var e=new Date(h,c,1),f=H.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1!==f.enabled||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,h,j,l,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,h,j,l,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,h,j,l,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a,b,c=new Date(this.viewDate),d=c.getUTCFullYear(),e=c.getUTCMonth(),f=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,g=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,h=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,i=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,j=1;switch(this.viewMode){case 4:j*=10;case 3:j*=10;case 2:j*=10;case 1:a=Math.floor(d/j)*j<=f,b=Math.floor(d/j)*j+j>h;break;case 0:a=d<=f&&e<=g,b=d>=h&&e>=i}this.picker.find(".prev").toggleClass("disabled",a),this.picker.find(".next").toggleClass("disabled",b)}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h;e=a(b.target),e.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),e.hasClass("today")&&!e.hasClass("day")&&(this.setViewMode(0),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("month")||e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),f=1,1===this.viewMode?(h=e.parent().find("span").index(e),g=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(h)):(h=0,g=Number(e.text()),this.viewDate.setUTCFullYear(g)),this._trigger(r.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(c(g,h,f)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(b){var c=a(b.currentTarget),d=c.data("date"),e=new Date(d);this.o.updateViewDate&&(e.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),e.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(e)},navArrowsClick:function(b){var c=a(b.currentTarget),d=c.hasClass("prev")?-1:1;0!==this.viewMode&&(d*=12*r.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,d),this._trigger(r.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(!0===this.o.multidate||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):!1===this.o.multidate?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),(!b&&this.o.updateViewDate||"view"===b)&&(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),c=(c+12)%12;else{for(var j=0;j<i;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(40!==a.keyCode&&27!==a.keyCode||(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"))&&this._trigger("changeYear",this.viewDate):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(a){this.viewMode=a,this.picker.children("div").hide().filter(".datepicker-"+r.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var l=function(b,c){a.data(b,"datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,this.keepEmptyValues=c.keepEmptyValues,delete c.keepEmptyValues,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a.data(b,"datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},clearDates:function(){a.each(this.pickers,function(a,b){b.clearDates()})},dateUpdated:function(c){if(!this.updating){this.updating=!0;var d=a.data(c.target,"datepicker");if(d!==b){var e=d.getUTCDate(),f=this.keepEmptyValues,g=a.inArray(c.target,this.inputs),h=g-1,i=g+1,j=this.inputs.length;if(-1!==g){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b!==d&&f||b.setUTCDate(e)}),e<this.dates[h])for(;h>=0&&e<this.dates[h];)this.pickers[h--].setUTCDate(e);else if(e>this.dates[i])for(;i<j&&e>this.dates[i];)this.pickers[i++].setUTCDate(e);this.updateDates(),delete this.updating}}}},destroy:function(){a.map(this.pickers,function(a){a.destroy()}),a(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,e,f,g){function h(a,b){return!0===b&&(b=10),a<100&&(a+=2e3)>(new Date).getFullYear()+b&&(a-=100),a}function i(){var a=this.slice(0,j[n].length),b=j[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!c)return b;if(c instanceof Date)return c;if("string"==typeof e&&(e=r.parseFormat(e)),e.toValue)return e.toValue(c,e,f);var j,l,m,n,o,p={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},s={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(c in s&&(c=s[c]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)){for(j=c.match(/([\-+]\d+)([dmwy])/gi),c=new Date,n=0;n<j.length;n++)l=j[n].match(/([\-+]\d+)([dmwy])/i),m=Number(l[1]),o=p[l[2].toLowerCase()],c=k.prototype[o](c,m);return k.prototype._zero_utc_time(c)}j=c&&c.match(this.nonpunctuation)||[];var t,u,v={},w=["yyyy","yy","M","MM","m","mm","d","dd"],x={yyyy:function(a,b){return a.setUTCFullYear(g?h(b,g):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;b<0;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};x.yy=x.yyyy,x.M=x.MM=x.mm=x.m,x.dd=x.d,c=d();var y=e.parts.slice();if(j.length!==y.length&&(y=a(y).filter(function(b,c){return-1!==a.inArray(c,w)}).toArray()),j.length===y.length){var z;for(n=0,z=y.length;n<z;n++){if(t=parseInt(j[n],10),l=y[n],isNaN(t))switch(l){case"MM":u=a(q[f].months).filter(i),t=a.inArray(u[0],q[f].months)+1;break;case"M":u=a(q[f].monthsShort).filter(i),t=a.inArray(u[0],q[f].monthsShort)+1}v[l]=t}var A,B;for(n=0;n<w.length;n++)(B=w[n])in v&&!isNaN(v[B])&&(A=new Date(c),x[B](A,v[B]),isNaN(A)||(c=A))}return c},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;g<=h;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},
headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+o.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+o.templates.rightArrow+"</th></tr></thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.9.0",a.fn.datepicker.deprecated=function(a){var b=window.console;b&&b.warn&&b.warn("DEPRECATED: "+a)},a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});
function knowledgeFilterToggle() {
  $('.knowledge__filters')
    .find('.card')
    .on('click', function () {
      if (
        $(window).width() <= 991 &&
        $('.knowledge__filters').hasClass('not-opened')
      ) {
        $('.knowledge__filters').removeClass('not-opened');
      }
    });

  $('.knowledge__filters')
    .find('.closethis')
    .on('click', function () {
      if ($(window).width() <= 991) {
        $('.knowledge__filters').addClass('not-opened');
      }
    });
}

function jobsFilterToggle() {
  $('.jobs__list-filters')
    .find('.card')
    .on('click', function (e) {
      if (
        $(window).width() <= 991 &&
        $('.jobs__list-filters').hasClass('not-opened')
      ) {
        $('.jobs__list-filters').removeClass('not-opened');
      }
    });

  $('.jobs__list-filters')
    .find('.closethis')
    .on('click', function () {
      if ($(window).width() <= 991) {
        $('.jobs__list-filters').addClass('not-opened');
      }
    });
}
function filterSelect() {
  $('#filter')
    .find('.filters')
    .find('li')
    .find('input')
    .on('change', function () {
      if ($(this).parent().parent().hasClass('active')) {
        $(this).parent().parent().removeClass('active');
        $(this)
          .parent()
          .next()
          .find('li')
          .removeClass('active')
          .find('input')
          .prop('checked', false);
      } else {
        $(this).parent().parent().addClass('active');
      }
      // var top = $(document).scrollTop();
      // setCookie("topScroll", top, 0.04);
      // setTimeout(function () {
      //   $('#main-jobs-filter-form, #main-posts-filter-form').submit();
      // }, 250);
    });
  $('#filter')
    .find('.filter-title')
    .on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').parent().removeClass('active');
        $(this)
          .next('.filters')
          .find('li')
          .find('input')
          .prop('checked', false)
          .parent()
          .parent()
          .removeClass('active');
      } else {
        $(this).addClass('active').parent().addClass('active');
      }
    });
}
function quickFilters() {
  $('.header__jobs-cats')
    .find('a')
    .on('click', function (e) {
      e.preventDefault();
      var $form = $('#main-jobs-filter-form');
      switch ($(this).attr('href')) {
        case '#it':
          var $input = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="it"]');
          var $children = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="it"]')
            .parent()
            .next('ul')
            .find('input');
          if ($input) {
            $input.prop('checked', !$input.prop('checked'));
            if ($children) {
              $children.prop('checked', false);
            }
            $form.submit();
          }
          break;
        case '#sales':
          var $input = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="sales"]');
          var $children = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="sales"]')
            .parent()
            .next('ul')
            .find('input');
          if ($input) {
            $input.prop('checked', !$input.prop('checked'));
            if ($children) {
              $children.prop('checked', false);
            }
            $form.submit();
          }
          break;
        case '#marketing':
          var $input = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="marketing"]');
          var $children = $('.jobs__list-filters')
            .find('.job-category-filters')
            .find('li')
            .find('input[data-name="marketing"]')
            .parent()
            .next('ul')
            .find('input');
          if ($input) {
            $input.prop('checked', !$input.prop('checked'));
            if ($children) {
              $children.prop('checked', false);
            }
            $form.submit();
          }
          break;
        case '#executive':
          var $input = $('.jobs__list-filters')
            .find('.job-salary-filters')
            .find('input[name="salary_min"]');
          if ($input) {
            if ($input.val() != 70000) {
              $input.val(70000);
            } else {
              $input.val(0);
            }
            $form.submit();
          }
          break;
        case '#freelance':
          var $input = $('.jobs__list-filters')
            .find('.job-type-filters')
            .find('li')
            .find(
              'input[data-name="freelance"], input[data-name="freelance-interim-contractor"]'
            );
          if ($input) {
            $input.prop('checked', !$input.prop('checked'));
            $form.submit();
          }
          break;
      }
    });

  $('.jobs__list-filters')
    .find('li.active')
    .each(function () {
      if ($(this).find('input[data-name="it"]').is(':checked')) {
        $('.header__jobs-cats').find('a[href="#it"]').addClass('active');
      }
      if ($(this).find('input[data-name="sales"]').is(':checked')) {
        $('.header__jobs-cats').find('a[href="#sales"]').addClass('active');
      }
      if ($(this).find('input[data-name="freelance"]').is(':checked')) {
        $('.header__jobs-cats').find('a[href="#freelance"]').addClass('active');
      }
    });

  if (
    $('.jobs__list-filters')
      .find('.job-salary-filters')
      .find('input[name="salary_min"]')
      .val() == 80000
  ) {
    $('.header__jobs-cats').find('a[href="#executive"]').addClass('active');
  }
}

/*
infiniteslide.js v2
version: 2.0.1
Author: T.Morimoto

Copyright 2017, T.Morimoto
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php

https://github.com/woodroots/infiniteslidev2
*/

(function($){
	$(window).on('load', function() {
	    window.loaded = true;
	});
	$(function(){
		$.fn.infiniteslide = function(options){
			//option
			var settings = $.extend({
				'speed': 100, //速さ　単位はpx/秒です。
				'direction': 'left', //up/down/left/rightから選択
				'pauseonhover': true, //マウスオーバーでストップ
				'responsive': false, //子要素の幅を%で指定しているとき
				'clone': 1
			},options);
			
			var setCss = function(obj,direction){
				$(obj).wrap('<div class="infiniteslide_wrap"></div>').parent().css({
					overflow: 'hidden'
				});

				if(direction == 'up' || direction == 'down'){
					var d = 'column';
				} else {
					var d = 'row';
				}
								
				$(obj).css({
					display: 'flex',
					flexWrap: 'nowrap',
					alignItems: 'center',
					'-ms-flex-align': 'center',
					flexDirection: d
				}).children().css({
						flex: 'none',
						display: 'block'
					});
			}
			
			var setClone = function(obj,clone){
				var $clone = $(obj).children().clone(true).addClass('infiniteslide_clone');
				i = 1;
				while(i <= clone){
					$clone.clone(true).appendTo($(obj));
					i++;
				}
			}
			
			var getWidth = function(obj){
				w = 0;
				$(obj).children(':not(.infiniteslide_clone)').each(function(key,value){
					w = w + $(this).outerWidth(true);
				});
				return w;
			}
			var getHeight = function(obj){
				h = 0;
				$(obj).children(':not(.infiniteslide_clone)').each(function(key,value){
					h = h + $(this).outerHeight(true);
				});
				return h;
			}

			
			var getSpeed = function(l,s){
				return l / s;
			}
			var getNum = function(obj,direction){
				if(direction == 'up' || direction == 'down'){
					var num = getHeight(obj);
				} else {
					var num = getWidth(obj);
				}
				return num;
			}
			
			var getTranslate = function(num,direction){
				if(direction == 'up' || direction == 'down'){
					var i = '0,-' + num + 'px,0';
				} else {
					var i = '-' + num + 'px,0,0';
				}
				return i;
			}
			
			var setAnim = function(obj,id,direction,speed){
				var num = getNum(obj,direction);
				if(direction == 'up' || direction == 'down'){
					$(obj).parent('.infiniteslide_wrap').css({
						height: num + 'px'
					});
				}
				var i = getTranslate(num,direction);
				
				$(obj).attr('data-style','infiniteslide' + id);

				var css = '@keyframes infiniteslide' + id + '{' + 
								'from {transform:translate3d(0,0,0);}' + 
								'to {transform:translate3d(' + i + ');}' + 
							'}';
				$('<style />').attr('id','infiniteslide' + id + '_style')
				.html(css)
				.appendTo('head');
				
				if(direction == 'right' || direction == 'down'){
					var reverse = ' reverse';
				} else {
					var reverse = '';
				}
				
				$(obj).css({
					animation: 'infiniteslide' + id + ' ' + getSpeed(num,speed) + 's linear 0s infinite' + reverse
				});
			}
			var setStop = function(obj){
				$(obj).on('mouseenter',function(){
					$(this).css({
						animationPlayState: 'paused'
					});
				}).on('mouseleave',function(){
					$(this).css({
						animationPlayState: 'running'
					});
				});
			}
			
			var setResponsive = function(obj,direction){
					var num = getNum(obj,direction);
					var i = getTranslate(num,direction);
					return i;
				};
			
			
			
		
			return this.each(function(key,value){
				var $this = $(this);
				var num = Date.now() + Math.floor(10000*Math.random()).toString(16);
				if(settings.pauseonhover == true){
					setStop($this);
				}
				var _onload = function(){
					setCss($this,settings.direction);
					setClone($this,settings.clone);
					setAnim($this,num,settings.direction,settings.speed);
					
					if(settings.responsive){
						$(window).on('resize',function(){
							var i = setResponsive($this,settings.direction);
							var styleid = $this.attr('data-style');
							var stylehtml = $('#' + styleid + '_style').html();
							
							var stylehtml_new = stylehtml.replace(/to {transform:translate3d\((.*?)\)/,'to {transform:translate3d(' + i + ')');
							$('#' + styleid + '_style').html(stylehtml_new);

						});
					}
				};

				if (window.loaded) {
					_onload();
				} else {
					$(window).on('load', _onload);
				}
			});
			
		}
	});
})(jQuery);
/**
 * Display a nice easy to use multiselect list
 * @Version: 2.4.22
 * @Author: Patrick Springstubbe
 * @Contact: @JediNobleclem
 * @Website: springstubbe.us
 * @Source: https://github.com/nobleclem/jQuery-MultiSelect
 *
 * Usage:
 *     $('select[multiple]').multiselect();
 *     $('select[multiple]').multiselect({ texts: { placeholder: 'Select options' } });
 *     $('select[multiple]').multiselect('reload');
 *     $('select[multiple]').multiselect( 'loadOptions', [{
 *         name   : 'Option Name 1',
 *         value  : 'option-value-1',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     },{
 *         name   : 'Option Name 2',
 *         value  : 'option-value-2',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     }]);
 *
 **/
(function ($) {
  var defaults = {
    columns: 1, // how many columns should be use to show options
    search: false, // include option search box

    // search filter options
    searchOptions: {
      delay: 250, // time (in ms) between keystrokes until search happens
      showOptGroups: false, // show option group titles if no options remaining
      searchText: true, // search within the text
      searchValue: false, // search within the value
      onSearch: function (element) {}, // fires on keyup before search on options happens
    },

    // plugin texts
    texts: {
      placeholder: 'Select options', // text to use in dummy input
      search: 'Search', // search input placeholder text
      searchNoResult: 'No results', // search results not found text
      selectedOptions: ' selected', // selected suffix text
      selectAll: 'Select all', // select all text
      unselectAll: 'Unselect all', // unselect all text
      noneSelected: 'None Selected', // None selected text
    },

    // general options
    selectAll: false, // add select all option
    selectGroup: false, // select entire optgroup
    minHeight: 200, // minimum height of option overlay
    maxHeight: null, // maximum height of option overlay
    maxWidth: null, // maximum width of option overlay (or selector)
    maxPlaceholderWidth: null, // maximum width of placeholder button
    maxPlaceholderOpts: 10, // maximum number of placeholder options to show until "# selected" shown instead
    showCheckbox: true, // display the checkbox to the user
    checkboxAutoFit: false, // auto calc checkbox padding
    optionAttributes: [], // attributes to copy to the checkbox from the option element
    replacePlaceholderText: true, // replace text of placeholder if button is too small

    // Callbacks
    onLoad: function (element) {}, // fires at end of list initialization
    onOptionClick: function (element, option) {}, // fires when an option is clicked
    onControlOpen: function (element) {}, // fires when the options list is opened
    onControlClose: function (element) {}, // fires when the options list is closed
    onSelectAll: function (element, selected) {}, // fires when (un)select all is clicked
    onPlaceholder: function (element, placeholder, selectedOpts) {}, // fires when the placeholder txt is updated
  };

  var msCounter = 1; // counter for each select list
  var msOptCounter = 1; // counter for each option on page

  // FOR LEGACY BROWSERS (talking to you IE8)
  if (typeof Array.prototype.map !== 'function') {
    Array.prototype.map = function (callback, thisArg) {
      if (typeof thisArg === 'undefined') {
        thisArg = this;
      }

      return $.isArray(thisArg) ? $.map(thisArg, callback) : [];
    };
  }
  if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, '');
    };
  }

  function MultiSelect(element, options) {
    this.element = element;
    this.options = $.extend(true, {}, defaults, options);
    this.updateSelectAll = true;
    this.updatePlaceholder = true;
    this.listNumber = msCounter;

    msCounter = msCounter + 1; // increment counter

    /* Make sure its a multiselect list */
    if (!$(this.element).attr('multiple')) {
      throw new Error(
        '[jQuery-MultiSelect] Select list must be a multiselect list in order to use this plugin'
      );
    }

    /* Options validation checks */
    if (this.options.search) {
      if (
        !this.options.searchOptions.searchText &&
        !this.options.searchOptions.searchValue
      ) {
        throw new Error(
          '[jQuery-MultiSelect] Either searchText or searchValue should be true.'
        );
      }
    }

    /** BACKWARDS COMPATIBILITY **/
    if ('placeholder' in this.options) {
      this.options.texts.placeholder = this.options.placeholder;
      delete this.options.placeholder;
    }
    if ('default' in this.options.searchOptions) {
      this.options.texts.search = this.options.searchOptions['default'];
      delete this.options.searchOptions['default'];
    }
    /** END BACKWARDS COMPATIBILITY **/

    // load this instance
    this.load();
  }

  MultiSelect.prototype = {
    /* LOAD CUSTOM MULTISELECT DOM/ACTIONS */
    load: function () {
      var instance = this;

      // make sure this is a select list and not loaded
      if (
        instance.element.nodeName != 'SELECT' ||
        $(instance.element).hasClass('jqmsLoaded')
      ) {
        return true;
      }

      // sanity check so we don't double load on a select element
      $(instance.element)
        .addClass('jqmsLoaded ms-list-' + instance.listNumber)
        .data('plugin_multiselect-instance', instance);

      // add option container
      $(instance.element).after(
        '<div id="ms-list-' +
          instance.listNumber +
          '" class="ms-options-wrap"><button type="button"><span>None Selected</span></button><div class="ms-options"><ul></ul></div></div>'
      );

      var placeholder = $(instance.element)
        .siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap')
        .find('> button:first-child');
      var optionsWrap = $(instance.element)
        .siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap')
        .find('> .ms-options');
      var optionsList = optionsWrap.find('> ul');

      // don't show checkbox (add class for css to hide checkboxes)
      if (!instance.options.showCheckbox) {
        optionsWrap.addClass('hide-checkbox');
      } else if (instance.options.checkboxAutoFit) {
        optionsWrap.addClass('checkbox-autofit');
      }

      // check if list is disabled
      if ($(instance.element).prop('disabled')) {
        placeholder.prop('disabled', true);
      }

      // set placeholder maxWidth
      if (instance.options.maxPlaceholderWidth) {
        placeholder.css('maxWidth', instance.options.maxPlaceholderWidth);
      }

      // override with user defined maxHeight
      if (instance.options.maxHeight) {
        var maxHeight = instance.options.maxHeight;
      } else {
        // cacl default maxHeight
        var maxHeight =
          $(window).height() -
          optionsWrap.offset().top +
          $(window).scrollTop() -
          20;
      }

      // maxHeight cannot be less than options.minHeight
      maxHeight =
        maxHeight < instance.options.minHeight
          ? instance.options.minHeight
          : maxHeight;

      optionsWrap.css({
        maxWidth: instance.options.maxWidth,
        minHeight: instance.options.minHeight,
        maxHeight: maxHeight,
      });

      // isolate options scroll
      // @source: https://github.com/nobleclem/jQuery-IsolatedScroll
      optionsWrap.on('touchmove mousewheel DOMMouseScroll', function (e) {
        if ($(this).outerHeight() < $(this)[0].scrollHeight) {
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;

          if (
            $(this).outerHeight() + $(this)[0].scrollTop >
            $(this)[0].scrollHeight
          ) {
            e.preventDefault();
            this.scrollTop += delta < 0 ? 1 : -1;
          }
        }
      });

      // hide options menus if click happens off of the list placeholder button
      $(document)
        .off('click.ms-hideopts')
        .on('click.ms-hideopts', function (event) {
          if (!$(event.target).closest('.ms-options-wrap').length) {
            $('.ms-options-wrap.ms-active > .ms-options').each(function () {
              $(this).closest('.ms-options-wrap').removeClass('ms-active');

              var listID = $(this).closest('.ms-options-wrap').attr('id');

              var thisInst = $(this)
                .parent()
                .siblings('.' + listID + '.jqmsLoaded')
                .data('plugin_multiselect-instance');

              // USER CALLBACK
              if (typeof thisInst.options.onControlClose == 'function') {
                thisInst.options.onControlClose(thisInst.element);
              }
            });
          }
          // hide open option lists if escape key pressed
        })
        .on('keydown', function (event) {
          if ((event.keyCode || event.which) == 27) {
            // esc key
            $(this).trigger('click.ms-hideopts');
          }
        });

      // handle pressing enter|space while tabbing through
      placeholder.on('keydown', function (event) {
        var code = event.keyCode || event.which;
        if (code == 13 || code == 32) {
          // enter OR space
          placeholder.trigger('mousedown');
        }
      });

      // disable button action
      placeholder
        .on('mousedown', function (event) {
          // ignore if its not a left click
          if (event.which && event.which != 1) {
            return true;
          }

          // hide other menus before showing this one
          $('.ms-options-wrap.ms-active').each(function () {
            if (
              $(this).siblings('.' + $(this).attr('id') + '.jqmsLoaded')[0] !=
              optionsWrap
                .parent()
                .siblings('.ms-list-' + instance.listNumber + '.jqmsLoaded')[0]
            ) {
              $(this).removeClass('ms-active');

              var thisInst = $(this)
                .siblings('.' + $(this).attr('id') + '.jqmsLoaded')
                .data('plugin_multiselect-instance');

              // USER CALLBACK
              if (typeof thisInst.options.onControlClose == 'function') {
                thisInst.options.onControlClose(thisInst.element);
              }
            }
          });

          // show/hide options
          optionsWrap.closest('.ms-options-wrap').toggleClass('ms-active');

          // recalculate height
          if (optionsWrap.closest('.ms-options-wrap').hasClass('ms-active')) {
            // USER CALLBACK
            if (typeof instance.options.onControlOpen == 'function') {
              instance.options.onControlOpen(instance.element);
            }

            optionsWrap.css('maxHeight', '');

            // override with user defined maxHeight
            if (instance.options.maxHeight) {
              var maxHeight = instance.options.maxHeight;
            } else {
              // cacl default maxHeight
              var maxHeight =
                $(window).height() -
                optionsWrap.offset().top +
                $(window).scrollTop() -
                20;
            }

            if (maxHeight) {
              // maxHeight cannot be less than options.minHeight
              maxHeight =
                maxHeight < instance.options.minHeight
                  ? instance.options.minHeight
                  : maxHeight;

              optionsWrap.css('maxHeight', maxHeight);
            }
          } else if (typeof instance.options.onControlClose == 'function') {
            instance.options.onControlClose(instance.element);
          }
        })
        .click(function (event) {
          event.preventDefault();
        });

      // add placeholder copy
      if (instance.options.texts.placeholder) {
        placeholder.find('span').text(instance.options.texts.placeholder);
      }

      // add search box
      if (instance.options.search) {
        optionsList.before(
          '<div class="ms-search"><input type="text" value="" placeholder="' +
            instance.options.texts.search +
            '" /></div>'
        );
        optionsList.after(
          '<div class="no-result-message">' +
            instance.options.texts.searchNoResult +
            '</div>'
        );

        var search = optionsWrap.find('.ms-search input');

        search.on('keyup', function () {
          // ignore keystrokes that don't make a difference
          if ($(this).data('lastsearch') == $(this).val()) {
            return true;
          }

          // pause timeout
          if ($(this).data('searchTimeout')) {
            clearTimeout($(this).data('searchTimeout'));
          }

          var thisSearchElem = $(this);

          $(this).data(
            'searchTimeout',
            setTimeout(function () {
              thisSearchElem.data('lastsearch', thisSearchElem.val());

              // USER CALLBACK
              if (
                typeof instance.options.searchOptions.onSearch == 'function'
              ) {
                instance.options.searchOptions.onSearch(instance.element);
              }

              // search non optgroup li's
              var searchString = $.trim(search.val().toLowerCase());
              if (searchString) {
                optionsList
                  .find(
                    'li[data-search-term*="' +
                      searchString +
                      '"]:not(.optgroup)'
                  )
                  .removeClass('ms-hidden');
                optionsList
                  .find(
                    'li:not([data-search-term*="' +
                      searchString +
                      '"], .optgroup)'
                  )
                  .addClass('ms-hidden');
              } else {
                optionsList.find('.ms-hidden').removeClass('ms-hidden');
              }

              // show/hide optgroups based on if there are items visible within
              if (!instance.options.searchOptions.showOptGroups) {
                optionsList.find('.optgroup').each(function () {
                  if ($(this).find('li:not(.ms-hidden)').length) {
                    $(this).show();
                  } else {
                    $(this).hide();
                  }
                });
              }

              instance._updateSelectAllText();
            }, instance.options.searchOptions.delay)
          );
        });
      }

      // add global select all options
      if (instance.options.selectAll) {
        optionsList.before(
          '<a href="#" class="ms-selectall global">' +
            instance.options.texts.selectAll +
            '</a>'
        );
      }

      // handle select all option
      optionsWrap.on('click', '.ms-selectall', function (event) {
        event.preventDefault();

        instance.updateSelectAll = false;
        instance.updatePlaceholder = false;

        var select = optionsWrap
          .parent()
          .siblings('.ms-list-' + instance.listNumber + '.jqmsLoaded');

        if ($(this).hasClass('global')) {
          // check if any options are not selected if so then select them
          if (
            optionsList.find(
              'li:not(.optgroup, .selected, .ms-hidden) input[type="checkbox"]:not(:disabled)'
            ).length
          ) {
            // get unselected vals, mark as selected, return val list
            optionsList
              .find(
                'li:not(.optgroup, .selected, .ms-hidden) input[type="checkbox"]:not(:disabled)'
              )
              .closest('li')
              .addClass('selected');
            optionsList
              .find('li.selected input[type="checkbox"]:not(:disabled)')
              .prop('checked', true);
          }
          // deselect everything
          else {
            optionsList
              .find(
                'li:not(.optgroup, .ms-hidden).selected input[type="checkbox"]:not(:disabled)'
              )
              .closest('li')
              .removeClass('selected');
            optionsList
              .find(
                'li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)'
              )
              .prop('checked', false);
          }
        } else if ($(this).closest('li').hasClass('optgroup')) {
          var optgroup = $(this).closest('li.optgroup');

          // check if any selected if so then select them
          if (
            optgroup.find(
              'li:not(.selected, .ms-hidden) input[type="checkbox"]:not(:disabled)'
            ).length
          ) {
            optgroup
              .find(
                'li:not(.selected, .ms-hidden) input[type="checkbox"]:not(:disabled)'
              )
              .closest('li')
              .addClass('selected');
            optgroup
              .find('li.selected input[type="checkbox"]:not(:disabled)')
              .prop('checked', true);
          }
          // deselect everything
          else {
            optgroup
              .find(
                'li:not(.ms-hidden).selected input[type="checkbox"]:not(:disabled)'
              )
              .closest('li')
              .removeClass('selected');
            optgroup
              .find(
                'li:not(.ms-hidden, .selected) input[type="checkbox"]:not(:disabled)'
              )
              .prop('checked', false);
          }
        }

        var vals = [];
        optionsList
          .find('li.selected input[type="checkbox"]')
          .each(function () {
            vals.push($(this).val());
          });
        select.val(vals).trigger('change');

        instance.updateSelectAll = true;
        instance.updatePlaceholder = true;

        // USER CALLBACK
        if (typeof instance.options.onSelectAll == 'function') {
          instance.options.onSelectAll(instance.element, vals.length);
        }

        instance._updateSelectAllText();
        instance._updatePlaceholderText();
      });

      // add options to wrapper
      var options = [];
      $(instance.element)
        .children()
        .each(function () {
          if (this.nodeName == 'OPTGROUP') {
            var groupOptions = [];

            $(this)
              .children('option')
              .each(function () {
                var thisOptionAtts = {};
                for (
                  var i = 0;
                  i < instance.options.optionAttributes.length;
                  i++
                ) {
                  var thisOptAttr = instance.options.optionAttributes[i];

                  if ($(this).attr(thisOptAttr) !== undefined) {
                    thisOptionAtts[thisOptAttr] = $(this).attr(thisOptAttr);
                  }
                }

                groupOptions.push({
                  name: $(this).text(),
                  value: $(this).val(),
                  checked: $(this).prop('selected'),
                  attributes: thisOptionAtts,
                });
              });

            options.push({
              label: $(this).attr('label'),
              options: groupOptions,
            });
          } else if (this.nodeName == 'OPTION') {
            var thisOptionAtts = {};
            for (var i = 0; i < instance.options.optionAttributes.length; i++) {
              var thisOptAttr = instance.options.optionAttributes[i];

              if ($(this).attr(thisOptAttr) !== undefined) {
                thisOptionAtts[thisOptAttr] = $(this).attr(thisOptAttr);
              }
            }

            options.push({
              name: $(this).text(),
              value: $(this).val(),
              checked: $(this).prop('selected'),
              attributes: thisOptionAtts,
            });
          } else {
            // bad option
            return true;
          }
        });
      instance.loadOptions(options, true, false);

      // BIND SELECT ACTION
      optionsWrap.on('click', 'input[type="checkbox"]', function () {
        $(this).closest('li').toggleClass('selected');

        var select = optionsWrap
          .parent()
          .siblings('.ms-list-' + instance.listNumber + '.jqmsLoaded');

        // toggle clicked option
        select
          .find(
            'option[value="' + instance._escapeSelector($(this).val()) + '"]'
          )
          .prop('selected', $(this).is(':checked'))
          .closest('select')
          .trigger('change');

        // USER CALLBACK
        if (typeof instance.options.onOptionClick == 'function') {
          instance.options.onOptionClick(instance.element, this);
        }

        instance._updateSelectAllText();
        instance._updatePlaceholderText();
      });

      // BIND FOCUS EVENT
      optionsWrap
        .on('focusin', 'input[type="checkbox"]', function () {
          $(this).closest('label').addClass('focused');
        })
        .on('focusout', 'input[type="checkbox"]', function () {
          $(this).closest('label').removeClass('focused');
        });

      // USER CALLBACK
      if (typeof instance.options.onLoad === 'function') {
        instance.options.onLoad(instance.element);
      }

      // hide native select list
      $(instance.element).hide();
    },

    /* LOAD SELECT OPTIONS */
    loadOptions: function (options, overwrite, updateSelect) {
      // console.log( options );
      overwrite = typeof overwrite == 'boolean' ? overwrite : true;
      updateSelect = typeof updateSelect == 'boolean' ? updateSelect : true;

      var instance = this;
      var select = $(instance.element);
      var optionsList = select
        .siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap')
        .find('> .ms-options > ul');
      var optionsWrap = select
        .siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap')
        .find('> .ms-options');

      if (overwrite) {
        optionsList.find('> li').remove();

        if (updateSelect) {
          select.find('> *').remove();
        }
      }

      var containers = [];
      for (var key in options) {
        // Prevent prototype methods injected into options from being iterated over.
        if (!options.hasOwnProperty(key)) {
          continue;
        }

        var thisOption = options[key];
        var container = $('<li/>');
        var appendContainer = true;

        // OPTION
        if (thisOption.hasOwnProperty('value')) {
          if (
            instance.options.showCheckbox &&
            instance.options.checkboxAutoFit
          ) {
            container.addClass('ms-reflow');
          }

          // add option to ms dropdown
          instance._addOption(container, thisOption);

          if (updateSelect) {
            var selOption = $('<option/>', {
              value: thisOption.value,
              text: thisOption.name,
            });

            // add custom user attributes
            if (
              thisOption.hasOwnProperty('attributes') &&
              Object.keys(thisOption.attributes).length
            ) {
              selOption.attr(thisOption.attributes);
            }

            // mark option as selected
            if (thisOption.checked) {
              selOption.prop('selected', true);
            }

            select.append(selOption);
          }
        }
        // OPTGROUP
        else if (thisOption.hasOwnProperty('options')) {
          var optGroup = $('<optgroup/>', {
            label: thisOption.label,
          });

          optionsList.find('> li.optgroup > span.label').each(function () {
            if ($(this).text() == thisOption.label) {
              container = $(this).closest('.optgroup');
              appendContainer = false;
            }
          });

          // prepare to append optgroup to select element
          if (updateSelect) {
            if (
              select.find('optgroup[label="' + thisOption.label + '"]').length
            ) {
              optGroup = select.find(
                'optgroup[label="' + thisOption.label + '"]'
              );
            } else {
              select.append(optGroup);
            }
          }

          // setup container
          if (appendContainer) {
            container.addClass('optgroup');
            container.append(
              '<span class="label">' + thisOption.label + '</span>'
            );
            container.find('> .label').css({
              clear: 'both',
            });

            // add select all link
            if (instance.options.selectGroup) {
              container.append(
                '<a href="#" class="ms-selectall">' +
                  instance.options.texts.selectAll +
                  '</a>'
              );
            }

            container.append('<ul/>');
          }

          for (var gKey in thisOption.options) {
            // Prevent prototype methods injected into options from
            // being iterated over.
            if (!thisOption.options.hasOwnProperty(gKey)) {
              continue;
            }

            var thisGOption = thisOption.options[gKey];
            var gContainer = $('<li/>');
            if (
              instance.options.showCheckbox &&
              instance.options.checkboxAutoFit
            ) {
              gContainer.addClass('ms-reflow');
            }

            // no clue what this is we hit (skip)
            if (!thisGOption.hasOwnProperty('value')) {
              continue;
            }

            instance._addOption(gContainer, thisGOption);

            container.find('> ul').append(gContainer);

            // add option to optgroup in select element
            if (updateSelect) {
              var selOption = $('<option/>', {
                value: thisGOption.value,
                text: thisGOption.name,
              });

              // add custom user attributes
              if (
                thisGOption.hasOwnProperty('attributes') &&
                Object.keys(thisGOption.attributes).length
              ) {
                selOption.attr(thisGOption.attributes);
              }

              // mark option as selected
              if (thisGOption.checked) {
                selOption.prop('selected', true);
              }

              optGroup.append(selOption);
            }
          }
        } else {
          // no clue what this is we hit (skip)
          continue;
        }

        if (appendContainer) {
          containers.push(container);
        }
      }
      optionsList.append(containers);

      // pad out label for room for the checkbox
      if (
        instance.options.checkboxAutoFit &&
        instance.options.showCheckbox &&
        !optionsWrap.hasClass('hide-checkbox')
      ) {
        var chkbx = optionsList.find('.ms-reflow:eq(0) input[type="checkbox"]');
        if (chkbx.length) {
          var checkboxWidth = chkbx.outerWidth();
          checkboxWidth = checkboxWidth ? checkboxWidth : 15;

          optionsList
            .find('.ms-reflow label')
            .css(
              'padding-left',
              parseInt(chkbx.closest('label').css('padding-left')) * 2 +
                checkboxWidth
            );

          optionsList.find('.ms-reflow').removeClass('ms-reflow');
        }
      }

      // update placeholder text
      instance._updatePlaceholderText();

      // RESET COLUMN STYLES
      optionsWrap.find('ul').css({
        'column-count': '',
        'column-gap': '',
        '-webkit-column-count': '',
        '-webkit-column-gap': '',
        '-moz-column-count': '',
        '-moz-column-gap': '',
      });

      // COLUMNIZE
      if (select.find('optgroup').length) {
        // float non grouped options
        optionsList.find('> li:not(.optgroup)').css({
          float: 'left',
          width: 100 / instance.options.columns + '%',
        });

        // add CSS3 column styles
        optionsList
          .find('li.optgroup')
          .css({
            clear: 'both',
          })
          .find('> ul')
          .css({
            'column-count': instance.options.columns,
            'column-gap': 0,
            '-webkit-column-count': instance.options.columns,
            '-webkit-column-gap': 0,
            '-moz-column-count': instance.options.columns,
            '-moz-column-gap': 0,
          });

        // for crappy IE versions float grouped options
        if (this._ieVersion() && this._ieVersion() < 10) {
          optionsList.find('li.optgroup > ul > li').css({
            float: 'left',
            width: 100 / instance.options.columns + '%',
          });
        }
      } else {
        // add CSS3 column styles
        optionsList.css({
          'column-count': instance.options.columns,
          'column-gap': 0,
          '-webkit-column-count': instance.options.columns,
          '-webkit-column-gap': 0,
          '-moz-column-count': instance.options.columns,
          '-moz-column-gap': 0,
        });

        // for crappy IE versions float grouped options
        if (this._ieVersion() && this._ieVersion() < 10) {
          optionsList.find('> li').css({
            float: 'left',
            width: 100 / instance.options.columns + '%',
          });
        }
      }

      // update un/select all logic
      instance._updateSelectAllText();
    },

    /* UPDATE MULTISELECT CONFIG OPTIONS */
    settings: function (options) {
      this.options = $.extend(true, {}, this.options, options);
      this.reload();
    },

    /* RESET THE DOM */
    unload: function () {
      $(this.element)
        .siblings('#ms-list-' + this.listNumber + '.ms-options-wrap')
        .remove();
      $(this.element).show(function () {
        $(this).css('display', '').removeClass('jqmsLoaded');
      });
    },

    /* RELOAD JQ MULTISELECT LIST */
    reload: function () {
      // remove existing options
      $(this.element)
        .siblings('#ms-list-' + this.listNumber + '.ms-options-wrap')
        .remove();
      $(this.element).removeClass('jqmsLoaded');

      // load element
      this.load();
    },

    // RESET BACK TO DEFAULT VALUES & RELOAD
    reset: function () {
      var defaultVals = [];
      $(this.element)
        .find('option')
        .each(function () {
          if ($(this).prop('defaultSelected')) {
            defaultVals.push($(this).val());
          }
        });

      $(this.element).val(defaultVals);

      this.reload();
    },

    disable: function (status) {
      status = typeof status === 'boolean' ? status : true;
      $(this.element).prop('disabled', status);
      $(this.element)
        .siblings('#ms-list-' + this.listNumber + '.ms-options-wrap')
        .find('button:first-child')
        .prop('disabled', status);
    },

    /** PRIVATE FUNCTIONS **/
    // update the un/select all texts based on selected options and visibility
    _updateSelectAllText: function () {
      if (!this.updateSelectAll) {
        return;
      }

      var instance = this;

      // select all not used at all so just do nothing
      if (!instance.options.selectAll && !instance.options.selectGroup) {
        return;
      }

      var optionsWrap = $(instance.element)
        .siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap')
        .find('> .ms-options');

      // update un/select all text
      optionsWrap.find('.ms-selectall').each(function () {
        var unselected = $(this)
          .parent()
          .find('li:not(.optgroup,.selected,.ms-hidden)');

        $(this).text(
          unselected.length
            ? instance.options.texts.selectAll
            : instance.options.texts.unselectAll
        );
      });

      var shownOptionsCount = optionsWrap.find(
        '> ul li:not(.optgroup,.ms-hidden)'
      ).length;

      // show/hide no-results message
      optionsWrap
        .find('.no-result-message')
        .toggle(shownOptionsCount ? false : true);

      // show/hide (un)select all element as necessary
      optionsWrap
        .find('.ms-selectall.global')
        .toggle(shownOptionsCount ? true : false);
    },

    // update selected placeholder text
    _updatePlaceholderText: function () {
      if (!this.updatePlaceholder) {
        return;
      }

      var instance = this;
      var select = $(instance.element);
      var selectVals = select.val() ? select.val() : [];
      var placeholder = select
        .siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap')
        .find('> button:first-child');
      var placeholderTxt = placeholder.find('span');
      var optionsWrap = select
        .siblings('#ms-list-' + instance.listNumber + '.ms-options-wrap')
        .find('> .ms-options');

      // if there are disabled options get those values as well
      if (select.find('option:selected:disabled').length) {
        selectVals = [];
        select.find('option:selected').each(function () {
          selectVals.push($(this).val());
        });
      }

      // get selected options
      var selOpts = [];
      for (var key in selectVals) {
        // Prevent prototype methods injected into options from being iterated over.
        if (!selectVals.hasOwnProperty(key)) {
          continue;
        }

        selOpts.push(
          $.trim(
            select
              .find(
                'option[value="' +
                  instance._escapeSelector(selectVals[key]) +
                  '"]'
              )
              .text()
          )
        );

        if (selOpts.length >= instance.options.maxPlaceholderOpts) {
          break;
        }
      }

      // UPDATE PLACEHOLDER TEXT WITH OPTIONS SELECTED
      placeholderTxt.text(selOpts.join(', '));

      if (selOpts.length) {
        optionsWrap.closest('.ms-options-wrap').addClass('ms-has-selections');

        // USER CALLBACK
        if (typeof instance.options.onPlaceholder == 'function') {
          instance.options.onPlaceholder(
            instance.element,
            placeholderTxt,
            selOpts
          );
        }
      } else {
        optionsWrap
          .closest('.ms-options-wrap')
          .removeClass('ms-has-selections');
      }

      // replace placeholder text
      if (!selOpts.length) {
        placeholderTxt.text(instance.options.texts.placeholder);
      }
      // if copy is larger than button width use "# selected"
      else if (
        instance.options.replacePlaceholderText &&
        (placeholderTxt.width() > placeholder.width() ||
          selOpts.length != selectVals.length)
      ) {
        placeholderTxt.text(
          selectVals.length + instance.options.texts.selectedOptions
        );
      }
    },

    // Add option to the custom dom list
    _addOption: function (container, option) {
      var instance = this;
      var optionNameText = $('<div/>').html(option.name).text();

      var thisOption = $('<label/>', {
        for: 'ms-opt-' + msOptCounter,
      }).text(optionNameText);

      var thisCheckbox = $('<input>', {
        type: 'checkbox',
        title: optionNameText,
        id: 'ms-opt-' + msOptCounter,
        value: option.value,
      });

      // add user defined attributes
      if (
        option.hasOwnProperty('attributes') &&
        Object.keys(option.attributes).length
      ) {
        thisCheckbox.attr(option.attributes);
      }

      if (option.checked) {
        container.addClass('default selected');
        thisCheckbox.prop('checked', true);
      }

      thisOption.prepend(thisCheckbox);

      var searchTerm = '';
      if (instance.options.searchOptions.searchText) {
        searchTerm += ' ' + optionNameText.toLowerCase();
      }
      if (instance.options.searchOptions.searchValue) {
        searchTerm += ' ' + option.value.toLowerCase();
      }

      container
        .attr('data-search-term', $.trim(searchTerm))
        .prepend(thisOption);

      msOptCounter = msOptCounter + 1;
    },

    // check ie version
    _ieVersion: function () {
      var myNav = navigator.userAgent.toLowerCase();
      return myNav.indexOf('msie') != -1
        ? parseInt(myNav.split('msie')[1])
        : false;
    },

    // escape selector
    _escapeSelector: function (string) {
      if (typeof $.escapeSelector == 'function') {
        return $.escapeSelector(string);
      } else {
        return string.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, '\\$&');
      }
    },
  };

  // ENABLE JQUERY PLUGIN FUNCTION
  $.fn.multiselect = function (options) {
    if (!this.length) {
      return;
    }

    var args = arguments;
    var ret;

    // menuize each list
    if (options === undefined || typeof options === 'object') {
      return this.each(function () {
        if (!$.data(this, 'plugin_multiselect')) {
          $.data(this, 'plugin_multiselect', new MultiSelect(this, options));
        }
      });
    } else if (
      typeof options === 'string' &&
      options[0] !== '_' &&
      options !== 'init'
    ) {
      this.each(function () {
        var instance = $.data(this, 'plugin_multiselect');

        if (
          instance instanceof MultiSelect &&
          typeof instance[options] === 'function'
        ) {
          ret = instance[options].apply(
            instance,
            Array.prototype.slice.call(args, 1)
          );
        }

        // special destruct handler
        if (options === 'unload') {
          $.data(this, 'plugin_multiselect', null);
        }
      });

      return ret;
    }
  };
})(jQuery);

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

function menuMobile() {
  $('button.mobileMenu').on('click', function () {
    $(this).toggleClass('active');
    $('.navigation-main-menu').toggleClass('d-block');
  });
}
function mobileMenuGoBack() {
  $('nav.navigation').trigger('click');
}

function megaMenu() {
  $(document).on('click', function (event) {
    if (
      ($this.parents('.mega-menu-parent').length < 1 &&
        $('.mega-menu-parent').is(':visible')) ||
      $this.hasClass('mega-menu-go-back')
    ) {
      $('.mega-menu-parent')
        .find('.mega-menu-container')
        .stop(true, true)
        .css({ display: 'none' });
    }
  });

  $('.mega-menu-parent').on('click', function () {
    $('.mega-menu-container')
      .not($(this).find('.mega-menu-container'))
      .stop(true, true)
      .css({ display: 'none' });
    $(this)
      .find('.mega-menu-container')
      .stop(true, true)
      .css({ display: 'block' });
  });

  $('.mega-menu__side-submenu-parent')
    .find('> a')
    .on('click focusin', function () {
      $focusout = false;
      var $this = $(this);
      setTimeout(function () {
        $('.mega-menu__side-submenu-parent')
          .find('> a')
          .not($this)
          .stop(true, true)
          .removeClass('active');
        $('.mega-menu__side-submenu')
          .not($this.parent().find('.mega-menu__side-submenu'))
          .stop(true, true)
          .css({ display: 'none' });
        $this
          .addClass('active')
          .parent()
          .find('.mega-menu__side-submenu')
          .stop(true, true)
          .css({ display: 'block' });
      }, 200);
    });
  $('.mega-menu__big-submenu')
    .find('> li')
    .find('> a')
    .on('click focusin', function () {
      $focusout = false;
      var $this = $(this);
      setTimeout(function () {
        $('.mega-menu__big-submenu')
          .find('> li')
          .find('> a')
          .not($this)
          .removeClass('active')
          .parent()
          .find('.mega-menu__side-submenu')
          .stop(true, true)
          .css({ display: 'none' });
        $this
          .parent()
          .parent()
          .parent()
          .css({
            'min-height':
              $this.parent().find('.mega-menu__side-submenu').height() +
              50 +
              'px',
          });
      }, 200);
    });
  $('.mega-menu__side-submenu-parent')
    .find('> a')
    .on('focusout', function (event) {
      var $this = $(this);
      setTimeout(function () {
        $this
          .removeClass('active')
          .parent()
          .find('.mega-menu__side-submenu')
          .stop(true, true)
          .css({ display: 'none' });
      }, 200);
    });
}

// http://bootstrap-menu.com

jQuery(document).ready(function () {
  /// Prevent closing from click inside dropdown
  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  // // refresh window on resize
  // $(window).on("resize", function () {
  //   location.reload();
  // });

  if ($(window).width() < 992) {
    $(".has-megasubmenu a").click(function (e) {
      e.preventDefault();
      $(this).next(".megasubmenu").toggle();

      $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".megasubmenu").hide();
      });
    });

    $(".dropdown-menu a").click(function (e) {
      e.preventDefault();
      if ($(this).next(".submenu").length) {
        $(this).next(".submenu").toggle();
      }
      $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".submenu").hide();
      });
    });
  }

  /// offcanvas onmobile
  $("[data-trigger]").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id = $(this).attr("data-trigger");
    $(offcanvas_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
  });

  /// Close menu when pressing ESC
  $(document).on("keydown", function (event) {
    if (event.keyCode === 27) {
      $(".mobile-offcanvas").removeClass("show");
      $("body").removeClass("overlay-active");
    }
  });

  $(".btn-close, .screen-overlay").click(function (e) {
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
  });
}); // document ready //end

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
(function ($, window, document, undefined) {
  /**
   * Creates a carousel.
   * @class The Owl Carousel.
   * @public
   * @param {HTMLElement|jQuery} element - The element to create the carousel for.
   * @param {Object} [options] - The options
   */
  function Owl(element, options) {
    /**
     * Current settings for the carousel.
     * @public
     */
    this.settings = null;

    /**
     * Current options set by the caller including defaults.
     * @public
     */
    this.options = $.extend({}, Owl.Defaults, options);

    /**
     * Plugin element.
     * @public
     */
    this.$element = $(element);

    /**
     * Proxied event handlers.
     * @protected
     */
    this._handlers = {};

    /**
     * References to the running plugins of this carousel.
     * @protected
     */
    this._plugins = {};

    /**
     * Currently suppressed events to prevent them from being retriggered.
     * @protected
     */
    this._supress = {};

    /**
     * Absolute current position.
     * @protected
     */
    this._current = null;

    /**
     * Animation speed in milliseconds.
     * @protected
     */
    this._speed = null;

    /**
     * Coordinates of all items in pixel.
     * @todo The name of this member is missleading.
     * @protected
     */
    this._coordinates = [];

    /**
     * Current breakpoint.
     * @todo Real media queries would be nice.
     * @protected
     */
    this._breakpoint = null;

    /**
     * Current width of the plugin element.
     */
    this._width = null;

    /**
     * All real items.
     * @protected
     */
    this._items = [];

    /**
     * All cloned items.
     * @protected
     */
    this._clones = [];

    /**
     * Merge values of all items.
     * @todo Maybe this could be part of a plugin.
     * @protected
     */
    this._mergers = [];

    /**
     * Widths of all items.
     */
    this._widths = [];

    /**
     * Invalidated parts within the update process.
     * @protected
     */
    this._invalidated = {};

    /**
     * Ordered list of workers for the update process.
     * @protected
     */
    this._pipe = [];

    /**
     * Current state information for the drag operation.
     * @todo #261
     * @protected
     */
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null,
      },
      direction: null,
    };

    /**
     * Current state information and their tags.
     * @type {Object}
     * @protected
     */
    this._states = {
      current: {},
      tags: {
        initializing: ['busy'],
        animating: ['busy'],
        dragging: ['interacting'],
      },
    };

    $.each(
      ['onResize', 'onThrottledResize'],
      $.proxy(function (i, handler) {
        this._handlers[handler] = $.proxy(this[handler], this);
      }, this)
    );

    $.each(
      Owl.Plugins,
      $.proxy(function (key, plugin) {
        this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(
          this
        );
      }, this)
    );

    $.each(
      Owl.Workers,
      $.proxy(function (priority, worker) {
        this._pipe.push({
          filter: worker.filter,
          run: $.proxy(worker.run, this),
        });
      }, this)
    );

    this.setup();
    this.initialize();
  }

  /**
   * Default options for the carousel.
   * @public
   */
  Owl.Defaults = {
    items: 3,
    loop: false,
    center: false,
    rewind: false,
    checkVisibility: true,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,

    margin: 0,
    stagePadding: 0,

    merge: false,
    mergeFit: true,
    autoWidth: false,

    startPosition: 0,
    rtl: false,

    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,

    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,

    fallbackEasing: 'swing',
    slideTransition: '',

    info: false,

    nestedItemSelector: false,
    itemElement: 'div',
    stageElement: 'div',

    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab',
  };

  /**
   * Enumeration for width.
   * @public
   * @readonly
   * @enum {String}
   */
  Owl.Width = {
    Default: 'default',
    Inner: 'inner',
    Outer: 'outer',
  };

  /**
   * Enumeration for types.
   * @public
   * @readonly
   * @enum {String}
   */
  Owl.Type = {
    Event: 'event',
    State: 'state',
  };

  /**
   * Contains all registered plugins.
   * @public
   */
  Owl.Plugins = {};

  /**
   * List of workers involved in the update process.
   */
  Owl.Workers = [
    {
      filter: ['width', 'settings'],
      run: function () {
        this._width = this.$element.width();
      },
    },
    {
      filter: ['width', 'items', 'settings'],
      run: function (cache) {
        cache.current =
          this._items && this._items[this.relative(this._current)];
      },
    },
    {
      filter: ['items', 'settings'],
      run: function () {
        this.$stage.children('.cloned').remove();
      },
    },
    {
      filter: ['width', 'items', 'settings'],
      run: function (cache) {
        var margin = this.settings.margin || '',
          grid = !this.settings.autoWidth,
          rtl = this.settings.rtl,
          css = {
            width: 'auto',
            'margin-left': rtl ? margin : '',
            'margin-right': rtl ? '' : margin,
          };

        !grid && this.$stage.children().css(css);

        cache.css = css;
      },
    },
    {
      filter: ['width', 'items', 'settings'],
      run: function (cache) {
        var width =
            (this.width() / this.settings.items).toFixed(3) -
            this.settings.margin,
          merge = null,
          iterator = this._items.length,
          grid = !this.settings.autoWidth,
          widths = [];

        cache.items = {
          merge: false,
          width: width,
        };

        while (iterator--) {
          merge = this._mergers[iterator];
          merge =
            (this.settings.mergeFit && Math.min(merge, this.settings.items)) ||
            merge;

          cache.items.merge = merge > 1 || cache.items.merge;

          widths[iterator] = !grid
            ? this._items[iterator].width()
            : width * merge;
        }

        this._widths = widths;
      },
    },
    {
      filter: ['items', 'settings'],
      run: function () {
        var clones = [],
          items = this._items,
          settings = this.settings,
          // TODO: Should be computed from number of min width items in stage
          view = Math.max(settings.items * 2, 4),
          size = Math.ceil(items.length / 2) * 2,
          repeat =
            settings.loop && items.length
              ? settings.rewind
                ? view
                : Math.max(view, size)
              : 0,
          append = '',
          prepend = '';

        repeat /= 2;

        while (repeat > 0) {
          // Switch to only using appended clones
          clones.push(this.normalize(clones.length / 2, true));
          append = append + items[clones[clones.length - 1]][0].outerHTML;
          clones.push(
            this.normalize(items.length - 1 - (clones.length - 1) / 2, true)
          );
          prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
          repeat -= 1;
        }

        this._clones = clones;

        $(append).addClass('cloned').appendTo(this.$stage);
        $(prepend).addClass('cloned').prependTo(this.$stage);
      },
    },
    {
      filter: ['width', 'items', 'settings'],
      run: function () {
        var rtl = this.settings.rtl ? 1 : -1,
          size = this._clones.length + this._items.length,
          iterator = -1,
          previous = 0,
          current = 0,
          coordinates = [];

        while (++iterator < size) {
          previous = coordinates[iterator - 1] || 0;
          current =
            this._widths[this.relative(iterator)] + this.settings.margin;
          coordinates.push(previous + current * rtl);
        }

        this._coordinates = coordinates;
      },
    },
    {
      filter: ['width', 'items', 'settings'],
      run: function () {
        var padding = this.settings.stagePadding,
          coordinates = this._coordinates,
          css = {
            width:
              Math.ceil(Math.abs(coordinates[coordinates.length - 1])) +
              padding * 2,
            'padding-left': padding || '',
            'padding-right': padding || '',
          };

        this.$stage.css(css);
      },
    },
    {
      filter: ['width', 'items', 'settings'],
      run: function (cache) {
        var iterator = this._coordinates.length,
          grid = !this.settings.autoWidth,
          items = this.$stage.children();

        if (grid && cache.items.merge) {
          while (iterator--) {
            cache.css.width = this._widths[this.relative(iterator)];
            items.eq(iterator).css(cache.css);
          }
        } else if (grid) {
          cache.css.width = cache.items.width;
          items.css(cache.css);
        }
      },
    },
    {
      filter: ['items'],
      run: function () {
        this._coordinates.length < 1 && this.$stage.removeAttr('style');
      },
    },
    {
      filter: ['width', 'items', 'settings'],
      run: function (cache) {
        cache.current = cache.current
          ? this.$stage.children().index(cache.current)
          : 0;
        cache.current = Math.max(
          this.minimum(),
          Math.min(this.maximum(), cache.current)
        );
        this.reset(cache.current);
      },
    },
    {
      filter: ['position'],
      run: function () {
        this.animate(this.coordinates(this._current));
      },
    },
    {
      filter: ['width', 'position', 'items', 'settings'],
      run: function () {
        var rtl = this.settings.rtl ? 1 : -1,
          padding = this.settings.stagePadding * 2,
          begin = this.coordinates(this.current()) + padding,
          end = begin + this.width() * rtl,
          inner,
          outer,
          matches = [],
          i,
          n;

        for (i = 0, n = this._coordinates.length; i < n; i++) {
          inner = this._coordinates[i - 1] || 0;
          outer = Math.abs(this._coordinates[i]) + padding * rtl;

          if (
            (this.op(inner, '<=', begin) && this.op(inner, '>', end)) ||
            (this.op(outer, '<', begin) && this.op(outer, '>', end))
          ) {
            matches.push(i);
          }
        }

        this.$stage.children('.active').removeClass('active');
        this.$stage
          .children(':eq(' + matches.join('), :eq(') + ')')
          .addClass('active');

        this.$stage.children('.center').removeClass('center');
        if (this.settings.center) {
          this.$stage.children().eq(this.current()).addClass('center');
        }
      },
    },
  ];

  /**
   * Create the stage DOM element
   */
  Owl.prototype.initializeStage = function () {
    this.$stage = this.$element.find('.' + this.settings.stageClass);

    // if the stage is already in the DOM, grab it and skip stage initialization
    if (this.$stage.length) {
      return;
    }

    this.$element.addClass(this.options.loadingClass);

    // create stage
    this.$stage = $('<' + this.settings.stageElement + '>', {
      class: this.settings.stageClass,
    }).wrap(
      $('<div/>', {
        class: this.settings.stageOuterClass,
      })
    );

    // append stage
    this.$element.append(this.$stage.parent());
  };

  /**
   * Create item DOM elements
   */
  Owl.prototype.initializeItems = function () {
    var $items = this.$element.find('.owl-item');

    // if the items are already in the DOM, grab them and skip item initialization
    if ($items.length) {
      this._items = $items.get().map(function (item) {
        return $(item);
      });

      this._mergers = this._items.map(function () {
        return 1;
      });

      this.refresh();

      return;
    }

    // append content
    this.replace(this.$element.children().not(this.$stage.parent()));

    // check visibility
    if (this.isVisible()) {
      // update view
      this.refresh();
    } else {
      // invalidate width
      this.invalidate('width');
    }

    this.$element
      .removeClass(this.options.loadingClass)
      .addClass(this.options.loadedClass);
  };

  /**
   * Initializes the carousel.
   * @protected
   */
  Owl.prototype.initialize = function () {
    this.enter('initializing');
    this.trigger('initialize');

    this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

    if (this.settings.autoWidth && !this.is('pre-loading')) {
      var imgs, nestedSelector, width;
      imgs = this.$element.find('img');
      nestedSelector = this.settings.nestedItemSelector
        ? '.' + this.settings.nestedItemSelector
        : undefined;
      width = this.$element.children(nestedSelector).width();

      if (imgs.length && width <= 0) {
        this.preloadAutoWidthImages(imgs);
      }
    }

    this.initializeStage();
    this.initializeItems();

    // register event handlers
    this.registerEventHandlers();

    this.leave('initializing');
    this.trigger('initialized');
  };

  /**
   * @returns {Boolean} visibility of $element
   *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
   *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
   */
  Owl.prototype.isVisible = function () {
    return this.settings.checkVisibility ? this.$element.is(':visible') : true;
  };

  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @public
   */
  Owl.prototype.setup = function () {
    var viewport = this.viewport(),
      overwrites = this.options.responsive,
      match = -1,
      settings = null;

    if (!overwrites) {
      settings = $.extend({}, this.options);
    } else {
      $.each(overwrites, function (breakpoint) {
        if (breakpoint <= viewport && breakpoint > match) {
          match = Number(breakpoint);
        }
      });

      settings = $.extend({}, this.options, overwrites[match]);
      if (typeof settings.stagePadding === 'function') {
        settings.stagePadding = settings.stagePadding();
      }
      delete settings.responsive;

      // responsive class
      if (settings.responsiveClass) {
        this.$element.attr(
          'class',
          this.$element
            .attr('class')
            .replace(
              new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'),
              '$1' + match
            )
        );
      }
    }

    this.trigger('change', { property: { name: 'settings', value: settings } });
    this._breakpoint = match;
    this.settings = settings;
    this.invalidate('settings');
    this.trigger('changed', {
      property: { name: 'settings', value: this.settings },
    });
  };

  /**
   * Updates option logic if necessery.
   * @protected
   */
  Owl.prototype.optionsLogic = function () {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = false;
      this.settings.merge = false;
    }
  };

  /**
   * Prepares an item before add.
   * @todo Rename event parameter `content` to `item`.
   * @protected
   * @returns {jQuery|HTMLElement} - The item container.
   */
  Owl.prototype.prepare = function (item) {
    var event = this.trigger('prepare', { content: item });

    if (!event.data) {
      event.data = $('<' + this.settings.itemElement + '/>')
        .addClass(this.options.itemClass)
        .append(item);
    }

    this.trigger('prepared', { content: event.data });

    return event.data;
  };

  /**
   * Updates the view.
   * @public
   */
  Owl.prototype.update = function () {
    var i = 0,
      n = this._pipe.length,
      filter = $.proxy(function (p) {
        return this[p];
      }, this._invalidated),
      cache = {};

    while (i < n) {
      if (
        this._invalidated.all ||
        $.grep(this._pipe[i].filter, filter).length > 0
      ) {
        this._pipe[i].run(cache);
      }
      i++;
    }

    this._invalidated = {};

    !this.is('valid') && this.enter('valid');
  };

  /**
   * Gets the width of the view.
   * @public
   * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
   * @returns {Number} - The width of the view in pixel.
   */
  Owl.prototype.width = function (dimension) {
    dimension = dimension || Owl.Width.Default;
    switch (dimension) {
      case Owl.Width.Inner:
      case Owl.Width.Outer:
        return this._width;
      default:
        return (
          this._width - this.settings.stagePadding * 2 + this.settings.margin
        );
    }
  };

  /**
   * Refreshes the carousel primarily for adaptive purposes.
   * @public
   */
  Owl.prototype.refresh = function () {
    this.enter('refreshing');
    this.trigger('refresh');

    this.setup();

    this.optionsLogic();

    this.$element.addClass(this.options.refreshClass);

    this.update();

    this.$element.removeClass(this.options.refreshClass);

    this.leave('refreshing');
    this.trigger('refreshed');
  };

  /**
   * Checks window `resize` event.
   * @protected
   */
  Owl.prototype.onThrottledResize = function () {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(
      this._handlers.onResize,
      this.settings.responsiveRefreshRate
    );
  };

  /**
   * Checks window `resize` event.
   * @protected
   */
  Owl.prototype.onResize = function () {
    if (!this._items.length) {
      return false;
    }

    if (this._width === this.$element.width()) {
      return false;
    }

    if (!this.isVisible()) {
      return false;
    }

    this.enter('resizing');

    if (this.trigger('resize').isDefaultPrevented()) {
      this.leave('resizing');
      return false;
    }

    this.invalidate('width');

    this.refresh();

    this.leave('resizing');
    this.trigger('resized');
  };

  /**
   * Registers event handlers.
   * @todo Check `msPointerEnabled`
   * @todo #261
   * @protected
   */
  Owl.prototype.registerEventHandlers = function () {
    if ($.support.transition) {
      this.$stage.on(
        $.support.transition.end + '.owl.core',
        $.proxy(this.onTransitionEnd, this)
      );
    }

    if (this.settings.responsive !== false) {
      this.on(window, 'resize', this._handlers.onThrottledResize);
    }

    if (this.settings.mouseDrag) {
      this.$element.addClass(this.options.dragClass);
      this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
        return false;
      });
    }

    if (this.settings.touchDrag) {
      this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
    }
  };

  /**
   * Handles `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragStart = function (event) {
    var stage = null;

    if (event.which === 3) {
      return;
    }

    if ($.support.transform) {
      stage = this.$stage
        .css('transform')
        .replace(/.*\(|\)| /g, '')
        .split(',');
      stage = {
        x: stage[stage.length === 16 ? 12 : 4],
        y: stage[stage.length === 16 ? 13 : 5],
      };
    } else {
      stage = this.$stage.position();
      stage = {
        x: this.settings.rtl
          ? stage.left +
            this.$stage.width() -
            this.width() +
            this.settings.margin
          : stage.left,
        y: stage.top,
      };
    }

    if (this.is('animating')) {
      $.support.transform ? this.animate(stage.x) : this.$stage.stop();
      this.invalidate('position');
    }

    this.$element.toggleClass(
      this.options.grabClass,
      event.type === 'mousedown'
    );

    this.speed(0);

    this._drag.time = new Date().getTime();
    this._drag.target = $(event.target);
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this.pointer(event);

    $(document).on(
      'mouseup.owl.core touchend.owl.core',
      $.proxy(this.onDragEnd, this)
    );

    $(document).one(
      'mousemove.owl.core touchmove.owl.core',
      $.proxy(function (event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event));

        $(document).on(
          'mousemove.owl.core touchmove.owl.core',
          $.proxy(this.onDragMove, this)
        );

        if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
          return;
        }

        event.preventDefault();

        this.enter('dragging');
        this.trigger('drag');
      }, this)
    );
  };

  /**
   * Handles the `touchmove` and `mousemove` events.
   * @todo #261
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragMove = function (event) {
    var minimum = null,
      maximum = null,
      pull = null,
      delta = this.difference(this._drag.pointer, this.pointer(event)),
      stage = this.difference(this._drag.stage.start, delta);

    if (!this.is('dragging')) {
      return;
    }

    event.preventDefault();

    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = this.coordinates(this.maximum() + 1) - minimum;
      stage.x =
        ((((stage.x - minimum) % maximum) + maximum) % maximum) + minimum;
    } else {
      minimum = this.settings.rtl
        ? this.coordinates(this.maximum())
        : this.coordinates(this.minimum());
      maximum = this.settings.rtl
        ? this.coordinates(this.minimum())
        : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? (-1 * delta.x) / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }

    this._drag.stage.current = stage;

    this.animate(stage.x);
  };

  /**
   * Handles the `touchend` and `mouseup` events.
   * @todo #261
   * @todo Threshold for click event
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onDragEnd = function (event) {
    var delta = this.difference(this._drag.pointer, this.pointer(event)),
      stage = this._drag.stage.current,
      direction = (delta.x > 0) ^ this.settings.rtl ? 'left' : 'right';

    $(document).off('.owl.core');

    this.$element.removeClass(this.options.grabClass);

    if ((delta.x !== 0 && this.is('dragging')) || !this.is('valid')) {
      this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
      this.current(
        this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction)
      );
      this.invalidate('position');
      this.update();

      this._drag.direction = direction;

      if (
        Math.abs(delta.x) > 3 ||
        new Date().getTime() - this._drag.time > 300
      ) {
        this._drag.target.one('click.owl.core', function () {
          return false;
        });
      }
    }

    if (!this.is('dragging')) {
      return;
    }

    this.leave('dragging');
    this.trigger('dragged');
  };

  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @protected
   * @param {Number} coordinate - The coordinate in pixel.
   * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
   * @return {Number} - The absolute position of the closest item.
   */
  Owl.prototype.closest = function (coordinate, direction) {
    var position = -1,
      pull = 30,
      width = this.width(),
      coordinates = this.coordinates();

    if (!this.settings.freeDrag) {
      // check closest item
      $.each(
        coordinates,
        $.proxy(function (index, value) {
          // on a left pull, check on current index
          if (
            direction === 'left' &&
            coordinate > value - pull &&
            coordinate < value + pull
          ) {
            position = index;
            // on a right pull, check on previous index
            // to do so, subtract width from value and set position = index + 1
          } else if (
            direction === 'right' &&
            coordinate > value - width - pull &&
            coordinate < value - width + pull
          ) {
            position = index + 1;
          } else if (
            this.op(coordinate, '<', value) &&
            this.op(
              coordinate,
              '>',
              coordinates[index + 1] !== undefined
                ? coordinates[index + 1]
                : value - width
            )
          ) {
            position = direction === 'left' ? index + 1 : index;
          }
          return position === -1;
        }, this)
      );
    }

    if (!this.settings.loop) {
      // non loop boundries
      if (this.op(coordinate, '>', coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }

    return position;
  };

  /**
   * Animates the stage.
   * @todo #270
   * @public
   * @param {Number} coordinate - The coordinate in pixels.
   */
  Owl.prototype.animate = function (coordinate) {
    var animate = this.speed() > 0;

    this.is('animating') && this.onTransitionEnd();

    if (animate) {
      this.enter('animating');
      this.trigger('translate');
    }

    if ($.support.transform3d && $.support.transition) {
      this.$stage.css({
        transform: 'translate3d(' + coordinate + 'px,0px,0px)',
        transition:
          this.speed() / 1000 +
          's' +
          (this.settings.slideTransition
            ? ' ' + this.settings.slideTransition
            : ''),
      });
    } else if (animate) {
      this.$stage.animate(
        {
          left: coordinate + 'px',
        },
        this.speed(),
        this.settings.fallbackEasing,
        $.proxy(this.onTransitionEnd, this)
      );
    } else {
      this.$stage.css({
        left: coordinate + 'px',
      });
    }
  };

  /**
   * Checks whether the carousel is in a specific state or not.
   * @param {String} state - The state to check.
   * @returns {Boolean} - The flag which indicates if the carousel is busy.
   */
  Owl.prototype.is = function (state) {
    return this._states.current[state] && this._states.current[state] > 0;
  };

  /**
   * Sets the absolute position of the current item.
   * @public
   * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
   * @returns {Number} - The absolute position of the current item.
   */
  Owl.prototype.current = function (position) {
    if (position === undefined) {
      return this._current;
    }

    if (this._items.length === 0) {
      return undefined;
    }

    position = this.normalize(position);

    if (this._current !== position) {
      var event = this.trigger('change', {
        property: { name: 'position', value: position },
      });

      if (event.data !== undefined) {
        position = this.normalize(event.data);
      }

      this._current = position;

      this.invalidate('position');

      this.trigger('changed', {
        property: { name: 'position', value: this._current },
      });
    }

    return this._current;
  };

  /**
   * Invalidates the given part of the update routine.
   * @param {String} [part] - The part to invalidate.
   * @returns {Array.<String>} - The invalidated parts.
   */
  Owl.prototype.invalidate = function (part) {
    if ($.type(part) === 'string') {
      this._invalidated[part] = true;
      this.is('valid') && this.leave('valid');
    }
    return $.map(this._invalidated, function (v, i) {
      return i;
    });
  };

  /**
   * Resets the absolute position of the current item.
   * @public
   * @param {Number} position - The absolute position of the new item.
   */
  Owl.prototype.reset = function (position) {
    position = this.normalize(position);

    if (position === undefined) {
      return;
    }

    this._speed = 0;
    this._current = position;

    this.suppress(['translate', 'translated']);

    this.animate(this.coordinates(position));

    this.release(['translate', 'translated']);
  };

  /**
   * Normalizes an absolute or a relative position of an item.
   * @public
   * @param {Number} position - The absolute or relative position to normalize.
   * @param {Boolean} [relative=false] - Whether the given position is relative or not.
   * @returns {Number} - The normalized position.
   */
  Owl.prototype.normalize = function (position, relative) {
    var n = this._items.length,
      m = relative ? 0 : this._clones.length;

    if (!this.isNumeric(position) || n < 1) {
      position = undefined;
    } else if (position < 0 || position >= n + m) {
      position = ((((position - m / 2) % n) + n) % n) + m / 2;
    }

    return position;
  };

  /**
   * Converts an absolute position of an item into a relative one.
   * @public
   * @param {Number} position - The absolute position to convert.
   * @returns {Number} - The converted position.
   */
  Owl.prototype.relative = function (position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  };

  /**
   * Gets the maximum position for the current item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */
  Owl.prototype.maximum = function (relative) {
    var settings = this.settings,
      maximum = this._coordinates.length,
      iterator,
      reciprocalItemsWidth,
      elementWidth;

    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      iterator = this._items.length;
      if (iterator) {
        reciprocalItemsWidth = this._items[--iterator].width();
        elementWidth = this.$element.width();
        while (iterator--) {
          reciprocalItemsWidth +=
            this._items[iterator].width() + this.settings.margin;
          if (reciprocalItemsWidth > elementWidth) {
            break;
          }
        }
      }
      maximum = iterator + 1;
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - settings.items;
    }

    if (relative) {
      maximum -= this._clones.length / 2;
    }

    return Math.max(maximum, 0);
  };

  /**
   * Gets the minimum position for the current item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */
  Owl.prototype.minimum = function (relative) {
    return relative ? 0 : this._clones.length / 2;
  };

  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */
  Owl.prototype.items = function (position) {
    if (position === undefined) {
      return this._items.slice();
    }

    position = this.normalize(position, true);
    return this._items[position];
  };

  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */
  Owl.prototype.mergers = function (position) {
    if (position === undefined) {
      return this._mergers.slice();
    }

    position = this.normalize(position, true);
    return this._mergers[position];
  };

  /**
   * Gets the absolute positions of clones for an item.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
   */
  Owl.prototype.clones = function (position) {
    var odd = this._clones.length / 2,
      even = odd + this._items.length,
      map = function (index) {
        return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
      };

    if (position === undefined) {
      return $.map(this._clones, function (v, i) {
        return map(i);
      });
    }

    return $.map(this._clones, function (v, i) {
      return v === position ? map(i) : null;
    });
  };

  /**
   * Sets the current animation speed.
   * @public
   * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns {Number} - The current animation speed in milliseconds.
   */
  Owl.prototype.speed = function (speed) {
    if (speed !== undefined) {
      this._speed = speed;
    }

    return this._speed;
  };

  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @public
   * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
   * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
   */
  Owl.prototype.coordinates = function (position) {
    var multiplier = 1,
      newPosition = position - 1,
      coordinate;

    if (position === undefined) {
      return $.map(
        this._coordinates,
        $.proxy(function (coordinate, index) {
          return this.coordinates(index);
        }, this)
      );
    }

    if (this.settings.center) {
      if (this.settings.rtl) {
        multiplier = -1;
        newPosition = position + 1;
      }

      coordinate = this._coordinates[position];
      coordinate +=
        ((this.width() - coordinate + (this._coordinates[newPosition] || 0)) /
          2) *
        multiplier;
    } else {
      coordinate = this._coordinates[newPosition] || 0;
    }

    coordinate = Math.ceil(coordinate);

    return coordinate;
  };

  /**
   * Calculates the speed for a translation.
   * @protected
   * @param {Number} from - The absolute position of the start item.
   * @param {Number} to - The absolute position of the target item.
   * @param {Number} [factor=undefined] - The time factor in milliseconds.
   * @returns {Number} - The time in milliseconds for the translation.
   */
  Owl.prototype.duration = function (from, to, factor) {
    if (factor === 0) {
      return 0;
    }

    return (
      Math.min(Math.max(Math.abs(to - from), 1), 6) *
      Math.abs(factor || this.settings.smartSpeed)
    );
  };

  /**
   * Slides to the specified item.
   * @public
   * @param {Number} position - The position of the item.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.to = function (position, speed) {
    var current = this.current(),
      revert = null,
      distance = position - this.relative(current),
      direction = (distance > 0) - (distance < 0),
      items = this._items.length,
      minimum = this.minimum(),
      maximum = this.maximum();

    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }

      position = current + distance;
      revert = ((((position - minimum) % items) + items) % items) + minimum;

      if (
        revert !== position &&
        revert - distance <= maximum &&
        revert - distance > 0
      ) {
        current = revert - distance;
        position = revert;
        this.reset(current);
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = ((position % maximum) + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }

    this.speed(this.duration(current, position, speed));
    this.current(position);

    if (this.isVisible()) {
      this.update();
    }
  };

  /**
   * Slides to the next item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.next = function (speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  };

  /**
   * Slides to the previous item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */
  Owl.prototype.prev = function (speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  };

  /**
   * Handles the end of an animation.
   * @protected
   * @param {Event} event - The event arguments.
   */
  Owl.prototype.onTransitionEnd = function (event) {
    // if css2 animation then event object is undefined
    if (event !== undefined) {
      event.stopPropagation();

      // Catch only owl-stage transitionEnd event
      if (
        (event.target || event.srcElement || event.originalTarget) !==
        this.$stage.get(0)
      ) {
        return false;
      }
    }

    this.leave('animating');
    this.trigger('translated');
  };

  /**
   * Gets viewport width.
   * @protected
   * @return {Number} - The width in pixel.
   */
  Owl.prototype.viewport = function () {
    var width;
    if (this.options.responsiveBaseElement !== window) {
      width = $(this.options.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (
      document.documentElement &&
      document.documentElement.clientWidth
    ) {
      width = document.documentElement.clientWidth;
    } else {
      console.warn('Can not detect viewport width.');
    }
    return width;
  };

  /**
   * Replaces the current content.
   * @public
   * @param {HTMLElement|jQuery|String} content - The new content.
   */
  Owl.prototype.replace = function (content) {
    this.$stage.empty();
    this._items = [];

    if (content) {
      content = content instanceof jQuery ? content : $(content);
    }

    if (this.settings.nestedItemSelector) {
      content = content.find('.' + this.settings.nestedItemSelector);
    }

    content
      .filter(function () {
        return this.nodeType === 1;
      })
      .each(
        $.proxy(function (index, item) {
          item = this.prepare(item);
          this.$stage.append(item);
          this._items.push(item);
          this._mergers.push(
            item
              .find('[data-merge]')
              .addBack('[data-merge]')
              .attr('data-merge') * 1 || 1
          );
        }, this)
      );

    this.reset(
      this.isNumeric(this.settings.startPosition)
        ? this.settings.startPosition
        : 0
    );

    this.invalidate('items');
  };

  /**
   * Adds an item.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {HTMLElement|jQuery|String} content - The item content to add.
   * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
   */
  Owl.prototype.add = function (content, position) {
    var current = this.relative(this._current);

    position =
      position === undefined
        ? this._items.length
        : this.normalize(position, true);
    content = content instanceof jQuery ? content : $(content);

    this.trigger('add', { content: content, position: position });

    content = this.prepare(content);

    if (this._items.length === 0 || position === this._items.length) {
      this._items.length === 0 && this.$stage.append(content);
      this._items.length !== 0 && this._items[position - 1].after(content);
      this._items.push(content);
      this._mergers.push(
        content
          .find('[data-merge]')
          .addBack('[data-merge]')
          .attr('data-merge') * 1 || 1
      );
    } else {
      this._items[position].before(content);
      this._items.splice(position, 0, content);
      this._mergers.splice(
        position,
        0,
        content
          .find('[data-merge]')
          .addBack('[data-merge]')
          .attr('data-merge') * 1 || 1
      );
    }

    this._items[current] && this.reset(this._items[current].index());

    this.invalidate('items');

    this.trigger('added', { content: content, position: position });
  };

  /**
   * Removes an item by its position.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {Number} position - The relative position of the item to remove.
   */
  Owl.prototype.remove = function (position) {
    position = this.normalize(position, true);

    if (position === undefined) {
      return;
    }

    this.trigger('remove', {
      content: this._items[position],
      position: position,
    });

    this._items[position].remove();
    this._items.splice(position, 1);
    this._mergers.splice(position, 1);

    this.invalidate('items');

    this.trigger('removed', { content: null, position: position });
  };

  /**
   * Preloads images with auto width.
   * @todo Replace by a more generic approach
   * @protected
   */
  Owl.prototype.preloadAutoWidthImages = function (images) {
    images.each(
      $.proxy(function (i, element) {
        this.enter('pre-loading');
        element = $(element);
        $(new Image())
          .one(
            'load',
            $.proxy(function (e) {
              element.attr('src', e.target.src);
              element.css('opacity', 1);
              this.leave('pre-loading');
              !this.is('pre-loading') &&
                !this.is('initializing') &&
                this.refresh();
            }, this)
          )
          .attr(
            'src',
            element.attr('src') ||
              element.attr('data-src') ||
              element.attr('data-src-retina')
          );
      }, this)
    );
  };

  /**
   * Destroys the carousel.
   * @public
   */
  Owl.prototype.destroy = function () {
    this.$element.off('.owl.core');
    this.$stage.off('.owl.core');
    $(document).off('.owl.core');

    if (this.settings.responsive !== false) {
      window.clearTimeout(this.resizeTimer);
      this.off(window, 'resize', this._handlers.onThrottledResize);
    }

    for (var i in this._plugins) {
      this._plugins[i].destroy();
    }

    this.$stage.children('.cloned').remove();

    this.$stage.unwrap();
    this.$stage.children().contents().unwrap();
    this.$stage.children().unwrap();
    this.$stage.remove();
    this.$element
      .removeClass(this.options.refreshClass)
      .removeClass(this.options.loadingClass)
      .removeClass(this.options.loadedClass)
      .removeClass(this.options.rtlClass)
      .removeClass(this.options.dragClass)
      .removeClass(this.options.grabClass)
      .attr(
        'class',
        this.$element
          .attr('class')
          .replace(
            new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'),
            ''
          )
      )
      .removeData('owl.carousel');
  };

  /**
   * Operators to calculate right-to-left and left-to-right.
   * @protected
   * @param {Number} [a] - The left side operand.
   * @param {String} [o] - The operator.
   * @param {Number} [b] - The right side operand.
   */
  Owl.prototype.op = function (a, o, b) {
    var rtl = this.settings.rtl;
    switch (o) {
      case '<':
        return rtl ? a > b : a < b;
      case '>':
        return rtl ? a < b : a > b;
      case '>=':
        return rtl ? a <= b : a >= b;
      case '<=':
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
  };

  /**
   * Attaches to an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The event handler to attach.
   * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
   */
  Owl.prototype.on = function (element, event, listener, capture) {
    if (element.addEventListener) {
      element.addEventListener(event, listener, capture);
    } else if (element.attachEvent) {
      element.attachEvent('on' + event, listener);
    }
  };

  /**
   * Detaches from an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The attached event handler to detach.
   * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
   */
  Owl.prototype.off = function (element, event, listener, capture) {
    if (element.removeEventListener) {
      element.removeEventListener(event, listener, capture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + event, listener);
    }
  };

  /**
   * Triggers a public event.
   * @todo Remove `status`, `relatedTarget` should be used instead.
   * @protected
   * @param {String} name - The event name.
   * @param {*} [data=null] - The event data.
   * @param {String} [namespace=carousel] - The event namespace.
   * @param {String} [state] - The state which is associated with the event.
   * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
   * @returns {Event} - The event arguments.
   */
  Owl.prototype.trigger = function (name, data, namespace, state, enter) {
    var status = {
        item: { count: this._items.length, index: this.current() },
      },
      handler = $.camelCase(
        $.grep(['on', name, namespace], function (v) {
          return v;
        })
          .join('-')
          .toLowerCase()
      ),
      event = $.Event(
        [name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
        $.extend({ relatedTarget: this }, status, data)
      );

    if (!this._supress[name]) {
      $.each(this._plugins, function (name, plugin) {
        if (plugin.onTrigger) {
          plugin.onTrigger(event);
        }
      });

      this.register({ type: Owl.Type.Event, name: name });
      this.$element.trigger(event);

      if (this.settings && typeof this.settings[handler] === 'function') {
        this.settings[handler].call(this, event);
      }
    }

    return event;
  };

  /**
   * Enters a state.
   * @param name - The state name.
   */
  Owl.prototype.enter = function (name) {
    $.each(
      [name].concat(this._states.tags[name] || []),
      $.proxy(function (i, name) {
        if (this._states.current[name] === undefined) {
          this._states.current[name] = 0;
        }

        this._states.current[name]++;
      }, this)
    );
  };

  /**
   * Leaves a state.
   * @param name - The state name.
   */
  Owl.prototype.leave = function (name) {
    $.each(
      [name].concat(this._states.tags[name] || []),
      $.proxy(function (i, name) {
        this._states.current[name]--;
      }, this)
    );
  };

  /**
   * Registers an event or state.
   * @public
   * @param {Object} object - The event or state to register.
   */
  Owl.prototype.register = function (object) {
    if (object.type === Owl.Type.Event) {
      if (!$.event.special[object.name]) {
        $.event.special[object.name] = {};
      }

      if (!$.event.special[object.name].owl) {
        var _default = $.event.special[object.name]._default;
        $.event.special[object.name]._default = function (e) {
          if (
            _default &&
            _default.apply &&
            (!e.namespace || e.namespace.indexOf('owl') === -1)
          ) {
            return _default.apply(this, arguments);
          }
          return e.namespace && e.namespace.indexOf('owl') > -1;
        };
        $.event.special[object.name].owl = true;
      }
    } else if (object.type === Owl.Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(
          object.tags
        );
      }

      this._states.tags[object.name] = $.grep(
        this._states.tags[object.name],
        $.proxy(function (tag, i) {
          return $.inArray(tag, this._states.tags[object.name]) === i;
        }, this)
      );
    }
  };

  /**
   * Suppresses events.
   * @protected
   * @param {Array.<String>} events - The events to suppress.
   */
  Owl.prototype.suppress = function (events) {
    $.each(
      events,
      $.proxy(function (index, event) {
        this._supress[event] = true;
      }, this)
    );
  };

  /**
   * Releases suppressed events.
   * @protected
   * @param {Array.<String>} events - The events to release.
   */
  Owl.prototype.release = function (events) {
    $.each(
      events,
      $.proxy(function (index, event) {
        delete this._supress[event];
      }, this)
    );
  };

  /**
   * Gets unified pointer coordinates from event.
   * @todo #261
   * @protected
   * @param {Event} - The `mousedown` or `touchstart` event.
   * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
   */
  Owl.prototype.pointer = function (event) {
    var result = { x: null, y: null };

    event = event.originalEvent || event || window.event;

    event =
      event.touches && event.touches.length
        ? event.touches[0]
        : event.changedTouches && event.changedTouches.length
        ? event.changedTouches[0]
        : event;

    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }

    return result;
  };

  /**
   * Determines if the input is a Number or something that can be coerced to a Number
   * @protected
   * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
   * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
   */
  Owl.prototype.isNumeric = function (number) {
    return !isNaN(parseFloat(number));
  };

  /**
   * Gets the difference of two vectors.
   * @todo #261
   * @protected
   * @param {Object} - The first vector.
   * @param {Object} - The second vector.
   * @returns {Object} - The difference.
   */
  Owl.prototype.difference = function (first, second) {
    return {
      x: first.x - second.x,
      y: first.y - second.y,
    };
  };

  /**
   * The jQuery Plugin for the Owl Carousel
   * @todo Navigation plugin `next` and `prev`
   * @public
   */
  $.fn.owlCarousel = function (option) {
    var args = Array.prototype.slice.call(arguments, 1);

    return this.each(function () {
      var $this = $(this),
        data = $this.data('owl.carousel');

      if (!data) {
        data = new Owl(this, typeof option == 'object' && option);
        $this.data('owl.carousel', data);

        $.each(
          [
            'next',
            'prev',
            'to',
            'destroy',
            'refresh',
            'replace',
            'add',
            'remove',
          ],
          function (i, event) {
            data.register({ type: Owl.Type.Event, name: event });
            data.$element.on(
              event + '.owl.carousel.core',
              $.proxy(function (e) {
                if (e.namespace && e.relatedTarget !== this) {
                  this.suppress([event]);
                  data[event].apply(this, [].slice.call(arguments, 1));
                  this.release([event]);
                }
              }, data)
            );
          }
        );
      }

      if (typeof option == 'string' && option.charAt(0) !== '_') {
        data[option].apply(data, args);
      }
    });
  };

  /**
   * The constructor for the jQuery Plugin
   * @public
   */
  $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
  /**
   * Creates the auto refresh plugin.
   * @class The Auto Refresh Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var AutoRefresh = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Refresh interval.
     * @protected
     * @type {number}
     */
    this._interval = null;

    /**
     * Whether the element is currently visible or not.
     * @protected
     * @type {Boolean}
     */
    this._visible = null;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoRefresh) {
          this.watch();
        }
      }, this),
    };

    // set default options
    this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   */
  AutoRefresh.Defaults = {
    autoRefresh: true,
    autoRefreshInterval: 500,
  };

  /**
   * Watches the element.
   */
  AutoRefresh.prototype.watch = function () {
    if (this._interval) {
      return;
    }

    this._visible = this._core.isVisible();
    this._interval = window.setInterval(
      $.proxy(this.refresh, this),
      this._core.settings.autoRefreshInterval
    );
  };

  /**
   * Refreshes the element.
   */
  AutoRefresh.prototype.refresh = function () {
    if (this._core.isVisible() === this._visible) {
      return;
    }

    this._visible = !this._visible;

    this._core.$element.toggleClass('owl-hidden', !this._visible);

    this._visible && this._core.invalidate('width') && this._core.refresh();
  };

  /**
   * Destroys the plugin.
   */
  AutoRefresh.prototype.destroy = function () {
    var handler, property;

    window.clearInterval(this._interval);

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
  /**
   * Creates the lazy plugin.
   * @class The Lazy Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Lazy = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Already loaded items.
     * @protected
     * @type {Array.<jQuery>}
     */
    this._loaded = [];

    /**
     * Event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel change.owl.carousel resized.owl.carousel':
        $.proxy(function (e) {
          if (!e.namespace) {
            return;
          }

          if (!this._core.settings || !this._core.settings.lazyLoad) {
            return;
          }

          if (
            (e.property && e.property.name == 'position') ||
            e.type == 'initialized'
          ) {
            var settings = this._core.settings,
              n =
                (settings.center && Math.ceil(settings.items / 2)) ||
                settings.items,
              i = (settings.center && n * -1) || 0,
              position =
                (e.property && e.property.value !== undefined
                  ? e.property.value
                  : this._core.current()) + i,
              clones = this._core.clones().length,
              load = $.proxy(function (i, v) {
                this.load(v);
              }, this);
            //TODO: Need documentation for this new option
            if (settings.lazyLoadEager > 0) {
              n += settings.lazyLoadEager;
              // If the carousel is looping also preload images that are to the "left"
              if (settings.loop) {
                position -= settings.lazyLoadEager;
                n++;
              }
            }

            while (i++ < n) {
              this.load(clones / 2 + this._core.relative(position));
              clones &&
                $.each(this._core.clones(this._core.relative(position)), load);
              position++;
            }
          }
        }, this),
    };

    // set the default options
    this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

    // register event handler
    this._core.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   */
  Lazy.Defaults = {
    lazyLoad: false,
    lazyLoadEager: 0,
  };

  /**
   * Loads all resources of an item at the specified position.
   * @param {Number} position - The absolute position of the item.
   * @protected
   */
  Lazy.prototype.load = function (position) {
    var $item = this._core.$stage.children().eq(position),
      $elements = $item && $item.find('.owl-lazy');

    if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
      return;
    }

    $elements.each(
      $.proxy(function (index, element) {
        var $element = $(element),
          image,
          url =
            (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) ||
            $element.attr('data-src') ||
            $element.attr('data-srcset');

        this._core.trigger('load', { element: $element, url: url }, 'lazy');

        if ($element.is('img')) {
          $element
            .one(
              'load.owl.lazy',
              $.proxy(function () {
                $element.css('opacity', 1);
                this._core.trigger(
                  'loaded',
                  { element: $element, url: url },
                  'lazy'
                );
              }, this)
            )
            .attr('src', url);
        } else if ($element.is('source')) {
          $element
            .one(
              'load.owl.lazy',
              $.proxy(function () {
                this._core.trigger(
                  'loaded',
                  { element: $element, url: url },
                  'lazy'
                );
              }, this)
            )
            .attr('srcset', url);
        } else {
          image = new Image();
          image.onload = $.proxy(function () {
            $element.css({
              'background-image': 'url("' + url + '")',
              opacity: '1',
            });
            this._core.trigger(
              'loaded',
              { element: $element, url: url },
              'lazy'
            );
          }, this);
          image.src = url;
        }
      }, this)
    );

    this._loaded.push($item.get(0));
  };

  /**
   * Destroys the plugin.
   * @public
   */
  Lazy.prototype.destroy = function () {
    var handler, property;

    for (handler in this.handlers) {
      this._core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
  /**
   * Creates the auto height plugin.
   * @class The Auto Height Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var AutoHeight = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    this._previousHeight = null;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoHeight) {
          this.update();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (
          e.namespace &&
          this._core.settings.autoHeight &&
          e.property.name === 'position'
        ) {
          this.update();
        }
      }, this),
      'loaded.owl.lazy': $.proxy(function (e) {
        if (
          e.namespace &&
          this._core.settings.autoHeight &&
          e.element.closest('.' + this._core.settings.itemClass).index() ===
            this._core.current()
        ) {
          this.update();
        }
      }, this),
    };

    // set default options
    this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);
    this._intervalId = null;
    var refThis = this;

    // These changes have been taken from a PR by gavrochelegnou proposed in #1575
    // and have been made compatible with the latest jQuery version
    $(window).on('load', function () {
      if (refThis._core.settings.autoHeight) {
        refThis.update();
      }
    });

    // Autoresize the height of the carousel when window is resized
    // When carousel has images, the height is dependent on the width
    // and should also change on resize
    $(window).resize(function () {
      if (refThis._core.settings.autoHeight) {
        if (refThis._intervalId != null) {
          clearTimeout(refThis._intervalId);
        }

        refThis._intervalId = setTimeout(function () {
          refThis.update();
        }, 250);
      }
    });
  };

  /**
   * Default options.
   * @public
   */
  AutoHeight.Defaults = {
    autoHeight: false,
    autoHeightClass: 'owl-height',
  };

  /**
   * Updates the view.
   */
  AutoHeight.prototype.update = function () {
    var start = this._core._current,
      end = start + this._core.settings.items,
      lazyLoadEnabled = this._core.settings.lazyLoad,
      visible = this._core.$stage.children().toArray().slice(start, end),
      heights = [],
      maxheight = 0;

    $.each(visible, function (index, item) {
      heights.push($(item).height());
    });

    maxheight = Math.max.apply(null, heights);

    if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
      maxheight = this._previousHeight;
    }

    this._previousHeight = maxheight;

    this._core.$stage
      .parent()
      .height(maxheight)
      .addClass(this._core.settings.autoHeightClass);
  };

  AutoHeight.prototype.destroy = function () {
    var handler, property;

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] !== 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
  /**
   * Creates the video plugin.
   * @class The Video Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Video = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Cache all video URLs.
     * @protected
     * @type {Object}
     */
    this._videos = {};

    /**
     * Current playing item.
     * @protected
     * @type {jQuery}
     */
    this._playing = null;

    /**
     * All event handlers.
     * @todo The cloned content removale is too late
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace) {
          this._core.register({
            type: 'state',
            name: 'playing',
            tags: ['interacting'],
          });
        }
      }, this),
      'resize.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
          e.preventDefault();
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.is('resizing')) {
          this._core.$stage.find('.cloned .owl-video-frame').remove();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name === 'position' && this._playing) {
          this.stop();
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function (e) {
        if (!e.namespace) {
          return;
        }

        var $element = $(e.content).find('.owl-video');

        if ($element.length) {
          $element.css('display', 'none');
          this.fetch($element, $(e.content));
        }
      }, this),
    };

    // set default options
    this._core.options = $.extend({}, Video.Defaults, this._core.options);

    // register event handlers
    this._core.$element.on(this._handlers);

    this._core.$element.on(
      'click.owl.video',
      '.owl-video-play-icon',
      $.proxy(function (e) {
        this.play(e);
      }, this)
    );
  };

  /**
   * Default options.
   * @public
   */
  Video.Defaults = {
    video: false,
    videoHeight: false,
    videoWidth: false,
  };

  /**
   * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {jQuery} item - The item containing the video.
   */
  Video.prototype.fetch = function (target, item) {
    var type = (function () {
        if (target.attr('data-vimeo-id')) {
          return 'vimeo';
        } else if (target.attr('data-vzaar-id')) {
          return 'vzaar';
        } else {
          return 'youtube';
        }
      })(),
      id =
        target.attr('data-vimeo-id') ||
        target.attr('data-youtube-id') ||
        target.attr('data-vzaar-id'),
      width = target.attr('data-width') || this._core.settings.videoWidth,
      height = target.attr('data-height') || this._core.settings.videoHeight,
      url = target.attr('href');

    if (url) {
      /*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

      id = url.match(
        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
      );

      if (id[3].indexOf('youtu') > -1) {
        type = 'youtube';
      } else if (id[3].indexOf('vimeo') > -1) {
        type = 'vimeo';
      } else if (id[3].indexOf('vzaar') > -1) {
        type = 'vzaar';
      } else {
        throw new Error('Video URL not supported.');
      }
      id = id[6];
    } else {
      throw new Error('Missing video URL.');
    }

    this._videos[url] = {
      type: type,
      id: id,
      width: width,
      height: height,
    };

    item.attr('data-video', url);

    this.thumbnail(target, this._videos[url]);
  };

  /**
   * Creates video thumbnail.
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {Object} info - The video info object.
   * @see `fetch`
   */
  Video.prototype.thumbnail = function (target, video) {
    var tnLink,
      icon,
      path,
      dimensions =
        video.width && video.height
          ? 'width:' + video.width + 'px;height:' + video.height + 'px;'
          : '',
      customTn = target.find('img'),
      srcType = 'src',
      lazyClass = '',
      settings = this._core.settings,
      create = function (path) {
        icon = '<div class="owl-video-play-icon"></div>';

        if (settings.lazyLoad) {
          tnLink = $('<div/>', {
            class: 'owl-video-tn ' + lazyClass,
            srcType: path,
          });
        } else {
          tnLink = $('<div/>', {
            class: 'owl-video-tn',
            style: 'opacity:1;background-image:url(' + path + ')',
          });
        }
        target.after(tnLink);
        target.after(icon);
      };

    // wrap video content into owl-video-wrapper div
    target.wrap(
      $('<div/>', {
        class: 'owl-video-wrapper',
        style: dimensions,
      })
    );

    if (this._core.settings.lazyLoad) {
      srcType = 'data-src';
      lazyClass = 'owl-lazy';
    }

    // custom thumbnail
    if (customTn.length) {
      create(customTn.attr(srcType));
      customTn.remove();
      return false;
    }

    if (video.type === 'youtube') {
      path = '//img.youtube.com/vi/' + video.id + '/hqdefault.jpg';
      create(path);
    } else if (video.type === 'vimeo') {
      $.ajax({
        type: 'GET',
        url: '//vimeo.com/api/v2/video/' + video.id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function (data) {
          path = data[0].thumbnail_large;
          create(path);
        },
      });
    } else if (video.type === 'vzaar') {
      $.ajax({
        type: 'GET',
        url: '//vzaar.com/api/videos/' + video.id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function (data) {
          path = data.framegrab_url;
          create(path);
        },
      });
    }
  };

  /**
   * Stops the current video.
   * @public
   */
  Video.prototype.stop = function () {
    this._core.trigger('stop', null, 'video');
    this._playing.find('.owl-video-frame').remove();
    this._playing.removeClass('owl-video-playing');
    this._playing = null;
    this._core.leave('playing');
    this._core.trigger('stopped', null, 'video');
  };

  /**
   * Starts the current video.
   * @public
   * @param {Event} event - The event arguments.
   */
  Video.prototype.play = function (event) {
    var target = $(event.target),
      item = target.closest('.' + this._core.settings.itemClass),
      video = this._videos[item.attr('data-video')],
      width = video.width || '100%',
      height = video.height || this._core.$stage.height(),
      html,
      iframe;

    if (this._playing) {
      return;
    }

    this._core.enter('playing');
    this._core.trigger('play', null, 'video');

    item = this._core.items(this._core.relative(item.index()));

    this._core.reset(item.index());

    html = $(
      '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
    );
    html.attr('height', height);
    html.attr('width', width);
    if (video.type === 'youtube') {
      html.attr(
        'src',
        '//www.youtube.com/embed/' +
          video.id +
          '?autoplay=1&rel=0&v=' +
          video.id
      );
    } else if (video.type === 'vimeo') {
      html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
    } else if (video.type === 'vzaar') {
      html.attr(
        'src',
        '//view.vzaar.com/' + video.id + '/player?autoplay=true'
      );
    }

    iframe = $(html)
      .wrap('<div class="owl-video-frame" />')
      .insertAfter(item.find('.owl-video'));

    this._playing = item.addClass('owl-video-playing');
  };

  /**
   * Checks whether an video is currently in full screen mode or not.
   * @todo Bad style because looks like a readonly method but changes members.
   * @protected
   * @returns {Boolean}
   */
  Video.prototype.isInFullScreen = function () {
    var element =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement;

    return element && $(element).parent().hasClass('owl-video-frame');
  };

  /**
   * Destroys the plugin.
   */
  Video.prototype.destroy = function () {
    var handler, property;

    this._core.$element.off('click.owl.video');

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
  /**
   * Creates the animate plugin.
   * @class The Navigation Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Animate = function (scope) {
    this.core = scope;
    this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    this.swapping = true;
    this.previous = undefined;
    this.next = undefined;

    this.handlers = {
      'change.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name == 'position') {
          this.previous = this.core.current();
          this.next = e.property.value;
        }
      }, this),
      'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(
        function (e) {
          if (e.namespace) {
            this.swapping = e.type == 'translated';
          }
        },
        this
      ),
      'translate.owl.carousel': $.proxy(function (e) {
        if (
          e.namespace &&
          this.swapping &&
          (this.core.options.animateOut || this.core.options.animateIn)
        ) {
          this.swap();
        }
      }, this),
    };

    this.core.$element.on(this.handlers);
  };

  /**
   * Default options.
   * @public
   */
  Animate.Defaults = {
    animateOut: false,
    animateIn: false,
  };

  /**
   * Toggles the animation classes whenever an translations starts.
   * @protected
   * @returns {Boolean|undefined}
   */
  Animate.prototype.swap = function () {
    if (this.core.settings.items !== 1) {
      return;
    }

    if (!$.support.animation || !$.support.transition) {
      return;
    }

    this.core.speed(0);

    var left,
      clear = $.proxy(this.clear, this),
      previous = this.core.$stage.children().eq(this.previous),
      next = this.core.$stage.children().eq(this.next),
      incoming = this.core.settings.animateIn,
      outgoing = this.core.settings.animateOut;

    if (this.core.current() === this.previous) {
      return;
    }

    if (outgoing) {
      left =
        this.core.coordinates(this.previous) - this.core.coordinates(this.next);
      previous
        .one($.support.animation.end, clear)
        .css({ left: left + 'px' })
        .addClass('animated owl-animated-out')
        .addClass(outgoing);
    }

    if (incoming) {
      next
        .one($.support.animation.end, clear)
        .addClass('animated owl-animated-in')
        .addClass(incoming);
    }
  };

  Animate.prototype.clear = function (e) {
    $(e.target)
      .css({ left: '' })
      .removeClass('animated owl-animated-out owl-animated-in')
      .removeClass(this.core.settings.animateIn)
      .removeClass(this.core.settings.animateOut);
    this.core.onTransitionEnd();
  };

  /**
   * Destroys the plugin.
   * @public
   */
  Animate.prototype.destroy = function () {
    var handler, property;

    for (handler in this.handlers) {
      this.core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
  /**
   * Creates the autoplay plugin.
   * @class The Autoplay Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Autoplay = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * The autoplay timeout id.
     * @type {Number}
     */
    this._call = null;

    /**
     * Depending on the state of the plugin, this variable contains either
     * the start time of the timer or the current timer value if it's
     * paused. Since we start in a paused state we initialize the timer
     * value.
     * @type {Number}
     */
    this._time = 0;

    /**
     * Stores the timeout currently used.
     * @type {Number}
     */
    this._timeout = 0;

    /**
     * Indicates whenever the autoplay is paused.
     * @type {Boolean}
     */
    this._paused = true;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name === 'settings') {
          if (this._core.settings.autoplay) {
            this.play();
          } else {
            this.stop();
          }
        } else if (
          e.namespace &&
          e.property.name === 'position' &&
          this._paused
        ) {
          // Reset the timer. This code is triggered when the position
          // of the carousel was changed through user interaction.
          this._time = 0;
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoplay) {
          this.play();
        }
      }, this),
      'play.owl.autoplay': $.proxy(function (e, t, s) {
        if (e.namespace) {
          this.play(t, s);
        }
      }, this),
      'stop.owl.autoplay': $.proxy(function (e) {
        if (e.namespace) {
          this.stop();
        }
      }, this),
      'mouseover.owl.autoplay': $.proxy(function () {
        if (
          this._core.settings.autoplayHoverPause &&
          this._core.is('rotating')
        ) {
          this.pause();
        }
      }, this),
      'mouseleave.owl.autoplay': $.proxy(function () {
        if (
          this._core.settings.autoplayHoverPause &&
          this._core.is('rotating')
        ) {
          this.play();
        }
      }, this),
      'touchstart.owl.core': $.proxy(function () {
        if (
          this._core.settings.autoplayHoverPause &&
          this._core.is('rotating')
        ) {
          this.pause();
        }
      }, this),
      'touchend.owl.core': $.proxy(function () {
        if (this._core.settings.autoplayHoverPause) {
          this.play();
        }
      }, this),
    };

    // register event handlers
    this._core.$element.on(this._handlers);

    // set default options
    this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
  };

  /**
   * Default options.
   * @public
   */
  Autoplay.Defaults = {
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: false,
  };

  /**
   * Transition to the next slide and set a timeout for the next transition.
   * @private
   * @param {Number} [speed] - The animation speed for the animations.
   */
  Autoplay.prototype._next = function (speed) {
    this._call = window.setTimeout(
      $.proxy(this._next, this, speed),
      this._timeout * (Math.round(this.read() / this._timeout) + 1) -
        this.read()
    );

    if (this._core.is('interacting') || document.hidden) {
      return;
    }
    this._core.next(speed || this._core.settings.autoplaySpeed);
  };

  /**
   * Reads the current timer value when the timer is playing.
   * @public
   */
  Autoplay.prototype.read = function () {
    return new Date().getTime() - this._time;
  };

  /**
   * Starts the autoplay.
   * @public
   * @param {Number} [timeout] - The interval before the next animation starts.
   * @param {Number} [speed] - The animation speed for the animations.
   */
  Autoplay.prototype.play = function (timeout, speed) {
    var elapsed;

    if (!this._core.is('rotating')) {
      this._core.enter('rotating');
    }

    timeout = timeout || this._core.settings.autoplayTimeout;

    // Calculate the elapsed time since the last transition. If the carousel
    // wasn't playing this calculation will yield zero.
    elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

    if (this._paused) {
      // Start the clock.
      this._time = this.read();
      this._paused = false;
    } else {
      // Clear the active timeout to allow replacement.
      window.clearTimeout(this._call);
    }

    // Adjust the origin of the timer to match the new timeout value.
    this._time += (this.read() % timeout) - elapsed;

    this._timeout = timeout;
    this._call = window.setTimeout(
      $.proxy(this._next, this, speed),
      timeout - elapsed
    );
  };

  /**
   * Stops the autoplay.
   * @public
   */
  Autoplay.prototype.stop = function () {
    if (this._core.is('rotating')) {
      // Reset the clock.
      this._time = 0;
      this._paused = true;

      window.clearTimeout(this._call);
      this._core.leave('rotating');
    }
  };

  /**
   * Pauses the autoplay.
   * @public
   */
  Autoplay.prototype.pause = function () {
    if (this._core.is('rotating') && !this._paused) {
      // Pause the clock.
      this._time = this.read();
      this._paused = true;

      window.clearTimeout(this._call);
    }
  };

  /**
   * Destroys the plugin.
   */
  Autoplay.prototype.destroy = function () {
    var handler, property;

    this.stop();

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
  'use strict';

  /**
   * Creates the navigation plugin.
   * @class The Navigation Plugin
   * @param {Owl} carousel - The Owl Carousel.
   */
  var Navigation = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Indicates whether the plugin is initialized or not.
     * @protected
     * @type {Boolean}
     */
    this._initialized = false;

    /**
     * The current paging indexes.
     * @protected
     * @type {Array}
     */
    this._pages = [];

    /**
     * All DOM elements of the user interface.
     * @protected
     * @type {Object}
     */
    this._controls = {};

    /**
     * Markup for an indicator.
     * @protected
     * @type {Array.<String>}
     */
    this._templates = [];

    /**
     * The carousel element.
     * @type {jQuery}
     */
    this.$element = this._core.$element;

    /**
     * Overridden methods of the carousel.
     * @protected
     * @type {Object}
     */
    this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to,
    };

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'prepared.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.push(
            '<div class="' +
              this._core.settings.dotClass +
              '">' +
              $(e.content)
                .find('[data-dot]')
                .addBack('[data-dot]')
                .attr('data-dot') +
              '</div>'
          );
        }
      }, this),
      'added.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 0, this._templates.pop());
        }
      }, this),
      'remove.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 1);
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name == 'position') {
          this.draw();
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && !this._initialized) {
          this._core.trigger('initialize', null, 'navigation');
          this.initialize();
          this.update();
          this.draw();
          this._initialized = true;
          this._core.trigger('initialized', null, 'navigation');
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._initialized) {
          this._core.trigger('refresh', null, 'navigation');
          this.update();
          this.draw();
          this._core.trigger('refreshed', null, 'navigation');
        }
      }, this),
    };

    // set default options
    this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

    // register event handlers
    this.$element.on(this._handlers);
  };

  /**
   * Default options.
   * @public
   * @todo Rename `slideBy` to `navBy`
   */
  Navigation.Defaults = {
    nav: false,
    navText: [
      '<span aria-label="' + 'Previous' + '">&#x2039;</span>',
      '<span aria-label="' + 'Next' + '">&#x203a;</span>',
    ],
    navSpeed: false,
    navElement: 'button type="button" role="presentation"',
    navContainer: false,
    navContainerClass: 'owl-nav',
    navClass: ['owl-prev', 'owl-next'],
    slideBy: 1,
    dotClass: 'owl-dot',
    dotsClass: 'owl-dots',
    dots: true,
    dotsEach: false,
    dotsData: false,
    dotsSpeed: false,
    dotsContainer: false,
  };

  /**
   * Initializes the layout of the plugin and extends the carousel.
   * @protected
   */
  Navigation.prototype.initialize = function () {
    var override,
      settings = this._core.settings;

    // create DOM structure for relative navigation
    this._controls.$relative = (
      settings.navContainer
        ? $(settings.navContainer)
        : $('<div>')
            .addClass(settings.navContainerClass)
            .appendTo(this.$element)
    ).addClass('disabled');

    this._controls.$previous = $('<' + settings.navElement + '>')
      .addClass(settings.navClass[0])
      .html(settings.navText[0])
      .prependTo(this._controls.$relative)
      .on(
        'click',
        $.proxy(function (e) {
          this.prev(settings.navSpeed);
        }, this)
      );
    this._controls.$next = $('<' + settings.navElement + '>')
      .addClass(settings.navClass[1])
      .html(settings.navText[1])
      .appendTo(this._controls.$relative)
      .on(
        'click',
        $.proxy(function (e) {
          this.next(settings.navSpeed);
        }, this)
      );

    // create DOM structure for absolute navigation
    if (!settings.dotsData) {
      this._templates = [
        $('<button role="button">')
          .addClass(settings.dotClass)
          .append($('<span>'))
          .prop('outerHTML'),
      ];
    }

    this._controls.$absolute = (
      settings.dotsContainer
        ? $(settings.dotsContainer)
        : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)
    ).addClass('disabled');

    this._controls.$absolute.on(
      'click',
      'button',
      $.proxy(function (e) {
        var index = $(e.target).parent().is(this._controls.$absolute)
          ? $(e.target).index()
          : $(e.target).parent().index();

        e.preventDefault();

        this.to(index, settings.dotsSpeed);
      }, this)
    );

    /*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

    // override public methods of the carousel
    for (override in this._overrides) {
      this._core[override] = $.proxy(this[override], this);
    }
  };

  /**
   * Destroys the plugin.
   * @protected
   */
  Navigation.prototype.destroy = function () {
    var handler, control, property, override, settings;
    settings = this._core.settings;

    for (handler in this._handlers) {
      this.$element.off(handler, this._handlers[handler]);
    }
    for (control in this._controls) {
      if (control === '$relative' && settings.navContainer) {
        this._controls[control].html('');
      } else {
        this._controls[control].remove();
      }
    }
    for (override in this.overides) {
      this._core[override] = this._overrides[override];
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  /**
   * Updates the internal state.
   * @protected
   */
  Navigation.prototype.update = function () {
    var i,
      j,
      k,
      lower = this._core.clones().length / 2,
      upper = lower + this._core.items().length,
      maximum = this._core.maximum(true),
      settings = this._core.settings,
      size =
        settings.center || settings.autoWidth || settings.dotsData
          ? 1
          : settings.dotsEach || settings.items;

    if (settings.slideBy !== 'page') {
      settings.slideBy = Math.min(settings.slideBy, settings.items);
    }

    if (settings.dots || settings.slideBy == 'page') {
      this._pages = [];

      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          this._pages.push({
            start: Math.min(maximum, i - lower),
            end: i - lower + size - 1,
          });
          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }
          (j = 0), ++k;
        }
        j += this._core.mergers(this._core.relative(i));
      }
    }
  };

  /**
   * Draws the user interface.
   * @todo The option `dotsData` wont work.
   * @protected
   */
  Navigation.prototype.draw = function () {
    var difference,
      settings = this._core.settings,
      disabled = this._core.items().length <= settings.items,
      index = this._core.relative(this._core.current()),
      loop = settings.loop || settings.rewind;

    this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

    if (settings.nav) {
      this._controls.$previous.toggleClass(
        'disabled',
        !loop && index <= this._core.minimum(true)
      );
      this._controls.$next.toggleClass(
        'disabled',
        !loop && index >= this._core.maximum(true)
      );
    }

    this._controls.$absolute.toggleClass(
      'disabled',
      !settings.dots || disabled
    );

    if (settings.dots) {
      difference =
        this._pages.length - this._controls.$absolute.children().length;

      if (settings.dotsData && difference !== 0) {
        this._controls.$absolute.html(this._templates.join(''));
      } else if (difference > 0) {
        this._controls.$absolute.append(
          new Array(difference + 1).join(this._templates[0])
        );
      } else if (difference < 0) {
        this._controls.$absolute.children().slice(difference).remove();
      }

      this._controls.$absolute.find('.active').removeClass('active');
      this._controls.$absolute
        .children()
        .eq($.inArray(this.current(), this._pages))
        .addClass('active');
    }
  };

  /**
   * Extends event data.
   * @protected
   * @param {Event} event - The event object which gets thrown.
   */
  Navigation.prototype.onTrigger = function (event) {
    var settings = this._core.settings;

    event.page = {
      index: $.inArray(this.current(), this._pages),
      count: this._pages.length,
      size:
        settings &&
        (settings.center || settings.autoWidth || settings.dotsData
          ? 1
          : settings.dotsEach || settings.items),
    };
  };

  /**
   * Gets the current page position of the carousel.
   * @protected
   * @returns {Number}
   */
  Navigation.prototype.current = function () {
    var current = this._core.relative(this._core.current());
    return $.grep(
      this._pages,
      $.proxy(function (page, index) {
        return page.start <= current && page.end >= current;
      }, this)
    ).pop();
  };

  /**
   * Gets the current succesor/predecessor position.
   * @protected
   * @returns {Number}
   */
  Navigation.prototype.getPosition = function (successor) {
    var position,
      length,
      settings = this._core.settings;

    if (settings.slideBy == 'page') {
      position = $.inArray(this.current(), this._pages);
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[((position % length) + length) % length].start;
    } else {
      position = this._core.relative(this._core.current());
      length = this._core.items().length;
      successor
        ? (position += settings.slideBy)
        : (position -= settings.slideBy);
    }

    return position;
  };

  /**
   * Slides to the next item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */
  Navigation.prototype.next = function (speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
  };

  /**
   * Slides to the previous item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */
  Navigation.prototype.prev = function (speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
  };

  /**
   * Slides to the specified item or page.
   * @public
   * @param {Number} position - The position of the item or page.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
   */
  Navigation.prototype.to = function (position, speed, standard) {
    var length;

    if (!standard && this._pages.length) {
      length = this._pages.length;
      $.proxy(this._overrides.to, this._core)(
        this._pages[((position % length) + length) % length].start,
        speed
      );
    } else {
      $.proxy(this._overrides.to, this._core)(position, speed);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
  'use strict';

  /**
   * Creates the hash plugin.
   * @class The Hash Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Hash = function (carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;

    /**
     * Hash index for the items.
     * @protected
     * @type {Object}
     */
    this._hashes = {};

    /**
     * The carousel element.
     * @type {jQuery}
     */
    this.$element = this._core.$element;

    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.startPosition === 'URLHash') {
          $(window).trigger('hashchange.owl.navigation');
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function (e) {
        if (e.namespace) {
          var hash = $(e.content)
            .find('[data-hash]')
            .addBack('[data-hash]')
            .attr('data-hash');

          if (!hash) {
            return;
          }

          this._hashes[hash] = e.content;
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name === 'position') {
          var current = this._core.items(
              this._core.relative(this._core.current())
            ),
            hash = $.map(this._hashes, function (item, hash) {
              return item === current ? hash : null;
            }).join();

          if (!hash || window.location.hash.slice(1) === hash) {
            return;
          }

          window.location.hash = hash;
        }
      }, this),
    };

    // set default options
    this._core.options = $.extend({}, Hash.Defaults, this._core.options);

    // register the event handlers
    this.$element.on(this._handlers);

    // register event listener for hash navigation
    $(window).on(
      'hashchange.owl.navigation',
      $.proxy(function (e) {
        var hash = window.location.hash.substring(1),
          items = this._core.$stage.children(),
          position = this._hashes[hash] && items.index(this._hashes[hash]);

        if (position === undefined || position === this._core.current()) {
          return;
        }

        this._core.to(this._core.relative(position), false, true);
      }, this)
    );
  };

  /**
   * Default options.
   * @public
   */
  Hash.Defaults = {
    URLhashListener: false,
  };

  /**
   * Destroys the plugin.
   * @public
   */
  Hash.prototype.destroy = function () {
    var handler, property;

    $(window).off('hashchange.owl.navigation');

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
  var style = $('<support>').get(0).style,
    prefixes = 'Webkit Moz O ms'.split(' '),
    events = {
      transition: {
        end: {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd',
          transition: 'transitionend',
        },
      },
      animation: {
        end: {
          WebkitAnimation: 'webkitAnimationEnd',
          MozAnimation: 'animationend',
          OAnimation: 'oAnimationEnd',
          animation: 'animationend',
        },
      },
    },
    tests = {
      csstransforms: function () {
        return !!test('transform');
      },
      csstransforms3d: function () {
        return !!test('perspective');
      },
      csstransitions: function () {
        return !!test('transition');
      },
      cssanimations: function () {
        return !!test('animation');
      },
    };

  function test(property, prefixed) {
    var result = false,
      upper = property.charAt(0).toUpperCase() + property.slice(1);

    $.each(
      (property + ' ' + prefixes.join(upper + ' ') + upper).split(' '),
      function (i, property) {
        if (style[property] !== undefined) {
          result = prefixed ? property : true;
          return false;
        }
      }
    );

    return result;
  }

  function prefixed(property) {
    return test(property, true);
  }

  if (tests.csstransitions()) {
    /* jshint -W053 */
    $.support.transition = new String(prefixed('transition'));
    $.support.transition.end = events.transition.end[$.support.transition];
  }

  if (tests.cssanimations()) {
    /* jshint -W053 */
    $.support.animation = new String(prefixed('animation'));
    $.support.animation.end = events.animation.end[$.support.animation];
  }

  if (tests.csstransforms()) {
    /* jshint -W053 */
    $.support.transform = new String(prefixed('transform'));
    $.support.transform3d = tests.csstransforms3d();
  }
})(window.Zepto || window.jQuery, window, document);

function runOwlCarousels() {
  $('.owl-carousel').each(function () {
    if ($(this).hasClass('articles-slider-cards')) {
      var $owlS = $(this);
      $owlS.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
          0: {
            items: 1,
            margin: 15,
          },
          767: {
            items: 2,
            margin: 20,
          },
          991: {
            items: 2,
            margin: 30,
          },
        },
      });
    } else if ($(this).hasClass('no-repeat')) {
      var $owlR = $(this);
      $owlR.owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        dots: false,
        repeat: false,
        lazyLoad: true,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
          },
          767: {
            items: 2,
          },
          1199: {
            items: 3,
          },
        },
      });
      $('.custom-owl-prev').click(function () {
        $owlR.trigger('prev.owl.carousel');
      });
      $('.custom-owl-next').click(function () {
        $owlR.trigger('next.owl.carousel');
      });
    } else if ($(this).hasClass('contact-form-carousel')) {
      var $owlC = $(this);
      $owlC.owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        lazyLoad: false,
        autoplay: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: false,
        responsive: {
          0: {
            items: 1,
            autoHeight: true,
          },
          768: {
            items: 1,
            autoHeight: false,
          },
        },
      });

      $('#cta_dog_contact_section_form').on('keyup keypress', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
          e.preventDefault();
          return false;
        }
      });

      $owlC.find('input[name="cta_dog_contact_name"]').on('keyup', function () {
        if ($(this).val().length > 2) {
          $(this).removeClass('not-valid');
          $(this).addClass('valid');
          $(this)
            .parent()
            .find('span.d-block')
            .addClass('d-none')
            .removeClass('d-block');
        } else {
          $(this).removeClass('valid');
          $(this).addClass('not-valid');
          $(this)
            .parent()
            .find('span.d-none')
            .removeClass('d-none')
            .addClass('d-block');
        }
      });

      $owlC
        .find('input[name="cta_dog_contact_email"]')
        .on('keyup', function () {
          if (validateEmail($(this).val())) {
            $(this).removeClass('not-valid');
            $(this).addClass('valid');
            $(this)
              .parent()
              .find('span.d-block')
              .addClass('d-none')
              .removeClass('d-block');
          } else {
            $(this).removeClass('valid');
            $(this).addClass('not-valid');
            $(this)
              .parent()
              .find('span.d-none')
              .removeClass('d-none')
              .addClass('d-block');
          }
        });

      $owlC
        .find('input[name="cta_dog_contact_message"]')
        .on('keyup', function () {
          if ($(this).val().length > 9) {
            $(this).removeClass('not-valid');
            $(this).addClass('valid');
            $(this)
              .parent()
              .find('span.d-block')
              .addClass('d-none')
              .removeClass('d-block');
          } else {
            $(this).removeClass('valid');
            $(this).addClass('not-valid');
            $(this)
              .parent()
              .find('span.d-none')
              .removeClass('d-none')
              .addClass('d-block');
          }
        });

      $owlC.find('.next').click(function () {
        if (
          !$owlC.find('.owl-item.active').find('.pristine').hasClass('required')
        ) {
          $owlC.trigger('next.owl.carousel');
        } else if ($owlC.find('.owl-item.active').find('.valid').length > 0) {
          $owlC.trigger('next.owl.carousel');
        } else {
          $owlC.find('.owl-item.active').find('.not-valid').focus();
          $owlC.find('.owl-item.active').find('.pristine').focus();
          $(this)
            .parent()
            .find('span.d-none')
            .removeClass('d-none')
            .addClass('d-block');
        }
      });
    } else if ($(this).hasClass('auto-width')) {
      var $owl = $(this);
      $owl.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoWidth: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 2,
          },
          767: {
            items: 3,
          },
          1199: {
            items: 4,
          },
        },
      });

      $('.custom-owl-prev').click(function () {
        $owl.trigger('prev.owl.carousel');
      });
      $('.custom-owl-next').click(function () {
        $owl.trigger('next.owl.carousel');
      });
    } else {
      var $owl = $(this);
      $owl.owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 2,
          },
          575: {
            items: 3,
          },
          767: {
            items: 4,
          },
          991: {
            items: 5,
          },
          1199: {
            items: 6,
          },
        },
      });

      $('.custom-owl-prev').click(function () {
        $owl.trigger('prev.owl.carousel');
      });
      $('.custom-owl-next').click(function () {
        $owl.trigger('next.owl.carousel');
      });
    }
  });
}

function afterFormOpen()
{
	if(isScriptLoaded('https://apis.google.com/js/platform.js') == false) {
		var meta = document.createElement('meta');
		meta.name = "google-signin-client_id";
		meta.content = "499620265848-all65e4hmunlra2h0c6fo2efrujsri66.apps.googleusercontent.com";
		document.getElementsByTagName('head')[0].appendChild(meta);
		addScript('https://apis.google.com/js/platform.js');
	}
	if(isScriptLoaded('https://connect.facebook.net/en_US/sdk.js') == false) {
		loadScript('https://connect.facebook.net/en_US/sdk.js', function() {
			window.fbAsyncInit = function() {
				FB.init({
					appId            : '382574281913074',
					autoLogAppEvents : true,
					xfbml            : true,
					version          : 'v7.0'
				});
			};
			FB.getLoginStatus(function(response) {
				statusChangeCallback(response);
			});
		});
	}
}

function statusChangeCallback(response) {
    console.log('statusChangeCallback fired.');
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log('Welcome!  Fetching your information.... ');
    } else {
        console.log('FB Error');
    }
}

function myFacebookLogin() {

	FB.login(function(response) {
		if (response.status === 'connected') {
			FB.api('/me', {fields: 'name, email, gender, picture'}, function(response) {
				if(response['name']) {
                    $('form').find('input[name="app-name"]').val(response['name']).next('label').css({'opacity':0});
                    $('form').find('input[name="cv-name"]').val(response['name']).next('label').css({'opacity':0});
				}
				if(response['email']) {
                    $('form').find('input[name="app-email"]').val(response['email']).next('label').css({'opacity':0});
                    $('form').find('input[name="cv-email"]').val(response['email']).next('label').css({'opacity':0});
				}
				if(response['gender'] == 'male') {
                    $('form').find('input[name="app-gender"][value="male"]').prop('checked', true);
                    $('form').find('input[name="cv-gender"][value="male"]').prop('checked', true);
				} else if(response['gender'] == 'female') {
                    $('form').find('input[name="app-gender"][value="female"]').prop('checked', true);
                    $('form').find('input[name="cv-gender"][value="female"]').prop('checked', true);
				}
			});
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	}, {scope: 'public_profile,email,user_gender'});

}

function myLinkedinLogin($url, $src, $cv = false)
{
	setCookie('redirect_user_url', $src, 1);
	setCookie('api_type', 'linkedin', 1);
	if( $cv ) {
		setCookie('uploadcvmodal', true, 1);
	}
	window.location.href = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77dug7ogaz4ouh&redirect_uri="+$url+"&scope=r_liteprofile%20r_emailaddress%20w_member_social";
}

function myGithubLogin($src, $cv = false)
{
	setCookie('redirect_user_url', $src, 1);
	setCookie('api_type', 'github', 1);
	if( $cv ) {
		setCookie('uploadcvmodal', true, 1);
	}
	window.location.href = 'https://github.com/login/oauth/authorize?client_id=1f774f6bc988fd78b1ab&scope=read:user';
}

function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();

	if( profile.getName() ) {
		$('form').find('input[name="app-name"]').val(profile.getName()).next('label').css({'opacity':0});
		$('form').find('input[name="cv-name"]').val(profile.getName()).next('label').css({'opacity':0});
	}

	if( profile.getEmail() ) {
		$('form').find('input[name="app-email"]').val(profile.getEmail()).next('label').css({'opacity':0});
		$('form').find('input[name="cv-email"]').val(profile.getEmail()).next('label').css({'opacity':0});
	}
}

// from SUMEDIA.NL

function SUMEDIAvideoCarousel() {
  $('.video-cards').each(function () {
    $(this).owlCarousel({
      loop: !0,
      nav: !1,
      dots: !1,
      lazyLoad: 0,
      center: true,
      autoplay: false,
      responsive: {
        0: { items: 1, margin: 15 },
        767: { items: 2, margin: 20 },
        991: { items: 2, margin: 30 },
        1260: { items: 3, margin: 30 },
      },
    });
  });

  $('.custom-owl-prev-video').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.custom-owl-next-video').click(function () {
    owl.trigger('next.owl.carousel');
  });

  var owl = $('.video-cards');
  owl.owlCarousel();
  const playButtons = document.querySelectorAll(
    '.video-placeholder, .play-video'
  );
  const videoItems = document.querySelectorAll('.video');

  owl.on('changed.owl.carousel', function (event) {
    for (let i = 0; i < playButtons.length; i += 1) {
      playButtons[i].parentElement.classList.remove('active');
    }

    for (let x = 0; x < videoItems.length; x += 1) {
      videoItems[x].load();
    }
  });
}

function SUMEDIAquoteCarousel() {
  $('.quote-carousel').each(function () {
    $(this).owlCarousel({
      loop: !0,
      nav: 1,
      dots: !1,
      lazyLoad: 0,
      center: true,
      autoplay: false,
      items: 1,
    });

    var owl = $('.quote-carousel');
    owl.owlCarousel();

    $('.custom-owl-prev-quote').click(function () {
      owl.trigger('prev.owl.carousel');
    });

    $('.custom-owl-next-quote').click(function () {
      owl.trigger('next.owl.carousel');
    });
  });
}

function SUMEDIAswitchDNA() {
  const dnaSwitcher = document.querySelector('.switch-dna');

  if (dnaSwitcher) {
    dnaSwitcher.addEventListener('click', () => {
      var dnaItem =
        dnaSwitcher.parentElement.parentElement.parentElement.querySelectorAll(
          '.dna__items__item'
        );
      var dnaSwitcherItem = dnaSwitcher.querySelectorAll('.switch-dna--item');

      if (dnaItem[0].classList.contains('active')) {
        dnaItem[0].classList.remove('active');
        dnaItem[1].classList.add('active');

        dnaSwitcherItem[0].classList.remove('active');
        dnaSwitcherItem[1].classList.add('active');

        dnaSwitcher.id = dnaItem[1].id;
      } else if (dnaItem[1].classList.contains('active')) {
        dnaItem[1].classList.remove('active');
        dnaItem[2].classList.add('active');

        dnaSwitcherItem[1].classList.remove('active');
        dnaSwitcherItem[2].classList.add('active');

        dnaSwitcher.id = dnaItem[2].id;
      } else if (dnaItem[2].classList.contains('active')) {
        dnaItem[2].classList.remove('active');
        dnaItem[0].classList.add('active');

        dnaSwitcherItem[2].classList.remove('active');
        dnaSwitcherItem[0].classList.add('active');

        dnaSwitcher.id = dnaItem[0].id;
      }
    });
  }
}

function SUMEDIAplayVideo() {
  const playButtons = document.querySelectorAll('.play-video');
  const videoItems = document.querySelectorAll('.video');
  const video = document.querySelector('video');
  const close = document.querySelector('.videos .mfp-close');
  if (close != null) {
    close.onclick = () => {
      video.pause();
    };
  }
  if (playButtons.length > 0) {
    for (let i = 0; i < playButtons.length; i += 1) {
      playButtons[i].addEventListener('click', () => {
        playButtons[i].parentElement.classList.add('active');

        if (videoItems.length > 0) {
          for (let x = 0; x < videoItems.length; x += 1) {
            if (videoItems[x].parentElement.classList.contains('active')) {
              videoItems[x].play();
            }
          }
        }
      });
    }
  }
}

$(document).ready(function () {
  SUMEDIAvideoCarousel();
  SUMEDIAquoteCarousel();
  SUMEDIAplayVideo();
  SUMEDIAswitchDNA();
});

function uglyInput() {
  $('.ugly').each(function () {
    var $input = $(this).find('input, textarea');
    $input.on('change focusout', function () {
      if (!$input.val() === true) {
        $input.parent().find('.ugly-label').css({ opacity: 1 });
      } else {
        $input.parent().find('.ugly-label').css({ opacity: 0 });
      }
    });
  });
}

function homeHashtags() {
  $('.home__middle-hashtags')
    .find('li')
    .on('click', function () {
      $('#homeSearchInput').val($(this).text().replace('#', '')).focus();
    });
}

function teamShowMore() {
  $('.team__item-showmore').on('click', function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .addClass('d-none')
      .parent()
      .parent()
      .next('.team__item-hidden')
      .removeClass('d-none');
  });
  $('.team__item-showless').on('click', function (e) {
    e.preventDefault();
    $(this)
      .parent()
      .parent()
      .addClass('d-none')
      .prev()
      .find('.btns')
      .removeClass('d-none');
  });
}

function bodyGradient() {
  var $blue = '#94D4E9';
  var $light = '#C0E5F2';
  var $height = $('.body-bg-gradient').height();
  if ($('.flex_content-tags').length > 0) {
    var $top =
      $('.flex_content-tags').offset().top -
      $('.body-bg-gradient').offset().top +
      $('.flex_content-tags').height() / 2;
    var $middle = ($top * 100) / $height;
  } else {
    var $top = $('.body-bg-gradient').height() / 2;
    var $middle = 50;
  }
  //var $bottom = $('.flex_content-tags').offset().bottom - $('.body-bg-gradient').offset().bottom;

  var $gradient =
    '(180deg, ' +
    $blue +
    ' 0%, ' +
    $light +
    ' ' +
    $middle +
    '%, ' +
    $blue +
    ' 100%)';
  var $normal = 'linear-gradient' + $gradient;
  var $moz = '-moz-linear-gradient' + $gradient;
  var $webkit = '-webkit-linear-gradient' + $gradient;
  $('.body-bg-gradient').css({
    background: $webkit,
    background: $moz,
    background: $normal,
  });
}

function slideThem() {
  var el = $('*[href*="#"]');
  if (el) {
    el.on('click', function (e) {
      e.preventDefault();
      if ($(this).attr('href') === '#openCVmodal') {
        $('#uploadCVModal').modal(
          { backdrop: 'static', keyboard: false },
          'show'
        );
      } else {
        slideTo(el.attr('href'));
      }
    });
  }
}

function bottomBar() {
  var bar = $('.bottom-bar');
  bar.each(function () {
    var height = $(this).outerHeight();
    if (!$(this).hasClass('show') && $(window).scrollTop() > height) {
      $(this).addClass('show');
      $('#wrapper').css({ 'padding-bottom': height + 'px' });
    }
  });
}

function playVideoButton() {
  if (mobileAndTabletCheck()) {
    $('.header__video')
      .find('.vidvid')
      .on('click', function () {
        var video = $(this).find('video').get(0);
        var button = $(this).find('.play-button');
        if (video.paused) {
          video.play();
          button.removeClass('d-block').addClass('d-none');
        } else {
          video.pause();
          button.removeClass('d-none').addClass('d-block');
        }
      });
    $('.header__video')
      .find('video')
      .on('click', function () {
        var video = $(this).get(0);
        var button = $(this).next('.play-button');
        if (video.paused) {
          video.play();
          button.removeClass('d-block').addClass('d-none');
        } else {
          video.pause();
          button.removeClass('d-none').addClass('d-block');
        }
      });
  }
}

function socialShareJob() {
  $('.social-share.btn').on('mouseenter', function () {
    $(this)
      .stop(true, true)
      .removeClass('square')
      .find('.social-share-open')
      .addClass('d-none')
      .parent()
      .find('.social-share-close, .social-share-buttons')
      .removeClass('d-none');
  });
  $('.social-share.btn').on('mouseleave', function () {
    $(this)
      .stop(true, true)
      .addClass('square')
      .find('.social-share-open')
      .removeClass('d-none')
      .parent()
      .find('.social-share-close, .social-share-buttons')
      .addClass('d-none');
  });
}

function jobsLangLink() {
  if ($('#thePostSlugForJobLink') && $('#thePostSlugForJobLink').data('url')) {
    var $url = $('#thePostSlugForJobLink').data('url');
    var $langs = $('ul.lang');
    var $en = $langs.find('li.lang-item').find('a[lang="en-GB"]');
    var $nl = $langs.find('li.lang-item').find('a[lang="nl-NL"]');
    $en.each(function () {
      $(this).attr('href', '/en/job/' + $url);
    });
    $nl.each(function () {
      $(this).attr('href', '/nl/vacature/' + $url);
    });
  }
}

jQuery(document).ready(function () {
  jQuery('#searchPopupModal').on('shown.bs.modal', function () {
    jQuery('#searchPopupModal').find('.job-search-nice').focus();
  });
  if (jQuery('#pleaseShowUploadCVModal').length > 0) {
    jQuery('#uploadCVModal').modal(
      { backdrop: 'static', keyboard: false },
      'show'
    );
  }
  if (jQuery('#pleaseAddCookiesScriptForPopups').length > 0) {
    // var $type = jQuery('#pleaseAddCookiesScriptForPopups').data('popupname');
    // var $cookie = jQuery('#pleaseAddCookiesScriptForPopups').data(
    //   'popupcookie'
    // );
    // var $cookieTime = jQuery('#pleaseAddCookiesScriptForPopups').data(
    //   'popupcookietime'
    // );
    // setTimeout(function () {
    //   jQuery('#' + $type + 'PopupModal').modal('show');
    // }, $cookieTime);
    // jQuery('#' + $type + 'PopupModal')
    //   .find('button.close')
    //   .on('click', function () {
    //     setCookie($type + '_popup', true, $cookie);
    //   });
  }
});

function openNewsletterSubscribeModal() {
  jQuery('.pleaseOpenSubscribeModalPopup').on('click', function (e) {
    e.preventDefault();
    jQuery('#subscribePopupModal').modal(
      { backdrop: 'static', keyboard: false },
      'show'
    );
  });
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function onFormSubmit() {
  $(document).on(
    'submit',
    '#job-application-form, #cv-upload-form',
    function () {
      $(this)
        .addClass('disabled')
        .find('input[type="submit"]')
        .attr('disabled', true)
        .addClass('disabled');
      if ($(this).attr('id') === 'job-application-form') {
        setCookie(
          'jobid_' + $(this).find('input.app-jobid').val(),
          $(this).find('input.app-jobid').val(),
          365
        );
      } else if ($(this).attr('id') === 'cv-upload-form') {
        setCookie('cvform', 'sent', 365);
      }
    }
  );
}

function onFormLoad() {
  var $jobid = $('#job-application-form').find('input.app-jobid').val();
  var $cookie = getCookie('jobid_' + $jobid);

  if (getCookie('cvform')) {
    $('#cv-upload-form').addClass('cv-sent');
  }

  if ($jobid !== 188 && $jobid == $cookie) {
    $('#job-application-form').addClass('application-sent');
  }
}

function appValidation() {
  if ($('#job-application-form').length > 0) {
    var formApp = $('#job-application-form');
    formApp.validate({
      onfocusout: function (element) {
        $(element).valid();
      },
      focusCleanup: true,
      onkeyup: false,
    });
    formApp.find('input.required').on('change focusout', function () {
      if (formApp.valid()) {
        $('.fake_btn_app').addClass('d-none');
        $('.g-recaptcha.app').removeClass('d-none');
      } else {
        $('.fake_btn_app').removeClass('d-none');
        $('.g-recaptcha.app').addClass('d-none');
      }
    });
    formApp.find('.fake_btn_app').on('click', function (e) {
      e.preventDefault();
      if (formApp.valid()) {
        $('.fake_btn_app').addClass('d-none');
        $('.g-recaptcha.app').removeClass('d-none');
        $(this).next('button.g-recaptcha.app').trigger('click').remove();
      }
    });
  }

  if ($('#cv-upload-form').length > 0) {
    $('#uploadCVModal').on('show.bs.modal', function (e) {
      var formCV = $('#cv-upload-form');
      formCV.validate({
        onfocusout: function (element) {
          $(element).valid();
        },
        focusCleanup: true,
        onkeyup: false,
      });
      formCV.find('input.required').on('change focusout', function () {
        if (formCV.valid()) {
          $('.fake_btn_cv').addClass('d-none');
          $('.g-recaptcha.cvBTN').removeClass('d-none');
        } else {
          $('.fake_btn_cv').removeClass('d-none');
          $('.g-recaptcha.cvBTN').addClass('d-none');
        }
      });
      formCV.find('.fake_btn_cv').on('click', function (e) {
        e.preventDefault();
        if (formCV.valid()) {
          $('.fake_btn_cv').addClass('d-none');
          $('.g-recaptcha.cvBTN').removeClass('d-none');
          $(this).next('button.g-recaptcha.cvBTN').trigger('click').remove();
        }
      });
    });
  }

  if ($('#subscribe-popup-form').length > 0) {
    $('#subscribePopupModal').on('show.bs.modal', function (e) {
      var formSub = $('#subscribe-popup-form');
      formSub.validate({
        onfocusout: function (element) {
          $(element).valid();
        },
        focusCleanup: true,
        onkeyup: false,
      });
      formSub.find('.required').on('change focusout', function () {
        if (
          formSub.valid() &&
          formSub.find('select.required').val() &&
          formSub.find('select.required').val().length > 0
        ) {
          $('.fake_btn_subscribe').addClass('d-none');
          $('.g-recaptcha.subscribe').removeClass('d-none');
        } else {
          $('.fake_btn_subscribe').removeClass('d-none');
          $('.g-recaptcha.subscribe').addClass('d-none');
        }
      });
      formSub.find('.fake_btn_subscribe').on('click', function (e) {
        e.preventDefault();
        if (
          formSub.valid() &&
          formSub.find('select.required').val() &&
          formSub.find('select.required').val().length > 0
        ) {
          $('.fake_btn_subscribe').addClass('d-none');
          $('.g-recaptcha.subscribe').removeClass('d-none');
          $(this)
            .next('button.g-recaptcha.subscribe')
            .trigger('click')
            .remove();
        }
      });
    });
  }
}

function onAppSubmit(token) {
  $('#job-application-form').find('button.g-recaptcha').remove();
  $('#job-application-form').find('button.fake_btn_app').addClass('d-none');
  $('#job-application-form')
    .find('button.fake_btn_app_loading')
    .removeClass('d-none');
  document.getElementById('job-application-form').submit();
}

function onCVSubmit(token) {
  $('#cv-upload-form').find('button.g-recaptcha').remove();
  $('#cv-upload-form').find('button.fake_btn_cv').addClass('d-none');
  $('#cv-upload-form').find('button.fake_btn_cv_loading').removeClass('d-none');
  document.getElementById('cv-upload-form').submit();
}

function onSubscribeSubmit(token) {
  console.log(token);
  $('#subscribe-popup-form').find('button.g-recaptcha').remove();
  $('#subscribe-popup-form')
    .find('button.fake_btn_subscribe')
    .addClass('d-none');
  $('#subscribe-popup-form')
    .find('button.fake_btn_subscribe_loading')
    .removeClass('d-none');
  document.getElementById('subscribe-popup-form').submit();
}

function onContactSubmit() {
  $('#contact_section_form').find('button.g-recaptcha').remove();
  $('#contact_section_form').find('button.fake_btn_contact').addClass('d-none');
  $('#contact_section_form')
    .find('button.fake_btn_contact_loading')
    .removeClass('d-none');
  document.getElementById('contact_section_form').submit();
}

function onSmallContactSubmit() {
  $('#cta_dog_contact_section_form').find('button.g-recaptcha').remove();
  $('#cta_dog_contact_section_form')
    .find('button.fake_btn_contact')
    .addClass('d-none');
  $('#cta_dog_contact_section_form')
    .find('button.fake_btn_small_contact_loading')
    .removeClass('d-none');
  document.getElementById('cta_dog_contact_section_form').submit();
}

'use strict';

jQuery(document).ready(function () {
  if (mobileAndTabletCheck()) {
    $('body').addClass('is-mobile');
    $('.header__video')
      .find('video')
      .on('click', function () {
        if ($(this).get(0).paused || $(this).get(0).ended) {
          $(this).get(0).play();
        } else {
          $(this).get(0).pause();
        }
      });
  } else {
    $('body').removeClass('is-mobile');
  }
  lazyImages();
  uglyInput();
  filterSelect();
  menuMobile();
  jobsLangLink();
  knowledgeFilterToggle();
  teamShowMore();
  jobsFilterToggle();
  quickFilters();
  onFormSubmit();
  onFormLoad();
  appValidation();
  slideThem();
  playVideoButton();
  socialShareJob();
  jobsAjaxFiltering();
  postsAjaxFiltering();
  openNewsletterSubscribeModal();

  if (getParameterByName('modal') === 'job-alert') {
    $('#subscribePopupModal').modal(
      { backdrop: 'static', keyboard: false },
      'show'
    );
  }

  $('select[multiple]').multiselect({
    columns: 2,
    search: true,
    selectAll: true,
    minHeight: 300,
  });

  if ($('.body-bg-gradient').length > 0) {
    bodyGradient();
  }

  $('div.dropdown-menu')
    .parent()
    .on('shown.bs.dropdown', function () {
      itemsDown('sub-extra');
    });

  $('form').each(function () {
    $(this).preventDoubleSubmission();
  });

  if ($('.home__middle-hashtags').length != 0) {
    homeHashtags();
  }

  if ($('#searchModal')) {
    $('#searchModal').on('shown.bs.modal', function (e) {
      $('#searchModal').find('.searchInput').find('input').focus();
    });
  }

  if ($('#job-application-form').length > 0) {
    afterFormOpen();
    $('#app-dob-datepicker').datepicker({
      format: 'dd-mm-yyyy',
      weekStart: 1,
      autoclose: true,
      startDate: '01-01-1920',
    });
  }

  if ($('#cv-upload-form').length > 0) {
    $('#uploadCVModal').on('show.bs.modal', function (e) {
      afterFormOpen();
      $('#cv-dob-datepicker').datepicker({
        format: 'dd-mm-yyyy',
        weekStart: 1,
        autoclose: true,
        startDate: '01-01-1920',
      });
    });
  }

  if ($('.continuous-slider').length > 0) {
    var $i = 1;
    $('.continuous-slider').each(function () {
      if ($i % 2 === 0) {
        $(this).infiniteslide({
          direction: 'left',
          pauseonhover: true,
          speed: 69,
        });
      } else {
        $(this).infiniteslide({
          direction: 'right',
          pauseonhover: true,
          speed: 69,
        });
      }
      $i++;
    });
  }
  if ($('.photo-slider').length > 0) {
    $('.photo-slider').slick({
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });
    $('.slick-prev').on('click', function () {
      $('.photo-slider').slick('slickPrev');
    });
    $('.slick-next').on('click', function () {
      $('.photo-slider').slick('slickNext');
    });
    // const swiper = new Swiper('.swiper', {
    //   speed: 400,
    //   spaceBetween: 10,
    //   autoplay: {
    //     delay: 2500,
    //   },
    //   loop: true,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   slidesPerView: 'auto',
    //   breakpoints: {
    //     480: {
    //       spaceBetween: 30,
    //     },
    //   },
    // });
  }
});

jQuery(window).on('load', function () {
  lazyImages();
  megaMenu();
  bottomBar();

  // $('.job-category-filters')
  //   .find('li')
  //   .on('click', function () {});
  if ($('.owl-carousel').length > 0) {
    runOwlCarousels();
  }

  if ($('.body-bg-gradient').length > 0) {
    bodyGradient();
  }
});

jQuery(window).on('resize', function () {
  if (mobileAndTabletCheck()) {
    $('body').addClass('is-mobile');
  } else {
    $('body').removeClass('is-mobile');
  }
  if ($('.body-bg-gradient').length > 0) {
    bodyGradient();
  }
  bottomBar();
});

jQuery(window).on('scroll', function () {
  bottomBar();
});

jQuery(document).on('click', '.dropdown-menu', function (e) {
  if ($(e.target).not('.mega-menu-go-back')) {
    e.stopPropagation();
  }
});

// function chatOpen() {
//   $('#chat').on('click', function (event) {
//     if (!$(event.target).hasClass('close')) {
//       $('#chat').addClass('d-none');
//       $('#chat-application').addClass('showed');
//       $('#chat-application-iframe')
//         .contents()
//         .find('#widgetPanel')
//         .trigger('click');
//     }
//   });

//   $('#chat-application, #chat-application-iframe').on('change', function () {
//     if ($('#chat-application').height() < 100) {
//       $('#chat-application').removeClass('showed');
//     }
//   });
// }

// function chatClose() {
//   $('#chat').addClass('closed');
// }
