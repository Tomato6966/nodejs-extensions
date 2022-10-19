export * from "./array.ts";

interface nodeUtilsOptions {
    improveForeach?: boolean
}

export default function nodeUtils(options?:improveForeach) {
    if(options && options.improveForeach) Array.prototype.forEach = Array.prototype.loopOver;
}