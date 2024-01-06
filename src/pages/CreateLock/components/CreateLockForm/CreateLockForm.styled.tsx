import { styled } from 'styled-components';
import { Button } from '@src/components/common/Button';

export const CreateLockButton = styled(Button)`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  padding: 12px 32px;
  margin-top: 18px;
`;
export const DefaultButton = styled(Button)<{ w?: string }>`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  padding: 12px 24px;
  margin-top: 12px;
  background: ${({ theme }) => theme.colors.gray['900']};
  width: ${(p) => p.w || 'auto'};
  color: ${({ theme }) => theme.colors.gray['250']}!important;
`;

export const SwapControlItem = styled.div`
  padding: 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.gray['250']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg path {
    stroke: ${({ theme }) => theme.colors.gray['50']} !important;
  }
`;

export const AmountLockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;
export const SwapTabItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  padding: 6px 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray['250']}!important;
  border-radius: 4px;
  transition: all ease-in 0.2s;
  background: ${({ theme }) => theme.colors.gray['850']};

  &.active {
    background: ${({ theme }) => theme.colors.purple['500']};
  }
`;

export const SwapTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const SwapControlList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SwapHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SwapContainer = styled.div`
  border-radius: 16px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray['800']};
  background: ${({ theme }) => theme.colors.gray['950']};
  padding: 24px;
  width: 55%;
`;

export const Title = styled.div`
  font-size: 36px;
`;
