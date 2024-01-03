import { styled } from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex: 1;
  color: ${({ theme }) => theme.colors.gray['50']};
  flex: 1;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const ChildMenuItem = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.gray['50']};
  text-wrap: nowrap;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const ChildMenu = styled.div`
  display: none;
  position: absolute;
  border-radius: 4px;
  top: calc(100% + 24px);
  left: 0;
  width: fit-content;
  min-width: 120px;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.gray['950']};
  transition: all ease-in 1s;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -30px;
    width: 70%;
    height: 32px;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.gray['900']};
    }

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.gray['50']} !important;
      }
    }
  }

  .active {
    > div {
      color: ${({ theme }) => theme.colors.purple['500']};
    }

    > div > svg {
      path {
        stroke: ${({ theme }) => theme.colors.purple['500']} !important;
      }
    }
  }

  .disabled {
    background: ${({ theme }) => theme.colors.gray['900']} !important;

    > div {
      color: ${({ theme }) => theme.colors.gray['750']} !important;
    }

    > div > svg {
      path {
        stroke: ${({ theme }) => theme.colors.gray['750']} !important;
      }
    }
  }
`;

export const MenuItemText = styled.span`
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray['50']};
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  padding: 16px;

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

  &:hover {
    background: ${({ theme }) => theme.colors.gray['950']};

    > svg {
      transform: rotate(180deg);
    }

    ${ChildMenu} {
      display: flex;
    }
  }

  ${MenuIcon} {
    display: flex;
    > svg > path {
      stroke: ${({ theme }) => theme.colors.gray['50']} !important;
    }
  }

  > svg {
    transition: all ease-in 0.3s;
    width: 12px;
    > path {
      stroke: ${({ theme }) => theme.colors.gray['50']} !important;
    }
  }
`;
