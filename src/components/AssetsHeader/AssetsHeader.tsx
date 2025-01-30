import React from 'react';
import { Icon } from '../global/Icon';
import {
  AssetsHeaderContainer,
  AssetsHeaderSituationCard,
  AssetsHeaderSituationContainer,
  AssetsHeaderTitle,
} from './AssetsHeader.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { AssetStatus } from '@/types/assets';
import { setFilters } from '@/store/services/locationAssetsSlice';

const AssetsHeader: React.FC = () => {
  const { selectedCompany } = useSelector(
    (state: RootState) => state?.companies ?? {},
  );

  const dispatch = useDispatch();

  const { filters } = useSelector((state: RootState) => state?.locations ?? {});

  const { status } = filters ?? {};

  const onClick = (newStatus: AssetStatus) => {
    dispatch(
      setFilters({ status: status === newStatus ? undefined : newStatus }),
    );
  };

  return (
    <AssetsHeaderContainer>
      <AssetsHeaderTitle>
        <h2>Assets </h2>
        <h3>{`/ ${selectedCompany?.name} unit`}</h3>
      </AssetsHeaderTitle>
      <AssetsHeaderSituationContainer>
        <AssetsHeaderSituationCard
          isActive={status === 'operating'}
          onClick={() => onClick('operating')}
        >
          <Icon
            alt="Energy Sensor Icon"
            icon={`${
              status === 'operating' ? 'white' : 'blue'
            }-thunderbolt.png`}
          />
          <p>Energy Sensor</p>
        </AssetsHeaderSituationCard>
        <AssetsHeaderSituationCard
          isActive={status === 'alert'}
          onClick={() => onClick('alert')}
        >
          <Icon
            alt="Critical Icon"
            icon={`${status === 'alert' ? 'white' : 'blue'}-critical.png`}
          />
          <p>Critical</p>
        </AssetsHeaderSituationCard>
      </AssetsHeaderSituationContainer>
    </AssetsHeaderContainer>
  );
};

export default AssetsHeader;
