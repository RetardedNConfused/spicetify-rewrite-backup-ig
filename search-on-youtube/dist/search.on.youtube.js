"use strict";
var search = search || {};
search.on = search.on || {};
search.on.youtube = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/function.js
  var function_exports = {};
  __export(function_exports, {
    SK: () => SK,
    absurd: () => absurd,
    apply: () => apply,
    constFalse: () => constFalse,
    constNull: () => constNull,
    constTrue: () => constTrue,
    constUndefined: () => constUndefined,
    constVoid: () => constVoid,
    constant: () => constant,
    decrement: () => decrement,
    dual: () => dual,
    flip: () => flip,
    flow: () => flow,
    getBooleanAlgebra: () => getBooleanAlgebra,
    getEndomorphismMonoid: () => getEndomorphismMonoid,
    getMonoid: () => getMonoid,
    getRing: () => getRing,
    getSemigroup: () => getSemigroup,
    getSemiring: () => getSemiring,
    hole: () => hole,
    identity: () => identity,
    increment: () => increment,
    not: () => not,
    pipe: () => pipe,
    tuple: () => tuple,
    tupled: () => tupled,
    unsafeCoerce: () => unsafeCoerce,
    untupled: () => untupled
  });
  function identity(a) {
    return a;
  }
  function constant(a) {
    return function() {
      return a;
    };
  }
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
  function tuple() {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      t[_i] = arguments[_i];
    }
    return t;
  }
  function increment(n) {
    return n + 1;
  }
  function decrement(n) {
    return n - 1;
  }
  function absurd(_) {
    throw new Error("Called `absurd` function which should be uncallable");
  }
  function tupled(f) {
    return function(a) {
      return f.apply(void 0, a);
    };
  }
  function untupled(f) {
    return function() {
      var a = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      return f(a);
    };
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
  function not(predicate) {
    return function(a) {
      return !predicate(a);
    };
  }
  var __spreadArray, getBooleanAlgebra, getSemigroup, getMonoid, getSemiring, getRing, apply, unsafeCoerce, constTrue, constFalse, constNull, constUndefined, constVoid, hole, SK, getEndomorphismMonoid, dual;
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
      getBooleanAlgebra = function(B) {
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
      getSemigroup = function(S) {
        return function() {
          return {
            concat: function(f, g) {
              return function(a) {
                return S.concat(f(a), g(a));
              };
            }
          };
        };
      };
      getMonoid = function(M) {
        var getSemigroupM = getSemigroup(M);
        return function() {
          return {
            concat: getSemigroupM().concat,
            empty: function() {
              return M.empty;
            }
          };
        };
      };
      getSemiring = function(S) {
        return {
          add: function(f, g) {
            return function(x) {
              return S.add(f(x), g(x));
            };
          },
          zero: function() {
            return S.zero;
          },
          mul: function(f, g) {
            return function(x) {
              return S.mul(f(x), g(x));
            };
          },
          one: function() {
            return S.one;
          }
        };
      };
      getRing = function(R) {
        var S = getSemiring(R);
        return {
          add: S.add,
          mul: S.mul,
          one: S.one,
          zero: S.zero,
          sub: function(f, g) {
            return function(x) {
              return R.sub(f(x), g(x));
            };
          }
        };
      };
      apply = function(a) {
        return function(f) {
          return f(a);
        };
      };
      unsafeCoerce = identity;
      constTrue = /* @__PURE__ */ constant(true);
      constFalse = /* @__PURE__ */ constant(false);
      constNull = /* @__PURE__ */ constant(null);
      constUndefined = /* @__PURE__ */ constant(void 0);
      constVoid = constUndefined;
      hole = absurd;
      SK = function(_, b) {
        return b;
      };
      getEndomorphismMonoid = function() {
        return {
          concat: function(first2, second) {
            return flow(first2, second);
          },
          empty: identity
        };
      };
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
  var __spreadArray2, isSome, none, some, isNonEmpty, head, emptyReadonlyArray, emptyRecord, has, fromReadonlyNonEmptyArray;
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
      isSome = function(fa) {
        return fa._tag === "Some";
      };
      none = { _tag: "None" };
      some = function(a) {
        return { _tag: "Some", value: a };
      };
      isNonEmpty = function(as3) {
        return as3.length > 0;
      };
      head = function(as3) {
        return as3[0];
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
      return function(first2) {
        return A.ap(A.map(first2, function(a) {
          return function() {
            return a;
          };
        }), second);
      };
    };
  }
  function apSecond(A) {
    return function(second) {
      return function(first2) {
        return A.ap(A.map(first2, function() {
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
        concat: function(first2, second) {
          return F.ap(F.map(first2, function(x) {
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
        return F.map(fab, function(f) {
          return f(a);
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
    return function(name, f) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = f(a), _a));
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
    var f = getApplySemigroup(F);
    return function(M) {
      return {
        concat: f(M).concat,
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
  function tap(M) {
    return function(first2, f) {
      return M.chain(first2, function(a) {
        return M.map(f(a), function() {
          return a;
        });
      });
    };
  }
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
  var init_Chain = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Chain.js"() {
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromEither.js
  function fromEitherK(F) {
    return function(f) {
      return flow(f, F.fromEither);
    };
  }
  function chainEitherK(F, M) {
    var fromEitherKF = fromEitherK(F);
    return function(f) {
      return function(ma) {
        return M.chain(ma, fromEitherKF(f));
      };
    };
  }
  function tapEither(F, M) {
    var fromEither2 = fromEitherK(F);
    var tapM = tap(M);
    return function(self, f) {
      return tapM(self, fromEither2(f));
    };
  }
  var init_FromEither = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromEither.js"() {
      init_Chain();
      init_function();
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
  var extract, head2;
  var init_ReadonlyNonEmptyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyNonEmptyArray.js"() {
      init_internal();
      extract = head;
      head2 = extract;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/NonEmptyArray.js
  var __spreadArray3, isNonEmpty2, prependW, prepend, fromReadonlyNonEmptyArray2, copy, chop, splitAt, chunksOf, head3;
  var init_NonEmptyArray = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/NonEmptyArray.js"() {
      init_function();
      init_internal();
      init_ReadonlyNonEmptyArray();
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
      isNonEmpty2 = function(as3) {
        return as3.length > 0;
      };
      prependW = function(head4) {
        return function(tail3) {
          return __spreadArray3([head4], tail3, true);
        };
      };
      prepend = prependW;
      fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
      copy = fromReadonlyNonEmptyArray2;
      chop = function(f) {
        return function(as3) {
          var _a = f(as3), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while (isNonEmpty2(next)) {
            var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      splitAt = function(n) {
        return function(as3) {
          var m = Math.max(1, n);
          return m >= as3.length ? [copy(as3), []] : [pipe(as3.slice(1, m), prepend(head3(as3))), as3.slice(m)];
        };
      };
      chunksOf = function(n) {
        return chop(splitAt(n));
      };
      head3 = head2;
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
      return function(wa, f) {
        return F.map(traverseF(wa, f), C.separate);
      };
    };
  }
  function witherDefault(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f) {
        return F.map(traverseF(wa, f), C.compact);
      };
    };
  }
  var init_Witherable = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Witherable.js"() {
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

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Array.js
  var isNonEmpty3, chainWithIndex, chunksOf2, map, flatMap, flatten;
  var init_Array = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Array.js"() {
      init_function();
      init_NonEmptyArray();
      isNonEmpty3 = isNonEmpty2;
      chainWithIndex = function(f) {
        return function(as3) {
          var out = [];
          for (var i = 0; i < as3.length; i++) {
            out.push.apply(out, f(i, as3[i]));
          }
          return out;
        };
      };
      chunksOf2 = function(n) {
        var f = chunksOf(n);
        return function(as3) {
          return isNonEmpty3(as3) ? f(as3) : [];
        };
      };
      map = function(f) {
        return function(fa) {
          return fa.map(function(a) {
            return f(a);
          });
        };
      };
      flatMap = /* @__PURE__ */ dual(2, function(ma, f) {
        return pipe(ma, chainWithIndex(function(i, a) {
          return f(a, i);
        }));
      });
      flatten = /* @__PURE__ */ flatMap(identity);
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Predicate.js
  var not2;
  var init_Predicate = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Predicate.js"() {
      not2 = function(predicate) {
        return function(a) {
          return !predicate(a);
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Option.js
  var Option_exports = {};
  __export(Option_exports, {
    Alt: () => Alt,
    Alternative: () => Alternative,
    ApT: () => ApT,
    Applicative: () => Applicative,
    Apply: () => Apply,
    Chain: () => Chain,
    Compactable: () => Compactable,
    Do: () => Do,
    Extend: () => Extend,
    Filterable: () => Filterable,
    Foldable: () => Foldable,
    FromEither: () => FromEither,
    Functor: () => Functor,
    Monad: () => Monad,
    MonadThrow: () => MonadThrow,
    Pointed: () => Pointed,
    Traversable: () => Traversable,
    URI: () => URI,
    Witherable: () => Witherable,
    Zero: () => Zero,
    alt: () => alt,
    altW: () => altW,
    ap: () => ap2,
    apFirst: () => apFirst2,
    apS: () => apS2,
    apSecond: () => apSecond2,
    as: () => as2,
    asUnit: () => asUnit2,
    bind: () => bind2,
    bindTo: () => bindTo2,
    chain: () => chain,
    chainEitherK: () => chainEitherK2,
    chainFirst: () => chainFirst,
    chainFirstEitherK: () => chainFirstEitherK,
    chainNullableK: () => chainNullableK,
    compact: () => compact,
    duplicate: () => duplicate,
    elem: () => elem,
    exists: () => exists,
    extend: () => extend,
    filter: () => filter,
    filterMap: () => filterMap,
    flap: () => flap2,
    flatMap: () => flatMap2,
    flatten: () => flatten2,
    fold: () => fold,
    foldMap: () => foldMap2,
    foldW: () => foldW,
    fromEither: () => fromEither,
    fromEitherK: () => fromEitherK2,
    fromNullable: () => fromNullable,
    fromNullableK: () => fromNullableK,
    fromPredicate: () => fromPredicate,
    getApplyMonoid: () => getApplyMonoid,
    getApplySemigroup: () => getApplySemigroup2,
    getEq: () => getEq2,
    getFirstMonoid: () => getFirstMonoid,
    getLastMonoid: () => getLastMonoid,
    getLeft: () => getLeft,
    getMonoid: () => getMonoid2,
    getOrElse: () => getOrElse,
    getOrElseW: () => getOrElseW,
    getOrd: () => getOrd,
    getRefinement: () => getRefinement,
    getRight: () => getRight,
    getShow: () => getShow2,
    guard: () => guard2,
    isNone: () => isNone,
    isSome: () => isSome2,
    let: () => let_2,
    map: () => map2,
    mapNullable: () => mapNullable,
    match: () => match,
    matchW: () => matchW,
    none: () => none2,
    of: () => of2,
    option: () => option,
    orElse: () => orElse,
    partition: () => partition,
    partitionMap: () => partitionMap,
    reduce: () => reduce2,
    reduceRight: () => reduceRight2,
    separate: () => separate,
    sequence: () => sequence,
    sequenceArray: () => sequenceArray,
    some: () => some2,
    tap: () => tap2,
    tapEither: () => tapEither2,
    throwError: () => throwError,
    toNullable: () => toNullable,
    toUndefined: () => toUndefined,
    traverse: () => traverse,
    traverseArray: () => traverseArray,
    traverseArrayWithIndex: () => traverseArrayWithIndex,
    traverseReadonlyArrayWithIndex: () => traverseReadonlyArrayWithIndex,
    traverseReadonlyNonEmptyArrayWithIndex: () => traverseReadonlyNonEmptyArrayWithIndex,
    tryCatch: () => tryCatch,
    tryCatchK: () => tryCatchK,
    wilt: () => wilt,
    wither: () => wither,
    zero: () => zero
  });
  function fromPredicate(predicate) {
    return function(a) {
      return predicate(a) ? some2(a) : none2;
    };
  }
  function elem(E) {
    return function(a, ma) {
      if (ma === void 0) {
        var elemE_1 = elem(E);
        return function(ma2) {
          return elemE_1(a, ma2);
        };
      }
      return isNone(ma) ? false : E.equals(a, ma.value);
    };
  }
  function getRefinement(getOption) {
    return function(a) {
      return isSome2(getOption(a));
    };
  }
  var none2, some2, getLeft, getRight, _map, _ap, _reduce, _foldMap, _reduceRight, _traverse, _alt, _filter, _filterMap, _extend, _partition, _partitionMap, URI, getShow2, getEq2, getOrd, getMonoid2, map2, Functor, as2, asUnit2, of2, Pointed, ap2, Apply, Applicative, flatMap2, Chain, Monad, reduce2, foldMap2, reduceRight2, Foldable, orElse, altW, alt, Alt, zero, Zero, guard2, Alternative, extend, Extend, compact, defaultSeparated, separate, Compactable, filter, filterMap, partition, partitionMap, Filterable, traverse, sequence, Traversable, _wither, _wilt, wither, wilt, Witherable, throwError, MonadThrow, fromEither, FromEither, isSome2, isNone, matchW, foldW, match, fold, getOrElseW, getOrElse, flap2, apFirst2, apSecond2, flatten2, tap2, tapEither2, duplicate, fromEitherK2, chainEitherK2, chainFirstEitherK, fromNullable, tryCatch, tryCatchK, fromNullableK, chainNullableK, toNullable, toUndefined, exists, Do, bindTo2, let_2, bind2, apS2, ApT, traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyArrayWithIndex, traverseArrayWithIndex, traverseArray, sequenceArray, chain, chainFirst, mapNullable, option, getApplySemigroup2, getApplyMonoid, getFirstMonoid, getLastMonoid;
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
      some2 = some;
      getLeft = function(ma) {
        return ma._tag === "Right" ? none2 : some2(ma.left);
      };
      getRight = function(ma) {
        return ma._tag === "Left" ? none2 : some2(ma.right);
      };
      _map = function(fa, f) {
        return pipe(fa, map2(f));
      };
      _ap = function(fab, fa) {
        return pipe(fab, ap2(fa));
      };
      _reduce = function(fa, b, f) {
        return pipe(fa, reduce2(b, f));
      };
      _foldMap = function(M) {
        var foldMapM = foldMap2(M);
        return function(fa, f) {
          return pipe(fa, foldMapM(f));
        };
      };
      _reduceRight = function(fa, b, f) {
        return pipe(fa, reduceRight2(b, f));
      };
      _traverse = function(F) {
        var traverseF = traverse(F);
        return function(ta, f) {
          return pipe(ta, traverseF(f));
        };
      };
      _alt = function(fa, that) {
        return pipe(fa, alt(that));
      };
      _filter = function(fa, predicate) {
        return pipe(fa, filter(predicate));
      };
      _filterMap = function(fa, f) {
        return pipe(fa, filterMap(f));
      };
      _extend = function(wa, f) {
        return pipe(wa, extend(f));
      };
      _partition = function(fa, predicate) {
        return pipe(fa, partition(predicate));
      };
      _partitionMap = function(fa, f) {
        return pipe(fa, partitionMap(f));
      };
      URI = "Option";
      getShow2 = function(S) {
        return {
          show: function(ma) {
            return isNone(ma) ? "none" : "some(".concat(S.show(ma.value), ")");
          }
        };
      };
      getEq2 = function(E) {
        return {
          equals: function(x, y) {
            return x === y || (isNone(x) ? isNone(y) : isNone(y) ? false : E.equals(x.value, y.value));
          }
        };
      };
      getOrd = function(O) {
        return {
          equals: getEq2(O).equals,
          compare: function(x, y) {
            return x === y ? 0 : isSome2(x) ? isSome2(y) ? O.compare(x.value, y.value) : 1 : -1;
          }
        };
      };
      getMonoid2 = function(S) {
        return {
          concat: function(x, y) {
            return isNone(x) ? y : isNone(y) ? x : some2(S.concat(x.value, y.value));
          },
          empty: none2
        };
      };
      map2 = function(f) {
        return function(fa) {
          return isNone(fa) ? none2 : some2(f(fa.value));
        };
      };
      Functor = {
        URI,
        map: _map
      };
      as2 = dual(2, as(Functor));
      asUnit2 = asUnit(Functor);
      of2 = some2;
      Pointed = {
        URI,
        of: of2
      };
      ap2 = function(fa) {
        return function(fab) {
          return isNone(fab) ? none2 : isNone(fa) ? none2 : some2(fab.value(fa.value));
        };
      };
      Apply = {
        URI,
        map: _map,
        ap: _ap
      };
      Applicative = {
        URI,
        map: _map,
        ap: _ap,
        of: of2
      };
      flatMap2 = /* @__PURE__ */ dual(2, function(ma, f) {
        return isNone(ma) ? none2 : f(ma.value);
      });
      Chain = {
        URI,
        map: _map,
        ap: _ap,
        chain: flatMap2
      };
      Monad = {
        URI,
        map: _map,
        ap: _ap,
        of: of2,
        chain: flatMap2
      };
      reduce2 = function(b, f) {
        return function(fa) {
          return isNone(fa) ? b : f(b, fa.value);
        };
      };
      foldMap2 = function(M) {
        return function(f) {
          return function(fa) {
            return isNone(fa) ? M.empty : f(fa.value);
          };
        };
      };
      reduceRight2 = function(b, f) {
        return function(fa) {
          return isNone(fa) ? b : f(fa.value, b);
        };
      };
      Foldable = {
        URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      orElse = dual(2, function(self, that) {
        return isNone(self) ? that() : self;
      });
      altW = orElse;
      alt = orElse;
      Alt = {
        URI,
        map: _map,
        alt: _alt
      };
      zero = function() {
        return none2;
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
        of: of2,
        alt: _alt,
        zero
      };
      extend = function(f) {
        return function(wa) {
          return isNone(wa) ? none2 : some2(f(wa));
        };
      };
      Extend = {
        URI,
        map: _map,
        extend: _extend
      };
      compact = /* @__PURE__ */ flatMap2(identity);
      defaultSeparated = /* @__PURE__ */ separated(none2, none2);
      separate = function(ma) {
        return isNone(ma) ? defaultSeparated : separated(getLeft(ma.value), getRight(ma.value));
      };
      Compactable = {
        URI,
        compact,
        separate
      };
      filter = function(predicate) {
        return function(fa) {
          return isNone(fa) ? none2 : predicate(fa.value) ? fa : none2;
        };
      };
      filterMap = function(f) {
        return function(fa) {
          return isNone(fa) ? none2 : f(fa.value);
        };
      };
      partition = function(predicate) {
        return function(fa) {
          return separated(_filter(fa, not2(predicate)), _filter(fa, predicate));
        };
      };
      partitionMap = function(f) {
        return flow(map2(f), separate);
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
      traverse = function(F) {
        return function(f) {
          return function(ta) {
            return isNone(ta) ? F.of(none2) : F.map(f(ta.value), some2);
          };
        };
      };
      sequence = function(F) {
        return function(ta) {
          return isNone(ta) ? F.of(none2) : F.map(ta.value, some2);
        };
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
      _wither = /* @__PURE__ */ witherDefault(Traversable, Compactable);
      _wilt = /* @__PURE__ */ wiltDefault(Traversable, Compactable);
      wither = function(F) {
        var _witherF = _wither(F);
        return function(f) {
          return function(fa) {
            return _witherF(fa, f);
          };
        };
      };
      wilt = function(F) {
        var _wiltF = _wilt(F);
        return function(f) {
          return function(fa) {
            return _wiltF(fa, f);
          };
        };
      };
      Witherable = {
        URI,
        map: _map,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: _wither,
        wilt: _wilt
      };
      throwError = function() {
        return none2;
      };
      MonadThrow = {
        URI,
        map: _map,
        ap: _ap,
        of: of2,
        chain: flatMap2,
        throwError
      };
      fromEither = getRight;
      FromEither = {
        URI,
        fromEither
      };
      isSome2 = isSome;
      isNone = function(fa) {
        return fa._tag === "None";
      };
      matchW = function(onNone, onSome) {
        return function(ma) {
          return isNone(ma) ? onNone() : onSome(ma.value);
        };
      };
      foldW = matchW;
      match = matchW;
      fold = match;
      getOrElseW = function(onNone) {
        return function(ma) {
          return isNone(ma) ? onNone() : ma.value;
        };
      };
      getOrElse = getOrElseW;
      flap2 = /* @__PURE__ */ flap(Functor);
      apFirst2 = /* @__PURE__ */ apFirst(Apply);
      apSecond2 = /* @__PURE__ */ apSecond(Apply);
      flatten2 = compact;
      tap2 = /* @__PURE__ */ dual(2, tap(Chain));
      tapEither2 = /* @__PURE__ */ dual(2, tapEither(FromEither, Chain));
      duplicate = /* @__PURE__ */ extend(identity);
      fromEitherK2 = /* @__PURE__ */ fromEitherK(FromEither);
      chainEitherK2 = /* @__PURE__ */ chainEitherK(FromEither, Chain);
      chainFirstEitherK = tapEither2;
      fromNullable = function(a) {
        return a == null ? none2 : some2(a);
      };
      tryCatch = function(f) {
        try {
          return some2(f());
        } catch (e) {
          return none2;
        }
      };
      tryCatchK = function(f) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return tryCatch(function() {
            return f.apply(void 0, a);
          });
        };
      };
      fromNullableK = function(f) {
        return flow(f, fromNullable);
      };
      chainNullableK = function(f) {
        return function(ma) {
          return isNone(ma) ? none2 : fromNullable(f(ma.value));
        };
      };
      toNullable = /* @__PURE__ */ match(constNull, identity);
      toUndefined = /* @__PURE__ */ match(constUndefined, identity);
      exists = function(predicate) {
        return function(ma) {
          return isNone(ma) ? false : predicate(ma.value);
        };
      };
      Do = /* @__PURE__ */ of2(emptyRecord);
      bindTo2 = /* @__PURE__ */ bindTo(Functor);
      let_2 = /* @__PURE__ */ let_(Functor);
      bind2 = /* @__PURE__ */ bind(Chain);
      apS2 = /* @__PURE__ */ apS(Apply);
      ApT = /* @__PURE__ */ of2(emptyReadonlyArray);
      traverseReadonlyNonEmptyArrayWithIndex = function(f) {
        return function(as3) {
          var o = f(0, head(as3));
          if (isNone(o)) {
            return none2;
          }
          var out = [o.value];
          for (var i = 1; i < as3.length; i++) {
            var o_1 = f(i, as3[i]);
            if (isNone(o_1)) {
              return none2;
            }
            out.push(o_1.value);
          }
          return some2(out);
        };
      };
      traverseReadonlyArrayWithIndex = function(f) {
        var g = traverseReadonlyNonEmptyArrayWithIndex(f);
        return function(as3) {
          return isNonEmpty(as3) ? g(as3) : ApT;
        };
      };
      traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
      traverseArray = function(f) {
        return traverseReadonlyArrayWithIndex(function(_, a) {
          return f(a);
        });
      };
      sequenceArray = /* @__PURE__ */ traverseArray(identity);
      chain = flatMap2;
      chainFirst = tap2;
      mapNullable = chainNullableK;
      option = {
        URI,
        map: _map,
        of: of2,
        ap: _ap,
        chain: flatMap2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence,
        zero,
        alt: _alt,
        extend: _extend,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: _wither,
        wilt: _wilt,
        throwError
      };
      getApplySemigroup2 = /* @__PURE__ */ getApplySemigroup(Apply);
      getApplyMonoid = /* @__PURE__ */ getApplicativeMonoid(Applicative);
      getFirstMonoid = function() {
        return getMonoid2(first());
      };
      getLastMonoid = function() {
        return getMonoid2(last());
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js
  var getSemigroup2, getMonoid3;
  var init_Endomorphism = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js"() {
      init_function();
      getSemigroup2 = function() {
        return {
          concat: function(first2, second) {
            return flow(first2, second);
          }
        };
      };
      getMonoid3 = function() {
        return {
          concat: getSemigroup2().concat,
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

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyRecord.js
  function lookup(k, r) {
    if (r === void 0) {
      return function(r2) {
        return lookup(k, r2);
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
  var lookup2;
  var init_Record = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js"() {
      init_ReadonlyRecord();
      lookup2 = lookup;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js
  var init_es6 = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js"() {
      init_function();
      init_HKT();
      init_Option();
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-f10c7c3878/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js
  var URI2, map4, Functor2, of3, ap3, Applicative2, apFirst3, apSecond3, chain2, Monad2, Do2, bindTo3, bind3, apS3, let_3, unary, unless, when, invoke, invokeNullary, curry2T, curry2, curry3T, curry3, curry4T, curry4, curry5T, curry5, applyEvery;
  var init_Function = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-f10c7c3878/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js"() {
      init_function();
      init_Predicate();
      init_Endomorphism();
      init_Monoid();
      init_Functor();
      init_Apply();
      init_Chain();
      URI2 = "Function";
      map4 = (f) => (g) => flow(g, f);
      Functor2 = {
        URI: URI2,
        map: (f, g) => map4(g)(f)
      };
      of3 = constant;
      ap3 = (f) => (g) => (x) => g(x)(f(x));
      Applicative2 = __spreadProps(__spreadValues({}, Functor2), {
        of: of3,
        ap: (f, g) => ap3(g)(f)
      });
      apFirst3 = apFirst(Applicative2);
      apSecond3 = apSecond(Applicative2);
      chain2 = (f) => (g) => (x) => f(g(x))(x);
      Monad2 = __spreadProps(__spreadValues({}, Applicative2), {
        chain: (f, g) => chain2(g)(f)
      });
      Do2 = of3({});
      bindTo3 = bindTo(Functor2);
      bind3 = bind(Monad2);
      apS3 = apS(Applicative2);
      let_3 = let_(Functor2);
      unary = tupled;
      unless = (f) => (onFalse) => (x) => f(x) ? x : onFalse(x);
      when = flow(not2, unless);
      invoke = (x) => (ys) => (z) => z[x](...ys);
      invokeNullary = flip(invoke)([]);
      curry2T = (f) => (a) => (b) => f([a, b]);
      curry2 = flow(unary, curry2T);
      curry3T = (f) => (a) => (b) => (c) => f([a, b, c]);
      curry3 = flow(unary, curry3T);
      curry4T = (f) => (a) => (b) => (c) => (d) => f([a, b, c, d]);
      curry4 = flow(unary, curry4T);
      curry5T = (f) => (a) => (b) => (c) => (d) => (e) => f([a, b, c, d, e]);
      curry5 = flow(unary, curry5T);
      applyEvery = concatAll4(getMonoid3());
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
  var import_react, import_react_dom, SettingsSection;
  var init_settingsSection = __esm({
    ".yarn/cache/spcr-settings-npm-1.2.0-849a2f9552-a422be2118.zip/node_modules/spcr-settings/settingsSection.tsx"() {
      import_react = __toESM(require_react());
      import_react_dom = __toESM(require_react_dom());
      init_settings_module();
      SettingsSection = class {
        constructor(name, settingsId, initialSettingsFields = {}) {
          this.name = name;
          this.settingsId = settingsId;
          this.initialSettingsFields = initialSettingsFields;
          __publicField(this, "settingsFields", this.initialSettingsFields);
          __publicField(this, "stopHistoryListener");
          __publicField(this, "setRerender", null);
          __publicField(this, "buttonClassnames", null);
          __publicField(this, "pushSettings", () => __async(this, null, function* () {
            var _a, _b;
            Object.entries(this.settingsFields).forEach(([nameId, field]) => {
              if (field.type !== "button" && this.getFieldValue(nameId) === void 0) {
                this.setFieldValue(nameId, field.defaultValue);
              }
            });
            while (!((_b = (_a = Spicetify == null ? void 0 : Spicetify.Platform) == null ? void 0 : _a.History) == null ? void 0 : _b.listen)) {
              yield new Promise((resolve) => setTimeout(resolve, 100));
            }
            if (this.stopHistoryListener)
              this.stopHistoryListener();
            this.stopHistoryListener = Spicetify.Platform.History.listen((e) => {
              if (e.pathname === "/preferences") {
                this.render();
              }
            });
            if (Spicetify.Platform.History.location.pathname === "/preferences") {
              yield this.render();
            }
          }));
          __publicField(this, "rerender", () => {
            if (this.setRerender) {
              this.setRerender(Math.random());
            }
          });
          __publicField(this, "render", () => __async(this, null, function* () {
            var _a, _b;
            while (!document.getElementById("desktop.settings.selectLanguage")) {
              if (Spicetify.Platform.History.location.pathname !== "/preferences")
                return;
              yield new Promise((resolve) => setTimeout(resolve, 100));
            }
            const allSettingsContainer = document.querySelector(
              ".main-view-container__scroll-node-child main div"
            );
            if (!allSettingsContainer)
              return console.error("[spcr-settings] settings container not found");
            this.buttonClassnames = (_b = (_a = Array.from(allSettingsContainer.querySelectorAll(":scope > button")).at(
              -1
            )) == null ? void 0 : _a.className) != null ? _b : null;
            let pluginSettingsContainer = Array.from(
              allSettingsContainer.children
            ).find((child) => child.id === this.settingsId);
            if (!pluginSettingsContainer) {
              pluginSettingsContainer = document.createElement("div");
              pluginSettingsContainer.id = this.settingsId;
              pluginSettingsContainer.className = settings_module_default.settingsContainer;
              allSettingsContainer.appendChild(pluginSettingsContainer);
            } else {
              console.log(pluginSettingsContainer);
            }
            import_react_dom.default.render(/* @__PURE__ */ import_react.default.createElement(this.FieldsContainer, null), pluginSettingsContainer);
          }));
          __publicField(this, "addButton", (nameId, description, value, onClick, events) => {
            this.settingsFields[nameId] = {
              type: "button",
              description,
              value,
              events: __spreadValues({
                onClick
              }, events)
            };
          });
          __publicField(this, "addInput", (nameId, description, defaultValue, onChange, inputType, events) => {
            this.settingsFields[nameId] = {
              type: "input",
              description,
              defaultValue,
              inputType,
              events: __spreadValues({
                onChange
              }, events)
            };
          });
          __publicField(this, "addHidden", (nameId, defaultValue) => {
            this.settingsFields[nameId] = {
              type: "hidden",
              defaultValue
            };
          });
          __publicField(this, "addToggle", (nameId, description, defaultValue, onChange, events) => {
            this.settingsFields[nameId] = {
              type: "toggle",
              description,
              defaultValue,
              events: __spreadValues({
                onChange
              }, events)
            };
          });
          __publicField(this, "addDropDown", (nameId, description, options, defaultIndex, onSelect, events) => {
            this.settingsFields[nameId] = {
              type: "dropdown",
              description,
              defaultValue: options[defaultIndex],
              options,
              events: __spreadValues({
                onSelect
              }, events)
            };
          });
          __publicField(this, "getFieldValue", (nameId) => {
            var _a;
            return (_a = JSON.parse(
              Spicetify.LocalStorage.get(`${this.settingsId}.${nameId}`) || "{}"
            )) == null ? void 0 : _a.value;
          });
          __publicField(this, "setFieldValue", (nameId, newValue) => {
            Spicetify.LocalStorage.set(
              `${this.settingsId}.${nameId}`,
              JSON.stringify({ value: newValue })
            );
          });
          __publicField(this, "FieldsContainer", () => {
            const [rerender, setRerender] = (0, import_react.useState)(0);
            this.setRerender = setRerender;
            return /* @__PURE__ */ import_react.default.createElement("div", { className: settings_module_default.settingsContainer, key: rerender }, /* @__PURE__ */ import_react.default.createElement(
              "h2",
              {
                className: ["main-shelf-title main-type-cello", settings_module_default.heading].join(
                  " "
                )
              },
              this.name
            ), Object.entries(this.settingsFields).map(([nameId, field]) => {
              return /* @__PURE__ */ import_react.default.createElement(this.Field, { nameId, field });
            }));
          });
          __publicField(this, "Field", (props) => {
            var _a;
            const id = `${this.settingsId}.${props.nameId}`;
            let defaultStateValue;
            if (props.field.type === "button") {
              defaultStateValue = props.field.value;
            } else {
              defaultStateValue = this.getFieldValue(props.nameId);
            }
            if (props.field.type === "hidden") {
              return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
            }
            const [value, setValueState] = (0, import_react.useState)(defaultStateValue);
            const setValue = (newValue) => {
              if (newValue !== void 0) {
                setValueState(newValue);
                this.setFieldValue(props.nameId, newValue);
              }
            };
            return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
              "div",
              {
                className: "main-type-mesto",
                style: { color: "var(--spice-subtext)" }
              },
              /* @__PURE__ */ import_react.default.createElement("label", { className: settings_module_default.description, htmlFor: id }, props.field.description || "")
            ), /* @__PURE__ */ import_react.default.createElement(
              "span",
              {
                className: ["x-settings-secondColumn", settings_module_default.inputWrapper].join(" ")
              },
              props.field.type === "input" ? /* @__PURE__ */ import_react.default.createElement(
                "input",
                __spreadProps(__spreadValues({
                  className: "main-dropDown-dropDown",
                  id,
                  dir: "ltr",
                  value,
                  type: props.field.inputType || "text"
                }, props.field.events), {
                  onChange: (e) => {
                    var _a2;
                    setValue(e.currentTarget.value);
                    const onChange = (_a2 = props.field.events) == null ? void 0 : _a2.onChange;
                    if (onChange)
                      onChange(e);
                  }
                })
              ) : props.field.type === "button" ? /* @__PURE__ */ import_react.default.createElement("span", { className: "" }, /* @__PURE__ */ import_react.default.createElement(
                "button",
                __spreadProps(__spreadValues({
                  id,
                  className: (_a = this.buttonClassnames) != null ? _a : ""
                }, props.field.events), {
                  onClick: (e) => {
                    var _a2;
                    setValue();
                    const onClick = (_a2 = props.field.events) == null ? void 0 : _a2.onClick;
                    if (onClick)
                      onClick(e);
                  },
                  type: "button"
                }),
                value
              )) : props.field.type === "toggle" ? /* @__PURE__ */ import_react.default.createElement("label", { className: "x-toggle-wrapper x-settings-secondColumn" }, /* @__PURE__ */ import_react.default.createElement(
                "input",
                __spreadProps(__spreadValues({
                  id,
                  className: "x-toggle-input",
                  type: "checkbox",
                  checked: value
                }, props.field.events), {
                  onClick: (e) => {
                    var _a2;
                    setValue(e.currentTarget.checked);
                    const onClick = (_a2 = props.field.events) == null ? void 0 : _a2.onClick;
                    if (onClick)
                      onClick(e);
                  }
                })
              ), /* @__PURE__ */ import_react.default.createElement("span", { className: "x-toggle-indicatorWrapper" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "x-toggle-indicator" }))) : props.field.type === "dropdown" ? /* @__PURE__ */ import_react.default.createElement(
                "select",
                __spreadProps(__spreadValues({
                  className: "main-dropDown-dropDown",
                  id
                }, props.field.events), {
                  onChange: (e) => {
                    var _a2;
                    setValue(
                      props.field.options[e.currentTarget.selectedIndex]
                    );
                    const onChange = (_a2 = props.field.events) == null ? void 0 : _a2.onChange;
                    if (onChange)
                      onChange(e);
                  }
                }),
                props.field.options.map((option2, i) => {
                  return /* @__PURE__ */ import_react.default.createElement("option", { selected: option2 === value, value: i + 1 }, option2);
                })
              ) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null)
            ));
          });
        }
      };
    }
  });

  // src/settings.tsx
  var settings, CONFIG;
  var init_settings = __esm({
    "src/settings.tsx"() {
      "use strict";
      init_settingsSection();
      settings = new SettingsSection("Show on youtube", "show-on-youtube");
      settings.addInput("YouTubeApiKey", "YouTube API Key", "000000000000000000000000000000000000000");
      settings.pushSettings();
      CONFIG = new Proxy(settings, {
        get: (target, prop) => target.getFieldValue(prop.toString())
      });
    }
  });

  // src/fp.tsx
  var async;
  var init_fp = __esm({
    "src/fp.tsx"() {
      "use strict";
      async = (f) => (fa) => __async(void 0, null, function* () {
        return f(yield fa);
      });
    }
  });

  // src/api.tsx
  var fetchTracksSpotAPI50, fetchTracksSpotAPI, searchYoutube;
  var init_api = __esm({
    "src/api.tsx"() {
      "use strict";
      init_Array();
      init_function();
      init_settings();
      init_fp();
      fetchTracksSpotAPI50 = (ids) => __async(void 0, null, function* () {
        return (yield Spicetify.CosmosAsync.get(
          `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`
        )).tracks;
      });
      fetchTracksSpotAPI = flow(
        chunksOf2(50),
        map(fetchTracksSpotAPI50),
        (x) => Promise.all(x),
        async(flatten)
      );
      searchYoutube = (searchString) => __async(void 0, null, function* () {
        return (yield (yield fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(
            searchString
          )}&type=video&key=${CONFIG.YouTubeApiKey}`
        )).json()).items;
      });
    }
  });

  // src/parse.tsx
  var parseTrackFromSpotifyAPI;
  var init_parse = __esm({
    "src/parse.tsx"() {
      "use strict";
      parseTrackFromSpotifyAPI = (track) => ({
        albumName: track.album.name,
        albumUri: track.album.uri,
        artistName: track.artists[0].name,
        artistUri: track.artists[0].uri,
        durationMilis: track.duration_ms,
        name: track.name,
        playcount: void 0,
        popularity: track.popularity,
        releaseDate: track.album.releaseDate,
        uri: track.uri
      });
    }
  });

  // src/util.tsx
  var parseUri, normalizeStr;
  var init_util = __esm({
    "src/util.tsx"() {
      "use strict";
      parseUri = (uri) => {
        var _a;
        return (_a = uri.match(
          new RegExp("^(?<type>spotify:(?:artist|track|album|playlist))(?:_v2)?:(?<id>[a-zA-Z0-9_]{22})")
        )) == null ? void 0 : _a.groups;
      };
      normalizeStr = (str) => str.replace(/\(.*\)/g, "").replace(/\[.*\]/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }
  });

  // src/app.tsx
  var app_exports = {};
  __export(app_exports, {
    default: () => app_default
  });
  var app_default, YTVidIDCache, showOnYouTube, showIn;
  var init_app = __esm({
    "src/app.tsx"() {
      "use strict";
      init_Function();
      init_api();
      init_parse();
      init_settings();
      init_util();
      app_default = {};
      YTVidIDCache = /* @__PURE__ */ new Map();
      showOnYouTube = (uri) => __async(void 0, null, function* () {
        var _a, _b;
        const id = parseUri(uri).id;
        if (!YTVidIDCache.get(id)) {
          const track = parseTrackFromSpotifyAPI(
            (yield fetchTracksSpotAPI([id]))[0]
          );
          const searchString = `${track.artistName} - ${track.name} video song`;
          let videos = [];
          if (CONFIG.YouTubeApiKey)
            try {
              videos = yield searchYoutube(searchString);
            } catch (_) {
            }
          if (!(videos == null ? void 0 : videos.length))
            return void window.open(
              `https://www.youtube.com/results?search_query=${encodeURIComponent(
                searchString
              )}`
            );
          const normalizedTrackName = normalizeStr(track.name);
          YTVidIDCache.set(
            id,
            (_b = (_a = videos.find((video) => {
              normalizeStr(video.snippet.title).includes(normalizedTrackName);
            })) == null ? void 0 : _a.id.videoId) != null ? _b : videos[0].id.videoId
          );
        }
        window.open(`https://www.youtube.com/watch?v=${YTVidIDCache.get(id)}`);
      });
      showIn = (allowedTypes) => ([uri]) => allowedTypes.some(String.prototype.startsWith.bind(uri));
      new Spicetify.ContextMenu.Item(
        "Search on YouTube",
        unary(showOnYouTube),
        showIn(["spotify:track" /* TRACK */]),
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>`
      ).register();
    }
  });

  // src/entry.tsx
  init_es6();
  init_Record();
  init_function();
  (() => __async(void 0, null, function* () {
    const mustLoad = ["ContextMenu", "CosmosAsync"];
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let timer = 0;
    while (mustLoad.some(flow(function_exports.flip(lookup2)(Spicetify), Option_exports.isNone)))
      yield sleep(timer += 100);
    yield Promise.resolve().then(() => (init_app(), app_exports));
  }))();
})();
(async () => {
                if (!document.getElementById(`search.on.youtube`)) {
                    var el = document.createElement("style")
                    el.id = `search.on.youtube`
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