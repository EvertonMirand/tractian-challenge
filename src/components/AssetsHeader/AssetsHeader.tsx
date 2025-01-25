import React from "react";
import { Icon } from "../global/Icon";
import {
  AssetsHeaderContainer,
  AssetsHeaderSituationCard,
  AssetsHeaderSituationContainer,
  AssetsHeaderTitle,
} from "./AssetsHeader.styled";

// import { Container } from './styles';

const AssetsHeader: React.FC = () => {
  return (
    <AssetsHeaderContainer>
      <AssetsHeaderTitle>
        <h2>Assets </h2>
        <h3>{`/ Apex unit`}</h3>
      </AssetsHeaderTitle>
      <AssetsHeaderSituationContainer>
        <AssetsHeaderSituationCard>
          <Icon alt="Energy Sensor Icon" icon="blue-thunderbolt.png" />
          <p>Energy Sensor</p>
        </AssetsHeaderSituationCard>
        <AssetsHeaderSituationCard>
          <Icon alt="Critical Icon" icon="blue-critical.png" />
          <p>Critical</p>
        </AssetsHeaderSituationCard>
      </AssetsHeaderSituationContainer>
    </AssetsHeaderContainer>
  );
};

export default AssetsHeader;
