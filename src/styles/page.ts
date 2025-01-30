'use client';

import styled from 'styled-components';

export const BackgroundCardContainer = styled.div`
  margin: 8px;
  width: Fill (1, 320px) px;
  height: Fill (796px) px;
  padding: 16px;
  gap: 12px;
  border-radius: 4px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  background: ${(props) => props.theme.colors.white};
`;

export const AssetsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 8px;
  margin-top: 10px;
`;
