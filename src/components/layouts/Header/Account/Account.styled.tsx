import { styled } from 'styled-components';

export const SelectToken = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.gray['950']};
  border-radius: 4px;
  cursor: pointer;

  > span {
    margin-top: 1px;
    font-size: 16px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.gray['50']};
    font-weight: 600;
  }
`;

export const AccountInfo = styled(SelectToken)``;

export const AccountContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
