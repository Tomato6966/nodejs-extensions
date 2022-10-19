'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
Object.defineProperty(exports, '__esModule', { value: true });
var arrayMethods = require('./arrayMethods');
Array.prototype.shuffle =
  (_a = Array.prototype.shuffle) !== null && _a !== void 0
    ? _a
    : function () {
        return arrayMethods.shuffle(this);
      };
// .sort((a, b) => b.localeCompare(a, 'es', {sensitivity: 'base'}))
// get something from the array
Array.prototype.lastElement =
  (_b = Array.prototype.lastElement) !== null && _b !== void 0
    ? _b
    : function () {
        return arrayMethods.lastElement(this);
      };
// get something from the array
Array.prototype.last =
  (_c = Array.prototype.last) !== null && _c !== void 0
    ? _c
    : function () {
        return arrayMethods.last(this);
      };
// get something from the array
Array.prototype.first =
  (_d = Array.prototype.first) !== null && _d !== void 0
    ? _d
    : function () {
        return arrayMethods.first(this);
      };
// get something from the array
Array.prototype.firstElement =
  (_e = Array.prototype.firstElement) !== null && _e !== void 0
    ? _e
    : function () {
        return arrayMethods.firstElement(this);
      };
Array.prototype.chunks =
  (_f = Array.prototype.chunks) !== null && _f !== void 0
    ? _f
    : function (chunkSize) {
        return arrayMethods.chunks(this, chunkSize);
      };
Array.prototype.sum =
  (_g = Array.prototype.sum) !== null && _g !== void 0
    ? _g
    : function (mapFn) {
        return arrayMethods.sum(this, mapFn);
      };
Array.prototype.sumNumbersOnly =
  (_h = Array.prototype.sumNumbersOnly) !== null && _h !== void 0
    ? _h
    : function (mapFn) {
        return arrayMethods.sumNumbersOnly(this, mapFn);
      };
// changes the array
Array.prototype.removeNullish =
  (_j = Array.prototype.removeNullish) !== null && _j !== void 0
    ? _j
    : function () {
        return arrayMethods.removeNullish(this);
      };
Array.prototype.removeUndefined =
  (_k = Array.prototype.removeUndefined) !== null && _k !== void 0
    ? _k
    : function () {
        return arrayMethods.removeUndefined(this);
      };
Array.prototype.removeEmptyStrings =
  (_l = Array.prototype.removeEmptyStrings) !== null && _l !== void 0
    ? _l
    : function () {
        return arrayMethods.removeEmptyStrings(this);
      };
Array.prototype.removeNaNs =
  (_m = Array.prototype.removeNaNs) !== null && _m !== void 0
    ? _m
    : function () {
        return arrayMethods.removeNaNs(this);
      };
Array.prototype.remove =
  (_o = Array.prototype.remove) !== null && _o !== void 0
    ? _o
    : function () {
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          elems[_i] = arguments[_i];
        }
        return arrayMethods.remove.apply(arrayMethods, __spreadArray([this], elems, false));
      };
Array.prototype.removeDuplicates =
  (_p = Array.prototype.removeDuplicates) !== null && _p !== void 0
    ? _p
    : function () {
        return arrayMethods.removeDuplicates(this);
      };
Array.prototype.merge =
  (_q = Array.prototype.merge) !== null && _q !== void 0
    ? _q
    : function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          elements[_i] = arguments[_i];
        }
        return arrayMethods.merge.apply(arrayMethods, __spreadArray([this], elements, false));
      };
Array.prototype.keepStrings =
  (_r = Array.prototype.keepStrings) !== null && _r !== void 0
    ? _r
    : function () {
        return arrayMethods.keepStrings(this);
      };
Array.prototype.keepNumbers =
  (_s = Array.prototype.keepNumbers) !== null && _s !== void 0
    ? _s
    : function () {
        return arrayMethods.keepNumbers(this);
      };
Array.prototype.keepBoolean =
  (_t = Array.prototype.keepBoolean) !== null && _t !== void 0
    ? _t
    : function () {
        return arrayMethods.keepBoolean(this);
      };
Array.prototype.keepObjects =
  (_u = Array.prototype.keepObjects) !== null && _u !== void 0
    ? _u
    : function () {
        return arrayMethods.keepObjects(this);
      };
Array.prototype.keepArrays =
  (_v = Array.prototype.keepArrays) !== null && _v !== void 0
    ? _v
    : function () {
        return arrayMethods.keepArrays(this);
      };
Array.prototype.loopOver =
  (_w = Array.prototype.loopOver) !== null && _w !== void 0
    ? _w
    : function (fn) {
        return arrayMethods.loopOver(this, fn);
      };
Array.prototype.promiseMap =
  (_x = Array.prototype.promiseMap) !== null && _x !== void 0
    ? _x
    : function (fn) {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            return [2 /*return*/, arrayMethods.promiseMap(this, fn)];
          });
        });
      };
Array.prototype.promiseLoopOver =
  (_y = Array.prototype.promiseLoopOver) !== null && _y !== void 0
    ? _y
    : function (fn) {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            return [2 /*return*/, arrayMethods.promiseLoopOver(this, fn)];
          });
        });
      };
