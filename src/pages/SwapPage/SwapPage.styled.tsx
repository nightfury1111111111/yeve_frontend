import { styled } from 'styled-components';

export const SwapPageContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
  grid-auto-rows: auto;
  padding: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
