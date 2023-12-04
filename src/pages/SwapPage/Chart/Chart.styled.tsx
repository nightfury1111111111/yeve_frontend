import { styled } from 'styled-components';

export const ChartContainer = styled.div`
  border-radius: 16px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray['750']};
  background: ${({ theme }) => theme.colors.gray['850']};
  padding: 24px;
`;
