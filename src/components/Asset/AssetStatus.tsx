import { LocationAsset } from '@/types/mergedLocationAssets';
import React, { useMemo } from 'react';
import { Icon } from '../global/Icon';

const statusType = {
  operating: 'green-thunderbolt.png',
  alert: 'critical.png',
};

export const AssetStatus: React.FC<{ asset?: LocationAsset }> = ({ asset }) => {
  const { children = [], assets = [] } = asset ?? {};

  const hasChildren = useMemo(
    () => children?.length > 0 || assets?.length > 0,
    [children, assets],
  );

  return (
    !hasChildren &&
    asset?.status && (
      <Icon
        alt="Energy Sensor Icon"
        icon={statusType[asset?.status]}
        height={11}
        width={11}
      />
    )
  );
};
