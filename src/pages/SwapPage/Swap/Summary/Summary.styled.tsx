import { styled } from 'styled-components';

  export const SummaryItemPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > span {
      color: ${({ theme }) => theme.colors.success['500']};
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple['450']};
      cursor: pointer;
    }
  `;

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > label {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray['200']};
  }

  > span {
    color: ${({ theme }) => theme.colors.gray['50']};
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
  }

  > div {
    color: ${({ theme }) => theme.colors.alert['500']};
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
  }
`;

export const SummaryItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SummaryContainer = styled.div`
  margin-top: 12px;
  background: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
  padding: 16px;
`;
