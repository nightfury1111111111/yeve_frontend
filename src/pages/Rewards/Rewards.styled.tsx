import { styled } from 'styled-components';

export const PageContainer = styled.div`
  margin-top: 80px;
  padding: 0 16px;
  
  @media (max-width: 768px) {
    margin-top: 24px;
    /* background-color: ${({ theme }) => theme.colors.gray['950']}; */
    padding-bottom: 12px;
  }
`;
