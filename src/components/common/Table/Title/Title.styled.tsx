import { styled } from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.gray['0']};
  }

  > div {
    background: ${({ theme }) => theme.colors.purple['900']};
    border: 2px solid ${({ theme }) => theme.colors.purple['500']};
    color: ${({ theme }) => theme.colors.gray['200']};
    padding: 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;

    > svg > path {
      stroke: ${({ theme }) => theme.colors.purple['50']} !important;
    }

    > span {
      color: ${({ theme }) => theme.colors.purple['500']};
      font-weight: 600;
      line-height: 28px;
      font-size: 18px;
    }

    > div {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.purple['50']};
    }
  }
`;
