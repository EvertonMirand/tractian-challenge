import { buildTree, TreeStructure } from '@/utils/tree';
import { locationsMock } from 'mocks/companies.mock';

describe('buildTree with locationsMock', () => {
  it('should build the correct tree structure', () => {
    const result = buildTree(locationsMock as TreeStructure[]);

    expect(result).toEqual([
      {
        id: '656733611f4664001f295dd0',
        name: 'Empty Machine house',
        parentId: null,
        children: [],
      },
      {
        id: '656733b1664c41001e91d9ed',
        name: 'Machinery house',
        parentId: null,
        children: [],
      },
      {
        id: '65674204664c41001e91ecb4',
        name: 'PRODUCTION AREA - RAW MATERIAL',
        parentId: null,
        children: [
          {
            id: '656a07b3f2d4a1001e2144bf',
            name: 'CHARCOAL STORAGE SECTOR',
            parentId: '65674204664c41001e91ecb4',
            children: [],
          },
        ],
      },
    ]);
  });
});
