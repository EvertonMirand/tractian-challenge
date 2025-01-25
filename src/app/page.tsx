"use client";

import AssetsHeader from "@/components/AssetsHeader/AssetsHeader";
import { RootState } from "@/store/store";
import { BackgroundCardContainer } from "@/styles/page";
import { useSelector } from "react-redux";

export default function Home() {
  const { selectedCompany } = useSelector(
    (state: RootState) => state?.companies ?? {}
  );

  return (
    <div>
      {selectedCompany && (
        <BackgroundCardContainer>
          <AssetsHeader />
        </BackgroundCardContainer>
      )}
    </div>
  );
}
