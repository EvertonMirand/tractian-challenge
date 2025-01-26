interface TreeStructure {
  id: string;
  parentId?: string;
  children?: TreeStructure[];
}

function buildTree<T extends TreeStructure>(trees: T[]): T[] {
  const map = new Map<string, T>();
  const newTree: T[] = [];

  trees.forEach((tree) => {
    map.set(tree.id, { ...tree, children: [] });
  });

  trees.forEach((tree) => {
    if (tree.parentId) {
      const parent = map.get(tree.parentId);
      parent?.children?.push(map.get(tree.id)!);
    } else {
      newTree.push(map.get(tree.id)!);
    }
  });

  return newTree;
}
