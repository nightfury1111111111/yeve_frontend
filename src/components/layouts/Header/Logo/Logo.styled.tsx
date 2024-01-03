import { styled } from 'styled-components';

export const Information = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray['0']};
  padding: 0 12px;

  > span {
    color: ${({ theme }) => theme.colors.success['500']};
    margin-left: 8px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
