import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1b27;
  padding: 16px 32px;
  color: white;
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
  shouldForwardProp: (prop) => prop !== "isActive",
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
  background-color: ${(props) => (props.isActive ? "#2E93FF" : "#162447")};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#A9A9A9")};
  box-shadow: ${(props) =>
    props.isActive ? "0 4px 6px rgba(46, 147, 255, 0.4)" : "none"};
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#2E93FF" : "#1C2B3A")};
  }
`;
