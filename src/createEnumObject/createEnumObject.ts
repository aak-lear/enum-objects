/** Creates const object from keys array
 *
 * @param {Array.<string>} keys - array of strings that will be keys and values of resulting const object
 * @return {Object} with equal keys and values
 *
 * @example
 * const Axes = createEnumObject(['vertical', 'horizontal']);
 *
 * Axes.vertical // 'vertical'
 * Axes.horizontal // 'horizontal'
 * */
export function createEnumObject<T extends string>(keys: readonly T[]): { [key in T]: key } {
  return keys.reduce((acc, key) => {
    acc[key] = key;
    return acc;
  }, {} as { [key in T]: key });
}
