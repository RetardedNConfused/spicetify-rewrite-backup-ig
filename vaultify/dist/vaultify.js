"use strict";
var vaultify = (() => {
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
      var __spreadArray6 = exports && exports.__spreadArray || function(to, from, pack) {
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.dual = exports.getEndomorphismMonoid = exports.not = exports.SK = exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.unsafeCoerce = exports.identity = exports.apply = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
      var getBooleanAlgebra = function(B) {
        return function() {
          return {
            meet: function(x, y) {
              return function(a) {
                return B.meet(x(a), y(a));
              };
            },
            join: function(x, y) {
              return function(a) {
                return B.join(x(a), y(a));
              };
            },
            zero: function() {
              return B.zero;
            },
            one: function() {
              return B.one;
            },
            implies: function(x, y) {
              return function(a) {
                return B.implies(x(a), y(a));
              };
            },
            not: function(x) {
              return function(a) {
                return B.not(x(a));
              };
            }
          };
        };
      };
      exports.getBooleanAlgebra = getBooleanAlgebra;
      var getSemigroup5 = function(S) {
        return function() {
          return {
            concat: function(f2, g) {
              return function(a) {
                return S.concat(f2(a), g(a));
              };
            }
          };
        };
      };
      exports.getSemigroup = getSemigroup5;
      var getMonoid7 = function(M) {
        var getSemigroupM = (0, exports.getSemigroup)(M);
        return function() {
          return {
            concat: getSemigroupM().concat,
            empty: function() {
              return M.empty;
            }
          };
        };
      };
      exports.getMonoid = getMonoid7;
      var getSemiring = function(S) {
        return {
          add: function(f2, g) {
            return function(x) {
              return S.add(f2(x), g(x));
            };
          },
          zero: function() {
            return S.zero;
          },
          mul: function(f2, g) {
            return function(x) {
              return S.mul(f2(x), g(x));
            };
          },
          one: function() {
            return S.one;
          }
        };
      };
      exports.getSemiring = getSemiring;
      var getRing = function(R) {
        var S = (0, exports.getSemiring)(R);
        return {
          add: S.add,
          mul: S.mul,
          one: S.one,
          zero: S.zero,
          sub: function(f2, g) {
            return function(x) {
              return R.sub(f2(x), g(x));
            };
          }
        };
      };
      exports.getRing = getRing;
      var apply2 = function(a) {
        return function(f2) {
          return f2(a);
        };
      };
      exports.apply = apply2;
      function identity2(a) {
        return a;
      }
      exports.identity = identity2;
      exports.unsafeCoerce = identity2;
      function constant5(a) {
        return function() {
          return a;
        };
      }
      exports.constant = constant5;
      exports.constTrue = constant5(true);
      exports.constFalse = constant5(false);
      exports.constNull = constant5(null);
      exports.constUndefined = constant5(void 0);
      exports.constVoid = exports.constUndefined;
      function flip2(f2) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (args.length > 1) {
            return f2(args[1], args[0]);
          }
          return function(a) {
            return f2(a)(args[0]);
          };
        };
      }
      exports.flip = flip2;
      function flow4(ab, bc, cd, de, ef, fg, gh, hi, ij) {
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
      exports.flow = flow4;
      function tuple2() {
        var t = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          t[_i] = arguments[_i];
        }
        return t;
      }
      exports.tuple = tuple2;
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
      function tupled2(f2) {
        return function(a) {
          return f2.apply(void 0, a);
        };
      }
      exports.tupled = tupled2;
      function untupled(f2) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return f2(a);
        };
      }
      exports.untupled = untupled;
      function pipe3(a, ab, bc, cd, de, ef, fg, gh, hi) {
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
      exports.pipe = pipe3;
      exports.hole = absurd;
      var SK2 = function(_, b) {
        return b;
      };
      exports.SK = SK2;
      function not3(predicate) {
        return function(a) {
          return !predicate(a);
        };
      }
      exports.not = not3;
      var getEndomorphismMonoid = function() {
        return {
          concat: function(first3, second) {
            return flow4(first3, second);
          },
          empty: identity2
        };
      };
      exports.getEndomorphismMonoid = getEndomorphismMonoid;
      var dual2 = function(arity, body) {
        var isDataFirst = typeof arity === "number" ? function(args) {
          return args.length >= arity;
        } : arity;
        return function() {
          var args = Array.from(arguments);
          if (isDataFirst(arguments)) {
            return body.apply(this, args);
          }
          return function(self) {
            return body.apply(void 0, __spreadArray6([self], args, false));
          };
        };
      };
      exports.dual = dual2;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/internal.js
  var require_internal = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/internal.js"(exports) {
      "use strict";
      var __spreadArray6 = exports && exports.__spreadArray || function(to, from, pack) {
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.flatMapReader = exports.flatMapTask = exports.flatMapIO = exports.flatMapEither = exports.flatMapOption = exports.flatMapNullable = exports.liftOption = exports.liftNullable = exports.fromReadonlyNonEmptyArray = exports.has = exports.emptyRecord = exports.emptyReadonlyArray = exports.tail = exports.head = exports.isNonEmpty = exports.singleton = exports.right = exports.left = exports.isRight = exports.isLeft = exports.some = exports.none = exports.isSome = exports.isNone = void 0;
      var function_1 = require_function();
      var isNone4 = function(fa) {
        return fa._tag === "None";
      };
      exports.isNone = isNone4;
      var isSome4 = function(fa) {
        return fa._tag === "Some";
      };
      exports.isSome = isSome4;
      exports.none = { _tag: "None" };
      var some5 = function(a) {
        return { _tag: "Some", value: a };
      };
      exports.some = some5;
      var isLeft2 = function(ma) {
        return ma._tag === "Left";
      };
      exports.isLeft = isLeft2;
      var isRight = function(ma) {
        return ma._tag === "Right";
      };
      exports.isRight = isRight;
      var left = function(e) {
        return { _tag: "Left", left: e };
      };
      exports.left = left;
      var right = function(a) {
        return { _tag: "Right", right: a };
      };
      exports.right = right;
      var singleton3 = function(a) {
        return [a];
      };
      exports.singleton = singleton3;
      var isNonEmpty6 = function(as3) {
        return as3.length > 0;
      };
      exports.isNonEmpty = isNonEmpty6;
      var head6 = function(as3) {
        return as3[0];
      };
      exports.head = head6;
      var tail5 = function(as3) {
        return as3.slice(1);
      };
      exports.tail = tail5;
      exports.emptyReadonlyArray = [];
      exports.emptyRecord = {};
      exports.has = Object.prototype.hasOwnProperty;
      var fromReadonlyNonEmptyArray3 = function(as3) {
        return __spreadArray6([as3[0]], as3.slice(1), true);
      };
      exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray3;
      var liftNullable = function(F) {
        return function(f2, onNullable) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f2.apply(void 0, a);
            return F.fromEither(o == null ? (0, exports.left)(onNullable.apply(void 0, a)) : (0, exports.right)(o));
          };
        };
      };
      exports.liftNullable = liftNullable;
      var liftOption = function(F) {
        return function(f2, onNone) {
          return function() {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              a[_i] = arguments[_i];
            }
            var o = f2.apply(void 0, a);
            return F.fromEither((0, exports.isNone)(o) ? (0, exports.left)(onNone.apply(void 0, a)) : (0, exports.right)(o.value));
          };
        };
      };
      exports.liftOption = liftOption;
      var flatMapNullable = function(F, M) {
        return (0, function_1.dual)(3, function(self, f2, onNullable) {
          return M.flatMap(self, (0, exports.liftNullable)(F)(f2, onNullable));
        });
      };
      exports.flatMapNullable = flatMapNullable;
      var flatMapOption = function(F, M) {
        return (0, function_1.dual)(3, function(self, f2, onNone) {
          return M.flatMap(self, (0, exports.liftOption)(F)(f2, onNone));
        });
      };
      exports.flatMapOption = flatMapOption;
      var flatMapEither = function(F, M) {
        return (0, function_1.dual)(2, function(self, f2) {
          return M.flatMap(self, function(a) {
            return F.fromEither(f2(a));
          });
        });
      };
      exports.flatMapEither = flatMapEither;
      var flatMapIO = function(F, M) {
        return (0, function_1.dual)(2, function(self, f2) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f2(a));
          });
        });
      };
      exports.flatMapIO = flatMapIO;
      var flatMapTask = function(F, M) {
        return (0, function_1.dual)(2, function(self, f2) {
          return M.flatMap(self, function(a) {
            return F.fromTask(f2(a));
          });
        });
      };
      exports.flatMapTask = flatMapTask;
      var flatMapReader = function(F, M) {
        return (0, function_1.dual)(2, function(self, f2) {
          return M.flatMap(self, function(a) {
            return F.fromReader(f2(a));
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
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = void 0;
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      function ap5(F, G) {
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
      exports.ap = ap5;
      function apFirst5(A) {
        return function(second) {
          return function(first3) {
            return A.ap(A.map(first3, function(a) {
              return function() {
                return a;
              };
            }), second);
          };
        };
      }
      exports.apFirst = apFirst5;
      function apSecond5(A) {
        return function(second) {
          return function(first3) {
            return A.ap(A.map(first3, function() {
              return function(b) {
                return b;
              };
            }), second);
          };
        };
      }
      exports.apSecond = apSecond5;
      function apS5(F) {
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
      exports.apS = apS5;
      function getApplySemigroup3(F) {
        return function(S) {
          return {
            concat: function(first3, second) {
              return F.ap(F.map(first3, function(x) {
                return function(y) {
                  return S.concat(x, y);
                };
              }), second);
            }
          };
        };
      }
      exports.getApplySemigroup = getApplySemigroup3;
      function curried(f2, n, acc) {
        return function(x) {
          var combined = Array(acc.length + 1);
          for (var i = 0; i < acc.length; i++) {
            combined[i] = acc[i];
          }
          combined[acc.length] = x;
          return n === 0 ? f2.apply(null, combined) : curried(f2, n - 1, combined);
        };
      }
      var tupleConstructors = {
        1: function(a) {
          return [a];
        },
        2: function(a) {
          return function(b) {
            return [a, b];
          };
        },
        3: function(a) {
          return function(b) {
            return function(c) {
              return [a, b, c];
            };
          };
        },
        4: function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return [a, b, c, d];
              };
            };
          };
        },
        5: function(a) {
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
          var f2 = getTupleConstructor(len);
          var fas = F.map(args[0], f2);
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
          var f2 = getRecordConstructor(keys);
          var fr = F.map(r[keys[0]], f2);
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.asUnit = exports.as = exports.getFunctorComposition = exports.let = exports.bindTo = exports.flap = exports.map = void 0;
      var function_1 = require_function();
      function map6(F, G) {
        return function(f2) {
          return function(fa) {
            return F.map(fa, function(ga) {
              return G.map(ga, f2);
            });
          };
        };
      }
      exports.map = map6;
      function flap4(F) {
        return function(a) {
          return function(fab) {
            return F.map(fab, function(f2) {
              return f2(a);
            });
          };
        };
      }
      exports.flap = flap4;
      function bindTo5(F) {
        return function(name) {
          return function(fa) {
            return F.map(fa, function(a) {
              var _a;
              return _a = {}, _a[name] = a, _a;
            });
          };
        };
      }
      exports.bindTo = bindTo5;
      function let_5(F) {
        return function(name, f2) {
          return function(fa) {
            return F.map(fa, function(a) {
              var _a;
              return Object.assign({}, a, (_a = {}, _a[name] = f2(a), _a));
            });
          };
        };
      }
      exports.let = let_5;
      function getFunctorComposition(F, G) {
        var _map4 = map6(F, G);
        return {
          map: function(fga, f2) {
            return (0, function_1.pipe)(fga, _map4(f2));
          }
        };
      }
      exports.getFunctorComposition = getFunctorComposition;
      function as3(F) {
        return function(self, b) {
          return F.map(self, function() {
            return b;
          });
        };
      }
      exports.as = as3;
      function asUnit3(F) {
        var asM = as3(F);
        return function(self) {
          return asM(self, void 0);
        };
      }
      exports.asUnit = asUnit3;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Applicative.js
  var require_Applicative = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Applicative.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getApplicativeComposition = exports.getApplicativeMonoid = void 0;
      var Apply_1 = require_Apply();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      function getApplicativeMonoid2(F) {
        var f2 = (0, Apply_1.getApplySemigroup)(F);
        return function(M) {
          return {
            concat: f2(M).concat,
            empty: F.of(M.empty)
          };
        };
      }
      exports.getApplicativeMonoid = getApplicativeMonoid2;
      function getApplicativeComposition(F, G) {
        var map6 = (0, Functor_1.getFunctorComposition)(F, G).map;
        var _ap3 = (0, Apply_1.ap)(F, G);
        return {
          map: map6,
          of: function(a) {
            return F.of(G.of(a));
          },
          ap: function(fgab, fga) {
            return (0, function_1.pipe)(fgab, _ap3(fga));
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bind = exports.tap = exports.chainFirst = void 0;
      function chainFirst4(M) {
        var tapM = tap3(M);
        return function(f2) {
          return function(first3) {
            return tapM(first3, f2);
          };
        };
      }
      exports.chainFirst = chainFirst4;
      function tap3(M) {
        return function(first3, f2) {
          return M.chain(first3, function(a) {
            return M.map(f2(a), function() {
              return a;
            });
          });
        };
      }
      exports.tap = tap3;
      function bind5(M) {
        return function(name, f2) {
          return function(ma) {
            return M.chain(ma, function(a) {
              return M.map(f2(a), function(b) {
                var _a;
                return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
              });
            });
          };
        };
      }
      exports.bind = bind5;
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
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.tapEither = exports.filterOrElse = exports.chainFirstEitherK = exports.chainEitherK = exports.fromEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromPredicate = exports.fromOption = void 0;
      var Chain_1 = require_Chain();
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      function fromOption2(F) {
        return function(onNone) {
          return function(ma) {
            return F.fromEither(_.isNone(ma) ? _.left(onNone()) : _.right(ma.value));
          };
        };
      }
      exports.fromOption = fromOption2;
      function fromPredicate4(F) {
        return function(predicate, onFalse) {
          return function(a) {
            return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
          };
        };
      }
      exports.fromPredicate = fromPredicate4;
      function fromOptionK2(F) {
        var fromOptionF = fromOption2(F);
        return function(onNone) {
          var from = fromOptionF(onNone);
          return function(f2) {
            return (0, function_1.flow)(f2, from);
          };
        };
      }
      exports.fromOptionK = fromOptionK2;
      function chainOptionK(F, M) {
        var fromOptionKF = fromOptionK2(F);
        return function(onNone) {
          var from = fromOptionKF(onNone);
          return function(f2) {
            return function(ma) {
              return M.chain(ma, from(f2));
            };
          };
        };
      }
      exports.chainOptionK = chainOptionK;
      function fromEitherK4(F) {
        return function(f2) {
          return (0, function_1.flow)(f2, F.fromEither);
        };
      }
      exports.fromEitherK = fromEitherK4;
      function chainEitherK3(F, M) {
        var fromEitherKF = fromEitherK4(F);
        return function(f2) {
          return function(ma) {
            return M.chain(ma, fromEitherKF(f2));
          };
        };
      }
      exports.chainEitherK = chainEitherK3;
      function chainFirstEitherK2(F, M) {
        var tapEitherM = tapEither3(F, M);
        return function(f2) {
          return function(ma) {
            return tapEitherM(ma, f2);
          };
        };
      }
      exports.chainFirstEitherK = chainFirstEitherK2;
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
      function tapEither3(F, M) {
        var fromEither3 = fromEitherK4(F);
        var tapM = (0, Chain_1.tap)(M);
        return function(self, f2) {
          return tapM(self, fromEither3(f2));
        };
      }
      exports.tapEither = tapEither3;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Predicate.js
  var require_Predicate = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Predicate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.and = exports.or = exports.not = exports.Contravariant = exports.getMonoidAll = exports.getSemigroupAll = exports.getMonoidAny = exports.getSemigroupAny = exports.URI = exports.contramap = void 0;
      var function_1 = require_function();
      var contramap_ = function(predicate, f2) {
        return (0, function_1.pipe)(predicate, (0, exports.contramap)(f2));
      };
      var contramap = function(f2) {
        return function(predicate) {
          return (0, function_1.flow)(f2, predicate);
        };
      };
      exports.contramap = contramap;
      exports.URI = "Predicate";
      var getSemigroupAny = function() {
        return {
          concat: function(first3, second) {
            return (0, function_1.pipe)(first3, (0, exports.or)(second));
          }
        };
      };
      exports.getSemigroupAny = getSemigroupAny;
      var getMonoidAny = function() {
        return {
          concat: (0, exports.getSemigroupAny)().concat,
          empty: function_1.constFalse
        };
      };
      exports.getMonoidAny = getMonoidAny;
      var getSemigroupAll = function() {
        return {
          concat: function(first3, second) {
            return (0, function_1.pipe)(first3, (0, exports.and)(second));
          }
        };
      };
      exports.getSemigroupAll = getSemigroupAll;
      var getMonoidAll = function() {
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
      var not3 = function(predicate) {
        return function(a) {
          return !predicate(a);
        };
      };
      exports.not = not3;
      var or = function(second) {
        return function(first3) {
          return function(a) {
            return first3(a) || second(a);
          };
        };
      };
      exports.or = or;
      var and = function(second) {
        return function(first3) {
          return function(a) {
            return first3(a) && second(a);
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.concatAll = exports.endo = exports.filterSecond = exports.filterFirst = exports.reverse = void 0;
      var reverse4 = function(M) {
        return {
          concat: function(first3, second) {
            return M.concat(second, first3);
          }
        };
      };
      exports.reverse = reverse4;
      var filterFirst = function(predicate) {
        return function(M) {
          return {
            concat: function(first3, second) {
              return predicate(first3) ? M.concat(first3, second) : second;
            }
          };
        };
      };
      exports.filterFirst = filterFirst;
      var filterSecond = function(predicate) {
        return function(M) {
          return {
            concat: function(first3, second) {
              return predicate(second) ? M.concat(first3, second) : first3;
            }
          };
        };
      };
      exports.filterSecond = filterSecond;
      var endo = function(f2) {
        return function(M) {
          return {
            concat: function(first3, second) {
              return M.concat(f2(first3), f2(second));
            }
          };
        };
      };
      exports.endo = endo;
      var concatAll5 = function(M) {
        return function(startWith) {
          return function(as3) {
            return as3.reduce(function(a, acc) {
              return M.concat(a, acc);
            }, startWith);
          };
        };
      };
      exports.concatAll = concatAll5;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Eq.js
  var require_Eq = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Eq.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.eqDate = exports.eqNumber = exports.eqString = exports.eqBoolean = exports.eq = exports.strictEqual = exports.getStructEq = exports.getTupleEq = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.eqStrict = exports.URI = exports.contramap = exports.tuple = exports.struct = exports.fromEquals = void 0;
      var function_1 = require_function();
      var fromEquals2 = function(equals) {
        return {
          equals: function(x, y) {
            return x === y || equals(x, y);
          }
        };
      };
      exports.fromEquals = fromEquals2;
      var struct2 = function(eqs) {
        return (0, exports.fromEquals)(function(first3, second) {
          for (var key in eqs) {
            if (!eqs[key].equals(first3[key], second[key])) {
              return false;
            }
          }
          return true;
        });
      };
      exports.struct = struct2;
      var tuple2 = function() {
        var eqs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          eqs[_i] = arguments[_i];
        }
        return (0, exports.fromEquals)(function(first3, second) {
          return eqs.every(function(E, i) {
            return E.equals(first3[i], second[i]);
          });
        });
      };
      exports.tuple = tuple2;
      var contramap_ = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f2));
      };
      var contramap = function(f2) {
        return function(fa) {
          return (0, exports.fromEquals)(function(x, y) {
            return fa.equals(f2(x), f2(y));
          });
        };
      };
      exports.contramap = contramap;
      exports.URI = "Eq";
      exports.eqStrict = {
        equals: function(a, b) {
          return a === b;
        }
      };
      var empty4 = {
        equals: function() {
          return true;
        }
      };
      var getSemigroup5 = function() {
        return {
          concat: function(x, y) {
            return (0, exports.fromEquals)(function(a, b) {
              return x.equals(a, b) && y.equals(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup5;
      var getMonoid7 = function() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty: empty4
        };
      };
      exports.getMonoid = getMonoid7;
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
        equals: function(first3, second) {
          return first3.valueOf() === second.valueOf();
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Ord.js
  var require_Ord = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Ord.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ordDate = exports.ordNumber = exports.ordString = exports.ordBoolean = exports.ord = exports.getDualOrd = exports.getTupleOrd = exports.between = exports.clamp = exports.max = exports.min = exports.geq = exports.leq = exports.gt = exports.lt = exports.equals = exports.trivial = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.URI = exports.contramap = exports.reverse = exports.tuple = exports.fromCompare = exports.equalsDefault = void 0;
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var equalsDefault2 = function(compare3) {
        return function(first3, second) {
          return first3 === second || compare3(first3, second) === 0;
        };
      };
      exports.equalsDefault = equalsDefault2;
      var fromCompare2 = function(compare3) {
        return {
          equals: (0, exports.equalsDefault)(compare3),
          compare: function(first3, second) {
            return first3 === second ? 0 : compare3(first3, second);
          }
        };
      };
      exports.fromCompare = fromCompare2;
      var tuple2 = function() {
        var ords = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          ords[_i] = arguments[_i];
        }
        return (0, exports.fromCompare)(function(first3, second) {
          var i = 0;
          for (; i < ords.length - 1; i++) {
            var r = ords[i].compare(first3[i], second[i]);
            if (r !== 0) {
              return r;
            }
          }
          return ords[i].compare(first3[i], second[i]);
        });
      };
      exports.tuple = tuple2;
      var reverse4 = function(O2) {
        return (0, exports.fromCompare)(function(first3, second) {
          return O2.compare(second, first3);
        });
      };
      exports.reverse = reverse4;
      var contramap_ = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.contramap)(f2));
      };
      var contramap = function(f2) {
        return function(fa) {
          return (0, exports.fromCompare)(function(first3, second) {
            return fa.compare(f2(first3), f2(second));
          });
        };
      };
      exports.contramap = contramap;
      exports.URI = "Ord";
      var getSemigroup5 = function() {
        return {
          concat: function(first3, second) {
            return (0, exports.fromCompare)(function(a, b) {
              var ox = first3.compare(a, b);
              return ox !== 0 ? ox : second.compare(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup5;
      var getMonoid7 = function() {
        return {
          concat: (0, exports.getSemigroup)().concat,
          empty: (0, exports.fromCompare)(function() {
            return 0;
          })
        };
      };
      exports.getMonoid = getMonoid7;
      exports.Contravariant = {
        URI: exports.URI,
        contramap: contramap_
      };
      exports.trivial = {
        equals: function_1.constTrue,
        compare: /* @__PURE__ */ (0, function_1.constant)(0)
      };
      var equals = function(O2) {
        return function(second) {
          return function(first3) {
            return first3 === second || O2.compare(first3, second) === 0;
          };
        };
      };
      exports.equals = equals;
      var lt = function(O2) {
        return function(first3, second) {
          return O2.compare(first3, second) === -1;
        };
      };
      exports.lt = lt;
      var gt = function(O2) {
        return function(first3, second) {
          return O2.compare(first3, second) === 1;
        };
      };
      exports.gt = gt;
      var leq = function(O2) {
        return function(first3, second) {
          return O2.compare(first3, second) !== 1;
        };
      };
      exports.leq = leq;
      var geq = function(O2) {
        return function(first3, second) {
          return O2.compare(first3, second) !== -1;
        };
      };
      exports.geq = geq;
      var min3 = function(O2) {
        return function(first3, second) {
          return first3 === second || O2.compare(first3, second) < 1 ? first3 : second;
        };
      };
      exports.min = min3;
      var max3 = function(O2) {
        return function(first3, second) {
          return first3 === second || O2.compare(first3, second) > -1 ? first3 : second;
        };
      };
      exports.max = max3;
      var clamp = function(O2) {
        var minO = (0, exports.min)(O2);
        var maxO = (0, exports.max)(O2);
        return function(low, hi) {
          return function(a) {
            return maxO(minO(a, hi), low);
          };
        };
      };
      exports.clamp = clamp;
      var between = function(O2) {
        var ltO = (0, exports.lt)(O2);
        var gtO = (0, exports.gt)(O2);
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
      function compare2(first3, second) {
        return first3 < second ? -1 : first3 > second ? 1 : 0;
      }
      var strictOrd2 = {
        equals: Eq_1.eqStrict.equals,
        compare: compare2
      };
      exports.ordBoolean = strictOrd2;
      exports.ordString = strictOrd2;
      exports.ordNumber = strictOrd2;
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
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.semigroupProduct = exports.semigroupSum = exports.semigroupString = exports.getFunctionSemigroup = exports.semigroupAny = exports.semigroupAll = exports.fold = exports.getIntercalateSemigroup = exports.getMeetSemigroup = exports.getJoinSemigroup = exports.getDualSemigroup = exports.getStructSemigroup = exports.getTupleSemigroup = exports.getFirstSemigroup = exports.getLastSemigroup = exports.getObjectSemigroup = exports.semigroupVoid = exports.concatAll = exports.last = exports.first = exports.intercalate = exports.tuple = exports.struct = exports.reverse = exports.constant = exports.max = exports.min = void 0;
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      var M = __importStar(require_Magma());
      var Or = __importStar(require_Ord());
      var min3 = function(O2) {
        return {
          concat: Or.min(O2)
        };
      };
      exports.min = min3;
      var max3 = function(O2) {
        return {
          concat: Or.max(O2)
        };
      };
      exports.max = max3;
      var constant5 = function(a) {
        return {
          concat: function() {
            return a;
          }
        };
      };
      exports.constant = constant5;
      exports.reverse = M.reverse;
      var struct2 = function(semigroups) {
        return {
          concat: function(first4, second) {
            var r = {};
            for (var k in semigroups) {
              if (_.has.call(semigroups, k)) {
                r[k] = semigroups[k].concat(first4[k], second[k]);
              }
            }
            return r;
          }
        };
      };
      exports.struct = struct2;
      var tuple2 = function() {
        var semigroups = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          semigroups[_i] = arguments[_i];
        }
        return {
          concat: function(first4, second) {
            return semigroups.map(function(s, i) {
              return s.concat(first4[i], second[i]);
            });
          }
        };
      };
      exports.tuple = tuple2;
      var intercalate4 = function(middle) {
        return function(S) {
          return {
            concat: function(x, y) {
              return S.concat(x, S.concat(middle, y));
            }
          };
        };
      };
      exports.intercalate = intercalate4;
      var first3 = function() {
        return { concat: function_1.identity };
      };
      exports.first = first3;
      var last6 = function() {
        return { concat: function(_2, y) {
          return y;
        } };
      };
      exports.last = last6;
      exports.concatAll = M.concatAll;
      exports.semigroupVoid = (0, exports.constant)(void 0);
      var getObjectSemigroup = function() {
        return {
          concat: function(first4, second) {
            return Object.assign({}, first4, second);
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
      function fold2(S) {
        var concatAllS = (0, exports.concatAll)(S);
        return function(startWith, as3) {
          return as3 === void 0 ? concatAllS(startWith) : concatAllS(startWith)(as3);
        };
      }
      exports.fold = fold2;
      exports.semigroupAll = {
        concat: function(x, y) {
          return x && y;
        }
      };
      exports.semigroupAny = {
        concat: function(x, y) {
          return x || y;
        }
      };
      exports.getFunctionSemigroup = function_1.getSemigroup;
      exports.semigroupString = {
        concat: function(x, y) {
          return x + y;
        }
      };
      exports.semigroupSum = {
        concat: function(x, y) {
          return x + y;
        }
      };
      exports.semigroupProduct = {
        concat: function(x, y) {
          return x * y;
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Separated.js
  var require_Separated = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Separated.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = void 0;
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var separated2 = function(left2, right2) {
        return { left: left2, right: right2 };
      };
      exports.separated = separated2;
      var _map4 = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f2));
      };
      var _mapLeft = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f2));
      };
      var _bimap = function(fa, g, f2) {
        return (0, function_1.pipe)(fa, (0, exports.bimap)(g, f2));
      };
      var map6 = function(f2) {
        return function(fa) {
          return (0, exports.separated)((0, exports.left)(fa), f2((0, exports.right)(fa)));
        };
      };
      exports.map = map6;
      var mapLeft = function(f2) {
        return function(fa) {
          return (0, exports.separated)(f2((0, exports.left)(fa)), (0, exports.right)(fa));
        };
      };
      exports.mapLeft = mapLeft;
      var bimap = function(f2, g) {
        return function(fa) {
          return (0, exports.separated)(f2((0, exports.left)(fa)), g((0, exports.right)(fa)));
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
        map: _map4
      };
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      var left = function(s) {
        return s.left;
      };
      exports.left = left;
      var right = function(s) {
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
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.filterE = exports.witherDefault = exports.wiltDefault = void 0;
      var _ = __importStar(require_internal());
      function wiltDefault2(T, C) {
        return function(F) {
          var traverseF = T.traverse(F);
          return function(wa, f2) {
            return F.map(traverseF(wa, f2), C.separate);
          };
        };
      }
      exports.wiltDefault = wiltDefault2;
      function witherDefault2(T, C) {
        return function(F) {
          var traverseF = T.traverse(F);
          return function(wa, f2) {
            return F.map(traverseF(wa, f2), C.compact);
          };
        };
      }
      exports.witherDefault = witherDefault2;
      function filterE3(W) {
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
      exports.filterE = filterE3;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Zero.js
  var require_Zero = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/Zero.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.guard = void 0;
      function guard5(F, P) {
        return function(b) {
          return b ? P.of(void 0) : F.zero();
        };
      }
      exports.guard = guard5;
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
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Witherable = exports.wilt = exports.wither = exports.Traversable = exports.sequence = exports.traverse = exports.Filterable = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.Compactable = exports.separate = exports.compact = exports.Extend = exports.extend = exports.Alternative = exports.guard = exports.Zero = exports.zero = exports.Alt = exports.alt = exports.altW = exports.orElse = exports.Foldable = exports.reduceRight = exports.foldMap = exports.reduce = exports.Monad = exports.Chain = exports.flatMap = exports.Applicative = exports.Apply = exports.ap = exports.Pointed = exports.of = exports.asUnit = exports.as = exports.Functor = exports.map = exports.getMonoid = exports.getOrd = exports.getEq = exports.getShow = exports.URI = exports.getRight = exports.getLeft = exports.fromPredicate = exports.some = exports.none = void 0;
      exports.getFirstMonoid = exports.getApplyMonoid = exports.getApplySemigroup = exports.option = exports.mapNullable = exports.getRefinement = exports.chainFirst = exports.chain = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.ApT = exports.apS = exports.bind = exports.let = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toUndefined = exports.toNullable = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.chainFirstEitherK = exports.chainEitherK = exports.fromEitherK = exports.duplicate = exports.tapEither = exports.tap = exports.flatten = exports.apSecond = exports.apFirst = exports.flap = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.isNone = exports.isSome = exports.FromEither = exports.fromEither = exports.MonadThrow = exports.throwError = void 0;
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
      function fromPredicate4(predicate) {
        return function(a) {
          return predicate(a) ? (0, exports.some)(a) : exports.none;
        };
      }
      exports.fromPredicate = fromPredicate4;
      var getLeft2 = function(ma) {
        return ma._tag === "Right" ? exports.none : (0, exports.some)(ma.left);
      };
      exports.getLeft = getLeft2;
      var getRight2 = function(ma) {
        return ma._tag === "Left" ? exports.none : (0, exports.some)(ma.right);
      };
      exports.getRight = getRight2;
      var _map4 = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f2));
      };
      var _ap3 = function(fab, fa) {
        return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
      };
      var _reduce4 = function(fa, b, f2) {
        return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f2));
      };
      var _foldMap4 = function(M) {
        var foldMapM = (0, exports.foldMap)(M);
        return function(fa, f2) {
          return (0, function_1.pipe)(fa, foldMapM(f2));
        };
      };
      var _reduceRight4 = function(fa, b, f2) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f2));
      };
      var _traverse4 = function(F) {
        var traverseF = (0, exports.traverse)(F);
        return function(ta, f2) {
          return (0, function_1.pipe)(ta, traverseF(f2));
        };
      };
      var _alt3 = function(fa, that) {
        return (0, function_1.pipe)(fa, (0, exports.alt)(that));
      };
      var _filter4 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
      };
      var _filterMap4 = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.filterMap)(f2));
      };
      var _extend3 = function(wa, f2) {
        return (0, function_1.pipe)(wa, (0, exports.extend)(f2));
      };
      var _partition4 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
      };
      var _partitionMap4 = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f2));
      };
      exports.URI = "Option";
      var getShow6 = function(S) {
        return {
          show: function(ma) {
            return (0, exports.isNone)(ma) ? "none" : "some(".concat(S.show(ma.value), ")");
          }
        };
      };
      exports.getShow = getShow6;
      var getEq6 = function(E) {
        return {
          equals: function(x, y) {
            return x === y || ((0, exports.isNone)(x) ? (0, exports.isNone)(y) : (0, exports.isNone)(y) ? false : E.equals(x.value, y.value));
          }
        };
      };
      exports.getEq = getEq6;
      var getOrd4 = function(O2) {
        return {
          equals: (0, exports.getEq)(O2).equals,
          compare: function(x, y) {
            return x === y ? 0 : (0, exports.isSome)(x) ? (0, exports.isSome)(y) ? O2.compare(x.value, y.value) : 1 : -1;
          }
        };
      };
      exports.getOrd = getOrd4;
      var getMonoid7 = function(S) {
        return {
          concat: function(x, y) {
            return (0, exports.isNone)(x) ? y : (0, exports.isNone)(y) ? x : (0, exports.some)(S.concat(x.value, y.value));
          },
          empty: exports.none
        };
      };
      exports.getMonoid = getMonoid7;
      var map6 = function(f2) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? exports.none : (0, exports.some)(f2(fa.value));
        };
      };
      exports.map = map6;
      exports.Functor = {
        URI: exports.URI,
        map: _map4
      };
      exports.as = (0, function_1.dual)(2, (0, Functor_1.as)(exports.Functor));
      exports.asUnit = (0, Functor_1.asUnit)(exports.Functor);
      exports.of = exports.some;
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      var ap5 = function(fa) {
        return function(fab) {
          return (0, exports.isNone)(fab) ? exports.none : (0, exports.isNone)(fa) ? exports.none : (0, exports.some)(fab.value(fa.value));
        };
      };
      exports.ap = ap5;
      exports.Apply = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3
      };
      exports.Applicative = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3,
        of: exports.of
      };
      exports.flatMap = (0, function_1.dual)(2, function(ma, f2) {
        return (0, exports.isNone)(ma) ? exports.none : f2(ma.value);
      });
      exports.Chain = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3,
        chain: exports.flatMap
      };
      exports.Monad = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3,
        of: exports.of,
        chain: exports.flatMap
      };
      var reduce6 = function(b, f2) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? b : f2(b, fa.value);
        };
      };
      exports.reduce = reduce6;
      var foldMap6 = function(M) {
        return function(f2) {
          return function(fa) {
            return (0, exports.isNone)(fa) ? M.empty : f2(fa.value);
          };
        };
      };
      exports.foldMap = foldMap6;
      var reduceRight6 = function(b, f2) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? b : f2(fa.value, b);
        };
      };
      exports.reduceRight = reduceRight6;
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4
      };
      exports.orElse = (0, function_1.dual)(2, function(self, that) {
        return (0, exports.isNone)(self) ? that() : self;
      });
      exports.altW = exports.orElse;
      exports.alt = exports.orElse;
      exports.Alt = {
        URI: exports.URI,
        map: _map4,
        alt: _alt3
      };
      var zero3 = function() {
        return exports.none;
      };
      exports.zero = zero3;
      exports.Zero = {
        URI: exports.URI,
        zero: exports.zero
      };
      exports.guard = (0, Zero_1.guard)(exports.Zero, exports.Pointed);
      exports.Alternative = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3,
        of: exports.of,
        alt: _alt3,
        zero: exports.zero
      };
      var extend3 = function(f2) {
        return function(wa) {
          return (0, exports.isNone)(wa) ? exports.none : (0, exports.some)(f2(wa));
        };
      };
      exports.extend = extend3;
      exports.Extend = {
        URI: exports.URI,
        map: _map4,
        extend: _extend3
      };
      exports.compact = (0, exports.flatMap)(function_1.identity);
      var defaultSeparated2 = /* @__PURE__ */ (0, Separated_1.separated)(exports.none, exports.none);
      var separate4 = function(ma) {
        return (0, exports.isNone)(ma) ? defaultSeparated2 : (0, Separated_1.separated)((0, exports.getLeft)(ma.value), (0, exports.getRight)(ma.value));
      };
      exports.separate = separate4;
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      var filter4 = function(predicate) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? exports.none : predicate(fa.value) ? fa : exports.none;
        };
      };
      exports.filter = filter4;
      var filterMap4 = function(f2) {
        return function(fa) {
          return (0, exports.isNone)(fa) ? exports.none : f2(fa.value);
        };
      };
      exports.filterMap = filterMap4;
      var partition4 = function(predicate) {
        return function(fa) {
          return (0, Separated_1.separated)(_filter4(fa, (0, Predicate_1.not)(predicate)), _filter4(fa, predicate));
        };
      };
      exports.partition = partition4;
      var partitionMap4 = function(f2) {
        return (0, function_1.flow)((0, exports.map)(f2), exports.separate);
      };
      exports.partitionMap = partitionMap4;
      exports.Filterable = {
        URI: exports.URI,
        map: _map4,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter4,
        filterMap: _filterMap4,
        partition: _partition4,
        partitionMap: _partitionMap4
      };
      var traverse4 = function(F) {
        return function(f2) {
          return function(ta) {
            return (0, exports.isNone)(ta) ? F.of(exports.none) : F.map(f2(ta.value), exports.some);
          };
        };
      };
      exports.traverse = traverse4;
      var sequence4 = function(F) {
        return function(ta) {
          return (0, exports.isNone)(ta) ? F.of(exports.none) : F.map(ta.value, exports.some);
        };
      };
      exports.sequence = sequence4;
      exports.Traversable = {
        URI: exports.URI,
        map: _map4,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        traverse: _traverse4,
        sequence: exports.sequence
      };
      var _wither3 = /* @__PURE__ */ (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
      var _wilt3 = /* @__PURE__ */ (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
      var wither3 = function(F) {
        var _witherF = _wither3(F);
        return function(f2) {
          return function(fa) {
            return _witherF(fa, f2);
          };
        };
      };
      exports.wither = wither3;
      var wilt3 = function(F) {
        var _wiltF = _wilt3(F);
        return function(f2) {
          return function(fa) {
            return _wiltF(fa, f2);
          };
        };
      };
      exports.wilt = wilt3;
      exports.Witherable = {
        URI: exports.URI,
        map: _map4,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        traverse: _traverse4,
        sequence: exports.sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter4,
        filterMap: _filterMap4,
        partition: _partition4,
        partitionMap: _partitionMap4,
        wither: _wither3,
        wilt: _wilt3
      };
      var throwError2 = function() {
        return exports.none;
      };
      exports.throwError = throwError2;
      exports.MonadThrow = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3,
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
      var isNone4 = function(fa) {
        return fa._tag === "None";
      };
      exports.isNone = isNone4;
      var matchW4 = function(onNone, onSome) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? onNone() : onSome(ma.value);
        };
      };
      exports.matchW = matchW4;
      exports.foldW = exports.matchW;
      exports.match = exports.matchW;
      exports.fold = exports.match;
      var getOrElseW2 = function(onNone) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? onNone() : ma.value;
        };
      };
      exports.getOrElseW = getOrElseW2;
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
      var fromNullable2 = function(a) {
        return a == null ? exports.none : (0, exports.some)(a);
      };
      exports.fromNullable = fromNullable2;
      var tryCatch2 = function(f2) {
        try {
          return (0, exports.some)(f2());
        } catch (e) {
          return exports.none;
        }
      };
      exports.tryCatch = tryCatch2;
      var tryCatchK2 = function(f2) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return (0, exports.tryCatch)(function() {
            return f2.apply(void 0, a);
          });
        };
      };
      exports.tryCatchK = tryCatchK2;
      var fromNullableK2 = function(f2) {
        return (0, function_1.flow)(f2, exports.fromNullable);
      };
      exports.fromNullableK = fromNullableK2;
      var chainNullableK2 = function(f2) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? exports.none : (0, exports.fromNullable)(f2(ma.value));
        };
      };
      exports.chainNullableK = chainNullableK2;
      exports.toNullable = (0, exports.match)(function_1.constNull, function_1.identity);
      exports.toUndefined = (0, exports.match)(function_1.constUndefined, function_1.identity);
      function elem5(E) {
        return function(a, ma) {
          if (ma === void 0) {
            var elemE_1 = elem5(E);
            return function(ma2) {
              return elemE_1(a, ma2);
            };
          }
          return (0, exports.isNone)(ma) ? false : E.equals(a, ma.value);
        };
      }
      exports.elem = elem5;
      var exists3 = function(predicate) {
        return function(ma) {
          return (0, exports.isNone)(ma) ? false : predicate(ma.value);
        };
      };
      exports.exists = exists3;
      exports.Do = (0, exports.of)(_.emptyRecord);
      exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
      var let_5 = /* @__PURE__ */ (0, Functor_1.let)(exports.Functor);
      exports.let = let_5;
      exports.bind = chainable.bind(exports.Chain);
      exports.apS = (0, Apply_1.apS)(exports.Apply);
      exports.ApT = (0, exports.of)(_.emptyReadonlyArray);
      var traverseReadonlyNonEmptyArrayWithIndex2 = function(f2) {
        return function(as3) {
          var o = f2(0, _.head(as3));
          if ((0, exports.isNone)(o)) {
            return exports.none;
          }
          var out = [o.value];
          for (var i = 1; i < as3.length; i++) {
            var o_1 = f2(i, as3[i]);
            if ((0, exports.isNone)(o_1)) {
              return exports.none;
            }
            out.push(o_1.value);
          }
          return (0, exports.some)(out);
        };
      };
      exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex2;
      var traverseReadonlyArrayWithIndex2 = function(f2) {
        var g = (0, exports.traverseReadonlyNonEmptyArrayWithIndex)(f2);
        return function(as3) {
          return _.isNonEmpty(as3) ? g(as3) : exports.ApT;
        };
      };
      exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex2;
      exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex;
      var traverseArray2 = function(f2) {
        return (0, exports.traverseReadonlyArrayWithIndex)(function(_2, a) {
          return f2(a);
        });
      };
      exports.traverseArray = traverseArray2;
      exports.sequenceArray = /* @__PURE__ */ (0, exports.traverseArray)(function_1.identity);
      exports.chain = exports.flatMap;
      exports.chainFirst = exports.tap;
      function getRefinement2(getOption) {
        return function(a) {
          return (0, exports.isSome)(getOption(a));
        };
      }
      exports.getRefinement = getRefinement2;
      exports.mapNullable = exports.chainNullableK;
      exports.option = {
        URI: exports.URI,
        map: _map4,
        of: exports.of,
        ap: _ap3,
        chain: exports.flatMap,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        traverse: _traverse4,
        sequence: exports.sequence,
        zero: exports.zero,
        alt: _alt3,
        extend: _extend3,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter4,
        filterMap: _filterMap4,
        partition: _partition4,
        partitionMap: _partitionMap4,
        wither: _wither3,
        wilt: _wilt3,
        throwError: exports.throwError
      };
      exports.getApplySemigroup = (0, Apply_1.getApplySemigroup)(exports.Apply);
      exports.getApplyMonoid = (0, Applicative_1.getApplicativeMonoid)(exports.Applicative);
      var getFirstMonoid2 = function() {
        return (0, exports.getMonoid)((0, Semigroup_1.first)());
      };
      exports.getFirstMonoid = getFirstMonoid2;
      var getLastMonoid2 = function() {
        return (0, exports.getMonoid)((0, Semigroup_1.last)());
      };
      exports.getLastMonoid = getLastMonoid2;
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
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
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
      var __spreadArray6 = exports && exports.__spreadArray || function(to, from, pack) {
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reduceRight = exports.foldMap = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.flatMap = exports.ap = exports.alt = exports.altW = exports.of = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.modifyAt = exports.updateAt = exports.sort = exports.groupBy = exports.group = exports.reverse = exports.concat = exports.concatW = exports.fromArray = exports.unappend = exports.unprepend = exports.range = exports.replicate = exports.makeBy = exports.fromReadonlyArray = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.appendW = exports.prepend = exports.prependW = exports.isOutOfBound = exports.isNonEmpty = exports.empty = void 0;
      exports.groupSort = exports.chain = exports.intercalate = exports.updateLast = exports.modifyLast = exports.updateHead = exports.modifyHead = exports.matchRight = exports.matchLeft = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.let = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getUnionSemigroup = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = void 0;
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
      var isOutOfBound5 = function(i, as3) {
        return i < 0 || i >= as3.length;
      };
      exports.isOutOfBound = isOutOfBound5;
      var prependW4 = function(head6) {
        return function(tail5) {
          return __spreadArray6([head6], tail5, true);
        };
      };
      exports.prependW = prependW4;
      exports.prepend = exports.prependW;
      var appendW4 = function(end) {
        return function(init5) {
          return __spreadArray6(__spreadArray6([], init5, true), [end], false);
        };
      };
      exports.appendW = appendW4;
      exports.append = exports.appendW;
      var unsafeInsertAt4 = function(i, a, as3) {
        if ((0, exports.isNonEmpty)(as3)) {
          var xs = _.fromReadonlyNonEmptyArray(as3);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      exports.unsafeInsertAt = unsafeInsertAt4;
      var unsafeUpdateAt4 = function(i, a, as3) {
        if (as3[i] === a) {
          return as3;
        } else {
          var xs = _.fromReadonlyNonEmptyArray(as3);
          xs[i] = a;
          return xs;
        }
      };
      exports.unsafeUpdateAt = unsafeUpdateAt4;
      var uniq4 = function(E) {
        return function(as3) {
          if (as3.length === 1) {
            return as3;
          }
          var out = [(0, exports.head)(as3)];
          var rest = (0, exports.tail)(as3);
          var _loop_1 = function(a2) {
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
      exports.uniq = uniq4;
      var sortBy4 = function(ords) {
        if ((0, exports.isNonEmpty)(ords)) {
          var M = (0, Ord_1.getMonoid)();
          return (0, exports.sort)(ords.reduce(M.concat, M.empty));
        }
        return function_1.identity;
      };
      exports.sortBy = sortBy4;
      var union5 = function(E) {
        var uniqE = (0, exports.uniq)(E);
        return function(second) {
          return function(first3) {
            return uniqE((0, function_1.pipe)(first3, concat3(second)));
          };
        };
      };
      exports.union = union5;
      var rotate4 = function(n) {
        return function(as3) {
          var len = as3.length;
          var m = Math.round(n) % len;
          if ((0, exports.isOutOfBound)(Math.abs(m), as3) || m === 0) {
            return as3;
          }
          if (m < 0) {
            var _a = (0, exports.splitAt)(-m)(as3), f2 = _a[0], s = _a[1];
            return (0, function_1.pipe)(s, concat3(f2));
          } else {
            return (0, exports.rotate)(m - len)(as3);
          }
        };
      };
      exports.rotate = rotate4;
      var fromReadonlyArray = function(as3) {
        return (0, exports.isNonEmpty)(as3) ? _.some(as3) : _.none;
      };
      exports.fromReadonlyArray = fromReadonlyArray;
      var makeBy4 = function(f2) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f2(0)];
          for (var i = 1; i < j; i++) {
            out.push(f2(i));
          }
          return out;
        };
      };
      exports.makeBy = makeBy4;
      var replicate2 = function(a) {
        return (0, exports.makeBy)(function() {
          return a;
        });
      };
      exports.replicate = replicate2;
      var range4 = function(start, end) {
        return start <= end ? (0, exports.makeBy)(function(i) {
          return start + i;
        })(end - start + 1) : [start];
      };
      exports.range = range4;
      var unprepend = function(as3) {
        return [(0, exports.head)(as3), (0, exports.tail)(as3)];
      };
      exports.unprepend = unprepend;
      var unappend = function(as3) {
        return [(0, exports.init)(as3), (0, exports.last)(as3)];
      };
      exports.unappend = unappend;
      var fromArray = function(as3) {
        return (0, exports.fromReadonlyArray)(as3.slice());
      };
      exports.fromArray = fromArray;
      function concatW2(second) {
        return function(first3) {
          return first3.concat(second);
        };
      }
      exports.concatW = concatW2;
      function concat3(x, y) {
        return y ? x.concat(y) : function(y2) {
          return y2.concat(x);
        };
      }
      exports.concat = concat3;
      var reverse4 = function(as3) {
        return as3.length === 1 ? as3 : __spreadArray6([(0, exports.last)(as3)], as3.slice(0, -1).reverse(), true);
      };
      exports.reverse = reverse4;
      function group(E) {
        return function(as3) {
          var len = as3.length;
          if (len === 0) {
            return exports.empty;
          }
          var out = [];
          var head6 = as3[0];
          var nea = [head6];
          for (var i = 1; i < len; i++) {
            var a = as3[i];
            if (E.equals(a, head6)) {
              nea.push(a);
            } else {
              out.push(nea);
              head6 = a;
              nea = [head6];
            }
          }
          out.push(nea);
          return out;
        };
      }
      exports.group = group;
      var groupBy = function(f2) {
        return function(as3) {
          var out = {};
          for (var _i = 0, as_1 = as3; _i < as_1.length; _i++) {
            var a = as_1[_i];
            var k = f2(a);
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
      var sort3 = function(O2) {
        return function(as3) {
          return as3.length === 1 ? as3 : as3.slice().sort(O2.compare);
        };
      };
      exports.sort = sort3;
      var updateAt2 = function(i, a) {
        return (0, exports.modifyAt)(i, function() {
          return a;
        });
      };
      exports.updateAt = updateAt2;
      var modifyAt2 = function(i, f2) {
        return function(as3) {
          return (0, exports.isOutOfBound)(i, as3) ? _.none : _.some((0, exports.unsafeUpdateAt)(i, f2(as3[i]), as3));
        };
      };
      exports.modifyAt = modifyAt2;
      var zipWith2 = function(as3, bs, f2) {
        var cs = [f2(as3[0], bs[0])];
        var len = Math.min(as3.length, bs.length);
        for (var i = 1; i < len; i++) {
          cs[i] = f2(as3[i], bs[i]);
        }
        return cs;
      };
      exports.zipWith = zipWith2;
      function zip2(as3, bs) {
        if (bs === void 0) {
          return function(bs2) {
            return zip2(bs2, as3);
          };
        }
        return (0, exports.zipWith)(as3, bs, function(a, b) {
          return [a, b];
        });
      }
      exports.zip = zip2;
      var unzip2 = function(abs) {
        var fa = [abs[0][0]];
        var fb = [abs[0][1]];
        for (var i = 1; i < abs.length; i++) {
          fa[i] = abs[i][0];
          fb[i] = abs[i][1];
        }
        return [fa, fb];
      };
      exports.unzip = unzip2;
      var prependAll4 = function(middle) {
        return function(as3) {
          var out = [middle, as3[0]];
          for (var i = 1; i < as3.length; i++) {
            out.push(middle, as3[i]);
          }
          return out;
        };
      };
      exports.prependAll = prependAll4;
      var intersperse4 = function(middle) {
        return function(as3) {
          var rest = (0, exports.tail)(as3);
          return (0, exports.isNonEmpty)(rest) ? (0, function_1.pipe)(rest, (0, exports.prependAll)(middle), (0, exports.prepend)((0, exports.head)(as3))) : as3;
        };
      };
      exports.intersperse = intersperse4;
      var chainWithIndex2 = function(f2) {
        return function(as3) {
          var out = _.fromReadonlyNonEmptyArray(f2(0, (0, exports.head)(as3)));
          for (var i = 1; i < as3.length; i++) {
            out.push.apply(out, f2(i, as3[i]));
          }
          return out;
        };
      };
      exports.chainWithIndex = chainWithIndex2;
      var chop4 = function(f2) {
        return function(as3) {
          var _a = f2(as3), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while ((0, exports.isNonEmpty)(next)) {
            var _b = f2(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      exports.chop = chop4;
      var splitAt4 = function(n) {
        return function(as3) {
          var m = Math.max(1, n);
          return m >= as3.length ? [as3, exports.empty] : [(0, function_1.pipe)(as3.slice(1, m), (0, exports.prepend)((0, exports.head)(as3))), as3.slice(m)];
        };
      };
      exports.splitAt = splitAt4;
      var chunksOf4 = function(n) {
        return (0, exports.chop)((0, exports.splitAt)(n));
      };
      exports.chunksOf = chunksOf4;
      var _map4 = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.map)(f2));
      };
      var _mapWithIndex3 = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.mapWithIndex)(f2));
      };
      var _ap3 = function(fab, fa) {
        return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
      };
      var _extend3 = function(wa, f2) {
        return (0, function_1.pipe)(wa, (0, exports.extend)(f2));
      };
      var _reduce4 = function(fa, b, f2) {
        return (0, function_1.pipe)(fa, (0, exports.reduce)(b, f2));
      };
      var _foldMap4 = function(M) {
        var foldMapM = (0, exports.foldMap)(M);
        return function(fa, f2) {
          return (0, function_1.pipe)(fa, foldMapM(f2));
        };
      };
      var _reduceRight4 = function(fa, b, f2) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b, f2));
      };
      var _traverse4 = function(F) {
        var traverseF = (0, exports.traverse)(F);
        return function(ta, f2) {
          return (0, function_1.pipe)(ta, traverseF(f2));
        };
      };
      var _alt3 = function(fa, that) {
        return (0, function_1.pipe)(fa, (0, exports.alt)(that));
      };
      var _reduceWithIndex3 = function(fa, b, f2) {
        return (0, function_1.pipe)(fa, (0, exports.reduceWithIndex)(b, f2));
      };
      var _foldMapWithIndex3 = function(M) {
        var foldMapWithIndexM = (0, exports.foldMapWithIndex)(M);
        return function(fa, f2) {
          return (0, function_1.pipe)(fa, foldMapWithIndexM(f2));
        };
      };
      var _reduceRightWithIndex3 = function(fa, b, f2) {
        return (0, function_1.pipe)(fa, (0, exports.reduceRightWithIndex)(b, f2));
      };
      var _traverseWithIndex2 = function(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(ta, f2) {
          return (0, function_1.pipe)(ta, traverseWithIndexF(f2));
        };
      };
      exports.of = _.singleton;
      var altW3 = function(that) {
        return function(as3) {
          return (0, function_1.pipe)(as3, concatW2(that()));
        };
      };
      exports.altW = altW3;
      exports.alt = exports.altW;
      var ap5 = function(as3) {
        return (0, exports.flatMap)(function(f2) {
          return (0, function_1.pipe)(as3, (0, exports.map)(f2));
        });
      };
      exports.ap = ap5;
      exports.flatMap = (0, function_1.dual)(2, function(ma, f2) {
        return (0, function_1.pipe)(ma, (0, exports.chainWithIndex)(function(i, a) {
          return f2(a, i);
        }));
      });
      var extend3 = function(f2) {
        return function(as3) {
          var next = (0, exports.tail)(as3);
          var out = [f2(as3)];
          while ((0, exports.isNonEmpty)(next)) {
            out.push(f2(next));
            next = (0, exports.tail)(next);
          }
          return out;
        };
      };
      exports.extend = extend3;
      exports.duplicate = /* @__PURE__ */ (0, exports.extend)(function_1.identity);
      exports.flatten = /* @__PURE__ */ (0, exports.flatMap)(function_1.identity);
      var map6 = function(f2) {
        return (0, exports.mapWithIndex)(function(_2, a) {
          return f2(a);
        });
      };
      exports.map = map6;
      var mapWithIndex3 = function(f2) {
        return function(as3) {
          var out = [f2(0, (0, exports.head)(as3))];
          for (var i = 1; i < as3.length; i++) {
            out.push(f2(i, as3[i]));
          }
          return out;
        };
      };
      exports.mapWithIndex = mapWithIndex3;
      var reduce6 = function(b, f2) {
        return (0, exports.reduceWithIndex)(b, function(_2, b2, a) {
          return f2(b2, a);
        });
      };
      exports.reduce = reduce6;
      var foldMap6 = function(S) {
        return function(f2) {
          return function(as3) {
            return as3.slice(1).reduce(function(s, a) {
              return S.concat(s, f2(a));
            }, f2(as3[0]));
          };
        };
      };
      exports.foldMap = foldMap6;
      var reduceRight6 = function(b, f2) {
        return (0, exports.reduceRightWithIndex)(b, function(_2, b2, a) {
          return f2(b2, a);
        });
      };
      exports.reduceRight = reduceRight6;
      var reduceWithIndex5 = function(b, f2) {
        return function(as3) {
          return as3.reduce(function(b2, a, i) {
            return f2(i, b2, a);
          }, b);
        };
      };
      exports.reduceWithIndex = reduceWithIndex5;
      var foldMapWithIndex5 = function(S) {
        return function(f2) {
          return function(as3) {
            return as3.slice(1).reduce(function(s, a, i) {
              return S.concat(s, f2(i + 1, a));
            }, f2(0, as3[0]));
          };
        };
      };
      exports.foldMapWithIndex = foldMapWithIndex5;
      var reduceRightWithIndex5 = function(b, f2) {
        return function(as3) {
          return as3.reduceRight(function(b2, a, i) {
            return f2(i, a, b2);
          }, b);
        };
      };
      exports.reduceRightWithIndex = reduceRightWithIndex5;
      var traverse4 = function(F) {
        var traverseWithIndexF = (0, exports.traverseWithIndex)(F);
        return function(f2) {
          return traverseWithIndexF(function(_2, a) {
            return f2(a);
          });
        };
      };
      exports.traverse = traverse4;
      var sequence4 = function(F) {
        return (0, exports.traverseWithIndex)(F)(function_1.SK);
      };
      exports.sequence = sequence4;
      var traverseWithIndex3 = function(F) {
        return function(f2) {
          return function(as3) {
            var out = F.map(f2(0, (0, exports.head)(as3)), exports.of);
            for (var i = 1; i < as3.length; i++) {
              out = F.ap(F.map(out, function(bs) {
                return function(b) {
                  return (0, function_1.pipe)(bs, (0, exports.append)(b));
                };
              }), f2(i, as3[i]));
            }
            return out;
          };
        };
      };
      exports.traverseWithIndex = traverseWithIndex3;
      exports.extract = _.head;
      exports.URI = "ReadonlyNonEmptyArray";
      var getShow6 = function(S) {
        return {
          show: function(as3) {
            return "[".concat(as3.map(S.show).join(", "), "]");
          }
        };
      };
      exports.getShow = getShow6;
      var getSemigroup5 = function() {
        return {
          concat: concat3
        };
      };
      exports.getSemigroup = getSemigroup5;
      var getEq6 = function(E) {
        return (0, Eq_1.fromEquals)(function(xs, ys) {
          return xs.length === ys.length && xs.every(function(x, i) {
            return E.equals(x, ys[i]);
          });
        });
      };
      exports.getEq = getEq6;
      var getUnionSemigroup2 = function(E) {
        var unionE = (0, exports.union)(E);
        return {
          concat: function(first3, second) {
            return unionE(second)(first3);
          }
        };
      };
      exports.getUnionSemigroup = getUnionSemigroup2;
      exports.Functor = {
        URI: exports.URI,
        map: _map4
      };
      exports.flap = (0, Functor_1.flap)(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map4,
        mapWithIndex: _mapWithIndex3
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3
      };
      exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
      exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3,
        chain: exports.flatMap
      };
      exports.chainFirst = (0, Chain_1.chainFirst)(exports.Chain);
      exports.Monad = {
        URI: exports.URI,
        map: _map4,
        ap: _ap3,
        of: exports.of,
        chain: exports.flatMap
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        reduceWithIndex: _reduceWithIndex3,
        foldMapWithIndex: _foldMapWithIndex3,
        reduceRightWithIndex: _reduceRightWithIndex3
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map4,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        traverse: _traverse4,
        sequence: exports.sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map4,
        mapWithIndex: _mapWithIndex3,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        traverse: _traverse4,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex3,
        foldMapWithIndex: _foldMapWithIndex3,
        reduceRightWithIndex: _reduceRightWithIndex3,
        traverseWithIndex: _traverseWithIndex2
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map4,
        alt: _alt3
      };
      exports.Comonad = {
        URI: exports.URI,
        map: _map4,
        extend: _extend3,
        extract: exports.extract
      };
      exports.Do = (0, exports.of)(_.emptyRecord);
      exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
      var let_5 = /* @__PURE__ */ (0, Functor_1.let)(exports.Functor);
      exports.let = let_5;
      exports.bind = (0, Chain_1.bind)(exports.Chain);
      exports.apS = (0, Apply_1.apS)(exports.Apply);
      exports.head = exports.extract;
      exports.tail = _.tail;
      var last6 = function(as3) {
        return as3[as3.length - 1];
      };
      exports.last = last6;
      var init4 = function(as3) {
        return as3.slice(0, -1);
      };
      exports.init = init4;
      var min3 = function(O2) {
        var S = Se.min(O2);
        return function(as3) {
          return as3.reduce(S.concat);
        };
      };
      exports.min = min3;
      var max3 = function(O2) {
        var S = Se.max(O2);
        return function(as3) {
          return as3.reduce(S.concat);
        };
      };
      exports.max = max3;
      var concatAll5 = function(S) {
        return function(as3) {
          return as3.reduce(S.concat);
        };
      };
      exports.concatAll = concatAll5;
      var matchLeft2 = function(f2) {
        return function(as3) {
          return f2((0, exports.head)(as3), (0, exports.tail)(as3));
        };
      };
      exports.matchLeft = matchLeft2;
      var matchRight2 = function(f2) {
        return function(as3) {
          return f2((0, exports.init)(as3), (0, exports.last)(as3));
        };
      };
      exports.matchRight = matchRight2;
      var modifyHead = function(f2) {
        return function(as3) {
          return __spreadArray6([f2((0, exports.head)(as3))], (0, exports.tail)(as3), true);
        };
      };
      exports.modifyHead = modifyHead;
      var updateHead = function(a) {
        return (0, exports.modifyHead)(function() {
          return a;
        });
      };
      exports.updateHead = updateHead;
      var modifyLast = function(f2) {
        return function(as3) {
          return (0, function_1.pipe)((0, exports.init)(as3), (0, exports.append)(f2((0, exports.last)(as3))));
        };
      };
      exports.modifyLast = modifyLast;
      var updateLast = function(a) {
        return (0, exports.modifyLast)(function() {
          return a;
        });
      };
      exports.updateLast = updateLast;
      var intercalate4 = function(S) {
        var concatAllS = (0, exports.concatAll)(S);
        return function(middle) {
          return (0, function_1.flow)((0, exports.intersperse)(middle), concatAllS);
        };
      };
      exports.intercalate = intercalate4;
      exports.chain = exports.flatMap;
      function groupSort(O2) {
        var sortO = (0, exports.sort)(O2);
        var groupO = group(O2);
        return function(as3) {
          return (0, exports.isNonEmpty)(as3) ? groupO(sortO(as3)) : exports.empty;
        };
      }
      exports.groupSort = groupSort;
      function filter4(predicate) {
        return (0, exports.filterWithIndex)(function(_2, a) {
          return predicate(a);
        });
      }
      exports.filter = filter4;
      var filterWithIndex3 = function(predicate) {
        return function(as3) {
          return (0, exports.fromReadonlyArray)(as3.filter(function(a, i) {
            return predicate(i, a);
          }));
        };
      };
      exports.filterWithIndex = filterWithIndex3;
      exports.uncons = exports.unprepend;
      exports.unsnoc = exports.unappend;
      function cons4(head6, tail5) {
        return tail5 === void 0 ? (0, exports.prepend)(head6) : (0, function_1.pipe)(tail5, (0, exports.prepend)(head6));
      }
      exports.cons = cons4;
      var snoc4 = function(init5, end) {
        return (0, function_1.pipe)(init5, concat3([end]));
      };
      exports.snoc = snoc4;
      var insertAt2 = function(i, a) {
        return function(as3) {
          return i < 0 || i > as3.length ? _.none : _.some((0, exports.unsafeInsertAt)(i, a, as3));
        };
      };
      exports.insertAt = insertAt2;
      exports.prependToAll = exports.prependAll;
      exports.fold = exports.concatAll;
      exports.readonlyNonEmptyArray = {
        URI: exports.URI,
        of: exports.of,
        map: _map4,
        mapWithIndex: _mapWithIndex3,
        ap: _ap3,
        chain: exports.flatMap,
        extend: _extend3,
        extract: exports.extract,
        reduce: _reduce4,
        foldMap: _foldMap4,
        reduceRight: _reduceRight4,
        traverse: _traverse4,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex3,
        foldMapWithIndex: _foldMapWithIndex3,
        reduceRightWithIndex: _reduceRightWithIndex3,
        traverseWithIndex: _traverseWithIndex2,
        alt: _alt3
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/string.js
  var require_string = __commonJS({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/lib/string.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.endsWith = exports.startsWith = exports.includes = exports.split = exports.size = exports.isEmpty = exports.slice = exports.trimRight = exports.trimLeft = exports.trim = exports.replace = exports.toLowerCase = exports.toUpperCase = exports.isString = exports.Show = exports.Ord = exports.Monoid = exports.empty = exports.Semigroup = exports.Eq = void 0;
      var ReadonlyNonEmptyArray_1 = require_ReadonlyNonEmptyArray();
      exports.Eq = {
        equals: function(first3, second) {
          return first3 === second;
        }
      };
      exports.Semigroup = {
        concat: function(first3, second) {
          return first3 + second;
        }
      };
      exports.empty = "";
      exports.Monoid = {
        concat: exports.Semigroup.concat,
        empty: exports.empty
      };
      exports.Ord = {
        equals: exports.Eq.equals,
        compare: function(first3, second) {
          return first3 < second ? -1 : first3 > second ? 1 : 0;
        }
      };
      exports.Show = {
        show: function(s) {
          return JSON.stringify(s);
        }
      };
      var isString = function(u) {
        return typeof u === "string";
      };
      exports.isString = isString;
      var toUpperCase = function(s) {
        return s.toUpperCase();
      };
      exports.toUpperCase = toUpperCase;
      var toLowerCase = function(s) {
        return s.toLowerCase();
      };
      exports.toLowerCase = toLowerCase;
      var replace = function(searchValue, replaceValue) {
        return function(s) {
          return s.replace(searchValue, replaceValue);
        };
      };
      exports.replace = replace;
      var trim = function(s) {
        return s.trim();
      };
      exports.trim = trim;
      var trimLeft = function(s) {
        return s.trimLeft();
      };
      exports.trimLeft = trimLeft;
      var trimRight = function(s) {
        return s.trimRight();
      };
      exports.trimRight = trimRight;
      var slice = function(start, end) {
        return function(s) {
          return s.slice(start, end);
        };
      };
      exports.slice = slice;
      var isEmpty3 = function(s) {
        return s.length === 0;
      };
      exports.isEmpty = isEmpty3;
      var size3 = function(s) {
        return s.length;
      };
      exports.size = size3;
      var split = function(separator) {
        return function(s) {
          var out = s.split(separator);
          return (0, ReadonlyNonEmptyArray_1.isNonEmpty)(out) ? out : [s];
        };
      };
      exports.split = split;
      var includes = function(searchString, position) {
        return function(s) {
          return s.includes(searchString, position);
        };
      };
      exports.includes = includes;
      var startsWith = function(searchString, position) {
        return function(s) {
          return s.startsWith(searchString, position);
        };
      };
      exports.startsWith = startsWith;
      var endsWith = function(searchString, position) {
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
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
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
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._partition = exports._filterMap = exports._filter = exports._reduceRight = exports._foldMap = exports._reduce = exports._mapWithIndex = exports._map = exports.difference = exports.intersection = exports.union = exports.elem = exports.some = exports.every = exports.fromEntries = exports.toEntries = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.empty = exports.lookup = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.has = exports.upsertAt = exports.toUnfoldable = exports.toReadonlyArray = exports.collect = exports.keys = exports.isEmpty = exports.size = exports.toRecord = exports.fromRecord = void 0;
      exports.readonlyRecord = exports.hasOwnProperty = exports.insertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.getDifferenceMagma = exports.getIntersectionSemigroup = exports.getUnionMonoid = exports.getUnionSemigroup = exports.getWitherable = exports.getTraversableWithIndex = exports.getTraversable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.getFoldableWithIndex = exports.getFoldable = exports.FunctorWithIndex = exports.flap = exports.Functor = exports.getMonoid = exports.getEq = exports.getShow = exports.URI = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports._sequence = exports._traverse = exports._filterWithIndex = exports._filterMapWithIndex = exports._partitionWithIndex = exports._partitionMapWithIndex = exports._reduceRightWithIndex = exports._foldMapWithIndex = exports._reduceWithIndex = exports._partitionMap = void 0;
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var Separated_1 = require_Separated();
      var S = __importStar(require_string());
      var Witherable_1 = require_Witherable();
      var fromRecord = function(r) {
        return Object.assign({}, r);
      };
      exports.fromRecord = fromRecord;
      var toRecord = function(r) {
        return Object.assign({}, r);
      };
      exports.toRecord = toRecord;
      var size3 = function(r) {
        return Object.keys(r).length;
      };
      exports.size = size3;
      var isEmpty3 = function(r) {
        for (var k in r) {
          if (_.has.call(r, k)) {
            return false;
          }
        }
        return true;
      };
      exports.isEmpty = isEmpty3;
      var keys_2 = function(O2) {
        return function(r) {
          return Object.keys(r).sort(O2.compare);
        };
      };
      exports.keys = keys_2(S.Ord);
      function collect2(O2) {
        if (typeof O2 === "function") {
          return collect2(S.Ord)(O2);
        }
        var keysO = keys_2(O2);
        return function(f2) {
          return function(r) {
            var out = [];
            for (var _i = 0, _a = keysO(r); _i < _a.length; _i++) {
              var key = _a[_i];
              out.push(f2(key, r[key]));
            }
            return out;
          };
        };
      }
      exports.collect = collect2;
      exports.toReadonlyArray = /* @__PURE__ */ collect2(S.Ord)(function(k, a) {
        return [k, a];
      });
      function toUnfoldable2(U) {
        return function(r) {
          var sas = (0, exports.toReadonlyArray)(r);
          var len = sas.length;
          return U.unfold(0, function(b) {
            return b < len ? _.some([sas[b], b + 1]) : _.none;
          });
        };
      }
      exports.toUnfoldable = toUnfoldable2;
      var upsertAt2 = function(k, a) {
        return function(r) {
          if (_.has.call(r, k) && r[k] === a) {
            return r;
          }
          var out = Object.assign({}, r);
          out[k] = a;
          return out;
        };
      };
      exports.upsertAt = upsertAt2;
      var has3 = function(k, r) {
        return _.has.call(r, k);
      };
      exports.has = has3;
      function deleteAt2(k) {
        return function(r) {
          if (!_.has.call(r, k)) {
            return r;
          }
          var out = Object.assign({}, r);
          delete out[k];
          return out;
        };
      }
      exports.deleteAt = deleteAt2;
      var updateAt2 = function(k, a) {
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
      exports.updateAt = updateAt2;
      var modifyAt2 = function(k, f2) {
        return function(r) {
          if (!(0, exports.has)(k, r)) {
            return _.none;
          }
          var next = f2(r[k]);
          if (next === r[k]) {
            return _.some(r);
          }
          var out = Object.assign({}, r);
          out[k] = next;
          return _.some(out);
        };
      };
      exports.modifyAt = modifyAt2;
      function pop(k) {
        var deleteAtk = deleteAt2(k);
        return function(r) {
          var oa = lookup6(k, r);
          return _.isNone(oa) ? _.none : _.some([oa.value, deleteAtk(r)]);
        };
      }
      exports.pop = pop;
      function isSubrecord2(E) {
        return function(me, that) {
          if (that === void 0) {
            var isSubrecordE_1 = isSubrecord2(E);
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
      exports.isSubrecord = isSubrecord2;
      function lookup6(k, r) {
        if (r === void 0) {
          return function(r2) {
            return lookup6(k, r2);
          };
        }
        return _.has.call(r, k) ? _.some(r[k]) : _.none;
      }
      exports.lookup = lookup6;
      exports.empty = {};
      function mapWithIndex3(f2) {
        return function(r) {
          var out = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              out[k] = f2(k, r[k]);
            }
          }
          return out;
        };
      }
      exports.mapWithIndex = mapWithIndex3;
      function map6(f2) {
        return mapWithIndex3(function(_2, a) {
          return f2(a);
        });
      }
      exports.map = map6;
      function reduceWithIndex5() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 2) {
          return reduceWithIndex5(S.Ord).apply(void 0, args);
        }
        var keysO = keys_2(args[0]);
        return function(b, f2) {
          return function(fa) {
            var out = b;
            var ks = keysO(fa);
            var len = ks.length;
            for (var i = 0; i < len; i++) {
              var k = ks[i];
              out = f2(k, out, fa[k]);
            }
            return out;
          };
        };
      }
      exports.reduceWithIndex = reduceWithIndex5;
      function foldMapWithIndex5(O2) {
        if ("compare" in O2) {
          var keysO_1 = keys_2(O2);
          return function(M) {
            return function(f2) {
              return function(fa) {
                var out = M.empty;
                var ks = keysO_1(fa);
                var len = ks.length;
                for (var i = 0; i < len; i++) {
                  var k = ks[i];
                  out = M.concat(out, f2(k, fa[k]));
                }
                return out;
              };
            };
          };
        }
        return foldMapWithIndex5(S.Ord)(O2);
      }
      exports.foldMapWithIndex = foldMapWithIndex5;
      function reduceRightWithIndex5() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 2) {
          return reduceRightWithIndex5(S.Ord).apply(void 0, args);
        }
        var keysO = keys_2(args[0]);
        return function(b, f2) {
          return function(fa) {
            var out = b;
            var ks = keysO(fa);
            var len = ks.length;
            for (var i = len - 1; i >= 0; i--) {
              var k = ks[i];
              out = f2(k, fa[k], out);
            }
            return out;
          };
        };
      }
      exports.reduceRightWithIndex = reduceRightWithIndex5;
      var singleton3 = function(k, a) {
        var _a;
        return _a = {}, _a[k] = a, _a;
      };
      exports.singleton = singleton3;
      function traverseWithIndex3(F) {
        var traverseWithIndexOF = _traverseWithIndex2(S.Ord)(F);
        return function(f2) {
          return function(ta) {
            return traverseWithIndexOF(ta, f2);
          };
        };
      }
      exports.traverseWithIndex = traverseWithIndex3;
      function traverse4(F) {
        var traverseOF = (0, exports._traverse)(S.Ord)(F);
        return function(f2) {
          return function(ta) {
            return traverseOF(ta, f2);
          };
        };
      }
      exports.traverse = traverse4;
      function sequence4(F) {
        return (0, exports._sequence)(S.Ord)(F);
      }
      exports.sequence = sequence4;
      var wither3 = function(F) {
        var traverseF = traverse4(F);
        return function(f2) {
          return function(fa) {
            return F.map((0, function_1.pipe)(fa, traverseF(f2)), exports.compact);
          };
        };
      };
      exports.wither = wither3;
      var wilt3 = function(F) {
        var traverseF = traverse4(F);
        return function(f2) {
          return function(fa) {
            return F.map((0, function_1.pipe)(fa, traverseF(f2)), exports.separate);
          };
        };
      };
      exports.wilt = wilt3;
      function partitionMapWithIndex3(f2) {
        return function(r) {
          var left = {};
          var right = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var e = f2(k, r[k]);
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
      exports.partitionMapWithIndex = partitionMapWithIndex3;
      function partitionWithIndex3(predicateWithIndex) {
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
      exports.partitionWithIndex = partitionWithIndex3;
      function filterMapWithIndex3(f2) {
        return function(r) {
          var out = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var ob = f2(k, r[k]);
              if (_.isSome(ob)) {
                out[k] = ob.value;
              }
            }
          }
          return out;
        };
      }
      exports.filterMapWithIndex = filterMapWithIndex3;
      function filterWithIndex3(predicateWithIndex) {
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
      exports.filterWithIndex = filterWithIndex3;
      function fromFoldable2(M, F) {
        var fromFoldableMapM = fromFoldableMap2(M, F);
        return function(fka) {
          return fromFoldableMapM(fka, function_1.identity);
        };
      }
      exports.fromFoldable = fromFoldable2;
      function fromFoldableMap2(M, F) {
        return function(ta, f2) {
          return F.reduce(ta, {}, function(r, a) {
            var _a = f2(a), k = _a[0], b = _a[1];
            r[k] = _.has.call(r, k) ? M.concat(r[k], b) : b;
            return r;
          });
        };
      }
      exports.fromFoldableMap = fromFoldableMap2;
      exports.toEntries = exports.toReadonlyArray;
      var fromEntries = function(fa) {
        var out = {};
        for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
          var a = fa_1[_i];
          out[a[0]] = a[1];
        }
        return out;
      };
      exports.fromEntries = fromEntries;
      function every4(predicate) {
        return function(r) {
          for (var k in r) {
            if (!predicate(r[k])) {
              return false;
            }
          }
          return true;
        };
      }
      exports.every = every4;
      function some5(predicate) {
        return function(r) {
          for (var k in r) {
            if (predicate(r[k])) {
              return true;
            }
          }
          return false;
        };
      }
      exports.some = some5;
      function elem5(E) {
        return function(a, fa) {
          if (fa === void 0) {
            var elemE_1 = elem5(E);
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
      exports.elem = elem5;
      var union5 = function(M) {
        return function(second) {
          return function(first3) {
            if ((0, exports.isEmpty)(first3)) {
              return second;
            }
            if ((0, exports.isEmpty)(second)) {
              return first3;
            }
            var out = {};
            for (var k in first3) {
              if ((0, exports.has)(k, second)) {
                out[k] = M.concat(first3[k], second[k]);
              } else {
                out[k] = first3[k];
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
      exports.union = union5;
      var intersection3 = function(M) {
        return function(second) {
          return function(first3) {
            if ((0, exports.isEmpty)(first3) || (0, exports.isEmpty)(second)) {
              return exports.empty;
            }
            var out = {};
            for (var k in first3) {
              if ((0, exports.has)(k, second)) {
                out[k] = M.concat(first3[k], second[k]);
              }
            }
            return out;
          };
        };
      };
      exports.intersection = intersection3;
      var difference3 = function(second) {
        return function(first3) {
          if ((0, exports.isEmpty)(first3)) {
            return second;
          }
          if ((0, exports.isEmpty)(second)) {
            return first3;
          }
          var out = {};
          for (var k in first3) {
            if (!(0, exports.has)(k, second)) {
              out[k] = first3[k];
            }
          }
          for (var k in second) {
            if (!(0, exports.has)(k, first3)) {
              out[k] = second[k];
            }
          }
          return out;
        };
      };
      exports.difference = difference3;
      var _map4 = function(fa, f2) {
        return (0, function_1.pipe)(fa, map6(f2));
      };
      exports._map = _map4;
      var _mapWithIndex3 = function(fa, f2) {
        return (0, function_1.pipe)(fa, mapWithIndex3(f2));
      };
      exports._mapWithIndex = _mapWithIndex3;
      var _reduce4 = function(O2) {
        var reduceO = reduce6(O2);
        return function(fa, b, f2) {
          return (0, function_1.pipe)(fa, reduceO(b, f2));
        };
      };
      exports._reduce = _reduce4;
      var _foldMap4 = function(O2) {
        return function(M) {
          var foldMapM = foldMap6(O2)(M);
          return function(fa, f2) {
            return (0, function_1.pipe)(fa, foldMapM(f2));
          };
        };
      };
      exports._foldMap = _foldMap4;
      var _reduceRight4 = function(O2) {
        var reduceRightO = reduceRight6(O2);
        return function(fa, b, f2) {
          return (0, function_1.pipe)(fa, reduceRightO(b, f2));
        };
      };
      exports._reduceRight = _reduceRight4;
      var _filter4 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.filter)(predicate));
      };
      exports._filter = _filter4;
      var _filterMap4 = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.filterMap)(f2));
      };
      exports._filterMap = _filterMap4;
      var _partition4 = function(fa, predicate) {
        return (0, function_1.pipe)(fa, (0, exports.partition)(predicate));
      };
      exports._partition = _partition4;
      var _partitionMap4 = function(fa, f2) {
        return (0, function_1.pipe)(fa, (0, exports.partitionMap)(f2));
      };
      exports._partitionMap = _partitionMap4;
      var _reduceWithIndex3 = function(O2) {
        var reduceWithIndexO = reduceWithIndex5(O2);
        return function(fa, b, f2) {
          return (0, function_1.pipe)(fa, reduceWithIndexO(b, f2));
        };
      };
      exports._reduceWithIndex = _reduceWithIndex3;
      var _foldMapWithIndex3 = function(O2) {
        var foldMapWithIndexO = foldMapWithIndex5(O2);
        return function(M) {
          var foldMapWithIndexM = foldMapWithIndexO(M);
          return function(fa, f2) {
            return (0, function_1.pipe)(fa, foldMapWithIndexM(f2));
          };
        };
      };
      exports._foldMapWithIndex = _foldMapWithIndex3;
      var _reduceRightWithIndex3 = function(O2) {
        var reduceRightWithIndexO = reduceRightWithIndex5(O2);
        return function(fa, b, f2) {
          return (0, function_1.pipe)(fa, reduceRightWithIndexO(b, f2));
        };
      };
      exports._reduceRightWithIndex = _reduceRightWithIndex3;
      var _partitionMapWithIndex3 = function(fa, f2) {
        return (0, function_1.pipe)(fa, partitionMapWithIndex3(f2));
      };
      exports._partitionMapWithIndex = _partitionMapWithIndex3;
      var _partitionWithIndex3 = function(fa, predicateWithIndex) {
        return (0, function_1.pipe)(fa, partitionWithIndex3(predicateWithIndex));
      };
      exports._partitionWithIndex = _partitionWithIndex3;
      var _filterMapWithIndex3 = function(fa, f2) {
        return (0, function_1.pipe)(fa, filterMapWithIndex3(f2));
      };
      exports._filterMapWithIndex = _filterMapWithIndex3;
      var _filterWithIndex3 = function(fa, predicateWithIndex) {
        return (0, function_1.pipe)(fa, filterWithIndex3(predicateWithIndex));
      };
      exports._filterWithIndex = _filterWithIndex3;
      var _traverse4 = function(O2) {
        var traverseWithIndexO = _traverseWithIndex2(O2);
        return function(F) {
          var traverseWithIndexOF = traverseWithIndexO(F);
          return function(ta, f2) {
            return traverseWithIndexOF(ta, (0, function_1.flow)(function_1.SK, f2));
          };
        };
      };
      exports._traverse = _traverse4;
      var _sequence2 = function(O2) {
        var traverseO = (0, exports._traverse)(O2);
        return function(F) {
          var traverseOF = traverseO(F);
          return function(ta) {
            return traverseOF(ta, function_1.identity);
          };
        };
      };
      exports._sequence = _sequence2;
      var _traverseWithIndex2 = function(O2) {
        return function(F) {
          var keysO = keys_2(O2);
          return function(ta, f2) {
            var ks = keysO(ta);
            if (ks.length === 0) {
              return F.of(exports.empty);
            }
            var fr = F.of({});
            var _loop_1 = function(key2) {
              fr = F.ap(F.map(fr, function(r) {
                return function(b) {
                  var _a;
                  return Object.assign({}, r, (_a = {}, _a[key2] = b, _a));
                };
              }), f2(key2, ta[key2]));
            };
            for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
              var key = ks_1[_i];
              _loop_1(key);
            }
            return fr;
          };
        };
      };
      var filter4 = function(predicate) {
        return filterWithIndex3(function(_2, a) {
          return predicate(a);
        });
      };
      exports.filter = filter4;
      var filterMap4 = function(f2) {
        return filterMapWithIndex3(function(_2, a) {
          return f2(a);
        });
      };
      exports.filterMap = filterMap4;
      var partition4 = function(predicate) {
        return partitionWithIndex3(function(_2, a) {
          return predicate(a);
        });
      };
      exports.partition = partition4;
      var partitionMap4 = function(f2) {
        return partitionMapWithIndex3(function(_2, a) {
          return f2(a);
        });
      };
      exports.partitionMap = partitionMap4;
      function reduce6() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 1) {
          var reduceWithIndexO_1 = reduceWithIndex5(args[0]);
          return function(b, f2) {
            return reduceWithIndexO_1(b, function(_2, b2, a) {
              return f2(b2, a);
            });
          };
        }
        return reduce6(S.Ord).apply(void 0, args);
      }
      exports.reduce = reduce6;
      function foldMap6(O2) {
        if ("compare" in O2) {
          var foldMapWithIndexO_1 = foldMapWithIndex5(O2);
          return function(M) {
            var foldMapWithIndexM = foldMapWithIndexO_1(M);
            return function(f2) {
              return foldMapWithIndexM(function(_2, a) {
                return f2(a);
              });
            };
          };
        }
        return foldMap6(S.Ord)(O2);
      }
      exports.foldMap = foldMap6;
      function reduceRight6() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length === 1) {
          var reduceRightWithIndexO_1 = reduceRightWithIndex5(args[0]);
          return function(b, f2) {
            return reduceRightWithIndexO_1(b, function(_2, b2, a) {
              return f2(b2, a);
            });
          };
        }
        return reduceRight6(S.Ord).apply(void 0, args);
      }
      exports.reduceRight = reduceRight6;
      var compact4 = function(r) {
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
      exports.compact = compact4;
      var separate4 = function(r) {
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
      exports.separate = separate4;
      exports.URI = "ReadonlyRecord";
      function getShow6(O2) {
        if ("compare" in O2) {
          return function(S2) {
            return {
              show: function(r) {
                var elements = collect2(O2)(function(k, a) {
                  return "".concat(JSON.stringify(k), ": ").concat(S2.show(a));
                })(r).join(", ");
                return elements === "" ? "{}" : "{ ".concat(elements, " }");
              }
            };
          };
        }
        return getShow6(S.Ord)(O2);
      }
      exports.getShow = getShow6;
      function getEq6(E) {
        var isSubrecordE = isSubrecord2(E);
        return (0, Eq_1.fromEquals)(function(x, y) {
          return isSubrecordE(x)(y) && isSubrecordE(y)(x);
        });
      }
      exports.getEq = getEq6;
      function getMonoid7(S2) {
        return {
          concat: function(first3, second) {
            if ((0, exports.isEmpty)(first3)) {
              return second;
            }
            if ((0, exports.isEmpty)(second)) {
              return first3;
            }
            var r = Object.assign({}, first3);
            for (var k in second) {
              if (_.has.call(second, k)) {
                r[k] = _.has.call(first3, k) ? S2.concat(first3[k], second[k]) : second[k];
              }
            }
            return r;
          },
          empty: exports.empty
        };
      }
      exports.getMonoid = getMonoid7;
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
      var getFoldable = function(O2) {
        return {
          URI: exports.URI,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2)
        };
      };
      exports.getFoldable = getFoldable;
      var getFoldableWithIndex = function(O2) {
        return {
          URI: exports.URI,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2),
          reduceWithIndex: (0, exports._reduceWithIndex)(O2),
          foldMapWithIndex: (0, exports._foldMapWithIndex)(O2),
          reduceRightWithIndex: (0, exports._reduceRightWithIndex)(O2)
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
      var getTraversable = function(O2) {
        return {
          URI: exports.URI,
          map: exports._map,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2),
          traverse: (0, exports._traverse)(O2),
          sequence: (0, exports._sequence)(O2)
        };
      };
      exports.getTraversable = getTraversable;
      var getTraversableWithIndex = function(O2) {
        return {
          URI: exports.URI,
          map: exports._map,
          mapWithIndex: exports._mapWithIndex,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2),
          reduceWithIndex: (0, exports._reduceWithIndex)(O2),
          foldMapWithIndex: (0, exports._foldMapWithIndex)(O2),
          reduceRightWithIndex: (0, exports._reduceRightWithIndex)(O2),
          traverse: (0, exports._traverse)(O2),
          sequence: (0, exports._sequence)(O2),
          traverseWithIndex: _traverseWithIndex2(O2)
        };
      };
      exports.getTraversableWithIndex = getTraversableWithIndex;
      var getWitherable = function(O2) {
        var T = (0, exports.getTraversable)(O2);
        return {
          URI: exports.URI,
          map: exports._map,
          reduce: (0, exports._reduce)(O2),
          foldMap: (0, exports._foldMap)(O2),
          reduceRight: (0, exports._reduceRight)(O2),
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
      var getUnionSemigroup2 = function(S2) {
        var unionS = (0, exports.union)(S2);
        return {
          concat: function(first3, second) {
            return unionS(second)(first3);
          }
        };
      };
      exports.getUnionSemigroup = getUnionSemigroup2;
      var getUnionMonoid2 = function(S2) {
        return {
          concat: (0, exports.getUnionSemigroup)(S2).concat,
          empty: exports.empty
        };
      };
      exports.getUnionMonoid = getUnionMonoid2;
      var getIntersectionSemigroup2 = function(S2) {
        var intersectionS = (0, exports.intersection)(S2);
        return {
          concat: function(first3, second) {
            return intersectionS(second)(first3);
          }
        };
      };
      exports.getIntersectionSemigroup = getIntersectionSemigroup2;
      var getDifferenceMagma2 = function() {
        return {
          concat: function(first3, second) {
            return (0, exports.difference)(second)(first3);
          }
        };
      };
      exports.getDifferenceMagma = getDifferenceMagma2;
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
        sequence: sequence4
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
        sequence: sequence4,
        traverseWithIndex: /* @__PURE__ */ _traverseWithIndex2(S.Ord)
      };
      var _wither3 = /* @__PURE__ */ (0, Witherable_1.witherDefault)(exports.Traversable, exports.Compactable);
      var _wilt3 = /* @__PURE__ */ (0, Witherable_1.wiltDefault)(exports.Traversable, exports.Compactable);
      exports.Witherable = {
        URI: exports.URI,
        map: exports._map,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence: sequence4,
        compact: exports.compact,
        separate: exports.separate,
        filter: exports._filter,
        filterMap: exports._filterMap,
        partition: exports._partition,
        partitionMap: exports._partitionMap,
        wither: _wither3,
        wilt: _wilt3
      };
      exports.insertAt = exports.upsertAt;
      function hasOwnProperty2(k, r) {
        return _.has.call(r === void 0 ? this : r, k);
      }
      exports.hasOwnProperty = hasOwnProperty2;
      exports.readonlyRecord = {
        URI: exports.URI,
        map: exports._map,
        reduce: /* @__PURE__ */ (0, exports._reduce)(S.Ord),
        foldMap: /* @__PURE__ */ (0, exports._foldMap)(S.Ord),
        reduceRight: /* @__PURE__ */ (0, exports._reduceRight)(S.Ord),
        traverse: /* @__PURE__ */ (0, exports._traverse)(S.Ord),
        sequence: sequence4,
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
        traverseWithIndex: /* @__PURE__ */ _traverseWithIndex2(S.Ord),
        wither: _wither3,
        wilt: _wilt3
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/function.js
  function identity(a) {
    return a;
  }
  function constant(a) {
    return function() {
      return a;
    };
  }
  function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
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
  var __spreadArray, constNull, constUndefined, dual;
  var init_function = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/function.js"() {
      __spreadArray = function(to, from, pack) {
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
      constNull = /* @__PURE__ */ constant(null);
      constUndefined = /* @__PURE__ */ constant(void 0);
      dual = function(arity, body) {
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
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/internal.js
  var __spreadArray2, isNone, isSome, none, some, isLeft, isNonEmpty, head, tail, emptyReadonlyArray, emptyRecord, has, fromReadonlyNonEmptyArray;
  var init_internal = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/internal.js"() {
      __spreadArray2 = function(to, from, pack) {
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
      isNone = function(fa) {
        return fa._tag === "None";
      };
      isSome = function(fa) {
        return fa._tag === "Some";
      };
      none = { _tag: "None" };
      some = function(a) {
        return { _tag: "Some", value: a };
      };
      isLeft = function(ma) {
        return ma._tag === "Left";
      };
      isNonEmpty = function(as3) {
        return as3.length > 0;
      };
      head = function(as3) {
        return as3[0];
      };
      tail = function(as3) {
        return as3.slice(1);
      };
      emptyReadonlyArray = [];
      emptyRecord = {};
      has = Object.prototype.hasOwnProperty;
      fromReadonlyNonEmptyArray = function(as3) {
        return __spreadArray2([as3[0]], as3.slice(1), true);
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Apply.js
  function apFirst(A) {
    return function(second) {
      return function(first3) {
        return A.ap(A.map(first3, function(a) {
          return function() {
            return a;
          };
        }), second);
      };
    };
  }
  function apSecond(A) {
    return function(second) {
      return function(first3) {
        return A.ap(A.map(first3, function() {
          return function(b) {
            return b;
          };
        }), second);
      };
    };
  }
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
  function getApplySemigroup(F) {
    return function(S) {
      return {
        concat: function(first3, second) {
          return F.ap(F.map(first3, function(x) {
            return function(y) {
              return S.concat(x, y);
            };
          }), second);
        }
      };
    };
  }
  var init_Apply = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Apply.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Functor.js
  function flap(F) {
    return function(a) {
      return function(fab) {
        return F.map(fab, function(f2) {
          return f2(a);
        });
      };
    };
  }
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
  function let_(F) {
    return function(name, f2) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = f2(a), _a));
        });
      };
    };
  }
  function as(F) {
    return function(self, b) {
      return F.map(self, function() {
        return b;
      });
    };
  }
  function asUnit(F) {
    var asM = as(F);
    return function(self) {
      return asM(self, void 0);
    };
  }
  var init_Functor = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Functor.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Applicative.js
  function getApplicativeMonoid(F) {
    var f2 = getApplySemigroup(F);
    return function(M) {
      return {
        concat: f2(M).concat,
        empty: F.of(M.empty)
      };
    };
  }
  var init_Applicative = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Applicative.js"() {
      init_Apply();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Chain.js
  function chainFirst(M) {
    var tapM = tap(M);
    return function(f2) {
      return function(first3) {
        return tapM(first3, f2);
      };
    };
  }
  function tap(M) {
    return function(first3, f2) {
      return M.chain(first3, function(a) {
        return M.map(f2(a), function() {
          return a;
        });
      });
    };
  }
  function bind(M) {
    return function(name, f2) {
      return function(ma) {
        return M.chain(ma, function(a) {
          return M.map(f2(a), function(b) {
            var _a;
            return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
          });
        });
      };
    };
  }
  var init_Chain = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Chain.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromEither.js
  function fromEitherK(F) {
    return function(f2) {
      return flow(f2, F.fromEither);
    };
  }
  function chainEitherK(F, M) {
    var fromEitherKF = fromEitherK(F);
    return function(f2) {
      return function(ma) {
        return M.chain(ma, fromEitherKF(f2));
      };
    };
  }
  function tapEither(F, M) {
    var fromEither3 = fromEitherK(F);
    var tapM = tap(M);
    return function(self, f2) {
      return tapM(self, fromEither3(f2));
    };
  }
  var init_FromEither = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromEither.js"() {
      init_Chain();
      init_function();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Eq.js
  var fromEquals, eqStrict, strictEqual;
  var init_Eq = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Eq.js"() {
      fromEquals = function(equals) {
        return {
          equals: function(x, y) {
            return x === y || equals(x, y);
          }
        };
      };
      eqStrict = {
        equals: function(a, b) {
          return a === b;
        }
      };
      strictEqual = eqStrict.equals;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Ord.js
  function compare(first3, second) {
    return first3 < second ? -1 : first3 > second ? 1 : 0;
  }
  var equalsDefault, fromCompare, getSemigroup, getMonoid, strictOrd;
  var init_Ord = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Ord.js"() {
      init_Eq();
      equalsDefault = function(compare2) {
        return function(first3, second) {
          return first3 === second || compare2(first3, second) === 0;
        };
      };
      fromCompare = function(compare2) {
        return {
          equals: equalsDefault(compare2),
          compare: function(first3, second) {
            return first3 === second ? 0 : compare2(first3, second);
          }
        };
      };
      getSemigroup = function() {
        return {
          concat: function(first3, second) {
            return fromCompare(function(a, b) {
              var ox = first3.compare(a, b);
              return ox !== 0 ? ox : second.compare(a, b);
            });
          }
        };
      };
      getMonoid = function() {
        return {
          concat: getSemigroup().concat,
          empty: fromCompare(function() {
            return 0;
          })
        };
      };
      strictOrd = {
        equals: eqStrict.equals,
        compare
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Magma.js
  var concatAll;
  var init_Magma = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Magma.js"() {
      concatAll = function(M) {
        return function(startWith) {
          return function(as3) {
            return as3.reduce(function(a, acc) {
              return M.concat(a, acc);
            }, startWith);
          };
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Semigroup.js
  var constant2, first, last, concatAll2, semigroupVoid, semigroupAll, semigroupAny, semigroupString, semigroupSum, semigroupProduct;
  var init_Semigroup = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Semigroup.js"() {
      init_function();
      init_Magma();
      constant2 = function(a) {
        return {
          concat: function() {
            return a;
          }
        };
      };
      first = function() {
        return { concat: identity };
      };
      last = function() {
        return { concat: function(_, y) {
          return y;
        } };
      };
      concatAll2 = concatAll;
      semigroupVoid = constant2(void 0);
      semigroupAll = {
        concat: function(x, y) {
          return x && y;
        }
      };
      semigroupAny = {
        concat: function(x, y) {
          return x || y;
        }
      };
      semigroupString = {
        concat: function(x, y) {
          return x + y;
        }
      };
      semigroupSum = {
        concat: function(x, y) {
          return x + y;
        }
      };
      semigroupProduct = {
        concat: function(x, y) {
          return x * y;
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js
  var __spreadArray3, isNonEmpty2, isOutOfBound, prependW, prepend, prependAll, intersperse, extract, head2, tail2, last2, concatAll3, intercalate;
  var init_ReadonlyNonEmptyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js"() {
      init_function();
      init_internal();
      __spreadArray3 = function(to, from, pack) {
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
      isNonEmpty2 = isNonEmpty;
      isOutOfBound = function(i, as3) {
        return i < 0 || i >= as3.length;
      };
      prependW = function(head6) {
        return function(tail5) {
          return __spreadArray3([head6], tail5, true);
        };
      };
      prepend = prependW;
      prependAll = function(middle) {
        return function(as3) {
          var out = [middle, as3[0]];
          for (var i = 1; i < as3.length; i++) {
            out.push(middle, as3[i]);
          }
          return out;
        };
      };
      intersperse = function(middle) {
        return function(as3) {
          var rest = tail2(as3);
          return isNonEmpty2(rest) ? pipe(rest, prependAll(middle), prepend(head2(as3))) : as3;
        };
      };
      extract = head;
      head2 = extract;
      tail2 = tail;
      last2 = function(as3) {
        return as3[as3.length - 1];
      };
      concatAll3 = function(S) {
        return function(as3) {
          return as3.reduce(S.concat);
        };
      };
      intercalate = function(S) {
        var concatAllS = concatAll3(S);
        return function(middle) {
          return flow(intersperse(middle), concatAllS);
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/NonEmptyArray.js
  function concat(x, y) {
    return y ? x.concat(y) : function(y2) {
      return y2.concat(x);
    };
  }
  function cons(head6, tail5) {
    return tail5 === void 0 ? prepend2(head6) : pipe(tail5, prepend2(head6));
  }
  var __spreadArray4, isNonEmpty3, isOutOfBound2, prependW2, prepend2, appendW, append, unsafeInsertAt, unsafeUpdateAt, uniq, sortBy, union, rotate, fromReadonlyNonEmptyArray2, makeBy, range, sort, copy, of, prependAll2, intersperse2, chop, splitAt, chunksOf, head3, tail3, last3, init, snoc;
  var init_NonEmptyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/NonEmptyArray.js"() {
      init_function();
      init_internal();
      init_Ord();
      init_ReadonlyNonEmptyArray();
      __spreadArray4 = function(to, from, pack) {
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
      isNonEmpty3 = function(as3) {
        return as3.length > 0;
      };
      isOutOfBound2 = function(i, as3) {
        return i < 0 || i >= as3.length;
      };
      prependW2 = function(head6) {
        return function(tail5) {
          return __spreadArray4([head6], tail5, true);
        };
      };
      prepend2 = prependW2;
      appendW = function(end) {
        return function(init4) {
          return __spreadArray4(__spreadArray4([], init4, true), [end], false);
        };
      };
      append = appendW;
      unsafeInsertAt = function(i, a, as3) {
        if (isNonEmpty3(as3)) {
          var xs = fromReadonlyNonEmptyArray2(as3);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      unsafeUpdateAt = function(i, a, as3) {
        var xs = fromReadonlyNonEmptyArray2(as3);
        xs[i] = a;
        return xs;
      };
      uniq = function(E) {
        return function(as3) {
          if (as3.length === 1) {
            return copy(as3);
          }
          var out = [head3(as3)];
          var rest = tail3(as3);
          var _loop_1 = function(a2) {
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
      sortBy = function(ords) {
        if (isNonEmpty3(ords)) {
          var M = getMonoid();
          return sort(ords.reduce(M.concat, M.empty));
        }
        return copy;
      };
      union = function(E) {
        var uniqE = uniq(E);
        return function(second) {
          return function(first3) {
            return uniqE(pipe(first3, concat(second)));
          };
        };
      };
      rotate = function(n) {
        return function(as3) {
          var len = as3.length;
          var m = Math.round(n) % len;
          if (isOutOfBound2(Math.abs(m), as3) || m === 0) {
            return copy(as3);
          }
          if (m < 0) {
            var _a = splitAt(-m)(as3), f2 = _a[0], s = _a[1];
            return pipe(s, concat(f2));
          } else {
            return rotate(m - len)(as3);
          }
        };
      };
      fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
      makeBy = function(f2) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f2(0)];
          for (var i = 1; i < j; i++) {
            out.push(f2(i));
          }
          return out;
        };
      };
      range = function(start, end) {
        return start <= end ? makeBy(function(i) {
          return start + i;
        })(end - start + 1) : [start];
      };
      sort = function(O2) {
        return function(as3) {
          return as3.slice().sort(O2.compare);
        };
      };
      copy = fromReadonlyNonEmptyArray2;
      of = function(a) {
        return [a];
      };
      prependAll2 = function(middle) {
        return function(as3) {
          var out = [middle, as3[0]];
          for (var i = 1; i < as3.length; i++) {
            out.push(middle, as3[i]);
          }
          return out;
        };
      };
      intersperse2 = function(middle) {
        return function(as3) {
          var rest = tail3(as3);
          return isNonEmpty3(rest) ? pipe(rest, prependAll2(middle), prepend2(head3(as3))) : copy(as3);
        };
      };
      chop = function(f2) {
        return function(as3) {
          var _a = f2(as3), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while (isNonEmpty3(next)) {
            var _b = f2(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      splitAt = function(n) {
        return function(as3) {
          var m = Math.max(1, n);
          return m >= as3.length ? [copy(as3), []] : [pipe(as3.slice(1, m), prepend2(head3(as3))), as3.slice(m)];
        };
      };
      chunksOf = function(n) {
        return chop(splitAt(n));
      };
      head3 = head2;
      tail3 = function(as3) {
        return as3.slice(1);
      };
      last3 = last2;
      init = function(as3) {
        return as3.slice(0, -1);
      };
      snoc = function(init4, end) {
        return pipe(init4, append(end));
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/number.js
  var Eq, Ord, Bounded, MagmaSub, SemigroupSum, SemigroupProduct, MonoidSum, MonoidProduct, Field;
  var init_number = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/number.js"() {
      Eq = {
        equals: function(first3, second) {
          return first3 === second;
        }
      };
      Ord = {
        equals: Eq.equals,
        compare: function(first3, second) {
          return first3 < second ? -1 : first3 > second ? 1 : 0;
        }
      };
      Bounded = {
        equals: Eq.equals,
        compare: Ord.compare,
        top: Infinity,
        bottom: -Infinity
      };
      MagmaSub = {
        concat: function(first3, second) {
          return first3 - second;
        }
      };
      SemigroupSum = {
        concat: function(first3, second) {
          return first3 + second;
        }
      };
      SemigroupProduct = {
        concat: function(first3, second) {
          return first3 * second;
        }
      };
      MonoidSum = {
        concat: SemigroupSum.concat,
        empty: 0
      };
      MonoidProduct = {
        concat: SemigroupProduct.concat,
        empty: 1
      };
      Field = {
        add: SemigroupSum.concat,
        zero: 0,
        mul: SemigroupProduct.concat,
        one: 1,
        sub: MagmaSub.concat,
        degree: function(_) {
          return 1;
        },
        div: function(first3, second) {
          return first3 / second;
        },
        mod: function(first3, second) {
          return first3 % second;
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Separated.js
  var separated;
  var init_Separated = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Separated.js"() {
      separated = function(left, right) {
        return { left, right };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Witherable.js
  function wiltDefault(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f2) {
        return F.map(traverseF(wa, f2), C.separate);
      };
    };
  }
  function witherDefault(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f2) {
        return F.map(traverseF(wa, f2), C.compact);
      };
    };
  }
  function filterE(W) {
    return function(F) {
      var witherF = W.wither(F);
      return function(predicate) {
        return function(ga) {
          return witherF(ga, function(a) {
            return F.map(predicate(a), function(b) {
              return b ? some(a) : none;
            });
          });
        };
      };
    };
  }
  var init_Witherable = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Witherable.js"() {
      init_internal();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Zero.js
  function guard(F, P) {
    return function(b) {
      return b ? P.of(void 0) : F.zero();
    };
  }
  var init_Zero = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Zero.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyArray.js
  function lookup(i, as3) {
    return as3 === void 0 ? function(as4) {
      return lookup(i, as4);
    } : isOutOfBound3(i, as3) ? none : some(as3[i]);
  }
  function findFirst(predicate) {
    return function(as3) {
      for (var i = 0; i < as3.length; i++) {
        if (predicate(as3[i])) {
          return some(as3[i]);
        }
      }
      return none;
    };
  }
  function findLast(predicate) {
    return function(as3) {
      for (var i = as3.length - 1; i >= 0; i--) {
        if (predicate(as3[i])) {
          return some(as3[i]);
        }
      }
      return none;
    };
  }
  function elem(E) {
    return function(a, as3) {
      if (as3 === void 0) {
        var elemE_1 = elem(E);
        return function(as4) {
          return elemE_1(a, as4);
        };
      }
      var predicate = function(element) {
        return E.equals(element, a);
      };
      var i = 0;
      for (; i < as3.length; i++) {
        if (predicate(as3[i])) {
          return true;
        }
      }
      return false;
    };
  }
  function every(predicate) {
    return function(as3) {
      return as3.every(predicate);
    };
  }
  var __spreadArray5, isNonEmpty4, matchW, match, isOutOfBound3, head4, last4, findIndex, findFirstMap, findLastMap, findLastIndex, _chainRecDepthFirst, _chainRecBreadthFirst, foldMapWithIndex2, reduce2, foldMap2, reduceWithIndex2, reduceRight2, reduceRightWithIndex2, getShow2, getEq2, getOrd, chainRecDepthFirst, chainRecBreadthFirst, intercalate2;
  var init_ReadonlyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyArray.js"() {
      init_Eq();
      init_function();
      init_internal();
      init_number();
      init_Ord();
      init_ReadonlyNonEmptyArray();
      __spreadArray5 = function(to, from, pack) {
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
      isNonEmpty4 = isNonEmpty2;
      matchW = function(onEmpty, onNonEmpty) {
        return function(as3) {
          return isNonEmpty4(as3) ? onNonEmpty(as3) : onEmpty();
        };
      };
      match = matchW;
      isOutOfBound3 = isOutOfBound;
      head4 = function(as3) {
        return isNonEmpty4(as3) ? some(head2(as3)) : none;
      };
      last4 = function(as3) {
        return isNonEmpty4(as3) ? some(last2(as3)) : none;
      };
      findIndex = function(predicate) {
        return function(as3) {
          for (var i = 0; i < as3.length; i++) {
            if (predicate(as3[i])) {
              return some(i);
            }
          }
          return none;
        };
      };
      findFirstMap = function(f2) {
        return function(as3) {
          for (var i = 0; i < as3.length; i++) {
            var out = f2(as3[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastMap = function(f2) {
        return function(as3) {
          for (var i = as3.length - 1; i >= 0; i--) {
            var out = f2(as3[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastIndex = function(predicate) {
        return function(as3) {
          for (var i = as3.length - 1; i >= 0; i--) {
            if (predicate(as3[i])) {
              return some(i);
            }
          }
          return none;
        };
      };
      _chainRecDepthFirst = function(a, f2) {
        return pipe(a, chainRecDepthFirst(f2));
      };
      _chainRecBreadthFirst = function(a, f2) {
        return pipe(a, chainRecBreadthFirst(f2));
      };
      foldMapWithIndex2 = function(M) {
        return function(f2) {
          return function(fa) {
            return fa.reduce(function(b, a, i) {
              return M.concat(b, f2(i, a));
            }, M.empty);
          };
        };
      };
      reduce2 = function(b, f2) {
        return reduceWithIndex2(b, function(_, b2, a) {
          return f2(b2, a);
        });
      };
      foldMap2 = function(M) {
        var foldMapWithIndexM = foldMapWithIndex2(M);
        return function(f2) {
          return foldMapWithIndexM(function(_, a) {
            return f2(a);
          });
        };
      };
      reduceWithIndex2 = function(b, f2) {
        return function(fa) {
          var len = fa.length;
          var out = b;
          for (var i = 0; i < len; i++) {
            out = f2(i, out, fa[i]);
          }
          return out;
        };
      };
      reduceRight2 = function(b, f2) {
        return reduceRightWithIndex2(b, function(_, a, b2) {
          return f2(a, b2);
        });
      };
      reduceRightWithIndex2 = function(b, f2) {
        return function(fa) {
          return fa.reduceRight(function(b2, a, i) {
            return f2(i, a, b2);
          }, b);
        };
      };
      getShow2 = function(S) {
        return {
          show: function(as3) {
            return "[".concat(as3.map(S.show).join(", "), "]");
          }
        };
      };
      getEq2 = function(E) {
        return fromEquals(function(xs, ys) {
          return xs.length === ys.length && xs.every(function(x, i) {
            return E.equals(x, ys[i]);
          });
        });
      };
      getOrd = function(O2) {
        return fromCompare(function(a, b) {
          var aLen = a.length;
          var bLen = b.length;
          var len = Math.min(aLen, bLen);
          for (var i = 0; i < len; i++) {
            var ordering = O2.compare(a[i], b[i]);
            if (ordering !== 0) {
              return ordering;
            }
          }
          return Ord.compare(aLen, bLen);
        });
      };
      chainRecDepthFirst = function(f2) {
        return function(a) {
          var todo = __spreadArray5([], f2(a), true);
          var out = [];
          while (todo.length > 0) {
            var e = todo.shift();
            if (isLeft(e)) {
              todo.unshift.apply(todo, f2(e.left));
            } else {
              out.push(e.right);
            }
          }
          return out;
        };
      };
      chainRecBreadthFirst = function(f2) {
        return function(a) {
          var initial = f2(a);
          var todo = [];
          var out = [];
          function go(e2) {
            if (isLeft(e2)) {
              f2(e2.left).forEach(function(v) {
                return todo.push(v);
              });
            } else {
              out.push(e2.right);
            }
          }
          for (var _i = 0, initial_1 = initial; _i < initial_1.length; _i++) {
            var e = initial_1[_i];
            go(e);
          }
          while (todo.length > 0) {
            go(todo.shift());
          }
          return out;
        };
      };
      intercalate2 = function(M) {
        var intercalateM = intercalate(M);
        return function(middle) {
          return match(function() {
            return M.empty;
          }, intercalateM(middle));
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Array.js
  var Array_exports = {};
  __export(Array_exports, {
    Alt: () => Alt,
    Alternative: () => Alternative,
    Applicative: () => Applicative,
    Apply: () => Apply,
    Chain: () => Chain,
    ChainRecBreadthFirst: () => ChainRecBreadthFirst,
    ChainRecDepthFirst: () => ChainRecDepthFirst,
    Compactable: () => Compactable,
    Do: () => Do,
    Extend: () => Extend,
    Filterable: () => Filterable,
    FilterableWithIndex: () => FilterableWithIndex,
    Foldable: () => Foldable,
    FoldableWithIndex: () => FoldableWithIndex,
    FromEither: () => FromEither,
    Functor: () => Functor,
    FunctorWithIndex: () => FunctorWithIndex,
    Monad: () => Monad,
    Pointed: () => Pointed,
    Traversable: () => Traversable,
    TraversableWithIndex: () => TraversableWithIndex,
    URI: () => URI,
    Unfoldable: () => Unfoldable,
    Witherable: () => Witherable,
    Zero: () => Zero,
    alt: () => alt,
    altW: () => altW,
    ap: () => ap2,
    apFirst: () => apFirst2,
    apS: () => apS2,
    apSecond: () => apSecond2,
    append: () => append3,
    appendW: () => appendW3,
    array: () => array,
    bind: () => bind2,
    bindTo: () => bindTo2,
    chain: () => chain,
    chainFirst: () => chainFirst2,
    chainRecBreadthFirst: () => chainRecBreadthFirst2,
    chainRecDepthFirst: () => chainRecDepthFirst2,
    chainWithIndex: () => chainWithIndex,
    chop: () => chop3,
    chunksOf: () => chunksOf3,
    compact: () => compact,
    comprehension: () => comprehension,
    concat: () => concat2,
    concatW: () => concatW,
    cons: () => cons3,
    copy: () => copy2,
    deleteAt: () => deleteAt,
    difference: () => difference,
    dropLeft: () => dropLeft,
    dropLeftWhile: () => dropLeftWhile,
    dropRight: () => dropRight,
    duplicate: () => duplicate,
    elem: () => elem2,
    empty: () => empty2,
    every: () => every2,
    exists: () => exists,
    extend: () => extend,
    filter: () => filter,
    filterE: () => filterE2,
    filterMap: () => filterMap,
    filterMapWithIndex: () => filterMapWithIndex,
    filterWithIndex: () => filterWithIndex,
    findFirst: () => findFirst2,
    findFirstMap: () => findFirstMap2,
    findIndex: () => findIndex2,
    findLast: () => findLast2,
    findLastIndex: () => findLastIndex2,
    findLastMap: () => findLastMap2,
    flap: () => flap2,
    flatMap: () => flatMap,
    flatten: () => flatten,
    foldLeft: () => foldLeft,
    foldMap: () => foldMap3,
    foldMapWithIndex: () => foldMapWithIndex3,
    foldRight: () => foldRight,
    fromEither: () => fromEither,
    fromEitherK: () => fromEitherK2,
    fromOption: () => fromOption,
    fromOptionK: () => fromOptionK,
    fromPredicate: () => fromPredicate,
    getDifferenceMagma: () => getDifferenceMagma,
    getEq: () => getEq3,
    getIntersectionSemigroup: () => getIntersectionSemigroup,
    getMonoid: () => getMonoid2,
    getOrd: () => getOrd2,
    getSemigroup: () => getSemigroup3,
    getShow: () => getShow3,
    getUnionMonoid: () => getUnionMonoid,
    getUnionSemigroup: () => getUnionSemigroup,
    guard: () => guard2,
    head: () => head5,
    init: () => init3,
    insertAt: () => insertAt,
    intercalate: () => intercalate3,
    intersection: () => intersection,
    intersperse: () => intersperse3,
    isEmpty: () => isEmpty,
    isNonEmpty: () => isNonEmpty5,
    isOutOfBound: () => isOutOfBound4,
    last: () => last5,
    lefts: () => lefts,
    let: () => let_2,
    lookup: () => lookup2,
    makeBy: () => makeBy3,
    map: () => map,
    mapWithIndex: () => mapWithIndex,
    match: () => match2,
    matchLeft: () => matchLeft,
    matchLeftW: () => matchLeftW,
    matchRight: () => matchRight,
    matchRightW: () => matchRightW,
    matchW: () => matchW2,
    modifyAt: () => modifyAt,
    of: () => of3,
    partition: () => partition,
    partitionMap: () => partitionMap,
    partitionMapWithIndex: () => partitionMapWithIndex,
    partitionWithIndex: () => partitionWithIndex,
    prepend: () => prepend3,
    prependAll: () => prependAll3,
    prependToAll: () => prependToAll,
    prependW: () => prependW3,
    range: () => range3,
    reduce: () => reduce3,
    reduceRight: () => reduceRight3,
    reduceRightWithIndex: () => reduceRightWithIndex3,
    reduceWithIndex: () => reduceWithIndex3,
    replicate: () => replicate,
    reverse: () => reverse2,
    rights: () => rights,
    rotate: () => rotate3,
    scanLeft: () => scanLeft,
    scanRight: () => scanRight,
    separate: () => separate,
    sequence: () => sequence,
    size: () => size,
    snoc: () => snoc3,
    some: () => some2,
    sort: () => sort2,
    sortBy: () => sortBy3,
    spanLeft: () => spanLeft,
    splitAt: () => splitAt3,
    tail: () => tail4,
    takeLeft: () => takeLeft,
    takeLeftWhile: () => takeLeftWhile,
    takeRight: () => takeRight,
    traverse: () => traverse,
    traverseWithIndex: () => traverseWithIndex,
    unfold: () => unfold,
    union: () => union3,
    uniq: () => uniq3,
    unsafeDeleteAt: () => unsafeDeleteAt,
    unsafeInsertAt: () => unsafeInsertAt3,
    unsafeUpdateAt: () => unsafeUpdateAt3,
    unzip: () => unzip,
    updateAt: () => updateAt,
    wilt: () => wilt,
    wither: () => wither,
    zero: () => zero,
    zip: () => zip,
    zipWith: () => zipWith
  });
  function fromPredicate(predicate) {
    return function(a) {
      return predicate(a) ? [a] : [];
    };
  }
  function takeLeftWhile(predicate) {
    return function(as3) {
      var out = [];
      for (var _i = 0, as_1 = as3; _i < as_1.length; _i++) {
        var a = as_1[_i];
        if (!predicate(a)) {
          break;
        }
        out.push(a);
      }
      return out;
    };
  }
  function spanLeft(predicate) {
    return function(as3) {
      var _a = splitAt3(spanLeftIndex(as3, predicate))(as3), init4 = _a[0], rest = _a[1];
      return { init: init4, rest };
    };
  }
  function dropLeftWhile(predicate) {
    return function(as3) {
      return as3.slice(spanLeftIndex(as3, predicate));
    };
  }
  function findFirst2(predicate) {
    return findFirst(predicate);
  }
  function findLast2(predicate) {
    return findLast(predicate);
  }
  function zip(as3, bs) {
    if (bs === void 0) {
      return function(bs2) {
        return zip(bs2, as3);
      };
    }
    return zipWith(as3, bs, function(a, b) {
      return [a, b];
    });
  }
  function comprehension(input, f2, g) {
    if (g === void 0) {
      g = function() {
        return true;
      };
    }
    var go = function(scope, input2) {
      return isNonEmpty5(input2) ? flatMap(head3(input2), function(a) {
        return go(pipe(scope, append3(a)), tail3(input2));
      }) : g.apply(void 0, scope) ? [f2.apply(void 0, scope)] : [];
    };
    return go([], input);
  }
  function union3(E) {
    var unionE = union(E);
    return function(first3, second) {
      if (second === void 0) {
        var unionE_1 = union3(E);
        return function(second2) {
          return unionE_1(second2, first3);
        };
      }
      return isNonEmpty5(first3) && isNonEmpty5(second) ? unionE(second)(first3) : isNonEmpty5(first3) ? copy2(first3) : copy2(second);
    };
  }
  function intersection(E) {
    var elemE = elem2(E);
    return function(xs, ys) {
      if (ys === void 0) {
        var intersectionE_1 = intersection(E);
        return function(ys2) {
          return intersectionE_1(ys2, xs);
        };
      }
      return xs.filter(function(a) {
        return elemE(a, ys);
      });
    };
  }
  function difference(E) {
    var elemE = elem2(E);
    return function(xs, ys) {
      if (ys === void 0) {
        var differenceE_1 = difference(E);
        return function(ys2) {
          return differenceE_1(ys2, xs);
        };
      }
      return xs.filter(function(a) {
        return !elemE(a, ys);
      });
    };
  }
  var isEmpty, isNonEmpty5, prepend3, prependW3, append3, appendW3, makeBy3, replicate, fromOption, fromEither, matchW2, match2, matchLeftW, matchLeft, foldLeft, matchRightW, matchRight, foldRight, chainWithIndex, scanLeft, scanRight, size, isOutOfBound4, lookup2, head5, last5, tail4, init3, takeLeft, takeRight, spanLeftIndex, dropLeft, dropRight, findIndex2, findFirstMap2, findLastMap2, findLastIndex2, copy2, insertAt, updateAt, deleteAt, modifyAt, reverse2, rights, lefts, sort2, zipWith, unzip, prependAll3, intersperse3, rotate3, elem2, uniq3, sortBy3, chop3, splitAt3, chunksOf3, fromOptionK, concatW, concat2, _map, _mapWithIndex, _ap, _filter, _filterMap, _partition, _partitionMap, _partitionWithIndex, _partitionMapWithIndex, _alt, _reduce, _foldMap, _reduceRight, _reduceWithIndex, _foldMapWithIndex, _reduceRightWithIndex, _filterMapWithIndex, _filterWithIndex, _extend, _traverse, _traverseWithIndex, _chainRecDepthFirst2, _chainRecBreadthFirst2, of3, zero, map, ap2, flatMap, flatten, mapWithIndex, filterMapWithIndex, filterMap, compact, separate, filter, partition, partitionWithIndex, partitionMap, partitionMapWithIndex, altW, alt, filterWithIndex, extend, duplicate, foldMap3, foldMapWithIndex3, reduce3, reduceWithIndex3, reduceRight3, reduceRightWithIndex3, traverse, sequence, traverseWithIndex, wither, wilt, unfold, URI, getShow3, getSemigroup3, getMonoid2, getEq3, getOrd2, getUnionSemigroup, getUnionMonoid, getIntersectionSemigroup, getDifferenceMagma, Functor, flap2, Pointed, FunctorWithIndex, Apply, apFirst2, apSecond2, Applicative, Chain, chainFirst2, Monad, Unfoldable, Alt, Zero, guard2, Alternative, Extend, Compactable, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, Traversable, TraversableWithIndex, _wither, _wilt, Witherable, chainRecDepthFirst2, ChainRecDepthFirst, chainRecBreadthFirst2, ChainRecBreadthFirst, filterE2, FromEither, fromEitherK2, unsafeInsertAt3, unsafeUpdateAt3, unsafeDeleteAt, every2, some2, exists, intercalate3, Do, bindTo2, let_2, bind2, apS2, chain, range3, empty2, cons3, snoc3, prependToAll, array;
  var init_Array = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Array.js"() {
      init_Apply();
      init_Chain();
      init_FromEither();
      init_function();
      init_Functor();
      init_internal();
      init_NonEmptyArray();
      init_ReadonlyArray();
      init_Separated();
      init_Witherable();
      init_Zero();
      isEmpty = function(as3) {
        return as3.length === 0;
      };
      isNonEmpty5 = isNonEmpty3;
      prepend3 = prepend2;
      prependW3 = prependW2;
      append3 = append;
      appendW3 = appendW;
      makeBy3 = function(n, f2) {
        return n <= 0 ? [] : makeBy(f2)(n);
      };
      replicate = function(n, a) {
        return makeBy3(n, function() {
          return a;
        });
      };
      fromOption = function(ma) {
        return isNone(ma) ? [] : [ma.value];
      };
      fromEither = function(e) {
        return isLeft(e) ? [] : [e.right];
      };
      matchW2 = function(onEmpty, onNonEmpty) {
        return function(as3) {
          return isNonEmpty5(as3) ? onNonEmpty(as3) : onEmpty();
        };
      };
      match2 = matchW2;
      matchLeftW = function(onEmpty, onNonEmpty) {
        return function(as3) {
          return isNonEmpty5(as3) ? onNonEmpty(head3(as3), tail3(as3)) : onEmpty();
        };
      };
      matchLeft = matchLeftW;
      foldLeft = matchLeft;
      matchRightW = function(onEmpty, onNonEmpty) {
        return function(as3) {
          return isNonEmpty5(as3) ? onNonEmpty(init(as3), last3(as3)) : onEmpty();
        };
      };
      matchRight = matchRightW;
      foldRight = matchRight;
      chainWithIndex = function(f2) {
        return function(as3) {
          var out = [];
          for (var i = 0; i < as3.length; i++) {
            out.push.apply(out, f2(i, as3[i]));
          }
          return out;
        };
      };
      scanLeft = function(b, f2) {
        return function(as3) {
          var len = as3.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i = 0; i < len; i++) {
            out[i + 1] = f2(out[i], as3[i]);
          }
          return out;
        };
      };
      scanRight = function(b, f2) {
        return function(as3) {
          var len = as3.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i = len - 1; i >= 0; i--) {
            out[i] = f2(as3[i], out[i + 1]);
          }
          return out;
        };
      };
      size = function(as3) {
        return as3.length;
      };
      isOutOfBound4 = isOutOfBound2;
      lookup2 = lookup;
      head5 = head4;
      last5 = last4;
      tail4 = function(as3) {
        return isNonEmpty5(as3) ? some(tail3(as3)) : none;
      };
      init3 = function(as3) {
        return isNonEmpty5(as3) ? some(init(as3)) : none;
      };
      takeLeft = function(n) {
        return function(as3) {
          return isOutOfBound4(n, as3) ? copy2(as3) : as3.slice(0, n);
        };
      };
      takeRight = function(n) {
        return function(as3) {
          return isOutOfBound4(n, as3) ? copy2(as3) : n === 0 ? [] : as3.slice(-n);
        };
      };
      spanLeftIndex = function(as3, predicate) {
        var l = as3.length;
        var i = 0;
        for (; i < l; i++) {
          if (!predicate(as3[i])) {
            break;
          }
        }
        return i;
      };
      dropLeft = function(n) {
        return function(as3) {
          return n <= 0 || isEmpty(as3) ? copy2(as3) : n >= as3.length ? [] : as3.slice(n, as3.length);
        };
      };
      dropRight = function(n) {
        return function(as3) {
          return n <= 0 || isEmpty(as3) ? copy2(as3) : n >= as3.length ? [] : as3.slice(0, as3.length - n);
        };
      };
      findIndex2 = findIndex;
      findFirstMap2 = findFirstMap;
      findLastMap2 = findLastMap;
      findLastIndex2 = findLastIndex;
      copy2 = function(as3) {
        return as3.slice();
      };
      insertAt = function(i, a) {
        return function(as3) {
          return i < 0 || i > as3.length ? none : some(unsafeInsertAt3(i, a, as3));
        };
      };
      updateAt = function(i, a) {
        return modifyAt(i, function() {
          return a;
        });
      };
      deleteAt = function(i) {
        return function(as3) {
          return isOutOfBound4(i, as3) ? none : some(unsafeDeleteAt(i, as3));
        };
      };
      modifyAt = function(i, f2) {
        return function(as3) {
          return isOutOfBound4(i, as3) ? none : some(unsafeUpdateAt3(i, f2(as3[i]), as3));
        };
      };
      reverse2 = function(as3) {
        return isEmpty(as3) ? [] : as3.slice().reverse();
      };
      rights = function(as3) {
        var r = [];
        for (var i = 0; i < as3.length; i++) {
          var a = as3[i];
          if (a._tag === "Right") {
            r.push(a.right);
          }
        }
        return r;
      };
      lefts = function(as3) {
        var r = [];
        for (var i = 0; i < as3.length; i++) {
          var a = as3[i];
          if (a._tag === "Left") {
            r.push(a.left);
          }
        }
        return r;
      };
      sort2 = function(O2) {
        return function(as3) {
          return as3.length <= 1 ? copy2(as3) : as3.slice().sort(O2.compare);
        };
      };
      zipWith = function(fa, fb, f2) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i = 0; i < len; i++) {
          fc[i] = f2(fa[i], fb[i]);
        }
        return fc;
      };
      unzip = function(as3) {
        var fa = [];
        var fb = [];
        for (var i = 0; i < as3.length; i++) {
          fa[i] = as3[i][0];
          fb[i] = as3[i][1];
        }
        return [fa, fb];
      };
      prependAll3 = function(middle) {
        var f2 = prependAll2(middle);
        return function(as3) {
          return isNonEmpty5(as3) ? f2(as3) : [];
        };
      };
      intersperse3 = function(middle) {
        var f2 = intersperse2(middle);
        return function(as3) {
          return isNonEmpty5(as3) ? f2(as3) : copy2(as3);
        };
      };
      rotate3 = function(n) {
        var f2 = rotate(n);
        return function(as3) {
          return isNonEmpty5(as3) ? f2(as3) : copy2(as3);
        };
      };
      elem2 = elem;
      uniq3 = function(E) {
        var f2 = uniq(E);
        return function(as3) {
          return isNonEmpty5(as3) ? f2(as3) : copy2(as3);
        };
      };
      sortBy3 = function(ords) {
        var f2 = sortBy(ords);
        return function(as3) {
          return isNonEmpty5(as3) ? f2(as3) : copy2(as3);
        };
      };
      chop3 = function(f2) {
        var g = chop(f2);
        return function(as3) {
          return isNonEmpty5(as3) ? g(as3) : [];
        };
      };
      splitAt3 = function(n) {
        return function(as3) {
          return n >= 1 && isNonEmpty5(as3) ? splitAt(n)(as3) : isEmpty(as3) ? [copy2(as3), []] : [[], copy2(as3)];
        };
      };
      chunksOf3 = function(n) {
        var f2 = chunksOf(n);
        return function(as3) {
          return isNonEmpty5(as3) ? f2(as3) : [];
        };
      };
      fromOptionK = function(f2) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return fromOption(f2.apply(void 0, a));
        };
      };
      concatW = function(second) {
        return function(first3) {
          return isEmpty(first3) ? copy2(second) : isEmpty(second) ? copy2(first3) : first3.concat(second);
        };
      };
      concat2 = concatW;
      _map = function(fa, f2) {
        return pipe(fa, map(f2));
      };
      _mapWithIndex = function(fa, f2) {
        return pipe(fa, mapWithIndex(f2));
      };
      _ap = function(fab, fa) {
        return pipe(fab, ap2(fa));
      };
      _filter = function(fa, predicate) {
        return pipe(fa, filter(predicate));
      };
      _filterMap = function(fa, f2) {
        return pipe(fa, filterMap(f2));
      };
      _partition = function(fa, predicate) {
        return pipe(fa, partition(predicate));
      };
      _partitionMap = function(fa, f2) {
        return pipe(fa, partitionMap(f2));
      };
      _partitionWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, partitionWithIndex(predicateWithIndex));
      };
      _partitionMapWithIndex = function(fa, f2) {
        return pipe(fa, partitionMapWithIndex(f2));
      };
      _alt = function(fa, that) {
        return pipe(fa, alt(that));
      };
      _reduce = function(fa, b, f2) {
        return pipe(fa, reduce3(b, f2));
      };
      _foldMap = function(M) {
        var foldMapM = foldMap3(M);
        return function(fa, f2) {
          return pipe(fa, foldMapM(f2));
        };
      };
      _reduceRight = function(fa, b, f2) {
        return pipe(fa, reduceRight3(b, f2));
      };
      _reduceWithIndex = function(fa, b, f2) {
        return pipe(fa, reduceWithIndex3(b, f2));
      };
      _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = foldMapWithIndex3(M);
        return function(fa, f2) {
          return pipe(fa, foldMapWithIndexM(f2));
        };
      };
      _reduceRightWithIndex = function(fa, b, f2) {
        return pipe(fa, reduceRightWithIndex3(b, f2));
      };
      _filterMapWithIndex = function(fa, f2) {
        return pipe(fa, filterMapWithIndex(f2));
      };
      _filterWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, filterWithIndex(predicateWithIndex));
      };
      _extend = function(fa, f2) {
        return pipe(fa, extend(f2));
      };
      _traverse = function(F) {
        var traverseF = traverse(F);
        return function(ta, f2) {
          return pipe(ta, traverseF(f2));
        };
      };
      _traverseWithIndex = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(ta, f2) {
          return pipe(ta, traverseWithIndexF(f2));
        };
      };
      _chainRecDepthFirst2 = _chainRecDepthFirst;
      _chainRecBreadthFirst2 = _chainRecBreadthFirst;
      of3 = of;
      zero = function() {
        return [];
      };
      map = function(f2) {
        return function(fa) {
          return fa.map(function(a) {
            return f2(a);
          });
        };
      };
      ap2 = function(fa) {
        return flatMap(function(f2) {
          return pipe(fa, map(f2));
        });
      };
      flatMap = /* @__PURE__ */ dual(2, function(ma, f2) {
        return pipe(ma, chainWithIndex(function(i, a) {
          return f2(a, i);
        }));
      });
      flatten = /* @__PURE__ */ flatMap(identity);
      mapWithIndex = function(f2) {
        return function(fa) {
          return fa.map(function(a, i) {
            return f2(i, a);
          });
        };
      };
      filterMapWithIndex = function(f2) {
        return function(fa) {
          var out = [];
          for (var i = 0; i < fa.length; i++) {
            var optionB = f2(i, fa[i]);
            if (isSome(optionB)) {
              out.push(optionB.value);
            }
          }
          return out;
        };
      };
      filterMap = function(f2) {
        return filterMapWithIndex(function(_, a) {
          return f2(a);
        });
      };
      compact = /* @__PURE__ */ filterMap(identity);
      separate = function(fa) {
        var left = [];
        var right = [];
        for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
          var e = fa_1[_i];
          if (e._tag === "Left") {
            left.push(e.left);
          } else {
            right.push(e.right);
          }
        }
        return separated(left, right);
      };
      filter = function(predicate) {
        return function(as3) {
          return as3.filter(predicate);
        };
      };
      partition = function(predicate) {
        return partitionWithIndex(function(_, a) {
          return predicate(a);
        });
      };
      partitionWithIndex = function(predicateWithIndex) {
        return function(as3) {
          var left = [];
          var right = [];
          for (var i = 0; i < as3.length; i++) {
            var b = as3[i];
            if (predicateWithIndex(i, b)) {
              right.push(b);
            } else {
              left.push(b);
            }
          }
          return separated(left, right);
        };
      };
      partitionMap = function(f2) {
        return partitionMapWithIndex(function(_, a) {
          return f2(a);
        });
      };
      partitionMapWithIndex = function(f2) {
        return function(fa) {
          var left = [];
          var right = [];
          for (var i = 0; i < fa.length; i++) {
            var e = f2(i, fa[i]);
            if (e._tag === "Left") {
              left.push(e.left);
            } else {
              right.push(e.right);
            }
          }
          return separated(left, right);
        };
      };
      altW = function(that) {
        return function(fa) {
          return fa.concat(that());
        };
      };
      alt = altW;
      filterWithIndex = function(predicateWithIndex) {
        return function(as3) {
          return as3.filter(function(b, i) {
            return predicateWithIndex(i, b);
          });
        };
      };
      extend = function(f2) {
        return function(wa) {
          return wa.map(function(_, i) {
            return f2(wa.slice(i));
          });
        };
      };
      duplicate = /* @__PURE__ */ extend(identity);
      foldMap3 = foldMap2;
      foldMapWithIndex3 = foldMapWithIndex2;
      reduce3 = reduce2;
      reduceWithIndex3 = reduceWithIndex2;
      reduceRight3 = reduceRight2;
      reduceRightWithIndex3 = reduceRightWithIndex2;
      traverse = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(f2) {
          return traverseWithIndexF(function(_, a) {
            return f2(a);
          });
        };
      };
      sequence = function(F) {
        return function(ta) {
          return _reduce(ta, F.of(zero()), function(fas, fa) {
            return F.ap(F.map(fas, function(as3) {
              return function(a) {
                return pipe(as3, append3(a));
              };
            }), fa);
          });
        };
      };
      traverseWithIndex = function(F) {
        return function(f2) {
          return reduceWithIndex3(F.of(zero()), function(i, fbs, a) {
            return F.ap(F.map(fbs, function(bs) {
              return function(b) {
                return pipe(bs, append3(b));
              };
            }), f2(i, a));
          });
        };
      };
      wither = function(F) {
        var _witherF = _wither(F);
        return function(f2) {
          return function(fa) {
            return _witherF(fa, f2);
          };
        };
      };
      wilt = function(F) {
        var _wiltF = _wilt(F);
        return function(f2) {
          return function(fa) {
            return _wiltF(fa, f2);
          };
        };
      };
      unfold = function(b, f2) {
        var out = [];
        var bb = b;
        while (true) {
          var mt = f2(bb);
          if (isSome(mt)) {
            var _a = mt.value, a = _a[0], b_1 = _a[1];
            out.push(a);
            bb = b_1;
          } else {
            break;
          }
        }
        return out;
      };
      URI = "Array";
      getShow3 = getShow2;
      getSemigroup3 = function() {
        return {
          concat: function(first3, second) {
            return first3.concat(second);
          }
        };
      };
      getMonoid2 = function() {
        return {
          concat: getSemigroup3().concat,
          empty: []
        };
      };
      getEq3 = getEq2;
      getOrd2 = getOrd;
      getUnionSemigroup = function(E) {
        var unionE = union3(E);
        return {
          concat: function(first3, second) {
            return unionE(second)(first3);
          }
        };
      };
      getUnionMonoid = function(E) {
        return {
          concat: getUnionSemigroup(E).concat,
          empty: []
        };
      };
      getIntersectionSemigroup = function(E) {
        var intersectionE = intersection(E);
        return {
          concat: function(first3, second) {
            return intersectionE(second)(first3);
          }
        };
      };
      getDifferenceMagma = function(E) {
        var differenceE = difference(E);
        return {
          concat: function(first3, second) {
            return differenceE(second)(first3);
          }
        };
      };
      Functor = {
        URI,
        map: _map
      };
      flap2 = /* @__PURE__ */ flap(Functor);
      Pointed = {
        URI,
        of: of3
      };
      FunctorWithIndex = {
        URI,
        map: _map,
        mapWithIndex: _mapWithIndex
      };
      Apply = {
        URI,
        map: _map,
        ap: _ap
      };
      apFirst2 = /* @__PURE__ */ apFirst(Apply);
      apSecond2 = /* @__PURE__ */ apSecond(Apply);
      Applicative = {
        URI,
        map: _map,
        ap: _ap,
        of: of3
      };
      Chain = {
        URI,
        map: _map,
        ap: _ap,
        chain: flatMap
      };
      chainFirst2 = /* @__PURE__ */ chainFirst(Chain);
      Monad = {
        URI,
        map: _map,
        ap: _ap,
        of: of3,
        chain: flatMap
      };
      Unfoldable = {
        URI,
        unfold
      };
      Alt = {
        URI,
        map: _map,
        alt: _alt
      };
      Zero = {
        URI,
        zero
      };
      guard2 = /* @__PURE__ */ guard(Zero, Pointed);
      Alternative = {
        URI,
        map: _map,
        ap: _ap,
        of: of3,
        alt: _alt,
        zero
      };
      Extend = {
        URI,
        map: _map,
        extend: _extend
      };
      Compactable = {
        URI,
        compact,
        separate
      };
      Filterable = {
        URI,
        map: _map,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap
      };
      FilterableWithIndex = {
        URI,
        map: _map,
        mapWithIndex: _mapWithIndex,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex
      };
      Foldable = {
        URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      FoldableWithIndex = {
        URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex
      };
      Traversable = {
        URI,
        map: _map,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence
      };
      TraversableWithIndex = {
        URI,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverse: _traverse,
        sequence,
        traverseWithIndex: _traverseWithIndex
      };
      _wither = /* @__PURE__ */ witherDefault(Traversable, Compactable);
      _wilt = /* @__PURE__ */ wiltDefault(Traversable, Compactable);
      Witherable = {
        URI,
        map: _map,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence,
        wither: _wither,
        wilt: _wilt
      };
      chainRecDepthFirst2 = chainRecDepthFirst;
      ChainRecDepthFirst = {
        URI,
        map: _map,
        ap: _ap,
        chain: flatMap,
        chainRec: _chainRecDepthFirst2
      };
      chainRecBreadthFirst2 = chainRecBreadthFirst;
      ChainRecBreadthFirst = {
        URI,
        map: _map,
        ap: _ap,
        chain: flatMap,
        chainRec: _chainRecBreadthFirst2
      };
      filterE2 = /* @__PURE__ */ filterE(Witherable);
      FromEither = {
        URI,
        fromEither
      };
      fromEitherK2 = /* @__PURE__ */ fromEitherK(FromEither);
      unsafeInsertAt3 = unsafeInsertAt;
      unsafeUpdateAt3 = function(i, a, as3) {
        return isNonEmpty5(as3) ? unsafeUpdateAt(i, a, as3) : [];
      };
      unsafeDeleteAt = function(i, as3) {
        var xs = as3.slice();
        xs.splice(i, 1);
        return xs;
      };
      every2 = every;
      some2 = function(predicate) {
        return function(as3) {
          return as3.some(predicate);
        };
      };
      exists = some2;
      intercalate3 = intercalate2;
      Do = /* @__PURE__ */ of3(emptyRecord);
      bindTo2 = /* @__PURE__ */ bindTo(Functor);
      let_2 = /* @__PURE__ */ let_(Functor);
      bind2 = /* @__PURE__ */ bind(Chain);
      apS2 = /* @__PURE__ */ apS(Apply);
      chain = flatMap;
      range3 = range;
      empty2 = [];
      cons3 = cons;
      snoc3 = snoc;
      prependToAll = prependAll3;
      array = {
        URI,
        compact,
        separate,
        map: _map,
        ap: _ap,
        of: of3,
        chain: flatMap,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        mapWithIndex: _mapWithIndex,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex,
        alt: _alt,
        zero,
        unfold,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex,
        extend: _extend,
        wither: _wither,
        wilt: _wilt
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Predicate.js
  var not;
  var init_Predicate = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Predicate.js"() {
      not = function(predicate) {
        return function(a) {
          return !predicate(a);
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Option.js
  var Option_exports = {};
  __export(Option_exports, {
    Alt: () => Alt2,
    Alternative: () => Alternative2,
    ApT: () => ApT,
    Applicative: () => Applicative2,
    Apply: () => Apply2,
    Chain: () => Chain2,
    Compactable: () => Compactable2,
    Do: () => Do2,
    Extend: () => Extend2,
    Filterable: () => Filterable2,
    Foldable: () => Foldable2,
    FromEither: () => FromEither2,
    Functor: () => Functor2,
    Monad: () => Monad2,
    MonadThrow: () => MonadThrow,
    Pointed: () => Pointed2,
    Traversable: () => Traversable2,
    URI: () => URI2,
    Witherable: () => Witherable2,
    Zero: () => Zero2,
    alt: () => alt2,
    altW: () => altW2,
    ap: () => ap3,
    apFirst: () => apFirst3,
    apS: () => apS3,
    apSecond: () => apSecond3,
    as: () => as2,
    asUnit: () => asUnit2,
    bind: () => bind3,
    bindTo: () => bindTo3,
    chain: () => chain2,
    chainEitherK: () => chainEitherK2,
    chainFirst: () => chainFirst3,
    chainFirstEitherK: () => chainFirstEitherK,
    chainNullableK: () => chainNullableK,
    compact: () => compact2,
    duplicate: () => duplicate2,
    elem: () => elem3,
    exists: () => exists2,
    extend: () => extend2,
    filter: () => filter2,
    filterMap: () => filterMap2,
    flap: () => flap3,
    flatMap: () => flatMap2,
    flatten: () => flatten2,
    fold: () => fold,
    foldMap: () => foldMap4,
    foldW: () => foldW,
    fromEither: () => fromEither2,
    fromEitherK: () => fromEitherK3,
    fromNullable: () => fromNullable,
    fromNullableK: () => fromNullableK,
    fromPredicate: () => fromPredicate2,
    getApplyMonoid: () => getApplyMonoid,
    getApplySemigroup: () => getApplySemigroup2,
    getEq: () => getEq4,
    getFirstMonoid: () => getFirstMonoid,
    getLastMonoid: () => getLastMonoid,
    getLeft: () => getLeft,
    getMonoid: () => getMonoid3,
    getOrElse: () => getOrElse,
    getOrElseW: () => getOrElseW,
    getOrd: () => getOrd3,
    getRefinement: () => getRefinement,
    getRight: () => getRight,
    getShow: () => getShow4,
    guard: () => guard3,
    isNone: () => isNone2,
    isSome: () => isSome2,
    let: () => let_3,
    map: () => map2,
    mapNullable: () => mapNullable,
    match: () => match3,
    matchW: () => matchW3,
    none: () => none2,
    of: () => of4,
    option: () => option,
    orElse: () => orElse,
    partition: () => partition2,
    partitionMap: () => partitionMap2,
    reduce: () => reduce4,
    reduceRight: () => reduceRight4,
    separate: () => separate2,
    sequence: () => sequence2,
    sequenceArray: () => sequenceArray,
    some: () => some3,
    tap: () => tap2,
    tapEither: () => tapEither2,
    throwError: () => throwError,
    toNullable: () => toNullable,
    toUndefined: () => toUndefined,
    traverse: () => traverse2,
    traverseArray: () => traverseArray,
    traverseArrayWithIndex: () => traverseArrayWithIndex,
    traverseReadonlyArrayWithIndex: () => traverseReadonlyArrayWithIndex,
    traverseReadonlyNonEmptyArrayWithIndex: () => traverseReadonlyNonEmptyArrayWithIndex,
    tryCatch: () => tryCatch,
    tryCatchK: () => tryCatchK,
    wilt: () => wilt2,
    wither: () => wither2,
    zero: () => zero2
  });
  function fromPredicate2(predicate) {
    return function(a) {
      return predicate(a) ? some3(a) : none2;
    };
  }
  function elem3(E) {
    return function(a, ma) {
      if (ma === void 0) {
        var elemE_1 = elem3(E);
        return function(ma2) {
          return elemE_1(a, ma2);
        };
      }
      return isNone2(ma) ? false : E.equals(a, ma.value);
    };
  }
  function getRefinement(getOption) {
    return function(a) {
      return isSome2(getOption(a));
    };
  }
  var none2, some3, getLeft, getRight, _map2, _ap2, _reduce2, _foldMap2, _reduceRight2, _traverse2, _alt2, _filter2, _filterMap2, _extend2, _partition2, _partitionMap2, URI2, getShow4, getEq4, getOrd3, getMonoid3, map2, Functor2, as2, asUnit2, of4, Pointed2, ap3, Apply2, Applicative2, flatMap2, Chain2, Monad2, reduce4, foldMap4, reduceRight4, Foldable2, orElse, altW2, alt2, Alt2, zero2, Zero2, guard3, Alternative2, extend2, Extend2, compact2, defaultSeparated, separate2, Compactable2, filter2, filterMap2, partition2, partitionMap2, Filterable2, traverse2, sequence2, Traversable2, _wither2, _wilt2, wither2, wilt2, Witherable2, throwError, MonadThrow, fromEither2, FromEither2, isSome2, isNone2, matchW3, foldW, match3, fold, getOrElseW, getOrElse, flap3, apFirst3, apSecond3, flatten2, tap2, tapEither2, duplicate2, fromEitherK3, chainEitherK2, chainFirstEitherK, fromNullable, tryCatch, tryCatchK, fromNullableK, chainNullableK, toNullable, toUndefined, exists2, Do2, bindTo3, let_3, bind3, apS3, ApT, traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyArrayWithIndex, traverseArrayWithIndex, traverseArray, sequenceArray, chain2, chainFirst3, mapNullable, option, getApplySemigroup2, getApplyMonoid, getFirstMonoid, getLastMonoid;
  var init_Option = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Option.js"() {
      init_Applicative();
      init_Apply();
      init_Chain();
      init_FromEither();
      init_function();
      init_Functor();
      init_internal();
      init_Predicate();
      init_Semigroup();
      init_Separated();
      init_Witherable();
      init_Zero();
      none2 = none;
      some3 = some;
      getLeft = function(ma) {
        return ma._tag === "Right" ? none2 : some3(ma.left);
      };
      getRight = function(ma) {
        return ma._tag === "Left" ? none2 : some3(ma.right);
      };
      _map2 = function(fa, f2) {
        return pipe(fa, map2(f2));
      };
      _ap2 = function(fab, fa) {
        return pipe(fab, ap3(fa));
      };
      _reduce2 = function(fa, b, f2) {
        return pipe(fa, reduce4(b, f2));
      };
      _foldMap2 = function(M) {
        var foldMapM = foldMap4(M);
        return function(fa, f2) {
          return pipe(fa, foldMapM(f2));
        };
      };
      _reduceRight2 = function(fa, b, f2) {
        return pipe(fa, reduceRight4(b, f2));
      };
      _traverse2 = function(F) {
        var traverseF = traverse2(F);
        return function(ta, f2) {
          return pipe(ta, traverseF(f2));
        };
      };
      _alt2 = function(fa, that) {
        return pipe(fa, alt2(that));
      };
      _filter2 = function(fa, predicate) {
        return pipe(fa, filter2(predicate));
      };
      _filterMap2 = function(fa, f2) {
        return pipe(fa, filterMap2(f2));
      };
      _extend2 = function(wa, f2) {
        return pipe(wa, extend2(f2));
      };
      _partition2 = function(fa, predicate) {
        return pipe(fa, partition2(predicate));
      };
      _partitionMap2 = function(fa, f2) {
        return pipe(fa, partitionMap2(f2));
      };
      URI2 = "Option";
      getShow4 = function(S) {
        return {
          show: function(ma) {
            return isNone2(ma) ? "none" : "some(".concat(S.show(ma.value), ")");
          }
        };
      };
      getEq4 = function(E) {
        return {
          equals: function(x, y) {
            return x === y || (isNone2(x) ? isNone2(y) : isNone2(y) ? false : E.equals(x.value, y.value));
          }
        };
      };
      getOrd3 = function(O2) {
        return {
          equals: getEq4(O2).equals,
          compare: function(x, y) {
            return x === y ? 0 : isSome2(x) ? isSome2(y) ? O2.compare(x.value, y.value) : 1 : -1;
          }
        };
      };
      getMonoid3 = function(S) {
        return {
          concat: function(x, y) {
            return isNone2(x) ? y : isNone2(y) ? x : some3(S.concat(x.value, y.value));
          },
          empty: none2
        };
      };
      map2 = function(f2) {
        return function(fa) {
          return isNone2(fa) ? none2 : some3(f2(fa.value));
        };
      };
      Functor2 = {
        URI: URI2,
        map: _map2
      };
      as2 = dual(2, as(Functor2));
      asUnit2 = asUnit(Functor2);
      of4 = some3;
      Pointed2 = {
        URI: URI2,
        of: of4
      };
      ap3 = function(fa) {
        return function(fab) {
          return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some3(fab.value(fa.value));
        };
      };
      Apply2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2
      };
      Applicative2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        of: of4
      };
      flatMap2 = /* @__PURE__ */ dual(2, function(ma, f2) {
        return isNone2(ma) ? none2 : f2(ma.value);
      });
      Chain2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        chain: flatMap2
      };
      Monad2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        of: of4,
        chain: flatMap2
      };
      reduce4 = function(b, f2) {
        return function(fa) {
          return isNone2(fa) ? b : f2(b, fa.value);
        };
      };
      foldMap4 = function(M) {
        return function(f2) {
          return function(fa) {
            return isNone2(fa) ? M.empty : f2(fa.value);
          };
        };
      };
      reduceRight4 = function(b, f2) {
        return function(fa) {
          return isNone2(fa) ? b : f2(fa.value, b);
        };
      };
      Foldable2 = {
        URI: URI2,
        reduce: _reduce2,
        foldMap: _foldMap2,
        reduceRight: _reduceRight2
      };
      orElse = dual(2, function(self, that) {
        return isNone2(self) ? that() : self;
      });
      altW2 = orElse;
      alt2 = orElse;
      Alt2 = {
        URI: URI2,
        map: _map2,
        alt: _alt2
      };
      zero2 = function() {
        return none2;
      };
      Zero2 = {
        URI: URI2,
        zero: zero2
      };
      guard3 = /* @__PURE__ */ guard(Zero2, Pointed2);
      Alternative2 = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        of: of4,
        alt: _alt2,
        zero: zero2
      };
      extend2 = function(f2) {
        return function(wa) {
          return isNone2(wa) ? none2 : some3(f2(wa));
        };
      };
      Extend2 = {
        URI: URI2,
        map: _map2,
        extend: _extend2
      };
      compact2 = /* @__PURE__ */ flatMap2(identity);
      defaultSeparated = /* @__PURE__ */ separated(none2, none2);
      separate2 = function(ma) {
        return isNone2(ma) ? defaultSeparated : separated(getLeft(ma.value), getRight(ma.value));
      };
      Compactable2 = {
        URI: URI2,
        compact: compact2,
        separate: separate2
      };
      filter2 = function(predicate) {
        return function(fa) {
          return isNone2(fa) ? none2 : predicate(fa.value) ? fa : none2;
        };
      };
      filterMap2 = function(f2) {
        return function(fa) {
          return isNone2(fa) ? none2 : f2(fa.value);
        };
      };
      partition2 = function(predicate) {
        return function(fa) {
          return separated(_filter2(fa, not(predicate)), _filter2(fa, predicate));
        };
      };
      partitionMap2 = function(f2) {
        return flow(map2(f2), separate2);
      };
      Filterable2 = {
        URI: URI2,
        map: _map2,
        compact: compact2,
        separate: separate2,
        filter: _filter2,
        filterMap: _filterMap2,
        partition: _partition2,
        partitionMap: _partitionMap2
      };
      traverse2 = function(F) {
        return function(f2) {
          return function(ta) {
            return isNone2(ta) ? F.of(none2) : F.map(f2(ta.value), some3);
          };
        };
      };
      sequence2 = function(F) {
        return function(ta) {
          return isNone2(ta) ? F.of(none2) : F.map(ta.value, some3);
        };
      };
      Traversable2 = {
        URI: URI2,
        map: _map2,
        reduce: _reduce2,
        foldMap: _foldMap2,
        reduceRight: _reduceRight2,
        traverse: _traverse2,
        sequence: sequence2
      };
      _wither2 = /* @__PURE__ */ witherDefault(Traversable2, Compactable2);
      _wilt2 = /* @__PURE__ */ wiltDefault(Traversable2, Compactable2);
      wither2 = function(F) {
        var _witherF = _wither2(F);
        return function(f2) {
          return function(fa) {
            return _witherF(fa, f2);
          };
        };
      };
      wilt2 = function(F) {
        var _wiltF = _wilt2(F);
        return function(f2) {
          return function(fa) {
            return _wiltF(fa, f2);
          };
        };
      };
      Witherable2 = {
        URI: URI2,
        map: _map2,
        reduce: _reduce2,
        foldMap: _foldMap2,
        reduceRight: _reduceRight2,
        traverse: _traverse2,
        sequence: sequence2,
        compact: compact2,
        separate: separate2,
        filter: _filter2,
        filterMap: _filterMap2,
        partition: _partition2,
        partitionMap: _partitionMap2,
        wither: _wither2,
        wilt: _wilt2
      };
      throwError = function() {
        return none2;
      };
      MonadThrow = {
        URI: URI2,
        map: _map2,
        ap: _ap2,
        of: of4,
        chain: flatMap2,
        throwError
      };
      fromEither2 = getRight;
      FromEither2 = {
        URI: URI2,
        fromEither: fromEither2
      };
      isSome2 = isSome;
      isNone2 = function(fa) {
        return fa._tag === "None";
      };
      matchW3 = function(onNone, onSome) {
        return function(ma) {
          return isNone2(ma) ? onNone() : onSome(ma.value);
        };
      };
      foldW = matchW3;
      match3 = matchW3;
      fold = match3;
      getOrElseW = function(onNone) {
        return function(ma) {
          return isNone2(ma) ? onNone() : ma.value;
        };
      };
      getOrElse = getOrElseW;
      flap3 = /* @__PURE__ */ flap(Functor2);
      apFirst3 = /* @__PURE__ */ apFirst(Apply2);
      apSecond3 = /* @__PURE__ */ apSecond(Apply2);
      flatten2 = compact2;
      tap2 = /* @__PURE__ */ dual(2, tap(Chain2));
      tapEither2 = /* @__PURE__ */ dual(2, tapEither(FromEither2, Chain2));
      duplicate2 = /* @__PURE__ */ extend2(identity);
      fromEitherK3 = /* @__PURE__ */ fromEitherK(FromEither2);
      chainEitherK2 = /* @__PURE__ */ chainEitherK(FromEither2, Chain2);
      chainFirstEitherK = tapEither2;
      fromNullable = function(a) {
        return a == null ? none2 : some3(a);
      };
      tryCatch = function(f2) {
        try {
          return some3(f2());
        } catch (e) {
          return none2;
        }
      };
      tryCatchK = function(f2) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return tryCatch(function() {
            return f2.apply(void 0, a);
          });
        };
      };
      fromNullableK = function(f2) {
        return flow(f2, fromNullable);
      };
      chainNullableK = function(f2) {
        return function(ma) {
          return isNone2(ma) ? none2 : fromNullable(f2(ma.value));
        };
      };
      toNullable = /* @__PURE__ */ match3(constNull, identity);
      toUndefined = /* @__PURE__ */ match3(constUndefined, identity);
      exists2 = function(predicate) {
        return function(ma) {
          return isNone2(ma) ? false : predicate(ma.value);
        };
      };
      Do2 = /* @__PURE__ */ of4(emptyRecord);
      bindTo3 = /* @__PURE__ */ bindTo(Functor2);
      let_3 = /* @__PURE__ */ let_(Functor2);
      bind3 = /* @__PURE__ */ bind(Chain2);
      apS3 = /* @__PURE__ */ apS(Apply2);
      ApT = /* @__PURE__ */ of4(emptyReadonlyArray);
      traverseReadonlyNonEmptyArrayWithIndex = function(f2) {
        return function(as3) {
          var o = f2(0, head(as3));
          if (isNone2(o)) {
            return none2;
          }
          var out = [o.value];
          for (var i = 1; i < as3.length; i++) {
            var o_1 = f2(i, as3[i]);
            if (isNone2(o_1)) {
              return none2;
            }
            out.push(o_1.value);
          }
          return some3(out);
        };
      };
      traverseReadonlyArrayWithIndex = function(f2) {
        var g = traverseReadonlyNonEmptyArrayWithIndex(f2);
        return function(as3) {
          return isNonEmpty(as3) ? g(as3) : ApT;
        };
      };
      traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
      traverseArray = function(f2) {
        return traverseReadonlyArrayWithIndex(function(_, a) {
          return f2(a);
        });
      };
      sequenceArray = /* @__PURE__ */ traverseArray(identity);
      chain2 = flatMap2;
      chainFirst3 = tap2;
      mapNullable = chainNullableK;
      option = {
        URI: URI2,
        map: _map2,
        of: of4,
        ap: _ap2,
        chain: flatMap2,
        reduce: _reduce2,
        foldMap: _foldMap2,
        reduceRight: _reduceRight2,
        traverse: _traverse2,
        sequence: sequence2,
        zero: zero2,
        alt: _alt2,
        extend: _extend2,
        compact: compact2,
        separate: separate2,
        filter: _filter2,
        filterMap: _filterMap2,
        partition: _partition2,
        partitionMap: _partitionMap2,
        wither: _wither2,
        wilt: _wilt2,
        throwError
      };
      getApplySemigroup2 = /* @__PURE__ */ getApplySemigroup(Apply2);
      getApplyMonoid = /* @__PURE__ */ getApplicativeMonoid(Applicative2);
      getFirstMonoid = function() {
        return getMonoid3(first());
      };
      getLastMonoid = function() {
        return getMonoid3(last());
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js
  var getSemigroup4, getMonoid4;
  var init_Endomorphism = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js"() {
      init_function();
      getSemigroup4 = function() {
        return {
          concat: function(first3, second) {
            return flow(first3, second);
          }
        };
      };
      getMonoid4 = function() {
        return {
          concat: getSemigroup4().concat,
          empty: identity
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/HKT/index.js
  var init_HKT = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/HKT/index.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Monoid.js
  var concatAll4, monoidVoid, monoidAll, monoidAny, monoidString, monoidSum, monoidProduct;
  var init_Monoid = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Monoid.js"() {
      init_Semigroup();
      concatAll4 = function(M) {
        return concatAll2(M)(M.empty);
      };
      monoidVoid = {
        concat: semigroupVoid.concat,
        empty: void 0
      };
      monoidAll = {
        concat: semigroupAll.concat,
        empty: true
      };
      monoidAny = {
        concat: semigroupAny.concat,
        empty: false
      };
      monoidString = {
        concat: semigroupString.concat,
        empty: ""
      };
      monoidSum = {
        concat: semigroupSum.concat,
        empty: 0
      };
      monoidProduct = {
        concat: semigroupProduct.concat,
        empty: 1
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/string.js
  var Eq2, Semigroup, empty3, Monoid, Ord2;
  var init_string = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/string.js"() {
      Eq2 = {
        equals: function(first3, second) {
          return first3 === second;
        }
      };
      Semigroup = {
        concat: function(first3, second) {
          return first3 + second;
        }
      };
      empty3 = "";
      Monoid = {
        concat: Semigroup.concat,
        empty: empty3
      };
      Ord2 = {
        equals: Eq2.equals,
        compare: function(first3, second) {
          return first3 < second ? -1 : first3 > second ? 1 : 0;
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyRecord.js
  function lookup3(k, r) {
    if (r === void 0) {
      return function(r2) {
        return lookup3(k, r2);
      };
    }
    return has.call(r, k) ? some(r[k]) : none;
  }
  var init_ReadonlyRecord = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyRecord.js"() {
      init_internal();
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js
  function collect(O2) {
    if (typeof O2 === "function") {
      return collect(Ord2)(O2);
    }
    var keysO = keys_(O2);
    return function(f2) {
      return function(r) {
        var out = [];
        for (var _i = 0, _a = keysO(r); _i < _a.length; _i++) {
          var key = _a[_i];
          out.push(f2(key, r[key]));
        }
        return out;
      };
    };
  }
  function toUnfoldable(U) {
    return function(r) {
      var sas = toArray(r);
      var len = sas.length;
      return U.unfold(0, function(b) {
        return b < len ? some([sas[b], b + 1]) : none;
      });
    };
  }
  var keys_, toArray, lookup4;
  var init_Record = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js"() {
      init_internal();
      init_ReadonlyRecord();
      init_string();
      keys_ = function(O2) {
        return function(r) {
          return Object.keys(r).sort(O2.compare);
        };
      };
      toArray = /* @__PURE__ */ collect(Ord2)(function(k, a) {
        return [
          k,
          a
        ];
      });
      lookup4 = lookup3;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js
  var init_es6 = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js"() {
      init_Array();
      init_HKT();
      init_Option();
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-156a7ad1ed/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js
  var O, import_function9, import_Predicate2, import_Semigroup2, import_Functor3, import_Apply4, import_Chain3, URI3, map5, Functor3, of5, ap4, Applicative3, apFirst4, apSecond4, chain3, Monad3, Do3, bindTo4, bind4, apS4, let_4, unary, guard4, unless, when, invoke, invokeNullary, curry2T, curry2, curry3T, curry3, curry4T, curry4, curry5T, curry5, applyEvery;
  var init_Function = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-156a7ad1ed/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js"() {
      O = __toESM(require_Option());
      init_Array();
      import_function9 = __toESM(require_function());
      import_Predicate2 = __toESM(require_Predicate());
      init_Endomorphism();
      init_Monoid();
      import_Semigroup2 = __toESM(require_Semigroup());
      import_Functor3 = __toESM(require_Functor());
      import_Apply4 = __toESM(require_Apply());
      import_Chain3 = __toESM(require_Chain());
      URI3 = "Function";
      map5 = (f2) => (g) => (0, import_function9.flow)(g, f2);
      Functor3 = {
        URI: URI3,
        map: (f2, g) => map5(g)(f2)
      };
      of5 = import_function9.constant;
      ap4 = (f2) => (g) => (x) => g(x)(f2(x));
      Applicative3 = {
        ...Functor3,
        of: of5,
        ap: (f2, g) => ap4(g)(f2)
      };
      apFirst4 = (0, import_Apply4.apFirst)(Applicative3);
      apSecond4 = (0, import_Apply4.apSecond)(Applicative3);
      chain3 = (f2) => (g) => (x) => f2(g(x))(x);
      Monad3 = {
        ...Applicative3,
        chain: (f2, g) => chain3(g)(f2)
      };
      Do3 = of5({});
      bindTo4 = (0, import_Functor3.bindTo)(Functor3);
      bind4 = (0, import_Chain3.bind)(Monad3);
      apS4 = (0, import_Apply4.apS)(Applicative3);
      let_4 = (0, import_Functor3.let)(Functor3);
      unary = import_function9.tupled;
      guard4 = (branches) => (fallback) => (input) => (0, import_function9.pipe)(branches, map(([f2, g]) => (0, import_function9.flow)(O.fromPredicate(f2), O.map(g))), concatAll4((0, import_function9.getMonoid)(O.getMonoid((0, import_Semigroup2.first)()))()), (0, import_function9.apply)(input), O.getOrElse(() => fallback(input)));
      unless = (f2) => (onFalse) => (x) => f2(x) ? x : onFalse(x);
      when = (0, import_function9.flow)(import_Predicate2.not, unless);
      invoke = (x) => (ys) => (z) => z[x](...ys);
      invokeNullary = (0, import_function9.flip)(invoke)([]);
      curry2T = (f2) => (a) => (b) => f2([a, b]);
      curry2 = (0, import_function9.flow)(unary, curry2T);
      curry3T = (f2) => (a) => (b) => (c) => f2([a, b, c]);
      curry3 = (0, import_function9.flow)(unary, curry3T);
      curry4T = (f2) => (a) => (b) => (c) => (d) => f2([a, b, c, d]);
      curry4 = (0, import_function9.flow)(unary, curry4T);
      curry5T = (f2) => (a) => (b) => (c) => (d) => (e) => f2([a, b, c, d, e]);
      curry5 = (0, import_function9.flow)(unary, curry5T);
      applyEvery = concatAll4(getMonoid4());
    }
  });

  // src/api.tsx
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
    _regeneratorRuntime = function _regeneratorRuntime5() {
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
    function tryCatch2(fn, obj, arg) {
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
      function invoke2(method, arg, resolve, reject) {
        var record = tryCatch2(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke2("next", value2, resolve, reject);
          }, function(err) {
            invoke2("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke2("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", { value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke2(method, arg, resolve, reject);
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
          var record = tryCatch2(innerFn, self, context);
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
      var record = tryCatch2(method, delegate.iterator, context.arg);
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
  var fetchPlaylistAPI, fetchLikedPlaylistsSP, likePlaylist, createPlaylist, createFolder;
  var init_api = __esm({
    "src/api.tsx"() {
      "use strict";
      fetchPlaylistAPI = /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(uri) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Spicetify.Platform.PlaylistAPI.getContents(uri);
                case 2:
                  return _context.abrupt("return", _context.sent.items);
                case 3:
                case "end":
                  return _context.stop();
              }
          }, _callee2);
        }));
        return function fetchPlaylistAPI2(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      fetchLikedPlaylistsSP = function fetchLikedPlaylistsSP2() {
        return Spicetify.CosmosAsync.get("sp://core-playlist/v1/rootlist");
      };
      likePlaylist = function likePlaylist2(uri) {
        return Spicetify.Platform.RootlistAPI.add([uri]);
      };
      createPlaylist = function createPlaylist2(playlist) {
        return Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist", {
          operation: "create",
          playlist: true,
          uris: playlist.uris,
          name: playlist.name
        });
      };
      createFolder = Spicetify.Platform.RootlistAPI.createFolder;
    }
  });

  // src/fp.tsx
  var guard22, guard32;
  var init_fp = __esm({
    "src/fp.tsx"() {
      "use strict";
      init_Function();
      guard22 = function guard23(branches) {
        return guard4(branches);
      };
      guard32 = function guard33(branches) {
        return guard4(branches);
      };
    }
  });

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // external-global-plugin:react-dom
  var require_react_dom = __commonJS({
    "external-global-plugin:react-dom"(exports, module) {
      module.exports = Spicetify.ReactDOM;
    }
  });

  // .yarn/cache/spcr-settings-npm-1.2.0-849a2f9552-a422be2118.zip/node_modules/spcr-settings/settings.module.css
  var settings_module_default;
  var init_settings_module = __esm({
    ".yarn/cache/spcr-settings-npm-1.2.0-849a2f9552-a422be2118.zip/node_modules/spcr-settings/settings.module.css"() {
      settings_module_default = {};
    }
  });

  // .yarn/cache/spcr-settings-npm-1.2.0-849a2f9552-a422be2118.zip/node_modules/spcr-settings/settingsSection.tsx
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof2(obj);
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _regeneratorRuntime2() {
    "use strict";
    _regeneratorRuntime2 = function _regeneratorRuntime5() {
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
    function tryCatch2(fn, obj, arg) {
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
      function invoke2(method, arg, resolve, reject) {
        var record = tryCatch2(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == _typeof2(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke2("next", value2, resolve, reject);
          }, function(err) {
            invoke2("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke2("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", { value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke2(method, arg, resolve, reject);
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
          var record = tryCatch2(innerFn, self, context);
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
      var record = tryCatch2(method, delegate.iterator, context.arg);
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
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i)
            return;
          _n = false;
        } else
          for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
            ;
      } catch (err) {
        _d = true, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
            return;
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function asyncGeneratorStep2(gen, resolve, reject, _next, _throw, key, arg) {
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
  function _asyncToGenerator2(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof2(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (_typeof2(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (_typeof2(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var import_react, import_react_dom, SettingsSection;
  var init_settingsSection = __esm({
    ".yarn/cache/spcr-settings-npm-1.2.0-849a2f9552-a422be2118.zip/node_modules/spcr-settings/settingsSection.tsx"() {
      import_react = __toESM(require_react());
      import_react_dom = __toESM(require_react_dom());
      init_settings_module();
      SettingsSection = /* @__PURE__ */ _createClass(function SettingsSection2(name, settingsId) {
        var _this = this;
        var initialSettingsFields = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        _classCallCheck(this, SettingsSection2);
        _defineProperty(this, "settingsFields", this.initialSettingsFields);
        _defineProperty(this, "setRerender", null);
        _defineProperty(this, "buttonClassnames", null);
        _defineProperty(this, "pushSettings", /* @__PURE__ */ _asyncToGenerator2(/* @__PURE__ */ _regeneratorRuntime2().mark(function _callee2() {
          var _Spicetify;
          return _regeneratorRuntime2().wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  Object.entries(_this.settingsFields).forEach(function(_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2), nameId = _ref3[0], field = _ref3[1];
                    if (field.type !== "button" && _this.getFieldValue(nameId) === void 0) {
                      _this.setFieldValue(nameId, field.defaultValue);
                    }
                  });
                case 1:
                  if ((_Spicetify = Spicetify) !== null && _Spicetify !== void 0 && (_Spicetify = _Spicetify.Platform) !== null && _Spicetify !== void 0 && (_Spicetify = _Spicetify.History) !== null && _Spicetify !== void 0 && _Spicetify.listen) {
                    _context.next = 6;
                    break;
                  }
                  _context.next = 4;
                  return new Promise(function(resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 4:
                  _context.next = 1;
                  break;
                case 6:
                  if (_this.stopHistoryListener)
                    _this.stopHistoryListener();
                  _this.stopHistoryListener = Spicetify.Platform.History.listen(function(e) {
                    if (e.pathname === "/preferences") {
                      _this.render();
                    }
                  });
                  if (!(Spicetify.Platform.History.location.pathname === "/preferences")) {
                    _context.next = 11;
                    break;
                  }
                  _context.next = 11;
                  return _this.render();
                case 11:
                case "end":
                  return _context.stop();
              }
          }, _callee2);
        })));
        _defineProperty(this, "rerender", function() {
          if (_this.setRerender) {
            _this.setRerender(Math.random());
          }
        });
        _defineProperty(this, "render", /* @__PURE__ */ _asyncToGenerator2(/* @__PURE__ */ _regeneratorRuntime2().mark(function _callee2() {
          var _Array$from$at$classN, _Array$from$at;
          var allSettingsContainer, pluginSettingsContainer;
          return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
            while (1)
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (document.getElementById("desktop.settings.selectLanguage")) {
                    _context2.next = 7;
                    break;
                  }
                  if (!(Spicetify.Platform.History.location.pathname !== "/preferences")) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return");
                case 3:
                  _context2.next = 5;
                  return new Promise(function(resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 5:
                  _context2.next = 0;
                  break;
                case 7:
                  allSettingsContainer = document.querySelector(".main-view-container__scroll-node-child main div");
                  if (allSettingsContainer) {
                    _context2.next = 10;
                    break;
                  }
                  return _context2.abrupt("return", console.error("[spcr-settings] settings container not found"));
                case 10:
                  _this.buttonClassnames = (_Array$from$at$classN = (_Array$from$at = Array.from(allSettingsContainer.querySelectorAll(":scope > button")).at(-1)) === null || _Array$from$at === void 0 ? void 0 : _Array$from$at.className) !== null && _Array$from$at$classN !== void 0 ? _Array$from$at$classN : null;
                  pluginSettingsContainer = Array.from(allSettingsContainer.children).find(function(child) {
                    return child.id === _this.settingsId;
                  });
                  if (!pluginSettingsContainer) {
                    pluginSettingsContainer = document.createElement("div");
                    pluginSettingsContainer.id = _this.settingsId;
                    pluginSettingsContainer.className = settings_module_default.settingsContainer;
                    allSettingsContainer.appendChild(pluginSettingsContainer);
                  } else {
                    console.log(pluginSettingsContainer);
                  }
                  import_react_dom.default.render(/* @__PURE__ */ import_react.default.createElement(_this.FieldsContainer, null), pluginSettingsContainer);
                case 14:
                case "end":
                  return _context2.stop();
              }
          }, _callee2);
        })));
        _defineProperty(this, "addButton", function(nameId, description, value, onClick, events) {
          _this.settingsFields[nameId] = {
            type: "button",
            description,
            value,
            events: _objectSpread({
              onClick
            }, events)
          };
        });
        _defineProperty(this, "addInput", function(nameId, description, defaultValue, onChange, inputType, events) {
          _this.settingsFields[nameId] = {
            type: "input",
            description,
            defaultValue,
            inputType,
            events: _objectSpread({
              onChange
            }, events)
          };
        });
        _defineProperty(this, "addHidden", function(nameId, defaultValue) {
          _this.settingsFields[nameId] = {
            type: "hidden",
            defaultValue
          };
        });
        _defineProperty(this, "addToggle", function(nameId, description, defaultValue, onChange, events) {
          _this.settingsFields[nameId] = {
            type: "toggle",
            description,
            defaultValue,
            events: _objectSpread({
              onChange
            }, events)
          };
        });
        _defineProperty(this, "addDropDown", function(nameId, description, options, defaultIndex, onSelect, events) {
          _this.settingsFields[nameId] = {
            type: "dropdown",
            description,
            defaultValue: options[defaultIndex],
            options,
            events: _objectSpread({
              onSelect
            }, events)
          };
        });
        _defineProperty(this, "getFieldValue", function(nameId) {
          var _JSON$parse;
          return (_JSON$parse = JSON.parse(Spicetify.LocalStorage.get("".concat(_this.settingsId, ".").concat(nameId)) || "{}")) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.value;
        });
        _defineProperty(this, "setFieldValue", function(nameId, newValue) {
          Spicetify.LocalStorage.set("".concat(_this.settingsId, ".").concat(nameId), JSON.stringify({
            value: newValue
          }));
        });
        _defineProperty(this, "FieldsContainer", function() {
          var _useState = (0, import_react.useState)(0), _useState2 = _slicedToArray(_useState, 2), rerender = _useState2[0], setRerender = _useState2[1];
          _this.setRerender = setRerender;
          return /* @__PURE__ */ import_react.default.createElement("div", {
            className: settings_module_default.settingsContainer,
            key: rerender
          }, /* @__PURE__ */ import_react.default.createElement("h2", {
            className: ["main-shelf-title main-type-cello", settings_module_default.heading].join(" ")
          }, _this.name), Object.entries(_this.settingsFields).map(function(_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2), nameId = _ref6[0], field = _ref6[1];
            return /* @__PURE__ */ import_react.default.createElement(_this.Field, {
              nameId,
              field
            });
          }));
        });
        _defineProperty(this, "Field", function(props) {
          var _this$buttonClassname;
          var id = "".concat(_this.settingsId, ".").concat(props.nameId);
          var defaultStateValue;
          if (props.field.type === "button") {
            defaultStateValue = props.field.value;
          } else {
            defaultStateValue = _this.getFieldValue(props.nameId);
          }
          if (props.field.type === "hidden") {
            return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
          }
          var _useState3 = (0, import_react.useState)(defaultStateValue), _useState4 = _slicedToArray(_useState3, 2), value = _useState4[0], setValueState = _useState4[1];
          var setValue = function setValue2(newValue) {
            if (newValue !== void 0) {
              setValueState(newValue);
              _this.setFieldValue(props.nameId, newValue);
            }
          };
          return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
            className: "main-type-mesto",
            style: {
              color: "var(--spice-subtext)"
            }
          }, /* @__PURE__ */ import_react.default.createElement("label", {
            className: settings_module_default.description,
            htmlFor: id
          }, props.field.description || "")), /* @__PURE__ */ import_react.default.createElement("span", {
            className: ["x-settings-secondColumn", settings_module_default.inputWrapper].join(" ")
          }, props.field.type === "input" ? /* @__PURE__ */ import_react.default.createElement("input", _extends({
            className: "main-dropDown-dropDown",
            id,
            dir: "ltr",
            value,
            type: props.field.inputType || "text"
          }, props.field.events, {
            onChange: function onChange(e) {
              var _events;
              setValue(e.currentTarget.value);
              var onChange2 = (_events = props.field.events) === null || _events === void 0 ? void 0 : _events.onChange;
              if (onChange2)
                onChange2(e);
            }
          })) : props.field.type === "button" ? /* @__PURE__ */ import_react.default.createElement("span", {
            className: ""
          }, /* @__PURE__ */ import_react.default.createElement("button", _extends({
            id,
            className: (_this$buttonClassname = _this.buttonClassnames) !== null && _this$buttonClassname !== void 0 ? _this$buttonClassname : ""
          }, props.field.events, {
            onClick: function onClick(e) {
              var _events2;
              setValue();
              var onClick2 = (_events2 = props.field.events) === null || _events2 === void 0 ? void 0 : _events2.onClick;
              if (onClick2)
                onClick2(e);
            },
            type: "button"
          }), value)) : props.field.type === "toggle" ? /* @__PURE__ */ import_react.default.createElement("label", {
            className: "x-toggle-wrapper x-settings-secondColumn"
          }, /* @__PURE__ */ import_react.default.createElement("input", _extends({
            id,
            className: "x-toggle-input",
            type: "checkbox",
            checked: value
          }, props.field.events, {
            onClick: function onClick(e) {
              var _events3;
              setValue(e.currentTarget.checked);
              var onClick2 = (_events3 = props.field.events) === null || _events3 === void 0 ? void 0 : _events3.onClick;
              if (onClick2)
                onClick2(e);
            }
          })), /* @__PURE__ */ import_react.default.createElement("span", {
            className: "x-toggle-indicatorWrapper"
          }, /* @__PURE__ */ import_react.default.createElement("span", {
            className: "x-toggle-indicator"
          }))) : props.field.type === "dropdown" ? /* @__PURE__ */ import_react.default.createElement("select", _extends({
            className: "main-dropDown-dropDown",
            id
          }, props.field.events, {
            onChange: function onChange(e) {
              var _events4;
              setValue(props.field.options[e.currentTarget.selectedIndex]);
              var onChange2 = (_events4 = props.field.events) === null || _events4 === void 0 ? void 0 : _events4.onChange;
              if (onChange2)
                onChange2(e);
            }
          }), props.field.options.map(function(option2, i) {
            return /* @__PURE__ */ import_react.default.createElement("option", {
              selected: option2 === value,
              value: i + 1
            }, option2);
          })) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null)));
        });
        this.name = name;
        this.settingsId = settingsId;
        this.initialSettingsFields = initialSettingsFields;
      });
    }
  });

  // src/settings.tsx
  var settings_exports = {};
  var settings;
  var init_settings = __esm({
    "src/settings.tsx"() {
      "use strict";
      init_settingsSection();
      init_app();
      settings = new SettingsSection("Vaultify", "vaultify");
      settings.addButton("backup", "Backup Playlists and Settings", "Backup to clipboard", backup);
      settings.addButton("restorePlaylistData", "Restore Playlists", "Restore from clipboard", restore("playlistData"));
      settings.addButton("restoreAppData", "Restore Settings", "Restore from clipboard", restore("appData"));
      settings.pushSettings();
    }
  });

  // src/app.tsx
  var app_exports = {};
  __export(app_exports, {
    backup: () => backup,
    default: () => app_default,
    restore: () => restore
  });
  function _typeof3(obj) {
    "@babel/helpers - typeof";
    return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof3(obj);
  }
  function _regeneratorRuntime3() {
    "use strict";
    _regeneratorRuntime3 = function _regeneratorRuntime5() {
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
    function tryCatch2(fn, obj, arg) {
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
      function invoke2(method, arg, resolve, reject) {
        var record = tryCatch2(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == _typeof3(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke2("next", value2, resolve, reject);
          }, function(err) {
            invoke2("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke2("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", { value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke2(method, arg, resolve, reject);
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
          var record = tryCatch2(innerFn, self, context);
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
      var record = tryCatch2(method, delegate.iterator, context.arg);
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
  function asyncGeneratorStep3(gen, resolve, reject, _next, _throw, key, arg) {
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
  function _asyncToGenerator3(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep3(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep3(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var import_Option, import_function10, app_default, extractLikedPlaylistTreeRecur, restorePlaylistseRecur, backup, restore;
  var init_app = __esm({
    "src/app.tsx"() {
      "use strict";
      init_es6();
      init_Function();
      init_Array();
      import_Option = __toESM(require_Option(), 1);
      init_Record();
      import_function10 = __toESM(require_function(), 1);
      init_api();
      init_fp();
      app_default = {};
      extractLikedPlaylistTreeRecur = function extractLikedPlaylistTreeRecur2(leaf) {
        return guard22([[function(leaf2) {
          return leaf2.type === "playlist";
        }, /* @__PURE__ */ function() {
          var _ref = _asyncToGenerator3(/* @__PURE__ */ _regeneratorRuntime3().mark(function _callee2(playlist) {
            return _regeneratorRuntime3().wrap(function _callee2$(_context2) {
              while (1)
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!playlist.ownedBySelf) {
                      _context2.next = 8;
                      break;
                    }
                    _context2.t1 = playlist.name;
                    _context2.next = 4;
                    return (0, import_function10.pipe)(playlist.link, fetchPlaylistAPI, /* @__PURE__ */ function() {
                      var _ref2 = _asyncToGenerator3(/* @__PURE__ */ _regeneratorRuntime3().mark(function _callee3(x) {
                        return _regeneratorRuntime3().wrap(function _callee$(_context) {
                          while (1)
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.t0 = import_function10.pipe;
                                _context.next = 3;
                                return x;
                              case 3:
                                _context.t1 = _context.sent;
                                _context.t2 = map((0, import_function10.flow)(lookup4("uri")));
                                _context.t3 = Array_exports.sequence(Option_exports.Applicative);
                                _context.t4 = (0, import_Option.getOrElse)(function() {
                                  return [];
                                });
                                return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2, _context.t3, _context.t4));
                              case 8:
                              case "end":
                                return _context.stop();
                            }
                        }, _callee3);
                      }));
                      return function(_x2) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  case 4:
                    _context2.t2 = _context2.sent;
                    _context2.t0 = {
                      type: "playlist personal",
                      name: _context2.t1,
                      uris: _context2.t2
                    };
                    _context2.next = 9;
                    break;
                  case 8:
                    _context2.t0 = {
                      type: "playlist liked",
                      name: playlist.name,
                      uri: playlist.link
                    };
                  case 9:
                    return _context2.abrupt("return", _context2.t0);
                  case 10:
                  case "end":
                    return _context2.stop();
                }
            }, _callee2);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }()], [function(leaf2) {
          return leaf2.type === "folder";
        }, /* @__PURE__ */ function() {
          var _ref3 = _asyncToGenerator3(/* @__PURE__ */ _regeneratorRuntime3().mark(function _callee3(folder) {
            return _regeneratorRuntime3().wrap(function _callee3$(_context3) {
              while (1)
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.t0 = folder.type;
                    _context3.t1 = folder.name;
                    if (!folder.rows) {
                      _context3.next = 8;
                      break;
                    }
                    _context3.next = 5;
                    return (0, import_function10.pipe)(folder.rows, map(extractLikedPlaylistTreeRecur2), function(x) {
                      return Promise.all(x);
                    });
                  case 5:
                    _context3.t2 = _context3.sent;
                    _context3.next = 9;
                    break;
                  case 8:
                    _context3.t2 = [];
                  case 9:
                    _context3.t3 = _context3.t2;
                    return _context3.abrupt("return", {
                      type: _context3.t0,
                      name: _context3.t1,
                      uris: _context3.t3
                    });
                  case 11:
                  case "end":
                    return _context3.stop();
                }
            }, _callee3);
          }));
          return function(_x3) {
            return _ref3.apply(this, arguments);
          };
        }()]])((0, import_function10.constant)(Promise.resolve({})))(leaf);
      };
      restorePlaylistseRecur = /* @__PURE__ */ function() {
        var _ref4 = _asyncToGenerator3(/* @__PURE__ */ _regeneratorRuntime3().mark(function _callee4(leaf) {
          return _regeneratorRuntime3().wrap(function _callee4$(_context4) {
            while (1)
              switch (_context4.prev = _context4.next) {
                case 0:
                  guard32([[function(leaf2) {
                    return leaf2.type === "playlist personal";
                  }, createPlaylist], [function(leaf2) {
                    return leaf2.type === "playlist liked";
                  }, function(playlist) {
                    return likePlaylist(playlist.uri);
                  }], [function(leaf2) {
                    return leaf2.type === "folder";
                  }, function(folder) {
                    return createFolder(folder.name) && map(restorePlaylistseRecur)(folder.uris);
                  }]])((0, import_function10.constant)(void 0))(leaf);
                case 1:
                case "end":
                  return _context4.stop();
              }
          }, _callee4);
        }));
        return function restorePlaylistseRecur2(_x4) {
          return _ref4.apply(this, arguments);
        };
      }();
      backup = /* @__PURE__ */ function() {
        var _ref5 = _asyncToGenerator3(/* @__PURE__ */ _regeneratorRuntime3().mark(function _callee5() {
          var playlistData, appData;
          return _regeneratorRuntime3().wrap(function _callee5$(_context5) {
            while (1)
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.t0 = import_function10.pipe;
                  _context5.next = 3;
                  return fetchLikedPlaylistsSP();
                case 3:
                  _context5.t1 = _context5.sent;
                  _context5.t2 = extractLikedPlaylistTreeRecur;
                  _context5.next = 7;
                  return (0, _context5.t0)(_context5.t1, _context5.t2);
                case 7:
                  playlistData = _context5.sent;
                  appData = toUnfoldable(Array_exports)(localStorage);
                  _context5.next = 11;
                  return Spicetify.Platform.ClipboardAPI.copy(JSON.stringify({
                    playlistData,
                    appData
                  }));
                case 11:
                  Spicetify.showNotification("Backed up Playlists and Settings");
                case 12:
                case "end":
                  return _context5.stop();
              }
          }, _callee5);
        }));
        return function backup2() {
          return _ref5.apply(this, arguments);
        };
      }();
      restore = function restore2(mode) {
        return /* @__PURE__ */ _asyncToGenerator3(/* @__PURE__ */ _regeneratorRuntime3().mark(function _callee6() {
          var vault;
          return _regeneratorRuntime3().wrap(function _callee6$(_context6) {
            while (1)
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.t0 = JSON;
                  _context6.next = 3;
                  return Spicetify.Platform.ClipboardAPI.paste();
                case 3:
                  _context6.t1 = _context6.sent;
                  vault = _context6.t0.parse.call(_context6.t0, _context6.t1);
                  if (!(mode === "playlistData")) {
                    _context6.next = 9;
                    break;
                  }
                  _context6.next = 8;
                  return restorePlaylistseRecur(vault.playlistData);
                case 8:
                  Spicetify.showNotification("Restored Playlists");
                case 9:
                  if (mode === "appData") {
                    map(unary(Spicetify.LocalStorage.set))(vault.appData);
                    Spicetify.showNotification("Restored Settings");
                  }
                case 10:
                case "end":
                  return _context6.stop();
              }
          }, _callee6);
        }));
      };
      Promise.resolve().then(() => init_settings());
    }
  });

  // src/entry.tsx
  var import_Option2 = __toESM(require_Option(), 1);
  var import_ReadonlyRecord = __toESM(require_ReadonlyRecord(), 1);
  var import_function11 = __toESM(require_function(), 1);
  function _typeof4(obj) {
    "@babel/helpers - typeof";
    return _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof4(obj);
  }
  function _regeneratorRuntime4() {
    "use strict";
    _regeneratorRuntime4 = function _regeneratorRuntime5() {
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
    function tryCatch2(fn, obj, arg) {
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
      function invoke2(method, arg, resolve, reject) {
        var record = tryCatch2(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == _typeof4(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke2("next", value2, resolve, reject);
          }, function(err) {
            invoke2("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke2("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", { value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke2(method, arg, resolve, reject);
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
          var record = tryCatch2(innerFn, self, context);
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
      var record = tryCatch2(method, delegate.iterator, context.arg);
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
  function asyncGeneratorStep4(gen, resolve, reject, _next, _throw, key, arg) {
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
  function _asyncToGenerator4(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep4(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep4(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  _asyncToGenerator4(/* @__PURE__ */ _regeneratorRuntime4().mark(function _callee() {
    var mustLoad, sleep;
    return _regeneratorRuntime4().wrap(function _callee$(_context) {
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
            if (!mustLoad.map((0, import_function11.flow)(function(p2) {
              return (0, import_ReadonlyRecord.lookup)(p2)(Spicetify);
            }, import_Option2.isNone))) {
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
/*! Bundled license information:

spcr-settings/settingsSection.tsx:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
(async () => {
                if (!document.getElementById(`vaultify`)) {
                    var el = document.createElement("style")
                    el.id = `vaultify`
                    el.textContent = String.raw`/* .yarn/cache/spcr-settings-npm-1.2.0-849a2f9552-a422be2118.zip/node_modules/spcr-settings/settings.module.css */
.settingsContainer {
  display: contents;
}
.heading {
  grid-column: 1/-1;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #fff;
  margin-top: 24px;
}
.description {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.inputWrapper {
  display: flex;
  justify-self: end;
}
`.trim()
                    document.head.appendChild(el)
                }
            })()