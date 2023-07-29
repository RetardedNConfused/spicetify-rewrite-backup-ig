"use strict";
var sort = sort || {};
sort.plus = (() => {
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
  var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
  var __spreadValues = (a, b) => {
    for (var prop2 in b || (b = {}))
      if (__hasOwnProp.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    if (__getOwnPropSymbols)
      for (var prop2 of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop2))
          __defNormalProp(a, prop2, b[prop2]);
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
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
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
  var __publicField = (obj, key2, value) => {
    __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
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
  function tupled(f) {
    return function(a) {
      return f.apply(void 0, a);
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
  var __spreadArray, getSemigroup, getMonoid, apply, unsafeCoerce, constTrue, constNull, constUndefined, dual;
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
      apply = function(a) {
        return function(f) {
          return f(a);
        };
      };
      unsafeCoerce = identity;
      constTrue = /* @__PURE__ */ constant(true);
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
  var __spreadArray2, isNone, isSome, none, some, isLeft, left, right, singleton, isNonEmpty, head, tail, emptyReadonlyArray, emptyRecord, has, fromReadonlyNonEmptyArray, flatMapIO;
  var init_internal = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/internal.js"() {
      init_function();
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
      left = function(e) {
        return { _tag: "Left", left: e };
      };
      right = function(a) {
        return { _tag: "Right", right: a };
      };
      singleton = function(a) {
        return [a];
      };
      isNonEmpty = function(as5) {
        return as5.length > 0;
      };
      head = function(as5) {
        return as5[0];
      };
      tail = function(as5) {
        return as5.slice(1);
      };
      emptyReadonlyArray = [];
      emptyRecord = {};
      has = Object.prototype.hasOwnProperty;
      fromReadonlyNonEmptyArray = function(as5) {
        return __spreadArray2([as5[0]], as5.slice(1), true);
      };
      flatMapIO = function(F, M) {
        return dual(2, function(self, f) {
          return M.flatMap(self, function(a) {
            return F.fromIO(f(a));
          });
        });
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
  function chainFirst(M) {
    var tapM = tap(M);
    return function(f) {
      return function(first2) {
        return tapM(first2, f);
      };
    };
  }
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
    var fromEither3 = fromEitherK(F);
    var tapM = tap(M);
    return function(self, f) {
      return tapM(self, fromEither3(f));
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
      fromEquals = function(equals2) {
        return {
          equals: function(x, y) {
            return x === y || equals2(x, y);
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
  var Ord_exports = {};
  __export(Ord_exports, {
    Contravariant: () => Contravariant,
    URI: () => URI,
    between: () => between,
    clamp: () => clamp,
    contramap: () => contramap,
    equals: () => equals,
    equalsDefault: () => equalsDefault,
    fromCompare: () => fromCompare,
    geq: () => geq,
    getDualOrd: () => getDualOrd,
    getMonoid: () => getMonoid2,
    getSemigroup: () => getSemigroup2,
    getTupleOrd: () => getTupleOrd,
    gt: () => gt,
    leq: () => leq,
    lt: () => lt,
    max: () => max,
    min: () => min,
    ord: () => ord,
    ordBoolean: () => ordBoolean,
    ordDate: () => ordDate,
    ordNumber: () => ordNumber,
    ordString: () => ordString,
    reverse: () => reverse,
    trivial: () => trivial,
    tuple: () => tuple
  });
  function compare(first2, second) {
    return first2 < second ? -1 : first2 > second ? 1 : 0;
  }
  var equalsDefault, fromCompare, tuple, reverse, contramap_, contramap, URI, getSemigroup2, getMonoid2, Contravariant, trivial, equals, lt, gt, leq, geq, min, max, clamp, between, getTupleOrd, getDualOrd, ord, strictOrd, ordBoolean, ordString, ordNumber, ordDate;
  var init_Ord = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Ord.js"() {
      init_Eq();
      init_function();
      equalsDefault = function(compare2) {
        return function(first2, second) {
          return first2 === second || compare2(first2, second) === 0;
        };
      };
      fromCompare = function(compare2) {
        return {
          equals: equalsDefault(compare2),
          compare: function(first2, second) {
            return first2 === second ? 0 : compare2(first2, second);
          }
        };
      };
      tuple = function() {
        var ords = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          ords[_i] = arguments[_i];
        }
        return fromCompare(function(first2, second) {
          var i = 0;
          for (; i < ords.length - 1; i++) {
            var r = ords[i].compare(first2[i], second[i]);
            if (r !== 0) {
              return r;
            }
          }
          return ords[i].compare(first2[i], second[i]);
        });
      };
      reverse = function(O) {
        return fromCompare(function(first2, second) {
          return O.compare(second, first2);
        });
      };
      contramap_ = function(fa, f) {
        return pipe(fa, contramap(f));
      };
      contramap = function(f) {
        return function(fa) {
          return fromCompare(function(first2, second) {
            return fa.compare(f(first2), f(second));
          });
        };
      };
      URI = "Ord";
      getSemigroup2 = function() {
        return {
          concat: function(first2, second) {
            return fromCompare(function(a, b) {
              var ox = first2.compare(a, b);
              return ox !== 0 ? ox : second.compare(a, b);
            });
          }
        };
      };
      getMonoid2 = function() {
        return {
          concat: getSemigroup2().concat,
          empty: fromCompare(function() {
            return 0;
          })
        };
      };
      Contravariant = {
        URI,
        contramap: contramap_
      };
      trivial = {
        equals: constTrue,
        compare: /* @__PURE__ */ constant(0)
      };
      equals = function(O) {
        return function(second) {
          return function(first2) {
            return first2 === second || O.compare(first2, second) === 0;
          };
        };
      };
      lt = function(O) {
        return function(first2, second) {
          return O.compare(first2, second) === -1;
        };
      };
      gt = function(O) {
        return function(first2, second) {
          return O.compare(first2, second) === 1;
        };
      };
      leq = function(O) {
        return function(first2, second) {
          return O.compare(first2, second) !== 1;
        };
      };
      geq = function(O) {
        return function(first2, second) {
          return O.compare(first2, second) !== -1;
        };
      };
      min = function(O) {
        return function(first2, second) {
          return first2 === second || O.compare(first2, second) < 1 ? first2 : second;
        };
      };
      max = function(O) {
        return function(first2, second) {
          return first2 === second || O.compare(first2, second) > -1 ? first2 : second;
        };
      };
      clamp = function(O) {
        var minO = min(O);
        var maxO = max(O);
        return function(low, hi) {
          return function(a) {
            return maxO(minO(a, hi), low);
          };
        };
      };
      between = function(O) {
        var ltO = lt(O);
        var gtO = gt(O);
        return function(low, hi) {
          return function(a) {
            return ltO(a, low) || gtO(a, hi) ? false : true;
          };
        };
      };
      getTupleOrd = tuple;
      getDualOrd = reverse;
      ord = Contravariant;
      strictOrd = {
        equals: eqStrict.equals,
        compare
      };
      ordBoolean = strictOrd;
      ordString = strictOrd;
      ordNumber = strictOrd;
      ordDate = /* @__PURE__ */ pipe(
        ordNumber,
        /* @__PURE__ */ contramap(function(date) {
          return date.valueOf();
        })
      );
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Magma.js
  var concatAll;
  var init_Magma = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Magma.js"() {
      concatAll = function(M) {
        return function(startWith) {
          return function(as5) {
            return as5.reduce(function(a, acc) {
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
  var __spreadArray3, isNonEmpty2, isOutOfBound, prependW, prepend, unsafeUpdateAt, prependAll, intersperse, extract, head2, tail2, last2, concatAll3, intercalate;
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
      isOutOfBound = function(i, as5) {
        return i < 0 || i >= as5.length;
      };
      prependW = function(head6) {
        return function(tail5) {
          return __spreadArray3([head6], tail5, true);
        };
      };
      prepend = prependW;
      unsafeUpdateAt = function(i, a, as5) {
        if (as5[i] === a) {
          return as5;
        } else {
          var xs = fromReadonlyNonEmptyArray(as5);
          xs[i] = a;
          return xs;
        }
      };
      prependAll = function(middle) {
        return function(as5) {
          var out = [middle, as5[0]];
          for (var i = 1; i < as5.length; i++) {
            out.push(middle, as5[i]);
          }
          return out;
        };
      };
      intersperse = function(middle) {
        return function(as5) {
          var rest = tail2(as5);
          return isNonEmpty2(rest) ? pipe(rest, prependAll(middle), prepend(head2(as5))) : as5;
        };
      };
      extract = head;
      head2 = extract;
      tail2 = tail;
      last2 = function(as5) {
        return as5[as5.length - 1];
      };
      concatAll3 = function(S) {
        return function(as5) {
          return as5.reduce(S.concat);
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
  var __spreadArray4, isNonEmpty3, isOutOfBound2, prependW2, prepend2, appendW, append, unsafeInsertAt, unsafeUpdateAt2, uniq, sortBy, union, rotate, fromReadonlyNonEmptyArray2, makeBy, range, groupBy, sort, copy, of, prependAll2, intersperse2, chop, splitAt, chunksOf, head3, tail3, last3, init, snoc;
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
      isNonEmpty3 = function(as5) {
        return as5.length > 0;
      };
      isOutOfBound2 = function(i, as5) {
        return i < 0 || i >= as5.length;
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
      unsafeInsertAt = function(i, a, as5) {
        if (isNonEmpty3(as5)) {
          var xs = fromReadonlyNonEmptyArray2(as5);
          xs.splice(i, 0, a);
          return xs;
        }
        return [a];
      };
      unsafeUpdateAt2 = function(i, a, as5) {
        var xs = fromReadonlyNonEmptyArray2(as5);
        xs[i] = a;
        return xs;
      };
      uniq = function(E) {
        return function(as5) {
          if (as5.length === 1) {
            return copy(as5);
          }
          var out = [head3(as5)];
          var rest = tail3(as5);
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
          var M = getMonoid2();
          return sort(ords.reduce(M.concat, M.empty));
        }
        return copy;
      };
      union = function(E) {
        var uniqE = uniq(E);
        return function(second) {
          return function(first2) {
            return uniqE(pipe(first2, concat(second)));
          };
        };
      };
      rotate = function(n) {
        return function(as5) {
          var len = as5.length;
          var m = Math.round(n) % len;
          if (isOutOfBound2(Math.abs(m), as5) || m === 0) {
            return copy(as5);
          }
          if (m < 0) {
            var _a = splitAt(-m)(as5), f = _a[0], s = _a[1];
            return pipe(s, concat(f));
          } else {
            return rotate(m - len)(as5);
          }
        };
      };
      fromReadonlyNonEmptyArray2 = fromReadonlyNonEmptyArray;
      makeBy = function(f) {
        return function(n) {
          var j = Math.max(0, Math.floor(n));
          var out = [f(0)];
          for (var i = 1; i < j; i++) {
            out.push(f(i));
          }
          return out;
        };
      };
      range = function(start, end) {
        return start <= end ? makeBy(function(i) {
          return start + i;
        })(end - start + 1) : [start];
      };
      groupBy = function(f) {
        return function(as5) {
          var out = {};
          for (var _i = 0, as_1 = as5; _i < as_1.length; _i++) {
            var a = as_1[_i];
            var k = f(a);
            if (has.call(out, k)) {
              out[k].push(a);
            } else {
              out[k] = [a];
            }
          }
          return out;
        };
      };
      sort = function(O) {
        return function(as5) {
          return as5.slice().sort(O.compare);
        };
      };
      copy = fromReadonlyNonEmptyArray2;
      of = function(a) {
        return [a];
      };
      prependAll2 = function(middle) {
        return function(as5) {
          var out = [middle, as5[0]];
          for (var i = 1; i < as5.length; i++) {
            out.push(middle, as5[i]);
          }
          return out;
        };
      };
      intersperse2 = function(middle) {
        return function(as5) {
          var rest = tail3(as5);
          return isNonEmpty3(rest) ? pipe(rest, prependAll2(middle), prepend2(head3(as5))) : copy(as5);
        };
      };
      chop = function(f) {
        return function(as5) {
          var _a = f(as5), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while (isNonEmpty3(next)) {
            var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      splitAt = function(n) {
        return function(as5) {
          var m = Math.max(1, n);
          return m >= as5.length ? [copy(as5), []] : [pipe(as5.slice(1, m), prepend2(head3(as5))), as5.slice(m)];
        };
      };
      chunksOf = function(n) {
        return chop(splitAt(n));
      };
      head3 = head2;
      tail3 = function(as5) {
        return as5.slice(1);
      };
      last3 = last2;
      init = function(as5) {
        return as5.slice(0, -1);
      };
      snoc = function(init4, end) {
        return pipe(init4, append(end));
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/number.js
  var number_exports = {};
  __export(number_exports, {
    Bounded: () => Bounded,
    Eq: () => Eq,
    Field: () => Field,
    MagmaSub: () => MagmaSub,
    MonoidProduct: () => MonoidProduct,
    MonoidSum: () => MonoidSum,
    Ord: () => Ord,
    SemigroupProduct: () => SemigroupProduct,
    SemigroupSum: () => SemigroupSum,
    Show: () => Show,
    isNumber: () => isNumber
  });
  var isNumber, Eq, Ord, Bounded, Show, MagmaSub, SemigroupSum, SemigroupProduct, MonoidSum, MonoidProduct, Field;
  var init_number = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/number.js"() {
      isNumber = function(u) {
        return typeof u === "number";
      };
      Eq = {
        equals: function(first2, second) {
          return first2 === second;
        }
      };
      Ord = {
        equals: Eq.equals,
        compare: function(first2, second) {
          return first2 < second ? -1 : first2 > second ? 1 : 0;
        }
      };
      Bounded = {
        equals: Eq.equals,
        compare: Ord.compare,
        top: Infinity,
        bottom: -Infinity
      };
      Show = {
        show: function(n) {
          return JSON.stringify(n);
        }
      };
      MagmaSub = {
        concat: function(first2, second) {
          return first2 - second;
        }
      };
      SemigroupSum = {
        concat: function(first2, second) {
          return first2 + second;
        }
      };
      SemigroupProduct = {
        concat: function(first2, second) {
          return first2 * second;
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
        div: function(first2, second) {
          return first2 / second;
        },
        mod: function(first2, second) {
          return first2 % second;
        }
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Separated.js
  var separated;
  var init_Separated = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Separated.js"() {
      separated = function(left4, right4) {
        return { left: left4, right: right4 };
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
  function lookup(i, as5) {
    return as5 === void 0 ? function(as6) {
      return lookup(i, as6);
    } : isOutOfBound3(i, as5) ? none : some(as5[i]);
  }
  function findFirst(predicate) {
    return function(as5) {
      for (var i = 0; i < as5.length; i++) {
        if (predicate(as5[i])) {
          return some(as5[i]);
        }
      }
      return none;
    };
  }
  function findLast(predicate) {
    return function(as5) {
      for (var i = as5.length - 1; i >= 0; i--) {
        if (predicate(as5[i])) {
          return some(as5[i]);
        }
      }
      return none;
    };
  }
  function elem(E) {
    return function(a, as5) {
      if (as5 === void 0) {
        var elemE_1 = elem(E);
        return function(as6) {
          return elemE_1(a, as6);
        };
      }
      var predicate = function(element) {
        return E.equals(element, a);
      };
      var i = 0;
      for (; i < as5.length; i++) {
        if (predicate(as5[i])) {
          return true;
        }
      }
      return false;
    };
  }
  function every(predicate) {
    return function(as5) {
      return as5.every(predicate);
    };
  }
  var __spreadArray5, isNonEmpty4, matchW, match, isOutOfBound3, head4, last4, findIndex, findFirstMap, findLastMap, findLastIndex, _chainRecDepthFirst, _chainRecBreadthFirst, foldMapWithIndex2, reduce2, foldMap2, reduceWithIndex2, reduceRight2, reduceRightWithIndex2, getShow2, getEq2, getOrd, chainRecDepthFirst, chainRecBreadthFirst, unsafeUpdateAt3, intercalate2;
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
        return function(as5) {
          return isNonEmpty4(as5) ? onNonEmpty(as5) : onEmpty();
        };
      };
      match = matchW;
      isOutOfBound3 = isOutOfBound;
      head4 = function(as5) {
        return isNonEmpty4(as5) ? some(head2(as5)) : none;
      };
      last4 = function(as5) {
        return isNonEmpty4(as5) ? some(last2(as5)) : none;
      };
      findIndex = function(predicate) {
        return function(as5) {
          for (var i = 0; i < as5.length; i++) {
            if (predicate(as5[i])) {
              return some(i);
            }
          }
          return none;
        };
      };
      findFirstMap = function(f) {
        return function(as5) {
          for (var i = 0; i < as5.length; i++) {
            var out = f(as5[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastMap = function(f) {
        return function(as5) {
          for (var i = as5.length - 1; i >= 0; i--) {
            var out = f(as5[i]);
            if (isSome(out)) {
              return out;
            }
          }
          return none;
        };
      };
      findLastIndex = function(predicate) {
        return function(as5) {
          for (var i = as5.length - 1; i >= 0; i--) {
            if (predicate(as5[i])) {
              return some(i);
            }
          }
          return none;
        };
      };
      _chainRecDepthFirst = function(a, f) {
        return pipe(a, chainRecDepthFirst(f));
      };
      _chainRecBreadthFirst = function(a, f) {
        return pipe(a, chainRecBreadthFirst(f));
      };
      foldMapWithIndex2 = function(M) {
        return function(f) {
          return function(fa) {
            return fa.reduce(function(b, a, i) {
              return M.concat(b, f(i, a));
            }, M.empty);
          };
        };
      };
      reduce2 = function(b, f) {
        return reduceWithIndex2(b, function(_, b2, a) {
          return f(b2, a);
        });
      };
      foldMap2 = function(M) {
        var foldMapWithIndexM = foldMapWithIndex2(M);
        return function(f) {
          return foldMapWithIndexM(function(_, a) {
            return f(a);
          });
        };
      };
      reduceWithIndex2 = function(b, f) {
        return function(fa) {
          var len = fa.length;
          var out = b;
          for (var i = 0; i < len; i++) {
            out = f(i, out, fa[i]);
          }
          return out;
        };
      };
      reduceRight2 = function(b, f) {
        return reduceRightWithIndex2(b, function(_, a, b2) {
          return f(a, b2);
        });
      };
      reduceRightWithIndex2 = function(b, f) {
        return function(fa) {
          return fa.reduceRight(function(b2, a, i) {
            return f(i, a, b2);
          }, b);
        };
      };
      getShow2 = function(S) {
        return {
          show: function(as5) {
            return "[".concat(as5.map(S.show).join(", "), "]");
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
      getOrd = function(O) {
        return fromCompare(function(a, b) {
          var aLen = a.length;
          var bLen = b.length;
          var len = Math.min(aLen, bLen);
          for (var i = 0; i < len; i++) {
            var ordering = O.compare(a[i], b[i]);
            if (ordering !== 0) {
              return ordering;
            }
          }
          return Ord.compare(aLen, bLen);
        });
      };
      chainRecDepthFirst = function(f) {
        return function(a) {
          var todo = __spreadArray5([], f(a), true);
          var out = [];
          while (todo.length > 0) {
            var e = todo.shift();
            if (isLeft(e)) {
              todo.unshift.apply(todo, f(e.left));
            } else {
              out.push(e.right);
            }
          }
          return out;
        };
      };
      chainRecBreadthFirst = function(f) {
        return function(a) {
          var initial = f(a);
          var todo = [];
          var out = [];
          function go(e2) {
            if (isLeft(e2)) {
              f(e2.left).forEach(function(v) {
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
      unsafeUpdateAt3 = function(i, a, as5) {
        return isNonEmpty4(as5) ? unsafeUpdateAt(i, a, as5) : as5;
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
    URI: () => URI2,
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
    getMonoid: () => getMonoid3,
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
    reverse: () => reverse3,
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
    unsafeUpdateAt: () => unsafeUpdateAt4,
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
    return function(as5) {
      var out = [];
      for (var _i = 0, as_1 = as5; _i < as_1.length; _i++) {
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
    return function(as5) {
      var _a = splitAt3(spanLeftIndex(as5, predicate))(as5), init4 = _a[0], rest = _a[1];
      return { init: init4, rest };
    };
  }
  function dropLeftWhile(predicate) {
    return function(as5) {
      return as5.slice(spanLeftIndex(as5, predicate));
    };
  }
  function findFirst2(predicate) {
    return findFirst(predicate);
  }
  function findLast2(predicate) {
    return findLast(predicate);
  }
  function zip(as5, bs) {
    if (bs === void 0) {
      return function(bs2) {
        return zip(bs2, as5);
      };
    }
    return zipWith(as5, bs, function(a, b) {
      return [a, b];
    });
  }
  function comprehension(input, f, g) {
    if (g === void 0) {
      g = function() {
        return true;
      };
    }
    var go = function(scope, input2) {
      return isNonEmpty5(input2) ? flatMap(head3(input2), function(a) {
        return go(pipe(scope, append3(a)), tail3(input2));
      }) : g.apply(void 0, scope) ? [f.apply(void 0, scope)] : [];
    };
    return go([], input);
  }
  function union3(E) {
    var unionE = union(E);
    return function(first2, second) {
      if (second === void 0) {
        var unionE_1 = union3(E);
        return function(second2) {
          return unionE_1(second2, first2);
        };
      }
      return isNonEmpty5(first2) && isNonEmpty5(second) ? unionE(second)(first2) : isNonEmpty5(first2) ? copy2(first2) : copy2(second);
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
  var isEmpty, isNonEmpty5, prepend3, prependW3, append3, appendW3, makeBy3, replicate, fromOption, fromEither, matchW2, match2, matchLeftW, matchLeft, foldLeft, matchRightW, matchRight, foldRight, chainWithIndex, scanLeft, scanRight, size, isOutOfBound4, lookup2, head5, last5, tail4, init3, takeLeft, takeRight, spanLeftIndex, dropLeft, dropRight, findIndex2, findFirstMap2, findLastMap2, findLastIndex2, copy2, insertAt, updateAt, deleteAt, modifyAt, reverse3, rights, lefts, sort2, zipWith, unzip, prependAll3, intersperse3, rotate3, elem2, uniq3, sortBy3, chop3, splitAt3, chunksOf3, fromOptionK, concatW, concat2, _map, _mapWithIndex, _ap, _filter, _filterMap, _partition, _partitionMap, _partitionWithIndex, _partitionMapWithIndex, _alt, _reduce, _foldMap, _reduceRight, _reduceWithIndex, _foldMapWithIndex, _reduceRightWithIndex, _filterMapWithIndex, _filterWithIndex, _extend, _traverse, _traverseWithIndex, _chainRecDepthFirst2, _chainRecBreadthFirst2, of3, zero, map, ap2, flatMap, flatten, mapWithIndex, filterMapWithIndex, filterMap, compact, separate, filter, partition, partitionWithIndex, partitionMap, partitionMapWithIndex, altW, alt, filterWithIndex, extend, duplicate, foldMap3, foldMapWithIndex3, reduce3, reduceWithIndex3, reduceRight3, reduceRightWithIndex3, traverse, sequence, traverseWithIndex, wither, wilt, unfold, URI2, getShow3, getSemigroup3, getMonoid3, getEq3, getOrd2, getUnionSemigroup, getUnionMonoid, getIntersectionSemigroup, getDifferenceMagma, Functor, flap2, Pointed, FunctorWithIndex, Apply, apFirst2, apSecond2, Applicative, Chain, chainFirst2, Monad, Unfoldable, Alt, Zero, guard2, Alternative, Extend, Compactable, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, Traversable, TraversableWithIndex, _wither, _wilt, Witherable, chainRecDepthFirst2, ChainRecDepthFirst, chainRecBreadthFirst2, ChainRecBreadthFirst, filterE2, FromEither, fromEitherK2, unsafeInsertAt3, unsafeUpdateAt4, unsafeDeleteAt, every2, some2, exists, intercalate3, Do, bindTo2, let_2, bind2, apS2, chain, range3, empty2, cons3, snoc3, prependToAll, array;
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
      isEmpty = function(as5) {
        return as5.length === 0;
      };
      isNonEmpty5 = isNonEmpty3;
      prepend3 = prepend2;
      prependW3 = prependW2;
      append3 = append;
      appendW3 = appendW;
      makeBy3 = function(n, f) {
        return n <= 0 ? [] : makeBy(f)(n);
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
        return function(as5) {
          return isNonEmpty5(as5) ? onNonEmpty(as5) : onEmpty();
        };
      };
      match2 = matchW2;
      matchLeftW = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return isNonEmpty5(as5) ? onNonEmpty(head3(as5), tail3(as5)) : onEmpty();
        };
      };
      matchLeft = matchLeftW;
      foldLeft = matchLeft;
      matchRightW = function(onEmpty, onNonEmpty) {
        return function(as5) {
          return isNonEmpty5(as5) ? onNonEmpty(init(as5), last3(as5)) : onEmpty();
        };
      };
      matchRight = matchRightW;
      foldRight = matchRight;
      chainWithIndex = function(f) {
        return function(as5) {
          var out = [];
          for (var i = 0; i < as5.length; i++) {
            out.push.apply(out, f(i, as5[i]));
          }
          return out;
        };
      };
      scanLeft = function(b, f) {
        return function(as5) {
          var len = as5.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i = 0; i < len; i++) {
            out[i + 1] = f(out[i], as5[i]);
          }
          return out;
        };
      };
      scanRight = function(b, f) {
        return function(as5) {
          var len = as5.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i = len - 1; i >= 0; i--) {
            out[i] = f(as5[i], out[i + 1]);
          }
          return out;
        };
      };
      size = function(as5) {
        return as5.length;
      };
      isOutOfBound4 = isOutOfBound2;
      lookup2 = lookup;
      head5 = head4;
      last5 = last4;
      tail4 = function(as5) {
        return isNonEmpty5(as5) ? some(tail3(as5)) : none;
      };
      init3 = function(as5) {
        return isNonEmpty5(as5) ? some(init(as5)) : none;
      };
      takeLeft = function(n) {
        return function(as5) {
          return isOutOfBound4(n, as5) ? copy2(as5) : as5.slice(0, n);
        };
      };
      takeRight = function(n) {
        return function(as5) {
          return isOutOfBound4(n, as5) ? copy2(as5) : n === 0 ? [] : as5.slice(-n);
        };
      };
      spanLeftIndex = function(as5, predicate) {
        var l = as5.length;
        var i = 0;
        for (; i < l; i++) {
          if (!predicate(as5[i])) {
            break;
          }
        }
        return i;
      };
      dropLeft = function(n) {
        return function(as5) {
          return n <= 0 || isEmpty(as5) ? copy2(as5) : n >= as5.length ? [] : as5.slice(n, as5.length);
        };
      };
      dropRight = function(n) {
        return function(as5) {
          return n <= 0 || isEmpty(as5) ? copy2(as5) : n >= as5.length ? [] : as5.slice(0, as5.length - n);
        };
      };
      findIndex2 = findIndex;
      findFirstMap2 = findFirstMap;
      findLastMap2 = findLastMap;
      findLastIndex2 = findLastIndex;
      copy2 = function(as5) {
        return as5.slice();
      };
      insertAt = function(i, a) {
        return function(as5) {
          return i < 0 || i > as5.length ? none : some(unsafeInsertAt3(i, a, as5));
        };
      };
      updateAt = function(i, a) {
        return modifyAt(i, function() {
          return a;
        });
      };
      deleteAt = function(i) {
        return function(as5) {
          return isOutOfBound4(i, as5) ? none : some(unsafeDeleteAt(i, as5));
        };
      };
      modifyAt = function(i, f) {
        return function(as5) {
          return isOutOfBound4(i, as5) ? none : some(unsafeUpdateAt4(i, f(as5[i]), as5));
        };
      };
      reverse3 = function(as5) {
        return isEmpty(as5) ? [] : as5.slice().reverse();
      };
      rights = function(as5) {
        var r = [];
        for (var i = 0; i < as5.length; i++) {
          var a = as5[i];
          if (a._tag === "Right") {
            r.push(a.right);
          }
        }
        return r;
      };
      lefts = function(as5) {
        var r = [];
        for (var i = 0; i < as5.length; i++) {
          var a = as5[i];
          if (a._tag === "Left") {
            r.push(a.left);
          }
        }
        return r;
      };
      sort2 = function(O) {
        return function(as5) {
          return as5.length <= 1 ? copy2(as5) : as5.slice().sort(O.compare);
        };
      };
      zipWith = function(fa, fb, f) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i = 0; i < len; i++) {
          fc[i] = f(fa[i], fb[i]);
        }
        return fc;
      };
      unzip = function(as5) {
        var fa = [];
        var fb = [];
        for (var i = 0; i < as5.length; i++) {
          fa[i] = as5[i][0];
          fb[i] = as5[i][1];
        }
        return [fa, fb];
      };
      prependAll3 = function(middle) {
        var f = prependAll2(middle);
        return function(as5) {
          return isNonEmpty5(as5) ? f(as5) : [];
        };
      };
      intersperse3 = function(middle) {
        var f = intersperse2(middle);
        return function(as5) {
          return isNonEmpty5(as5) ? f(as5) : copy2(as5);
        };
      };
      rotate3 = function(n) {
        var f = rotate(n);
        return function(as5) {
          return isNonEmpty5(as5) ? f(as5) : copy2(as5);
        };
      };
      elem2 = elem;
      uniq3 = function(E) {
        var f = uniq(E);
        return function(as5) {
          return isNonEmpty5(as5) ? f(as5) : copy2(as5);
        };
      };
      sortBy3 = function(ords) {
        var f = sortBy(ords);
        return function(as5) {
          return isNonEmpty5(as5) ? f(as5) : copy2(as5);
        };
      };
      chop3 = function(f) {
        var g = chop(f);
        return function(as5) {
          return isNonEmpty5(as5) ? g(as5) : [];
        };
      };
      splitAt3 = function(n) {
        return function(as5) {
          return n >= 1 && isNonEmpty5(as5) ? splitAt(n)(as5) : isEmpty(as5) ? [copy2(as5), []] : [[], copy2(as5)];
        };
      };
      chunksOf3 = function(n) {
        var f = chunksOf(n);
        return function(as5) {
          return isNonEmpty5(as5) ? f(as5) : [];
        };
      };
      fromOptionK = function(f) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return fromOption(f.apply(void 0, a));
        };
      };
      concatW = function(second) {
        return function(first2) {
          return isEmpty(first2) ? copy2(second) : isEmpty(second) ? copy2(first2) : first2.concat(second);
        };
      };
      concat2 = concatW;
      _map = function(fa, f) {
        return pipe(fa, map(f));
      };
      _mapWithIndex = function(fa, f) {
        return pipe(fa, mapWithIndex(f));
      };
      _ap = function(fab, fa) {
        return pipe(fab, ap2(fa));
      };
      _filter = function(fa, predicate) {
        return pipe(fa, filter(predicate));
      };
      _filterMap = function(fa, f) {
        return pipe(fa, filterMap(f));
      };
      _partition = function(fa, predicate) {
        return pipe(fa, partition(predicate));
      };
      _partitionMap = function(fa, f) {
        return pipe(fa, partitionMap(f));
      };
      _partitionWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, partitionWithIndex(predicateWithIndex));
      };
      _partitionMapWithIndex = function(fa, f) {
        return pipe(fa, partitionMapWithIndex(f));
      };
      _alt = function(fa, that) {
        return pipe(fa, alt(that));
      };
      _reduce = function(fa, b, f) {
        return pipe(fa, reduce3(b, f));
      };
      _foldMap = function(M) {
        var foldMapM = foldMap3(M);
        return function(fa, f) {
          return pipe(fa, foldMapM(f));
        };
      };
      _reduceRight = function(fa, b, f) {
        return pipe(fa, reduceRight3(b, f));
      };
      _reduceWithIndex = function(fa, b, f) {
        return pipe(fa, reduceWithIndex3(b, f));
      };
      _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = foldMapWithIndex3(M);
        return function(fa, f) {
          return pipe(fa, foldMapWithIndexM(f));
        };
      };
      _reduceRightWithIndex = function(fa, b, f) {
        return pipe(fa, reduceRightWithIndex3(b, f));
      };
      _filterMapWithIndex = function(fa, f) {
        return pipe(fa, filterMapWithIndex(f));
      };
      _filterWithIndex = function(fa, predicateWithIndex) {
        return pipe(fa, filterWithIndex(predicateWithIndex));
      };
      _extend = function(fa, f) {
        return pipe(fa, extend(f));
      };
      _traverse = function(F) {
        var traverseF = traverse(F);
        return function(ta, f) {
          return pipe(ta, traverseF(f));
        };
      };
      _traverseWithIndex = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(ta, f) {
          return pipe(ta, traverseWithIndexF(f));
        };
      };
      _chainRecDepthFirst2 = _chainRecDepthFirst;
      _chainRecBreadthFirst2 = _chainRecBreadthFirst;
      of3 = of;
      zero = function() {
        return [];
      };
      map = function(f) {
        return function(fa) {
          return fa.map(function(a) {
            return f(a);
          });
        };
      };
      ap2 = function(fa) {
        return flatMap(function(f) {
          return pipe(fa, map(f));
        });
      };
      flatMap = /* @__PURE__ */ dual(2, function(ma, f) {
        return pipe(ma, chainWithIndex(function(i, a) {
          return f(a, i);
        }));
      });
      flatten = /* @__PURE__ */ flatMap(identity);
      mapWithIndex = function(f) {
        return function(fa) {
          return fa.map(function(a, i) {
            return f(i, a);
          });
        };
      };
      filterMapWithIndex = function(f) {
        return function(fa) {
          var out = [];
          for (var i = 0; i < fa.length; i++) {
            var optionB = f(i, fa[i]);
            if (isSome(optionB)) {
              out.push(optionB.value);
            }
          }
          return out;
        };
      };
      filterMap = function(f) {
        return filterMapWithIndex(function(_, a) {
          return f(a);
        });
      };
      compact = /* @__PURE__ */ filterMap(identity);
      separate = function(fa) {
        var left4 = [];
        var right4 = [];
        for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
          var e = fa_1[_i];
          if (e._tag === "Left") {
            left4.push(e.left);
          } else {
            right4.push(e.right);
          }
        }
        return separated(left4, right4);
      };
      filter = function(predicate) {
        return function(as5) {
          return as5.filter(predicate);
        };
      };
      partition = function(predicate) {
        return partitionWithIndex(function(_, a) {
          return predicate(a);
        });
      };
      partitionWithIndex = function(predicateWithIndex) {
        return function(as5) {
          var left4 = [];
          var right4 = [];
          for (var i = 0; i < as5.length; i++) {
            var b = as5[i];
            if (predicateWithIndex(i, b)) {
              right4.push(b);
            } else {
              left4.push(b);
            }
          }
          return separated(left4, right4);
        };
      };
      partitionMap = function(f) {
        return partitionMapWithIndex(function(_, a) {
          return f(a);
        });
      };
      partitionMapWithIndex = function(f) {
        return function(fa) {
          var left4 = [];
          var right4 = [];
          for (var i = 0; i < fa.length; i++) {
            var e = f(i, fa[i]);
            if (e._tag === "Left") {
              left4.push(e.left);
            } else {
              right4.push(e.right);
            }
          }
          return separated(left4, right4);
        };
      };
      altW = function(that) {
        return function(fa) {
          return fa.concat(that());
        };
      };
      alt = altW;
      filterWithIndex = function(predicateWithIndex) {
        return function(as5) {
          return as5.filter(function(b, i) {
            return predicateWithIndex(i, b);
          });
        };
      };
      extend = function(f) {
        return function(wa) {
          return wa.map(function(_, i) {
            return f(wa.slice(i));
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
        return function(f) {
          return traverseWithIndexF(function(_, a) {
            return f(a);
          });
        };
      };
      sequence = function(F) {
        return function(ta) {
          return _reduce(ta, F.of(zero()), function(fas, fa) {
            return F.ap(F.map(fas, function(as5) {
              return function(a) {
                return pipe(as5, append3(a));
              };
            }), fa);
          });
        };
      };
      traverseWithIndex = function(F) {
        return function(f) {
          return reduceWithIndex3(F.of(zero()), function(i, fbs, a) {
            return F.ap(F.map(fbs, function(bs) {
              return function(b) {
                return pipe(bs, append3(b));
              };
            }), f(i, a));
          });
        };
      };
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
      unfold = function(b, f) {
        var out = [];
        var bb = b;
        while (true) {
          var mt = f(bb);
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
      URI2 = "Array";
      getShow3 = getShow2;
      getSemigroup3 = function() {
        return {
          concat: function(first2, second) {
            return first2.concat(second);
          }
        };
      };
      getMonoid3 = function() {
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
          concat: function(first2, second) {
            return unionE(second)(first2);
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
          concat: function(first2, second) {
            return intersectionE(second)(first2);
          }
        };
      };
      getDifferenceMagma = function(E) {
        var differenceE = difference(E);
        return {
          concat: function(first2, second) {
            return differenceE(second)(first2);
          }
        };
      };
      Functor = {
        URI: URI2,
        map: _map
      };
      flap2 = /* @__PURE__ */ flap(Functor);
      Pointed = {
        URI: URI2,
        of: of3
      };
      FunctorWithIndex = {
        URI: URI2,
        map: _map,
        mapWithIndex: _mapWithIndex
      };
      Apply = {
        URI: URI2,
        map: _map,
        ap: _ap
      };
      apFirst2 = /* @__PURE__ */ apFirst(Apply);
      apSecond2 = /* @__PURE__ */ apSecond(Apply);
      Applicative = {
        URI: URI2,
        map: _map,
        ap: _ap,
        of: of3
      };
      Chain = {
        URI: URI2,
        map: _map,
        ap: _ap,
        chain: flatMap
      };
      chainFirst2 = /* @__PURE__ */ chainFirst(Chain);
      Monad = {
        URI: URI2,
        map: _map,
        ap: _ap,
        of: of3,
        chain: flatMap
      };
      Unfoldable = {
        URI: URI2,
        unfold
      };
      Alt = {
        URI: URI2,
        map: _map,
        alt: _alt
      };
      Zero = {
        URI: URI2,
        zero
      };
      guard2 = /* @__PURE__ */ guard(Zero, Pointed);
      Alternative = {
        URI: URI2,
        map: _map,
        ap: _ap,
        of: of3,
        alt: _alt,
        zero
      };
      Extend = {
        URI: URI2,
        map: _map,
        extend: _extend
      };
      Compactable = {
        URI: URI2,
        compact,
        separate
      };
      Filterable = {
        URI: URI2,
        map: _map,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap
      };
      FilterableWithIndex = {
        URI: URI2,
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
        URI: URI2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      FoldableWithIndex = {
        URI: URI2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex
      };
      Traversable = {
        URI: URI2,
        map: _map,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence
      };
      TraversableWithIndex = {
        URI: URI2,
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
        URI: URI2,
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
        URI: URI2,
        map: _map,
        ap: _ap,
        chain: flatMap,
        chainRec: _chainRecDepthFirst2
      };
      chainRecBreadthFirst2 = chainRecBreadthFirst;
      ChainRecBreadthFirst = {
        URI: URI2,
        map: _map,
        ap: _ap,
        chain: flatMap,
        chainRec: _chainRecBreadthFirst2
      };
      filterE2 = /* @__PURE__ */ filterE(Witherable);
      FromEither = {
        URI: URI2,
        fromEither
      };
      fromEitherK2 = /* @__PURE__ */ fromEitherK(FromEither);
      unsafeInsertAt3 = unsafeInsertAt;
      unsafeUpdateAt4 = function(i, a, as5) {
        return isNonEmpty5(as5) ? unsafeUpdateAt2(i, a, as5) : [];
      };
      unsafeDeleteAt = function(i, as5) {
        var xs = as5.slice();
        xs.splice(i, 1);
        return xs;
      };
      every2 = every;
      some2 = function(predicate) {
        return function(as5) {
          return as5.some(predicate);
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
        URI: URI2,
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
    URI: () => URI3,
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
    getMonoid: () => getMonoid4,
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
  var none2, some3, getLeft, getRight, _map2, _ap2, _reduce2, _foldMap2, _reduceRight2, _traverse2, _alt2, _filter2, _filterMap2, _extend2, _partition2, _partitionMap2, URI3, getShow4, getEq4, getOrd3, getMonoid4, map2, Functor2, as2, asUnit2, of4, Pointed2, ap3, Apply2, Applicative2, flatMap2, Chain2, Monad2, reduce4, foldMap4, reduceRight4, Foldable2, orElse, altW2, alt2, Alt2, zero2, Zero2, guard3, Alternative2, extend2, Extend2, compact2, defaultSeparated, separate2, Compactable2, filter2, filterMap2, partition2, partitionMap2, Filterable2, traverse2, sequence2, Traversable2, _wither2, _wilt2, wither2, wilt2, Witherable2, throwError, MonadThrow, fromEither2, FromEither2, isSome2, isNone2, matchW3, foldW, match3, fold, getOrElseW, getOrElse, flap3, apFirst3, apSecond3, flatten2, tap2, tapEither2, duplicate2, fromEitherK3, chainEitherK2, chainFirstEitherK, fromNullable, tryCatch, tryCatchK, fromNullableK, chainNullableK, toNullable, toUndefined, exists2, Do2, bindTo3, let_3, bind3, apS3, ApT, traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyArrayWithIndex, traverseArrayWithIndex, traverseArray, sequenceArray, chain2, chainFirst3, mapNullable, option, getApplySemigroup2, getApplyMonoid, getFirstMonoid, getLastMonoid;
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
      _map2 = function(fa, f) {
        return pipe(fa, map2(f));
      };
      _ap2 = function(fab, fa) {
        return pipe(fab, ap3(fa));
      };
      _reduce2 = function(fa, b, f) {
        return pipe(fa, reduce4(b, f));
      };
      _foldMap2 = function(M) {
        var foldMapM = foldMap4(M);
        return function(fa, f) {
          return pipe(fa, foldMapM(f));
        };
      };
      _reduceRight2 = function(fa, b, f) {
        return pipe(fa, reduceRight4(b, f));
      };
      _traverse2 = function(F) {
        var traverseF = traverse2(F);
        return function(ta, f) {
          return pipe(ta, traverseF(f));
        };
      };
      _alt2 = function(fa, that) {
        return pipe(fa, alt2(that));
      };
      _filter2 = function(fa, predicate) {
        return pipe(fa, filter2(predicate));
      };
      _filterMap2 = function(fa, f) {
        return pipe(fa, filterMap2(f));
      };
      _extend2 = function(wa, f) {
        return pipe(wa, extend2(f));
      };
      _partition2 = function(fa, predicate) {
        return pipe(fa, partition2(predicate));
      };
      _partitionMap2 = function(fa, f) {
        return pipe(fa, partitionMap2(f));
      };
      URI3 = "Option";
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
      getOrd3 = function(O) {
        return {
          equals: getEq4(O).equals,
          compare: function(x, y) {
            return x === y ? 0 : isSome2(x) ? isSome2(y) ? O.compare(x.value, y.value) : 1 : -1;
          }
        };
      };
      getMonoid4 = function(S) {
        return {
          concat: function(x, y) {
            return isNone2(x) ? y : isNone2(y) ? x : some3(S.concat(x.value, y.value));
          },
          empty: none2
        };
      };
      map2 = function(f) {
        return function(fa) {
          return isNone2(fa) ? none2 : some3(f(fa.value));
        };
      };
      Functor2 = {
        URI: URI3,
        map: _map2
      };
      as2 = dual(2, as(Functor2));
      asUnit2 = asUnit(Functor2);
      of4 = some3;
      Pointed2 = {
        URI: URI3,
        of: of4
      };
      ap3 = function(fa) {
        return function(fab) {
          return isNone2(fab) ? none2 : isNone2(fa) ? none2 : some3(fab.value(fa.value));
        };
      };
      Apply2 = {
        URI: URI3,
        map: _map2,
        ap: _ap2
      };
      Applicative2 = {
        URI: URI3,
        map: _map2,
        ap: _ap2,
        of: of4
      };
      flatMap2 = /* @__PURE__ */ dual(2, function(ma, f) {
        return isNone2(ma) ? none2 : f(ma.value);
      });
      Chain2 = {
        URI: URI3,
        map: _map2,
        ap: _ap2,
        chain: flatMap2
      };
      Monad2 = {
        URI: URI3,
        map: _map2,
        ap: _ap2,
        of: of4,
        chain: flatMap2
      };
      reduce4 = function(b, f) {
        return function(fa) {
          return isNone2(fa) ? b : f(b, fa.value);
        };
      };
      foldMap4 = function(M) {
        return function(f) {
          return function(fa) {
            return isNone2(fa) ? M.empty : f(fa.value);
          };
        };
      };
      reduceRight4 = function(b, f) {
        return function(fa) {
          return isNone2(fa) ? b : f(fa.value, b);
        };
      };
      Foldable2 = {
        URI: URI3,
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
        URI: URI3,
        map: _map2,
        alt: _alt2
      };
      zero2 = function() {
        return none2;
      };
      Zero2 = {
        URI: URI3,
        zero: zero2
      };
      guard3 = /* @__PURE__ */ guard(Zero2, Pointed2);
      Alternative2 = {
        URI: URI3,
        map: _map2,
        ap: _ap2,
        of: of4,
        alt: _alt2,
        zero: zero2
      };
      extend2 = function(f) {
        return function(wa) {
          return isNone2(wa) ? none2 : some3(f(wa));
        };
      };
      Extend2 = {
        URI: URI3,
        map: _map2,
        extend: _extend2
      };
      compact2 = /* @__PURE__ */ flatMap2(identity);
      defaultSeparated = /* @__PURE__ */ separated(none2, none2);
      separate2 = function(ma) {
        return isNone2(ma) ? defaultSeparated : separated(getLeft(ma.value), getRight(ma.value));
      };
      Compactable2 = {
        URI: URI3,
        compact: compact2,
        separate: separate2
      };
      filter2 = function(predicate) {
        return function(fa) {
          return isNone2(fa) ? none2 : predicate(fa.value) ? fa : none2;
        };
      };
      filterMap2 = function(f) {
        return function(fa) {
          return isNone2(fa) ? none2 : f(fa.value);
        };
      };
      partition2 = function(predicate) {
        return function(fa) {
          return separated(_filter2(fa, not(predicate)), _filter2(fa, predicate));
        };
      };
      partitionMap2 = function(f) {
        return flow(map2(f), separate2);
      };
      Filterable2 = {
        URI: URI3,
        map: _map2,
        compact: compact2,
        separate: separate2,
        filter: _filter2,
        filterMap: _filterMap2,
        partition: _partition2,
        partitionMap: _partitionMap2
      };
      traverse2 = function(F) {
        return function(f) {
          return function(ta) {
            return isNone2(ta) ? F.of(none2) : F.map(f(ta.value), some3);
          };
        };
      };
      sequence2 = function(F) {
        return function(ta) {
          return isNone2(ta) ? F.of(none2) : F.map(ta.value, some3);
        };
      };
      Traversable2 = {
        URI: URI3,
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
        return function(f) {
          return function(fa) {
            return _witherF(fa, f);
          };
        };
      };
      wilt2 = function(F) {
        var _wiltF = _wilt2(F);
        return function(f) {
          return function(fa) {
            return _wiltF(fa, f);
          };
        };
      };
      Witherable2 = {
        URI: URI3,
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
        URI: URI3,
        map: _map2,
        ap: _ap2,
        of: of4,
        chain: flatMap2,
        throwError
      };
      fromEither2 = getRight;
      FromEither2 = {
        URI: URI3,
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
      tryCatch = function(f) {
        try {
          return some3(f());
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
          return isNone2(ma) ? none2 : fromNullable(f(ma.value));
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
      traverseReadonlyNonEmptyArrayWithIndex = function(f) {
        return function(as5) {
          var o = f(0, head(as5));
          if (isNone2(o)) {
            return none2;
          }
          var out = [o.value];
          for (var i = 1; i < as5.length; i++) {
            var o_1 = f(i, as5[i]);
            if (isNone2(o_1)) {
              return none2;
            }
            out.push(o_1.value);
          }
          return some3(out);
        };
      };
      traverseReadonlyArrayWithIndex = function(f) {
        var g = traverseReadonlyNonEmptyArrayWithIndex(f);
        return function(as5) {
          return isNonEmpty(as5) ? g(as5) : ApT;
        };
      };
      traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
      traverseArray = function(f) {
        return traverseReadonlyArrayWithIndex(function(_, a) {
          return f(a);
        });
      };
      sequenceArray = /* @__PURE__ */ traverseArray(identity);
      chain2 = flatMap2;
      chainFirst3 = tap2;
      mapNullable = chainNullableK;
      option = {
        URI: URI3,
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
        return getMonoid4(first());
      };
      getLastMonoid = function() {
        return getMonoid4(last());
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Const.js
  function getApply(S) {
    return {
      URI: URI4,
      _E: void 0,
      map: _map3,
      ap: function(fab, fa) {
        return make(S.concat(fab, fa));
      }
    };
  }
  function getApplicative(M) {
    var A = getApply(M);
    return {
      URI: URI4,
      _E: void 0,
      map: A.map,
      ap: A.ap,
      of: function() {
        return make(M.empty);
      }
    };
  }
  var make, _map3, map3, URI4;
  var init_Const = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Const.js"() {
      init_function();
      make = unsafeCoerce;
      _map3 = function(fa, f) {
        return pipe(fa, map3(f));
      };
      map3 = function() {
        return unsafeCoerce;
      };
      URI4 = "Const";
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Either.js
  var left2, right2, flatMap3, _map4, _ap3, URI5, map4, Functor3, as3, asUnit3, apW, ap4, Chain3, FromEither3, isLeft2, tap3, _FromEither;
  var init_Either = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Either.js"() {
      init_Chain();
      init_function();
      init_Functor();
      init_internal();
      left2 = left;
      right2 = right;
      flatMap3 = /* @__PURE__ */ dual(2, function(ma, f) {
        return isLeft2(ma) ? ma : f(ma.right);
      });
      _map4 = function(fa, f) {
        return pipe(fa, map4(f));
      };
      _ap3 = function(fab, fa) {
        return pipe(fab, ap4(fa));
      };
      URI5 = "Either";
      map4 = function(f) {
        return function(fa) {
          return isLeft2(fa) ? fa : right2(f(fa.right));
        };
      };
      Functor3 = {
        URI: URI5,
        map: _map4
      };
      as3 = dual(2, as(Functor3));
      asUnit3 = asUnit(Functor3);
      apW = function(fa) {
        return function(fab) {
          return isLeft2(fab) ? fab : isLeft2(fa) ? fa : right2(fab.right(fa.right));
        };
      };
      ap4 = apW;
      Chain3 = {
        URI: URI5,
        map: _map4,
        ap: _ap3,
        chain: flatMap3
      };
      FromEither3 = {
        URI: URI5,
        fromEither: identity
      };
      isLeft2 = isLeft;
      tap3 = /* @__PURE__ */ dual(2, tap(Chain3));
      _FromEither = {
        fromEither: FromEither3.fromEither
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js
  var getSemigroup4, getMonoid5;
  var init_Endomorphism = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Endomorphism.js"() {
      init_function();
      getSemigroup4 = function() {
        return {
          concat: function(first2, second) {
            return flow(first2, second);
          }
        };
      };
      getMonoid5 = function() {
        return {
          concat: getSemigroup4().concat,
          empty: identity
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromIO.js
  function fromIOK(F) {
    return function(f) {
      return flow(f, F.fromIO);
    };
  }
  function tapIO(F, M) {
    var chainFirstM = tap(M);
    return function(self, f) {
      return chainFirstM(self, flow(f, F.fromIO));
    };
  }
  var init_FromIO = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/FromIO.js"() {
      init_Chain();
      init_function();
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

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/pipeable.js
  var pipe2;
  var init_pipeable = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/pipeable.js"() {
      init_function();
      pipe2 = pipe;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Task.js
  var Task_exports = {};
  __export(Task_exports, {
    ApT: () => ApT2,
    ApplicativePar: () => ApplicativePar,
    ApplicativeSeq: () => ApplicativeSeq,
    ApplyPar: () => ApplyPar,
    ApplySeq: () => ApplySeq,
    Chain: () => Chain4,
    Do: () => Do3,
    FromIO: () => FromIO,
    FromTask: () => FromTask,
    Functor: () => Functor4,
    Monad: () => Monad3,
    MonadIO: () => MonadIO,
    MonadTask: () => MonadTask,
    Pointed: () => Pointed3,
    URI: () => URI6,
    ap: () => ap5,
    apFirst: () => apFirst4,
    apS: () => apS4,
    apSecond: () => apSecond4,
    as: () => as4,
    asUnit: () => asUnit4,
    bind: () => bind4,
    bindTo: () => bindTo4,
    chain: () => chain3,
    chainFirst: () => chainFirst4,
    chainFirstIOK: () => chainFirstIOK,
    chainIOK: () => chainIOK,
    delay: () => delay,
    flap: () => flap4,
    flatMap: () => flatMap4,
    flatMapIO: () => flatMapIO2,
    flatten: () => flatten3,
    fromIO: () => fromIO,
    fromIOK: () => fromIOK2,
    fromTask: () => fromTask,
    getMonoid: () => getMonoid6,
    getRaceMonoid: () => getRaceMonoid,
    getSemigroup: () => getSemigroup5,
    let: () => let_4,
    map: () => map5,
    never: () => never,
    of: () => of5,
    sequenceArray: () => sequenceArray2,
    sequenceSeqArray: () => sequenceSeqArray,
    tap: () => tap4,
    tapIO: () => tapIO2,
    task: () => task,
    taskSeq: () => taskSeq,
    traverseArray: () => traverseArray2,
    traverseArrayWithIndex: () => traverseArrayWithIndex2,
    traverseReadonlyArrayWithIndex: () => traverseReadonlyArrayWithIndex2,
    traverseReadonlyArrayWithIndexSeq: () => traverseReadonlyArrayWithIndexSeq,
    traverseReadonlyNonEmptyArrayWithIndex: () => traverseReadonlyNonEmptyArrayWithIndex2,
    traverseReadonlyNonEmptyArrayWithIndexSeq: () => traverseReadonlyNonEmptyArrayWithIndexSeq,
    traverseSeqArray: () => traverseSeqArray,
    traverseSeqArrayWithIndex: () => traverseSeqArrayWithIndex
  });
  function delay(millis) {
    return function(ma) {
      return function() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            Promise.resolve().then(ma).then(resolve);
          }, millis);
        });
      };
    };
  }
  function getRaceMonoid() {
    return {
      concat: function(x, y) {
        return function() {
          return Promise.race([Promise.resolve().then(x), Promise.resolve().then(y)]);
        };
      },
      empty: never
    };
  }
  var fromIO, _map5, _apPar, _apSeq, map5, ap5, of5, flatMap4, flatten3, URI6, Functor4, as4, asUnit4, flap4, Pointed3, ApplyPar, apFirst4, apSecond4, ApplicativePar, ApplySeq, ApplicativeSeq, Chain4, Monad3, MonadIO, fromTask, MonadTask, FromIO, _FlatMap, _FromIO, flatMapIO2, tap4, tapIO2, fromIOK2, chainIOK, chainFirstIOK, FromTask, never, Do3, bindTo4, let_4, bind4, apS4, ApT2, traverseReadonlyNonEmptyArrayWithIndex2, traverseReadonlyArrayWithIndex2, traverseReadonlyNonEmptyArrayWithIndexSeq, traverseReadonlyArrayWithIndexSeq, traverseArrayWithIndex2, traverseArray2, sequenceArray2, traverseSeqArrayWithIndex, traverseSeqArray, sequenceSeqArray, chain3, chainFirst4, task, taskSeq, getSemigroup5, getMonoid6;
  var init_Task = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Task.js"() {
      init_Applicative();
      init_Apply();
      init_Chain();
      init_FromIO();
      init_function();
      init_Functor();
      init_internal();
      fromIO = function(ma) {
        return function() {
          return Promise.resolve().then(ma);
        };
      };
      _map5 = function(fa, f) {
        return pipe(fa, map5(f));
      };
      _apPar = function(fab, fa) {
        return pipe(fab, ap5(fa));
      };
      _apSeq = function(fab, fa) {
        return flatMap4(fab, function(f) {
          return pipe(fa, map5(f));
        });
      };
      map5 = function(f) {
        return function(fa) {
          return function() {
            return Promise.resolve().then(fa).then(f);
          };
        };
      };
      ap5 = function(fa) {
        return function(fab) {
          return function() {
            return Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(function(_a) {
              var f = _a[0], a = _a[1];
              return f(a);
            });
          };
        };
      };
      of5 = function(a) {
        return function() {
          return Promise.resolve(a);
        };
      };
      flatMap4 = /* @__PURE__ */ dual(2, function(ma, f) {
        return function() {
          return Promise.resolve().then(ma).then(function(a) {
            return f(a)();
          });
        };
      });
      flatten3 = /* @__PURE__ */ flatMap4(identity);
      URI6 = "Task";
      Functor4 = {
        URI: URI6,
        map: _map5
      };
      as4 = dual(2, as(Functor4));
      asUnit4 = asUnit(Functor4);
      flap4 = /* @__PURE__ */ flap(Functor4);
      Pointed3 = {
        URI: URI6,
        of: of5
      };
      ApplyPar = {
        URI: URI6,
        map: _map5,
        ap: _apPar
      };
      apFirst4 = /* @__PURE__ */ apFirst(ApplyPar);
      apSecond4 = /* @__PURE__ */ apSecond(ApplyPar);
      ApplicativePar = {
        URI: URI6,
        map: _map5,
        ap: _apPar,
        of: of5
      };
      ApplySeq = {
        URI: URI6,
        map: _map5,
        ap: _apSeq
      };
      ApplicativeSeq = {
        URI: URI6,
        map: _map5,
        ap: _apSeq,
        of: of5
      };
      Chain4 = {
        URI: URI6,
        map: _map5,
        ap: _apPar,
        chain: flatMap4
      };
      Monad3 = {
        URI: URI6,
        map: _map5,
        of: of5,
        ap: _apPar,
        chain: flatMap4
      };
      MonadIO = {
        URI: URI6,
        map: _map5,
        of: of5,
        ap: _apPar,
        chain: flatMap4,
        fromIO
      };
      fromTask = identity;
      MonadTask = {
        URI: URI6,
        map: _map5,
        of: of5,
        ap: _apPar,
        chain: flatMap4,
        fromIO,
        fromTask
      };
      FromIO = {
        URI: URI6,
        fromIO
      };
      _FlatMap = {
        flatMap: flatMap4
      };
      _FromIO = {
        fromIO: FromIO.fromIO
      };
      flatMapIO2 = flatMapIO(_FromIO, _FlatMap);
      tap4 = /* @__PURE__ */ dual(2, tap(Chain4));
      tapIO2 = /* @__PURE__ */ dual(2, tapIO(FromIO, Chain4));
      fromIOK2 = /* @__PURE__ */ fromIOK(FromIO);
      chainIOK = flatMapIO2;
      chainFirstIOK = tapIO2;
      FromTask = {
        URI: URI6,
        fromIO,
        fromTask
      };
      never = function() {
        return new Promise(function(_) {
          return void 0;
        });
      };
      Do3 = /* @__PURE__ */ of5(emptyRecord);
      bindTo4 = /* @__PURE__ */ bindTo(Functor4);
      let_4 = /* @__PURE__ */ let_(Functor4);
      bind4 = /* @__PURE__ */ bind(Chain4);
      apS4 = /* @__PURE__ */ apS(ApplyPar);
      ApT2 = /* @__PURE__ */ of5(emptyReadonlyArray);
      traverseReadonlyNonEmptyArrayWithIndex2 = function(f) {
        return function(as5) {
          return function() {
            return Promise.all(as5.map(function(a, i) {
              return Promise.resolve().then(function() {
                return f(i, a)();
              });
            }));
          };
        };
      };
      traverseReadonlyArrayWithIndex2 = function(f) {
        var g = traverseReadonlyNonEmptyArrayWithIndex2(f);
        return function(as5) {
          return isNonEmpty(as5) ? g(as5) : ApT2;
        };
      };
      traverseReadonlyNonEmptyArrayWithIndexSeq = function(f) {
        return function(as5) {
          return function() {
            return tail(as5).reduce(function(acc, a, i) {
              return acc.then(function(bs) {
                return Promise.resolve().then(f(i + 1, a)).then(function(b) {
                  bs.push(b);
                  return bs;
                });
              });
            }, Promise.resolve().then(f(0, head(as5))).then(singleton));
          };
        };
      };
      traverseReadonlyArrayWithIndexSeq = function(f) {
        var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f);
        return function(as5) {
          return isNonEmpty(as5) ? g(as5) : ApT2;
        };
      };
      traverseArrayWithIndex2 = traverseReadonlyArrayWithIndex2;
      traverseArray2 = function(f) {
        return traverseReadonlyArrayWithIndex2(function(_, a) {
          return f(a);
        });
      };
      sequenceArray2 = /* @__PURE__ */ traverseArray2(identity);
      traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
      traverseSeqArray = function(f) {
        return traverseReadonlyArrayWithIndexSeq(function(_, a) {
          return f(a);
        });
      };
      sequenceSeqArray = /* @__PURE__ */ traverseSeqArray(identity);
      chain3 = flatMap4;
      chainFirst4 = tap4;
      task = {
        URI: URI6,
        map: _map5,
        of: of5,
        ap: _apPar,
        chain: flatMap4,
        fromIO,
        fromTask
      };
      taskSeq = {
        URI: URI6,
        map: _map5,
        of: of5,
        ap: _apSeq,
        chain: flatMap4,
        fromIO,
        fromTask
      };
      getSemigroup5 = /* @__PURE__ */ getApplySemigroup(ApplySeq);
      getMonoid6 = /* @__PURE__ */ getApplicativeMonoid(ApplicativeSeq);
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/string.js
  var Eq2, Semigroup, empty3, Monoid, Ord2, startsWith;
  var init_string = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/string.js"() {
      Eq2 = {
        equals: function(first2, second) {
          return first2 === second;
        }
      };
      Semigroup = {
        concat: function(first2, second) {
          return first2 + second;
        }
      };
      empty3 = "";
      Monoid = {
        concat: Semigroup.concat,
        empty: empty3
      };
      Ord2 = {
        equals: Eq2.equals,
        compare: function(first2, second) {
          return first2 < second ? -1 : first2 > second ? 1 : 0;
        }
      };
      startsWith = function(searchString, position) {
        return function(s) {
          return s.startsWith(searchString, position);
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyRecord.js
  function deleteAt2(k) {
    return function(r) {
      if (!has.call(r, k)) {
        return r;
      }
      var out = Object.assign({}, r);
      delete out[k];
      return out;
    };
  }
  function lookup3(k, r) {
    if (r === void 0) {
      return function(r2) {
        return lookup3(k, r2);
      };
    }
    return has.call(r, k) ? some(r[k]) : none;
  }
  function mapWithIndex2(f) {
    return function(r) {
      var out = {};
      for (var k in r) {
        if (has.call(r, k)) {
          out[k] = f(k, r[k]);
        }
      }
      return out;
    };
  }
  var isEmpty2, upsertAt, has2, union4, insertAt2;
  var init_ReadonlyRecord = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/ReadonlyRecord.js"() {
      init_internal();
      isEmpty2 = function(r) {
        for (var k in r) {
          if (has.call(r, k)) {
            return false;
          }
        }
        return true;
      };
      upsertAt = function(k, a) {
        return function(r) {
          if (has.call(r, k) && r[k] === a) {
            return r;
          }
          var out = Object.assign({}, r);
          out[k] = a;
          return out;
        };
      };
      has2 = function(k, r) {
        return has.call(r, k);
      };
      union4 = function(M) {
        return function(second) {
          return function(first2) {
            if (isEmpty2(first2)) {
              return second;
            }
            if (isEmpty2(second)) {
              return first2;
            }
            var out = {};
            for (var k in first2) {
              if (has2(k, second)) {
                out[k] = M.concat(first2[k], second[k]);
              } else {
                out[k] = first2[k];
              }
            }
            for (var k in second) {
              if (!has2(k, out)) {
                out[k] = second[k];
              }
            }
            return out;
          };
        };
      };
      insertAt2 = upsertAt;
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js
  var __assign, isEmpty3, lookup4, mapWithIndex3, union5, getUnionSemigroup2;
  var init_Record = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/Record.js"() {
      init_ReadonlyRecord();
      __assign = function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      isEmpty3 = isEmpty2;
      lookup4 = lookup3;
      mapWithIndex3 = mapWithIndex2;
      union5 = function(M) {
        var unionM = union4(M);
        return function(second) {
          return function(first2) {
            if (isEmpty3(first2)) {
              return __assign({}, second);
            }
            if (isEmpty3(second)) {
              return __assign({}, first2);
            }
            return unionM(second)(first2);
          };
        };
      };
      getUnionSemigroup2 = function(S) {
        var unionS = union5(S);
        return {
          concat: function(first2, second) {
            return unionS(second)(first2);
          }
        };
      };
    }
  });

  // .yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js
  var init_es6 = __esm({
    ".yarn/cache/fp-ts-npm-2.16.1-8deb3ec2d6-94e8bb1d03.zip/node_modules/fp-ts/es6/index.js"() {
      init_Array();
      init_HKT();
      init_number();
      init_Option();
      init_Ord();
      init_Task();
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-24b2164d27/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js
  var URI7, map7, Functor5, of6, ap6, Applicative3, apFirst5, apSecond5, chain4, Monad4, Do4, bindTo5, bind5, apS5, let_5, unary, guard4, unless, when, invoke, invokeNullary, curry2T, curry2, curry3T, curry3, curry4T, curry4, curry5T, curry5, applyEvery;
  var init_Function = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-24b2164d27/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Function.js"() {
      init_Option();
      init_Array();
      init_function();
      init_Predicate();
      init_Endomorphism();
      init_Monoid();
      init_Semigroup();
      init_Functor();
      init_Apply();
      init_Chain();
      URI7 = "Function";
      map7 = (f) => (g) => flow(g, f);
      Functor5 = {
        URI: URI7,
        map: (f, g) => map7(g)(f)
      };
      of6 = constant;
      ap6 = (f) => (g) => (x) => g(x)(f(x));
      Applicative3 = __spreadProps(__spreadValues({}, Functor5), {
        of: of6,
        ap: (f, g) => ap6(g)(f)
      });
      apFirst5 = apFirst(Applicative3);
      apSecond5 = apSecond(Applicative3);
      chain4 = (f) => (g) => (x) => f(g(x))(x);
      Monad4 = __spreadProps(__spreadValues({}, Applicative3), {
        chain: (f, g) => chain4(g)(f)
      });
      Do4 = of6({});
      bindTo5 = bindTo(Functor5);
      bind5 = bind(Monad4);
      apS5 = apS(Applicative3);
      let_5 = let_(Functor5);
      unary = tupled;
      guard4 = (branches) => (fallback) => (input) => pipe(branches, map(([f, g]) => flow(fromPredicate2(f), map2(g))), concatAll4(getMonoid(getMonoid4(first()))()), apply(input), getOrElse(() => fallback(input)));
      unless = (f) => (onFalse) => (x) => f(x) ? x : onFalse(x);
      when = flow(not, unless);
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
      applyEvery = concatAll4(getMonoid5());
    }
  });

  // .yarn/__virtual__/fp-ts-std-virtual-24b2164d27/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Record.js
  var values;
  var init_Record2 = __esm({
    ".yarn/__virtual__/fp-ts-std-virtual-24b2164d27/0/cache/fp-ts-std-npm-0.17.1-8c0fa4fe44-c9e2cba727.zip/node_modules/fp-ts-std/dist/esm/Record.js"() {
      values = Object.values;
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/internal.js
  function traversalComposeTraversal(ab) {
    return function(sa) {
      return traversal(function(F) {
        return function(f) {
          return sa.modifyF(F)(ab.modifyF(F)(f));
        };
      });
    };
  }
  function fromTraversable(T) {
    return function() {
      return traversal(function(F) {
        var traverseF = isIdentity(F) ? T.map : T.traverse(F);
        return function(f) {
          return function(s) {
            return traverseF(s, f);
          };
        };
      });
    };
  }
  function traversalTraverse(T) {
    return traversalComposeTraversal(fromTraversable(T)());
  }
  function atReadonlyRecord() {
    return at(function(key2) {
      return lens(function(r) {
        return lookup3(key2, r);
      }, fold(function() {
        return deleteAt2(key2);
      }, function(a) {
        return insertAt2(key2, a);
      }));
    });
  }
  var __spreadArray6, iso, isoAsLens, isoAsPrism, isoAsOptional, isoAsTraversal, lens, lensAsOptional, lensAsTraversal, lensComposeLens, prismComposePrism, lensComposePrism, lensId, lensProp, lensProps, lensComponent, lensAtKey, prism, prismAsOptional, prismAsTraversal, prismModifyOption, prismModify, prismSet, prismComposeLens, prismFromNullable, prismFromPredicate, prismSome, prismRight, prismLeft, optional, optionalAsTraversal, optionalModifyOption, optionalModify, optionalComposeOptional, optionalIndex, optionalIndexNonEmpty, optionalKey, optionalFindFirst, unsafeUpdateAt5, optionalFindFirstNonEmpty, traversal, ApplicativeIdentity, isIdentity, index, indexReadonlyArray, indexReadonlyNonEmptyArray, indexReadonlyRecord, at;
  var init_internal2 = __esm({
    ".yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/internal.js"() {
      init_ReadonlyArray();
      init_ReadonlyRecord();
      init_function();
      init_Option();
      init_Either();
      init_pipeable();
      __spreadArray6 = function(to, from, pack) {
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
      iso = function(get, reverseGet) {
        return {
          get,
          reverseGet
        };
      };
      isoAsLens = function(sa) {
        return lens(sa.get, flow(sa.reverseGet, constant));
      };
      isoAsPrism = function(sa) {
        return prism(flow(sa.get, some3), sa.reverseGet);
      };
      isoAsOptional = function(sa) {
        return optional(flow(sa.get, some3), flow(sa.reverseGet, constant));
      };
      isoAsTraversal = function(sa) {
        return traversal(function(F) {
          return function(f) {
            return function(s) {
              return F.map(f(sa.get(s)), function(a) {
                return sa.reverseGet(a);
              });
            };
          };
        });
      };
      lens = function(get, set2) {
        return { get, set: set2 };
      };
      lensAsOptional = function(sa) {
        return optional(flow(sa.get, some3), sa.set);
      };
      lensAsTraversal = function(sa) {
        return traversal(function(F) {
          return function(f) {
            return function(s) {
              return F.map(f(sa.get(s)), function(a) {
                return sa.set(a)(s);
              });
            };
          };
        });
      };
      lensComposeLens = function(ab) {
        return function(sa) {
          return lens(function(s) {
            return ab.get(sa.get(s));
          }, function(b) {
            return function(s) {
              return sa.set(ab.set(b)(sa.get(s)))(s);
            };
          });
        };
      };
      prismComposePrism = function(ab) {
        return function(sa) {
          return prism(flow(sa.getOption, chain2(ab.getOption)), flow(ab.reverseGet, sa.reverseGet));
        };
      };
      lensComposePrism = function(ab) {
        return function(sa) {
          return optionalComposeOptional(prismAsOptional(ab))(lensAsOptional(sa));
        };
      };
      lensId = function() {
        return lens(identity, constant);
      };
      lensProp = function(prop2) {
        return function(sa) {
          return lens(function(s) {
            return sa.get(s)[prop2];
          }, function(ap7) {
            return function(s) {
              var _a;
              var oa = sa.get(s);
              if (ap7 === oa[prop2]) {
                return s;
              }
              return sa.set(Object.assign({}, oa, (_a = {}, _a[prop2] = ap7, _a)))(s);
            };
          });
        };
      };
      lensProps = function() {
        var props2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          props2[_i] = arguments[_i];
        }
        return function(sa) {
          return lens(function(s) {
            var a = sa.get(s);
            var r = {};
            for (var _i2 = 0, props_1 = props2; _i2 < props_1.length; _i2++) {
              var k = props_1[_i2];
              r[k] = a[k];
            }
            return r;
          }, function(a) {
            return function(s) {
              var oa = sa.get(s);
              for (var _i2 = 0, props_2 = props2; _i2 < props_2.length; _i2++) {
                var k = props_2[_i2];
                if (a[k] !== oa[k]) {
                  return sa.set(Object.assign({}, oa, a))(s);
                }
              }
              return s;
            };
          });
        };
      };
      lensComponent = function(prop2) {
        return function(sa) {
          return lens(function(s) {
            return sa.get(s)[prop2];
          }, function(ap7) {
            return function(s) {
              var oa = sa.get(s);
              if (ap7 === oa[prop2]) {
                return s;
              }
              var copy3 = oa.slice();
              copy3[prop2] = ap7;
              return sa.set(copy3)(s);
            };
          });
        };
      };
      lensAtKey = function(key2) {
        return function(sa) {
          return pipe2(sa, lensComposeLens(atReadonlyRecord().at(key2)));
        };
      };
      prism = function(getOption, reverseGet) {
        return { getOption, reverseGet };
      };
      prismAsOptional = function(sa) {
        return optional(sa.getOption, function(a) {
          return prismSet(a)(sa);
        });
      };
      prismAsTraversal = function(sa) {
        return traversal(function(F) {
          return function(f) {
            return function(s) {
              return pipe2(sa.getOption(s), fold(function() {
                return F.of(s);
              }, function(a) {
                return F.map(f(a), function(a2) {
                  return prismSet(a2)(sa)(s);
                });
              }));
            };
          };
        });
      };
      prismModifyOption = function(f) {
        return function(sa) {
          return function(s) {
            return pipe2(sa.getOption(s), map2(function(o) {
              var n = f(o);
              return n === o ? s : sa.reverseGet(n);
            }));
          };
        };
      };
      prismModify = function(f) {
        return function(sa) {
          var g = prismModifyOption(f)(sa);
          return function(s) {
            return pipe2(g(s), getOrElse(function() {
              return s;
            }));
          };
        };
      };
      prismSet = function(a) {
        return prismModify(function() {
          return a;
        });
      };
      prismComposeLens = function(ab) {
        return function(sa) {
          return optionalComposeOptional(lensAsOptional(ab))(prismAsOptional(sa));
        };
      };
      prismFromNullable = function() {
        return prism(fromNullable, identity);
      };
      prismFromPredicate = function(predicate) {
        return prism(fromPredicate2(predicate), identity);
      };
      prismSome = function() {
        return prism(identity, some3);
      };
      prismRight = function() {
        return prism(fromEither2, right2);
      };
      prismLeft = function() {
        return prism(
          function(s) {
            return isLeft2(s) ? some3(s.left) : none2;
          },
          left2
        );
      };
      optional = function(getOption, set2) {
        return {
          getOption,
          set: set2
        };
      };
      optionalAsTraversal = function(sa) {
        return traversal(function(F) {
          return function(f) {
            return function(s) {
              return pipe2(sa.getOption(s), fold(function() {
                return F.of(s);
              }, function(a) {
                return F.map(f(a), function(a2) {
                  return sa.set(a2)(s);
                });
              }));
            };
          };
        });
      };
      optionalModifyOption = function(f) {
        return function(optional3) {
          return function(s) {
            return pipe2(optional3.getOption(s), map2(function(a) {
              var n = f(a);
              return n === a ? s : optional3.set(n)(s);
            }));
          };
        };
      };
      optionalModify = function(f) {
        return function(optional3) {
          var g = optionalModifyOption(f)(optional3);
          return function(s) {
            return pipe2(g(s), getOrElse(function() {
              return s;
            }));
          };
        };
      };
      optionalComposeOptional = function(ab) {
        return function(sa) {
          return optional(flow(sa.getOption, chain2(ab.getOption)), function(b) {
            return optionalModify(ab.set(b))(sa);
          });
        };
      };
      optionalIndex = function(i) {
        return function(sa) {
          return pipe2(sa, optionalComposeOptional(indexReadonlyArray().index(i)));
        };
      };
      optionalIndexNonEmpty = function(i) {
        return function(sa) {
          return pipe2(sa, optionalComposeOptional(indexReadonlyNonEmptyArray().index(i)));
        };
      };
      optionalKey = function(key2) {
        return function(sa) {
          return pipe2(sa, optionalComposeOptional(indexReadonlyRecord().index(key2)));
        };
      };
      optionalFindFirst = function(predicate) {
        return optional(findFirst(predicate), function(a) {
          return function(s) {
            return pipe2(findIndex(predicate)(s), fold(function() {
              return s;
            }, function(i) {
              return unsafeUpdateAt3(i, a, s);
            }));
          };
        });
      };
      unsafeUpdateAt5 = function(i, a, as5) {
        if (as5[i] === a) {
          return as5;
        } else {
          var xs = __spreadArray6([as5[0]], as5.slice(1), true);
          xs[i] = a;
          return xs;
        }
      };
      optionalFindFirstNonEmpty = function(predicate) {
        return optional(findFirst(predicate), function(a) {
          return function(as5) {
            return pipe2(findIndex(predicate)(as5), fold(function() {
              return as5;
            }, function(i) {
              return unsafeUpdateAt5(i, a, as5);
            }));
          };
        });
      };
      traversal = function(modifyF2) {
        return {
          modifyF: modifyF2
        };
      };
      ApplicativeIdentity = {
        URI: "Identity",
        map: function(fa, f) {
          return f(fa);
        },
        of: identity,
        ap: (
          /* istanbul ignore next */
          function(fab, fa) {
            return fab(fa);
          }
        )
      };
      isIdentity = function(F) {
        return F.URI === "Identity";
      };
      index = function(index4) {
        return { index: index4 };
      };
      indexReadonlyArray = function() {
        return index(function(i) {
          return optional(function(as5) {
            return lookup(i, as5);
          }, function(a) {
            return function(as5) {
              return pipe2(lookup(i, as5), fold(function() {
                return as5;
              }, function() {
                return unsafeUpdateAt3(i, a, as5);
              }));
            };
          });
        });
      };
      indexReadonlyNonEmptyArray = function() {
        return index(function(i) {
          return optional(function(as5) {
            return lookup(i, as5);
          }, function(a) {
            return function(as5) {
              return pipe2(lookup(i, as5), fold(function() {
                return as5;
              }, function() {
                return unsafeUpdateAt5(i, a, as5);
              }));
            };
          });
        });
      };
      indexReadonlyRecord = function() {
        return index(function(k) {
          return optional(function(r) {
            return lookup3(k, r);
          }, function(a) {
            return function(r) {
              if (r[k] === a || isNone2(lookup3(k, r))) {
                return r;
              }
              return insertAt2(k, a)(r);
            };
          });
        });
      };
      at = function(at3) {
        return { at: at3 };
      };
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/At.js
  var at2, fromIso;
  var init_At = __esm({
    ".yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/At.js"() {
      init_pipeable();
      init_internal2();
      at2 = at;
      fromIso = function(iso3) {
        return function(sia) {
          return at2(function(i) {
            return pipe2(iso3, isoAsLens, lensComposeLens(sia.at(i)));
          });
        };
      };
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Iso.js
  var iso2, id, asLens, asPrism, asOptional, asTraversal, compose, reverse5, modify, URI8, Semigroupoid, Category;
  var init_Iso = __esm({
    ".yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Iso.js"() {
      init_function();
      init_internal2();
      iso2 = iso;
      id = function() {
        return iso2(identity, identity);
      };
      asLens = isoAsLens;
      asPrism = isoAsPrism;
      asOptional = isoAsOptional;
      asTraversal = isoAsTraversal;
      compose = function(ab) {
        return function(sa) {
          return iso2(flow(sa.get, ab.get), flow(ab.reverseGet, sa.reverseGet));
        };
      };
      reverse5 = function(sa) {
        return iso2(sa.reverseGet, sa.get);
      };
      modify = function(f) {
        return function(sa) {
          return function(s) {
            return sa.reverseGet(f(sa.get(s)));
          };
        };
      };
      URI8 = "monocle-ts/Iso";
      Semigroupoid = {
        URI: URI8,
        compose: function(ab, ea) {
          return compose(ab)(ea);
        }
      };
      Category = {
        URI: URI8,
        compose: Semigroupoid.compose,
        id
      };
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Ix.js
  var index2, fromAt, fromIso2;
  var init_Ix = __esm({
    ".yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Ix.js"() {
      init_pipeable();
      init_internal2();
      index2 = index;
      fromAt = function(at3) {
        return index2(function(i) {
          return lensComposePrism(prismSome())(at3.at(i));
        });
      };
      fromIso2 = function(iso3) {
        return function(sia) {
          return index2(function(i) {
            return pipe2(iso3, isoAsOptional, optionalComposeOptional(sia.index(i)));
          });
        };
      };
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Lens.js
  var Lens_exports = {};
  __export(Lens_exports, {
    Category: () => Category2,
    Invariant: () => Invariant,
    Semigroupoid: () => Semigroupoid2,
    URI: () => URI9,
    asOptional: () => asOptional2,
    asTraversal: () => asTraversal2,
    atKey: () => atKey,
    component: () => component,
    compose: () => compose2,
    composeIso: () => composeIso,
    composeLens: () => composeLens,
    composeOptional: () => composeOptional,
    composePrism: () => composePrism,
    composeTraversal: () => composeTraversal,
    filter: () => filter4,
    findFirst: () => findFirst3,
    findFirstNonEmpty: () => findFirstNonEmpty,
    fromNullable: () => fromNullable2,
    id: () => id2,
    imap: () => imap,
    index: () => index3,
    indexNonEmpty: () => indexNonEmpty,
    key: () => key,
    left: () => left3,
    lens: () => lens2,
    modify: () => modify2,
    modifyF: () => modifyF,
    prop: () => prop,
    props: () => props,
    right: () => right3,
    some: () => some5,
    traverse: () => traverse4
  });
  function modifyF(F) {
    return function(f) {
      return function(sa) {
        return function(s) {
          return pipe2(sa.get(s), f, function(fa) {
            return F.map(fa, function(a) {
              return sa.set(a)(s);
            });
          });
        };
      };
    };
  }
  function filter4(predicate) {
    return composePrism(prismFromPredicate(predicate));
  }
  function traverse4(T) {
    return flow(asTraversal2, traversalTraverse(T));
  }
  function findFirst3(predicate) {
    return composeOptional(optionalFindFirst(predicate));
  }
  function findFirstNonEmpty(predicate) {
    return composeOptional(optionalFindFirstNonEmpty(predicate));
  }
  var lens2, id2, asOptional2, asTraversal2, compose2, composeLens, composeIso, composePrism, composeOptional, composeTraversal, modify2, fromNullable2, prop, props, component, index3, indexNonEmpty, key, atKey, some5, right3, left3, imap, imap_, URI9, Invariant, Semigroupoid2, Category2;
  var init_Lens = __esm({
    ".yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Lens.js"() {
      init_function();
      init_pipeable();
      init_internal2();
      lens2 = lens;
      id2 = lensId;
      asOptional2 = lensAsOptional;
      asTraversal2 = lensAsTraversal;
      compose2 = lensComposeLens;
      composeLens = compose2;
      composeIso = /* @__PURE__ */ flow(isoAsLens, compose2);
      composePrism = lensComposePrism;
      composeOptional = function(ab) {
        return flow(asOptional2, optionalComposeOptional(ab));
      };
      composeTraversal = function(ab) {
        return flow(asTraversal2, traversalComposeTraversal(ab));
      };
      modify2 = function(f) {
        return function(sa) {
          return function(s) {
            var o = sa.get(s);
            var n = f(o);
            return o === n ? s : sa.set(n)(s);
          };
        };
      };
      fromNullable2 = function(sa) {
        return composePrism(prismFromNullable())(sa);
      };
      prop = lensProp;
      props = lensProps;
      component = lensComponent;
      index3 = function(i) {
        return flow(asOptional2, optionalIndex(i));
      };
      indexNonEmpty = function(i) {
        return flow(asOptional2, optionalIndexNonEmpty(i));
      };
      key = function(key2) {
        return flow(asOptional2, optionalKey(key2));
      };
      atKey = lensAtKey;
      some5 = /* @__PURE__ */ composePrism(/* @__PURE__ */ prismSome());
      right3 = /* @__PURE__ */ composePrism(/* @__PURE__ */ prismRight());
      left3 = /* @__PURE__ */ composePrism(/* @__PURE__ */ prismLeft());
      imap = function(f, g) {
        return function(ea) {
          return imap_(ea, f, g);
        };
      };
      imap_ = function(ea, ab, ba) {
        return lens2(flow(ea.get, ab), flow(ba, ea.set));
      };
      URI9 = "monocle-ts/Lens";
      Invariant = {
        URI: URI9,
        imap: imap_
      };
      Semigroupoid2 = {
        URI: URI9,
        compose: function(ab, ea) {
          return compose2(ab)(ea);
        }
      };
      Category2 = {
        URI: URI9,
        compose: Semigroupoid2.compose,
        id: id2
      };
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Optional.js
  var optional2, id3, asTraversal3, compose3, modifyOption, modify3, URI10, Semigroupoid3, Category3;
  var init_Optional = __esm({
    ".yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Optional.js"() {
      init_function();
      init_Option();
      init_internal2();
      optional2 = optional;
      id3 = function() {
        return optional2(some3, constant);
      };
      asTraversal3 = optionalAsTraversal;
      compose3 = optionalComposeOptional;
      modifyOption = optionalModifyOption;
      modify3 = optionalModify;
      URI10 = "monocle-ts/Optional";
      Semigroupoid3 = {
        URI: URI10,
        compose: function(ab, ea) {
          return compose3(ab)(ea);
        }
      };
      Category3 = {
        URI: URI10,
        compose: Semigroupoid3.compose,
        id: id3
      };
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Prism.js
  var prism2, id4, fromPredicate3, asOptional3, asTraversal4, compose4, composeLens2, URI11, Semigroupoid4, Category4;
  var init_Prism = __esm({
    ".yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Prism.js"() {
      init_function();
      init_Option();
      init_internal2();
      prism2 = prism;
      id4 = function() {
        return prism2(some3, identity);
      };
      fromPredicate3 = prismFromPredicate;
      asOptional3 = prismAsOptional;
      asTraversal4 = prismAsTraversal;
      compose4 = prismComposePrism;
      composeLens2 = prismComposeLens;
      URI11 = "monocle-ts/Prism";
      Semigroupoid4 = {
        URI: URI11,
        compose: function(ab, ea) {
          return compose4(ab)(ea);
        }
      };
      Category4 = {
        URI: URI11,
        compose: Semigroupoid4.compose,
        id: id4
      };
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Traversal.js
  function filter5(predicate) {
    return compose5(prismAsTraversal(prismFromPredicate(predicate)));
  }
  var traversal2, id5, compose5, modify4, set, URI12, Semigroupoid5, Category5;
  var init_Traversal = __esm({
    ".yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/Traversal.js"() {
      init_internal2();
      traversal2 = traversal;
      id5 = function() {
        return traversal2(function(_) {
          return function(f) {
            return f;
          };
        });
      };
      compose5 = traversalComposeTraversal;
      modify4 = function(f) {
        return function(sa) {
          return sa.modifyF(ApplicativeIdentity)(f);
        };
      };
      set = function(a) {
        return modify4(function() {
          return a;
        });
      };
      URI12 = "monocle-ts/Traversal";
      Semigroupoid5 = {
        URI: URI12,
        compose: function(ab, ea) {
          return compose5(ab)(ea);
        }
      };
      Category5 = {
        URI: URI12,
        compose: Semigroupoid5.compose,
        id: id5
      };
    }
  });

  // .yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/index.js
  var fromIso3, fromLens, fromPrism, fromOptional, fromTraversal, fromAt2, fromIndex, update, Iso, Lens, Prism, somePrism, Optional, Traversal, At, Index, Getter, Fold, Setter;
  var init_es62 = __esm({
    ".yarn/__virtual__/monocle-ts-virtual-2d134b7e62/0/cache/monocle-ts-npm-2.3.13-62cec035ff-dddfa5706f.zip/node_modules/monocle-ts/es6/index.js"() {
      init_Array();
      init_Const();
      init_function();
      init_Monoid();
      init_Option();
      init_pipeable();
      init_At();
      init_Iso();
      init_Ix();
      init_Lens();
      init_Optional();
      init_Prism();
      init_Traversal();
      fromIso3 = function(iso3) {
        return new Iso(iso3.get, iso3.reverseGet);
      };
      fromLens = function(lens3) {
        return new Lens(lens3.get, lens3.set);
      };
      fromPrism = function(prism3) {
        return new Prism(prism3.getOption, prism3.reverseGet);
      };
      fromOptional = function(optional3) {
        return new Optional(optional3.getOption, optional3.set);
      };
      fromTraversal = function(traversal3) {
        return new Traversal(traversal3.modifyF);
      };
      fromAt2 = function(at3) {
        return new At(function(i) {
          return fromLens(at3.at(i));
        });
      };
      fromIndex = function(ix) {
        return new Index(function(i) {
          return fromOptional(ix.index(i));
        });
      };
      update = function(o, k, a) {
        var _a;
        return a === o[k] ? o : Object.assign({}, o, (_a = {}, _a[k] = a, _a));
      };
      Iso = /** @class */
      function() {
        function Iso2(get, reverseGet) {
          this.get = get;
          this.reverseGet = reverseGet;
          this._tag = "Iso";
          this.unwrap = this.get;
          this.to = this.get;
          this.wrap = this.reverseGet;
          this.from = this.reverseGet;
        }
        Iso2.prototype.reverse = function() {
          return fromIso3(reverse5(this));
        };
        Iso2.prototype.modify = function(f) {
          return modify(f)(this);
        };
        Iso2.prototype.asLens = function() {
          return fromLens(asLens(this));
        };
        Iso2.prototype.asPrism = function() {
          return fromPrism(asPrism(this));
        };
        Iso2.prototype.asOptional = function() {
          return fromOptional(asOptional(this));
        };
        Iso2.prototype.asTraversal = function() {
          return fromTraversal(asTraversal(this));
        };
        Iso2.prototype.asFold = function() {
          var _this = this;
          return new Fold(function() {
            return function(f) {
              return function(s) {
                return f(_this.get(s));
              };
            };
          });
        };
        Iso2.prototype.asGetter = function() {
          var _this = this;
          return new Getter(function(s) {
            return _this.get(s);
          });
        };
        Iso2.prototype.asSetter = function() {
          var _this = this;
          return new Setter(function(f) {
            return _this.modify(f);
          });
        };
        Iso2.prototype.compose = function(ab) {
          return fromIso3(compose(ab)(this));
        };
        Iso2.prototype.composeIso = function(ab) {
          return this.compose(ab);
        };
        Iso2.prototype.composeLens = function(ab) {
          return fromLens(pipe2(this, asLens, compose2(ab)));
        };
        Iso2.prototype.composePrism = function(ab) {
          return fromPrism(pipe2(this, asPrism, compose4(ab)));
        };
        Iso2.prototype.composeOptional = function(ab) {
          return fromOptional(pipe2(this, asOptional, compose3(ab)));
        };
        Iso2.prototype.composeTraversal = function(ab) {
          return fromTraversal(pipe2(this, asTraversal, compose5(ab)));
        };
        Iso2.prototype.composeFold = function(ab) {
          return this.asFold().compose(ab);
        };
        Iso2.prototype.composeGetter = function(ab) {
          return this.asGetter().compose(ab);
        };
        Iso2.prototype.composeSetter = function(ab) {
          return this.asSetter().compose(ab);
        };
        return Iso2;
      }();
      Lens = /** @class */
      function() {
        function Lens2(get, set2) {
          this.get = get;
          this.set = set2;
          this._tag = "Lens";
        }
        Lens2.fromPath = function() {
          var fromProp = Lens2.fromProp();
          return function(path) {
            var lens3 = fromProp(path[0]);
            return path.slice(1).reduce(function(acc, prop2) {
              return acc.compose(fromProp(prop2));
            }, lens3);
          };
        };
        Lens2.fromProp = function() {
          return function(prop2) {
            return fromLens(pipe2(id2(), prop(prop2)));
          };
        };
        Lens2.fromProps = function() {
          return function(props2) {
            return fromLens(pipe2(id2(), props.apply(Lens_exports, props2)));
          };
        };
        Lens2.fromNullableProp = function() {
          return function(k, defaultValue) {
            return new Lens2(function(s) {
              var osk = fromNullable(s[k]);
              if (isNone2(osk)) {
                return defaultValue;
              } else {
                return osk.value;
              }
            }, function(a) {
              return function(s) {
                return update(s, k, a);
              };
            });
          };
        };
        Lens2.prototype.modify = function(f) {
          return modify2(f)(this);
        };
        Lens2.prototype.asOptional = function() {
          return fromOptional(asOptional2(this));
        };
        Lens2.prototype.asTraversal = function() {
          return fromTraversal(asTraversal2(this));
        };
        Lens2.prototype.asSetter = function() {
          var _this = this;
          return new Setter(function(f) {
            return _this.modify(f);
          });
        };
        Lens2.prototype.asGetter = function() {
          var _this = this;
          return new Getter(function(s) {
            return _this.get(s);
          });
        };
        Lens2.prototype.asFold = function() {
          var _this = this;
          return new Fold(function() {
            return function(f) {
              return function(s) {
                return f(_this.get(s));
              };
            };
          });
        };
        Lens2.prototype.compose = function(ab) {
          return fromLens(compose2(ab)(this));
        };
        Lens2.prototype.composeLens = function(ab) {
          return this.compose(ab);
        };
        Lens2.prototype.composeGetter = function(ab) {
          return this.asGetter().compose(ab);
        };
        Lens2.prototype.composeFold = function(ab) {
          return this.asFold().compose(ab);
        };
        Lens2.prototype.composeOptional = function(ab) {
          return fromOptional(pipe2(this, asOptional2, compose3(ab)));
        };
        Lens2.prototype.composeTraversal = function(ab) {
          return fromTraversal(pipe2(this, asTraversal2, compose5(ab)));
        };
        Lens2.prototype.composeSetter = function(ab) {
          return this.asSetter().compose(ab);
        };
        Lens2.prototype.composeIso = function(ab) {
          return fromLens(pipe2(this, compose2(pipe2(ab, asLens))));
        };
        Lens2.prototype.composePrism = function(ab) {
          return fromOptional(composePrism(ab)(this));
        };
        return Lens2;
      }();
      Prism = /** @class */
      function() {
        function Prism2(getOption, reverseGet) {
          this.getOption = getOption;
          this.reverseGet = reverseGet;
          this._tag = "Prism";
        }
        Prism2.fromPredicate = function(predicate) {
          return fromPrism(fromPredicate3(predicate));
        };
        Prism2.some = function() {
          return somePrism;
        };
        Prism2.prototype.modify = function(f) {
          var _this = this;
          return function(s) {
            var os = _this.modifyOption(f)(s);
            if (isNone2(os)) {
              return s;
            } else {
              return os.value;
            }
          };
        };
        Prism2.prototype.modifyOption = function(f) {
          var _this = this;
          return function(s) {
            return option.map(_this.getOption(s), function(v) {
              var n = f(v);
              return n === v ? s : _this.reverseGet(n);
            });
          };
        };
        Prism2.prototype.set = function(a) {
          return this.modify(function() {
            return a;
          });
        };
        Prism2.prototype.asOptional = function() {
          return fromOptional(asOptional3(this));
        };
        Prism2.prototype.asTraversal = function() {
          return fromTraversal(asTraversal4(this));
        };
        Prism2.prototype.asSetter = function() {
          var _this = this;
          return new Setter(function(f) {
            return _this.modify(f);
          });
        };
        Prism2.prototype.asFold = function() {
          var _this = this;
          return new Fold(function(M) {
            return function(f) {
              return function(s) {
                var oa = _this.getOption(s);
                return isNone2(oa) ? M.empty : f(oa.value);
              };
            };
          });
        };
        Prism2.prototype.compose = function(ab) {
          return fromPrism(compose4(ab)(this));
        };
        Prism2.prototype.composePrism = function(ab) {
          return this.compose(ab);
        };
        Prism2.prototype.composeOptional = function(ab) {
          return fromOptional(pipe2(this, asOptional3, compose3(ab)));
        };
        Prism2.prototype.composeTraversal = function(ab) {
          return fromTraversal(pipe2(this, asTraversal4, compose5(ab)));
        };
        Prism2.prototype.composeFold = function(ab) {
          return this.asFold().compose(ab);
        };
        Prism2.prototype.composeSetter = function(ab) {
          return this.asSetter().compose(ab);
        };
        Prism2.prototype.composeIso = function(ab) {
          return fromPrism(pipe2(this, compose4(pipe2(ab, asPrism))));
        };
        Prism2.prototype.composeLens = function(ab) {
          return fromOptional(composeLens2(ab)(this));
        };
        Prism2.prototype.composeGetter = function(ab) {
          return this.asFold().compose(ab.asFold());
        };
        return Prism2;
      }();
      somePrism = /* @__PURE__ */ new Prism(identity, some3);
      Optional = /** @class */
      function() {
        function Optional2(getOption, set2) {
          this.getOption = getOption;
          this.set = set2;
          this._tag = "Optional";
        }
        Optional2.fromPath = function() {
          var fromNullableProp = Optional2.fromNullableProp();
          return function(path) {
            var optional3 = fromNullableProp(path[0]);
            return path.slice(1).reduce(function(acc, prop2) {
              return acc.compose(fromNullableProp(prop2));
            }, optional3);
          };
        };
        Optional2.fromNullableProp = function() {
          return function(k) {
            return new Optional2(function(s) {
              return fromNullable(s[k]);
            }, function(a) {
              return function(s) {
                return s[k] == null ? s : update(s, k, a);
              };
            });
          };
        };
        Optional2.fromOptionProp = function() {
          var formProp = Lens.fromProp();
          return function(prop2) {
            return formProp(prop2).composePrism(somePrism);
          };
        };
        Optional2.prototype.modify = function(f) {
          return modify3(f)(this);
        };
        Optional2.prototype.modifyOption = function(f) {
          return modifyOption(f)(this);
        };
        Optional2.prototype.asTraversal = function() {
          return fromTraversal(asTraversal3(this));
        };
        Optional2.prototype.asFold = function() {
          var _this = this;
          return new Fold(function(M) {
            return function(f) {
              return function(s) {
                var oa = _this.getOption(s);
                return isNone2(oa) ? M.empty : f(oa.value);
              };
            };
          });
        };
        Optional2.prototype.asSetter = function() {
          var _this = this;
          return new Setter(function(f) {
            return _this.modify(f);
          });
        };
        Optional2.prototype.compose = function(ab) {
          return fromOptional(compose3(ab)(this));
        };
        Optional2.prototype.composeOptional = function(ab) {
          return this.compose(ab);
        };
        Optional2.prototype.composeTraversal = function(ab) {
          return fromTraversal(pipe2(this, asTraversal3, compose5(ab)));
        };
        Optional2.prototype.composeFold = function(ab) {
          return this.asFold().compose(ab);
        };
        Optional2.prototype.composeSetter = function(ab) {
          return this.asSetter().compose(ab);
        };
        Optional2.prototype.composeLens = function(ab) {
          return fromOptional(pipe2(this, compose3(pipe2(ab, asOptional2))));
        };
        Optional2.prototype.composePrism = function(ab) {
          return fromOptional(pipe2(this, compose3(pipe2(ab, asOptional3))));
        };
        Optional2.prototype.composeIso = function(ab) {
          return fromOptional(pipe2(this, compose3(pipe2(ab, asOptional))));
        };
        Optional2.prototype.composeGetter = function(ab) {
          return this.asFold().compose(ab.asFold());
        };
        return Optional2;
      }();
      Traversal = /** @class */
      function() {
        function Traversal2(modifyF2) {
          this.modifyF = modifyF2;
          this._tag = "Traversal";
        }
        Traversal2.prototype.modify = function(f) {
          return modify4(f)(this);
        };
        Traversal2.prototype.set = function(a) {
          return set(a)(this);
        };
        Traversal2.prototype.filter = function(predicate) {
          return fromTraversal(filter5(predicate)(this));
        };
        Traversal2.prototype.asFold = function() {
          var _this = this;
          return new Fold(function(M) {
            return function(f) {
              return _this.modifyF(getApplicative(M))(function(a) {
                return make(f(a));
              });
            };
          });
        };
        Traversal2.prototype.asSetter = function() {
          var _this = this;
          return new Setter(function(f) {
            return _this.modify(f);
          });
        };
        Traversal2.prototype.compose = function(ab) {
          return fromTraversal(compose5(ab)(this));
        };
        Traversal2.prototype.composeTraversal = function(ab) {
          return this.compose(ab);
        };
        Traversal2.prototype.composeFold = function(ab) {
          return this.asFold().compose(ab);
        };
        Traversal2.prototype.composeSetter = function(ab) {
          return this.asSetter().compose(ab);
        };
        Traversal2.prototype.composeOptional = function(ab) {
          return this.compose(ab.asTraversal());
        };
        Traversal2.prototype.composeLens = function(ab) {
          return fromTraversal(pipe2(this, compose5(pipe2(ab, asTraversal2))));
        };
        Traversal2.prototype.composePrism = function(ab) {
          return fromTraversal(pipe2(this, compose5(pipe2(ab, asTraversal4))));
        };
        Traversal2.prototype.composeIso = function(ab) {
          return fromTraversal(pipe2(this, compose5(pipe2(ab, asTraversal))));
        };
        Traversal2.prototype.composeGetter = function(ab) {
          return this.asFold().compose(ab.asFold());
        };
        return Traversal2;
      }();
      At = /** @class */
      function() {
        function At2(at3) {
          this.at = at3;
          this._tag = "At";
        }
        At2.prototype.fromIso = function(iso3) {
          return fromAt2(fromIso(iso3)(this));
        };
        return At2;
      }();
      Index = /** @class */
      function() {
        function Index2(index4) {
          this.index = index4;
          this._tag = "Index";
        }
        Index2.fromAt = function(at3) {
          return fromIndex(fromAt(at3));
        };
        Index2.prototype.fromIso = function(iso3) {
          return fromIndex(fromIso2(iso3)(this));
        };
        return Index2;
      }();
      Getter = /** @class */
      function() {
        function Getter2(get) {
          this.get = get;
          this._tag = "Getter";
        }
        Getter2.prototype.asFold = function() {
          var _this = this;
          return new Fold(function() {
            return function(f) {
              return function(s) {
                return f(_this.get(s));
              };
            };
          });
        };
        Getter2.prototype.compose = function(ab) {
          var _this = this;
          return new Getter2(function(s) {
            return ab.get(_this.get(s));
          });
        };
        Getter2.prototype.composeGetter = function(ab) {
          return this.compose(ab);
        };
        Getter2.prototype.composeFold = function(ab) {
          return this.asFold().compose(ab);
        };
        Getter2.prototype.composeLens = function(ab) {
          return this.compose(ab.asGetter());
        };
        Getter2.prototype.composeIso = function(ab) {
          return this.compose(ab.asGetter());
        };
        Getter2.prototype.composeTraversal = function(ab) {
          return this.asFold().compose(ab.asFold());
        };
        Getter2.prototype.composeOptional = function(ab) {
          return this.asFold().compose(ab.asFold());
        };
        Getter2.prototype.composePrism = function(ab) {
          return this.asFold().compose(ab.asFold());
        };
        return Getter2;
      }();
      Fold = /** @class */
      function() {
        function Fold2(foldMap6) {
          this.foldMap = foldMap6;
          this._tag = "Fold";
          this.getAll = foldMap6(getMonoid3())(of3);
          this.exist = foldMap6(monoidAny);
          this.all = foldMap6(monoidAll);
          this.foldMapFirst = foldMap6(getFirstMonoid());
        }
        Fold2.prototype.compose = function(ab) {
          var _this = this;
          return new Fold2(function(M) {
            return function(f) {
              return _this.foldMap(M)(ab.foldMap(M)(f));
            };
          });
        };
        Fold2.prototype.composeFold = function(ab) {
          return this.compose(ab);
        };
        Fold2.prototype.composeGetter = function(ab) {
          return this.compose(ab.asFold());
        };
        Fold2.prototype.composeTraversal = function(ab) {
          return this.compose(ab.asFold());
        };
        Fold2.prototype.composeOptional = function(ab) {
          return this.compose(ab.asFold());
        };
        Fold2.prototype.composeLens = function(ab) {
          return this.compose(ab.asFold());
        };
        Fold2.prototype.composePrism = function(ab) {
          return this.compose(ab.asFold());
        };
        Fold2.prototype.composeIso = function(ab) {
          return this.compose(ab.asFold());
        };
        Fold2.prototype.find = function(p) {
          return this.foldMapFirst(fromPredicate2(p));
        };
        Fold2.prototype.headOption = function(s) {
          return this.find(function() {
            return true;
          })(s);
        };
        return Fold2;
      }();
      Setter = /** @class */
      function() {
        function Setter2(modify5) {
          this.modify = modify5;
          this._tag = "Setter";
        }
        Setter2.prototype.set = function(a) {
          return this.modify(constant(a));
        };
        Setter2.prototype.compose = function(ab) {
          var _this = this;
          return new Setter2(function(f) {
            return _this.modify(ab.modify(f));
          });
        };
        Setter2.prototype.composeSetter = function(ab) {
          return this.compose(ab);
        };
        Setter2.prototype.composeTraversal = function(ab) {
          return this.compose(ab.asSetter());
        };
        Setter2.prototype.composeOptional = function(ab) {
          return this.compose(ab.asSetter());
        };
        Setter2.prototype.composeLens = function(ab) {
          return this.compose(ab.asSetter());
        };
        Setter2.prototype.composePrism = function(ab) {
          return this.compose(ab.asSetter());
        };
        Setter2.prototype.composeIso = function(ab) {
          return this.compose(ab.asSetter());
        };
        return Setter2;
      }();
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
          __publicField(this, "Field", (props2) => {
            var _a;
            const id6 = `${this.settingsId}.${props2.nameId}`;
            let defaultStateValue;
            if (props2.field.type === "button") {
              defaultStateValue = props2.field.value;
            } else {
              defaultStateValue = this.getFieldValue(props2.nameId);
            }
            if (props2.field.type === "hidden") {
              return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
            }
            const [value, setValueState] = (0, import_react.useState)(defaultStateValue);
            const setValue = (newValue) => {
              if (newValue !== void 0) {
                setValueState(newValue);
                this.setFieldValue(props2.nameId, newValue);
              }
            };
            return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
              "div",
              {
                className: "main-type-mesto",
                style: { color: "var(--spice-subtext)" }
              },
              /* @__PURE__ */ import_react.default.createElement("label", { className: settings_module_default.description, htmlFor: id6 }, props2.field.description || "")
            ), /* @__PURE__ */ import_react.default.createElement(
              "span",
              {
                className: ["x-settings-secondColumn", settings_module_default.inputWrapper].join(" ")
              },
              props2.field.type === "input" ? /* @__PURE__ */ import_react.default.createElement(
                "input",
                __spreadProps(__spreadValues({
                  className: "main-dropDown-dropDown",
                  id: id6,
                  dir: "ltr",
                  value,
                  type: props2.field.inputType || "text"
                }, props2.field.events), {
                  onChange: (e) => {
                    var _a2;
                    setValue(e.currentTarget.value);
                    const onChange = (_a2 = props2.field.events) == null ? void 0 : _a2.onChange;
                    if (onChange)
                      onChange(e);
                  }
                })
              ) : props2.field.type === "button" ? /* @__PURE__ */ import_react.default.createElement("span", { className: "" }, /* @__PURE__ */ import_react.default.createElement(
                "button",
                __spreadProps(__spreadValues({
                  id: id6,
                  className: (_a = this.buttonClassnames) != null ? _a : ""
                }, props2.field.events), {
                  onClick: (e) => {
                    var _a2;
                    setValue();
                    const onClick = (_a2 = props2.field.events) == null ? void 0 : _a2.onClick;
                    if (onClick)
                      onClick(e);
                  },
                  type: "button"
                }),
                value
              )) : props2.field.type === "toggle" ? /* @__PURE__ */ import_react.default.createElement("label", { className: "x-toggle-wrapper x-settings-secondColumn" }, /* @__PURE__ */ import_react.default.createElement(
                "input",
                __spreadProps(__spreadValues({
                  id: id6,
                  className: "x-toggle-input",
                  type: "checkbox",
                  checked: value
                }, props2.field.events), {
                  onClick: (e) => {
                    var _a2;
                    setValue(e.currentTarget.checked);
                    const onClick = (_a2 = props2.field.events) == null ? void 0 : _a2.onClick;
                    if (onClick)
                      onClick(e);
                  }
                })
              ), /* @__PURE__ */ import_react.default.createElement("span", { className: "x-toggle-indicatorWrapper" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "x-toggle-indicator" }))) : props2.field.type === "dropdown" ? /* @__PURE__ */ import_react.default.createElement(
                "select",
                __spreadProps(__spreadValues({
                  className: "main-dropDown-dropDown",
                  id: id6
                }, props2.field.events), {
                  onChange: (e) => {
                    var _a2;
                    setValue(
                      props2.field.options[e.currentTarget.selectedIndex]
                    );
                    const onChange = (_a2 = props2.field.events) == null ? void 0 : _a2.onChange;
                    if (onChange)
                      onChange(e);
                  }
                }),
                props2.field.options.map((option2, i) => {
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
      settings = new SettingsSection("Sort+", "sort-plus");
      settings.addToggle("ascending", "Ascending", false);
      settings.addToggle("artist", "Ascending", false);
      settings.addToggle("artistTopTracks", "Top Tracks", true);
      settings.addToggle("artistPopularReleases", "Popular Releases", false);
      settings.addToggle("artistSingles", "Singles", true);
      settings.addToggle("artistAlbums", "Albums", true);
      settings.addToggle("artistCompilations", "Compilations", true);
      settings.addToggle("artistLikedTracks", "Liked Tracks", false);
      settings.addInput("lastFmUsername", "Last.fm Username", "Delusoire");
      settings.addInput(
        "LFMApiKey",
        "Last.fm API Key",
        "44654ea047786d90338c17331a5f5d95"
      );
      settings.pushSettings();
      CONFIG = new Proxy(settings, {
        get: (target, prop2) => target.getFieldValue(prop2.toString())
      });
    }
  });

  // src/fp.tsx
  var objConcat2, objConcat, async;
  var init_fp = __esm({
    "src/fp.tsx"() {
      "use strict";
      init_Record();
      init_es6();
      objConcat2 = () => getUnionSemigroup2({ concat: (x, y) => x }).concat;
      objConcat = () => Array_exports.reduce({}, objConcat2());
      async = (f) => (fa) => __async(void 0, null, function* () {
        return f(yield fa);
      });
    }
  });

  // src/api.tsx
  var fetchAlbumGQL, fetchArtistGQL, fetchArtistLikedTracksSP, fetchPlaylistAPI, fetchTracksSpotAPI50, fetchTracksSpotAPI, fetchTrackLFMAPI;
  var init_api = __esm({
    "src/api.tsx"() {
      "use strict";
      init_Array();
      init_function();
      init_settings();
      init_Function();
      init_fp();
      fetchAlbumGQL = (uri, offset = 0, limit = 487) => __async(void 0, null, function* () {
        return (yield Spicetify.GraphQL.Request(
          Spicetify.GraphQL.Definitions.getAlbum,
          { uri, locale: Spicetify.Locale.getLocale(), offset, limit }
        )).data.albumUnion;
      });
      fetchArtistGQL = (uri) => __async(void 0, null, function* () {
        return (yield Spicetify.GraphQL.Request(
          Spicetify.GraphQL.Definitions.queryArtistOverview,
          {
            uri,
            locale: Spicetify.Locale.getLocale(),
            includePrerelease: true
          }
        )).data.artistUnion;
      });
      fetchArtistLikedTracksSP = (id6) => __async(void 0, null, function* () {
        return (yield Spicetify.CosmosAsync.get(
          `sp://core-collection/unstable/@/list/tracks/artist/${id6}`
        )).items;
      });
      fetchPlaylistAPI = (uri) => __async(void 0, null, function* () {
        return (yield Spicetify.Platform.PlaylistAPI.getContents(uri)).items;
      });
      fetchTracksSpotAPI50 = (ids) => __async(void 0, null, function* () {
        return (yield Spicetify.CosmosAsync.get(
          `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`
        )).tracks;
      });
      fetchTracksSpotAPI = flow(
        chunksOf3(50),
        map(fetchTracksSpotAPI50),
        (x) => Promise.all(x),
        async(flatten)
      );
      fetchTrackLFMAPI = (artist, trackName, lastFmUsername) => __async(void 0, null, function* () {
        return pipe(
          `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${CONFIG.LFMApiKey}&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(
            trackName
          )}&format=json&username=${encodeURIComponent(lastFmUsername)}`,
          fetch,
          async(invokeNullary("json"))
        );
      });
    }
  });

  // src/parse.tsx
  var parseTrackFromAlbum, parseTopTrackFromArtist, parseTrackFromArtistLikedTracksSP, parseTrackFromPlaylistAPI, parseTrackFromSpotifyAPI;
  var init_parse = __esm({
    "src/parse.tsx"() {
      "use strict";
      parseTrackFromAlbum = ({ track }) => ({
        albumName: void 0,
        // gets filled in later
        albumUri: void 0,
        // gets filled in later
        artistName: track.artists.items[0].profile.name,
        artistUri: track.artists.items[0].uri,
        durationMilis: track.duration.totalMilliseconds,
        name: track.name,
        playcount: Number(track.playcount),
        popularity: void 0,
        releaseDate: void 0,
        // gets filled in later
        uri: track.uri
      });
      parseTopTrackFromArtist = (track) => ({
        albumUri: track.albumOfTrack.uri,
        artistName: track.artists.items[0].profile.name,
        artistUri: track.artists.items[0].uri,
        durationMilis: track.duration.totalMilliseconds,
        name: track.name,
        playcount: Number(track.playcount),
        popularity: void 0,
        releaseDate: void 0,
        uri: track.uri
      });
      parseTrackFromArtistLikedTracksSP = (track) => ({
        albumName: track.album.name,
        albumUri: track.album.link,
        artistName: track.artists[0].name,
        artistUri: track.artists[0].link,
        durationMilis: track.length * 1e3,
        name: track.name,
        playcount: void 0,
        popularity: track.popularity,
        releaseDate: track.album.year,
        uri: track.link
      });
      parseTrackFromPlaylistAPI = (track) => ({
        albumName: track.album.name,
        albumUri: track.album.uri,
        artistName: track.artists[0].name,
        artistUri: track.artists[0].uri,
        durationMilis: track.duration.milliSeconds,
        name: track.name,
        playcount: void 0,
        popularity: void 0,
        releaseDate: void 0,
        uri: track.uri
      });
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
  var parseUri;
  var init_util = __esm({
    "src/util.tsx"() {
      "use strict";
      parseUri = (uri) => {
        var _a;
        return (_a = uri.match(
          new RegExp("^(?<type>spotify:(?:artist|track|album|playlist))(?:_v2)?:(?<id>[a-zA-Z0-9_]{22})")
        )) == null ? void 0 : _a.groups;
      };
    }
  });

  // src/app.tsx
  var app_exports = {};
  __export(app_exports, {
    SortBy: () => SortBy,
    SortProp: () => SortProp,
    default: () => app_default,
    fetchTracks: () => fetchTracks,
    getPlaylistTracks: () => getPlaylistTracks,
    populateTracks: () => populateTracks,
    sortByProp: () => sortByProp
  });
  function getArtistTracks(uri) {
    return __async(this, null, function* () {
      const parseTracksFromAggregates = flow(
        Array_exports.map(
          flow(
            Lens.fromPath()(["releases", "items", 0, "uri"]).get,
            getAlbumTracks
          )
        ),
        (x) => Promise.all(x),
        async(Array_exports.flatten)
      );
      const disc = (yield fetchArtistGQL(uri)).discography;
      const artistTopTracks = disc.topTracks.items;
      const artistPopularReleases = disc.popularReleasesAlbums.items;
      const artistAlbums = disc.albums.items;
      const artistSingles = disc.singles.items;
      const artistCompilations = disc.compilations.items;
      const formatUrisAsAggregates = Array_exports.map(
        ({ uri: uri2 }) => ({
          releases: { items: [{ uri: uri2 }] }
        })
      );
      const allTracks = new Array();
      const add = (tracks) => void Array.prototype.push.apply(allTracks, tracks);
      if (CONFIG.artistTopTracks)
        add(
          pipe(
            artistTopTracks,
            Array_exports.map(flow(lookup4("track"), Option_exports.map(parseTopTrackFromArtist))),
            Array_exports.sequence(Option_exports.Applicative),
            Option_exports.getOrElse(constant([]))
          )
        );
      if (CONFIG.artistPopularReleases)
        add(
          yield pipe(
            artistPopularReleases,
            formatUrisAsAggregates,
            parseTracksFromAggregates
          )
        );
      if (CONFIG.artistSingles)
        add(yield parseTracksFromAggregates(artistSingles));
      if (CONFIG.artistAlbums)
        add(yield parseTracksFromAggregates(artistAlbums));
      if (CONFIG.artistCompilations)
        add(yield parseTracksFromAggregates(artistCompilations));
      if (CONFIG.artistLikedTracks)
        add(
          yield pipe(
            parseUri(uri).id,
            fetchArtistLikedTracksSP,
            async(Array_exports.map(parseTrackFromArtistLikedTracksSP))
          )
        );
      return allTracks;
    });
  }
  var app_default, SortBy, SortProp, getAlbumTracks, getPlaylistTracks, fetchAPITracksFromTracks, fetchAlbumTracksFromTracks, populateTracksSpot, populateTrackLastFM, fetchTracks, populateTracks, queue, sortByProp, showIn, showAlways, createSortByPropSubmenu;
  var init_app = __esm({
    "src/app.tsx"() {
      "use strict";
      init_es6();
      init_Function();
      init_Record2();
      init_NonEmptyArray();
      init_Record();
      init_function();
      init_string();
      init_es62();
      init_api();
      init_fp();
      init_parse();
      init_settings();
      init_util();
      app_default = {};
      SortBy = /* @__PURE__ */ ((SortBy2) => {
        SortBy2["SPOTIFY_PLAYCOUNT"] = "Spotify - Play Count";
        SortBy2["SPOTIFY_POPULARITY"] = "Spotify - Popularity";
        SortBy2["LASTFM_SCROBBLES"] = "LastFM - Scrobbles";
        SortBy2["LASTFM_PERSONALSCROBBLES"] = "LastFM - My Scrobbles";
        SortBy2["LASTFM_PLAYCOUNT"] = "LastFM - Play Count";
        return SortBy2;
      })(SortBy || {});
      SortProp = /* @__PURE__ */ ((SortProp2) => {
        SortProp2["Spotify - Play Count"] = "playcount";
        SortProp2["Spotify - Popularity"] = "popularity";
        SortProp2["LastFM - Scrobbles"] = "scrobbles";
        SortProp2["LastFM - My Scrobbles"] = "personalScrobbles";
        SortProp2["LastFM - Play Count"] = "lastfmPlaycount";
        return SortProp2;
      })(SortProp || {});
      getAlbumTracks = (uri) => __async(void 0, null, function* () {
        const albumRes = yield fetchAlbumGQL(uri);
        const releaseDate = albumRes.date.isoString.split("T")[0];
        return pipe(
          albumRes.tracks.items,
          Array_exports.map(
            flow(
              parseTrackFromAlbum,
              Lens.fromProp()("albumUri").set(albumRes.uri),
              Lens.fromProp()("albumName").set(albumRes.name),
              Lens.fromProp()("releaseDate").set(releaseDate)
            )
          )
        );
      });
      getPlaylistTracks = flow(
        fetchPlaylistAPI,
        async(Array_exports.map(parseTrackFromPlaylistAPI))
      );
      fetchAPITracksFromTracks = flow(
        Array_exports.map((track) => parseUri(track.uri).id),
        fetchTracksSpotAPI,
        async(Array_exports.map(parseTrackFromSpotifyAPI))
      );
      fetchAlbumTracksFromTracks = flow(
        groupBy((track) => String(track.albumUri)),
        mapWithIndex3((albumUri, tracks) => __async(void 0, null, function* () {
          const albumTracks = yield getAlbumTracks(albumUri);
          return Array_exports.filter(
            (albumTrack) => Array_exports.some((track) => albumTrack.uri === track.uri)(tracks)
          )(albumTracks);
        })),
        values,
        (x) => Promise.all(x),
        async(Array_exports.flatten)
      );
      populateTracksSpot = (propName) => (tracks) => pipe(
        tracks,
        Array_exports.filter(
          flow(
            Optional.fromNullableProp()(SortProp[propName]).getOption,
            Option_exports.isNone
          )
        ),
        guard4([
          [
            startsWith("Spotify - Play Count" /* SPOTIFY_PLAYCOUNT */),
            constant(fetchAlbumTracksFromTracks)
          ],
          [
            startsWith("Spotify - Popularity" /* SPOTIFY_POPULARITY */),
            constant(fetchAPITracksFromTracks)
          ]
        ])(constant(Task_exports.of([])))(propName),
        async(Array_exports.concat(tracks)),
        async(groupBy(Lens.fromProp()("uri").get)),
        async(values),
        async(Array_exports.map(objConcat()))
      );
      populateTrackLastFM = (track) => __async(void 0, null, function* () {
        const lastfmTrack = (yield fetchTrackLFMAPI(
          track.artistName,
          track.name,
          CONFIG.lastFmUserName
        )).track;
        track.lastfmPlaycount = Number(lastfmTrack.listeners);
        track.scrobbles = Number(lastfmTrack.playcount);
        track.personalScrobbles = Number(lastfmTrack.userplaycount);
        return track;
      });
      fetchTracks = guard4([
        [startsWith("spotify:album" /* ALBUM */), getAlbumTracks],
        [startsWith("spotify:artist" /* ARTIST */), getArtistTracks],
        [startsWith("spotify:playlist" /* PLAYLIST */), getPlaylistTracks]
      ])(Task_exports.of([]));
      populateTracks = guard4([
        [startsWith("Spotify"), populateTracksSpot],
        [
          startsWith("LastFM"),
          constant(flow(Array_exports.map(populateTrackLastFM), (x) => Promise.all(x)))
        ]
      ])(constant(Task_exports.of([])));
      queue = new Array();
      sortByProp = (name) => (uri) => __async(void 0, null, function* () {
        const prop2 = SortProp[name];
        const toProp = Optional.fromNullableProp()(prop2).getOption;
        queue = yield pipe(
          uri,
          fetchTracks,
          async(populateTracks(name)),
          async(Array_exports.filter(flow(toProp, Option_exports.isSome))),
          async(Array_exports.sort(
            pipe(
              number_exports.Ord,
              Ord_exports.contramap(flow(toProp, Option_exports.getOrElse(constant(-1))))
            )
          )),
          async(CONFIG.ascending ? identity : Array_exports.reverse),
          async(Array_exports.append({ uri: "spotify:delimiter" }))
        );
        if (queue.length <= 1)
          return Spicetify.showNotification("Data not available");
        yield Spicetify.Platform.PlayerAPI.clearQueue();
        yield Spicetify.Platform.PlayerAPI.addToQueue(queue);
        Spicetify.Player.next();
      });
      showIn = (allowedTypes) => ([uri]) => pipe(allowedTypes, Array_exports.some(flip(startsWith)(uri)));
      showAlways = showIn([
        "spotify:album" /* ALBUM */,
        "spotify:artist" /* ARTIST */,
        "spotify:playlist" /* PLAYLIST */
      ]);
      createSortByPropSubmenu = (name, icon) => new Spicetify.ContextMenu.Item(
        name,
        tupled(sortByProp(name)),
        showAlways,
        icon,
        false
      );
      new Spicetify.ContextMenu.SubMenu(
        "Sort by",
        Array_exports.zipWith(
          values(SortBy),
          ["play", "heart", "volume", "artist", "subtitles"],
          createSortByPropSubmenu
        ),
        showAlways
      ).register();
    }
  });

  // src/entry.tsx
  init_es6();
  init_Record();
  init_function();
  (() => __async(void 0, null, function* () {
    const mustLoad = [
      "ContextMenu",
      "CosmosAsync",
      "GraphQL",
      "Locale",
      "Platform",
      "Player",
      "showNotification"
    ];
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let timer = 0;
    while (mustLoad.some(flow(flip(lookup4)(Spicetify), Option_exports.isNone)))
      yield sleep(timer += 100);
    yield Promise.resolve().then(() => (init_app(), app_exports));
  }))();
})();
(async () => {
                if (!document.getElementById(`sort.plus`)) {
                    var el = document.createElement("style")
                    el.id = `sort.plus`
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