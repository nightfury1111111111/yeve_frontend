import { styled } from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.purple['500']};
  color: ${({ theme }) => theme.colors.gray['50']};
  border-radius: 4px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
`;
