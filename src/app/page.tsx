'use client';

import { AssetCard } from '@/components/AssetCard/AssetCard';
import AssetsHeader from '@/components/AssetsHeader/AssetsHeader';
import { AssetsTree } from '@/components/AssetsTree/AssetsTree';
import { RootState } from '@/store/store';
import { AssetsCardsContainer, BackgroundCardContainer } from '@/styles/page';
import { useSelector } from 'react-redux';

export default function Home() {
  const { selectedCompany } = useSelector(
    (state: RootState) => state?.companies ?? {},
  );

  return (
    <div>
      {selectedCompany && (
        <BackgroundCardContainer>
          <AssetsHeader />
          <AssetsCardsContainer>
            <AssetsTree />
            <AssetCard />
          </AssetsCardsContainer>
        </BackgroundCardContainer>
      )}
    </div>
  );
}
