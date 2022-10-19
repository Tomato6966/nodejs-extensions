export * from './arrayMethods';

interface NodeUtilsOptions {
  improveForEach?: boolean;
}
export * from './extendArrayPrototypes';

export function ExtendExtraPrototypes(options?: NodeUtilsOptions) {
  if (options && options.improveForEach) Array.prototype.forEach = Array.prototype.loopOver;
}
