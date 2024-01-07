import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import headerMenus from '@src/constants/header';
import { Link, useLocation } from 'react-router-dom';
import {
  ChildMenu,
  ChildMenuItem,
  MenuContainer,
  MenuIcon,
  MenuItem,
  MenuItemText,
} from './Menu.styled';
import Account from '../Account';
import { ThemeContext } from '@src/context/useThemeContext';
import { useContext } from 'react';
export default function Menu() {
  const { pathname } = useLocation();

  const isActiveLink = (menu: Record<string, any>) => {
    if (menu.children) {
      if (
        menu.external_routes &&
        menu.external_routes.find(
          (item: Record<string, any>) => item.route === pathname
        )
      )
        return true;

      const item = menu.children.find(
        (item: Record<string, any>) => item.route === pathname
      );
      return !!item;
    }
    return pathname === menu.route;
  };
  const { themeConfig } = useContext(ThemeContext);

  return (
    <MenuContainer>
      {headerMenus.map((menu: Record<string, any>, index) => (
        <MenuItem key={index} className={isActiveLink(menu) ? 'active' : ''}>
          {menu.route ? (
            <Link to={menu.route}>
              <MenuIcon>{menu.icon}</MenuIcon>
              <MenuItemText>{menu.title}</MenuItemText>
            </Link>
          ) : (
            <>
              <MenuIcon>{menu.icon}</MenuIcon>
              <MenuItemText>{menu.title}</MenuItemText>
              <DownIcon />
              <ChildMenu>
                {menu.children?.map((child: Record<string, any>, i: number) => (
                  <Link
                    to={child.disabled ? '#' : child.route}
                    key={i}
                    className={`${pathname === child.route ? 'active' : ''} ${
                      child.disabled ? 'disabled' : ''
                    }`}
                  >
                    <MenuIcon>{child.icon}</MenuIcon>
                    <ChildMenuItem>{child.title}</ChildMenuItem>
                  </Link>
                ))}
              </ChildMenu>
            </>
          )}
        </MenuItem>
      ))}
      <Account themeConfig={themeConfig} />
    </MenuContainer>
  );
}
