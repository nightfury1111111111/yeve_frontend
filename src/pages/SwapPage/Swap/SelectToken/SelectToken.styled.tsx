import { styled } from 'styled-components';

export const ArrowDownIconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 12px 0;

  > svg {
    padding: 12px;
    background: ${({ theme }) => theme.colors.gray['800']};
    border-radius: 999px;
    cursor: pointer;
  }
`;

export const TokenIcon = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 999px;
`;

export const TokenDownIcon = styled.img`
  height: 20px;
  width: 20px;
  transform: rotate(180deg);
`;

export const TokenSelect = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray['850']};
  padding: 8px 16px 8px 8px;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;

    > span {
      margin-top: 4px;
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.swap.text};
    }
  }
`;

export const TokenButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > label {
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray['200']};
    font-weight: 400;
  }

  > button {
    width: 60px;
    background: ${({ theme }) => theme.colors.swap.button};
    padding: 4px 8px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.swap.text};
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.24px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const TokenValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.swap.text};
`;

export const TokenItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 16px 16px;

  &.select {
    padding-right: 0;
    gap: 16px;
  }

  > span {
    color: ${({ theme }) => theme.colors.swap.text};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }

  > label {
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray['200']};
    font-weight: 400;
  }
`;

export const TokenContainer = styled.div`
  margin-top: 12px;
  background: ${({ theme }) => theme.colors.gray['800']};
  border-radius: 4px;
  padding: 16px 0;
  gap: 16px;
`;
