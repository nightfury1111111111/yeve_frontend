import { styled } from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  color: ${({ theme }) => theme.colors.gray['50']};
`;

export const ChildMenu = styled.div`
  display: none;
  position: absolute;
  border-radius: 4px;
  top: calc(100% + 24px);
  left: 0;
  width: fit-content;
  flex-direction: column;
  padding: 12px;
  background: ${({ theme }) => theme.colors.gray['850']};
  transition: all ease-in 1s;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -30px;
    width: 70%;
    height: 32px;
  }
`;

export const ChildMenuItem = styled.div`
  padding: 8px 12px;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray['50']};
  border-radius: 4px;
  text-wrap: nowrap;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    background: ${({ theme }) => theme.colors.gray['800']};
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  padding: 16px;

  &:last-child {
    padding: 0;
    > a {
      display: block;
      padding: 16px;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray['800']};

    > img {
      transform: rotate(0);
    }

    ${ChildMenu} {
      display: flex;
    }
  }
`;

export const MenuItemText = styled.span`
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray['50']};
`;

export const MenuItemIcon = styled.img`
  transition: all ease-in 0.3s;
  width: 12px;
  transform: rotate(180deg);
`;
