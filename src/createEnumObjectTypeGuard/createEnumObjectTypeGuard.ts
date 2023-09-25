/** Creates TypeGuard based on provided const object
 *
 * @param {Object} object - const object that contains equal keys and values
 *
 * @return callback that can check if provided value is one of const object values
 *
 * @example
 * const Axes = { vertical: 'vertical', 'horizontal' } as const;
 *
 * const isAxis = createEnumObjectTypeGuard(Axes);
 *
 * // javascript
 * isAxis('vertical') // true
 * isAxis('helloWorld') // false
 *
 * //typescript
 * let axis: 'horizontal' | 'vertical' | undefined
 *
 * if(isAxis(axis)) {
 *   // axis now is 'horizontal' | 'vertical'
 * } else {
 *   // axis now is undefined
 * }
 * */
export function createEnumObjectTypeGuard<T extends string>(object: {
  [key in keyof Record<T, T>]: key;
}): (value: string) => value is T {
  const valuesSet = new Set(Object.values(object));

  return (value: string): value is T => valuesSet.has(value);
}
