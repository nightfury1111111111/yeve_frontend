import { styled } from 'styled-components';

export const SwitchType = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.gray['900']};

  > button {
    flex: 1;
    outline: none;
    border: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    padding: 8px 0;
    color: ${({ theme }) => theme.colors.gray['500']};
    margin: 4px;
    cursor: pointer;
    border-radius: 4px;
    background-color: transparent;

    &.active {
      color: ${({ theme }) => theme.colors.gray['0']};
      background-color: ${({ theme }) => theme.colors.purple['500']};
    }
  }
`;

export const PoolStats = styled.div`
  background-color: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;

    > span {
      padding: 4px 8px;
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.gray['0']};
      background-color: ${({ theme }) => theme.colors.gray['850']};
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
    }
  }
`;

export const SelectPairItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray['900']};
  padding: 8px 16px;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > img {
      width: 24px;
      height: 24px;
      border-radius: 999px;
      object-fit: cover;
    }

    > span {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
  }

  > svg > path {
    stroke: ${({ theme }) => theme.colors.gray['500']} !important;
  }
`;

export const SelectPair = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .swap-icon {
    padding: 8px;
    cursor: pointer;

    > svg > path {
      stroke: ${({ theme }) => theme.colors.gray['50']} !important;
    }
  }
`;

export const SectionLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > span {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }

  > button {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray['900']};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 4px;
    padding: 8px 24px;
    cursor: pointer;

    > svg > path {
      stroke: ${({ theme }) => theme.colors.gray['500']} !important;
    }

    > span {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.gray['50']};
    }
  }
`;

export const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
  }

  > button {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.gray['900']};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 4px;
    padding: 8px 24px;
    cursor: pointer;

    > svg > path {
      stroke: ${({ theme }) => theme.colors.gray['500']} !important;
    }

    > span {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.gray['50']};
    }
  }
`;

export const Section = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.gray['950']};
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray['800']};
  border-radius: 8px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PageContainer = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: center;
  align-items: baseline;
`;
