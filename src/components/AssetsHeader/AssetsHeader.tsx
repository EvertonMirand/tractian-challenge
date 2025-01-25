import React from "react";
import { Icon } from "../global/Icon";
import {
  AssetsHeaderContainer,
  AssetsHeaderSituationCard,
  AssetsHeaderSituationContainer,
  AssetsHeaderTitle,
} from "./AssetsHeader.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

// import { Container } from './styles';

const AssetsHeader: React.FC = () => {
  const { selectedCompany } = useSelector(
    (state: RootState) => state?.companies ?? {}
  );

  return (
    <AssetsHeaderContainer>
      <AssetsHeaderTitle>
        <h2>Assets </h2>
        <h3>{`/ ${selectedCompany?.name} unit`}</h3>
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
