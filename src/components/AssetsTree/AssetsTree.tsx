'use client';

import React, { useEffect, useState } from 'react';
import {
  Container,
  NestedTree,
  SearchInput,
  StatusIndicator,
  TreeContainer,
  TreeItem,
  TreeItemText,
} from './AssetsTree.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useGetLocationsQuery } from '@/store/services/locationApi';
import { useGetAssetsQuery } from '@/store/services/assetsApi';

interface Arr {
  [key: string | number | symbol]: any;
}

function mergeArraysByKey<T extends Arr, G extends Arr>(
  arr1: T[],
  arr2: G[],
  keyArr1: string | number | symbol,
  keyArr2: string | number | symbol,
  keyChildrenName: string | number | symbol = 'children',
) {
  const map = arr1.reduce((map, value1) => {
    return { ...map, [value1[keyArr1]]: { ...value1, [keyChildrenName]: [] } };
  }, {} as any);

  // Step 2: Loop through assets and assign them to their corresponding location in locationMap
  arr2.forEach((value2) => {
    console.log(value2, 'v2');
    if (value2[keyArr2] && map[value2[keyArr2]]) {
      map[value2[keyArr2]]?.[keyChildrenName]?.push(value2);
    }
  });

  return Object.values(map);
}

export const AssetsTree = () => {
  const { selectedCompany } = useSelector(
    (state: RootState) => state?.companies ?? {},
  );

  const {
    data: locations,
    error: locationError,
    isLoading: locationLoading,
  } = useGetLocationsQuery(selectedCompany?.id ?? '', {
    skip: !selectedCompany?.id,
  });

  const {
    data: assets,
    error: assetsError,
    isLoading: assetsLoading,
  } = useGetAssetsQuery(selectedCompany?.id ?? '', {
    skip: !selectedCompany?.id,
  });

  console.log(
    mergeArraysByKey(locations ?? [], assets ?? [], 'id', 'locationId', 'assets'),
  );

  if (locationError || assetsError) {
    return <p>Could not fetch locations or assets</p>;
  }

  if (locationLoading || assetsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <SearchInput placeholder="Buscar Ativo ou Local" />

      <TreeContainer>
        <TreeItem>
          <TreeItemText>PRODUCTION AREA - RAW MATERIAL</TreeItemText>
        </TreeItem>

        <NestedTree>
          <TreeItem>
            <TreeItemText>CHARCOAL STORAGE SECTOR</TreeItemText>
          </TreeItem>

          <NestedTree>
            <TreeItem>
              <TreeItemText>CONVEYOR BELT ASSEMBLY</TreeItemText>
            </TreeItem>

            <NestedTree>
              <TreeItem>
                <TreeItemText>MOTOR TC01 COAL UNLOADING AF02</TreeItemText>
              </TreeItem>

              <NestedTree>
                <TreeItem isSelected>
                  <TreeItemText>MOTOR RT COAL AF01</TreeItemText>
                  <StatusIndicator status="normal" />
                </TreeItem>
              </NestedTree>
            </NestedTree>
          </NestedTree>
        </NestedTree>

        <TreeItem>
          <TreeItemText>Machinery House</TreeItemText>
        </TreeItem>

        <NestedTree>
          <TreeItem>
            <TreeItemText>MOTORS H12D</TreeItemText>
          </TreeItem>

          <NestedTree>
            <TreeItem>
              <TreeItemText>MOTORS H12D - Stage 1</TreeItemText>
              <StatusIndicator status="error" />
            </TreeItem>
            <TreeItem>
              <TreeItemText>MOTORS H12D - Stage 2</TreeItemText>
              <StatusIndicator status="error" />
            </TreeItem>
            <TreeItem>
              <TreeItemText>MOTORS H12D - Stage 3</TreeItemText>
              <StatusIndicator status="normal" />
            </TreeItem>
          </NestedTree>
        </NestedTree>

        <TreeItem>
          <TreeItemText>EMPTY MACHINE HOUSE</TreeItemText>
        </TreeItem>

        <TreeItem>
          <TreeItemText>Fan - External</TreeItemText>
          <StatusIndicator status="normal" />
        </TreeItem>
      </TreeContainer>
    </Container>
  );
};
