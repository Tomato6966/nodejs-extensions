# nodejs-extensions
Utility Prototype Extensions for Nodejs Classes and Types

# Features
✔️ Only adds Extensions, if not existing yet.
✔️ Types
✔️ Fast - uses quickest functions for nodejs [check how we determined](https://github.com/Tomato6966/nodejs-extensions/blob/main/doc/fastestLoop.md)
✔️ Optional Function to extend Prototypes


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

_Utils.extendPrototypes({
    improveForeach: false, //if true, then it will use _Utils.loopOver instead of Array.forEach and overwride it 
});


// then you can do stuff like:

[1, 2, 3].sumNumbersOnly();

["a", "a", "b"].removeDuplicates();
```

## Don't wanna extend it?

Then just use it!


```js

_Utils.removeDuplicates(["a", "a", "b"]);

_Utils.sumNumbersOnly([1, 2, 3]);
```