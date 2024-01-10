import { styled } from 'styled-components';

export const SelectRangeManualItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray['900']};

  > button {
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 999px;
    height: 40px;
    width: 40px;
    background: ${({ theme }) => theme.colors.gray['850']};
    display: flex;
    align-items: center;
    justify-content: center;

    > svg > path {
      stroke: ${({ theme }) => theme.colors.gray['500']} !important;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    > span {
      color: ${({ theme }) => theme.colors.gray['50']};
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
    }

    > label {
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.gray['200']};
    }
  }
`;

export const SelectRangeManual = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 8px;
`;

export const PriceRangeRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.gray['50']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 4px;

    > div {
      height: 10px;
      width: 10px;
      border-radius: 999px;
      background: ${({ theme }) => theme.colors.gray['750']};

      &.risk {
        background: ${({ theme }) => theme.colors.alert['500']} !important;
      }

      &.profit {
        background: ${({ theme }) => theme.colors.success['500']} !important;
      }
    }
  }
`;

export const PriceRangeElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.gray['900']};
  border: 2px solid ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => theme.colors.purple['900']};
    border: 2px solid ${({ theme }) => theme.colors.purple['500']};

    > label {
      > div {
        background: ${({ theme }) => theme.colors.purple['500']};
        border-color: ${({ theme }) => theme.colors.purple['500']};

        > svg {
          display: block;
        }
      }
    }

    ${PriceRangeRating} {
      > div {
        > div {
          background: ${({ theme }) => theme.colors.purple['750']};
        }
      }
    }
  }

  > label {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;

    > div {
      width: 20px;
      height: 20px;
      border-radius: 999px;
      border: 2px solid ${({ theme }) => theme.colors.gray['500']};
      display: flex;
      align-items: center;
      justify-content: center;

      > svg {
        display: none;

        > path {
          stroke: ${({ theme }) => theme.colors.gray['50']} !important;
        }
      }
    }

    > span {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.gray['50']};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const PriceRangeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 8px;
`;

export const FreeTierElement = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.gray['900']};
  border: 2px solid ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;

  &.active {
    background-color: ${({ theme }) => theme.colors.purple['900']};
    border: 2px solid ${({ theme }) => theme.colors.purple['500']};
  }

  > label {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.16px;
    color: ${({ theme }) => theme.colors.gray['50']};
    cursor: pointer;
  }

  > span {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.36px;
  }

  > div {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.24px;
    color: ${({ theme }) => theme.colors.gray['50']};
    background-color: ${({ theme }) => theme.colors.gray['850']};
    border-radius: 4px;
    width: 100%;
    padding: 4px 0;
    text-align: center;
    cursor: pointer;
  }
`;

export const FreeTierList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 8px;
`;

export const CreatePositionButton = styled.button`
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
  border: 2px solid ${({ theme }) => theme.colors.purple['500']};

  &:hover {
    background: ${({ theme }) => theme.colors.purple['600']};
    border-color: ${({ theme }) => theme.colors.purple['300']};
  }
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

export const SelectedProviderAPR = styled.div`
  background-color: ${({ theme }) => theme.colors.gray['800']};
  padding: 4px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > img {
      height: 24px;
      width: 24px;
      border-radius: 999px;
    }

    > span {
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.gray['400']};
    }
  }

  > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.gray['0']};
  }
`;

export const SelectedProvider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > img:first-child {
      height: 20px;
      width: 20px;
      border-radius: 999px;
      border: 2px solid ${({ theme }) => theme.colors.gray['600']};
    }

    > img:last-child {
      height: 20px;
      width: auto;
      object-fit: cover;
    }
  }

  > svg {
    cursor: pointer;

    > path {
      stroke: ${({ theme }) => theme.colors.gray['500']} !important;
    }
  }
`;

export const ALMProvider = styled.div`
  background-color: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const SwitchType = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.gray['900']};
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

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 32px;
    }

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

    > div {
      display: none;

      > svg > path {
        stroke: ${({ theme }) => theme.colors.gray['500']} !important;
      }
    }

    > svg > path {
      stroke: ${({ theme }) => theme.colors.gray['500']} !important;
    }

    > span {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.gray['50']};
    }

    @media (max-width: 768px) {
      > div {
        display: block;
      }

      > svg,
      > span {
        display: none;
      }
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
  padding: 0 16px;

  @media (max-width: 964px) {
    flex-direction: column;

    ${Section} {
      width: 100%;
    }
  }
`;
