import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemText,
  Rectangle,
  SubMenu,
  SubMenuItem,
} from './FooterMenu.styled';
import headerMenus from '@src/constants/header';
import { useState } from 'react';

export default function FooterMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [subMenu, setSubMenu] = useState<Record<string, any>[]>([]);

  const isActiveLink = (menu: Record<string, any>) => {
    if (menu.children) {
      const item = menu.children.find(
        (item: Record<string, any>) => item.route === pathname
      );
      return !!item;
    }
    return pathname === menu.route;
  };

  const handleSetSubMenu = (items: Record<string, any>[]) => {
    if (subMenu.length === 0) {
      setSubMenu(items);
    } else {
      if (subMenu[0].route === items[0].route) {
        setSubMenu([]);
      } else {
        setSubMenu(items);
      }
    }
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    setSubMenu([]);
  };

  return (
    <Container>
      <Menu>
        {subMenu.length > 0 && (
          <SubMenu>
            {subMenu.map((menu, index) => (
              <SubMenuItem
                key={index}
                className={isActiveLink(menu) ? 'active' : ''}
                onClick={() => handleNavigate(menu.route)}
              >
                {menu.icon}
                <span>{menu.title}</span>
              </SubMenuItem>
            ))}
          </SubMenu>
        )}

        {headerMenus.map((menu: Record<string, any>, index) => (
          <MenuItem
            key={index}
            className={isActiveLink(menu) ? 'active first' : 'first'}
            onClick={() => handleSetSubMenu(menu.children)}
          >
            <>
              <MenuIcon>{menu.icon}</MenuIcon>
              <MenuItemText>{menu.title}</MenuItemText>
            </>
          </MenuItem>
        ))}
      </Menu>
      <Rectangle>
        <div></div>
      </Rectangle>
    </Container>
  );
}
