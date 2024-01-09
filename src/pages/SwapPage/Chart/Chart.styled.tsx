import { styled } from 'styled-components';

export const ChartWrap = styled.div`
  flex: 1;
`;

export const TradingViewRangeItem = styled.div`
  color: ${({ theme }) => theme.colors.gray['50']};
  background: ${({ theme }) => theme.colors.gray['950']};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.28px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.purple['500']};
  }
`;

export const TradingViewRange = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoPrice = styled.div`
  margin-top: 24px;

  > div {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.gray['50']};
  }

  > label {
    color: ${({ theme }) => theme.colors.success['500']};
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonControl = styled.div`
  display: flex;
  align-items: center;

  > button {
    color: ${({ theme }) => theme.colors.gray['50']};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    padding: 8px 0;
    outline: none;
    border: none;
    background: ${({ theme }) => theme.colors.gray['950']};
    cursor: pointer;
    width: 72px;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &.active {
      background: ${({ theme }) => theme.colors.purple['500']};
      border-radius: 4px;
    }
  }
`;

export const TokenWrap = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 999px;

    &:nth-child(2) {
      margin-left: -8px;
    }
  }

  > span {
    color: ${({ theme }) => theme.colors.gray['50']};
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    margin-left: 4px;
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChartHeading = styled.div`
  background: ${({ theme }) => theme.colors.gray['900']};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const ChartContainer = styled.div`
  border-radius: 16px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray['800']};
  background: ${({ theme }) => theme.colors.gray['950']};
  padding: 24px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    height: 600px;
  }
`;
