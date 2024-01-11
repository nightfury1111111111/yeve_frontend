import { Button } from '@src/components/common/Button';
import { styled } from 'styled-components';

export const PageContainer = styled.div`
  margin-top: 80px;
  padding: 0 16px;
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

export const VotingInfo = styled.div`
  position: fixed;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
  width: 360px;
  padding: 6px 16px 16px 24px;
  border-radius: 4px;
  background: var(--Grayscale-850, #262626);
  background-color: ${({ theme }) => theme.colors.gray['850']};
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-top: 10px;
  }
  button {
    font-size: 14px;
  }

  @media screen and (max-width: 960px) {
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const DefaultButton = styled(Button)<{ w?: string }>`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  padding: 12px 24px;
  margin-top: 12px;
  background: ${({ theme }) => theme.colors.gray['800']};
  margin-right: 10px;
  width: ${(p) => p.w || 'auto'};
  color: ${({ theme }) => theme.colors.gray['250']}!important;
`;

export const VotingPower = styled.div`
  color: ${({ theme }) => theme.colors.success['200']}!important;
  font-weight: 600;
`;

export const Status = styled.div<{ yes?: boolean }>`
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  background: ${({ theme, yes }) =>
    yes ? theme.colors.success['700'] : theme.colors.alert['700']};
`;
