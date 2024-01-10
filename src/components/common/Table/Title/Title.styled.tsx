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

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    justify-content: space-between;

    @media (max-width: 768px) {
      align-items: stretch;
    }

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

        @media (max-width: 768px) {
          width: 100%;
          flex-direction: column;
          gap: 8px;
        }

        > label {
          > span {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: ${({ theme }) => theme.colors.gray['200']};
          }
        }

        > div {
          font-size: 18px;
          font-weight: 600;
          line-height: 28px;
          color: ${({ theme }) => theme.colors.gray['50']};
        }
      }

      > label {
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
      }

      > div {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.purple['50']};
      }
    }
  }

  @media (max-width: 768px) {
    align-items: baseline;
    flex-direction: column;
    gap: 12px;

    > span {
      font-size: 24px;
      line-height: 32px;
    }

    > div {
      width: 100%;

      > button {
        display: block;
        min-height: 56px;
        border: 2px solid ${({ theme }) => theme.colors.purple['500']};

        &:hover {
          background: ${({ theme }) => theme.colors.purple['600']};
          border-color: ${({ theme }) => theme.colors.purple['300']};
        }
      }

      > div {
        flex: 1;
      }
    }

    > button {
      width: 100%;
      padding: 10px;
    }
  }

  @media (max-width: 740px) {
    > div {
      > div {
        flex-direction: column;

        > div {
          text-align: center;
        }
      }

      > button {
        min-height: 84px;

        @media (max-width: 533px) {
          min-height: 104px;
        }
      }
    }
  }
`;
