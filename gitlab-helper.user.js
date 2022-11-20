// ==UserScript==
// @name       gitlab-helper
// @namespace  npm/vite-plugin-monkey
// @version    0.0.5
// @author     monkey
// @icon       https://vitejs.dev/logo.svg
// @include    https://gitlab.com/*
// @require    https://cdn.jsdelivr.net/npm/preact@10.11.1/dist/preact.min.js
// ==/UserScript==

(t=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.innerText=t,document.head.appendChild(e)})(".container-limited,.container-limited.limit-container-width{max-width:unset}");

(function(preact2) {
  "use strict";
  var r, u, i, o$1, f = 0, c = [], e = [], a = preact2.options.__b, v = preact2.options.__r, l = preact2.options.diffed, m = preact2.options.__c, d = preact2.options.unmount;
  function p(t, r2) {
    preact2.options.__h && preact2.options.__h(u, t, f || r2), f = 0;
    var i2 = u.__H || (u.__H = { __: [], __h: [] });
    return t >= i2.__.length && i2.__.push({ __V: e }), i2.__[t];
  }
  function y(n) {
    return f = 1, h(C, n);
  }
  function h(n, t, i2) {
    var o2 = p(r++, 2);
    if (o2.t = n, !o2.__c && (o2.__ = [i2 ? i2(t) : C(void 0, t), function(n2) {
      var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n2);
      t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = u, !u.u)) {
      u.u = true;
      var f2 = u.shouldComponentUpdate;
      u.shouldComponentUpdate = function(n2, t2, r2) {
        if (!o2.__c.__H)
          return true;
        var u2 = o2.__c.__H.__.filter(function(n3) {
          return n3.__c;
        });
        if (u2.every(function(n3) {
          return !n3.__N;
        }))
          return !f2 || f2.call(this, n2, t2, r2);
        var i3 = false;
        return u2.forEach(function(n3) {
          if (n3.__N) {
            var t3 = n3.__[0];
            n3.__ = n3.__N, n3.__N = void 0, t3 !== n3.__[0] && (i3 = true);
          }
        }), !(!i3 && o2.__c.props === n2) && (!f2 || f2.call(this, n2, t2, r2));
      };
    }
    return o2.__N || o2.__;
  }
  function s(t, i2) {
    var o2 = p(r++, 3);
    !preact2.options.__s && B(o2.__H, i2) && (o2.__ = t, o2.i = i2, u.__H.__h.push(o2));
  }
  function A(n) {
    return f = 5, T(function() {
      return { current: n };
    }, []);
  }
  function T(n, t) {
    var u2 = p(r++, 7);
    return B(u2.__H, t) ? (u2.__V = n(), u2.i = t, u2.__h = n, u2.__V) : u2.__;
  }
  function q(n, t) {
    return f = 8, T(function() {
      return n;
    }, t);
  }
  function x(n) {
    var t = u.context[n.__c], i2 = p(r++, 9);
    return i2.c = n, t ? (null == i2.__ && (i2.__ = true, t.sub(u)), t.props.value) : n.__;
  }
  function g() {
    for (var t; t = c.shift(); )
      if (t.__P && t.__H)
        try {
          t.__H.__h.forEach(w), t.__H.__h.forEach(z), t.__H.__h = [];
        } catch (r2) {
          t.__H.__h = [], preact2.options.__e(r2, t.__v);
        }
  }
  preact2.options.__b = function(n) {
    "function" != typeof n.type || n.__m || n.type === preact2.Fragment ? n.__m || (n.__m = n.__ && n.__.__m ? n.__.__m : "") : n.__m = (n.__ && n.__.__m ? n.__.__m : "") + (n.__ && n.__.__k ? n.__.__k.indexOf(n) : 0), u = null, a && a(n);
  }, preact2.options.__r = function(n) {
    v && v(n), r = 0;
    var t = (u = n.__c).__H;
    t && (i === u ? (t.__h = [], u.__h = [], t.__.forEach(function(n2) {
      n2.__N && (n2.__ = n2.__N), n2.__V = e, n2.__N = n2.i = void 0;
    })) : (t.__h.forEach(w), t.__h.forEach(z), t.__h = [])), i = u;
  }, preact2.options.diffed = function(t) {
    l && l(t);
    var r2 = t.__c;
    r2 && r2.__H && (r2.__H.__h.length && (1 !== c.push(r2) && o$1 === preact2.options.requestAnimationFrame || ((o$1 = preact2.options.requestAnimationFrame) || k)(g)), r2.__H.__.forEach(function(n) {
      n.i && (n.__H = n.i), n.__V !== e && (n.__ = n.__V), n.i = void 0, n.__V = e;
    })), i = u = null;
  }, preact2.options.__c = function(t, r2) {
    r2.some(function(t2) {
      try {
        t2.__h.forEach(w), t2.__h = t2.__h.filter(function(n) {
          return !n.__ || z(n);
        });
      } catch (u2) {
        r2.some(function(n) {
          n.__h && (n.__h = []);
        }), r2 = [], preact2.options.__e(u2, t2.__v);
      }
    }), m && m(t, r2);
  }, preact2.options.unmount = function(t) {
    d && d(t);
    var r2, u2 = t.__c;
    u2 && u2.__H && (u2.__H.__.forEach(function(n) {
      try {
        w(n);
      } catch (n2) {
        r2 = n2;
      }
    }), u2.__H = void 0, r2 && preact2.options.__e(r2, u2.__v));
  };
  var j = "function" == typeof requestAnimationFrame;
  function k(n) {
    var t, r2 = function() {
      clearTimeout(u2), j && cancelAnimationFrame(t), setTimeout(n);
    }, u2 = setTimeout(r2, 100);
    j && (t = requestAnimationFrame(r2));
  }
  function w(n) {
    var t = u, r2 = n.__c;
    "function" == typeof r2 && (n.__c = void 0, r2()), u = t;
  }
  function z(n) {
    var t = u;
    n.__c = n.__(), u = t;
  }
  function B(n, t) {
    return !n || n.length !== t.length || t.some(function(t2, r2) {
      return t2 !== n[r2];
    });
  }
  function C(n, t) {
    return "function" == typeof t ? t(n) : t;
  }
  const eventPopstate = "popstate";
  const eventPushState = "pushState";
  const eventReplaceState = "replaceState";
  const events = [eventPopstate, eventPushState, eventReplaceState];
  const locationHook = ({ base = "" } = {}) => {
    const [{ path }, update] = y(() => ({ path: currentPathname(base) }));
    const prevHash = A(path + location.search);
    s(() => {
      const checkForUpdates = () => {
        const pathname = currentPathname(base);
        const hash = pathname + location.search;
        if (prevHash.current !== hash) {
          prevHash.current = hash;
          update({ path: pathname });
        }
      };
      events.forEach((e2) => addEventListener(e2, checkForUpdates));
      checkForUpdates();
      return () => events.forEach((e2) => removeEventListener(e2, checkForUpdates));
    }, [base]);
    const navigate2 = q(
      (to, { replace = false } = {}) => history[replace ? eventReplaceState : eventPushState](
        null,
        "",
        to[0] === "~" ? to.slice(1) : base + to
      ),
      [base]
    );
    return [path, navigate2];
  };
  if (typeof history !== "undefined") {
    for (const type of [eventPushState, eventReplaceState]) {
      const original = history[type];
      history[type] = function() {
        const result = original.apply(this, arguments);
        const event = new Event(type);
        event.arguments = arguments;
        dispatchEvent(event);
        return result;
      };
    }
  }
  const currentPathname = (base, path = location.pathname) => !path.toLowerCase().indexOf(base.toLowerCase()) ? path.slice(base.length) || "/" : "~" + path;
  function makeMatcher(makeRegexpFn = pathToRegexp) {
    let cache2 = {};
    const getRegexp = (pattern) => cache2[pattern] || (cache2[pattern] = makeRegexpFn(pattern));
    return (pattern, path) => {
      const { regexp, keys } = getRegexp(pattern || "");
      const out = regexp.exec(path);
      if (!out)
        return [false, null];
      const params = keys.reduce((params2, key, i2) => {
        params2[key.name] = out[i2 + 1];
        return params2;
      }, {});
      return [true, params];
    };
  }
  const escapeRx = (str) => str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  const rxForSegment = (repeat, optional, prefix) => {
    let capture = repeat ? "((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)" : "([^\\/]+?)";
    if (optional && prefix)
      capture = "(?:\\/" + capture + ")";
    return capture + (optional ? "?" : "");
  };
  const pathToRegexp = (pattern) => {
    const groupRx = /:([A-Za-z0-9_]+)([?+*]?)/g;
    let match = null, lastIndex = 0, keys = [], result = "";
    while ((match = groupRx.exec(pattern)) !== null) {
      const [_2, segment, mod] = match;
      const repeat = mod === "+" || mod === "*";
      const optional = mod === "?" || mod === "*";
      const prefix = optional && pattern[match.index - 1] === "/" ? 1 : 0;
      const prev = pattern.substring(lastIndex, match.index - prefix);
      keys.push({ name: segment });
      lastIndex = groupRx.lastIndex;
      result += escapeRx(prev) + rxForSegment(repeat, optional, prefix);
    }
    result += escapeRx(pattern.substring(lastIndex));
    return { keys, regexp: new RegExp("^" + result + "(?:\\/)?$", "i") };
  };
  const RouterCtx = preact2.createContext({});
  const buildRouter = ({
    hook = locationHook,
    base = "",
    matcher = makeMatcher()
  } = {}) => ({ hook, base, matcher });
  const useRouter = () => {
    const globalRef = x(RouterCtx);
    return globalRef.v || (globalRef.v = buildRouter());
  };
  const useLocation = () => {
    const router = useRouter();
    return router.hook(router);
  };
  const useRoute = (pattern) => {
    const [path] = useLocation();
    return useRouter().matcher(pattern, path);
  };
  const Router = (props) => {
    const [value] = y(() => ({ v: buildRouter(props) }));
    return preact2.createElement(RouterCtx.Provider, {
      value,
      children: props.children
    });
  };
  const Route = ({ path, match, component, children }) => {
    const useRouteMatch = useRoute(path);
    const [matches, params] = match || useRouteMatch;
    if (!matches)
      return null;
    if (component)
      return preact2.createElement(component, { params });
    return typeof children === "function" ? children(params) : children;
  };
  var mapObj = { exports: {} };
  const isObject$1 = (value) => typeof value === "object" && value !== null;
  const mapObjectSkip = Symbol("skip");
  const isObjectCustom = (value) => isObject$1(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
  const mapObject = (object, mapper, options, isSeen = /* @__PURE__ */ new WeakMap()) => {
    options = {
      deep: false,
      target: {},
      ...options
    };
    if (isSeen.has(object)) {
      return isSeen.get(object);
    }
    isSeen.set(object, options.target);
    const { target } = options;
    delete options.target;
    const mapArray = (array) => array.map((element) => isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
    if (Array.isArray(object)) {
      return mapArray(object);
    }
    for (const [key, value] of Object.entries(object)) {
      const mapResult = mapper(key, value, object);
      if (mapResult === mapObjectSkip) {
        continue;
      }
      let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;
      if (newKey === "__proto__") {
        continue;
      }
      if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
        newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);
      }
      target[newKey] = newValue;
    }
    return target;
  };
  mapObj.exports = (object, mapper, options) => {
    if (!isObject$1(object)) {
      throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
    }
    return mapObject(object, mapper, options);
  };
  mapObj.exports.mapObjectSkip = mapObjectSkip;
  const UPPERCASE = /[\p{Lu}]/u;
  const LOWERCASE = /[\p{Ll}]/u;
  const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
  const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
  const SEPARATORS = /[_.\- ]+/;
  const LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
  const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
  const NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");
  const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;
    for (let index2 = 0; index2 < string.length; index2++) {
      const character = string[index2];
      if (isLastCharLower && UPPERCASE.test(character)) {
        string = string.slice(0, index2) + "-" + string.slice(index2);
        isLastCharLower = false;
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = true;
        index2++;
      } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
        string = string.slice(0, index2 - 1) + "-" + string.slice(index2 - 1);
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = false;
        isLastCharLower = true;
      } else {
        isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
      }
    }
    return string;
  };
  const preserveConsecutiveUppercase = (input, toLowerCase) => {
    LEADING_CAPITAL.lastIndex = 0;
    return input.replace(LEADING_CAPITAL, (m1) => toLowerCase(m1));
  };
  const postProcess = (input, toUpperCase) => {
    SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
    NUMBERS_AND_IDENTIFIER.lastIndex = 0;
    return input.replace(SEPARATORS_AND_IDENTIFIER, (_2, identifier) => toUpperCase(identifier)).replace(NUMBERS_AND_IDENTIFIER, (m2) => toUpperCase(m2));
  };
  function camelCase(input, options) {
    if (!(typeof input === "string" || Array.isArray(input))) {
      throw new TypeError("Expected the input to be `string | string[]`");
    }
    options = {
      pascalCase: false,
      preserveConsecutiveUppercase: false,
      ...options
    };
    if (Array.isArray(input)) {
      input = input.map((x2) => x2.trim()).filter((x2) => x2.length).join("-");
    } else {
      input = input.trim();
    }
    if (input.length === 0) {
      return "";
    }
    const toLowerCase = options.locale === false ? (string) => string.toLowerCase() : (string) => string.toLocaleLowerCase(options.locale);
    const toUpperCase = options.locale === false ? (string) => string.toUpperCase() : (string) => string.toLocaleUpperCase(options.locale);
    if (input.length === 1) {
      if (SEPARATORS.test(input)) {
        return "";
      }
      return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
    }
    const hasUpperCase = input !== toLowerCase(input);
    if (hasUpperCase) {
      input = preserveCamelCase(input, toLowerCase, toUpperCase);
    }
    input = input.replace(LEADING_SEPARATORS, "");
    input = options.preserveConsecutiveUppercase ? preserveConsecutiveUppercase(input, toLowerCase) : toLowerCase(input);
    if (options.pascalCase) {
      input = toUpperCase(input.charAt(0)) + input.slice(1);
    }
    return postProcess(input, toUpperCase);
  }
  class QuickLRU extends Map {
    constructor(options = {}) {
      super();
      if (!(options.maxSize && options.maxSize > 0)) {
        throw new TypeError("`maxSize` must be a number greater than 0");
      }
      if (typeof options.maxAge === "number" && options.maxAge === 0) {
        throw new TypeError("`maxAge` must be a number greater than 0");
      }
      this.maxSize = options.maxSize;
      this.maxAge = options.maxAge || Number.POSITIVE_INFINITY;
      this.onEviction = options.onEviction;
      this.cache = /* @__PURE__ */ new Map();
      this.oldCache = /* @__PURE__ */ new Map();
      this._size = 0;
    }
    _emitEvictions(cache2) {
      if (typeof this.onEviction !== "function") {
        return;
      }
      for (const [key, item] of cache2) {
        this.onEviction(key, item.value);
      }
    }
    _deleteIfExpired(key, item) {
      if (typeof item.expiry === "number" && item.expiry <= Date.now()) {
        if (typeof this.onEviction === "function") {
          this.onEviction(key, item.value);
        }
        return this.delete(key);
      }
      return false;
    }
    _getOrDeleteIfExpired(key, item) {
      const deleted = this._deleteIfExpired(key, item);
      if (deleted === false) {
        return item.value;
      }
    }
    _getItemValue(key, item) {
      return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
    }
    _peek(key, cache2) {
      const item = cache2.get(key);
      return this._getItemValue(key, item);
    }
    _set(key, value) {
      this.cache.set(key, value);
      this._size++;
      if (this._size >= this.maxSize) {
        this._size = 0;
        this._emitEvictions(this.oldCache);
        this.oldCache = this.cache;
        this.cache = /* @__PURE__ */ new Map();
      }
    }
    _moveToRecent(key, item) {
      this.oldCache.delete(key);
      this._set(key, item);
    }
    *_entriesAscending() {
      for (const item of this.oldCache) {
        const [key, value] = item;
        if (!this.cache.has(key)) {
          const deleted = this._deleteIfExpired(key, value);
          if (deleted === false) {
            yield item;
          }
        }
      }
      for (const item of this.cache) {
        const [key, value] = item;
        const deleted = this._deleteIfExpired(key, value);
        if (deleted === false) {
          yield item;
        }
      }
    }
    get(key) {
      if (this.cache.has(key)) {
        const item = this.cache.get(key);
        return this._getItemValue(key, item);
      }
      if (this.oldCache.has(key)) {
        const item = this.oldCache.get(key);
        if (this._deleteIfExpired(key, item) === false) {
          this._moveToRecent(key, item);
          return item.value;
        }
      }
    }
    set(key, value, { maxAge = this.maxAge } = {}) {
      const expiry = typeof maxAge === "number" && maxAge !== Number.POSITIVE_INFINITY ? Date.now() + maxAge : void 0;
      if (this.cache.has(key)) {
        this.cache.set(key, {
          value,
          expiry
        });
      } else {
        this._set(key, { value, expiry });
      }
    }
    has(key) {
      if (this.cache.has(key)) {
        return !this._deleteIfExpired(key, this.cache.get(key));
      }
      if (this.oldCache.has(key)) {
        return !this._deleteIfExpired(key, this.oldCache.get(key));
      }
      return false;
    }
    peek(key) {
      if (this.cache.has(key)) {
        return this._peek(key, this.cache);
      }
      if (this.oldCache.has(key)) {
        return this._peek(key, this.oldCache);
      }
    }
    delete(key) {
      const deleted = this.cache.delete(key);
      if (deleted) {
        this._size--;
      }
      return this.oldCache.delete(key) || deleted;
    }
    clear() {
      this.cache.clear();
      this.oldCache.clear();
      this._size = 0;
    }
    resize(newSize) {
      if (!(newSize && newSize > 0)) {
        throw new TypeError("`maxSize` must be a number greater than 0");
      }
      const items = [...this._entriesAscending()];
      const removeCount = items.length - newSize;
      if (removeCount < 0) {
        this.cache = new Map(items);
        this.oldCache = /* @__PURE__ */ new Map();
        this._size = items.length;
      } else {
        if (removeCount > 0) {
          this._emitEvictions(items.slice(0, removeCount));
        }
        this.oldCache = new Map(items.slice(removeCount));
        this.cache = /* @__PURE__ */ new Map();
        this._size = 0;
      }
      this.maxSize = newSize;
    }
    *keys() {
      for (const [key] of this) {
        yield key;
      }
    }
    *values() {
      for (const [, value] of this) {
        yield value;
      }
    }
    *[Symbol.iterator]() {
      for (const item of this.cache) {
        const [key, value] = item;
        const deleted = this._deleteIfExpired(key, value);
        if (deleted === false) {
          yield [key, value.value];
        }
      }
      for (const item of this.oldCache) {
        const [key, value] = item;
        if (!this.cache.has(key)) {
          const deleted = this._deleteIfExpired(key, value);
          if (deleted === false) {
            yield [key, value.value];
          }
        }
      }
    }
    *entriesDescending() {
      let items = [...this.cache];
      for (let i2 = items.length - 1; i2 >= 0; --i2) {
        const item = items[i2];
        const [key, value] = item;
        const deleted = this._deleteIfExpired(key, value);
        if (deleted === false) {
          yield [key, value.value];
        }
      }
      items = [...this.oldCache];
      for (let i2 = items.length - 1; i2 >= 0; --i2) {
        const item = items[i2];
        const [key, value] = item;
        if (!this.cache.has(key)) {
          const deleted = this._deleteIfExpired(key, value);
          if (deleted === false) {
            yield [key, value.value];
          }
        }
      }
    }
    *entriesAscending() {
      for (const [key, value] of this._entriesAscending()) {
        yield [key, value.value];
      }
    }
    get size() {
      if (!this._size) {
        return this.oldCache.size;
      }
      let oldCacheSize = 0;
      for (const key of this.oldCache.keys()) {
        if (!this.cache.has(key)) {
          oldCacheSize++;
        }
      }
      return Math.min(this._size + oldCacheSize, this.maxSize);
    }
    entries() {
      return this.entriesAscending();
    }
    forEach(callbackFunction, thisArgument = this) {
      for (const [key, value] of this.entriesAscending()) {
        callbackFunction.call(thisArgument, value, key, this);
      }
    }
    get [Symbol.toStringTag]() {
      return JSON.stringify([...this.entriesAscending()]);
    }
  }
  const has = (array, key) => array.some((element) => {
    if (typeof element === "string") {
      return element === key;
    }
    element.lastIndex = 0;
    return element.test(key);
  });
  const cache = new QuickLRU({ maxSize: 1e5 });
  const isObject = (value) => typeof value === "object" && value !== null && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);
  const camelCaseConvert = (input, options) => {
    if (!isObject(input)) {
      return input;
    }
    options = {
      deep: false,
      pascalCase: false,
      ...options
    };
    const { exclude, pascalCase, stopPaths, deep } = options;
    const stopPathsSet = new Set(stopPaths);
    const makeMapper = (parentPath) => (key, value) => {
      if (deep && isObject(value)) {
        const path = parentPath === void 0 ? key : `${parentPath}.${key}`;
        if (!stopPathsSet.has(path)) {
          value = mapObj.exports(value, makeMapper(path));
        }
      }
      if (!(exclude && has(exclude, key))) {
        const cacheKey = pascalCase ? `${key}_` : key;
        if (cache.has(cacheKey)) {
          key = cache.get(cacheKey);
        } else {
          const returnValue = camelCase(key, { pascalCase, locale: false });
          if (key.length < 100) {
            cache.set(cacheKey, returnValue);
          }
          key = returnValue;
        }
      }
      return [key, value];
    };
    return mapObj.exports(input, makeMapper(void 0));
  };
  function camelcaseKeys(input, options) {
    if (Array.isArray(input)) {
      return Object.keys(input).map((key) => camelCaseConvert(input[key], options));
    }
    return camelCaseConvert(input, options);
  }
  const fetchJson = (url) => fetch(url).then((res) => res.json().then((json) => camelcaseKeys(json, {
    deep: true
  })));
  const loadChangelog = (projectPath) => fetchJson(`/${projectPath}/-/blob/master/CHANGELOG.md?format=json&viewer=rich`);
  var _ = 0;
  function o(o2, e2, n, t, f2) {
    var l2, s2, u2 = {};
    for (s2 in e2)
      "ref" == s2 ? l2 = e2[s2] : u2[s2] = e2[s2];
    var a2 = { type: o2, props: u2, key: n, ref: l2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f2, __self: t };
    if ("function" == typeof o2 && (l2 = o2.defaultProps))
      for (s2 in l2)
        void 0 === u2[s2] && (u2[s2] = l2[s2]);
    return preact2.options.vnode && preact2.options.vnode(a2), a2;
  }
  function ChangelogDashboard() {
    const [projectList, setProjectList] = y([]);
    s(() => {
      if (projectList.length) {
        return;
      }
      fetchJson("/api/v4/projects?starred=true").then((list) => {
        setProjectList(list);
        return list;
      }).then((list) => {
        list.reduce(async (promise, project) => {
          await promise;
          await loadChangelog(project.pathWithNamespace).then((changelog) => {
            setProjectList((l2) => {
              return l2.map((p2) => {
                if (p2.pathWithNamespace === project.pathWithNamespace) {
                  return {
                    ...p2,
                    changelog
                  };
                }
                return p2;
              });
            });
          });
        }, Promise.resolve());
      });
    }, []);
    return o("div", {
      children: [o("div", {
        class: "page-title-holder flex-fill d-flex align-items-center",
        children: o("h1", {
          children: "ChangelogDashboard"
        })
      }), o("div", {
        class: "row gl-mt-3 dashboard-cards",
        children: projectList.map((project) => {
          var _a;
          return o("div", {
            class: "col-12 col-xl-3 col-lg-4 col-md-8 col-sm-12 px-2",
            children: o("div", {
              "data-qa-selector": "dashboard_project_card",
              class: "js-dashboard-project dashboard-card card border-0",
              children: [o("div", {
                class: "card-header gl-border-0 gl-py-3 gl-display-flex gl-align-items-center bg-light",
                children: o("div", {
                  class: "gl-flex-grow-1 block-truncated",
                  children: o("a", {
                    href: project.webUrl,
                    children: o("span", {
                      children: project.nameWithNamespace
                    })
                  })
                })
              }), o("div", {
                class: "dashboard-card-body card-body bg-secondary",
                style: {
                  overflow: "scroll",
                  height: "1200px"
                },
                dangerouslySetInnerHTML: {
                  __html: (_a = project == null ? void 0 : project.changelog) == null ? void 0 : _a.html
                }
              })]
            })
          });
        })
      })]
    });
  }
  const app = "";
  const init = () => {
    var _a, _b;
    const changeLogsMenu = document.createElement("li");
    changeLogsMenu.innerHTML = `<a href="#/changelogs">Changelogs</a>`;
    (_b = (_a = document.querySelector('li[data-track-label="repository_analytics"]')) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.append(changeLogsMenu);
  };
  init();
  function App() {
    const [location2] = useLocation();
    const ref = A(null);
    s(() => {
      var _a, _b;
      if (!["/changelogs"].includes(location2)) {
        return;
      }
      const element = (_a = ref.current) == null ? void 0 : _a.parentElement;
      if (!element) {
        return;
      }
      Array.from(((_b = element.parentElement) == null ? void 0 : _b.children) || []).forEach((el) => {
        el.style.display = "none";
      });
      element.style.display = "block";
    }, [location2]);
    return o("div", {
      ref,
      children: o(Route, {
        path: "/changelogs",
        children: o(ChangelogDashboard, {})
      })
    });
  }
  const index = "";
  const currentLocation = () => {
    return window.location.hash.replace(/^#/, "") || "/";
  };
  const navigate = (path) => window.location.hash = path;
  function useHashLocation() {
    const [path, setPath] = y(currentLocation());
    s(() => {
      const handler = () => setPath(currentLocation());
      window.addEventListener("hashchange", handler);
      return () => window.removeEventListener("hashchange", handler);
    }, []);
    return [path, navigate];
  }
  preact2.render(
    o(Router, {
      hook: useHashLocation,
      children: o(App, {})
    }),
    (() => {
      var _a;
      const app2 = document.createElement("div");
      (_a = document.querySelector("#content-body")) == null ? void 0 : _a.append(app2);
      return app2;
    })()
  );
})(preact);
