import { Link } from 'react-router-dom';
import {
  ChildMenu,
  ChildMenuItem,
  MenuContainer,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
} from './Menu.styled';

type MenuProps = {
  themeConfig: Record<string, any>;
};

export default function Menu({ themeConfig }: MenuProps) {
  return (
    <MenuContainer>
      <MenuItem>
        <MenuItemText>Trade</MenuItemText>
        <MenuItemIcon src={themeConfig.images.upIcon} />
        <ChildMenu>
          <Link to="/swap">
            <ChildMenuItem>Swap</ChildMenuItem>
          </Link>
          <Link to="/add-liquidity">
            <ChildMenuItem>Add Liquidity</ChildMenuItem>
          </Link>
          <Link to="/convert">
            <ChildMenuItem>Convert</ChildMenuItem>
          </Link>
        </ChildMenu>
      </MenuItem>
      <MenuItem>
        <MenuItemText>Earn</MenuItemText>
        <MenuItemIcon src={themeConfig.images.upIcon} />
        <ChildMenu>
          <Link to="/fixed-earn">
            <ChildMenuItem>Fixed Earn</ChildMenuItem>
          </Link>
          <Link to="/flexible-earn">
            <ChildMenuItem>Flexible Earn</ChildMenuItem>
          </Link>
        </ChildMenu>
      </MenuItem>
      <MenuItem>
        <Link to="/launchpad">
          <MenuItemText>Launchpad</MenuItemText>
        </Link>
      </MenuItem>
    </MenuContainer>
  );
}
