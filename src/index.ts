export * from "./arrayMethods.ts";

interface nodeUtilsOptions {
    improveForeach?: boolean
}

export async function extendPrototypes(options?:improveForeach) {
    if(options && options.improveForeach) Array.prototype.forEach = Array.prototype.loopOver;
    await import("./extendArrayPrototypes.ts");
}