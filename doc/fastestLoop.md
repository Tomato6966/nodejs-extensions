# How we determined, which loop for arrays is the fastest?

Well the fastest one is: `for(let i = Arr.length-1; i >=0; i--)`
But why?
I explain it that way: it starts at the high NUMBER, and just makes it smaller, which is easier for the CPU.
then if it would start at 0 and make it BIGGER

## Test Script:
```js
const Arr = new Array(1000000).fill(".");

console.log("\n\n---")
console.time("for+");
for(let i = 0; i < Arr.length; i++) {  }
console.timeEnd("for+");

console.time("for-");
for(let i = Arr.length-1; i >=0; i--) {  }
console.timeEnd("for-");

console.time("forEach");
Arr.forEach(v => {  })
console.timeEnd("forEach");
console.log("---\n\n")

/*
FASTEST: for-
 MEDIUM: for+
SLOWEST: forEach


---
for+: 5.912ms
for-: 2.254ms
forEach: 68.741ms
---


---
for+: 2.643ms
for-: 1.965ms
forEach: 52.267ms
---

---
for+: 2.792ms
for-: 1.854ms
forEach: 14.418ms
---

---
for+: 2.364ms
for-: 2.063ms
forEach: 16.87ms
---

*/
`` 