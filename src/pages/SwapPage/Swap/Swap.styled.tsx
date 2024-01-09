import { styled } from 'styled-components';
import { Button } from '@src/components/common/Button';

export const SwapButton = styled(Button)`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  padding: 12px 32px;
  margin-top: 12px;
  border: 2px solid ${({ theme }) => theme.colors.purple['500']};

  &:hover {
    background: ${({ theme }) => theme.colors.purple['600']};
    border-color: ${({ theme }) => theme.colors.purple['300']};
  }
`;

export const SwapControlItem = styled.div`
  padding: 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.gray['900']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg path {
    stroke: ${({ theme }) => theme.colors.gray['50']} !important;
  }
`;

export const SwapControlList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SwapTabItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray['50']};
  border-radius: 4px;
  transition: all ease-in 0.2s;

  &.active {
    background: ${({ theme }) => theme.colors.purple['500']};
  }
`;

export const SwapTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
