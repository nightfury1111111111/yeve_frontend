import { styled } from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  margin-top: 30px;

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
`;
