# @aak.lear/enum-objects

This package provides utilities and types for using const objects as enums in JavaScript and TypeScript

## Install

### npm
```shell
npm i @aak.lear/enum-objects
```

### yarn
```shell
yarn add @aak.lear/enum-objects
```

## Usage

```typescript
import { createEnumObject, createEnumObjectTypeGuard, Values } from '@aak.lear/enum-objects';

/* declarations */

export const AXES = createEnumObject(['vertical', 'horizontal']);

export const isAxis = createEnumObjectTypeGuard(AXES);

export type Axis = Values<typeof AXES>;

/* usage */

const x = AXES.horizontal // x is 'horizontal' and it's type is 'horizontal'
const y = AXES.vertical // y is 'vertical' and it's type is 'vertical'

let someAxis: Axis | undefined

if (isAxis(someAxis)) {
  // someAxis type is Axis
} else {
  // someAxis type is undefined
}

```