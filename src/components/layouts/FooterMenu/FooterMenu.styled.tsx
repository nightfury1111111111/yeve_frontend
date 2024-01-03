import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(100%);
  }
`;

export const SubMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  border-radius: 4px;

  > span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray['0']};
  }

  > svg > path {
    stroke: ${({ theme }) => theme.colors.gray['50']} !important;
  }

  &.active {
    background: ${({ theme }) => theme.colors.gray['950']};
  }
`;

export const SubMenu = styled.div`
  position: absolute;
  bottom: 100%;
  width: 100vw;
  padding: 12px;
  background: ${({ theme }) => theme.colors.gray['900']};
  transform-origin: 0 100%;
  transition: transform 0.5s;
  animation: ${scale} 0.3s ease;
`;

export const Rectangle = styled.div`
  margin: 20px 0 8px 0;
  display: flex;
  justify-content: center;

  > div {
    border-radius: 100px;
    width: 134px;
    height: 5px;
    background: ${({ theme }) => theme.colors.gray['0']};
  }
`;

export const MenuItemText = styled.span`
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray['50']};
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;

  > svg > path {
    stroke: ${({ theme }) => theme.colors.gray['50']} !important;
  }
`;

export const MenuItem = styled.div`
  flex: 1;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.first {
    margin-left: 16px;
  }

  &:last-child {
    margin-right: 16px;
  }

  &.active {
    > ${MenuIcon} {
      display: flex;
      > svg > path {
        stroke: ${({ theme }) => theme.colors.purple['500']} !important;
      }
    }

    ${MenuItemText} {
      color: ${({ theme }) => theme.colors.purple['500']} !important;
    }

    > svg > path {
      stroke: ${({ theme }) => theme.colors.purple['500']} !important;
    }
  }
`;

export const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: fit-content;
  display: none;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.gray['950']};

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
