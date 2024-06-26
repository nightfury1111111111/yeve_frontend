import { styled } from 'styled-components';

export const BribeContainer = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 16px;
  max-width: 1000px;
  margin: 80px auto 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 24px;
  }
`;

export const BribeBox = styled.div`
  border-radius: 8px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray['800']};
  background: ${({ theme }) => theme.colors.gray['950']};
  padding: 24px;
  width: 60%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray['0']};
  }
  input {
    background: ${({ theme }) => theme.colors.gray['900']};
    color: ${({ theme }) => theme.colors.gray['200']};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 120px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    width: 100%;
    margin-left: 8px;
    text-align: right;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
`;
export const Label = styled.div`
  color: ${({ theme }) => theme.colors.gray['0']};
  margin: 20px 0 10px;
`;

export const SwapTabItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray['50']};
  border-radius: 4px;
  transition: all ease-in 0.2s;
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.gray['900']};

  &.active {
    background: ${({ theme }) => theme.colors.purple['500']};
  }
`;

export const SwapTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
`;

export const BalanceContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray['900']};
  padding: 6px 16px;
  margin-top: 16px;
  border-radius: 4px;
`;
export const BalanceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  div:first-child {
    color: ${({ theme }) => theme.colors.gray['200']};
  }
  div:last-child {
    color: ${({ theme }) => theme.colors.gray['0']};;
  }
  margin: 10px 0;
`;

export const InputContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray['900']};
  color: ${({ theme }) => theme.colors.gray['500']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 120px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding: 14px 16px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  width: 100%;
  button {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.purple['500']};
    border: none;
    height: 30px;
    color: white;
  }
  > div {
    width: 120px;
    flex: 0;
    gap: 10px;
    align-items: center;
    background: transparent;
    padding: 0;
    svg {
      margin-top: 5px;
    }

    &.sol-icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      flex: 1;

      > svg {
        margin-top: unset;
      }

      > input {
        color: ${({ theme }) => theme.colors.gray['400']};
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        cursor: pointer;
        width: 100%;
        text-align: left;
      }
    }
  }
`;
