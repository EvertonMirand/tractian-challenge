import React, { useEffect, useMemo } from 'react';
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
}> = ({ child }) => {
  const dispatch = useDispatch();

  const handleToggle = (id: string) => {};

  const leftIcon = useMemo(() => {
    const { isAsset, isLocation, gatewayId } = child;
    if (isLocation) {
      return {
        alt: 'Location Icon',
        icon: 'location.png',
      };
    } else if (isAsset && !gatewayId) {
      return {
        alt: 'Asset Icon',
        icon: 'asset-no-gateway.png',
      };
    }
    return {
      alt: 'Gateway Icon',
      icon: `blue-asset-gateway.png`,
    };
  }, [child]);

  const { children = [], assets = [] } = child;

  return (
    <>
      <TreeItem onClick={() => handleToggle(child.id)}>
        {(children?.length > 0 || assets?.length > 0) && (
          <Icon alt="Expand Icon" icon="chevron-down.png" />
        )}
        <Icon alt={leftIcon.alt} icon={leftIcon.icon} />
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
            <AssetsTreeItem key={asset.id} child={asset} />
          ))}
        </NestedTree>
      )}
    </>
  );
};
