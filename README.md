# nodejs-extensions
Utility Prototype Extensions for Nodejs Classes and Types

# Features
✔️ Only adds Extensions, if not existing yet.
✔️ Types
✔️ Fast - uses quickest functions for nodejs [check how we determined](https://github.com/Tomato6966/nodejs-extensions/blob/main/doc/fastestLoop.md)
✔️ Optional Function to extend Prototypes


## Why not lodash or underscore?

This package is not ment to replace lodash, nor underscore, indeed, it uses lodash too!
 - It is ment to implement more use-case specific, readable utility functions.

# Import it

Typescript and ESM:

```js
import _Utils from "nodejs-extensions";
```

Common-JS way:

```js
const _Utils = require("nodejs-extensions");
```

# Extend prototype to make your work easier!

```js
import _Utils from "nodejs-extensions";

_Utils.ExtendPrototypes({
    improveForEach: false, //if true, then it will use _Utils.loopOver instead of Array.forEach and overwride it 
});
// then you can do stuff like:

const summed = [1, 2, 3, "a"].sumNumbersOnly();

const cleared = ["a", "a", "b"].removeDuplicates();
```

## Don't wanna extned the prototypes?

Then import `"nodejs-extensions/safe"` to not overwride the prototypes

```js
import _Utils from "nodejs-extensions/safe";

const summed = _Utils.removeDuplicates(["a", "a", "b"]);

const cleared = _Utils.sumNumbersOnly([1, 2, 3]);
```


# Function-Methods List

If you use it without the Array extension, aka by _Utils.function(), then always add the input (array, object, etc.) upfront!
- e.g: `_Util.shuffle([1, 2, 3, 4, 5, 6]);`
- e.g: `_Util.chunks(["a", "b", "c", "d", "e"], 2);`

## Arrays

[Jump](#Array-Methods) to the Arrays overview

 - [shuffle](#array-shuffle)
 - [lastElement](#array-lastElement)
 - [chunks](#array-chunks)
 - [sum](#array-sum)
 - [sumNumbersOnly](#array-sumNumbersOnly)
 - [removeNullish](#array-removeNullish)
 - [removeUndefined](#array-removeUndefined)
 - [removeEmptyStrings](#array-removeEmptyStrings)
 - [removeNaNs](#array-removeNaNs)
 - [remove](#array-remove)
 - [removeDuplicates](#array-removeDuplicates)
 - [merge](#array-merge)
 - [keepStrings](#array-keepStrings)
 - [keepNumbers](#array-keepNumbers)
 - [keepBoolean](#array-keepBoolean)
 - [keepObjects](#array-keepObjects)
 - [keepArrays](#array-keepArrays)
 - [loopOver](#array-loopOver)
 - [promiseMap](#array-promiseMap)
 - [promiseLoopOver](#array-promiseLoopOver) 

## Array-Methods]

### Array-shuffle

Creates a new mixed up (shuffled) array.

 - @Paramters:

 - @Returns
    - (Array): Returns the new mixed array
```js
const shuffled = [1, 2, 3].shuffle();
console.log(shuffled); // [3, 1, 2]
```
