"use client";

import Image from "next/image";
import { ButtonGroup, HeaderContainer, UnitButton } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Image
        src="/images/logo-tractian.png" // Path to the logo in the `public` folder
        alt="Tractian Logo"
        width={100}
        height={14}
      />
      <ButtonGroup>
        <UnitButton>Apex Unit</UnitButton>
        <UnitButton>Tobias Unit</UnitButton>
        <UnitButton>Jaguar Unit</UnitButton>
      </ButtonGroup>
    </HeaderContainer>
  );
};
