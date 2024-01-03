import { styled } from 'styled-components';

export const Container = styled.div`
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray['1000']};

  @media screen and (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.gray['950']};
  }
`;

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1376px;

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;
