/* eslint-disable @typescript-eslint/no-explicit-any */
interface Arr {
  [key: string | number | symbol]: any;
}

interface mergeArraysByKeyParam<T extends Arr, G extends Arr> {
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
}: mergeArraysByKeyParam<T, G>) {
  const map = arr1.reduce((map, value1) => {
    return {
      ...map,
      [value1[keyArr1]]: {
        ...value1,
        [keyChildrenName]: [],
        [keyToMarkTheArr1Type]: true,
      },
    };
  }, {} as any);

  arr2.forEach((value2) => {
    const locationId = value2[keyArr2]; // Get the locationId from asset data

    if (locationId && map[locationId]) {
      // Attach asset to the correct location
      map[locationId][keyChildrenName]?.push({
        ...value2,
        [keyToMarkTheArr2Type]: true,
      });
    } else {
      // Handle assets that don't belong to any location (if needed)
      map[value2[keyArr2NotInArr1]] = {
        ...value2,
        [keyChildrenName]: [],
        [keyToMarkTheArr2Type]: true,
      };
    }
  });

  return Object.values(map);
}
