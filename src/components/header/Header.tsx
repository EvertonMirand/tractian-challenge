"use client";

import Image from "next/image";
import { ButtonGroup, HeaderContainer, UnitButton } from "./Header.styles";
import { useGetCompaniesQuery } from "@/store/services/companiesSlice";
import { Icon } from "../global/Icon";

export const Header = () => {
  const { data: companies, error, isLoading } = useGetCompaniesQuery();

  return (
    <HeaderContainer>
      <Image
        src="/images/logo-tractian.png" // Path to the logo in the `public` folder
        alt="Tractian Logo"
        width={100}
        height={14}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Could not fetch companies</p>
      ) : (
        <ButtonGroup>
          {companies?.map(({ name, id }) => (
            <UnitButton key={id}>
              <Icon alt="Unit Icon" icon="gold.png" />
              {name} Unit
            </UnitButton>
          ))}
        </ButtonGroup>
      )}
    </HeaderContainer>
  );
};
