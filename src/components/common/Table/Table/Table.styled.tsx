import { styled } from 'styled-components';
export const TableWrapper = styled.div`
  @media (max-width: 1200px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    /* background: ${({ theme }) => theme.colors.gray['950']}; */
    margin: 0 -12px;
  }
`;
export const Status = styled.div`
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 4px 8px;
    border: 1px solid ${({ theme }) => theme.colors.success['500']};
    border-radius: 4px;
    min-width: 40px;

    > span {
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.success['500']};
    }

    > svg {
      width: 12px;
      height: 12px;
      cursor: pointer;

      > path {
        stroke: ${({ theme }) => theme.colors.success['500']} !important;
      }
    }
  }
`;

export const Type = styled.div`
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    background: ${({ theme }) => theme.colors.gray['950']};
    border-radius: 4px;

    > span {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.gray['50']};
      text-transform: uppercase;
    }

    > svg {
      width: 12px;
      height: 12px;
      cursor: pointer;

      > path {
        stroke: ${({ theme }) => theme.colors.gray['50']} !important;
      }
    }
  }
`;

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

  > div {
    display: flex;
    align-items: center;
    gap: 6px;
    background: ${({ theme }) => theme.colors.gray['850']};
    padding: 4px 8px;
    border-radius: 4px;

    > span {
      color: ${({ theme }) => theme.colors.gray['50']};
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }

    > svg {
      width: 12px;
      height: 12px;
      cursor: pointer;

      > path {
        stroke: ${({ theme }) => theme.colors.gray['50']} !important;
      }
    }
  }
`;

export const PairInfoLabel = styled.div<{ mt?: string }>`
  background: ${({ theme }) => theme.colors.gray['850']};
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.gray['50']};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  margin-top: ${(p) => p.mt};
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
  padding: 0 12px;
  border-spacing: unset;
  overflow: auto;
  background: ${({ theme }) => theme.colors.gray['950']};

  @media (max-width: 1200px) {
    /* width: 900px; */
    display: table;
  }
  thead {
    tr {
      th {
        text-align: left;
        padding: 10px 0;
        cursor: pointer;

        @media (max-width: 1100px) {
          padding-right: 40px;
        }

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

      td {
        border-bottom: 8px solid ${({ theme }) => theme.colors.gray['950']};

        @media (max-width: 1100px) {
          padding-right: 40px;
        }

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
            gap: 12px;
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
            text-wrap: nowrap;

            border: 2px solid ${({ theme }) => theme.colors.purple['500']};

            &:hover {
              background: ${({ theme }) => theme.colors.purple['600']};
              border-color: ${({ theme }) => theme.colors.purple['300']};
            }

            &.disable {
              background: ${({ theme }) => theme.colors.gray['850']};
              border-color: ${({ theme }) => theme.colors.gray['850']};

              &:hover {
                background: ${({ theme }) => theme.colors.gray['800']};
                border-color: ${({ theme }) => theme.colors.gray['700']};
              }
            }
          }
        }
      }
    }
  }
`;

export const StatusError = styled.div`
  align-items: center;

  > div {
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 4px 8px;
    border: 1px solid ${({ theme }) => theme.colors.alert['500']};
    border-radius: 4px;

    > span {
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.alert['500']};
    }

    > svg {
      width: 12px;
      height: 12px;
      cursor: pointer;

      > path {
        stroke: ${({ theme }) => theme.colors.alert['500']} !important;
      }
    }
  }
`;
