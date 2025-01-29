'use client';

import Image from 'next/image';
import { ButtonGroup, HeaderContainer, UnitButton } from './Header.styles';
import { useGetCompaniesQuery } from '@/store/services/companiesApi';
import { Icon } from '../global/Icon';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { selectCompany } from '@/store/services/companieSlice';
import { Company } from '@/types/company';

export const Header = () => {
  const { data: companies, error, isLoading } = useGetCompaniesQuery();
  const dispatch = useDispatch();
  const { selectedCompany } = useSelector(
    (state: RootState) => state?.companies ?? {},
  );

  const debouncedSetCompanyId = debounce((company: Company) => {
    dispatch(selectCompany(company));
  }, 500);

  return (
    <HeaderContainer>
      <Image
        data-testid="tractian-logo"
        src="/images/logo-tractian.png"
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
                if (selectedCompany?.id !== company.id) {
                  debouncedSetCompanyId(company);
                }
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
