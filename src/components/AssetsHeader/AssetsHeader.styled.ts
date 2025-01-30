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

  border: 1px solid ${(props) => props.theme.colors.borderCard};
  cursor: pointer;
  height: 32px;
  padding: 6px 16px;
  gap: 6px;
  border-radius: 3px;

  background: ${(props) =>
    props.isActive
      ? props.theme.colors.cardFilterActive
      : props.theme.colors.cardFilterDeactivate};

  box-shadow: ${(props) =>
    props.isActive ? `0 4px 6px ${props.theme.colors.buttonShadow}` : 'none'};
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.isActive
        ? props.theme.colors.cardFilterActive
        : props.theme.colors.buttonHover};
  }

  ${(props) => props.theme.style.center};

  p {
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.buttonTextActive
        : props.theme.colors.buttonTextInactive};
    font-weight: 600;
  }
`;
