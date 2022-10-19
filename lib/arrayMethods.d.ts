export interface ArrayFunctions {
    /** Get the last Element of the Array */
    lastElement(thisArr: any[]): any;
    /** Get the last Element of the Array */
    last(thisArr: any[]): any;
    /** Get the first Element of the Array */
    firstElement(thisArr: any[]): any;
    /** Get the first Element of the Array */
    first(thisArr: any[]): any;
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
export declare function shuffle<T>(thisArr: T[]): T[];
export declare function lastElement<T>(thisArr: T[]): T;
export declare function last<T>(thisArr: T[]): T;
export declare function first<T>(thisArr: T[]): T;
export declare function firstElement<T>(thisArr: T[]): T;
export declare function chunks<T>(thisArr: T[], chunkSize: number): T[][];
export declare function sum<T>(thisArr: T[], mapFn?: (element: any, index: number, arr: any[]) => any): number;
export declare function sumNumbersOnly<T>(thisArr: T[], mapFn?: (element: any, index: number, arr: any[]) => any): number;
export declare function removeNullish<T>(thisArr: T[]): T[];
export declare function removeUndefined<T>(thisArr: T[]): T[];
export declare function removeEmptyStrings<T>(thisArr: T[]): T[];
export declare function removeNaNs<T>(thisArr: T[]): T[];
export declare function remove<T>(thisArr: T[], ...elems: T[]): T[];
export declare function removeDuplicates<T>(thisArr: T[]): T[];
export declare function merge<T>(thisArr: T[], ...elements: any[]): any[];
export declare function keepStrings<T>(thisArr: T[]): T[];
export declare function keepNumbers<T>(thisArr: T[]): T[];
export declare function keepBoolean<T>(thisArr: T[]): T[];
export declare function keepObjects<T>(thisArr: T[]): T[];
export declare function keepArrays<T>(thisArr: T[]): T[];
export declare function loopOver<T>(thisArr: T[], fn: (element: T, index: number, arr: T[]) => any): any;
export declare function promiseMap<T>(thisArr: T[], fn: (element: T, index: number, arr: T[]) => Promise<any[]>): Promise<any[]>;
export declare function promiseLoopOver<T>(thisArr: T[], fn: (element: T, index: number, arr: T[]) => Promise<any>): Promise<any>;
declare const _default: ArrayFunctions;
export default _default;
