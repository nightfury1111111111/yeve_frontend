import { styled } from 'styled-components';

export const TableContainer = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.gray['950']};
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray['800']};
  border-radius: 8px;
  /* max-width: 1200px; */
  margin: auto;
  @media (max-width: 1200px) {
    width: 92%;
  }

  @media (max-width: 768px) {
    padding: 0;
    border: none;
    margin: unset;
    width: 100%;
    background: unset;
  }
`;
