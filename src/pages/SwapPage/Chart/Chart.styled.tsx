import { styled } from 'styled-components';

export const ChartContainer = styled.div`
  border-radius: 16px;
  border: 2px solid #242424;
  background: ${({ theme }) => theme.colors.swap.background};
  padding: 24px;
`;
