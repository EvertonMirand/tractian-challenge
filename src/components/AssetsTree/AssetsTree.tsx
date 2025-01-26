'use client';

import React from 'react';
import {
  Container,
  NestedTree,
  SearchInput,
  StatusIndicator,
  TreeContainer,
  TreeItem,
  TreeItemText,
} from './AssetsTree.styled';

export const AssetsTree = () => {
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
