"use client";

import AssetsHeader from "@/components/AssetsHeader/AssetsHeader";
import { BackgroundCardContainer } from "@/styles/page";

export default function Home() {
  return (
    <div>
      <BackgroundCardContainer>
        <AssetsHeader />
      </BackgroundCardContainer>
    </div>
  );
}
