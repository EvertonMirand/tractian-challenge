import styled from 'styled-components';

export const AssetsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AssetsHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h3 {
    color: ${(props) => props.theme.colors.neutralTitle};
  }
`;

export const AssetsHeaderSituationContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export interface AssetsHeaderSituationCardProp {
  isActive?: boolean;
}

export const AssetsHeaderSituationCard = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<AssetsHeaderSituationCardProp>`
  display: flex;
  width: Hug (98px) px;
  border: 1px solid #d8dfe6;
  border: none;
  cursor: pointer;
  height: Hug (32px) px;
  padding: 6px 16px 6px 16px;
  gap: 6px;
  border-radius: 3px;
  opacity: 0px;

  background-color: ${(props) => (props.isActive ? '#2E93FF' : '#162447')};
  color: ${(props) => (props.isActive ? '#FFFFFF' : '#A9A9A9')};
  box-shadow: ${(props) =>
    props.isActive ? '0 4px 6px rgba(46, 147, 255, 0.4)' : 'none'};
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#2E93FF' : '#1C2B3A')};
  }

  ${(props) => props.theme.style.center};

  p {
    color: ${(props) => props.theme.colors.neutralGray};
    font-weight: 600;
  }
`;
