import React, { useCallback, useMemo } from 'react';
import { NestedTree, TreeItem, TreeItemText } from './AssetsTree.styled';
import { Location } from '@/types/location';

import { Icon } from '../global/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { LocationAsset } from '@/types/mergedLocationAssets';
import {
  setSelectedAsset,
  toggleItemOpen,
} from '@/store/services/locationAssetsSlice';
import { RootState } from '@/store/store';
import { AssetStatus } from '../Asset/AssetStatus';

export const AssetsTreeItem: React.FC<{
  child: LocationAsset;
}> = ({ child }) => {
  const dispatch = useDispatch();

  const { openItems, selectedAsset } = useSelector(
    (state: RootState) => state.locations,
  );

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

  const isSelected = useMemo(
    () => selectedAsset?.id === child.id,
    [selectedAsset, child],
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
      icon: `${isSelected ? 'white' : 'blue'}-asset-gateway.png`,
    };
  }, [child, hasChildren, isSelected]);

  const onClick = useCallback(() => {
    if (hasChildren) {
      handleToggle(child.id);
    } else if (!hasChildren && child?.gatewayId) {
      dispatch(setSelectedAsset(child));
    }
  }, [child, dispatch, handleToggle, hasChildren]);

  return (
    <>
      <TreeItem
        onClick={onClick}
        isSelected={isSelected}
        data-testid={`tree-item-${child.id}`}
      >
        <div>
          {hasChildren && (
            <Icon
              data-testid={`expand-item-${child.id}`}
              alt="Expand Icon"
              icon="chevron-down.png"
            />
          )}
        </div>
        <Icon alt={leftIcon.alt} icon={leftIcon.icon} />
        <TreeItemText>{child.name}</TreeItemText>
        <div>
          {!hasChildren && child?.gatewayId && <AssetStatus asset={child} />}
        </div>
      </TreeItem>
      {openItems[child.id] && (
        <>
          <NestedTree data-testid={`nested-tree-${child.id}`}>
            {child.children?.map((child) => (
              <AssetsTreeItem key={child.id} child={child} />
            ))}
          </NestedTree>
          {!child?.isAsset && (
            <NestedTree data-testid={`nested-tree-${child.id}`}>
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
