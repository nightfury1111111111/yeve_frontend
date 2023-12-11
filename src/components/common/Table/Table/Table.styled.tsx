import { styled } from 'styled-components';

export const Info = styled.div`
  flex-direction: column;
  justify-content: center;

  > h4 {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 0;
    margin: 0;
  }

  > div {
    > span {
      color: ${({ theme }) => theme.colors.gray['200']};
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
    }

    > label {
      color: ${({ theme }) => theme.colors.gray['500']};
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      margin-left: 4px;
    }
  }
`;

export const AvgApr = styled.div`
  align-items: center;
  gap: 6px;

  > span {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }

  > svg {
    width: 12px;
    height: 12px;
    cursor: pointer;

    > path {
      stroke: ${({ theme }) => theme.colors.gray['0']} !important;
    }
  }
`;

export const PairInfo = styled.div`
  > div {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }

  > span {
    color: ${({ theme }) => theme.colors.gray['200']};
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  }
`;

export const PairImageContainer = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 9999px;

    &:last-child {
      margin-left: -8px;
    }
  }
`;

export const PairElement = styled.div`
  align-items: center;
  gap: 12px;
  padding-left: 16px !important;
`;

export const TableContainer = styled.table`
  width: 100%;
  margin-top: 30px;
  border-spacing: unset;
  border-collapse: collapse;

  thead {
    tr {
      th {
        text-align: left;
        padding: 10px 0;
        cursor: pointer;

        &:first-child {
          padding-left: 16px;
        }

        &:last-child {
          padding-right: 16px;
        }

        > div {
          display: flex;
          align-items: center;
          gap: 6px;
        }
      }
    }
  }

  tbody {
    tr {
      background: ${({ theme }) => theme.colors.gray['900']};
      border-bottom: 8px solid ${({ theme }) => theme.colors.gray['950']};

      td {
        &:first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;

          > div {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }
        }

        &:last-child {
          padding-right: 16px;
          width: 1%;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;

          > div {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }

        }

        > div {
          padding: 12px 0;
          min-height: 96px;
          display: flex;

          &.btn-wrap {
            align-items: center;
            justify-content: flex-end;
          }

          > button {
            background: ${({ theme }) => theme.colors.purple['500']};
            color: ${({ theme }) => theme.colors.purple['50']};
            padding: 12px 24px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            display: flex;
            border-radius: 4px;
            outline: none;
            border: none;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            height: fit-content;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
