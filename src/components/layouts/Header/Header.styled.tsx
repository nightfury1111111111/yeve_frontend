import { styled } from 'styled-components';

export const Container = styled.div`
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
`;

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1376px;
`;

export const Logo = styled.div`
  flex: 1;
  text-align: center;
  & > a {
    text-decoration: none;
    font-size: 32px;
    font-weight: 700;
  }
`;
