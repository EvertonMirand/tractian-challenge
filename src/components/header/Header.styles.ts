import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.headerBackground};
  padding: 16px 32px;
  color: ${(props) => props.theme.colors.white};
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export interface UnitButton {
  isActive?: boolean;
}

export const UnitButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<UnitButton>`
  display: flex;
  gap: 8px;
  ${(props) => props.theme.style.center}
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.buttonActive
      : props.theme.colors.buttonInactive};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.buttonTextActive
      : props.theme.colors.buttonTextInactive};
  box-shadow: ${(props) =>
    props.isActive ? `0 4px 6px ${props.theme.colors.buttonShadow}` : 'none'};
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.isActive
        ? props.theme.colors.buttonActive
        : props.theme.colors.buttonHover};
  }
`;
