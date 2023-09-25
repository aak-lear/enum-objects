import { expect, test } from 'bun:test';
import { createEnumObject } from '../createEnumObject';
import { createEnumObjectTypeGuard } from './createEnumObjectTypeGuard';

test('createEnumObjectTypeGuard', () => {
  const Axes = createEnumObject(['horizontal', 'vertical']);

  const isAxis = createEnumObjectTypeGuard(Axes);

  expect(isAxis('horizontal')).toBe(true);
  expect(isAxis('vertical')).toBe(true);
  expect(isAxis('foo')).toBe(false);
  expect(isAxis('bar')).toBe(false);
});
