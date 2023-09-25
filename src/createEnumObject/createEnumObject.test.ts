import { expect, test } from 'bun:test';
import { createEnumObject } from './createEnumObject';

test('createEnumObject', () => {
  const FooBar = createEnumObject(['foo', 'bar']);

  // eslint-disable-next-line guard-for-in
  for (const key in FooBar) {
    expect(FooBar[key as keyof typeof FooBar]).toBe(key);
  }
});
