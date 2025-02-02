import { mergeArraysByKey } from '@/utils/arrays';
import { assetsMock, locationAsset, locationsMock } from 'mocks/companies.mock';

describe('mergeArraysByKey with locationsMock and assetsMock', () => {
  it('should merge assets into their corresponding locations based on locationId', () => {
    const result = mergeArraysByKey({
      arr1: locationsMock,
      arr2: assetsMock,
      keyArr1: 'id',
      keyArr2: 'locationId',
      keyChildrenName: 'assets',
      keyToMarkTheArr1Type: 'isLocation',
      keyToMarkTheArr2Type: 'isAsset',
    });

    expect(result).toEqual(locationAsset);
  });
});
