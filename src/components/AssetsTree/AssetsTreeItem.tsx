import React, { useCallback, useMemo } from 'react';
import {
  NestedTree,
  StatusIndicator,
  TreeItem,
  TreeItemText,
} from './AssetsTree.styled';
import { Location } from '@/types/location';

import { Icon } from '../global/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { LocationAsset } from '@/types/mergedLocationAssets';
import { toggleItemOpen } from '@/store/services/locationAssetsSlice';
import { RootState } from '@/store/store';

export const AssetsTreeItem: React.FC<{
  child: LocationAsset;
}> = ({ child }) => {
  const dispatch = useDispatch();

  const { openItems } = useSelector((state: RootState) => state.locations);

  const handleToggle = useCallback(
    (id: string) => {
      dispatch(toggleItemOpen(id));
    },
    [dispatch],
  );

  const { children = [], assets = [] } = child;

  const hasChildren = useMemo(
    () => children?.length > 0 || assets?.length > 0,
    [children, assets],
  );

  const leftIcon = useMemo(() => {
    const { isAsset, isLocation, gatewayId } = child;
    if (isLocation) {
      return {
        alt: 'Location Icon',
        icon: 'location.png',
      };
    } else if (hasChildren || (isAsset && !gatewayId)) {
      return {
        alt: 'Asset Icon',
        icon: 'asset-no-gateway.png',
      };
    }
    return {
      alt: 'Gateway Icon',
      icon: `blue-asset-gateway.png`,
    };
  }, [child, hasChildren]);

  const onClick = useCallback(() => {
    if (hasChildren) {
      handleToggle(child.id);
    } else {
    }
  }, [child.id, handleToggle, hasChildren]);

  return (
    <>
      <TreeItem onClick={onClick}>
        <div>
          {hasChildren && <Icon alt="Expand Icon" icon="chevron-down.png" />}
        </div>
        <Icon alt={leftIcon.alt} icon={leftIcon.icon} />
        <TreeItemText>{child.name}</TreeItemText>
        <div>
          {!hasChildren &&
            child?.gatewayId &&
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
        </div>
      </TreeItem>
      {openItems[child.id] && (
        <>
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
      )}
    </>
  );
};
