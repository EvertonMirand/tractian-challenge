/* eslint-disable @typescript-eslint/no-explicit-any */
interface Arr {
  [key: string | number | symbol]: any;
}

interface MergeArraysByKeyParam<T extends Arr, G extends Arr> {
  arr1: T[];
  arr2: G[];
  keyArr1: string | number | symbol;
  keyArr2: string | number | symbol;
  keyChildrenName?: string | number | symbol;
  keyArr2NotInArr1?: string | number | symbol;
  keyToMarkTheArr1Type?: string;
  keyToMarkTheArr2Type?: string;
}

export function mergeArraysByKey<T extends Arr, G extends Arr>({
  arr1,
  arr2,
  keyArr1,
  keyArr2,
  keyChildrenName = 'children',
  keyToMarkTheArr1Type = 'type1',
  keyToMarkTheArr2Type = 'type2',
  keyArr2NotInArr1 = 'id',
}: MergeArraysByKeyParam<T, G>) {
  const map: Record<string | number | symbol, T & G> = {};

  for (const value1 of arr1) {
    const key = value1[keyArr1];
    if (key != null) {
      map[key] = {
        ...value1,
        [keyChildrenName]: [],
        [keyToMarkTheArr1Type]: true,
      } as unknown as T & G;
    }
  }

  for (const value2 of arr2) {
    const key = value2[keyArr2];
    if (key != null && map[key]) {
      map[key][keyChildrenName].push({
        ...value2,
        [keyToMarkTheArr2Type]: true,
      });
    } else {
      const fallbackKey = value2[keyArr2NotInArr1];
      if (fallbackKey != null) {
        if (!map[fallbackKey]) {
          map[fallbackKey] = {
            ...(value2 as unknown as T & G),
            [keyChildrenName]: [],
            [keyToMarkTheArr2Type]: true,
          };
        }
      }
    }
  }

  return Object.values(map);
}
