import { styled } from 'styled-components';

export const PageContainer = styled.div`
  margin-top: 80px;
`;
export const SmallText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray['250']};
  margin-top: 5px;
`;
export const NormalText = styled.div`
  font-size: 14px;
`;
export const EnterVote = styled.div`
  color: ${({ theme }) => theme.colors.gray['250']};
  background-color: ${({ theme }) => theme.colors.gray['950']};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  padding: 0 12px;
  input {
    background: transparent;
    border: none;
    height: 40px;
    font-size: 14px;
    width: 50px;
    color: ${({ theme }) => theme.colors.gray['250']};
  }
  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  button {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.purple['500']};
    border: none;
    height: 30px;
    color: white;
  }
`;

export const EnterVoteWrap = styled.div`
  display: flex;
  align-items: center;
`;
