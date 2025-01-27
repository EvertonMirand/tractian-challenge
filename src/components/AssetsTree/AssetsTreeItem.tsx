import React, { useEffect } from 'react';
import {
  NestedTree,
  StatusIndicator,
  TreeItem,
  TreeItemText,
} from './AssetsTree.styled';
import { Location } from '@/types/location';

import { Icon } from '../global/Icon';
import { useDispatch } from 'react-redux';
import { LocationAsset } from '@/types/mergedLocationAssets';

export const AssetsTreeItem: React.FC<{
  child: LocationAsset;
  isAsset?: boolean;
  isFirst?: boolean;
}> = ({ child }) => {
  const dispatch = useDispatch();

  const handleToggle = (id: string) => {};

  return (
    <>
      <TreeItem onClick={() => handleToggle(child.id)}>
        <TreeItemText>{child.name}</TreeItemText>

        {child?.gatewayId &&
          (child?.status === 'operating' ? (
            <Icon
              alt="Energy Sensor Icon"
              icon="green-thunderbolt.png"
              height={11}
              width={11}
            />
          ) : (
            <StatusIndicator status={child?.status} />
          ))}
      </TreeItem>
      <NestedTree>
        {child.children?.map((child) => (
          <AssetsTreeItem key={child.id} child={child} />
        ))}
      </NestedTree>
      {!child?.isAsset && (
        <NestedTree>
          {(child as Location)?.assets?.map((asset) => (
            <AssetsTreeItem key={asset.id} child={asset} isAsset />
          ))}
        </NestedTree>
      )}
    </>
  );
};
