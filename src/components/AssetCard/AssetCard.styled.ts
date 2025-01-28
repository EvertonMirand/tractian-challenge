import styled from 'styled-components';
import { Icon } from '../global/Icon';

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

export const Status = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: green;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 12px;
`;

export const InfoSection = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const SensorSection = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

export const SensorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
