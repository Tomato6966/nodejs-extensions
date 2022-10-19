import { isEqual } from "lodash";
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
  return thisArr[thisArr.length - 1]
}

export function chunks<T>(thisArr: T[], chunkSize:number): T[][] {
  if(!chunkSize) throw new SyntaxError("No chunkSize defined")
  if(typeof chunkSize !== "number") throw new SyntaxError(`Type of chunkSize is not a number, it's: ${typeof chunkSize}`)
  if(chunkSize <= 0) throw new SyntaxError("chunkSize is smaller or equal to 0, it must be bigger then 0")

  const chunks = [];
  // fastest loop possible
  for (let i = thisArr.length - 1; i >= 0; i -= chunkSize) chunks.push(thisArr.slice(i - chunkSize < 0 ? 0 : i - chunkSize, i));

  return chunks;
}

export function sum<T>(thisArr: T[], mapFn?:(element:any, index:number, arr:any[]) => any): number {
    if(typeof mapFn !== "undefined" && typeof mapFn !== "function") throw new SyntaxError(`Received mapFn, but it's not a Function, its type is: ${typeof mapFn}`)
    return (mapFn ? thisArr.map(mapFn) : thisArr).reduce((a,b) => a + b, 0);
}

export function sumNumbersOnly<T>(thisArr: T[], mapFn?:(element:any, index:number, arr:any[]) => any): number {
    // @ts-ignore
    return (mapFn ? thisArr.map(mapFn) : thisArr).filter(elem => typeof elem === "number" && !isNaN(elem)).reduce((a,b) => a + b, 0);
}

// changes the array
export function removeNullish<T>(thisArr: T[]): T[] {
  return thisArr.filter(Boolean);
}
export function removeUndefined<T>(thisArr: T[]): T[] {
  return thisArr.filter(elem => typeof elem === "undefined");
}
export function removeEmptyStrings<T>(thisArr: T[]): T[] {
  return thisArr.filter(elem => typeof elem === "string" && !elem.length);
}
export function removeNaNs<T>(thisArr: T[]): T[] {
  return thisArr.filter(elem => !isNaN(elem));
}
export function remove<T>(thisArr: T[], ...elems: T[]): T[] {
  if(!elems || !elems.length) throw new SyntaxError(`Did not receive an element to remove.`);
  return thisArr.filter(element => elems.some(elem => isEqual(element, elem)));
}
export function removeDuplicates<T>(thisArr: T[]): T[] { // @ts-ignoreg
    return thisArr.reduce((a, c) => !a.some(item => isEqual(item, c)) ? a.concat([c]) : a, [])
}
export function merge<T>(thisArr: T[], ...elements:any[]): any[] { // @ts-ignore
  if(!elements || !elements?.length) throw new SyntaxError(`did not receive any elements to merge.`)
  return [...this, ...elements];
}
export function keepStrings<T>(thisArr: T[]): T[] {
  return thisArr.filter(elem => typeof elem == "string");
}
export function keepNumbers<T>(thisArr: T[]): T[] {
  return thisArr.filter(elem => typeof elem == "number");
}
export function keepBoolean<T>(thisArr: T[]): T[] {
  return thisArr.filter(elem => typeof elem == "boolean");
}
export function keepObjects<T>(thisArr: T[]): T[] {
  return thisArr.filter(elem => typeof elem == "object" && !Array.isArray(elem));
}
export function keepArrays<T>(thisArr: T[]): T[] {
  return thisArr.filter(elem => typeof elem == "object" && Array.isArray(elem));
}
export function loopOver<T>(thisArr: T[], fn:(element:T, index:number, arr:Array<T>) => any): void {
    if(!fn || typeof fn !== "function") throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`)
    for(let i = thisArr.length -1; i >= 0; i--) fn(thisArr[i], i, thisArr)
    return;
};
export async function promiseMap<T>(thisArr: T[], fn:(element:T, index:number, arr:Array<T>) => any): Promise<T[]> {
  if(!fn || typeof fn !== "function") throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`)
  return Promise.all(thisArr.map(fn));
};
export async function promiseLoopOver<T>(thisArr: T[], fn:(element:T, index:number, arr:Array<T>) => any): Promise<any> {
  if(!fn || typeof fn !== "function") throw new SyntaxError(`did not receive a valid function for the mapping, received: ${typeof fn}`)
  const promises = [];
  for(let i = thisArr.length -1; i >= 0; i--) promises.push(async () => fn(thisArr[i], i, thisArr))
  return Promise.all(promises);
};