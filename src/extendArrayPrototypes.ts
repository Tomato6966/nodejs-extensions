import * as arrayMethods from './arrayMethods';

declare global {
  interface Array<T> {
    /** Get the last Element of the Array */
    last(): T;
    /** Get the first Element of the Array */
    first(): T;
    /** Turn the Element into Chunks */
    chunks(chunkSize: number): T[][];
    /** Sum up the Array and get whatever you need, you can supply a function, which is mapping the array, before summing up */
    sum(mapFn?: (element: any, index: number, arr: any[]) => any): number;
    /** Sum up the Array, but only things which are valid Numbers and not NaNs */
    sumNumbersOnly(mapFn?: (element: any, index: number, arr: any[]) => any): number;
    /** Removes Nullish elements */
    removeNullish(): T[];
    /** Removes undefined elements */
    removeUndefined(): T[];
    /** Removes empty strings */
    removeEmptyStrings(): T[];
    /** Removes everything except real Numbers */
    removeNaNs(): T[];
    /** Remove (a) specific Element(s) from the Array */
    remove(...elems: T[]): T[];
    /** Mix up the array */
    shuffle(): T[];
    /** Remove all duplicates from the Array */
    removeDuplicates(): T[];
    /** Keeps just string Elements */
    keepStrings(): T[];
    /** Keeps just Number Elements */
    keepNumbers(): T[];
    /** Keeps just Boolean Elements */
    keepBoolean(): T[];
    /** Keeps just Object Elements */
    keepObjects(): T[];
    /** Keeps just Array Elements */
    keepArrays(): T[];
    /** Merges elements into the array */
    merge(...elements: any[]): T[];
    /** Efficiently loop over the array, faster then .forEach() */
    loopOver(fn: (element: any, index: number, arr: any[]) => any): void;
    /** Map the Array via a Promise */
    promiseMap(fn: (element: any, index: number, arr: any[]) => any): Promise<T[]>;
    /** Efficiently loop over the array, faster then .forEach() */
    promiseLoopOver(fn: (element: any, index: number, arr: any[]) => any): Promise<void>;
  }
}
Array.prototype.shuffle =
  Array.prototype.shuffle ??
  function <T>(this: T[]): T[] {
    return arrayMethods.shuffle(this);
  };
// .sort((a, b) => b.localeCompare(a, 'es', {sensitivity: 'base'}))

// get something from the array
Array.prototype.last =
  Array.prototype.last ??
  function <T>(this: T[]): T {
    return arrayMethods.last(this);
  };

// get something from the array
Array.prototype.first =
  Array.prototype.first ??
  function <T>(this: T[]): T {
    return arrayMethods.first(this);
  };

Array.prototype.chunks =
  Array.prototype.chunks ??
  function <T>(this: T[], chunkSize: number): T[][] {
    return arrayMethods.chunks(this, chunkSize);
  };

Array.prototype.sum =
  Array.prototype.sum ??
  function <T>(this: T[], mapFn?: (element: any, index: number, arr: any[]) => any): number {
    return arrayMethods.sum(this, mapFn);
  };
Array.prototype.sumNumbersOnly =
  Array.prototype.sumNumbersOnly ??
  function <T>(this: T[], mapFn?: (element: any, index: number, arr: any[]) => any): number {
    return arrayMethods.sumNumbersOnly(this, mapFn);
  };

// changes the array
Array.prototype.removeNullish =
  Array.prototype.removeNullish ??
  function <T>(this: T[]): T[] {
    return arrayMethods.removeNullish(this);
  };
Array.prototype.removeUndefined =
  Array.prototype.removeUndefined ??
  function <T>(this: T[]): T[] {
    return arrayMethods.removeUndefined(this);
  };
Array.prototype.removeEmptyStrings =
  Array.prototype.removeEmptyStrings ??
  function <T>(this: T[]): T[] {
    return arrayMethods.removeEmptyStrings(this);
  };
Array.prototype.removeNaNs =
  Array.prototype.removeNaNs ??
  function <T>(this: T[]): T[] {
    return arrayMethods.removeNaNs(this);
  };
Array.prototype.remove =
  Array.prototype.remove ??
  function <T>(this: T[], ...elems: T[]): T[] {
    return arrayMethods.remove(this, ...elems);
  };
Array.prototype.removeDuplicates =
  Array.prototype.removeDuplicates ??
  function <T>(this: T[]): T[] {
    return arrayMethods.removeDuplicates(this);
  };
Array.prototype.merge =
  Array.prototype.merge ??
  function <T>(this: T[], ...elements: T[]): T[] {
    return arrayMethods.merge(this, ...elements);
  };
Array.prototype.keepStrings =
  Array.prototype.keepStrings ??
  function <T>(this: T[]): T[] {
    return arrayMethods.keepStrings(this);
  };
Array.prototype.keepNumbers =
  Array.prototype.keepNumbers ??
  function <T>(this: T[]): T[] {
    return arrayMethods.keepNumbers(this);
  };
Array.prototype.keepBoolean =
  Array.prototype.keepBoolean ??
  function <T>(this: T[]): T[] {
    return arrayMethods.keepBoolean(this);
  };
Array.prototype.keepObjects =
  Array.prototype.keepObjects ??
  function <T>(this: T[]): T[] {
    return arrayMethods.keepObjects(this);
  };
Array.prototype.keepArrays =
  Array.prototype.keepArrays ??
  function <T>(this: T[]): T[] {
    return arrayMethods.keepArrays(this);
  };

Array.prototype.loopOver =
  Array.prototype.loopOver ??
  function <T>(this: T[], fn: (element: T, index: number, arr: T[]) => any): any {
    return arrayMethods.loopOver(this, fn);
  };

Array.prototype.promiseMap =
  Array.prototype.promiseMap ??
  async function <T>(this: T[], fn: (element: T, index: number, arr: T[]) => Promise<any[]>): Promise<any[]> {
    return arrayMethods.promiseMap(this, fn);
  };
Array.prototype.promiseLoopOver =
  Array.prototype.promiseLoopOver ??
  async function <T>(this: T[], fn: (element: T, index: number, arr: T[]) => Promise<any>): Promise<any> {
    return arrayMethods.promiseLoopOver(this, fn);
  };
