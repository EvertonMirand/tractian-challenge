import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 8px;
  gap: 5px;
  font-family: Arial, sans-serif;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: 2px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  width: 100%;
`;

export const TreeItem = styled.button<{ isSelected?: boolean }>`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 7fr 0.5fr;
  text-align: left;
  padding: 4px 8px;
  width: 100%;
  margin-left: ${({ isSelected }) => (isSelected ? '16px' : '8px')};
  background-color: ${({ isSelected }) =>
    isSelected ? '#1e90ff' : 'transparent'};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#1c7ed6' : '#f0f0f0'};
  }
`;

export const TreeItemText = styled.span`
  font-size: 14px;
  flex: 1;
`;

export const StatusIndicator = styled.span<{
  status?: 'operating' | 'alert';
}>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 8px;

  background-color: ${({ status }) => (status === 'alert' ? 'red' : 'green')};
`;

export const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NestedTree = styled.div`
  margin-left: 16px;
`;
