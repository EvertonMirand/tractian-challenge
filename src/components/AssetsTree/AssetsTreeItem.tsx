import React, { useEffect } from 'react';
import {
  NestedTree,
  StatusIndicator,
  TreeItem,
  TreeItemText,
} from './AssetsTree.styled';
import { Location } from '@/types/location';
import { Asset } from '@/types/assets';
import { Icon } from '../global/Icon';
import { useDispatch } from 'react-redux';

export const AssetsTreeItem: React.FC<{
  child: Location | Asset;
  isAsset?: boolean;
  isFirst?: boolean;
}> = ({ child, isAsset, isFirst }) => {
  const dispatch = useDispatch();

  const asset = child as Asset;

  const handleToggle = (id: string) => {};

  return (
    <>
      <TreeItem onClick={() => handleToggle(child.id)}>
        <TreeItemText>{child.name}</TreeItemText>

        {asset?.gatewayId &&
          (asset?.status === 'operating' ? (
            <Icon
              alt="Energy Sensor Icon"
              icon="green-thunderbolt.png"
              height={11}
              width={11}
            />
          ) : (
            <StatusIndicator status={asset?.status} />
          ))}
      </TreeItem>
      <NestedTree>
        {child.children?.map((child) => (
          <AssetsTreeItem key={child.id} child={child} isAsset={isAsset} />
        ))}
      </NestedTree>
      {!isAsset && (
        <NestedTree>
          {(child as Location)?.assets?.map((asset) => (
            <AssetsTreeItem key={asset.id} child={asset} isAsset />
          ))}
        </NestedTree>
      )}
    </>
  );
};
