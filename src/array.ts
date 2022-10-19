import _ from "lodash";

export {}
declare global {
  interface Array<T> {
    /** GET - The last Element of the Array */
    lastElement(): T;
    /** GET - Turn the Element into Chunks */
    chunks(chunkSize:number): Array<Array<T>>;
    /** GET - Sum up the Array and get whatever you need, you can supply a function, which is mapping the array, before summing up */
    sum(mapFn?:(element:any, index:number, arr:any[]) => any): number;
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

if(!Array.prototype.shuffle) {
  Array.prototype.shuffle = function<T>(): T[] {
    const shuffled = [...this];
    // fastest loop possible
    for (let i = shuffled.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}
// .sort((a, b) => b.localeCompare(a, 'es', {sensitivity: 'base'}))
// get something from the array
if(!Array.prototype.lastElement) {
  Array.prototype.lastElement = function<T>(): T {
    return this[this.length - 1]
  }
}

if(!Array.prototype.chunks) {
  Array.prototype.chunks = function<T>(chunkSize:number): T[][] {
    if(!chunkSize) throw new SyntaxError("No chunkSize defined")
    if(typeof chunkSize !== "number") throw new SyntaxError(`Type of chunkSize is not a number, it's: ${typeof chunkSize}`)
    if(chunkSize <= 0) throw new SyntaxError("chunkSize is smaller or equal to 0, it must be bigger then 0")
  
    const chunks = [];
    // fastest loop possible
    for (let i = this.length - 1; i >= 0; i -= chunkSize) chunks.push(this.slice(i - chunkSize < 0 ? 0 : i - chunkSize, i));
  
    return chunks;
  }
}

if(!Array.prototype.sum) {
  Array.prototype.sum = function<T>(mapFn?:(element:any, index:number, arr:any[]) => any): T[] {
    if(typeof mapFn !== "undefined" && typeof mapFn !== "function") throw new SyntaxError(`Received mapFn, but it's not a Function, its type is: ${typeof mapFn}`)
    
    let sum = 0; 
    // fastest loop possible
    for (let i = (mapFn ? this.map(mapFn) : this).length - 1; i >= 0; i --) sum += (mapFn ? this.map(mapFn) : this)[i];

    return sum;
  }
}

// changes the array
if(!Array.prototype.removeNullish) {
  Array.prototype.removeNullish = function<T>(): T[] {
    return this.filter(Boolean);
  }
}
if(!Array.prototype.removeUndefined) {
  Array.prototype.removeUndefined = function<T>(): T[] {
    return this.filter(elem => typeof elem === "undefined");
  }
}
if(!Array.prototype.removeEmptyStrings) {
  Array.prototype.removeEmptyStrings = function<T>(): T[] {
    return this.filter(elem => typeof elem === "string" && !elem.length);
  }
}
if(!Array.prototype.removeNaNs) {
  Array.prototype.removeNaNs = function<T>(): T[] {
    return this.filter(elem => !isNaN(elem));
  }
}
if(!Array.prototype.remove) {
  Array.prototype.remove = function<T>(...elems: T[]): T[] {
    if(!elems || !elems.length) throw new SyntaxError(`Did not receive an element to remove.`);
    const keep = [];
    for(let i = this.length - 1; i >= 0; i--) {
      if(elems.some(elem => _.isEqual(this[i] == elem))) continue
      keep.push(this[i]);
    }
    return keep
  }
}
if(!Array.prototype.removeDuplicates) {
  Array.prototype.removeDuplicates = function<T>(): T[] {
    if(typeof fn !== "undefined" && typeof fn !== "function") throw new SyntaxError(`Option Type`)
    const arr:any[] = [];
    for(let i = this.length - 1; i >= 0; i--) {
      if(typeof this[i] === "object") {
        if(arr.some(x => _.isEqual(x, this[i]))) continue; 
        arr.push(this[i])
      } else {
        if(arr.includes(this[i])) continue;
        arr.push(this[i]);
      }
    }
    return arr;
  }
}
if(!Array.prototype.merge) {
  Array.prototype.merge = function<T>(...elements:T): T[] {
    if(!elements || !elements?.length) throw new SyntaxError(`did not receive any elements to merge.`)
    return [...this, ...elements];
  }
}

if(!Array.prototype.keepStrings) {
  Array.prototype.keepStrings = function<T>(): T[] {
    return this.filter(elem => typeof elem == "string");
  }
}
if(!Array.prototype.keepNumbers) {
  Array.prototype.keepNumbers = function<T>(): T[] {
    return this.filter(elem => typeof elem == "number");
  }
}
if(!Array.prototype.keepBoolean) {
  Array.prototype.keepBoolean = function<T>(): T[] {
    return this.filter(elem => typeof elem == "boolean");
  }
}
if(!Array.prototype.keepObjects) {
  Array.prototype.keepObjects = function<T>(): T[] {
    const keep = [];
    this.utils.loopOver(elem => {
      if(!(typeof elem == "object" && !Array.isArray(elem))) return;
      return keep.push(elem);
    })
    return this.keep;
  }
}
if(!Array.prototype.keepArrays) {
  Array.prototype.keepArrays = function<T>(): T[] {
    return this.filter(elem => typeof elem == "object" && Array.isArray(elem));
  }
}


if(!Array.prototype.promiseMap) {
  Array.prototype.promiseMap = async function<T>(fn:(element:any, index:number, arr:any[]) => any): Promise<T[]> {
    if(!fn || typeof fn !== "function") throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`)
    return Promise.all(this.map(fn));
  };
}
if(!Array.prototype.promiseLoopOver) {
  Array.prototype.promiseLoopOver = async function<T>(fn:(element:any, index:number, arr:any[]) => any): Promise<any> {
    if(!fn || typeof fn !== "function") throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`)
    const promises = [];
    for(let i = this.length -1; i >= 0; i--) promises.push(async () => fn(this[i], i, this))
    return Promise.all(promises);
  };
}
if(!Array.prototype.loopOver) {
  Array.prototype.loopOver = function<T>(fn:(element:T, index:number, arr:Array<T>) => any): void {
    if(!fn || typeof fn !== "function") throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`)
    for(let i = this.length -1; i >= 0; i--) fn(this[i], i, this)
    return this;
  };
}