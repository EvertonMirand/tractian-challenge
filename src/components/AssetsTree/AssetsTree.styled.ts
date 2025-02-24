import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: ${({ theme }) => theme.spacing.sm};
  gap: 5px;
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: 2px;
`;

export const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fonts.fontSize.sm};
  width: 100%;
`;

interface TreeItemProps {
  isSelected?: boolean;
}

export const TreeItem = styled.button<TreeItemProps>`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 6fr 0.5fr;
  text-align: left;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  width: 90%;
  margin-left: ${({ isSelected }) => (isSelected ? '16px' : '8px')};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.selectedBlue : 'transparent'};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.primaryDark : theme.colors.grayHover};
  }
`;

export const TreeItemText = styled.span<TreeItemProps>`
  font-size: ${({ theme }) => theme.fonts.fontSize.sm};
  flex: 1;
`;

export const StatusIndicator = styled.span<{
  status?: 'operating' | 'alert';
}>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme, status }) =>
    status === 'alert' ? theme.colors.danger : theme.colors.success};
`;

export const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NestedTree = styled.div`
  margin-left: ${({ theme }) => theme.spacing.lg};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

export const PageButton = styled.button<{ disabled?: boolean }>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ disabled }) => (disabled ? '#ddd' : '#007bff')};
  color: ${({ disabled }) => (disabled ? '#888' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ddd' : '#0056b3')};
  }
`;

export const PageInfo = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
