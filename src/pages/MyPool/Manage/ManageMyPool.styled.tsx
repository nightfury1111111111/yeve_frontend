import styled from 'styled-components';

export const Summary = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      color: ${({ theme }) => theme.colors.gray['200']};
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }

    > div {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.gray['0']};
    }
  }
`;

export const RangePercent = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > span {
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      color: ${({ theme }) => theme.colors.gray['0']};
    }

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;

      > div {
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        background-color: ${({ theme }) => theme.colors.gray['850']};
        cursor: pointer;

        &.active {
          background-color: ${({ theme }) => theme.colors.purple['500']};
        }
      }
    }
  }

  .rc-slider-handle {
    margin-top: 0 !important;
  }
`;

export const AddLiquidityButton = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.purple['500']};
  color: ${({ theme }) => theme.colors.gray['50']};
  border-radius: 4px;
  width: 100%;
  padding: 12px 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const DepositAmountValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.gray['400']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > span {
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.gray['200']};
    }

    > button {
      outline: none;
      border: none;
      background-color: ${({ theme }) => theme.colors.purple['500']};
      color: ${({ theme }) => theme.colors.gray['50']};
      border-radius: 4px;
      width: fit-content;
      padding: 4px 8px;
    }
  }
`;

export const DepositAmountToken = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.gray['0']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      height: 24px;
      width: 24px;
      object-fit: cover;
    }

    > span {
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      color: ${({ theme }) => theme.colors.gray['0']};
    }
  }
`;

export const DepositAmountItem = styled.div`
  background-color: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DepositAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

    &.gray-50 {
      color: ${({ theme }) => theme.colors.gray['50']};
    }

    &.gray-200 {
      color: ${({ theme }) => theme.colors.gray['200']};
    }

    &.font-16 {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PoolValueRight = styled.div`
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > span {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.gray['200']};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      > span {
        color: ${({ theme }) => theme.colors.gray['0']};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
      }

      > div {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 4px 8px;
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.gray['0']};
        background-color: ${({ theme }) => theme.colors.gray['850']};
      }
    }
  }
`;

export const PoolValueLeft = styled.div`
  > span {
    color: ${({ theme }) => theme.colors.gray['500']};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }

  > div {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.gray['0']};
  }
`;

export const PoolValue = styled.div`
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray['900']};
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }
`;

export const TokenRangeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    &:first-child {
      align-items: flex-start;
    }

    &:last-child {
      align-items: flex-end;
    }

    > span {
      color: ${({ theme }) => theme.colors.gray['200']};
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }

    > div {
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      color: ${({ theme }) => theme.colors.gray['0']};
    }
  }

  > span {
    > svg {
      > path {
        stroke: ${({ theme }) => theme.colors.gray['500']} !important;
      }
    }

    &.rotate-180 {
      > svg {
        transform: rotate(180deg);
      }
    }
  }
`;

export const TokenRange = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > label {
      > img:last-child {
        margin-left: -8px;
      }
    }

    > span {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.gray['0']};
    }

    > div {
      padding: 4px 8px;
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.gray['50']};
      background-color: ${({ theme }) => theme.colors.gray['850']};
      border: 1px solid ${({ theme }) => theme.colors.gray['850']};
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;

      &.status {
        background: transparent;
        border-color: ${({ theme }) => theme.colors.success['500']};
        color: ${({ theme }) => theme.colors.success['500']};
      }
    }
  }
`;

export const SwitchType = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.gray['1000']};
  border-radius: 4px;

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
      background-color: ${({ theme }) => theme.colors.gray['900']};
    }
  }
`;

export const PositionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.purple['500']};
  border-radius: 4px;
  padding: 4px 8px;
  width: fit-content;

  > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.purple['50']};
  }

  > svg {
    cursor: pointer;
    > path {
      stroke: ${({ theme }) => theme.colors.purple['50']} !important;
    }
  }
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
  align-items: flex-start;
  gap: 32px;
`;
