import { isEqual } from "lodash";
import arrayMethods from "./arrayMethods";

export default function extendArrayPrototypes() { 
  return;
}
declare global {
  interface Array<T> {
    /** Get the last Element of the Array */
    lastElement(): T;
    /** Turn the Element into Chunks */
    chunks(chunkSize:number): Array<Array<T>>;
    /** Sum up the Array and get whatever you need, you can supply a function, which is mapping the array, before summing up */
    sum(mapFn?:(element:any, index:number, arr:any[]) => any): number;
    /** Sum up the Array, but only things which are valid Numbers and not NaNs */
    sumNumbersOnly(mapFn?:(element:any, index:number, arr:any[]) => any): number;
    /** Removes Nullish elements */
    removeNullish(): Array<T>;
    /** Removes undefined elements */
    removeUndefined(): Array<T>;
    /** Removes empty strings */
    removeEmptyStrings(): Array<T>;
    /** Removes everything except real Numbers */
    removeNaNs(): Array<T>
    /** Remove (a) specific Element(s) from the Array */
    remove(...elems: T[]): Array<T>;
    /** Mix up the array */
    shuffle(): Array<T>;
    /** Remove all duplicates from the Array */
    removeDuplicates(): Array<T>;
    /** Keeps just string Elements */
    keepStrings(): Array<T>;
    /** Keeps just Number Elements */
    keepNumbers(): Array<T>;
    /** Keeps just Boolean Elements */
    keepBoolean(): Array<T>;
    /** Keeps just Object Elements */
    keepObjects(): Array<T>;
    /** Keeps just Array Elements */
    keepArrays(): Array<T>;
    /** Merges elements into the array */
    merge(...elements:any[]): Array<T>;
    /** Efficiently loop over the array, faster then .forEach() */
    loopOver(fn:(element:any, index:number, arr:any[]) => any): void;
    /** Map the Array via a Promise */
    promiseMap(fn:(element:any, index:number, arr:any[]) => any): Promise<Array<T>>;
    /** Efficiently loop over the array, faster then .forEach() */
    promiseLoopOver(fn:(element:any, index:number, arr:any[]) => any): Promise<void>;
  }
}

// @ts-ignore
for(const [fnName, fn] of Object.entries(arrayMethods)) Array.prototype[`${fnName}`] = Array.prototype[`${fnName}`] ?? fn;

/*
Array.prototype.shuffle = Array.prototype.shuffle ?? function<T>(): T[] {
  const shuffled = [...this];
  // fastest loop possible
  for (let i = shuffled.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
// .sort((a, b) => b.localeCompare(a, 'es', {sensitivity: 'base'}))

// get something from the array
Array.prototype.lastElement = Array.prototype.lastElement ?? function<T>(): T {
  return this[this.length - 1]
}

Array.prototype.chunks = Array.prototype.chunks ?? function<T>(chunkSize:number): T[][] {
  if(!chunkSize) throw new SyntaxError("No chunkSize defined")
  if(typeof chunkSize !== "number") throw new SyntaxError(`Type of chunkSize is not a number, it's: ${typeof chunkSize}`)
  if(chunkSize <= 0) throw new SyntaxError("chunkSize is smaller or equal to 0, it must be bigger then 0")

  const chunks = [];
  // fastest loop possible
  for (let i = this.length - 1; i >= 0; i -= chunkSize) chunks.push(this.slice(i - chunkSize < 0 ? 0 : i - chunkSize, i));

  return chunks;
}

Array.prototype.sum = Array.prototype.sum ?? function<T>(mapFn?:(element:any, index:number, arr:any[]) => any): T[] {
  if(typeof mapFn !== "undefined" && typeof mapFn !== "function") throw new SyntaxError(`Received mapFn, but it's not a Function, its type is: ${typeof mapFn}`)
  return (mapFn ? this.map(mapFn) : this).reduce((a,b) => a + b, 0);
}

// changes the array
Array.prototype.removeNullish = Array.prototype.removeNullish ?? function<T>(): T[] {
  return this.filter(Boolean);
}
Array.prototype.removeUndefined = Array.prototype.removeUndefined ?? function<T>(): T[] {
  return this.filter(elem => typeof elem === "undefined");
}
Array.prototype.removeEmptyStrings = Array.prototype.removeEmptyStrings ?? function<T>(): T[] {
  return this.filter(elem => typeof elem === "string" && !elem.length);
}
Array.prototype.removeNaNs = Array.prototype.removeNaNs ?? function<T>(): T[] {
  return this.filter(elem => !isNaN(elem));
}
Array.prototype.remove = Array.prototype.remove ?? function<T>(...elems: T[]): T[] {
  if(!elems || !elems.length) throw new SyntaxError(`Did not receive an element to remove.`);
  return this.filter(element => elems.some(elem => isEqual(element, elem)));
}
Array.prototype.removeDuplicates = Array.prototype.removeDuplicates ?? function<T>(): T[] {
  return this.reduce((a, c) => !a.some(item => isEqual(item, c)) ? a.concat([c]) : a, [])
}
Array.prototype.merge = Array.prototype.merge ?? function<T>(...elements:T): T[] {
  if(!elements || !elements?.length) throw new SyntaxError(`did not receive any elements to merge.`)
  return [...this, ...elements];
}
Array.prototype.keepStrings = Array.prototype.keepStrings ?? function<T>(): T[] {
  return this.filter(elem => typeof elem == "string");
}
Array.prototype.keepNumbers = Array.prototype.keepNumbers ?? function<T>(): T[] {
  return this.filter(elem => typeof elem == "number");
}
Array.prototype.keepBoolean = Array.prototype.keepBoolean ?? function<T>(): T[] {
  return this.filter(elem => typeof elem == "boolean");
}
Array.prototype.keepObjects = Array.prototype.keepObjects ?? function<T>(): T[] {
  return this.filter(elem => typeof elem == "object" && !Array.isArray(elem));
}
Array.prototype.keepArrays = Array.prototype.keepArrays ?? function<T>(): T[] {
  return this.filter(elem => typeof elem == "object" && Array.isArray(elem));
}

Array.prototype.promiseMap = Array.prototype.promiseMap ?? async function<T>(fn:(element:any, index:number, arr:any[]) => any): Promise<T[]> {
  if(!fn || typeof fn !== "function") throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`)
  return Promise.all(this.map(fn));
};
Array.prototype.promiseLoopOver = Array.prototype.promiseLoopOver ?? async function<T>(fn:(element:any, index:number, arr:any[]) => any): Promise<any> {
  if(!fn || typeof fn !== "function") throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`)
  const promises = [];
  for(let i = this.length -1; i >= 0; i--) promises.push(async () => fn(this[i], i, this))
  return Promise.all(promises);
};
Array.prototype.loopOver = Array.prototype.loopOver ?? function<T>(fn:(element:T, index:number, arr:Array<T>) => any): void {
  if(!fn || typeof fn !== "function") throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`)
  for(let i = this.length -1; i >= 0; i--) fn(this[i], i, this)
  return this;
};*/