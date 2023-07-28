"use strict";
var spicetify;
(spicetify ||= {}).extension = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/function.js
  var require_function = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/function.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.dual = exports.getEndomorphismMonoid = exports.not = exports.SK = exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.unsafeCoerce = exports.identity = exports.apply = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
      var getBooleanAlgebra = function getBooleanAlgebra2(B) {
        return function() {
          return {
            meet: function meet(x, y) {
              return function(a) {
                return B.meet(x(a), y(a));
              };
            },
            join: function join(x, y) {
              return function(a) {
                return B.join(x(a), y(a));
              };
            },
            zero: function zero() {
              return B.zero;
            },
            one: function one() {
              return B.one;
            },
            implies: function implies(x, y) {
              return function(a) {
                return B.implies(x(a), y(a));
              };
            },
            not: function not2(x) {
              return function(a) {
                return B.not(x(a));
              };
            }
          };
        };
      };
      exports.getBooleanAlgebra = getBooleanAlgebra;
      var getSemigroup = function getSemigroup2(S) {
        return function() {
          return {
            concat: function concat(f, g) {
              return function(a) {
                return S.concat(f(a), g(a));
              };
            }
          };
        };
      };
      exports.getSemigroup = getSemigroup;
      var getMonoid = function getMonoid2(M) {
        var getSemigroupM = (0, exports.getSemigroup)(M);
        return function() {
          return {
            concat: getSemigroupM().concat,
            empty: function empty() {
              return M.empty;
            }
          };
        };
      };
      exports.getMonoid = getMonoid;
      var getSemiring = function getSemiring2(S) {
        return {
          add: function add(f, g) {
            return function(x) {
              return S.add(f(x), g(x));
            };
          },
          zero: function zero() {
            return S.zero;
          },
          mul: function mul(f, g) {
            return function(x) {
              return S.mul(f(x), g(x));
            };
          },
          one: function one() {
            return S.one;
          }
        };
      };
      exports.getSemiring = getSemiring;
      var getRing = function getRing2(R) {
        var S = (0, exports.getSemiring)(R);
        return {
          add: S.add,
          mul: S.mul,
          one: S.one,
          zero: S.zero,
          sub: function sub(f, g) {
            return function(x) {
              return R.sub(f(x), g(x));
            };
          }
        };
      };
      exports.getRing = getRing;
      var apply = function apply2(a) {
        return function(f) {
          return f(a);
        };
      };
      exports.apply = apply;
      function identity(a) {
        return a;
      }
      exports.identity = identity;
      exports.unsafeCoerce = identity;
      function constant(a) {
        return function() {
          return a;
        };
      }
      exports.constant = constant;
      exports.constTrue = constant(true);
      exports.constFalse = constant(false);
      exports.constNull = constant(null);
      exports.constUndefined = constant(void 0);
      exports.constVoid = exports.constUndefined;
      function flip(f) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (args.length > 1) {
            return f(args[1], args[0]);
          }
          return function(a) {
            return f(a)(args[0]);
          };
        };
      }
      exports.flip = flip;
      function flow2(ab, bc, cd, de, ef, fg, gh, hi, ij) {
        switch (arguments.length) {
          case 1:
            return ab;
          case 2:
            return function() {
              return bc(ab.apply(this, arguments));
            };
          case 3:
            return function() {
              return cd(bc(ab.apply(this, arguments)));
            };
          case 4:
            return function() {
              return de(cd(bc(ab.apply(this, arguments))));
            };
          case 5:
            return function() {
              return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
          case 6:
            return function() {
              return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
          case 7:
            return function() {
              return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
          case 8:
            return function() {
              return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
          case 9:
            return function() {
              return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
        }
        return;
      }
      exports.flow = flow2;
      function tuple() {
        var t = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          t[_i] = arguments[_i];
        }
        return t;
      }
      exports.tuple = tuple;
      function increment(n) {
        return n + 1;
      }
      exports.increment = increment;
      function decrement(n) {
        return n - 1;
      }
      exports.decrement = decrement;
      function absurd(_) {
        throw new Error("Called `absurd` function which should be uncallable");
      }
      exports.absurd = absurd;
      function tupled(f) {
        return function(a) {
          return f.apply(void 0, a);
        };
      }
      exports.tupled = tupled;
      function untupled(f) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return f(a);
        };
      }
      exports.untupled = untupled;
      function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
        switch (arguments.length) {
          case 1:
            return a;
          case 2:
            return ab(a);
          case 3:
            return bc(ab(a));
          case 4:
            return cd(bc(ab(a)));
          case 5:
            return de(cd(bc(ab(a))));
          case 6:
            return ef(de(cd(bc(ab(a)))));
          case 7:
            return fg(ef(de(cd(bc(ab(a))))));
          case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
          case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
          default: {
            var ret = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
              ret = arguments[i](ret);
            }
            return ret;
          }
        }
      }
      exports.pipe = pipe;
      exports.hole = absurd;
      var SK = function SK2(_, b) {
        return b;
      };
      exports.SK = SK;
      function not(predicate) {
        return function(a) {
          return !predicate(a);
        };
      }
      exports.not = not;
      var getEndomorphismMonoid = function getEndomorphismMonoid2() {
        return {
          concat: function concat(first, second) {
            return flow2(first, second);
          },
          empty: identity
        };
      };
      exports.getEndomorphismMonoid = getEndomorphismMonoid;
      var dual = function dual2(arity, body) {
        var isDataFirst = typeof arity === "number" ? function(args) {
          return args.length >= arity;
        } : arity;
        return function() {
          var args = Array.from(arguments);
          if (isDataFirst(arguments)) {
            return body.apply(this, args);
          }
          return function(self) {
            return body.apply(void 0, __spreadArray([self], args, false));
          };
        };
      };
      exports.dual = dual;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/internal.js
  var require_internal = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/internal.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.flatMapReader = exports.flatMapTask = exports.flatMapIO = exports.flatMapEither = exports.flatMapOption = exports.flatMapNullable = exports.liftOption = exports.liftNullable = exports.fromReadonlyNonEmptyArray = exports.has = exports.emptyRecord = exports.emptyReadonlyArray = exports.tail = exports.head = exports.isNonEmpty = exports.singleton = exports.right = exports.left = exports.isRight = exports.isLeft = exports.some = exports.none = exports.isSome = exports.isNone = void 0;
      var function_1 = require_function();
      var isNone2 = function isNone3(fa) {
        return fa._tag === "None";
      };
      exports.isNone = isNone2;
      var isSome = function isSome2(fa) {
        return fa._tag === "Some";
      };
      exports.isSome = isSome;
      exports.none = {
        _tag: "None"
      };
      var some = function some2(a) {
        return {
          _tag: "Some",
          value: a
        };
      };
      exports.some = some;
      var isLeft = function isLeft2(ma) {
        return ma._tag === "Left";
      };
      exports.isLeft = isLeft;
      var isRight = function isRight2(ma) {
        return ma._tag === "Right";
      };
      exports.isRight = isRight;
      var left = function left2(e) {
        return {
          _tag: "Left",
          left: e
        };
      };
      exports.left = left;
      var right = function right2(a) {
        return {
          _tag: "Right",
          right: a
        };
      };
      exports.right = right;
      var singleton = function singleton2(a) {
        return [a];
      };
      exports.singleton = singleton;
      var isNonEmpty = function isNonEmpty2(as) {
        return as.length > 0;
      };
      exports.isNonEmpty = isNonEmpty;
      var head = function head2(as) {
        return as[0];
      };
      exports.head = head;
      var tail = function tail2(as) {
        return as.slice(1);
      };
      exports.tail = tail;
      exports.emptyReadonlyArray = [];
      exports.emptyRecord = {};
      exports.has = Object.prototype.hasOwnProperty;
      var fromReadonlyNonEmptyArray = function fromReadonlyNonEmptyArray2(as) {
        return __spreadArray([as[0]], as.slice(1), true);
      };
      exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;
      var liftNullable = function liftNullable2(F) {
        return function(f, onNullable) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f.apply(void 0, a);
            return F.fromEither(o == null ? (0, exports.left)(onNullable.apply(void 0, a)) : (0, exports.right)(o));
          };
        };
      };
      exports.liftNullable = liftNullable;
      var liftOption = function liftOption2(F) {
        return function(f, onNone) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f.apply(void 0, a);
            return F.fromEither((0, exports.isNone)(o) ? (0, exports.left)(onNone.apply(void 0, a)) : (0, exports.right)(o.value));
          };
        };
      };
      exports.liftOption = liftOption;
      var flatMapNullable = function flatMapNullable2(F, M) {
        return (0, function_1.dual)(3, function(self, f, onNullable) {
          return M.flatMap(self, (0, exports.liftNullable)(F)(f, onNullable));
        });
      };
      exports.flatMapNullable = flatMapNullable;
      var flatMapOption = function flatMapOption2(F, M) {
        return (0, function_1.dual)(3, function(self, f, onNone) {
          return M.flatMap(self, (0, exports.liftOption)(F)(f, onNone));
        });
      };
      exports.flatMapOption = flatMapOption;
      var flatMapEither = function flatMapEither2(F, M) {
        return (0, function_1.dual)(2, function(self, f) {
          return M.flatMap(self, function(a) {
            return F.fromEither(f(a));
          });
        });
      };
      exports.flatMapEither = flatMapEither;
      var flatMapIO = function flatMapIO2(F, M) {
        return (0, function_1.dual)(2, function(self, f) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f(a));
          });
        });
      };
      exports.flatMapIO = flatMapIO;
      var flatMapTask = function flatMapTask2(F, M) {
        return (0, function_1.dual)(2, function(self, f) {
          return M.flatMap(self, function(a) {
            return F.fromTask(f(a));
          });
        });
      };
      exports.flatMapTask = flatMapTask;
      var flatMapReader = function flatMapReader2(F, M) {
        return (0, function_1.dual)(2, function(self, f) {
          return M.flatMap(self, function(a) {
            return F.fromReader(f(a));
          });
        });
      };
      exports.flatMapReader = flatMapReader;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Apply.js
  var require_Apply = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Apply.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = void 0;
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      function ap(F, G) {
        return function(fa) {
          return function(fab) {
            return F.ap(F.map(fab, function(gab) {
              return function(ga) {
                return G.ap(gab, ga);
              };
            }), fa);
          };
        };
      }
      exports.ap = ap;
      function apFirst(A) {
        return function(second) {
          return function(first) {
            return A.ap(A.map(first, function(a) {
              return function() {
                return a;
              };
            }), second);
          };
        };
      }
      exports.apFirst = apFirst;
      function apSecond(A) {
        return function(second) {
          return function(first) {
            return A.ap(A.map(first, function() {
              return function(b) {
                return b;
              };
            }), second);
          };
        };
      }
      exports.apSecond = apSecond;
      function apS(F) {
        return function(name, fb) {
          return function(fa) {
            return F.ap(F.map(fa, function(a) {
              return function(b) {
                var _a;
                return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
              };
            }), fb);
          };
        };
      }
      exports.apS = apS;
      function getApplySemigroup(F) {
        return function(S) {
          return {
            concat: function concat(first, second) {
              return F.ap(F.map(first, function(x) {
                return function(y) {
                  return S.concat(x, y);
                };
              }), second);
            }
          };
        };
      }
      exports.getApplySemigroup = getApplySemigroup;
      function curried(f, n, acc) {
        return function(x) {
          var combined = Array(acc.length + 1);
          for (var i = 0; i < acc.length; i++) {
            combined[i] = acc[i];
          }
          combined[acc.length] = x;
          return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
        };
      }
      var tupleConstructors = {
        1: function _2(a) {
          return [a];
        },
        2: function _2(a) {
          return function(b) {
            return [a, b];
          };
        },
        3: function _2(a) {
          return function(b) {
            return function(c) {
              return [a, b, c];
            };
          };
        },
        4: function _2(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return [a, b, c, d];
              };
            };
          };
        },
        5: function _2(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return [a, b, c, d, e];
                };
              };
            };
          };
        }
      };
      function getTupleConstructor(len) {
        if (!_.has.call(tupleConstructors, len)) {
          tupleConstructors[len] = curried(function_1.tuple, len - 1, []);
        }
        return tupleConstructors[len];
      }
      function sequenceT(F) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var len = args.length;
          var f = getTupleConstructor(len);
          var fas = F.map(args[0], f);
          for (var i = 1; i < len; i++) {
            fas = F.ap(fas, args[i]);
          }
          return fas;
        };
      }
      exports.sequenceT = sequenceT;
      function getRecordConstructor(keys) {
        var len = keys.length;
        switch (len) {
          case 1:
            return function(a) {
              var _a;
              return _a = {}, _a[keys[0]] = a, _a;
            };
          case 2:
            return function(a) {
              return function(b) {
                var _a;
                return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a;
              };
            };
          case 3:
            return function(a) {
              return function(b) {
                return function(c) {
                  var _a;
                  return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a;
                };
              };
            };
          case 4:
            return function(a) {
              return function(b) {
                return function(c) {
                  return function(d) {
                    var _a;
                    return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a[keys[3]] = d, _a;
                  };
                };
              };
            };
          case 5:
            return function(a) {
              return function(b) {
                return function(c) {
                  return function(d) {
                    return function(e) {
                      var _a;
                      return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a[keys[3]] = d, _a[keys[4]] = e, _a;
                    };
                  };
                };
              };
            };
          default:
            return curried(function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var r = {};
              for (var i = 0; i < len; i++) {
                r[keys[i]] = args[i];
              }
              return r;
            }, len - 1, []);
        }
      }
      function sequenceS(F) {
        return function(r) {
          var keys = Object.keys(r);
          var len = keys.length;
          var f = getRecordConstructor(keys);
          var fr = F.map(r[keys[0]], f);
          for (var i = 1; i < len; i++) {
            fr = F.ap(fr, r[keys[i]]);
          }
          return fr;
        };
      }
      exports.sequenceS = sequenceS;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Functor.js
  var require_Functor = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Functor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.asUnit = exports.as = exports.getFunctorComposition = exports["let"] = exports.bindTo = exports.flap = exports.map = void 0;
      var function_1 = require_function();
      function map(F, G) {
        return function(f) {
          return function(fa) {
            return F.map(fa, function(ga) {
              return G.map(ga, f);
            });
          };
        };
      }
      exports.map = map;
      function flap(F) {
        return function(a) {
          return function(fab) {
            return F.map(fab, function(f) {
              return f(a);
            });
          };
        };
      }
      exports.flap = flap;
      function bindTo(F) {
        return function(name) {
          return function(fa) {
            return F.map(fa, function(a) {
              var _a;
              return _a = {}, _a[name] = a, _a;
            });
          };
        };
      }
      exports.bindTo = bindTo;
      function let_(F) {
        return function(name, f) {
          return function(fa) {
            return F.map(fa, function(a) {
              var _a;
              return Object.assign({}, a, (_a = {}, _a[name] = f(a), _a));
            });
          };
        };
      }
      exports["let"] = let_;
      function getFunctorComposition(F, G) {
        var _map = map(F, G);
        return {
          map: function map2(fga, f) {
            return (0, function_1.pipe)(fga, _map(f));
          }
        };
      }
      exports.getFunctorComposition = getFunctorComposition;
      function as(F) {
        return function(self, b) {
          return F.map(self, function() {
            return b;
          });
        };
      }
      exports.as = as;
      function asUnit(F) {
        var asM = as(F);
        return function(self) {
          return asM(self, void 0);
        };
      }
      exports.asUnit = asUnit;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Applicative.js
  var require_Applicative = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Applicative.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getApplicativeComposition = exports.getApplicativeMonoid = void 0;
      var Apply_1 = require_Apply();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      function getApplicativeMonoid(F) {
        var f = (0, Apply_1.getApplySemigroup)(F);
        return function(M) {
          return {
            concat: f(M).concat,
            empty: F.of(M.empty)
          };
        };
      }
      exports.getApplicativeMonoid = getApplicativeMonoid;
      function getApplicativeComposition(F, G) {
        var map = (0, Functor_1.getFunctorComposition)(F, G).map;
        var _ap = (0, Apply_1.ap)(F, G);
        return {
          map,
          of: function of(a) {
            return F.of(G.of(a));
          },
          ap: function ap(fgab, fga) {
            return (0, function_1.pipe)(fgab, _ap(fga));
          }
        };
      }
      exports.getApplicativeComposition = getApplicativeComposition;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Chain.js
  var require_Chain = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Chain.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bind = exports.tap = exports.chainFirst = void 0;
      function chainFirst(M) {
        var tapM = tap(M);
        return function(f) {
          return function(first) {
            return tapM(first, f);
          };
        };
      }
      exports.chainFirst = chainFirst;
      function tap(M) {
        return function(first, f) {
          return M.chain(first, function(a) {
            return M.map(f(a), function() {
              return a;
            });
          });
        };
      }
      exports.tap = tap;
      function bind(M) {
        return function(name, f) {
          return function(ma) {
            return M.chain(ma, function(a) {
              return M.map(f(a), function(b) {
                var _a;
                return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
              });
            });
          };
        };
      }
      exports.bind = bind;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/FromEither.js
  var require_FromEither = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/FromEither.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.tapEither = exports.filterOrElse = exports.chainFirstEitherK = exports.chainEitherK = exports.fromEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromPredicate = exports.fromOption = void 0;
      var Chain_1 = require_Chain();
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      function fromOption(F) {
        return function(onNone) {
          return function(ma) {
            return F.fromEither(_.isNone(ma) ? _.left(onNone()) : _.right(ma.value));
          };
        };
      }
      exports.fromOption = fromOption;
      function fromPredicate(F) {
        return function(predicate, onFalse) {
          return function(a) {
            return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
          };
        };
      }
      exports.fromPredicate = fromPredicate;
      function fromOptionK(F) {
        var fromOptionF = fromOption(F);
        return function(onNone) {
          var from = fromOptionF(onNone);
          return function(f) {
            return (0, function_1.flow)(f, from);
          };
        };
      }
      exports.fromOptionK = fromOptionK;
      function chainOptionK(F, M) {
        var fromOptionKF = fromOptionK(F);
        return function(onNone) {
          var from = fromOptionKF(onNone);
          return function(f) {
            return function(ma) {
              return M.chain(ma, from(f));
            };
          };
        };
      }
      exports.chainOptionK = chainOptionK;
      function fromEitherK(F) {
        return function(f) {
          return (0, function_1.flow)(f, F.fromEither);
        };
      }
      exports.fromEitherK = fromEitherK;
      function chainEitherK(F, M) {
        var fromEitherKF = fromEitherK(F);
        return function(f) {
          return function(ma) {
            return M.chain(ma, fromEitherKF(f));
          };
        };
      }
      exports.chainEitherK = chainEitherK;
      function chainFirstEitherK(F, M) {
        var tapEitherM = tapEither(F, M);
        return function(f) {
          return function(ma) {
            return tapEitherM(ma, f);
          };
        };
      }
      exports.chainFirstEitherK = chainFirstEitherK;
      function filterOrElse(F, M) {
        return function(predicate, onFalse) {
          return function(ma) {
            return M.chain(ma, function(a) {
              return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
            });
          };
        };
      }
      exports.filterOrElse = filterOrElse;
      function tapEither(F, M) {
        var fromEither = fromEitherK(F);
        var tapM = (0, Chain_1.tap)(M);
        return function(self, f) {
          return tapM(self, fromEither(f));
        };
      }
      exports.tapEither = tapEither;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Predicate.js
  var require_Predicate = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Predicate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.and = exports.or = exports.not = exports.Contravariant = exports.getMonoidAll = exports.getSemigroupAll = exports.getMonoidAny = exports.getSemigroupAny = exports.URI = exports.contramap = void 0;
      var function_1 = require_function();
      var contramap_ = function contramap_2(predicate, f) {
        return (0, function_1.pipe)(predicate, (0, exports.contramap)(f));
      };
      var contramap = function contramap2(f) {
        return function(predicate) {
          return (0, function_1.flow)(f, predicate);
        };
      };
      exports.contramap = contramap;
      exports.URI = "Predicate";
      var getSemigroupAny = function getSemigroupAny2() {
        return {
          concat: function concat(first, second) {
            return (0, function_1.pipe)(first, (0, exports.or)(second));
          }
        };
      };
      exports.getSemigroupAny = getSemigroupAny;
      var getMonoidAny = function getMonoidAny2() {
        return {
          concat: (0, exports.getSemigroupAny)().concat,
          empty: function_1.constFalse
        };
      };
      exports.getMonoidAny = getMonoidAny;
      var getSemigroupAll = function getSemigroupAll2() {
        return {
          concat: function concat(first, second) {
            return (0, function_1.pipe)(first, (0, exports.and)(second));
          }
        };
      };
      exports.getSemigroupAll = getSemigroupAll;
      var getMonoidAll = function getMonoidAll2() {
        return {
          concat: (0, exports.getSemigroupAll)().concat,
          empty: function_1.constTrue
        };
      };
      exports.getMonoidAll = getMonoidAll;
      exports.Contravariant = {
        URI: exports.URI,
        contramap: contramap_
      };
      var not = function not2(predicate) {
        return function(a) {
          return !predicate(a);
        };
      };
      exports.not = not;
      var or = function or2(second) {
        return function(first) {
          return function(a) {
            return first(a) || second(a);
          };
        };
      };
      exports.or = or;
      var and = function and2(second) {
        return function(first) {
          return function(a) {
            return first(a) && second(a);
          };
        };
      };
      exports.and = and;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Magma.js
  var require_Magma = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Magma.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.concatAll = exports.endo = exports.filterSecond = exports.filterFirst = exports.reverse = void 0;
      var reverse = function reverse2(M) {
        return {
          concat: function concat(first, second) {
            return M.concat(second, first);
          }
        };
      };
      exports.reverse = reverse;
      var filterFirst = function filterFirst2(predicate) {
        return function(M) {
          return {
            concat: function concat(first, second) {
              return predicate(first) ? M.concat(first, second) : second;
            }
          };
        };
      };
      exports.filterFirst = filterFirst;
      var filterSecond = function filterSecond2(predicate) {
        return function(M) {
          return {
            concat: function concat(first, second) {
              return predicate(second) ? M.concat(first, second) : first;
            }
          };
        };
      };
      exports.filterSecond = filterSecond;
      var endo = function endo2(f) {
        return function(M) {
          return {
            concat: function concat(first, second) {
              return M.concat(f(first), f(second));
            }
          };
        };
      };
      exports.endo = endo;
      var concatAll = function concatAll2(M) {
        return function(startWith) {
          return function(as) {
            return as.reduce(function(a, acc) {
              return M.concat(a, acc);
            }, startWith);
          };
        };
      };
      exports.concatAll = concatAll;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Eq.js
  var require_Eq = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Eq.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.eqDate = exports.eqNumber = exports.eqString = exports.eqBoolean = exports.eq = exports.strictEqual = exports.getStructEq = exports.getTupleEq = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.eqStrict = exports.URI = exports.contramap = exports.tuple = exports.struct = exports.fromEquals = void 0;
      var function_1 = require_function();
      var fromEquals = function fromEquals2(_equals) {
        return {
          equals: function equals(x, y) {
            return x === y || _equals(x, y);
          }
        };
      };
      exports.fromEquals = fromEquals;
      var struct = function struct2(eqs) {
        return (0, exports.fromEquals)(function(first, second) {
          for (var key in eqs) {
            if (!eqs[key].equals(first[key], second[key])) {
              return false;
            }
          }
          return true;
        });
      };
      exports.struct = struct;
      var tuple = function tuple2() {
        var eqs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          eqs[_i] = arguments[_i];
        }
        return (0, exports.fromEquals)(function(first, second) {
          return eqs.every(function(E, i) {
            return E.equals(first[i], second[i]);
          });
        });
      };
      exports.tuple = tuple;
      var contramap_ = function contramap_2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f));
      };
      var contramap = function contramap2(f) {
        return function(fa) {
          return (0, exports.fromEquals)(function(x, y) {
            return fa.equals(f(x), f(y));
          });
        };
      };
      exports.contramap = contramap;
      exports.URI = "Eq";
      exports.eqStrict = {
        equals: function equals(a, b) {
          return a === b;
        }
      };
      var empty = {
        equals: function equals() {
          return true;
        }
      };
      var getSemigroup = function getSemigroup2() {
        return {
          concat: function concat(x, y) {
            return (0, exports.fromEquals)(function(a, b) {
              return x.equals(a, b) && y.equals(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup;
      var getMonoid = function getMonoid2() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty
        };
      };
      exports.getMonoid = getMonoid;
      exports.Contravariant = {
        URI: exports.URI,
        contramap: contramap_
      };
      exports.getTupleEq = exports.tuple;
      exports.getStructEq = exports.struct;
      exports.strictEqual = exports.eqStrict.equals;
      exports.eq = exports.Contravariant;
      exports.eqBoolean = exports.eqStrict;
      exports.eqString = exports.eqStrict;
      exports.eqNumber = exports.eqStrict;
      exports.eqDate = {
        equals: function equals(first, second) {
          return first.valueOf() === second.valueOf();
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Ord.js
  var require_Ord = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Ord.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ordDate = exports.ordNumber = exports.ordString = exports.ordBoolean = exports.ord = exports.getDualOrd = exports.getTupleOrd = exports.between = exports.clamp = exports.max = exports.min = exports.geq = exports.leq = exports.gt = exports.lt = exports.equals = exports.trivial = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.URI = exports.contramap = exports.reverse = exports.tuple = exports.fromCompare = exports.equalsDefault = void 0;
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var equalsDefault = function equalsDefault2(compare2) {
        return function(first, second) {
          return first === second || compare2(first, second) === 0;
        };
      };
      exports.equalsDefault = equalsDefault;
      var fromCompare = function fromCompare2(_compare) {
        return {
          equals: (0, exports.equalsDefault)(_compare),
          compare: function compare2(first, second) {
            return first === second ? 0 : _compare(first, second);
          }
        };
      };
      exports.fromCompare = fromCompare;
      var tuple = function tuple2() {
        var ords = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          ords[_i] = arguments[_i];
        }
        return (0, exports.fromCompare)(function(first, second) {
          var i = 0;
          for (; i < ords.length - 1; i++) {
            var r = ords[i].compare(first[i], second[i]);
            if (r !== 0) {
              return r;
            }
          }
          return ords[i].compare(first[i], second[i]);
        });
      };
      exports.tuple = tuple;
      var reverse = function reverse2(O) {
        return (0, exports.fromCompare)(function(first, second) {
          return O.compare(second, first);
        });
      };
      exports.reverse = reverse;
      var contramap_ = function contramap_2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f));
      };
      var contramap = function contramap2(f) {
        return function(fa) {
          return (0, exports.fromCompare)(function(first, second) {
            return fa.compare(f(first), f(second));
          });
        };
      };
      exports.contramap = contramap;
      exports.URI = "Ord";
      var getSemigroup = function getSemigroup2() {
        return {
          concat: function concat(first, second) {
            return (0, exports.fromCompare)(function(a, b) {
              var ox = first.compare(a, b);
              return ox !== 0 ? ox : second.compare(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup;
      var getMonoid = function getMonoid2() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty: (0, exports.fromCompare)(function() {
            return 0;
          })
        };
      };
      exports.getMonoid = getMonoid;
      exports.Contravariant = {
        URI: exports.URI,
        contramap: contramap_
      };
      exports.trivial = {
        equals: function_1.constTrue,
        compare: /* @__PURE__ */ (0, function_1.constant)(0)
      };
      var equals = function equals2(O) {
        return function(second) {
          return function(first) {
            return first === second || O.compare(first, second) === 0;
          };
        };
      };
      exports.equals = equals;
      var lt = function lt2(O) {
        return function(first, second) {
          return O.compare(first, second) === -1;
        };
      };
      exports.lt = lt;
      var gt = function gt2(O) {
        return function(first, second) {
          return O.compare(first, second) === 1;
        };
      };
      exports.gt = gt;
      var leq = function leq2(O) {
        return function(first, second) {
          return O.compare(first, second) !== 1;
        };
      };
      exports.leq = leq;
      var geq = function geq2(O) {
        return function(first, second) {
          return O.compare(first, second) !== -1;
        };
      };
      exports.geq = geq;
      var min = function min2(O) {
        return function(first, second) {
          return first === second || O.compare(first, second) < 1 ? first : second;
        };
      };
      exports.min = min;
      var max = function max2(O) {
        return function(first, second) {
          return first === second || O.compare(first, second) > -1 ? first : second;
        };
      };
      exports.max = max;
      var clamp = function clamp2(O) {
        var minO = (0, exports.min)(O);
        var maxO = (0, exports.max)(O);
        return function(low, hi) {
          return function(a) {
            return maxO(minO(a, hi), low);
          };
        };
      };
      exports.clamp = clamp;
      var between = function between2(O) {
        var ltO = (0, exports.lt)(O);
        var gtO = (0, exports.gt)(O);
        return function(low, hi) {
          return function(a) {
            return ltO(a, low) || gtO(a, hi) ? false : true;
          };
        };
      };
      exports.between = between;
      exports.getTupleOrd = exports.tuple;
      exports.getDualOrd = exports.reverse;
      exports.ord = exports.Contravariant;
      function compare(first, second) {
        return first < second ? -1 : first > second ? 1 : 0;
      }
      var strictOrd = {
        equals: Eq_1.eqStrict.equals,
        compare
      };
      exports.ordBoolean = strictOrd;
      exports.ordString = strictOrd;
      exports.ordNumber = strictOrd;
      exports.ordDate = (0, function_1.pipe)(
        exports.ordNumber,
        /* @__PURE__ */ (0, exports.contramap)(function(date) {
          return date.valueOf();
        })
      );
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Semigroup.js
  var require_Semigroup = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Semigroup.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.semigroupProduct = exports.semigroupSum = exports.semigroupString = exports.getFunctionSemigroup = exports.semigroupAny = exports.semigroupAll = exports.fold = exports.getIntercalateSemigroup = exports.getMeetSemigroup = exports.getJoinSemigroup = exports.getDualSemigroup = exports.getStructSemigroup = exports.getTupleSemigroup = exports.getFirstSemigroup = exports.getLastSemigroup = exports.getObjectSemigroup = exports.semigroupVoid = exports.concatAll = exports.last = exports.first = exports.intercalate = exports.tuple = exports.struct = exports.reverse = exports.constant = exports.max = exports.min = void 0;
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      var M = __importStar(require_Magma());
      var Or = __importStar(require_Ord());
      var min = function min2(O) {
        return {
          concat: Or.min(O)
        };
      };
      exports.min = min;
      var max = function max2(O) {
        return {
          concat: Or.max(O)
        };
      };
      exports.max = max;
      var constant = function constant2(a) {
        return {
          concat: function concat() {
            return a;
          }
        };
      };
      exports.constant = constant;
      exports.reverse = M.reverse;
      var struct = function struct2(semigroups) {
        return {
          concat: function concat(first2, second) {
            var r = {};
            for (var k in semigroups) {
              if (_.has.call(semigroups, k)) {
                r[k] = semigroups[k].concat(first2[k], second[k]);
              }
            }
            return r;
          }
        };
      };
      exports.struct = struct;
      var tuple = function tuple2() {
        var semigroups = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          semigroups[_i] = arguments[_i];
        }
        return {
          concat: function concat(first2, second) {
            return semigroups.map(function(s, i) {
              return s.concat(first2[i], second[i]);
            });
          }
        };
      };
      exports.tuple = tuple;
      var intercalate = function intercalate2(middle) {
        return function(S) {
          return {
            concat: function concat(x, y) {
              return S.concat(x, S.concat(middle, y));
            }
          };
        };
      };
      exports.intercalate = intercalate;
      var first = function first2() {
        return {
          concat: function_1.identity
        };
      };
      exports.first = first;
      var last = function last2() {
        return {
          concat: function concat(_2, y) {
            return y;
          }
        };
      };
      exports.last = last;
      exports.concatAll = M.concatAll;
      exports.semigroupVoid = (0, exports.constant)(void 0);
      var getObjectSemigroup = function getObjectSemigroup2() {
        return {
          concat: function concat(first2, second) {
            return Object.assign({}, first2, second);
          }
        };
      };
      exports.getObjectSemigroup = getObjectSemigroup;
      exports.getLastSemigroup = exports.last;
      exports.getFirstSemigroup = exports.first;
      exports.getTupleSemigroup = exports.tuple;
      exports.getStructSemigroup = exports.struct;
      exports.getDualSemigroup = exports.reverse;
      exports.getJoinSemigroup = exports.max;
      exports.getMeetSemigroup = exports.min;
      exports.getIntercalateSemigroup = exports.intercalate;
      function fold(S) {
        var concatAllS = (0, exports.concatAll)(S);
        return function(startWith, as) {
          return as === void 0 ? concatAllS(startWith) : concatAllS(startWith)(as);
        };
      }
      exports.fold = fold;
      exports.semigroupAll = {
        concat: function concat(x, y) {
          return x && y;
        }
      };
      exports.semigroupAny = {
        concat: function concat(x, y) {
          return x || y;
        }
      };
      exports.getFunctionSemigroup = function_1.getSemigroup;
      exports.semigroupString = {
        concat: function concat(x, y) {
          return x + y;
        }
      };
      exports.semigroupSum = {
        concat: function concat(x, y) {
          return x + y;
        }
      };
      exports.semigroupProduct = {
        concat: function concat(x, y) {
          return x * y;
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Separated.js
  var require_Separated = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Separated.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = void 0;
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var separated = function separated2(left2, right2) {
        return {
          left: left2,
          right: right2
        };
      };
      exports.separated = separated;
      var _map = function _map2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f));
      };
      var _mapLeft = function _mapLeft2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f));
      };
      var _bimap = function _bimap2(fa, g, f) {
        return (0, function_1.pipe)(fa, (0, exports.bimap)(g, f));
      };
      var map = function map2(f) {
        return function(fa) {
          return (0, exports.separated)((0, exports.left)(fa), f((0, exports.right)(fa)));
        };
      };
      exports.map = map;
      var mapLeft = function mapLeft2(f) {
        return function(fa) {
          return (0, exports.separated)(f((0, exports.left)(fa)), (0, exports.right)(fa));
        };
      };
      exports.mapLeft = mapLeft;
      var bimap = function bimap2(f, g) {
        return function(fa) {
          return (0, exports.separated)(f((0, exports.left)(fa)), g((0, exports.right)(fa)));
        };
      };
      exports.bimap = bimap;
      exports.URI = "Separated";
      exports.Bifunctor = {
        URI: exports.URI,
        mapLeft: _mapLeft,
        bimap: _bimap
      };
      exports.Functor = {
        URI: exports.URI,
        map: _map
      };
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      var left = function left2(s) {
        return s.left;
      };
      exports.left = left;
      var right = function right2(s) {
        return s.right;
      };
      exports.right = right;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Witherable.js
  var require_Witherable = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Witherable.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.filterE = exports.witherDefault = exports.wiltDefault = void 0;
      var _ = __importStar(require_internal());
      function wiltDefault(T, C) {
        return function(F) {
          var traverseF = T.traverse(F);
          return function(wa, f) {
            return F.map(traverseF(wa, f), C.separate);
          };
        };
      }
      exports.wiltDefault = wiltDefault;
      function witherDefault(T, C) {
        return function(F) {
          var traverseF = T.traverse(F);
          return function(wa, f) {
            return F.map(traverseF(wa, f), C.compact);
          };
        };
      }
      exports.witherDefault = witherDefault;
      function filterE(W) {
        return function(F) {
          var witherF = W.wither(F);
          return function(predicate) {
            return function(ga) {
              return witherF(ga, function(a) {
                return F.map(predicate(a), function(b) {
                  return b ? _.some(a) : _.none;
                });
              });
            };
          };
        };
      }
      exports.filterE = filterE;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Zero.js
  var require_Zero = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Zero.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.guard = void 0;
      function guard(F, P) {
        return function(b) {
          return b ? P.of(void 0) : F.zero();
        };
      }
      exports.guard = guard;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Option.js
  var require_Option = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Option.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Witherable = exports.wilt = exports.wither = exports.Traversable = exports.sequence = exports.traverse = exports.Filterable = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.Compactable = exports.separate = exports.compact = exports.Extend = exports.extend = exports.Alternative = exports.guard = exports.Zero = exports.zero = exports.Alt = exports.alt = exports.altW = exports.orElse = exports.Foldable = exports.reduceRight = exports.foldMap = exports.reduce = exports.Monad = exports.Chain = exports.flatMap = exports.Applicative = exports.Apply = exports.ap = exports.Pointed = exports.of = exports.asUnit = exports.as = exports.Functor = exports.map = exports.getMonoid = exports.getOrd = exports.getEq = exports.getShow = exports.URI = exports.getRight = exports.getLeft = exports.fromPredicate = exports.some = exports.none = void 0;
      exports.getFirstMonoid = exports.getApplyMonoid = exports.getApplySemigroup = exports.option = exports.mapNullable = exports.getRefinement = exports.chainFirst = exports.chain = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.ApT = exports.apS = exports.bind = exports["let"] = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toUndefined = exports.toNullable = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.chainFirstEitherK = exports.chainEitherK = exports.fromEitherK = exports.duplicate = exports.tapEither = exports.tap = exports.flatten = exports.apSecond = exports.apFirst = exports.flap = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.isNone = exports.isSome = exports.FromEither = exports.fromEither = exports.MonadThrow = exports.throwError = void 0;
      exports.getLastMonoid = void 0;
      var Applicative_1 = require_Applicative();
      var Apply_1 = require_Apply();
      var chainable = __importStar(require_Chain());
      var FromEither_1 = require_FromEither();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var Predicate_1 = require_Predicate();
      var Semigroup_1 = require_Semigroup();
      var Separated_1 = require_Separated();
      var Witherable_1 = require_Witherable();
      var Zero_1 = require_Zero();
      exports.none = _.none;
      exports.some = _.some;
      function fromPredicate(predicate) {
        return function(a) {
          return predicate(a) ? (0, exports.some)(a) : exports.none;
        };
      }
      exports.fromPredicate = fromPredicate;
      var getLeft = function getLeft2(ma) {
        return ma._tag === "Right" ? exports.none : (0, exports.some)(ma.left);
      };
      exports.getLeft = getLeft;
      var getRight = function getRight2(ma) {
        return ma._tag === "Left" ? exports.none : (0, exports.some)(ma.right);
      };
      exports.getRight = getRight;
      var _map = function _map2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f));
      };
      var _ap = function _ap2(fab, fa) {
        return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
      };
      var _reduce = function _reduce2(fa, b, f) {
        return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f));
      };
      var _foldMap = function _foldMap2(M) {
        var foldMapM = (0, exports.foldMap)(M);
        return function(fa, f) {
          return (0, function_1.pipe)(fa, foldMapM(f));
        };
      };
      var _reduceRight = function _reduceRight2(fa, b, f) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f));
      };
      var _traverse = function _traverse2(F) {
        var traverseF = (0, exports.traverse)(F);
        return function(ta, f) {
          return (0, function_1.pipe)(ta, traverseF(f));
        };
      };
      var _alt = function _alt2(fa, that) {
        return (0, function_1.pipe)(fa, (0, exports.alt)(that));
      };
      var _filter = function _filter2(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
      };
      var _filterMap = function _filterMap2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.filterMap)(f));
      };
      var _extend = function _extend2(wa, f) {
        return (0, function_1.pipe)(wa, (0, exports.extend)(f));
      };
      var _partition = function _partition2(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
      };
      var _partitionMap = function _partitionMap2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f));
      };
      exports.URI = "Option";
      var getShow = function getShow2(S) {
        return {
          show: function show(ma) {
            return (0, exports.isNone)(ma) ? "none" : "some(".concat(S.show(ma.value), ")");
          }
        };
      };
      exports.getShow = getShow;
      var getEq = function getEq2(E) {
        return {
          equals: function equals(x, y) {
            return x === y || ((0, exports.isNone)(x) ? (0, exports.isNone)(y) : (0, exports.isNone)(y) ? false : E.equals(x.value, y.value));
          }
        };
      };
      exports.getEq = getEq;
      var getOrd = function getOrd2(O) {
        return {
          equals: (0, exports.getEq)(O).equals,
          compare: function compare(x, y) {
            return x === y ? 0 : (0, exports.isSome)(x) ? (0, exports.isSome)(y) ? O.compare(x.value, y.value) : 1 : -1;
          }
        };
      };
      exports.getOrd = getOrd;
      var getMonoid = function getMonoid2(S) {
        return {
          concat: function concat(x, y) {
            return (0, exports.isNone)(x) ? y : (0, exports.isNone)(y) ? x : (0, exports.some)(S.concat(x.value, y.value));
          },
          empty: exports.none
        };
      };
      exports.getMonoid = getMonoid;
      var map = function map2(f) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? exports.none : (0, exports.some)(f(fa.value));
        };
      };
      exports.map = map;
      exports.Functor = {
        URI: exports.URI,
        map: _map
      };
      exports.as = (0, function_1.dual)(2, (0, Functor_1.as)(exports.Functor));
      exports.asUnit = (0, Functor_1.asUnit)(exports.Functor);
      exports.of = exports.some;
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      var ap = function ap2(fa) {
        return function(fab) {
          return (0, exports.isNone)(fab) ? exports.none : (0, exports.isNone)(fa) ? exports.none : (0, exports.some)(fab.value(fa.value));
        };
      };
      exports.ap = ap;
      exports.Apply = {
        URI: exports.URI,
        map: _map,
        ap: _ap
      };
      exports.Applicative = {
        URI: exports.URI,
        map: _map,
        ap: _ap,
        of: exports.of
      };
      exports.flatMap = (0, function_1.dual)(2, function(ma, f) {
        return (0, exports.isNone)(ma) ? exports.none : f(ma.value);
      });
      exports.Chain = {
        URI: exports.URI,
        map: _map,
        ap: _ap,
        chain: exports.flatMap
      };
      exports.Monad = {
        URI: exports.URI,
        map: _map,
        ap: _ap,
        of: exports.of,
        chain: exports.flatMap
      };
      var reduce = function reduce2(b, f) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? b : f(b, fa.value);
        };
      };
      exports.reduce = reduce;
      var foldMap = function foldMap2(M) {
        return function(f) {
          return function(fa) {
            return (0, exports.isNone)(fa) ? M.empty : f(fa.value);
          };
        };
      };
      exports.foldMap = foldMap;
      var reduceRight = function reduceRight2(b, f) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? b : f(fa.value, b);
        };
      };
      exports.reduceRight = reduceRight;
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.orElse = (0, function_1.dual)(2, function(self, that) {
        return (0, exports.isNone)(self) ? that() : self;
      });
      exports.altW = exports.orElse;
      exports.alt = exports.orElse;
      exports.Alt = {
        URI: exports.URI,
        map: _map,
        alt: _alt
      };
      var zero = function zero2() {
        return exports.none;
      };
      exports.zero = zero;
      exports.Zero = {
        URI: exports.URI,
        zero: exports.zero
      };
      exports.guard = (0, Zero_1.guard)(exports.Zero, exports.Pointed);
      exports.Alternative = {
        URI: exports.URI,
        map: _map,
        ap: _ap,
        of: exports.of,
        alt: _alt,
        zero: exports.zero
      };
      var extend = function extend2(f) {
        return function(wa) {
          return (0, exports.isNone)(wa) ? exports.none : (0, exports.some)(f(wa));
        };
      };
      exports.extend = extend;
      exports.Extend = {
        URI: exports.URI,
        map: _map,
        extend: _extend
      };
      exports.compact = (0, exports.flatMap)(function_1.identity);
      var defaultSeparated = /* @__PURE__ */ (0, Separated_1.separated)(exports.none, exports.none);
      var separate = function separate2(ma) {
        return (0, exports.isNone)(ma) ? defaultSeparated : (0, Separated_1.separated)((0, exports.getLeft)(ma.value), (0, exports.getRight)(ma.value));
      };
      exports.separate = separate;
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      var filter = function filter2(predicate) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? exports.none : predicate(fa.value) ? fa : exports.none;
        };
      };
      exports.filter = filter;
      var filterMap = function filterMap2(f) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? exports.none : f(fa.value);
        };
      };
      exports.filterMap = filterMap;
      var partition = function partition2(predicate) {
        return function(fa) {
          return (0, Separated_1.separated)(_filter(fa, (0, Predicate_1.not)(predicate)), _filter(fa, predicate));
        };
      };
      exports.partition = partition;
      var partitionMap = function partitionMap2(f) {
        return (0, function_1.flow)((0, exports.map)(f), exports.separate);
      };
      exports.partitionMap = partitionMap;
      exports.Filterable = {
        URI: exports.URI,
        map: _map,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap
      };
      var traverse = function traverse2(F) {
        return function(f) {
          return function(ta) {
            return (0, exports.isNone)(ta) ? F.of(exports.none) : F.map(f(ta.value), exports.some);
          };
        };
      };
      exports.traverse = traverse;
      var sequence = function sequence2(F) {
        return function(ta) {
          return (0, exports.isNone)(ta) ? F.of(exports.none) : F.map(ta.value, exports.some);
        };
      };
      exports.sequence = sequence;
      exports.Traversable = {
        URI: exports.URI,
        map: _map,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence
      };
      var _wither = /* @__PURE__ */ (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
      var _wilt = /* @__PURE__ */ (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
      var wither = function wither2(F) {
        var _witherF = _wither(F);
        return function(f) {
          return function(fa) {
            return _witherF(fa, f);
          };
        };
      };
      exports.wither = wither;
      var wilt = function wilt2(F) {
        var _wiltF = _wilt(F);
        return function(f) {
          return function(fa) {
            return _wiltF(fa, f);
          };
        };
      };
      exports.wilt = wilt;
      exports.Witherable = {
        URI: exports.URI,
        map: _map,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: _wither,
        wilt: _wilt
      };
      var throwError = function throwError2() {
        return exports.none;
      };
      exports.throwError = throwError;
      exports.MonadThrow = {
        URI: exports.URI,
        map: _map,
        ap: _ap,
        of: exports.of,
        chain: exports.flatMap,
        throwError: exports.throwError
      };
      exports.fromEither = exports.getRight;
      exports.FromEither = {
        URI: exports.URI,
        fromEither: exports.fromEither
      };
      exports.isSome = _.isSome;
      var isNone2 = function isNone3(fa) {
        return fa._tag === "None";
      };
      exports.isNone = isNone2;
      var matchW = function matchW2(onNone, onSome) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? onNone() : onSome(ma.value);
        };
      };
      exports.matchW = matchW;
      exports.foldW = exports.matchW;
      exports.match = exports.matchW;
      exports.fold = exports.match;
      var getOrElseW = function getOrElseW2(onNone) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? onNone() : ma.value;
        };
      };
      exports.getOrElseW = getOrElseW;
      exports.getOrElse = exports.getOrElseW;
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
      exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
      exports.flatten = exports.compact;
      exports.tap = (0, function_1.dual)(2, chainable.tap(exports.Chain));
      exports.tapEither = (0, function_1.dual)(2, (0, FromEither_1.tapEither)(exports.FromEither, exports.Chain));
      exports.duplicate = (0, exports.extend)(function_1.identity);
      exports.fromEitherK = (0, FromEither_1.fromEitherK)(exports.FromEither);
      exports.chainEitherK = /* @__PURE__ */ (0, FromEither_1.chainEitherK)(exports.FromEither, exports.Chain);
      exports.chainFirstEitherK = exports.tapEither;
      var fromNullable = function fromNullable2(a) {
        return a == null ? exports.none : (0, exports.some)(a);
      };
      exports.fromNullable = fromNullable;
      var tryCatch = function tryCatch2(f) {
        try {
          return (0, exports.some)(f());
        } catch (e) {
          return exports.none;
        }
      };
      exports.tryCatch = tryCatch;
      var tryCatchK = function tryCatchK2(f) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return (0, exports.tryCatch)(function() {
            return f.apply(void 0, a);
          });
        };
      };
      exports.tryCatchK = tryCatchK;
      var fromNullableK = function fromNullableK2(f) {
        return (0, function_1.flow)(f, exports.fromNullable);
      };
      exports.fromNullableK = fromNullableK;
      var chainNullableK = function chainNullableK2(f) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? exports.none : (0, exports.fromNullable)(f(ma.value));
        };
      };
      exports.chainNullableK = chainNullableK;
      exports.toNullable = (0, exports.match)(function_1.constNull, function_1.identity);
      exports.toUndefined = (0, exports.match)(function_1.constUndefined, function_1.identity);
      function elem(E) {
        return function(a, ma) {
          if (ma === void 0) {
            var elemE_1 = elem(E);
            return function(ma2) {
              return elemE_1(a, ma2);
            };
          }
          return (0, exports.isNone)(ma) ? false : E.equals(a, ma.value);
        };
      }
      exports.elem = elem;
      var exists = function exists2(predicate) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? false : predicate(ma.value);
        };
      };
      exports.exists = exists;
      exports.Do = (0, exports.of)(_.emptyRecord);
      exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
      var let_ = /* @__PURE__ */ (0, Functor_1["let"])(exports.Functor);
      exports["let"] = let_;
      exports.bind = chainable.bind(exports.Chain);
      exports.apS = (0, Apply_1.apS)(exports.Apply);
      exports.ApT = (0, exports.of)(_.emptyReadonlyArray);
      var traverseReadonlyNonEmptyArrayWithIndex = function traverseReadonlyNonEmptyArrayWithIndex2(f) {
        return function(as) {
          var o = f(0, _.head(as));
          if ((0, exports.isNone)(o)) {
            return exports.none;
          }
          var out = [o.value];
          for (var i = 1; i < as.length; i++) {
            var o_1 = f(i, as[i]);
            if ((0, exports.isNone)(o_1)) {
              return exports.none;
            }
            out.push(o_1.value);
          }
          return (0, exports.some)(out);
        };
      };
      exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex;
      var traverseReadonlyArrayWithIndex = function traverseReadonlyArrayWithIndex2(f) {
        var g = (0, exports.traverseReadonlyNonEmptyArrayWithIndex)(f);
        return function(as) {
          return _.isNonEmpty(as) ? g(as) : exports.ApT;
        };
      };
      exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;
      exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex;
      var traverseArray = function traverseArray2(f) {
        return (0, exports.traverseReadonlyArrayWithIndex)(function(_2, a) {
          return f(a);
        });
      };
      exports.traverseArray = traverseArray;
      exports.sequenceArray = /* @__PURE__ */ (0, exports.traverseArray)(function_1.identity);
      exports.chain = exports.flatMap;
      exports.chainFirst = exports.tap;
      function getRefinement(getOption) {
        return function(a) {
          return (0, exports.isSome)(getOption(a));
        };
      }
      exports.getRefinement = getRefinement;
      exports.mapNullable = exports.chainNullableK;
      exports.option = {
        URI: exports.URI,
        map: _map,
        of: exports.of,
        ap: _ap,
        chain: exports.flatMap,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        zero: exports.zero,
        alt: _alt,
        extend: _extend,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: _wither,
        wilt: _wilt,
        throwError: exports.throwError
      };
      exports.getApplySemigroup = (0, Apply_1.getApplySemigroup)(exports.Apply);
      exports.getApplyMonoid = (0, Applicative_1.getApplicativeMonoid)(exports.Applicative);
      var getFirstMonoid = function getFirstMonoid2() {
        return (0, exports.getMonoid)((0, Semigroup_1.first)());
      };
      exports.getFirstMonoid = getFirstMonoid;
      var getLastMonoid = function getLastMonoid2() {
        return (0, exports.getMonoid)((0, Semigroup_1.last)());
      };
      exports.getLastMonoid = getLastMonoid;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js
  var require_ReadonlyNonEmptyArray = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.reduceRight = exports.foldMap = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.flatMap = exports.ap = exports.alt = exports.altW = exports.of = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.modifyAt = exports.updateAt = exports.sort = exports.groupBy = exports.group = exports.reverse = exports.concat = exports.concatW = exports.fromArray = exports.unappend = exports.unprepend = exports.range = exports.replicate = exports.makeBy = exports.fromReadonlyArray = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.appendW = exports.prepend = exports.prependW = exports.isOutOfBound = exports.isNonEmpty = exports.empty = void 0;
      exports.groupSort = exports.chain = exports.intercalate = exports.updateLast = exports.modifyLast = exports.updateHead = exports.modifyHead = exports.matchRight = exports.matchLeft = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports["let"] = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getUnionSemigroup = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = void 0;
      exports.readonlyNonEmptyArray = exports.fold = exports.prependToAll = exports.insertAt = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = void 0;
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var Ord_1 = require_Ord();
      var Se = __importStar(require_Semigroup());
      exports.empty = _.emptyReadonlyArray;
      exports.isNonEmpty = _.isNonEmpty;
      var isOutOfBound = function isOutOfBound2(i, as) {
        return i < 0 || i >= as.length;
      };
      exports.isOutOfBound = isOutOfBound;
      var prependW = function prependW2(head) {
        return function(tail) {
          return __spreadArray([head], tail, true);
        };
      };
      exports.prependW = prependW;
      exports.prepend = exports.prependW;
      var appendW = function appendW2(end) {
        return function(init2) {
          return __spreadArray(__spreadArray([], init2, true), [end], false);
        };
      };
      exports.appendW = appendW;
      exports.append = exports.appendW;
      var unsafeInsertAt = function unsafeInsertAt2(i, a, as) {
        if ((0, exports.isNonEmpty)(as)) {
          var xs = _.fromReadonlyNonEmptyArray(as);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      exports.unsafeInsertAt = unsafeInsertAt;
      var unsafeUpdateAt = function unsafeUpdateAt2(i, a, as) {
        if (as[i] === a) {
          return as;
        } else {
          var xs = _.fromReadonlyNonEmptyArray(as);
          xs[i] = a;
          return xs;
        }
      };
      exports.unsafeUpdateAt = unsafeUpdateAt;
      var uniq = function uniq2(E) {
        return function(as) {
          if (as.length === 1) {
            return as;
          }
          var out = [(0, exports.head)(as)];
          var rest = (0, exports.tail)(as);
          var _loop_1 = function _loop_12(a2) {
            if (out.every(function(o) {
              return !E.equals(o, a2);
            })) {
              out.push(a2);
            }
          };
          for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
            var a = rest_1[_i];
            _loop_1(a);
          }
          return out;
        };
      };
      exports.uniq = uniq;
      var sortBy = function sortBy2(ords) {
        if ((0, exports.isNonEmpty)(ords)) {
          var M = (0, Ord_1.getMonoid)();
          return (0, exports.sort)(ords.reduce(M.concat, M.empty));
        }
        return function_1.identity;
      };
      exports.sortBy = sortBy;
      var union = function union2(E) {
        var uniqE = (0, exports.uniq)(E);
        return function(second) {
          return function(first) {
            return uniqE((0, function_1.pipe)(first, concat(second)));
          };
        };
      };
      exports.union = union;
      var rotate = function rotate2(n) {
        return function(as) {
          var len = as.length;
          var m = Math.round(n) % len;
          if ((0, exports.isOutOfBound)(Math.abs(m), as) || m === 0) {
            return as;
          }
          if (m < 0) {
            var _a = (0, exports.splitAt)(-m)(as), f = _a[0], s = _a[1];
            return (0, function_1.pipe)(s, concat(f));
          } else {
            return (0, exports.rotate)(m - len)(as);
          }
        };
      };
      exports.rotate = rotate;
      var fromReadonlyArray = function fromReadonlyArray2(as) {
        return (0, exports.isNonEmpty)(as) ? _.some(as) : _.none;
      };
      exports.fromReadonlyArray = fromReadonlyArray;
      var makeBy = function makeBy2(f) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f(0)];
          for (var i = 1; i < j; i++) {
            out.push(f(i));
          }
          return out;
        };
      };
      exports.makeBy = makeBy;
      var replicate = function replicate2(a) {
        return (0, exports.makeBy)(function() {
          return a;
        });
      };
      exports.replicate = replicate;
      var range = function range2(start, end) {
        return start <= end ? (0, exports.makeBy)(function(i) {
          return start + i;
        })(end - start + 1) : [start];
      };
      exports.range = range;
      var unprepend = function unprepend2(as) {
        return [(0, exports.head)(as), (0, exports.tail)(as)];
      };
      exports.unprepend = unprepend;
      var unappend = function unappend2(as) {
        return [(0, exports.init)(as), (0, exports.last)(as)];
      };
      exports.unappend = unappend;
      var fromArray = function fromArray2(as) {
        return (0, exports.fromReadonlyArray)(as.slice());
      };
      exports.fromArray = fromArray;
      function concatW(second) {
        return function(first) {
          return first.concat(second);
        };
      }
      exports.concatW = concatW;
      function concat(x, y) {
        return y ? x.concat(y) : function(y2) {
          return y2.concat(x);
        };
      }
      exports.concat = concat;
      var reverse = function reverse2(as) {
        return as.length === 1 ? as : __spreadArray([(0, exports.last)(as)], as.slice(0, -1).reverse(), true);
      };
      exports.reverse = reverse;
      function group(E) {
        return function(as) {
          var len = as.length;
          if (len === 0) {
            return exports.empty;
          }
          var out = [];
          var head = as[0];
          var nea = [head];
          for (var i = 1; i < len; i++) {
            var a = as[i];
            if (E.equals(a, head)) {
              nea.push(a);
            } else {
              out.push(nea);
              head = a;
              nea = [head];
            }
          }
          out.push(nea);
          return out;
        };
      }
      exports.group = group;
      var groupBy = function groupBy2(f) {
        return function(as) {
          var out = {};
          for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            var k = f(a);
            if (_.has.call(out, k)) {
              out[k].push(a);
            } else {
              out[k] = [a];
            }
          }
          return out;
        };
      };
      exports.groupBy = groupBy;
      var sort = function sort2(O) {
        return function(as) {
          return as.length === 1 ? as : as.slice().sort(O.compare);
        };
      };
      exports.sort = sort;
      var updateAt = function updateAt2(i, a) {
        return (0, exports.modifyAt)(i, function() {
          return a;
        });
      };
      exports.updateAt = updateAt;
      var modifyAt = function modifyAt2(i, f) {
        return function(as) {
          return (0, exports.isOutOfBound)(i, as) ? _.none : _.some((0, exports.unsafeUpdateAt)(i, f(as[i]), as));
        };
      };
      exports.modifyAt = modifyAt;
      var zipWith = function zipWith2(as, bs, f) {
        var cs = [f(as[0], bs[0])];
        var len = Math.min(as.length, bs.length);
        for (var i = 1; i < len; i++) {
          cs[i] = f(as[i], bs[i]);
        }
        return cs;
      };
      exports.zipWith = zipWith;
      function zip(as, bs) {
        if (bs === void 0) {
          return function(bs2) {
            return zip(bs2, as);
          };
        }
        return (0, exports.zipWith)(as, bs, function(a, b) {
          return [a, b];
        });
      }
      exports.zip = zip;
      var unzip = function unzip2(abs) {
        var fa = [abs[0][0]];
        var fb = [abs[0][1]];
        for (var i = 1; i < abs.length; i++) {
          fa[i] = abs[i][0];
          fb[i] = abs[i][1];
        }
        return [fa, fb];
      };
      exports.unzip = unzip;
      var prependAll = function prependAll2(middle) {
        return function(as) {
          var out = [middle, as[0]];
          for (var i = 1; i < as.length; i++) {
            out.push(middle, as[i]);
          }
          return out;
        };
      };
      exports.prependAll = prependAll;
      var intersperse = function intersperse2(middle) {
        return function(as) {
          var rest = (0, exports.tail)(as);
          return (0, exports.isNonEmpty)(rest) ? (0, function_1.pipe)(rest, (0, exports.prependAll)(middle), (0, exports.prepend)((0, exports.head)(as))) : as;
        };
      };
      exports.intersperse = intersperse;
      var chainWithIndex = function chainWithIndex2(f) {
        return function(as) {
          var out = _.fromReadonlyNonEmptyArray(f(0, (0, exports.head)(as)));
          for (var i = 1; i < as.length; i++) {
            out.push.apply(out, f(i, as[i]));
          }
          return out;
        };
      };
      exports.chainWithIndex = chainWithIndex;
      var chop = function chop2(f) {
        return function(as) {
          var _a = f(as), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while ((0, exports.isNonEmpty)(next)) {
            var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      exports.chop = chop;
      var splitAt = function splitAt2(n) {
        return function(as) {
          var m = Math.max(1, n);
          return m >= as.length ? [as, exports.empty] : [(0, function_1.pipe)(as.slice(1, m), (0, exports.prepend)((0, exports.head)(as))), as.slice(m)];
        };
      };
      exports.splitAt = splitAt;
      var chunksOf = function chunksOf2(n) {
        return (0, exports.chop)((0, exports.splitAt)(n));
      };
      exports.chunksOf = chunksOf;
      var _map = function _map2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f));
      };
      var _mapWithIndex = function _mapWithIndex2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.mapWithIndex)(f));
      };
      var _ap = function _ap2(fab, fa) {
        return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
      };
      var _extend = function _extend2(wa, f) {
        return (0, function_1.pipe)(wa, (0, exports.extend)(f));
      };
      var _reduce = function _reduce2(fa, b, f) {
        return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f));
      };
      var _foldMap = function _foldMap2(M) {
        var foldMapM = (0, exports.foldMap)(M);
        return function(fa, f) {
          return (0, function_1.pipe)(fa, foldMapM(f));
        };
      };
      var _reduceRight = function _reduceRight2(fa, b, f) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f));
      };
      var _traverse = function _traverse2(F) {
        var traverseF = (0, exports.traverse)(F);
        return function(ta, f) {
          return (0, function_1.pipe)(ta, traverseF(f));
        };
      };
      var _alt = function _alt2(fa, that) {
        return (0, function_1.pipe)(fa, (0, exports.alt)(that));
      };
      var _reduceWithIndex = function _reduceWithIndex2(fa, b, f) {
        return (0, function_1.pipe)(fa, (0, exports.reduceWithIndex)(b, f));
      };
      var _foldMapWithIndex = function _foldMapWithIndex2(M) {
        var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
        return function(fa, f) {
          return (0, function_1.pipe)(fa, foldMapWithIndexM(f));
        };
      };
      var _reduceRightWithIndex = function _reduceRightWithIndex2(fa, b, f) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRightWithIndex)(b, f));
      };
      var _traverseWithIndex = function _traverseWithIndex2(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(ta, f) {
          return (0, function_1.pipe)(ta, traverseWithIndexF(f));
        };
      };
      exports.of = _.singleton;
      var altW = function altW2(that) {
        return function(as) {
          return (0, function_1.pipe)(as, concatW(that()));
        };
      };
      exports.altW = altW;
      exports.alt = exports.altW;
      var ap = function ap2(as) {
        return (0, exports.flatMap)(function(f) {
          return (0, function_1.pipe)(as, (0, exports.map)(f));
        });
      };
      exports.ap = ap;
      exports.flatMap = (0, function_1.dual)(2, function(ma, f) {
        return (0, function_1.pipe)(ma, (0, exports.chainWithIndex)(function(i, a) {
          return f(a, i);
        }));
      });
      var extend = function extend2(f) {
        return function(as) {
          var next = (0, exports.tail)(as);
          var out = [f(as)];
          while ((0, exports.isNonEmpty)(next)) {
            out.push(f(next));
            next = (0, exports.tail)(next);
          }
          return out;
        };
      };
      exports.extend = extend;
      exports.duplicate = /* @__PURE__ */ (0, exports.extend)(function_1.identity);
      exports.flatten = /* @__PURE__ */ (0, exports.flatMap)(function_1.identity);
      var map = function map2(f) {
        return (0, exports.mapWithIndex)(function(_2, a) {
          return f(a);
        });
      };
      exports.map = map;
      var mapWithIndex = function mapWithIndex2(f) {
        return function(as) {
          var out = [f(0, (0, exports.head)(as))];
          for (var i = 1; i < as.length; i++) {
            out.push(f(i, as[i]));
          }
          return out;
        };
      };
      exports.mapWithIndex = mapWithIndex;
      var reduce = function reduce2(b, f) {
        return (0, exports.reduceWithIndex)(b, function(_2, b2, a) {
          return f(b2, a);
        });
      };
      exports.reduce = reduce;
      var foldMap = function foldMap2(S) {
        return function(f) {
          return function(as) {
            return as.slice(1).reduce(function(s, a) {
              return S.concat(s, f(a));
            }, f(as[0]));
          };
        };
      };
      exports.foldMap = foldMap;
      var reduceRight = function reduceRight2(b, f) {
        return (0, exports.reduceRightWithIndex)(b, function(_2, b2, a) {
          return f(b2, a);
        });
      };
      exports.reduceRight = reduceRight;
      var reduceWithIndex = function reduceWithIndex2(b, f) {
        return function(as) {
          return as.reduce(function(b2, a, i) {
            return f(i, b2, a);
          }, b);
        };
      };
      exports.reduceWithIndex = reduceWithIndex;
      var foldMapWithIndex = function foldMapWithIndex2(S) {
        return function(f) {
          return function(as) {
            return as.slice(1).reduce(function(s, a, i) {
              return S.concat(s, f(i + 1, a));
            }, f(0, as[0]));
          };
        };
      };
      exports.foldMapWithIndex = foldMapWithIndex;
      var reduceRightWithIndex = function reduceRightWithIndex2(b, f) {
        return function(as) {
          return as.reduceRight(function(b2, a, i) {
            return f(i, a, b2);
          }, b);
        };
      };
      exports.reduceRightWithIndex = reduceRightWithIndex;
      var traverse = function traverse2(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(f) {
          return traverseWithIndexF(function(_2, a) {
            return f(a);
          });
        };
      };
      exports.traverse = traverse;
      var sequence = function sequence2(F) {
        return (0, exports.traverseWithIndex)(F)(function_1.SK);
      };
      exports.sequence = sequence;
      var traverseWithIndex = function traverseWithIndex2(F) {
        return function(f) {
          return function(as) {
            var out = F.map(f(0, (0, exports.head)(as)), exports.of);
            for (var i = 1; i < as.length; i++) {
              out = F.ap(F.map(out, function(bs) {
                return function(b) {
                  return (0, function_1.pipe)(bs, (0, exports.append)(b));
                };
              }), f(i, as[i]));
            }
            return out;
          };
        };
      };
      exports.traverseWithIndex = traverseWithIndex;
      exports.extract = _.head;
      exports.URI = "ReadonlyNonEmptyArray";
      var getShow = function getShow2(S) {
        return {
          show: function show(as) {
            return "[".concat(as.map(S.show).join(", "), "]");
          }
        };
      };
      exports.getShow = getShow;
      var getSemigroup = function getSemigroup2() {
        return {
          concat
        };
      };
      exports.getSemigroup = getSemigroup;
      var getEq = function getEq2(E) {
        return (0, Eq_1.fromEquals)(function(xs, ys) {
          return xs.length === ys.length && xs.every(function(x, i) {
            return E.equals(x, ys[i]);
          });
        });
      };
      exports.getEq = getEq;
      var getUnionSemigroup = function getUnionSemigroup2(E) {
        var unionE = (0, exports.union)(E);
        return {
          concat: function concat2(first, second) {
            return unionE(second)(first);
          }
        };
      };
      exports.getUnionSemigroup = getUnionSemigroup;
      exports.Functor = {
        URI: exports.URI,
        map: _map
      };
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map,
        mapWithIndex: _mapWithIndex
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map,
        ap: _ap
      };
      exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
      exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map,
        ap: _ap,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map,
        ap: _ap,
        chain: exports.flatMap
      };
      exports.chainFirst = (0, Chain_1.chainFirst)(exports.Chain);
      exports.Monad = {
        URI: exports.URI,
        map: _map,
        ap: _ap,
        of: exports.of,
        chain: exports.flatMap
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map,
        alt: _alt
      };
      exports.Comonad = {
        URI: exports.URI,
        map: _map,
        extend: _extend,
        extract: exports.extract
      };
      exports.Do = (0, exports.of)(_.emptyRecord);
      exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
      var let_ = /* @__PURE__ */ (0, Functor_1["let"])(exports.Functor);
      exports["let"] = let_;
      exports.bind = (0, Chain_1.bind)(exports.Chain);
      exports.apS = (0, Apply_1.apS)(exports.Apply);
      exports.head = exports.extract;
      exports.tail = _.tail;
      var last = function last2(as) {
        return as[as.length - 1];
      };
      exports.last = last;
      var init = function init2(as) {
        return as.slice(0, -1);
      };
      exports.init = init;
      var min = function min2(O) {
        var S = Se.min(O);
        return function(as) {
          return as.reduce(S.concat);
        };
      };
      exports.min = min;
      var max = function max2(O) {
        var S = Se.max(O);
        return function(as) {
          return as.reduce(S.concat);
        };
      };
      exports.max = max;
      var concatAll = function concatAll2(S) {
        return function(as) {
          return as.reduce(S.concat);
        };
      };
      exports.concatAll = concatAll;
      var matchLeft = function matchLeft2(f) {
        return function(as) {
          return f((0, exports.head)(as), (0, exports.tail)(as));
        };
      };
      exports.matchLeft = matchLeft;
      var matchRight = function matchRight2(f) {
        return function(as) {
          return f((0, exports.init)(as), (0, exports.last)(as));
        };
      };
      exports.matchRight = matchRight;
      var modifyHead = function modifyHead2(f) {
        return function(as) {
          return __spreadArray([f((0, exports.head)(as))], (0, exports.tail)(as), true);
        };
      };
      exports.modifyHead = modifyHead;
      var updateHead = function updateHead2(a) {
        return (0, exports.modifyHead)(function() {
          return a;
        });
      };
      exports.updateHead = updateHead;
      var modifyLast = function modifyLast2(f) {
        return function(as) {
          return (0, function_1.pipe)((0, exports.init)(as), (0, exports.append)(f((0, exports.last)(as))));
        };
      };
      exports.modifyLast = modifyLast;
      var updateLast = function updateLast2(a) {
        return (0, exports.modifyLast)(function() {
          return a;
        });
      };
      exports.updateLast = updateLast;
      var intercalate = function intercalate2(S) {
        var concatAllS = (0, exports.concatAll)(S);
        return function(middle) {
          return (0, function_1.flow)((0, exports.intersperse)(middle), concatAllS);
        };
      };
      exports.intercalate = intercalate;
      exports.chain = exports.flatMap;
      function groupSort(O) {
        var sortO = (0, exports.sort)(O);
        var groupO = group(O);
        return function(as) {
          return (0, exports.isNonEmpty)(as) ? groupO(sortO(as)) : exports.empty;
        };
      }
      exports.groupSort = groupSort;
      function filter(predicate) {
        return (0, exports.filterWithIndex)(function(_2, a) {
          return predicate(a);
        });
      }
      exports.filter = filter;
      var filterWithIndex = function filterWithIndex2(predicate) {
        return function(as) {
          return (0, exports.fromReadonlyArray)(as.filter(function(a, i) {
            return predicate(i, a);
          }));
        };
      };
      exports.filterWithIndex = filterWithIndex;
      exports.uncons = exports.unprepend;
      exports.unsnoc = exports.unappend;
      function cons(head, tail) {
        return tail === void 0 ? (0, exports.prepend)(head) : (0, function_1.pipe)(tail, (0, exports.prepend)(head));
      }
      exports.cons = cons;
      var snoc = function snoc2(init2, end) {
        return (0, function_1.pipe)(init2, concat([end]));
      };
      exports.snoc = snoc;
      var insertAt = function insertAt2(i, a) {
        return function(as) {
          return i < 0 || i > as.length ? _.none : _.some((0, exports.unsafeInsertAt)(i, a, as));
        };
      };
      exports.insertAt = insertAt;
      exports.prependToAll = exports.prependAll;
      exports.fold = exports.concatAll;
      exports.readonlyNonEmptyArray = {
        URI: exports.URI,
        of: exports.of,
        map: _map,
        mapWithIndex: _mapWithIndex,
        ap: _ap,
        chain: exports.flatMap,
        extend: _extend,
        extract: exports.extract,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex,
        alt: _alt
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/string.js
  var require_string = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/string.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.endsWith = exports.startsWith = exports.includes = exports.split = exports.size = exports.isEmpty = exports.slice = exports.trimRight = exports.trimLeft = exports.trim = exports.replace = exports.toLowerCase = exports.toUpperCase = exports.isString = exports.Show = exports.Ord = exports.Monoid = exports.empty = exports.Semigroup = exports.Eq = void 0;
      var ReadonlyNonEmptyArray_1 = require_ReadonlyNonEmptyArray();
      exports.Eq = {
        equals: function equals(first, second) {
          return first === second;
        }
      };
      exports.Semigroup = {
        concat: function concat(first, second) {
          return first + second;
        }
      };
      exports.empty = "";
      exports.Monoid = {
        concat: exports.Semigroup.concat,
        empty: exports.empty
      };
      exports.Ord = {
        equals: exports.Eq.equals,
        compare: function compare(first, second) {
          return first < second ? -1 : first > second ? 1 : 0;
        }
      };
      exports.Show = {
        show: function show(s) {
          return JSON.stringify(s);
        }
      };
      var isString = function isString2(u) {
        return typeof u === "string";
      };
      exports.isString = isString;
      var toUpperCase = function toUpperCase2(s) {
        return s.toUpperCase();
      };
      exports.toUpperCase = toUpperCase;
      var toLowerCase = function toLowerCase2(s) {
        return s.toLowerCase();
      };
      exports.toLowerCase = toLowerCase;
      var replace = function replace2(searchValue, replaceValue) {
        return function(s) {
          return s.replace(searchValue, replaceValue);
        };
      };
      exports.replace = replace;
      var trim = function trim2(s) {
        return s.trim();
      };
      exports.trim = trim;
      var trimLeft = function trimLeft2(s) {
        return s.trimLeft();
      };
      exports.trimLeft = trimLeft;
      var trimRight = function trimRight2(s) {
        return s.trimRight();
      };
      exports.trimRight = trimRight;
      var slice = function slice2(start, end) {
        return function(s) {
          return s.slice(start, end);
        };
      };
      exports.slice = slice;
      var isEmpty = function isEmpty2(s) {
        return s.length === 0;
      };
      exports.isEmpty = isEmpty;
      var size = function size2(s) {
        return s.length;
      };
      exports.size = size;
      var split = function split2(separator) {
        return function(s) {
          var out = s.split(separator);
          return (0, ReadonlyNonEmptyArray_1.isNonEmpty)(out) ? out : [s];
        };
      };
      exports.split = split;
      var includes = function includes2(searchString, position) {
        return function(s) {
          return s.includes(searchString, position);
        };
      };
      exports.includes = includes;
      var startsWith = function startsWith2(searchString, position) {
        return function(s) {
          return s.startsWith(searchString, position);
        };
      };
      exports.startsWith = startsWith;
      var endsWith = function endsWith2(searchString, position) {
        return function(s) {
          return s.endsWith(searchString, position);
        };
      };
      exports.endsWith = endsWith;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyRecord.js
  var require_ReadonlyRecord = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/ReadonlyRecord.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports._partition = exports._filterMap = exports._filter = exports._reduceRight = exports._foldMap = exports._reduce = exports._mapWithIndex = exports._map = exports.difference = exports.intersection = exports.union = exports.elem = exports.some = exports.every = exports.fromEntries = exports.toEntries = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.empty = exports.lookup = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.has = exports.upsertAt = exports.toUnfoldable = exports.toReadonlyArray = exports.collect = exports.keys = exports.isEmpty = exports.size = exports.toRecord = exports.fromRecord = void 0;
      exports.readonlyRecord = exports.hasOwnProperty = exports.insertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.getDifferenceMagma = exports.getIntersectionSemigroup = exports.getUnionMonoid = exports.getUnionSemigroup = exports.getWitherable = exports.getTraversableWithIndex = exports.getTraversable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.getFoldableWithIndex = exports.getFoldable = exports.FunctorWithIndex = exports.flap = exports.Functor = exports.getMonoid = exports.getEq = exports.getShow = exports.URI = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports._sequence = exports._traverse = exports._filterWithIndex = exports._filterMapWithIndex = exports._partitionWithIndex = exports._partitionMapWithIndex = exports._reduceRightWithIndex = exports._foldMapWithIndex = exports._reduceWithIndex = exports._partitionMap = void 0;
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var Separated_1 = require_Separated();
      var S = __importStar(require_string());
      var Witherable_1 = require_Witherable();
      var fromRecord = function fromRecord2(r) {
        return Object.assign({}, r);
      };
      exports.fromRecord = fromRecord;
      var toRecord = function toRecord2(r) {
        return Object.assign({}, r);
      };
      exports.toRecord = toRecord;
      var size = function size2(r) {
        return Object.keys(r).length;
      };
      exports.size = size;
      var isEmpty = function isEmpty2(r) {
        for (var k in r) {
          if (_.has.call(r, k)) {
            return false;
          }
        }
        return true;
      };
      exports.isEmpty = isEmpty;
      var keys_ = function keys_2(O) {
        return function(r) {
          return Object.keys(r).sort(O.compare);
        };
      };
      exports.keys = keys_(S.Ord);
      function collect(O) {
        if (typeof O === "function") {
          return collect(S.Ord)(O);
        }
        var keysO = keys_(O);
        return function(f) {
          return function(r) {
            var out = [];
            for (var _i = 0, _a = keysO(r); _i < _a.length; _i++) {
              var key = _a[_i];
              out.push(f(key, r[key]));
            }
            return out;
          };
        };
      }
      exports.collect = collect;
      exports.toReadonlyArray = /* @__PURE__ */ collect(S.Ord)(function(k, a) {
        return [k, a];
      });
      function toUnfoldable(U) {
        return function(r) {
          var sas = (0, exports.toReadonlyArray)(r);
          var len = sas.length;
          return U.unfold(0, function(b) {
            return b < len ? _.some([sas[b], b + 1]) : _.none;
          });
        };
      }
      exports.toUnfoldable = toUnfoldable;
      var upsertAt = function upsertAt2(k, a) {
        return function(r) {
          if (_.has.call(r, k) && r[k] === a) {
            return r;
          }
          var out = Object.assign({}, r);
          out[k] = a;
          return out;
        };
      };
      exports.upsertAt = upsertAt;
      var has = function has2(k, r) {
        return _.has.call(r, k);
      };
      exports.has = has;
      function deleteAt(k) {
        return function(r) {
          if (!_.has.call(r, k)) {
            return r;
          }
          var out = Object.assign({}, r);
          delete out[k];
          return out;
        };
      }
      exports.deleteAt = deleteAt;
      var updateAt = function updateAt2(k, a) {
        return function(r) {
          if (!(0, exports.has)(k, r)) {
            return _.none;
          }
          if (r[k] === a) {
            return _.some(r);
          }
          var out = Object.assign({}, r);
          out[k] = a;
          return _.some(out);
        };
      };
      exports.updateAt = updateAt;
      var modifyAt = function modifyAt2(k, f) {
        return function(r) {
          if (!(0, exports.has)(k, r)) {
            return _.none;
          }
          var next = f(r[k]);
          if (next === r[k]) {
            return _.some(r);
          }
          var out = Object.assign({}, r);
          out[k] = next;
          return _.some(out);
        };
      };
      exports.modifyAt = modifyAt;
      function pop(k) {
        var deleteAtk = deleteAt(k);
        return function(r) {
          var oa = lookup2(k, r);
          return _.isNone(oa) ? _.none : _.some([oa.value, deleteAtk(r)]);
        };
      }
      exports.pop = pop;
      function isSubrecord(E) {
        return function(me, that) {
          if (that === void 0) {
            var isSubrecordE_1 = isSubrecord(E);
            return function(that2) {
              return isSubrecordE_1(that2, me);
            };
          }
          for (var k in me) {
            if (!_.has.call(that, k) || !E.equals(me[k], that[k])) {
              return false;
            }
          }
          return true;
        };
      }
      exports.isSubrecord = isSubrecord;
      function lookup2(k, r) {
        if (r === void 0) {
          return function(r2) {
            return lookup2(k, r2);
          };
        }
        return _.has.call(r, k) ? _.some(r[k]) : _.none;
      }
      exports.lookup = lookup2;
      exports.empty = {};
      function mapWithIndex(f) {
        return function(r) {
          var out = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              out[k] = f(k, r[k]);
            }
          }
          return out;
        };
      }
      exports.mapWithIndex = mapWithIndex;
      function map(f) {
        return mapWithIndex(function(_2, a) {
          return f(a);
        });
      }
      exports.map = map;
      function reduceWithIndex() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 2) {
          return reduceWithIndex(S.Ord).apply(void 0, args);
        }
        var keysO = keys_(args[0]);
        return function(b, f) {
          return function(fa) {
            var out = b;
            var ks = keysO(fa);
            var len = ks.length;
            for (var i = 0; i < len; i++) {
              var k = ks[i];
              out = f(k, out, fa[k]);
            }
            return out;
          };
        };
      }
      exports.reduceWithIndex = reduceWithIndex;
      function foldMapWithIndex(O) {
        if ("compare" in O) {
          var keysO_1 = keys_(O);
          return function(M) {
            return function(f) {
              return function(fa) {
                var out = M.empty;
                var ks = keysO_1(fa);
                var len = ks.length;
                for (var i = 0; i < len; i++) {
                  var k = ks[i];
                  out = M.concat(out, f(k, fa[k]));
                }
                return out;
              };
            };
          };
        }
        return foldMapWithIndex(S.Ord)(O);
      }
      exports.foldMapWithIndex = foldMapWithIndex;
      function reduceRightWithIndex() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 2) {
          return reduceRightWithIndex(S.Ord).apply(void 0, args);
        }
        var keysO = keys_(args[0]);
        return function(b, f) {
          return function(fa) {
            var out = b;
            var ks = keysO(fa);
            var len = ks.length;
            for (var i = len - 1; i >= 0; i--) {
              var k = ks[i];
              out = f(k, fa[k], out);
            }
            return out;
          };
        };
      }
      exports.reduceRightWithIndex = reduceRightWithIndex;
      var singleton = function singleton2(k, a) {
        var _a;
        return _a = {}, _a[k] = a, _a;
      };
      exports.singleton = singleton;
      function traverseWithIndex(F) {
        var traverseWithIndexOF = _traverseWithIndex(S.Ord)(F);
        return function(f) {
          return function(ta) {
            return traverseWithIndexOF(ta, f);
          };
        };
      }
      exports.traverseWithIndex = traverseWithIndex;
      function traverse(F) {
        var traverseOF = (0, exports._traverse)(S.Ord)(F);
        return function(f) {
          return function(ta) {
            return traverseOF(ta, f);
          };
        };
      }
      exports.traverse = traverse;
      function sequence(F) {
        return (0, exports._sequence)(S.Ord)(F);
      }
      exports.sequence = sequence;
      var wither = function wither2(F) {
        var traverseF = traverse(F);
        return function(f) {
          return function(fa) {
            return F.map((0, function_1.pipe)(fa, traverseF(f)), exports.compact);
          };
        };
      };
      exports.wither = wither;
      var wilt = function wilt2(F) {
        var traverseF = traverse(F);
        return function(f) {
          return function(fa) {
            return F.map((0, function_1.pipe)(fa, traverseF(f)), exports.separate);
          };
        };
      };
      exports.wilt = wilt;
      function partitionMapWithIndex(f) {
        return function(r) {
          var left = {};
          var right = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var e = f(k, r[k]);
              switch (e._tag) {
                case "Left":
                  left[k] = e.left;
                  break;
                case "Right":
                  right[k] = e.right;
                  break;
              }
            }
          }
          return (0, Separated_1.separated)(left, right);
        };
      }
      exports.partitionMapWithIndex = partitionMapWithIndex;
      function partitionWithIndex(predicateWithIndex) {
        return function(r) {
          var left = {};
          var right = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var a = r[k];
              if (predicateWithIndex(k, a)) {
                right[k] = a;
              } else {
                left[k] = a;
              }
            }
          }
          return (0, Separated_1.separated)(left, right);
        };
      }
      exports.partitionWithIndex = partitionWithIndex;
      function filterMapWithIndex(f) {
        return function(r) {
          var out = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var ob = f(k, r[k]);
              if (_.isSome(ob)) {
                out[k] = ob.value;
              }
            }
          }
          return out;
        };
      }
      exports.filterMapWithIndex = filterMapWithIndex;
      function filterWithIndex(predicateWithIndex) {
        return function(fa) {
          var out = {};
          var changed = false;
          for (var key in fa) {
            if (_.has.call(fa, key)) {
              var a = fa[key];
              if (predicateWithIndex(key, a)) {
                out[key] = a;
              } else {
                changed = true;
              }
            }
          }
          return changed ? out : fa;
        };
      }
      exports.filterWithIndex = filterWithIndex;
      function fromFoldable(M, F) {
        var fromFoldableMapM = fromFoldableMap(M, F);
        return function(fka) {
          return fromFoldableMapM(fka, function_1.identity);
        };
      }
      exports.fromFoldable = fromFoldable;
      function fromFoldableMap(M, F) {
        return function(ta, f) {
          return F.reduce(ta, {}, function(r, a) {
            var _a = f(a), k = _a[0], b = _a[1];
            r[k] = _.has.call(r, k) ? M.concat(r[k], b) : b;
            return r;
          });
        };
      }
      exports.fromFoldableMap = fromFoldableMap;
      exports.toEntries = exports.toReadonlyArray;
      var fromEntries = function fromEntries2(fa) {
        var out = {};
        for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
          var a = fa_1[_i];
          out[a[0]] = a[1];
        }
        return out;
      };
      exports.fromEntries = fromEntries;
      function every(predicate) {
        return function(r) {
          for (var k in r) {
            if (!predicate(r[k])) {
              return false;
            }
          }
          return true;
        };
      }
      exports.every = every;
      function some(predicate) {
        return function(r) {
          for (var k in r) {
            if (predicate(r[k])) {
              return true;
            }
          }
          return false;
        };
      }
      exports.some = some;
      function elem(E) {
        return function(a, fa) {
          if (fa === void 0) {
            var elemE_1 = elem(E);
            return function(fa2) {
              return elemE_1(a, fa2);
            };
          }
          for (var k in fa) {
            if (E.equals(fa[k], a)) {
              return true;
            }
          }
          return false;
        };
      }
      exports.elem = elem;
      var union = function union2(M) {
        return function(second) {
          return function(first) {
            if ((0, exports.isEmpty)(first)) {
              return second;
            }
            if ((0, exports.isEmpty)(second)) {
              return first;
            }
            var out = {};
            for (var k in first) {
              if ((0, exports.has)(k, second)) {
                out[k] = M.concat(first[k], second[k]);
              } else {
                out[k] = first[k];
              }
            }
            for (var k in second) {
              if (!(0, exports.has)(k, out)) {
                out[k] = second[k];
              }
            }
            return out;
          };
        };
      };
      exports.union = union;
      var intersection = function intersection2(M) {
        return function(second) {
          return function(first) {
            if ((0, exports.isEmpty)(first) || (0, exports.isEmpty)(second)) {
              return exports.empty;
            }
            var out = {};
            for (var k in first) {
              if ((0, exports.has)(k, second)) {
                out[k] = M.concat(first[k], second[k]);
              }
            }
            return out;
          };
        };
      };
      exports.intersection = intersection;
      var difference = function difference2(second) {
        return function(first) {
          if ((0, exports.isEmpty)(first)) {
            return second;
          }
          if ((0, exports.isEmpty)(second)) {
            return first;
          }
          var out = {};
          for (var k in first) {
            if (!(0, exports.has)(k, second)) {
              out[k] = first[k];
            }
          }
          for (var k in second) {
            if (!(0, exports.has)(k, first)) {
              out[k] = second[k];
            }
          }
          return out;
        };
      };
      exports.difference = difference;
      var _map = function _map2(fa, f) {
        return (0, function_1.pipe)(fa, map(f));
      };
      exports._map = _map;
      var _mapWithIndex = function _mapWithIndex2(fa, f) {
        return (0, function_1.pipe)(fa, mapWithIndex(f));
      };
      exports._mapWithIndex = _mapWithIndex;
      var _reduce = function _reduce2(O) {
        var reduceO = reduce(O);
        return function(fa, b, f) {
          return (0, function_1.pipe)(fa, reduceO(b, f));
        };
      };
      exports._reduce = _reduce;
      var _foldMap = function _foldMap2(O) {
        return function(M) {
          var foldMapM = foldMap(O)(M);
          return function(fa, f) {
            return (0, function_1.pipe)(fa, foldMapM(f));
          };
        };
      };
      exports._foldMap = _foldMap;
      var _reduceRight = function _reduceRight2(O) {
        var reduceRightO = reduceRight(O);
        return function(fa, b, f) {
          return (0, function_1.pipe)(fa, reduceRightO(b, f));
        };
      };
      exports._reduceRight = _reduceRight;
      var _filter = function _filter2(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
      };
      exports._filter = _filter;
      var _filterMap = function _filterMap2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.filterMap)(f));
      };
      exports._filterMap = _filterMap;
      var _partition = function _partition2(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
      };
      exports._partition = _partition;
      var _partitionMap = function _partitionMap2(fa, f) {
        return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f));
      };
      exports._partitionMap = _partitionMap;
      var _reduceWithIndex = function _reduceWithIndex2(O) {
        var reduceWithIndexO = reduceWithIndex(O);
        return function(fa, b, f) {
          return (0, function_1.pipe)(fa, reduceWithIndexO(b, f));
        };
      };
      exports._reduceWithIndex = _reduceWithIndex;
      var _foldMapWithIndex = function _foldMapWithIndex2(O) {
        var foldMapWithIndexO = foldMapWithIndex(O);
        return function(M) {
          var foldMapWithIndexM = foldMapWithIndexO(M);
          return function(fa, f) {
            return (0, function_1.pipe)(fa, foldMapWithIndexM(f));
          };
        };
      };
      exports._foldMapWithIndex = _foldMapWithIndex;
      var _reduceRightWithIndex = function _reduceRightWithIndex2(O) {
        var reduceRightWithIndexO = reduceRightWithIndex(O);
        return function(fa, b, f) {
          return (0, function_1.pipe)(fa, reduceRightWithIndexO(b, f));
        };
      };
      exports._reduceRightWithIndex = _reduceRightWithIndex;
      var _partitionMapWithIndex = function _partitionMapWithIndex2(fa, f) {
        return (0, function_1.pipe)(fa, partitionMapWithIndex(f));
      };
      exports._partitionMapWithIndex = _partitionMapWithIndex;
      var _partitionWithIndex = function _partitionWithIndex2(fa, predicateWithIndex) {
        return (0, function_1.pipe)(fa, partitionWithIndex(predicateWithIndex));
      };
      exports._partitionWithIndex = _partitionWithIndex;
      var _filterMapWithIndex = function _filterMapWithIndex2(fa, f) {
        return (0, function_1.pipe)(fa, filterMapWithIndex(f));
      };
      exports._filterMapWithIndex = _filterMapWithIndex;
      var _filterWithIndex = function _filterWithIndex2(fa, predicateWithIndex) {
        return (0, function_1.pipe)(fa, filterWithIndex(predicateWithIndex));
      };
      exports._filterWithIndex = _filterWithIndex;
      var _traverse = function _traverse2(O) {
        var traverseWithIndexO = _traverseWithIndex(O);
        return function(F) {
          var traverseWithIndexOF = traverseWithIndexO(F);
          return function(ta, f) {
            return traverseWithIndexOF(ta, (0, function_1.flow)(function_1.SK, f));
          };
        };
      };
      exports._traverse = _traverse;
      var _sequence = function _sequence2(O) {
        var traverseO = (0, exports._traverse)(O);
        return function(F) {
          var traverseOF = traverseO(F);
          return function(ta) {
            return traverseOF(ta, function_1.identity);
          };
        };
      };
      exports._sequence = _sequence;
      var _traverseWithIndex = function _traverseWithIndex2(O) {
        return function(F) {
          var keysO = keys_(O);
          return function(ta, f) {
            var ks = keysO(ta);
            if (ks.length === 0) {
              return F.of(exports.empty);
            }
            var fr = F.of({});
            var _loop_1 = function _loop_12(key2) {
              fr = F.ap(F.map(fr, function(r) {
                return function(b) {
                  var _a;
                  return Object.assign({}, r, (_a = {}, _a[key2] = b, _a));
                };
              }), f(key2, ta[key2]));
            };
            for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
              var key = ks_1[_i];
              _loop_1(key);
            }
            return fr;
          };
        };
      };
      var filter = function filter2(predicate) {
        return filterWithIndex(function(_2, a) {
          return predicate(a);
        });
      };
      exports.filter = filter;
      var filterMap = function filterMap2(f) {
        return filterMapWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.filterMap = filterMap;
      var partition = function partition2(predicate) {
        return partitionWithIndex(function(_2, a) {
          return predicate(a);
        });
      };
      exports.partition = partition;
      var partitionMap = function partitionMap2(f) {
        return partitionMapWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.partitionMap = partitionMap;
      function reduce() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 1) {
          var reduceWithIndexO_1 = reduceWithIndex(args[0]);
          return function(b, f) {
            return reduceWithIndexO_1(b, function(_2, b2, a) {
              return f(b2, a);
            });
          };
        }
        return reduce(S.Ord).apply(void 0, args);
      }
      exports.reduce = reduce;
      function foldMap(O) {
        if ("compare" in O) {
          var foldMapWithIndexO_1 = foldMapWithIndex(O);
          return function(M) {
            var foldMapWithIndexM = foldMapWithIndexO_1(M);
            return function(f) {
              return foldMapWithIndexM(function(_2, a) {
                return f(a);
              });
            };
          };
        }
        return foldMap(S.Ord)(O);
      }
      exports.foldMap = foldMap;
      function reduceRight() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 1) {
          var reduceRightWithIndexO_1 = reduceRightWithIndex(args[0]);
          return function(b, f) {
            return reduceRightWithIndexO_1(b, function(_2, b2, a) {
              return f(b2, a);
            });
          };
        }
        return reduceRight(S.Ord).apply(void 0, args);
      }
      exports.reduceRight = reduceRight;
      var compact = function compact2(r) {
        var out = {};
        for (var k in r) {
          if (_.has.call(r, k)) {
            var oa = r[k];
            if (_.isSome(oa)) {
              out[k] = oa.value;
            }
          }
        }
        return out;
      };
      exports.compact = compact;
      var separate = function separate2(r) {
        var left = {};
        var right = {};
        for (var k in r) {
          if (_.has.call(r, k)) {
            var e = r[k];
            if (_.isLeft(e)) {
              left[k] = e.left;
            } else {
              right[k] = e.right;
            }
          }
        }
        return (0, Separated_1.separated)(left, right);
      };
      exports.separate = separate;
      exports.URI = "ReadonlyRecord";
      function getShow(O) {
        if ("compare" in O) {
          return function(S2) {
            return {
              show: function show(r) {
                var elements = collect(O)(function(k, a) {
                  return "".concat(JSON.stringify(k), ": ").concat(S2.show(a));
                })(r).join(", ");
                return elements === "" ? "{}" : "{ ".concat(elements, " }");
              }
            };
          };
        }
        return getShow(S.Ord)(O);
      }
      exports.getShow = getShow;
      function getEq(E) {
        var isSubrecordE = isSubrecord(E);
        return (0, Eq_1.fromEquals)(function(x, y) {
          return isSubrecordE(x)(y) && isSubrecordE(y)(x);
        });
      }
      exports.getEq = getEq;
      function getMonoid(S2) {
        return {
          concat: function concat(first, second) {
            if ((0, exports.isEmpty)(first)) {
              return second;
            }
            if ((0, exports.isEmpty)(second)) {
              return first;
            }
            var r = Object.assign({}, first);
            for (var k in second) {
              if (_.has.call(second, k)) {
                r[k] = _.has.call(first, k) ? S2.concat(first[k], second[k]) : second[k];
              }
            }
            return r;
          },
          empty: exports.empty
        };
      }
      exports.getMonoid = getMonoid;
      exports.Functor = {
        URI: exports.URI,
        map: exports._map
      };
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: exports._map,
        mapWithIndex: exports._mapWithIndex
      };
      var getFoldable = function getFoldable2(O) {
        return {
          URI: exports.URI,
          reduce: (0, exports._reduce)(O),
          foldMap: (0, exports._foldMap)(O),
          reduceRight: (0, exports._reduceRight)(O)
        };
      };
      exports.getFoldable = getFoldable;
      var getFoldableWithIndex = function getFoldableWithIndex2(O) {
        return {
          URI: exports.URI,
          reduce: (0, exports._reduce)(O),
          foldMap: (0, exports._foldMap)(O),
          reduceRight: (0, exports._reduceRight)(O),
          reduceWithIndex: (0, exports._reduceWithIndex)(O),
          foldMapWithIndex: (0, exports._foldMapWithIndex)(O),
          reduceRightWithIndex: (0, exports._reduceRightWithIndex)(O)
        };
      };
      exports.getFoldableWithIndex = getFoldableWithIndex;
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      exports.Filterable = {
        URI: exports.URI,
        map: exports._map,
        compact: exports.compact,
        separate: exports.separate,
        filter: exports._filter,
        filterMap: exports._filterMap,
        partition: exports._partition,
        partitionMap: exports._partitionMap
      };
      exports.FilterableWithIndex = {
        URI: exports.URI,
        map: exports._map,
        mapWithIndex: exports._mapWithIndex,
        compact: exports.compact,
        separate: exports.separate,
        filter: exports._filter,
        filterMap: exports._filterMap,
        partition: exports._partition,
        partitionMap: exports._partitionMap,
        filterMapWithIndex: exports._filterMapWithIndex,
        filterWithIndex: exports._filterWithIndex,
        partitionMapWithIndex: exports._partitionMapWithIndex,
        partitionWithIndex: exports._partitionWithIndex
      };
      var getTraversable = function getTraversable2(O) {
        return {
          URI: exports.URI,
          map: exports._map,
          reduce: (0, exports._reduce)(O),
          foldMap: (0, exports._foldMap)(O),
          reduceRight: (0, exports._reduceRight)(O),
          traverse: (0, exports._traverse)(O),
          sequence: (0, exports._sequence)(O)
        };
      };
      exports.getTraversable = getTraversable;
      var getTraversableWithIndex = function getTraversableWithIndex2(O) {
        return {
          URI: exports.URI,
          map: exports._map,
          mapWithIndex: exports._mapWithIndex,
          reduce: (0, exports._reduce)(O),
          foldMap: (0, exports._foldMap)(O),
          reduceRight: (0, exports._reduceRight)(O),
          reduceWithIndex: (0, exports._reduceWithIndex)(O),
          foldMapWithIndex: (0, exports._foldMapWithIndex)(O),
          reduceRightWithIndex: (0, exports._reduceRightWithIndex)(O),
          traverse: (0, exports._traverse)(O),
          sequence: (0, exports._sequence)(O),
          traverseWithIndex: _traverseWithIndex(O)
        };
      };
      exports.getTraversableWithIndex = getTraversableWithIndex;
      var getWitherable = function getWitherable2(O) {
        var T = (0, exports.getTraversable)(O);
        return {
          URI: exports.URI,
          map: exports._map,
          reduce: (0, exports._reduce)(O),
          foldMap: (0, exports._foldMap)(O),
          reduceRight: (0, exports._reduceRight)(O),
          traverse: T.traverse,
          sequence: T.sequence,
          compact: exports.compact,
          separate: exports.separate,
          filter: exports._filter,
          filterMap: exports._filterMap,
          partition: exports._partition,
          partitionMap: exports._partitionMap,
          wither: (0, Witherable_1.witherDefault)(T, exports.Compactable),
          wilt: (0, Witherable_1.wiltDefault)(T, exports.Compactable)
        };
      };
      exports.getWitherable = getWitherable;
      var getUnionSemigroup = function getUnionSemigroup2(S2) {
        var unionS = (0, exports.union)(S2);
        return {
          concat: function concat(first, second) {
            return unionS(second)(first);
          }
        };
      };
      exports.getUnionSemigroup = getUnionSemigroup;
      var getUnionMonoid = function getUnionMonoid2(S2) {
        return {
          concat: (0, exports.getUnionSemigroup)(S2).concat,
          empty: exports.empty
        };
      };
      exports.getUnionMonoid = getUnionMonoid;
      var getIntersectionSemigroup = function getIntersectionSemigroup2(S2) {
        var intersectionS = (0, exports.intersection)(S2);
        return {
          concat: function concat(first, second) {
            return intersectionS(second)(first);
          }
        };
      };
      exports.getIntersectionSemigroup = getIntersectionSemigroup;
      var getDifferenceMagma = function getDifferenceMagma2() {
        return {
          concat: function concat(first, second) {
            return (0, exports.difference)(second)(first);
          }
        };
      };
      exports.getDifferenceMagma = getDifferenceMagma;
      exports.Foldable = {
        URI: exports.URI,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord)
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        reduceWithIndex: /* @__PURE__ */ (0, exports._reduceWithIndex)(S.Ord),
        foldMapWithIndex: /* @__PURE__ */ (0, exports._foldMapWithIndex)(S.Ord),
        reduceRightWithIndex: /* @__PURE__ */ (0, exports._reduceRightWithIndex)(S.Ord)
      };
      exports.Traversable = {
        URI: exports.URI,
        map: exports._map,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: exports._map,
        mapWithIndex: exports._mapWithIndex,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        reduceWithIndex: /* @__PURE__ */ (0, exports._reduceWithIndex)(S.Ord),
        foldMapWithIndex: /* @__PURE__ */ (0, exports._foldMapWithIndex)(S.Ord),
        reduceRightWithIndex: /* @__PURE__ */ (0, exports._reduceRightWithIndex)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence,
        traverseWithIndex: /* @__PURE__ */ _traverseWithIndex(S.Ord)
      };
      var _wither = /* @__PURE__ */ (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
      var _wilt = /* @__PURE__ */ (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
      exports.Witherable = {
        URI: exports.URI,
        map: exports._map,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: exports._filter,
        filterMap: exports._filterMap,
        partition: exports._partition,
        partitionMap: exports._partitionMap,
        wither: _wither,
        wilt: _wilt
      };
      exports.insertAt = exports.upsertAt;
      function hasOwnProperty(k, r) {
        return _.has.call(r === void 0 ? this : r, k);
      }
      exports.hasOwnProperty = hasOwnProperty;
      exports.readonlyRecord = {
        URI: exports.URI,
        map: exports._map,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: exports._filter,
        filterMap: exports._filterMap,
        partition: exports._partition,
        partitionMap: exports._partitionMap,
        mapWithIndex: exports._mapWithIndex,
        reduceWithIndex: /* @__PURE__ */ (0, exports._reduceWithIndex)(S.Ord),
        foldMapWithIndex: /* @__PURE__ */ (0, exports._foldMapWithIndex)(S.Ord),
        reduceRightWithIndex: /* @__PURE__ */ (0, exports._reduceRightWithIndex)(S.Ord),
        filterMapWithIndex: exports._filterMapWithIndex,
        filterWithIndex: exports._filterWithIndex,
        partitionMapWithIndex: exports._partitionMapWithIndex,
        partitionWithIndex: exports._partitionWithIndex,
        traverseWithIndex: /* @__PURE__ */ _traverseWithIndex(S.Ord),
        wither: _wither,
        wilt: _wilt
      };
    }
  });

  // src/app.tsx
  var app_exports = {};
  __export(app_exports, {
    default: () => app_default
  });
  var app_default;
  var init_app = __esm({
    "src/app.tsx"() {
      "use strict";
      app_default = {};
      Spicetify.showNotification("Extension loaded");
    }
  });

  // src/entry.tsx
  var import_Option = __toESM(require_Option(), 1);
  var import_ReadonlyRecord = __toESM(require_ReadonlyRecord(), 1);
  var import_function = __toESM(require_function(), 1);
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  function _regeneratorRuntime() {
    "use strict";
    _regeneratorRuntime = function _regeneratorRuntime2() {
      return exports;
    };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
      obj[key] = desc.value;
    }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define2(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
      return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke("next", value2, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", { value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function(method, arg) {
        if ("executing" === state)
          throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method)
            throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg; ; ) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if ("next" === context.method)
            context.sent = context._sent = context.arg;
          else if ("throw" === context.method) {
            if ("suspendedStart" === state)
              throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else
            "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
              continue;
            return { value: record.arg, done: context.done };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method, method = delegate.iterator[methodName];
      if (void 0 === method)
        return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type)
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod)
          return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next)
          return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next2() {
            for (; ++i < iterable.length; )
              if (hasOwn.call(iterable, i))
                return next2.value = iterable[i], next2.done = false, next2;
            return next2.value = void 0, next2.done = true, next2;
          };
          return next.next = next;
        }
      }
      return { next: doneResult };
    }
    function doneResult() {
      return { value: void 0, done: true };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: true }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
      return { __await: arg };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
      return this;
    }), define(Gp, "toString", function() {
      return "[object Generator]";
    }), exports.keys = function(val) {
      var object = Object(val), keys = [];
      for (var key in object)
        keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length; ) {
          var key2 = keys.pop();
          if (key2 in object)
            return next.value = key2, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
        for (var name in this)
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
    }, stop: function stop() {
      this.done = true;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type)
        throw rootRecord.arg;
      return this.rval;
    }, dispatchException: function dispatchException(exception) {
      if (this.done)
        throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i], record = entry.completion;
        if ("root" === entry.tryLoc)
          return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
          } else {
            if (!hasFinally)
              throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          }
        }
      }
    }, abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    }, complete: function complete(record, afterLoc) {
      if ("throw" === record.type)
        throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    }, finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc)
          return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    }, "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = { iterator: values(iterable), resultName, nextLoc }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
    } }, exports;
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
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
    var mustLoad, sleep;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            mustLoad = ["showNotification"];
            sleep = function sleep2(ms) {
              return new Promise(function(resolve) {
                return setTimeout(resolve, ms);
              });
            };
          case 2:
            if (!mustLoad.map((0, import_function.flow)(function(p) {
              return (0, import_ReadonlyRecord.lookup)(p)(Spicetify);
            }, import_Option.isNone))) {
              _context.next = 7;
              break;
            }
            _context.next = 5;
            return sleep(100);
          case 5:
            _context.next = 2;
            break;
          case 7:
            _context.next = 9;
            return Promise.resolve().then(() => (init_app(), app_exports));
          case 9:
          case "end":
            return _context.stop();
        }
    }, _callee);
  }))();
})();
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
