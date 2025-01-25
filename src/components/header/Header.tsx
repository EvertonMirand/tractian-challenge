"use client";

import Image from "next/image";
import { ButtonGroup, HeaderContainer, UnitButton } from "./Header.styles";
import { useGetCompaniesQuery } from "@/store/services/companiesApi";
import { Icon } from "../global/Icon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { selectCompany } from "@/store/services/companieSlice";

export const Header = () => {
  const { data: companies, error, isLoading } = useGetCompaniesQuery();
  const dispatch = useDispatch();
  const { selectedCompany } = useSelector(
    (state: RootState) => state?.companies ?? {}
  );

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
          {companies?.map((company) => (
            <UnitButton
              key={company.id}
              isActive={selectedCompany?.id === company.id}
              onClick={() => {
                dispatch(selectCompany(company));
              }}
            >
              <Icon alt="Unit Icon" icon="gold.png" />
              {company.name} Unit
            </UnitButton>
          ))}
        </ButtonGroup>
      )}
    </HeaderContainer>
  );
};
