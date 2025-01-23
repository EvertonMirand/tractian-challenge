"use client";

import {
  ButtonGroup,
  HeaderContainer,
  Logo,
  UnitButton,
} from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Tractian</Logo>
      <ButtonGroup>
        <UnitButton isActive>Apex Unit</UnitButton>
        <UnitButton>Tobias Unit</UnitButton>
        <UnitButton>Jaguar Unit</UnitButton>
      </ButtonGroup>
    </HeaderContainer>
  );
};
