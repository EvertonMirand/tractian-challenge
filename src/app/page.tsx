'use client';

import { AssetCard } from '@/components/AssetCard/AssetCard';
import AssetsHeader from '@/components/AssetsHeader/AssetsHeader';
import { AssetsTree } from '@/components/AssetsTree/AssetsTree';
import { RootState } from '@/store/store';
import { AssetsCardsContainer, BackgroundCardContainer } from '@/styles/page';
import Head from 'next/head';
import { useSelector } from 'react-redux';

export default function Home() {
  const { selectedCompany } = useSelector(
    (state: RootState) => state?.companies ?? {},
  );

  const { selectedAsset } = useSelector((state: RootState) => state.locations);

  return (
    <div>
      {selectedCompany && (
        <BackgroundCardContainer>
          <Head>
            <title>
              {selectedCompany ? `${selectedCompany.name} - Dashboard` : 'Home'}
            </title>
          </Head>
          <AssetsHeader />
          <AssetsCardsContainer>
            <AssetsTree />
            {selectedAsset && <AssetCard />}
          </AssetsCardsContainer>
        </BackgroundCardContainer>
      )}
    </div>
  );
}
