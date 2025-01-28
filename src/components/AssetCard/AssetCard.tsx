import React from 'react';
import styled from 'styled-components';
import {
  Card,
  Header,
  InfoBlock,
  InfoSection,
  Label,
  SensorItem,
  SensorSection,
  Status,
} from './AssetCard.styled';
import Image from 'next/image';
import { Icon } from '../global/Icon';

export const AssetCard = () => {
  return (
    <Card>
      <Header>
        MOTOR RT COAL AF01 <Status />
      </Header>
      {/* <Image src="/path-to-image.jpg" alt="Equipment" /> */}
      <InfoSection>
        <InfoBlock>
          <Label>Tipo de Equipamento</Label>
          <span>Motor Elétrico (Trifásico)</span>
        </InfoBlock>
        <InfoBlock>
          <Label>Responsáveis</Label>
          <span>Elétrica</span>
        </InfoBlock>
      </InfoSection>
      <SensorSection>
        <SensorItem>
          <Icon alt="Sensor Icon" icon="sensor.png" /> HIO4510
        </SensorItem>
        <SensorItem>
          <Icon alt="Receptor Icon" icon="receptor.png" /> EUH4R27
        </SensorItem>
      </SensorSection>
    </Card>
  );
};


