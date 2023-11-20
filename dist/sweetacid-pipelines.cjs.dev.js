'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var saw = require('@sweetacid/saw');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var saw__default = /*#__PURE__*/_interopDefault(saw);

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Task = /*#__PURE__*/_createClass(function Task(fn) {
  _classCallCheck(this, Task);
  this.fn = fn;
});

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var waitImmediate = function waitImmediate() {
  return new Promise(function (resolve) {
    return setImmediate(resolve);
  });
};

var Pipeline = /*#__PURE__*/function () {
  function Pipeline() {
    var pipeline = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _classCallCheck(this, Pipeline);
    this.pipeline = pipeline;
  }
  _createClass(Pipeline, [{
    key: "pipe",
    value: function pipe() {
      var _this$pipeline;
      (_this$pipeline = this.pipeline).push.apply(_this$pipeline, arguments);
    }
  }, {
    key: "exec",
    value: function () {
      var _exec = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input) {
        var _iterator, _step, task, _yield$run, _yield$run2, error;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(this.pipeline);
              _context.prev = 1;
              _iterator.s();
            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 16;
                break;
              }
              task = _step.value;
              _context.next = 7;
              return run(task, input);
            case 7:
              _yield$run = _context.sent;
              _yield$run2 = _slicedToArray(_yield$run, 1);
              error = _yield$run2[0];
              _context.next = 12;
              return waitImmediate();
            case 12:
              if (!error) {
                _context.next = 14;
                break;
              }
              throw error;
            case 14:
              _context.next = 3;
              break;
            case 16:
              _context.next = 21;
              break;
            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](1);
              _iterator.e(_context.t0);
            case 21:
              _context.prev = 21;
              _iterator.f();
              return _context.finish(21);
            case 24:
              return _context.abrupt("return", input);
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 18, 21, 24]]);
      }));
      function exec(_x) {
        return _exec.apply(this, arguments);
      }
      return exec;
    }()
  }]);
  return Pipeline;
}();

var run = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(task, input) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", saw__default["default"]( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _yield$saw, _yield$saw2, error, _yield$saw3, _yield$saw4, _error;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(task instanceof Pipeline)) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return task.exec(input);
                case 3:
                  _context.next = 23;
                  break;
                case 5:
                  if (!(task instanceof Task)) {
                    _context.next = 15;
                    break;
                  }
                  _context.next = 8;
                  return saw__default["default"](function () {
                    return task.fn(input);
                  });
                case 8:
                  _yield$saw = _context.sent;
                  _yield$saw2 = _slicedToArray(_yield$saw, 1);
                  error = _yield$saw2[0];
                  if (!error) {
                    _context.next = 13;
                    break;
                  }
                  throw error;
                case 13:
                  _context.next = 23;
                  break;
                case 15:
                  if (!(typeof task === "function")) {
                    _context.next = 23;
                    break;
                  }
                  _context.next = 18;
                  return saw__default["default"](function () {
                    return task(input);
                  });
                case 18:
                  _yield$saw3 = _context.sent;
                  _yield$saw4 = _slicedToArray(_yield$saw3, 1);
                  _error = _yield$saw4[0];
                  if (!_error) {
                    _context.next = 23;
                    break;
                  }
                  throw _error;
                case 23:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function run(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @description execute a task with a modified input
 */
var delegate = function delegate(task, transformationFn, postFn) {
  return new Task( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input) {
      var transformed, _yield$run, _yield$run2, taskError, _yield$saw, _yield$saw2, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            transformed = transformationFn(input);
            _context.next = 3;
            return run(task, transformed);
          case 3:
            _yield$run = _context.sent;
            _yield$run2 = _slicedToArray(_yield$run, 1);
            taskError = _yield$run2[0];
            if (!taskError) {
              _context.next = 8;
              break;
            }
            throw taskError;
          case 8:
            if (postFn) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return");
          case 10:
            _context.next = 12;
            return saw__default["default"](function () {
              return postFn(input, transformed);
            });
          case 12:
            _yield$saw = _context.sent;
            _yield$saw2 = _slicedToArray(_yield$saw, 1);
            error = _yield$saw2[0];
            if (!error) {
              _context.next = 17;
              break;
            }
            throw error;
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

var IgnoreErrors = /*#__PURE__*/function (_Task) {
  _inherits(IgnoreErrors, _Task);
  var _super = _createSuper(IgnoreErrors);
  function IgnoreErrors(tasks) {
    var _this;
    _classCallCheck(this, IgnoreErrors);
    _this = _super.call(this, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input) {
        var _yield$run, _yield$run2, error, _iterator, _step, task, _yield$run3, _yield$run4, _error;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (Array.isArray(tasks)) {
                _context.next = 8;
                break;
              }
              _context.next = 3;
              return run(tasks, input);
            case 3:
              _yield$run = _context.sent;
              _yield$run2 = _slicedToArray(_yield$run, 1);
              error = _yield$run2[0];
              if (error) console.error(error);
              return _context.abrupt("return");
            case 8:
              _iterator = _createForOfIteratorHelper(tasks);
              _context.prev = 9;
              _iterator.s();
            case 11:
              if ((_step = _iterator.n()).done) {
                _context.next = 23;
                break;
              }
              task = _step.value;
              _context.next = 15;
              return run(task, input);
            case 15:
              _yield$run3 = _context.sent;
              _yield$run4 = _slicedToArray(_yield$run3, 1);
              _error = _yield$run4[0];
              if (_error) console.error(_error);
              _context.next = 21;
              return waitImmediate();
            case 21:
              _context.next = 11;
              break;
            case 23:
              _context.next = 28;
              break;
            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](9);
              _iterator.e(_context.t0);
            case 28:
              _context.prev = 28;
              _iterator.f();
              return _context.finish(28);
            case 31:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[9, 25, 28, 31]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _this.tasks = tasks;
    return _this;
  }
  return _createClass(IgnoreErrors);
}(Task);

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/**
 * @description used for cancelling a task in a manner that works
 * with the {@link Selector}
 */
var AbortTaskError = /*#__PURE__*/function (_Error) {
  _inherits(AbortTaskError, _Error);
  var _super = _createSuper(AbortTaskError);
  function AbortTaskError() {
    _classCallCheck(this, AbortTaskError);
    return _super.apply(this, arguments);
  }
  return _createClass(AbortTaskError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * @description Selectors execute their children in order.
 * They stop executing when one of their children succeeds.
 * If a Selector's child succeeds, the Selector succeeds.
 * If all the Selector's children fail, the Selector throws an AbortTask error.
 */
var Selector = /*#__PURE__*/function (_Task) {
  _inherits(Selector, _Task);
  var _super2 = _createSuper(Selector);
  function Selector(tasks) {
    var _this;
    _classCallCheck(this, Selector);
    _this = _super2.call(this, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input) {
        var allFailed, _iterator, _step, task, _yield$run, _yield$run2, error;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              allFailed = true;
              _iterator = _createForOfIteratorHelper(tasks);
              _context.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 22;
                break;
              }
              task = _step.value;
              if (allFailed) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("break", 22);
            case 8:
              _context.next = 10;
              return run(task, input);
            case 10:
              _yield$run = _context.sent;
              _yield$run2 = _slicedToArray(_yield$run, 1);
              error = _yield$run2[0];
              _context.next = 15;
              return waitImmediate();
            case 15:
              if (!error) {
                _context.next = 19;
                break;
              }
              if (!(error instanceof AbortTaskError)) {
                _context.next = 18;
                break;
              }
              return _context.abrupt("continue", 20);
            case 18:
              throw error;
            case 19:
              allFailed = false;
            case 20:
              _context.next = 4;
              break;
            case 22:
              _context.next = 27;
              break;
            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](2);
              _iterator.e(_context.t0);
            case 27:
              _context.prev = 27;
              _iterator.f();
              return _context.finish(27);
            case 30:
              if (!allFailed) {
                _context.next = 32;
                break;
              }
              throw new AbortTaskError("all tasks aborted");
            case 32:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 24, 27, 30]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _this.tasks = tasks;
    return _this;
  }
  return _createClass(Selector);
}(Task);

var Sequence = /*#__PURE__*/function (_Task) {
  _inherits(Sequence, _Task);
  var _super = _createSuper(Sequence);
  function Sequence(tasks) {
    var _this;
    _classCallCheck(this, Sequence);
    _this = _super.call(this, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input) {
        var _iterator, _step, task, _yield$run, _yield$run2, error;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(tasks);
              _context.prev = 1;
              _iterator.s();
            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 16;
                break;
              }
              task = _step.value;
              _context.next = 7;
              return run(task, input);
            case 7:
              _yield$run = _context.sent;
              _yield$run2 = _slicedToArray(_yield$run, 1);
              error = _yield$run2[0];
              _context.next = 12;
              return waitImmediate();
            case 12:
              if (!error) {
                _context.next = 14;
                break;
              }
              throw error;
            case 14:
              _context.next = 3;
              break;
            case 16:
              _context.next = 21;
              break;
            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](1);
              _iterator.e(_context.t0);
            case 21:
              _context.prev = 21;
              _iterator.f();
              return _context.finish(21);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 18, 21, 24]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _this.tasks = tasks;
    return _this;
  }
  return _createClass(Sequence);
}(Task);

var SkipAborted = /*#__PURE__*/function (_Task) {
  _inherits(SkipAborted, _Task);
  var _super = _createSuper(SkipAborted);
  function SkipAborted(task) {
    var _this;
    _classCallCheck(this, SkipAborted);
    _this = _super.call(this, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input) {
        var _yield$run, _yield$run2, error;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return run(task, input);
            case 2:
              _yield$run = _context.sent;
              _yield$run2 = _slicedToArray(_yield$run, 1);
              error = _yield$run2[0];
              _context.next = 7;
              return waitImmediate();
            case 7:
              if (!(error === null || error instanceof AbortTaskError)) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return");
            case 9:
              throw error;
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _this.task = task;
    return _this;
  }
  return _createClass(SkipAborted);
}(Task);

exports.AbortTaskError = AbortTaskError;
exports.IgnoreErrors = IgnoreErrors;
exports.Pipeline = Pipeline;
exports.Selector = Selector;
exports.Sequence = Sequence;
exports.SkipAborted = SkipAborted;
exports.Task = Task;
exports.delegate = delegate;
exports.run = run;
exports.waitImmediate = waitImmediate;
