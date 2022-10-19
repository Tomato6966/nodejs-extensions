declare global {
    interface Array<T> {
        /** Get the last Element of the Array */
        lastElement(): T;
        /** Get the last Element of the Array */
        last(): T;
        /** Get the first Element of the Array */
        firstElement(): T;
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
export {};
