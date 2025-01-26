interface Arr {
  [key: string | number | symbol]: any;
}

export function mergeArraysByKey<T extends Arr, G extends Arr>(
  arr1: T[],
  arr2: G[],
  keyArr1: string | number | symbol,
  keyArr2: string | number | symbol,
  keyChildrenName: string | number | symbol = 'children',
) {
  const map = arr1.reduce((map, value1) => {
    return { ...map, [value1[keyArr1]]: { ...value1, [keyChildrenName]: [] } };
  }, {} as any);

  arr2.forEach((value2) => {
    if (value2[keyArr2] && map[value2[keyArr2]]) {
      map[value2[keyArr2]]?.[keyChildrenName]?.push(value2);
    }
  });

  return Object.values(map);
}
