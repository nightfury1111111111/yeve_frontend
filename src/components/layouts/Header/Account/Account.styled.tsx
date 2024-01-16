import { styled } from 'styled-components';

export const ConnectButtonWrap = styled.div`
  button {
    background-color: ${({ theme }) => theme.colors.gray['950']};
    border: 2px solid ${({ theme }) => theme.colors.gray['950']};
    text-wrap: nowrap;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray['900']};
      border-color: ${({ theme }) => theme.colors.gray['750']};
    }
  }
`;

export const ConnectButton = styled.button`
  width: 200px;
  height: 48px;
  background: ${({ theme }) => theme.colors.purple['450']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;

  > svg {
    path {
      stroke: ${({ theme }) => theme.colors.gray['0']} !important;
    }
  }

  > span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray['50']};
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    width: 48px;

    > span {
      display: none;
    }
  }
`;

export const SelectToken = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  width: 160px;
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

export const Network = styled(SelectToken)`
  background: ${({ theme }) => theme.colors.gray['1000']};

  @media screen and (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.gray['950']};
  }
`;

export const AccountInfo = styled(SelectToken)``;

export const AccountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const SolanaContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-right: 10px;
`;
