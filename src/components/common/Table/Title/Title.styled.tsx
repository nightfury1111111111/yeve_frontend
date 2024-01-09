import { styled } from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: baseline;
    flex-direction: column;
    gap: 12px;

    > span {
      font-size: 24px;
      line-height: 32px;
    }

    > div {
      > button {
        display: block;
      }
    }
  }

  > span {
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.gray['0']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: space-between;

    > button {
      display: none;
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

      > .reward-title {
        display: flex;
        align-items: center;
        gap: 8px;

        > span {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: ${({ theme }) => theme.colors.gray['200']};
        }

        > div {
          font-size: 18px;
          font-weight: 600;
          line-height: 28px;
          color: ${({ theme }) => theme.colors.gray['50']};
        }
      }

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
  }
`;
