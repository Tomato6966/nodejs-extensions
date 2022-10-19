import { isEqual } from 'lodash';
export interface ArrayFunctions {
  /** Get the last Element of the Array */
  lastElement(thisArr: any[]): any;
  /** Turn the Element into Chunks */
  chunks(thisArr: any[], chunkSize: number): any[][];
  /** Sum up the Array and get whatever you need, you can supply a function, which is mapping the array, before summing up */
  sum(thisArr: any[], mapFn?: (element: any, index: number, arr: any[]) => any): number;
  /** Sum up the Array, but only things which are valid Numbers and not NaNs */
  sumNumbersOnly(thisArr: any[], mapFn?: (element: any, index: number, arr: any[]) => any): number;
  /** Removes Nullish elements */
  removeNullish(thisArr: any[]): any[];
  /** Removes undefined elements */
  removeUndefined(thisArr: any[]): any[];
  /** Removes empty strings */
  removeEmptyStrings(thisArr: any[]): any[];
  /** Removes everything except real Numbers */
  removeNaNs(thisArr: any[]): any[];
  /** Remove (a) specific Element(s) from the Array */
  remove(thisArr: any[], ...elems: any[]): any[];
  /** Mix up the array */
  shuffle(thisArr: any[]): any[];
  /** Remove all duplicates from the Array */
  removeDuplicates(thisArr: any[]): any[];
  /** Keeps just string Elements */
  keepStrings(thisArr: any[]): any[];
  /** Keeps just Number Elements */
  keepNumbers(thisArr: any[]): any[];
  /** Keeps just Boolean Elements */
  keepBoolean(thisArr: any[]): any[];
  /** Keeps just Object Elements */
  keepObjects(thisArr: any[]): any[];
  /** Keeps just Array Elements */
  keepArrays(thisArr: any[]): any[];
  /** Merges elements into the array */
  merge(thisArr: any[], ...elements: any[]): any[];
  /** Efficiently loop over the array, faster then .forEach() */
  loopOver(thisArr: any[], fn: (element: any, index: number, arr: any[]) => any): void;
  /** Map the Array via a Promise */
  promiseMap(thisArr: any[], fn: (element: any, index: number, arr: any[]) => any): Promise<any[]>;
  /** Efficiently loop over the array, faster then .forEach() */
  promiseLoopOver(thisArr: any[], fn: (element: any, index: number, arr: any[]) => any): Promise<void>;
}
export function shuffle<T>(thisArr: T[]): T[] {
  const shuffled = [...thisArr];
  // fastest loop possible
  for (let i = shuffled.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
// .sort((a, b) => b.localeCompare(a, 'es', {sensitivity: 'base'}))

// get something from the array
export function lastElement<T>(thisArr: T[]): T {
  return thisArr[thisArr.length - 1];
}

export function chunks<T>(thisArr: T[], chunkSize: number): T[][] {
  if (!chunkSize) throw new SyntaxError('No chunkSize defined');
  if (typeof chunkSize !== 'number')
    throw new SyntaxError(`Type of chunkSize is not a number, it's: ${typeof chunkSize}`);
  if (chunkSize <= 0) throw new SyntaxError('chunkSize is smaller or equal to 0, it must be bigger then 0');

  const cs = [];
  // fastest loop possible
  for (let i = thisArr.length - 1; i >= 0; i -= chunkSize)
    cs.push(thisArr.slice(thisArr.length - 1 - i < 0 ? 0 : thisArr.length - 1 - i, thisArr.length - 1 - i + chunkSize));
  return cs;
}

export function sum<T>(thisArr: T[], mapFn?: (element: any, index: number, arr: any[]) => any): number {
  if (typeof mapFn !== 'undefined' && typeof mapFn !== 'function')
    throw new SyntaxError(`Received mapFn, but it's not a Function, its type is: ${typeof mapFn}`);
  return (mapFn ? thisArr.map(mapFn) : thisArr).reduce((a, b) => a + b, 0);
}

export function sumNumbersOnly<T>(thisArr: T[], mapFn?: (element: any, index: number, arr: any[]) => any): number {
  return (mapFn ? thisArr.map(mapFn) : thisArr)
    .filter((elem) => typeof elem === 'number' && !isNaN(elem))
    .reduce((a, b) => a + b, 0);
}

// changes the array
export function removeNullish<T>(thisArr: T[]): T[] {
  return thisArr.filter(Boolean);
}
export function removeUndefined<T>(thisArr: T[]): T[] {
  return thisArr.filter((elem) => typeof elem !== 'undefined');
}
export function removeEmptyStrings<T>(thisArr: T[]): T[] {
  return thisArr.filter((elem) => typeof elem !== 'string' || elem.length);
}
export function removeNaNs<T>(thisArr: T[]): T[] {
  return thisArr.filter((elem) => !isNaN(elem as number));
}
export function remove<T>(thisArr: T[], ...elems: T[]): T[] {
  if (!elems || !elems.length) throw new SyntaxError(`Did not receive an element to remove.`);
  return thisArr.filter((element) => !elems.some((elem) => element === elem || isEqual(element, elem)));
}
export function removeDuplicates<T>(thisArr: T[]): T[] {
  return thisArr.reduce((a: T[], c: T) => (!a.some((item) => isEqual(item, c)) ? a.concat([c]) : a), []);
}
export function merge<T>(thisArr: T[], ...elements: any[]): any[] {
  if (!elements || !elements?.length) throw new SyntaxError(`did not receive any elements to merge.`);
  return [...thisArr, ...elements];
}
export function keepStrings<T>(thisArr: T[]): T[] {
  return thisArr.filter((elem) => typeof elem === 'string');
}
export function keepNumbers<T>(thisArr: T[]): T[] {
  return thisArr.filter((elem) => typeof elem === 'number');
}
export function keepBoolean<T>(thisArr: T[]): T[] {
  return thisArr.filter((elem) => typeof elem === 'boolean');
}
export function keepObjects<T>(thisArr: T[]): T[] {
  return thisArr.filter((elem) => typeof elem === 'object' && !Array.isArray(elem));
}
export function keepArrays<T>(thisArr: T[]): T[] {
  return thisArr.filter((elem) => typeof elem === 'object' && Array.isArray(elem));
}
export function loopOver<T>(thisArr: T[], fn: (element: T, index: number, arr: T[]) => any): any {
  if (!fn || typeof fn !== 'function')
    throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`);
  for (let i = thisArr.length - 1; i >= 0; i--) fn(thisArr[thisArr.length - 1 - i], thisArr.length - 1 - i, thisArr);
  return;
}
export async function promiseMap<T>(
  thisArr: T[],
  fn: (element: T, index: number, arr: T[]) => Promise<any[]>,
): Promise<any[]> {
  if (!fn || typeof fn !== 'function')
    throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`);
  return Promise.all(thisArr.map(fn));
}
export async function promiseLoopOver<T>(
  thisArr: T[],
  fn: (element: T, index: number, arr: T[]) => Promise<any>,
): Promise<any> {
  if (!fn || typeof fn !== 'function')
    throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`);
  const promises = [];
  for (let i = thisArr.length - 1; i >= 0; i--)
    promises.push((async () => fn(thisArr[thisArr.length - 1 - i], thisArr.length - 1 - i, thisArr))());
  return Promise.all(promises);
}

export default {
  shuffle,
  lastElement,
  chunks,
  sum,
  sumNumbersOnly,
  removeNullish,
  removeUndefined,
  removeEmptyStrings,
  removeNaNs,
  remove,
  removeDuplicates,
  merge,
  keepStrings,
  keepNumbers,
  keepBoolean,
  keepObjects,
  keepArrays,
  loopOver,
  promiseMap,
  promiseLoopOver,
} as ArrayFunctions;
