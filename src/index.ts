export * from "./arrayMethods";

interface nodeUtilsOptions {
    improveForEach?: boolean
}

export async function extendPrototypes(options?:improveForeach) {
    await import("./extendArrayPrototypes");
    if(options && options.improveForEach) Array.prototype.forEach = Array.prototype.loopOver;
}