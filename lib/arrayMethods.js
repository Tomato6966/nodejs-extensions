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
Object.defineProperty(exports, '__esModule', { value: true });
exports.promiseLoopOver =
  exports.promiseMap =
  exports.loopOver =
  exports.keepArrays =
  exports.keepObjects =
  exports.keepBoolean =
  exports.keepNumbers =
  exports.keepStrings =
  exports.merge =
  exports.removeDuplicates =
  exports.remove =
  exports.removeNaNs =
  exports.removeEmptyStrings =
  exports.removeUndefined =
  exports.removeNullish =
  exports.sumNumbersOnly =
  exports.sum =
  exports.chunks =
  exports.firstElement =
  exports.first =
  exports.last =
  exports.lastElement =
  exports.shuffle =
    void 0;
var lodash_1 = require('lodash');
function shuffle(thisArr) {
  var _a;
  var shuffled = __spreadArray([], thisArr, true);
  // fastest loop possible
  for (var i = shuffled.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    (_a = [shuffled[j], shuffled[i]]), (shuffled[i] = _a[0]), (shuffled[j] = _a[1]);
  }
  return shuffled;
}
exports.shuffle = shuffle;
// .sort((a, b) => b.localeCompare(a, 'es', {sensitivity: 'base'}))
// get something from the array
function lastElement(thisArr) {
  return thisArr[thisArr.length - 1];
}
exports.lastElement = lastElement;
function last(thisArr) {
  return thisArr[0];
}
exports.last = last;
function first(thisArr) {
  return thisArr[0];
}
exports.first = first;
function firstElement(thisArr) {
  return thisArr[0];
}
exports.firstElement = firstElement;
function chunks(thisArr, chunkSize) {
  if (!chunkSize) throw new SyntaxError('No chunkSize defined');
  if (typeof chunkSize !== 'number')
    throw new SyntaxError("Type of chunkSize is not a number, it's: ".concat(typeof chunkSize));
  if (chunkSize <= 0) throw new SyntaxError('chunkSize is smaller or equal to 0, it must be bigger then 0');
  var cs = [];
  // fastest loop possible
  for (var i = thisArr.length - 1; i >= 0; i -= chunkSize)
    cs.push(thisArr.slice(thisArr.length - 1 - i < 0 ? 0 : thisArr.length - 1 - i, thisArr.length - 1 - i + chunkSize));
  return cs;
}
exports.chunks = chunks;
function sum(thisArr, mapFn) {
  if (typeof mapFn !== 'undefined' && typeof mapFn !== 'function')
    throw new SyntaxError("Received mapFn, but it's not a Function, its type is: ".concat(typeof mapFn));
  return (mapFn ? thisArr.map(mapFn) : thisArr).reduce(function (a, b) {
    return a + b;
  }, 0);
}
exports.sum = sum;
function sumNumbersOnly(thisArr, mapFn) {
  return (mapFn ? thisArr.map(mapFn) : thisArr)
    .filter(function (elem) {
      return typeof elem === 'number' && !isNaN(elem);
    })
    .reduce(function (a, b) {
      return a + b;
    }, 0);
}
exports.sumNumbersOnly = sumNumbersOnly;
// changes the array
function removeNullish(thisArr) {
  return thisArr.filter(Boolean);
}
exports.removeNullish = removeNullish;
function removeUndefined(thisArr) {
  return thisArr.filter(function (elem) {
    return typeof elem !== 'undefined';
  });
}
exports.removeUndefined = removeUndefined;
function removeEmptyStrings(thisArr) {
  return thisArr.filter(function (elem) {
    return typeof elem !== 'string' || elem.length;
  });
}
exports.removeEmptyStrings = removeEmptyStrings;
function removeNaNs(thisArr) {
  return thisArr.filter(function (elem) {
    return !isNaN(elem);
  });
}
exports.removeNaNs = removeNaNs;
function remove(thisArr) {
  var elems = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    elems[_i - 1] = arguments[_i];
  }
  if (!elems || !elems.length) throw new SyntaxError('Did not receive an element to remove.');
  return thisArr.filter(function (element) {
    return !elems.some(function (elem) {
      return element === elem || (0, lodash_1.isEqual)(element, elem);
    });
  });
}
exports.remove = remove;
function removeDuplicates(thisArr) {
  return thisArr.reduce(function (a, c) {
    return !a.some(function (item) {
      return (0, lodash_1.isEqual)(item, c);
    })
      ? a.concat([c])
      : a;
  }, []);
}
exports.removeDuplicates = removeDuplicates;
function merge(thisArr) {
  var elements = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    elements[_i - 1] = arguments[_i];
  }
  if (!elements || !(elements === null || elements === void 0 ? void 0 : elements.length))
    throw new SyntaxError('did not receive any elements to merge.');
  return __spreadArray(__spreadArray([], thisArr, true), elements, true);
}
exports.merge = merge;
function keepStrings(thisArr) {
  return thisArr.filter(function (elem) {
    return typeof elem === 'string';
  });
}
exports.keepStrings = keepStrings;
function keepNumbers(thisArr) {
  return thisArr.filter(function (elem) {
    return typeof elem === 'number';
  });
}
exports.keepNumbers = keepNumbers;
function keepBoolean(thisArr) {
  return thisArr.filter(function (elem) {
    return typeof elem === 'boolean';
  });
}
exports.keepBoolean = keepBoolean;
function keepObjects(thisArr) {
  return thisArr.filter(function (elem) {
    return typeof elem === 'object' && !Array.isArray(elem);
  });
}
exports.keepObjects = keepObjects;
function keepArrays(thisArr) {
  return thisArr.filter(function (elem) {
    return typeof elem === 'object' && Array.isArray(elem);
  });
}
exports.keepArrays = keepArrays;
function loopOver(thisArr, fn) {
  if (!fn || typeof fn !== 'function')
    throw new SyntaxError('did not receive a valid function for the mapping, received: '.concat(typeof fn));
  for (var i = thisArr.length - 1; i >= 0; i--) fn(thisArr[thisArr.length - 1 - i], thisArr.length - 1 - i, thisArr);
  return;
}
exports.loopOver = loopOver;
function promiseMap(thisArr, fn) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      if (!fn || typeof fn !== 'function')
        throw new SyntaxError('did not receive a valid function for the mapping, received: '.concat(typeof fn));
      return [2 /*return*/, Promise.all(thisArr.map(fn))];
    });
  });
}
exports.promiseMap = promiseMap;
function promiseLoopOver(thisArr, fn) {
  return __awaiter(this, void 0, void 0, function () {
    var promises, _loop_1, i;
    var _this = this;
    return __generator(this, function (_a) {
      if (!fn || typeof fn !== 'function')
        throw new SyntaxError('did not receive a valid function for the mapping, received: '.concat(typeof fn));
      promises = [];
      _loop_1 = function (i) {
        promises.push(
          (function () {
            return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                return [2 /*return*/, fn(thisArr[thisArr.length - 1 - i], thisArr.length - 1 - i, thisArr)];
              });
            });
          })(),
        );
      };
      for (i = thisArr.length - 1; i >= 0; i--) {
        _loop_1(i);
      }
      return [2 /*return*/, Promise.all(promises)];
    });
  });
}
exports.promiseLoopOver = promiseLoopOver;
exports.default = {
  shuffle: shuffle,
  lastElement: lastElement,
  firstElement: firstElement,
  last: last,
  first: first,
  chunks: chunks,
  sum: sum,
  sumNumbersOnly: sumNumbersOnly,
  removeNullish: removeNullish,
  removeUndefined: removeUndefined,
  removeEmptyStrings: removeEmptyStrings,
  removeNaNs: removeNaNs,
  remove: remove,
  removeDuplicates: removeDuplicates,
  merge: merge,
  keepStrings: keepStrings,
  keepNumbers: keepNumbers,
  keepBoolean: keepBoolean,
  keepObjects: keepObjects,
  keepArrays: keepArrays,
  loopOver: loopOver,
  promiseMap: promiseMap,
  promiseLoopOver: promiseLoopOver,
};
