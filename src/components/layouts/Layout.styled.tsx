import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray['1000']};
  background-image: url(${({ theme }) => theme.images.body});
  background-size: cover;
  background-position: center;
`;
