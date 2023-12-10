import { styled } from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.gray['0']};
  }

  > div {
    background: ${({ theme }) => theme.colors.gray['800']};
    color: ${({ theme }) => theme.colors.gray['200']};
    padding: 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;

    > span {
      color: ${({ theme }) => theme.colors.purple['500']};
      margin-right: 8px;
      font-weight: 600;
      line-height: 28px;
    }
  }
`;
