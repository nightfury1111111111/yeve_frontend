import { styled } from 'styled-components';

export const DeadlineInput = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.gray['900']};
  border: 1px solid ${({ theme }) => theme.colors.gray['800']};
  border-radius: 4px;

  > input {
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.gray['0']};
  }

  > span {
    color: ${({ theme }) => theme.colors.gray['500']};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px; /* 150% */
  }
`;

export const SlippageItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  color: ${({ theme }) => theme.colors.gray['0']};
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray['800']};
  cursor: pointer;

  &.active {
    background: ${({ theme }) => theme.colors.purple['500']};
  }
`;

export const SlippageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const SlippageTolerance = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > span {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  > svg {
    width: 16px;
    height: 16px;

    > path {
      stroke: ${({ theme }) => theme.colors.gray['500']} !important;
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${({ theme }) => theme.colors.gray['900']};
    padding: 8px 12px;
    border-radius: 4px;
    width: fit-content;
    cursor: pointer;

    > svg > path {
      stroke: ${({ theme }) => theme.colors.gray['200']} !important;
    }
  }

  > button {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    background: ${({ theme }) => theme.colors.gray['900']};
    padding: 8px 12px;
    border-radius: 4px;
    width: fit-content;
    cursor: pointer;
    outline: none;
    border: none;
  }
`;

export const TokenModalForm = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.gray['950']};
  border-radius: 8px;
  width: fit-content;
  max-height: 60%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TokenModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background: ${({ theme }) => `${theme.colors.gray['1000']}80`};
  backdrop-filter: blur(4px);
`;
