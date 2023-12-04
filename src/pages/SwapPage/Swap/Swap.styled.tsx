import { styled } from 'styled-components';

export const SwapButton = styled.button`
  background: ${({ theme }) => theme.colors.purple['450']};
  color: ${({ theme }) => theme.colors.swap.text};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  width: 100%;
  padding: 12px 32px;
  margin-top: 12px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SwapControlItem = styled.div`
  padding: 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.gray['800']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg > path {
    fill: ${({ theme }) => theme.colors.swap.icon};
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
  color: ${({ theme }) => theme.colors.swap.text};
  border-radius: 4px;
  transition: all ease-in 0.2s;

  &.active {
    background: ${({ theme }) => theme.colors.gray['800']};
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
  border-color: ${({ theme }) => theme.colors.gray['750']};
  background: ${({ theme }) => theme.colors.gray['850']};
  padding: 24px;
`;
