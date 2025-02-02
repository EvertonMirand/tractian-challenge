import React from 'react';

import {
  Card,
  Header,
  InfoBlock,
  InfoSection,
  Label,
  SensorItem,
  SensorItemTitle,
  SensorItemValue,
  SensorSection,
} from './AssetCard.styled';

import { Icon } from '../global/Icon';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { AssetStatus } from '../Asset/AssetStatus';

const sensorTypeName: { [key: string]: string } = {
  energy: 'Eletric',
  vibration: 'Mecanic',
};

export const AssetCard = () => {
  const { selectedAsset } = useSelector((state: RootState) => state.locations);

  return (
    <Card data-testid={`asset-card-${selectedAsset?.id ?? ''}`}>
      <Header data-testid={`asset-card-header-${selectedAsset?.id ?? ''}`}>
        {selectedAsset?.name} <AssetStatus asset={selectedAsset} />
      </Header>

      <InfoSection>
        <InfoBlock>
          <Label>Equipament type</Label>
          <span>Eletric motor </span>
        </InfoBlock>
        <InfoBlock>
          <Label>Responsáveis</Label>
          <span>{sensorTypeName[selectedAsset?.sensorType ?? ''] ?? ''}</span>
        </InfoBlock>
      </InfoSection>
      <SensorSection>
        <SensorItem>
          <SensorItemTitle>
            <Icon alt="Sensor Icon" icon="sensor.png" />
            <p>Sensor </p>
          </SensorItemTitle>
          <SensorItemValue status={selectedAsset?.status}>
            {selectedAsset?.sensorId ?? ''}
          </SensorItemValue>
        </SensorItem>
        <SensorItem>
          <SensorItemTitle>
            <Icon alt="Gateway Icon" icon="receptor.png" /> <p>Gateway </p>
          </SensorItemTitle>

          <SensorItemValue status={selectedAsset?.status}>
            {selectedAsset?.gatewayId ?? ''}
          </SensorItemValue>
        </SensorItem>
      </SensorSection>
    </Card>
  );
};
